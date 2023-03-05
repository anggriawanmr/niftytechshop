import {
  faHardDrive,
  faMemory,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';

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
          <Image
            src={image}
            height="200px"
            width="300px"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">Rp.{numeral(price).format('0,0')}</div>
        <div className="text-sm mt-3">
          <FontAwesomeIcon icon={faMicrochip} />
          <span className="pl-2">{core}</span>
        </div>
        <div className="text-sm mt-3">
          <FontAwesomeIcon icon={faMemory} />
          <span className="pl-2">{ram}GB</span>
        </div>
        <div className="text-sm mt-3">
          <FontAwesomeIcon icon={faHardDrive} />
          <span className="pl-2">{memory} GB</span>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
