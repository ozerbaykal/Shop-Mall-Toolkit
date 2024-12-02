import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-8 md:gap-20">
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semi-bold">
              Kalite ile Tarzını Göster
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, ut.
            </div>
            <div className="border border-zinc-400 rounded-full text-2xl w-[220px] h-14 cursor-pointer flex items-center justify-center font-sans bg-gray-200 hover:bg-gray-400 hover:text-white transition ">
              İncele
            </div>
          </div>
          <img
            src="https://akn-ss.a-cdn.akinoncloud.com/products/2024/11/20/10150889/1890bc91-2801-4f13-944d-1eb0a5ac4010_size2048x2048_cropCenter.jpg"
            width={350}
            height={350}
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-8 md:gap-20">
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semi-bold">
              Kalite ile Tarzını Göster
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eos debitis tenetur iusto iste velit? Dolorem enim facilis harum
              quos.{" "}
            </div>
            <div className="border border-zinc-400 rounded-full text-2xl w-[220px] h-14 cursor-pointer flex items-center justify-center font-sans bg-gray-200 hover:bg-gray-400 hover:text-white transition ">
              İncele
            </div>
          </div>
          <img
            src="https://akn-ss.a-cdn.akinoncloud.com/products/2024/08/23/32163585/959b1ed4-05bd-46a8-92ad-88ef884374b6_size2048x2048_cropCenter.jpg"
            width={350}
            height={350}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
