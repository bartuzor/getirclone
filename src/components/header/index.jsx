import { Globe, UserRound, UserRoundPlus } from "lucide-react";
import classNames from "classnames";


function Header({ selectedMenu, onMenuItemClick }) {
  return (
    <header className="h-[45px] bg-primary">
      <div className="container flex justify-between h-full">
        <nav className="flex mt-[5px]">
          <a
            href="#"
            className={classNames(
              "font-semibold px-[20px] py-[5px] rounded-t-[5px] text-white",
              {
                "bg-primary-light !text-secondary": selectedMenu === "getir",
              }
            )}
            onClick={() => {
              onMenuItemClick("getir");
            }}
          >
            getir
          </a>
          <a
            href="#"
            className={classNames(
              "font-semibold px-[20px] py-[5px] rounded-t-[5px] text-white",
              {
                "bg-primary-light !text-secondary":
                  selectedMenu === "getiryemek",
              }
            )}
            onClick={() => {
              onMenuItemClick("getiryemek");
            }}
          >
            getiryemek
          </a>
          <a
            href="#"
            className={classNames(
              "font-semibold px-[20px] py-[5px] rounded-t-[5px] text-white",
              {
                "bg-primary-light !text-secondary":
                  selectedMenu === "getirbüyük",
              }
            )}
            onClick={() => {
              onMenuItemClick("getirbüyük");
            }}
          >
            getirbüyük
          </a>
          <a
            href="#"
            className={classNames(
              "font-semibold px-[20px] py-[5px] rounded-t-[5px] text-white",
              {
                "bg-primary-light !text-secondary": selectedMenu === "getirsu",
              }
            )}
            onClick={() => {
              onMenuItemClick("getirsu");
            }}
          >
            getirsu
          </a>
          <a
            href="#"
            className={classNames(
              "font-semibold px-[20px] py-[5px] rounded-t-[5px] text-white",
              {
                "bg-primary-light !text-secondary":
                  selectedMenu === "getirçarşı",
              }
            )}
            onClick={() => {
              onMenuItemClick("getirçarşı");
            }}
          >
            getirçarşı
          </a>
        </nav>
        <div className="flex items-center gap-[25px] text-[15px] text-white font-semibold">
          <button className="flex items-center gap-[5px] ">
            <Globe size={16} />
            Türkçe(TR)
          </button>
          <button className="flex items-center gap-[5px] ">
            <UserRound size={16} />
            Giriş yap
          </button>
          <button className="flex items-center gap-[5px]">
            <UserRoundPlus size={16} />
            Kayıt Ol
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
