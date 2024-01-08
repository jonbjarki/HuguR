import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export async function getStaticPaths({
  params,
}: {
  params: { module: string };
}) {
  const files = fs.readdirSync(`@/modules/${params.module}`);
  return {
    paths: files.map((file) => ({
      params: {
        slug: file,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const unit = context.params?.unit;

  const source = fs.readFileSync(
    path.join('database', unit as string, (unit + '.mdx') as string),
    'utf8',
  );

  const mdxSource = await serialize(source);
  return {
    props: {
      source: mdxSource,
    },
  };
}

function UnitPage({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
}
