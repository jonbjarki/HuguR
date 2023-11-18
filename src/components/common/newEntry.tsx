import { mdiClose, mdiArrowRight, mdiArrowLeft, mdiCheck } from '@mdi/js';
import { ReactNode, useState } from 'react';
import { IconButton } from '../buttons/IconButton';

export enum newEntryVariants {
  Start,
  Middle,
  End,
  Single,
}

type Requirements = {
  [key: number]: boolean;
};

export interface newEntryProps {
  title: string;
  stages: Array<ReactNode>;
  onClose: React.MouseEventHandler;
  onFinish: React.MouseEventHandler;
  stageRequirements?: Requirements;
}

export function NewEntry({
  title,
  stages,
  onClose,
  onFinish,
  stageRequirements = {}, // An object where the key is the stage number and the value is a boolean depicting if its correctly filled out
}: newEntryProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [error, setError] = useState('');
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
                if (stageRequirements[currentStage]) {
                  setCurrentStage(currentStage + 1);
                  setError('');
                } else {
                  setError('This field is required!');
                }
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
                setError('');
              }}
              iconPath={mdiArrowLeft}
            />
            <IconButton
              onClick={() => {
                if (stageRequirements[currentStage]) {
                  setCurrentStage(currentStage + 1);
                  setError('');
                } else {
                  setError('This field is required!');
                }
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
                setError('');
              }}
              iconPath={mdiArrowLeft}
            />
            <IconButton
              onClick={(e) => {
                if (stageRequirements[currentStage]) {
                  onFinish(e);
                  setError('');
                } else setError('This field is required!');
              }}
              iconPath={mdiCheck}
            />
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
    <div className="border border-base-content rounded-md min-w-[20rem] p-4 m-8">
      <div className="relative w-full">
        {/* Close/cancel button */}
        <div className="absolute top-0 right-0">
          <IconButton onClick={onClose} iconPath={mdiClose} btnSize="sm" />
        </div>
        <h1 className="font-thin tracking-widest text-2xl text-center">
          {title}
        </h1>
        {/* Error Message that displays if field is required */}
        {error && (
          <div className="alert alert-error my-2 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
      <div className="m-4 text-center">{stages[currentStage]}</div>
      <div className="flex flex-col items-center w-full">
        {navButtons()}
        <p className="text-base-content opacity-50 mt-4 mb-2">{stageText}</p>
      </div>
    </div>
  );
}
