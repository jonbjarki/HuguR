/**
  Renders a text area input field with a title and a divider if title is provided.
  @param {string} title - Title of the text area input field.
  @returns The text area input field component.
 */

export default function TextareaInput({ title }: { title?: string }) {
  return (
    <div className="flex flex-col gap-8 mt-8 w-full place-items-center">
      { title ?
      <div className="divider mx-auto w-4/5">
        {title}</div> 
         : null }
      <textarea
        placeholder="Type here..."
        className="textarea textarea-bordered border-primary textarea-md w-full max-w-md"
      ></textarea>
    </div>
  );
}
