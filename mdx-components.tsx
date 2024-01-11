import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import React from 'react';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

const br = () => <br />;

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    br,
    h1: (props) => (
      <h1
        className="text-4xl font-light tracking-tight text-center bg-primary bg-opacity-20 py-2 px-4 mb-6 mt-6"
        {...props}
      />
    ),
    h2: (props) => <h2 className="text-3xl font-bold mt-6 mb-4" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold mt-6" {...props} />,
    p: (props) => (
      <p
        className="text-lg my-1 font-serif flex-col md:flex-row flex justify-start items-center min-w-[50%]"
        {...props}
      />
    ),
    a: (props) => <a className="italic underline" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mb-4 ul" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside ol" {...props} />,
    li: (props) => <li className="text-lg li font-serif" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="text-base italic border-l-4 border-primary pl-4 bg-secondary bg-opacity-50 py-2 my-4"
        {...props}
      />
    ),
    img: (props) => <Image className="aspect-auto w-1/2" {...props} />,
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}
