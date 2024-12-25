import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";
import { sp } from "@/utils/numbers";

function MyTourCard({ data }) {
  const {
    title,
    price,
    startDate,
    endDate,
    origin,
    destination,
    fleetVehicle,
  } = data;

  const iconType = () => {
    switch (fleetVehicle) {
      case "کشتی":
        return "ship";
      case "هواپیما":
        return "airplane";
      case "اتوبوس":
        return "bus";
      default:
        return "bus";
    }
  };

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
    };
    const jalaliDate = new Date(date)
      .toLocaleDateString("fa-IR", options)
      .replace(",", "")
      .split(" ");
    const [year, month, day, dayName] = jalaliDate;

    return `${dayName} ${day} ${month} ${year}`;
  };

  const labelHandler = () => {
    const nowDate = new Date().toISOString();
    const newEndDate = new Date(endDate).toISOString();

    if (nowDate > newEndDate) {
      return [" bg-primary-500", " text-primary-700", "به اتمام رسیده"];
    } else {
      return [" bg-yellow-500", " text-yellow-700", "در حال برگزاری"];
    }
  };

  return (
    <div className="relative w-full rounded-[10px] border border-black/20">
      <div className="px-[15px] py-[20px] lg:px-[20px]">
        <div className="flex">
          <div className="flex w-1/2 gap-[10px] sm:w-1/3 lg:w-2/5">
            <SVGIcon name="sunFog" className="size-[18px] lg:size-[24px]" />
            <p className="text-[12px] lg:text-[14px]">{title}</p>
          </div>
          <div className="flex w-1/2 gap-[10px] sm:w-1/3 lg:w-2/5">
            <SVGIcon name={iconType()} className="size-[18px] lg:size-[24px]" />
            <p className="text-[12px] lg:text-[14px]">سفر با {fleetVehicle}</p>
          </div>
        </div>
        <div className="mt-[15px] flex flex-col gap-y-[20px] lg:flex-row">
          <div className="flex lg:w-2/5">
            <div className="flex w-1/2 gap-[10px] sm:w-1/3">
              <p className="text-[14px] font-semibold">
                {origin.name} به {destination.name}
              </p>
            </div>
            <div className="flex w-1/2 gap-[10px]">
              <ul className="list-inside list-disc text-[12px] text-black/60 lg:text-[14px]">
                <li>{formatDate(startDate)}</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:w-2/5">
            <div className="flex w-1/2 gap-[10px] sm:w-1/3">
              <p className="text-[14px] font-semibold">تاریخ برگشت</p>
            </div>
            <div className="flex w-1/2 gap-[10px]">
              <ul className="list-inside list-disc text-[12px] text-black/60 lg:text-[14px]">
                <li>{formatDate(endDate)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[15px] divide-x divide-x-reverse divide-black/20 border-t border-black/20 px-[5px] py-[15px] lg:px-[20px] lg:py-[20px]">
        <div>
          <p className="text-[10px] lg:text-[14px]">
            شماره تور
            <span className="mr-[10px] text-[12px] font-medium lg:text-[14px]">
              102095404
            </span>
          </p>
        </div>
        <div className="pr-[15px]">
          <p className="text-[10px] lg:text-[14px]">
            مبلغ پرداخت شده
            <span className="mr-[10px] text-[12px] font-medium lg:text-[14px]">
              {sp(price)} تومان
            </span>
          </p>
        </div>
      </div>
      <div
        className={`absolute left-[10px] top-[10px] rounded-[27px] px-[6.5px] py-[4.5px] leading-none lg:left-[20px] lg:top-[20px]${labelHandler()[0]}`}
      >
        <p className={`text-[6px] lg:text-[12px]${labelHandler()[1]}`}>
          {labelHandler()[2]}
        </p>
      </div>
    </div>
  );
}

export default MyTourCard;
