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
import { useMDXComponents } from '../../../mdx-components';

export default async function MdxPage({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  const components = {
    Divider,
    Exercise1_7,
    FullWidthImage,
    TextareaInput,
    UnitNavButtons,
    UnitTask,
    SmallText,
  };
  return (
    <MDXProvider components={useMDXComponents}>
      {/* TODO: Make styles actually work*/}
      <MDXRemote {...source} components={components} />
    </MDXProvider>
  );
}
