import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({
  title,
  destination,
  image,
  ram,
  core,
  price,
  memory,
}) => {
  return (
    <Link href={destination}>
      <a className="border-2 border-slate-300 p-5 bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          <Image src={image} height="200px" width="300px" objectFit="cover" />
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
