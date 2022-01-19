import { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const image = [
    "https://img.faballey.com/images/banner/153d14e2-96d3-4c5d-9926-6288f095e588.jpg",
    "https://img.faballey.com/images/banner/b9c28c2a-d71a-429e-a7ac-d24e0088fe01.jpg",
    "https://img.faballey.com/images/banner/1f73766a-70bb-4ab7-bf0d-f414e80b8c6b.jpg",
  ];

  const crushing_img = [
    "https://img.faballey.com/images/banner/7c3259b7-7204-431c-9bc1-3afacd56c9c1.jpg",
    "https://img.faballey.com/images/banner/6846915c-aff5-4680-af8c-0a58e1087d01.jpg",
    "https://img.faballey.com/images/banner/645aeeb2-e442-4373-aef8-57e261ca4ca8.jpg",
  ];

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {};
  }, [index]);

  return (
    <div>
      <div className="border flex text-xs font-semibold text-center w-full">
        <div className="border flex-1 py-2 bg-red-50">Party '21 Collection</div>
        <div className="border flex-1 py-2 bg-red-200">EOSS | UPTO 70% OFF</div>
        <div className="border flex-1 py-1 bg-red-50">
          📢PSA: Free shipping on orders above ₹ 3000
        </div>
      </div>

      <div className="slideshow my-2 mx-auto overflow-hidden w-full relative ">
        <div
          className="slideshowSlider whitespace-nowrap transition ease-linear duration-1000"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {image.map((e, i) => (
            <img className="slide w-full inline-block" src={e} />
          ))}
        </div>

        <div className="slideshowDots text-center absolute bottom-0 left-1/2 ">
          {image.map((_, id) => (
            <div
              key={id}
              className={index === id ? "slideshowDotActive" : "slideshowDot"}
              onClick={() => {
                setIndex(id);
              }}
            ></div>
          ))}
        </div>
      </div>

      <div>
        <img src="https://img.faballey.com/images/banner/751a510b-deb8-46ab-9013-67aba9f3ec46.gif" />
      </div>

      <div className="border-2 border-black text-center text-2xl font-semibold ">
        <p className="m-4">WHAT WE'RE CRUSHING ON</p>
        <div className="flex">
          {crushing_img.map((e, id) => (
            <div className="flex-1 m-3">
              <img src={e} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black text-center text-2xl font-semibold ">
        <p className="m-4">HOT RIGHT NOW</p>
        <img src="https://img.faballey.com/images/banner/65463db9-3cb2-44bb-aa35-9a1630b881d0.jpg" />
      </div>

      <div className="border-2 border-black text-center text-2xl font-semibold ">
        <p className="m-4">SIZZLING & SPANKIN' NEW</p>
        <img src="https://img.faballey.com/images/banner/6aa99031-703e-4b07-8cb6-e844ab2991cc.jpg" />
      </div>
    </div>
  );
};
