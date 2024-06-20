import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import MdxPage from '@/components/markdown/MdxPage';
import { serialize } from 'next-mdx-remote/serialize';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import fs from 'fs';
import { cookies } from 'next/headers';
import UnitNavButtons from '@/components/unit/UnitNavButtons';

export default async function UnitPage(props) {
  const data = await getData(props.params.module);
  const source = await getMdxSource(data, props.params.unit);
  const nextPrev = getNextPrevUnitIds(data.units, props.params.unit);
  const nextUrl = getUnitUrl(
    props.params.id,
    props.params.module,
    nextPrev.next,
  );
  const prevUrl = getUnitUrl(
    props.params.id,
    props.params.module,
    nextPrev.prev,
  );
  return (
    <div>
      <MdxPage source={source} />
      <UnitNavButtons nextUrl={nextUrl} prevUrl={prevUrl} />
    </div>
  );
}

async function getData(moduleId) {
  const supabase = createServerComponentClient({ cookies });

  const { data: moduleData, error: moduleError } = await supabase
    .from('modules')
    .select('directory')
    .eq('id', moduleId)
    .limit(1)
    .single();

  const { data: unitData, error: unitError } = await supabase
    .from('units')
    .select('id, directory')
    .eq('module_id', moduleId)
    .order('unit_order');

  return { module: moduleData, units: unitData };
}

async function getMdxSource(
  data: {
    module;
    units;
  },
  unitId,
) {
  const unit = data.units?.find((unit) => {
    return unit.id == parseInt(unitId);
  });
  const directory = `public/modules/${data.module.directory}/${unit.directory}`;

  const file = fs.readFileSync(`${directory}/page.mdx`);

  const source = await serialize(file, {
    parseFrontmatter: false,
    mdxOptions: { development: process.env.NODE_ENV === 'development' },
  });

  return source;
}

function getNextPrevUnitIds(units, unitId) {
  const i = units.findIndex((unit) => {
    return unit.id == parseInt(unitId);
  });
  const prevUnit = i > 0 ? units[i - 1] : null;
  const nextUnit = i < units.length ? units[i + 1] : null;
  return {
    prev: prevUnit?.id,
    next: nextUnit?.id,
  };
}

function getUnitUrl(courseId, moduleId, unitId) {
  if (!unitId) return undefined;
  return `/courses/${courseId}/${moduleId}/${unitId}`;
}
