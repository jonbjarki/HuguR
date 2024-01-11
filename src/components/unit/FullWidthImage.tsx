/**
 * Renders a full-width image component.
 * @param image - The image source URL.
 * @param alt - The alternative text for the image.
 * @returns The rendered full-width image component.
 */
export default function FullWidthImage({image, alt}: {image: string, alt?: string}) {
    return (
        <img className='aspect-auto w-full' src={image} alt={alt} />
    )
}