/**
 * Course progress section of profile page
 * Displays a milestone and a progress bar for that milestone
 */
export default function ProfileProgress({ title, progress, total }) {
  return (
    <div className="flex flex-row w-full place-items-center justify-start gap-4">
      <div className="w-full flex flex-wrap ">
        <label htmlFor="p1" className="label label-text w-full justify-end">
          {title}
        </label>
      </div>
      <div className="w-full">
        <progress
          id="p1"
          className="progress progress-primary w-full md:h-4 h-2"
          value={progress}
          max={total}
        />
      </div>
      <div className="w-full flex flex-wrap">
        <label htmlFor="p1" className="label label-text w-full justify-start">
          {progress}/{total}
        </label>
      </div>
    </div>
  );
}
