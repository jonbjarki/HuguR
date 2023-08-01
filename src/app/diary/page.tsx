import DiaryCard from '@/components/diary/DiaryCard';

export default function Diary() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl m-10 font-medium text-center">Diary</h1>
      <DiaryCard
        date="01/08/2023"
        mood="5"
        emotions={[
          { emotion: 'Happy', intensity: 5 },
          { emotion: 'Sad', intensity: 7 },
        ]}
        circumstance="Listening to sad music"
      />
    </div>
  );
}
