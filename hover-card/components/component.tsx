import Image from 'next/image';
import React from 'react';
import photo from '../public/premium_photo-1690407617542-2f210cf20d7e.avif';


const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function Component() {
  return (
    <div
      className={cn(
        'w-full rounded-2xl min-h-100 bg-neutral-100',
        'bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]',
        'bg-size-[10px_10px]',
        'p-8 flex flex-col items-center justify-center group'
      )}
    >
        <h2 className={cn('text-2xl font-bold mt-8 mb-2 text-amber-950 tracking-tight',"bg-clip-text text-shadow-md")}>Easily modify scale with Tailwind</h2>

        <p className="text-center max-w-md mb-8 bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400">Hover over the image to see the scale and rotation effects in action. This card demonstrates how Tailwind CSS can be used to create interactive hover effects. By combining utility classes, you can achieve complex transformations with ease. Experiment with the code to customize the effects to your liking.</p>
   
      <div
        className={cn(
          'size-60 bg-neutral-100 rounded-2xl border border-neutral-200',
          'bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]',
          'bg-size-[10px_10px] group-hover:border-neutral-300   ',
          'shadow-2xl relative perspective-distant group-hover:bg-neutral-200 transition-all duration-200'
        )}
      >

        <Image src={photo} alt="Placeholder" className={cn('h-full w-full object-cover object-top-left rounded-2xl transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20 ease-in-out duration-300 group-hover:scale-85  ',
            "group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0"
        )} />
      </div>
    </div>
  );
}
