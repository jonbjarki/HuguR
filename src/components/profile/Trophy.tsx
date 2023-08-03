import Image from 'next/image';

export default function Trophy({ name, icon, date }) {
  return (
    <div className="flex flex-col m-2 place-items-center">
      <div
        className="rounded-full w-12 h-12 bg-yellow-100 drop-shadow-lg relative tooltip"
        data-tip={`Earned ${date}`}
      >
        <Image src={`/images/${icon}`} alt="badge 1" fill className="p-2" />
      </div>
      <label className="label label-text font-semibold">{name}</label>
    </div>
  );
}
