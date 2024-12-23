import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";
import { useQueryClient } from "@tanstack/react-query";

import Loading from "@/components/elements/Loading/Loading";

import { useCheckOtp, useSendOtp } from "@/services/mutations";
import { setCookie } from "@/utils/cookie";
import { e2p, p2e } from "@/utils/numbers";
import { removeBodyPadding } from "@/utils/bodyPadding";

function CheckOtpForm({ phoneNumber, setAuthFormOpen }) {
  const initialTimeLeft = 120;
  const queryClient = useQueryClient();

  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isActive, setIsActive] = useState(true);
  const [disableSubmitting, setDisableSubmitting] = useState(false);

  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60;

  const { isPending, mutate } = useCheckOtp();
  const { mutate: sendOtp } = useSendOtp();
  const successHandler = (data) => {
    setDisableSubmitting(true);
    toast.success("با موفقیت وارد شدید");
    setCookie("Torino::AccToken", data?.data?.accessToken, 30);
    setCookie("Torino::RefToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    setAuthFormOpen(false);
    removeBodyPadding(300);
  };

  const submitHandler = (code) => {
    if (disableSubmitting) return;

    if (code.length < 6) return toast.error("لطفا کد تایید را وارد کنید");

    mutate(
      { mobile: p2e(phoneNumber), code: p2e(code) },
      {
        onSuccess: (data) => successHandler(data),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  const retrySendOtp = () => {
    setTimeLeft(initialTimeLeft);
    setIsActive(true);

    sendOtp(
      { mobile: p2e(phoneNumber) },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
        },
        onError: (error) => toast.error(error.message),
      },
    );
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          setIsActive(false);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isActive]);

  return (
    <div className="flex h-[calc(100%_-_24px)] flex-col justify-between p-[20px]">
      <h4 className="mt-[10px] text-center text-[22px] font-semibold">
        کد تایید را وارد کنید.
      </h4>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(code);
        }}
      >
        <p className="mb-[15px] text-center text-[14px]">
          کد تایید به شماره {phoneNumber} ارسال شد
        </p>
        <div
          style={{ direction: "ltr" }}
          className="-mr-[5px] flex justify-center"
        >
          <OtpInput
            value={e2p(code)}
            onChange={(otp) => {
              if (disableSubmitting) return;
              setCode(otp);
              if (otp.length === 6) submitHandler(otp);
            }}
            numInputs={6}
            inputStyle="border border-black/25 !w-[48px] lg:!w-[58px] !h-[45px] mr-[5px] outline-none rounded-[6px]"
          />
        </div>
        <p className="mt-[15px] text-center text-[12px]">
          {!isActive ? (
            <button type="button" onClick={retrySendOtp}>
              ارسال مجدد کد
            </button>
          ) : (
            `${minutes}:${seconds} تا ارسال مجدد کد`
          )}
        </p>
        <button
          disabled={isPending}
          type="submit"
          className="mt-[30px] flex items-center justify-center rounded-[6px] border border-primary-700 bg-primary-700 py-[14px] text-[18px] text-white"
        >
          {isPending ? <Loading fill="#fff" /> : "ورود به تورینو"}
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
