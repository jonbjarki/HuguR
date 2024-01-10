import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import MdxPage from '@/components/markdown/MdxPage';
import { serialize } from 'next-mdx-remote/serialize';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import fs from 'fs';
import { cookies } from 'next/headers';

export default async function UnitPage(props) {
  const source = await getData(props.params.module, props.params.unit);
  return <MdxPage source={source} />;
}

export async function getData(moduleId, unitId) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from('modules')
    .select('directory')
    .eq('id', moduleId)
    .limit(1)
    .single();

  const directory = `public/modules/${data?.directory}`;

  const file = fs.readFileSync(`${directory}/1-welcome/page.mdx`); // TODO: get this dynamically

  const source = await serialize(file, {
    parseFrontmatter: false,
    mdxOptions: { development: process.env.NODE_ENV === 'development' },
  });

  return source;
}
