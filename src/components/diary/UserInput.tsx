/**
 * A base component for taking in input from the user for adding an entry to the diary
 */
export default function UserInput({
  caption,
  type,
  value,
  onChange,
  required,
}: {
  caption: string;
  type: string;
  value?: string | null;
  onChange: any;
  required?: boolean;
}) {
  return (
    <div className="my-4">
      <p className="mb-4 flex flex-col">
        {caption}
        {required && <span className="text-red-500">* required</span>}
      </p>
      <input
        type={type}
        className="mb-4 input input-bordered"
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
}
