import classNames from "classnames";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function QuickAction() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  function submit() {
    if (phoneNumber.length < 10) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }

  return (
    <div className="bg-white px-[18px] py-[24px] w-[400px] rounded-[8px] space-y-[10px]">
      <div className="text-primary-light font-semibold text-center text-[16px]">
        Giriş yap veya kayıt ol
      </div>
      <div className="flex gap-[10px]">
        <PhoneInput
          containerClass="flex gap-[16px]"
          buttonClass="!static !flex !items-center !justify-center !h-[56px] !w-[110px] !bg-white !rounded-[5px] !border-2 !border-gray-300  !text-[16px] !hover:border-primary !focus:border-primary !ease-linear !duration-200"
          inputClass={
            "!order-2 !px-[10px] !h-[56px] !w-full !rounded-[5px] !border-2 !border-gray-300  !text-[16px] !hover:border-primary !focus:border-primary !ease-linear !duration-200"
          }
          country={"tr"}
          value={phoneNumber}
          onChange={(phone) => {
            setPhoneNumber(phone);
          }}
        />
      </div>

      {!isValid ? (
        <div className="text-red-500 text-center">
          Lütfen geçerli bir telefon numarası giriniz.
        </div>
      ) : (
        ""
      )}
      <button
        className="flex w-full h-[48px] rounded-[5px] shadow-md bg-secondary text-primary-light font-semibold text-[16px] items-center justify-center hover:bg-primary-light hover:text-secondary"
        type="button"
        onClick={submit}
      >
        Telefon numarası ile devam et
      </button>
    </div>
  );
}

export default QuickAction;
