import Image from "next/image";

export function LineBreak() {
  return <br />;
}

export function Heading1(props) {
  return (
    <h1
      className="text-4xl font-light tracking-tight text-center bg-primary bg-opacity-20 py-2 px-4 mb-6 mt-6"
      {...props}
    />
  );
}

export function Heading2(props) {
  return <h2 className="text-3xl font-bold mt-6 mb-4" {...props} />;
}

export function Heading3(props) {
  return <h3 className="text-xl font-bold mt-6" {...props} />;
}

export function Paragraph(props) {
  return (
    <p
      className="text-lg my-1 font-serif flex-col md:flex-row flex justify-start items-center min-w-[50%]"
      {...props}
    />
  );
}

export function Link(props) {
  return <a className="italic underline" {...props} />;
}

export function UnorderedList(props) {
  return <ul className="list-disc list-inside mb-4 ul" {...props} />;
}

export function OrderedList(props) {
  return <ol className="list-decimal list-inside ol" {...props} />;
}

export function ListItem(props) {
  return <li className="text-lg li font-serif" {...props} />;
}

export function Blockquote(props) {
  return (
    <blockquote
      className="text-base italic border-l-4 border-primary pl-4 bg-secondary bg-opacity-50 py-2 my-4"
      {...props}
    />
  );
}

export function Image(props) {
  return <Image className="aspect-auto w-1/2" {...props} />;
}

export const styleComponents = {
  br: LineBreak,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Link,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  img: Image,
};
