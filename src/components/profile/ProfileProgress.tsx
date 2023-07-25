export default function ProfileProgress({ title, progress }) {
  return (
    <div className="flex flex-row w-full place-items-center justify-start">
      <label
        htmlFor="p1"
        className="label label-text mx-4 w-full justify-center"
      >
        {title}
      </label>
      <progress
        id="p1"
        className="progress progress-primary w-full max-w-md h-4"
        value={progress}
        max="100"
      />
    </div>
  );
}
