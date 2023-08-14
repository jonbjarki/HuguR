import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import UnitTask from '@/components/unit/UnitTask';
import { cookies } from 'next/headers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const ResponsiveImage = (props) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
);

const components = {
  Image: ResponsiveImage,
  h1: (props) => <h1 className="text-lg font-bold text-primary" {...props} />,
};

export default async function UnitPage({
  params,
}: {
  params: { id: string; unit: string; locale: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  let markdown: string;

  // Unit metadata
  const { data: unit } = await supabase
    .from('units')
    .select('*')
    .eq('id', params.unit)
    .single();

  // Unit markdown
  const {
    data: { publicUrl },
  } = supabase.storage
    .from('units')
    .getPublicUrl(`${params.unit}-${params.locale}.mdx`);

  markdown = await fetch(publicUrl).then(async (res) => {
    if (!res.ok) return 'Failed to fetch markdown';
    else return await res.text();
  });

  return (
    <div className="flex w-screen h-full justify-center">
      {
        <div className="flex flex-col gap-8 mt-8 w-full place-items-center p-8">
          <h1 className="text-3xl font-bold">{unit.name[params.locale]}</h1>
          <MDXRemote source={markdown} components={components} />
          {unit.task && <UnitTask task={unit.task[params.locale]} />}
        </div>
      }
    </div>
  );
}
