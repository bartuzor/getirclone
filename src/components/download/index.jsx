function Download() {
  return (
    <section className="container mt-[25px]">
      <div className="flex max-w-[1232px] mx-auto h-[312px] bg-[url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)] bg-primary-light font-semibold rounded-[10px]">
        <div className="flex items-center w-full bg-[url(https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png)] bg-no-repeat bg-right-bottom">
          <div className="flex flex-col  justify-center px-[50px] gap-[10px]">
            <h1 className="text-[34px] text-white">Getir'i indir!</h1>
            <p className="text-white w-[350px]">
              İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
            </p>
            <div className="flex gap-[5px] pt-[20px]">
              <a href="">
                <img src="/appstore.svg" alt="" />
              </a>

              <a href="">
                <img src="/googleplay.svg" alt="" />
              </a>

              <a href="">
                <img src="/huewei.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
