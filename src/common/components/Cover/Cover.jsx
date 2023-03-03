import Image from 'next/image';
import { usePageContext } from 'src/context/page';

export const Cover = ({ children, background }) => {
  const { featuredImage } = usePageContext();
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {(!!background || !!featuredImage) && (
        <Image
          alt="Cover"
          src={background || featuredImage}
          layout="fill"
          objectFit="cover"
          className="mix-blend-soft-light"
        />
      )}

      <div className="max-w-5xl z-10 text-white">{children}</div>
    </div>
  );
};
