import { sp } from "@/utils/numbers";
import Image from "next/image";
import Link from "next/link";

function TourCard({ data }) {
  const { title, image, price, options } = data;
  console.log(data);

  return (
    <div className="overflow-hidden rounded-[10px] border border-black/10">
      <div>
        <Image
          src={image}
          width={327}
          height={159}
          className="min-h-[159px] w-full object-cover"
          alt={title}
        />
      </div>
      <div>
        <div className="px-[10px] py-[9px]">
          <h3 className="text-[22px]">{title}</h3>
          <p className="mt-[10px] text-[15px]">
            {options[0]} - {options[1]}
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-black/10 px-[10px] py-[5px]">
          <Link
            href={`tours/${title}`}
            className="h-[29px] w-[99px] rounded-[4px] bg-primary-700 text-center leading-[29px] text-white lg:w-[64px]"
          >
            رزور
          </Link>
          <div>
            <p className="text-complementry">
              {sp(price)}
              <span className="text-[12px] text-secondary/80"> تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
