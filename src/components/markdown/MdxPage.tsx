'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import Divider from '../unit/Divider';
import Exercise1_7 from '../unit/Exercise1_7';
import FullWidthImage from '../unit/FullWidthImage';
import TextareaInput from '../unit/TextareaInput';
import UnitNavButtons from '../unit/UnitNavButtons';
import UnitTask from '../unit/UnitTask';
import SmallText from './SmallText';
import { styleComponents } from './StyleComponents';

export default async function MdxPage({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  const unitComponents = {
    Divider,
    Exercise1_7,
    FullWidthImage,
    TextareaInput,
    UnitNavButtons,
    UnitTask,
    SmallText,
  };
  const components = { ...unitComponents, ...styleComponents };
  return (
    <MDXProvider components={styleComponents}>
      {/* TODO: Make styles actually work*/}
      <div>
        <MDXRemote {...source} components={components} />
      </div>
    </MDXProvider>
  );
}
