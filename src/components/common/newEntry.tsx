import { mdiClose, mdiArrowRight, mdiArrowLeft, mdiCheck } from '@mdi/js';
import { ReactNode, useState } from 'react';
import { IconButton } from '../buttons/IconButton';

export enum newEntryVariants {
  Start,
  Middle,
  End,
  Single,
}

export interface newEntryProps {
  title: string;
  stages: Array<ReactNode>;
  onClose: React.MouseEventHandler;
  onFinish: React.MouseEventHandler;
}

export function NewEntry({ title, stages, onClose, onFinish }: newEntryProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const stageText = currentStage + 1 + '/' + stages.length;

  let variant = newEntryVariants.Middle;
  if (stages.length == 1) variant = newEntryVariants.Single;
  else if (currentStage == 0) variant = newEntryVariants.Start;
  else if (currentStage > 0 && currentStage < stages.length - 1)
    variant = newEntryVariants.Middle;
  else if (currentStage == stages.length - 1) variant = newEntryVariants.End;

  const navButtons = () => {
    switch (variant) {
      case newEntryVariants.Start:
        return (
          <div>
            <IconButton
              onClick={() => {
                setCurrentStage(currentStage + 1);
              }}
              iconPath={mdiArrowRight}
            />
          </div>
        );
      case newEntryVariants.Middle:
        return (
          <div className="flex gap-16">
            <IconButton
              onClick={() => {
                setCurrentStage(currentStage - 1);
              }}
              iconPath={mdiArrowLeft}
            />
            <IconButton
              onClick={() => {
                setCurrentStage(currentStage + 1);
              }}
              iconPath={mdiArrowRight}
            />
          </div>
        );
      case newEntryVariants.End:
        return (
          <div className="flex gap-16">
            <IconButton
              onClick={() => {
                setCurrentStage(currentStage - 1);
              }}
              iconPath={mdiArrowLeft}
            />
            <IconButton onClick={onFinish} iconPath={mdiCheck} />
          </div>
        );
      case newEntryVariants.Single:
      default:
        return (
          <div>
            <IconButton onClick={() => {}} iconPath={mdiCheck} />
          </div>
        );
    }
  };

  return (
    <div className="border border-base-content rounded-md p-4 m-8">
      <div className="relative w-full">
        {/* Close/cancel button */}
        <div className="absolute top-0 right-0">
          <IconButton onClick={onClose} iconPath={mdiClose} btnSize="sm" />
        </div>
        <h1 className="font-thin tracking-widest text-2xl text-center">
          {title}
        </h1>
      </div>
      <div className="m-4 text-center">{stages[currentStage]}</div>
      <div className="flex flex-col items-center w-full">
        {navButtons()}
        <p className="text-base-content opacity-50 mt-4 mb-2">{stageText}</p>
      </div>
    </div>
  );
}
