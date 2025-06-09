
"use client"

import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Image
        src="/modaqqeq.png"
        alt="Modaqqeq Project"
        width={600}
        height={600}
        priority
        className="shadow-lg rounded-md"
      />
    </div>
  );
}
