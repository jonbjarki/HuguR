import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-extrabold" {...props} />,
    h2: (props) => <h2 className="text-xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-lg font-bold" {...props} />,
    p: (props) => <p className="text-base" {...props} />,
    a: (props) => <a className="italic underline" {...props} />,
    ul: (props) => <ul className="list-disc list-inside" {...props} />,
    ol: (props) => <ol className="list-disc list-inside" {...props} />,
    li: (props) => <li className="text-base" {...props} />,
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}
