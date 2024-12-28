"use client";

import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { useGetAllTours } from "@/services/queries";

function HomePageSearch() {
  const { data } = useGetAllTours();
  const { register, handleSubmit, watch, control } = useForm();

  const originOption = watch("originId") || "";
  const destinationOption = watch("destinationId") || "";

  const getCities = (type) => {
    if (data) {
      const origin = [{ id: 999, name: "" }];
      const destination = [{ id: 999, name: "" }];

      data.data.map((tour) => {
        origin.push(tour.origin);
        destination.push(tour.destination);
      });

      if (type === "origin") {
        return origin.filter(
          (obj, index, self) =>
            index === self.findIndex((e) => e.id === obj.id),
        );
      }

      if (type === "destination") {
        return destination.filter(
          (obj, index, self) =>
            index === self.findIndex((e) => e.id === obj.id),
        );
      }
    }
  };

  const origin = getCities("origin");
  const destination = getCities("destination");

  const submitHandler = (form) => {
    console.log(form);
  };

  return (
    <div className="flex flex-col items-center gap-[30px] pt-[30px]">
      <h2 className="text-[16px] font-semibold lg:text-[28px]">
        <span className="text-primary-700">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </h2>
      <div className="w-full lg:w-[874px] lg:rounded-[20px] lg:border lg:border-black/15">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full gap-[10px] p-[10px] lg:grid lg:grid-cols-4"
        >
          <div className="col-span-3 mx-auto grid max-w-[330px] grid-cols-2 gap-[10px] lg:mx-0 lg:w-auto lg:max-w-full lg:grid-cols-3 lg:divide-x lg:divide-x-reverse lg:divide-black/20">
            <div className="relative lg:px-[10px]">
              <select
                {...register("originId")}
                className="w-full rounded-[12px] border border-black/15 px-[10px] py-[9px] outline-none lg:border-none"
              >
                {origin?.map((city) => (
                  <option key={city.id} value={city.id} hidden={!city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {originOption === "" && (
                <label
                  htmlFor="origin"
                  className="pointer-events-none absolute top-0 flex w-full justify-center gap-[8px] rounded-[12px] border border-black/15 bg-white py-[10.5px] text-black/50 peer-placeholder-shown:opacity-50 lg:justify-start lg:border-none"
                >
                  <SVGIcon name="location" className="size-[18px]" />
                  <span>مبدا</span>
                </label>
              )}
            </div>
            <div className="relative lg:px-[10px]">
              <select
                {...register("destinationId")}
                className="w-full rounded-[12px] border border-black/15 px-[10px] py-[9px] outline-none lg:border-none"
              >
                {destination?.map((city) => (
                  <option key={city.id} value={city.id} hidden={!city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {destinationOption === "" && (
                <label
                  htmlFor="destination"
                  className="pointer-events-none absolute top-0 flex w-full justify-center gap-[8px] rounded-[12px] border border-black/15 bg-white py-[10.5px] text-black/50 lg:justify-start lg:border-none"
                >
                  <SVGIcon name="search" className="size-[18px]" />
                  <span>مقصد</span>
                </label>
              )}
            </div>
            <div className="relative col-span-2 lg:col-auto lg:px-[10px]">
              <Controller
                control={control}
                name="date"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <div className="w-full rounded-[12px] border border-black/15 py-[10.5px] outline-none lg:border-none">
                    <DatePicker
                      round="x2"
                      range
                      inputClass="outline-none w-full peer text-center"
                      inputAttributes={{ placeholder: "" }}
                      accentColor="#28a745"
                      onChange={(e) =>
                        onChange({
                          startDate: new Date(e.from).toISOString(),
                          endDate: new Date(e.to).toISOString(),
                        })
                      }
                    />
                    <label className="pointer-events-none absolute top-0 flex w-full justify-center gap-[8px] rounded-[12px] border border-black/15 bg-white py-[10.5px] text-black/50 opacity-0 peer-placeholder-shown:opacity-100 lg:justify-start lg:border-none">
                      <SVGIcon name="calendar_0" className="size-[18px]" />
                      <span>تاریخ</span>
                    </label>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="mx-auto mt-[20px] max-w-[330px] lg:mx-0 lg:mt-0 lg:max-w-full">
            <button
              type="submit"
              className="w-full rounded-[16px] bg-primary-700 p-[11.5px] text-center text-white"
            >
              جستجو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePageSearch;
