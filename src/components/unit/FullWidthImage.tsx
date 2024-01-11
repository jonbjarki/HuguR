/* eslint-disable @next/next/no-img-element */
// Disable warning to use next/image for markdown images as it's buggy

export default function FullWidthImage({
  image,
  alt,
}: {
  image: string;
  alt?: string;
}) {
  return <img className="aspect-auto w-full" src={image} alt={alt || ''} />;
}
