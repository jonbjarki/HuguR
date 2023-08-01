import Image from 'next/image';

type Emotion = { emotion: string; intensity: number };

interface DiaryCardProps {
  mood: string;
  date: string;
  emotions: Emotion[];
  circumstance: string;
}

export default function DiaryCard({
  mood,
  date,
  emotions,
  circumstance,
}: DiaryCardProps) {
  return (
    <div className="indicator border border-black rounded-lg">
      <span className="indicator-item indicator-start badge bg-lm-rose-light py-5 px-2 rounded-lg">
        {date}
      </span>
      <div className="p-4 flex flex-row flex-nowrap gap-10 m-6 items-start">
        <figure className="relative w-16 h-16 self-center">
          <Image
            src={`/images/mood/mood-${mood}.svg`}
            fill
            alt="Image depicting mood"
          />
        </figure>
        <div>
          <p className="text-center text-xl text-primary-focus mb-2">
            Emotions
          </p>
          <ul className="flex flex-col gap-1">
            {emotions.map((emotion, index) => (
              <li key={index} className="flex justify-start items-center">
                <span className="w-16">{emotion.emotion}</span>
                <progress
                  className="progress progress-primary w-40 ml-3"
                  value={emotion.intensity}
                  max="10"
                ></progress>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-center text-xl text-primary-focus">Circumstance</p>
          {circumstance}
        </div>
      </div>
    </div>
  );
}
