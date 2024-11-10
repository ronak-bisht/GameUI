import Image from "next/image";

const Options = () => {
    const options = [
        {
          url: "/images/side-icon1.png",
          selected: true,
        },
        {
          url: "/images/side-icon2.png",
        },
        {
          url: "/images/side-icon3.png",
        },
        {
          url: "/images/side-icon4.png",
        },
        {
          url: "/images/side-icon5.png",
        },
      ];
  return (
    <div
              className="flex flex-col items-center gap-2 w-28
           justify-between h-[530px]  py-[0.56rem]  option-container"
            >
              {options.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`w-[90%] ${
                      item.selected ? "selected" : ""
                    }  py-[10%]  rounded-lg p-2 flex justify-center  text-white`}
                  >
                    <Image
                      className="w-2/3 "
                      src={item.url}
                      width={100}
                      height={100}
                      alt="icon"
                    />
                  </button>
                );
              })}
            </div>
  )
}

export default Options