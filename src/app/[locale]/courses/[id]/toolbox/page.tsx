import { Tool } from '@/components/course/tool';
import { ToolsList } from '@/components/course/toolsList';

export default function CourseToolbox() {
  // TODO: fetch tools from database
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl text-base-content opacity-60 py-8">Toolbox</h1>
      <p className="text-base-content opacity-60 pb-8 w-1/2">
        At the end of each module, you can write down something helpful
        you&apos;ve learned. This is where those “tools” will appear. You can
        also add new tools at any time.
      </p>
      <ToolsList
        tools={[
          <Tool
            key={0}
            title="Don't be sad"
            description="Just don't do it. It's that easy!"
            date={'26/7/2023'}
          />,
        ]}
      />
    </div>
  );
}
