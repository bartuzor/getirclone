import classNames from "classnames";
import { useState } from "react";

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
        <div className="bg-white rounded-[5px] h-[56px] w-1/3 border-2 border-gray-300 "></div>
        <input
          type="text"
          maxLength={10}
          placeholder="Telefon Numarası"
          className="h-[56px] w-full rounded-[5px] border-2 border-gray-300 px-[15px] text-[16px] hover:border-primary focus:border-primary ease-linear duration-200"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
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
