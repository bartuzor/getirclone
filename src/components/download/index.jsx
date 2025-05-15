


function Download(){
    return(
        <section>
            <div className="flex justify-center items-center  " >
                <div className="flex h-[312px] bg-primary-light font-semibold rounded-[10px]">
                    <div className="flex flex-col justify-center px-[50px] gap-[10px]">
                    <h1 className="text-[34px] text-white">Getir'i indir!</h1>
                    <p className="text-white w-[350px]">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                    <div className="flex gap-[5px] pt-[20px]">
                    
                                <button className='bg-black rounded-[10px] h-[50px] w-[160px] text-white '>
                                    .
                                    <h1>App Store'dan</h1>
                                    <p className="text-[10px] flex justify-center">İndirin</p>
                                </button>
                                <button className='bg-black rounded-[10px] h-[50px] w-[160px] text-white '>
                                    <h1>Google Play</h1>
                                    <p>'DEN ALIN</p>
                                </button>
                                <button className='bg-black rounded-[10px] h-[50px] w-[160px] text-white '>
                                    <h1>AppGallery</h1>
                                    <p>İLE KEŞFEDİN</p>
                                </button>git remote add origin https://github.com/bartuzor/getirclone.git
                            
                            </div>
                        </div>
                        <img className=" pt-[50px]" src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                    </div>
                </div>
                
           
        </section>
    )
}

export default Download;