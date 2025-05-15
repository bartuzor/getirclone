import QuickAction from "./quick-action";

function Hero() {
  return (
    <section className="bg-primary-light bg-gradient-to-r from-primary-light to-[#7849f7] h-[500px]">
      <div className="container flex items-center justify-between h-full">
        <div className="flex flex-col gap-[41px]">
          <img src="/getirlogo.svg" alt="" className="h-[180px] w-[180px]" />
          <div className="text-white text-[36px] font-semibold">
            Dakikalar içinde kapında
          </div>
        </div>
        <div>
          <QuickAction />
        </div>
      </div>
    </section>
  );
}

export default Hero;
