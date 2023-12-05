import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import UnitTask from '@/components/unit/UnitTask';
import { cookies } from 'next/headers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import CompleteButton from '@/components/buttons/CompleteButton';

const ResponsiveImage = (props) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
);

const fetchUnit = async (client, params) => {
  const { data: unit } = await client
    .from('units')
    .select('*')
    .eq('id', params.unit)
    .single();

  return unit;
};

const fetchMarkdown = async (client, params) => {
  const {
    data: { publicUrl },
  } = client.storage.from('units').getPublicUrl(`${params.unit}.mdx`);

  console.log(publicUrl);
  const res = await fetch(publicUrl);
  if (!res.ok) return 'Failed to fetch markdown';
  else return await res.text();
};

const components = {
  Image: ResponsiveImage,
  h1: (props) => <h1 className="text-lg font-bold text-primary" {...props} />,
};

export default async function UnitPage({
  params,
}: {
  params: { id: string; unit: number; locale: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const markdown: string = await fetchMarkdown(supabase, params);
  const unit = await fetchUnit(supabase, params);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex w-screen h-full justify-center">
      <div className="flex flex-col gap-8 mt-8 w-full place-items-center p-8">
        <h1 className="text-3xl font-bold">{unit.name![params.locale]}</h1>
        <MDXRemote source={markdown} components={components} />
        {unit.task && <UnitTask task={unit.task[params.locale]} />}
        {user && <CompleteButton unit_id={unit.id} />}
      </div>
    </div>
  );
}
