'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfileImage() {
  const [imageNumber, setImageNumber] = useState(
    Math.floor(Math.random() * 3) + 1,
  );

  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500'];
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)],
  );

  const handlePress = () => {
    setImageNumber(Math.floor(Math.random() * 3) + 1);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div
      className={`rounded-full ${color} lg:w-36 lg:h-36 w-24 h-24 relative`}
      onClick={handlePress}
    >
      <Image
        src={`/images/avatars/${imageNumber}.svg`}
        alt="user icon"
        fill
        className="lg:p-4 md:p-2 p-1"
      />
    </div>
  );
}
