import { useState } from "react";

import ModalContainer from "../ModalContainer/ModalContainer";
import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { removeBodyPadding } from "@/utils/bodyPadding";

function AuthForm({ authFormOpen, setAuthFormOpen }) {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const setState = () => {
    setAuthFormOpen(false);
    setTimeout(() => {
      setStep(1);
    }, 500);
  };

  return (
    <ModalContainer state={authFormOpen} setState={setState}>
      <div className="h-[362px] p-[20px]">
        <div className="flex justify-end">
          {step === 1 && (
            <button
              onClick={() => {
                removeBodyPadding(300);
                setAuthFormOpen(false);
              }}
              className="flex size-[24px] items-center justify-center"
            >
              <SVGIcon name="add" className="size-[24px]" />
            </button>
          )}
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex size-[24px] items-center justify-center"
            >
              <SVGIcon name="arrowLeft" className="size-[24px]" />
            </button>
          )}
        </div>
        {step === 1 && (
          <SendOtpForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <CheckOtpForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setAuthFormOpen={setAuthFormOpen}
          />
        )}
      </div>
    </ModalContainer>
  );
}

export default AuthForm;
