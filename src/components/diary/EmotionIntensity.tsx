/**
 * A slider component for selecting the intensity of an emotion in a diary entry
 * Takes in emotions with their name and intensity and allows the user to adjust the intensity for each emotion
 */
import { Emotion } from './DiaryCard';

export default function EmotionIntensity({
  emotions,
  changeHandler,
}: {
  emotions?: Emotion[];
  changeHandler: Function;
}) {
  return (
    <div key="4" className="my-4 flex flex-col items-center justify-center">
      <p className="mb-4">How intense was each emotion?</p>
      <div className="flex flex-col gap-2">
        {emotions?.length === 0 && (
          <p className="text-sm text-gray-500 italic">No emotions selected</p>
        )}
        {/* Display each emotion with a slider input signifying intensity between 1 and 10 */}
        {emotions?.map((emotion, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 justify-end text-right"
          >
            <p>{emotion.name}</p>
            <input
              type="range"
              min="1"
              max="10"
              value={emotions[index].intensity}
              className="slider w-60"
              onChange={(e) => (
                (emotion.intensity = parseInt(e.target.value)),
                changeHandler(emotion)
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
