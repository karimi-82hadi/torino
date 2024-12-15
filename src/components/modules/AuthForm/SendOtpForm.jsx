import toast from "react-hot-toast";

import Loading from "@/components/elements/Loading/Loading";

import { useSendOtp } from "@/services/mutations";
import { e2p, p2e } from "@/utils/numbers";

function SendOtpForm({ phoneNumber, setPhoneNumber, setStep }) {
  const { isPending, mutate } = useSendOtp();

  const successHandler = (data) => {
    toast.success(data?.data?.message);
    toast(data?.data?.code);
    setStep(2);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!phoneNumber) return toast.error("لطفا شماره تلفن را وارد نمایید");

    if (!/^09[0-9]{9}/.test(p2e(phoneNumber))) {
      return toast.error("لطفا شماره تلفن را به درستی وارد نمایید");
    }

    mutate(
      { mobile: p2e(phoneNumber) },
      {
        onSuccess: (data) => successHandler(data),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  return (
    <div className="flex h-[calc(100%_-_24px)] flex-col justify-between p-[20px]">
      <h4 className="mt-[10px] text-center text-[22px] font-semibold">
        ورود به تورینو
      </h4>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <label htmlFor="phoneNumber">شماره موبایل خود را وارد کنید</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder={e2p("0912***4253")}
          dir="ltr"
          value={e2p(phoneNumber)}
          maxLength={11}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-[10px] rounded-[6px] border border-black/25 px-[10px] py-[14px] text-[18px] outline-none"
        />
        <button
          disabled={isPending}
          type="submit"
          className="mt-[40px] flex items-center justify-center rounded-[6px] border border-primary-700 bg-primary-700 py-[14px] text-[18px] text-white"
        >
          {isPending ? <Loading fill="#fff" /> : "ارسال کد تایید"}
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
