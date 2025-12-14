import React, { useState } from 'react';

const images = [
  {
    src: '/IMG_6331.jpg',
    alt: 'Epoxy project 1',
    size: 'w-44 h-60 md:w-60 md:h-80',
    offset: '-translate-x-[90%] -translate-y-1/2',
    z: 'z-10',
    rotate: '-rotate-[10deg]',
    shadow: 'shadow-lg',
  },
  {
    src: '/greenmetallic.jpeg',
    alt: 'Epoxy project 2',
    size: 'w-52 h-72 md:w-72 md:h-96',
    offset: '-translate-x-1/2 -translate-y-1/2',
    z: 'z-20',
    rotate: 'rotate-[4deg]',
    shadow: 'shadow-2xl',
  },
  {
    src: '/IMG_2967.JPEG',
    alt: 'Epoxy project 3',
    size: 'w-40 h-56 md:w-56 md:h-72',
    offset: '-translate-x-[5%] -translate-y-1/2',
    z: 'z-10',
    rotate: 'rotate-[13deg]',
    shadow: 'shadow-lg',
  },
];

export const ImageStack: React.FC = () => {
  const [modalIdx, setModalIdx] = useState<number|null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="relative h-[330px] md:h-[560px] flex items-center justify-center select-none">
      {images.map((img, idx) => {
        // Card-hand effect: bring hovered/tapped image to front, scale, shadow, rotate
        const isActive = modalIdx === null;
        return (
          <div
            key={img.src}
            className={
              [
                'absolute left-1/2 top-1/2',
                img.size,
                img.offset,
                img.z,
                img.rotate,
                'transition-all duration-300 rounded-xl overflow-hidden cursor-pointer',
                isActive
                  ? `hover:z-40 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-200/30`
                  : (modalIdx === idx ? 'z-50 scale-110 shadow-2xl' : 'opacity-60 pointer-events-none'),
              ].join(' ')
            }
            style={{
              boxShadow: modalIdx === idx ? '0 8px 40px 0 rgba(63,240,231,0.18)' : undefined,
            }}
            onClick={() => {
              if (window.innerWidth < 768) setModalIdx(idx);
            }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        );
      })}
      {/* Mobile modal/lightbox */}
      {modalIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setModalIdx(null)}>
          <div className="relative w-11/12 max-w-md mx-auto" onClick={e => e.stopPropagation()}>
            <img src={images[modalIdx].src} alt={images[modalIdx].alt} className="w-full h-auto rounded-xl shadow-2xl" />
            <button className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-3 py-1 text-lg font-bold" onClick={() => setModalIdx(null)}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};