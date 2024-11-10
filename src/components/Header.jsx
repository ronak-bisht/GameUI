import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 ">
            <div className="md:w-14 w-8 h-10 rounded-full ">
              <Image
                src="/images/bronze-circle.png"
                width={40}
                height={40}
                alt="hello"
              />
            </div>
            <div className="md:w-36 w-28 h-10 flex items-center justify-center rounded-lg">
              <div className="relative flex justify-between w-full items-center">
                <div className="z-10">
                  <Image
                    src="/images/chip.png"
                    width={35}
                    height={35}
                    alt="icon"
                    className="md:w-8 w-6"
                  />
                </div>
                <div className="absolute flex justify-center py-1 bg-score left-4 md:w-28 w-20 ">
                  <Image
                    src="/images/0.png"
                    width={100}
                    height={100}
                    alt="icon"
                    className="md:w-[60px] w-[40px] h-[20px] z-0"
                  />
                 
                </div>
                <div  className="z-10 bg-white rounded-full">
                  <Image
                    src="/images/PlusCircle.png"
                    width={35}
                    height={35}
                    alt="icon"
                     className="md:w-8 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <span className="text-white text-xl font-bold">
              <Image
                src="/images/logo.png"
                width={250}
                height={250}
                alt="logo"
                // className="w-full h-full"
              />
            </span>
          </div>
          <div className="flex gap-2 w-36">
          <div className="frame-3 h-10 w-10 ">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/images/ArrowsIn.png"
                width={200}
                height={100}
                alt="logo"
                className="w-[70%] h-[70%]"


              />
            </button>
            </div>
            <div className="frame-3 h-10 w-10 ">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/images/hamburger.png"
                width={200}
                height={100}
                alt="logo"
                className="w-[40%] h-[40%]"


              />
            </button>
            </div>
           
          </div>
        </div>
  )
}

export default Header