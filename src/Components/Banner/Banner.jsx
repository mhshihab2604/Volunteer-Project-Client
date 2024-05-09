// import { useEffect, useState } from "react";
// const Banner = () => {
//   const [currentSlider, setCurrentSlider] = useState(0);
//   const sliders = [{img: "https://i.ibb.co/fFMH4D1/carousel1.jpg", title: "Escape 1", des: "Get Your Web Development Project Done in a minutes"}, {img: "https://i.ibb.co/sCSbzC5/carousel2.jpg", title: "Escape 2", des: "Get Your Web Graphics Design Done in a minutes",}, {img: "https://i.ibb.co/Sdhvhxh/carousel3.jpg", title: "Escape 3", des: "Get Your Digital Marketing Project Done in a minutes",}];
//   // if you don't want to change the slider automatically then you can just remove the useEffect
//   useEffect(() => {
//     const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
//     return () => clearInterval(intervalId);
//   }, [currentSlider]);

//   return (
//         <>
//             <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
//                 style={{ backgroundImage: `url(${sliders[currentSlider].img})`}}>
//                 {/* text container here */}
//                 <div className="drop-shadow-lg text-white text-center px-5">
//                     <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
//                     <p className="text-sm md:text-base lg:text-2xl font-medium">{sliders[currentSlider].des}</p>
//                 </div>
//             </div>
//             {/* slider container */}
//             <div className="flex justify-center items-center gap-3 p-2">
//                 {/* sliders */}
//                 {sliders.map((slide, inx) => (
//                     <img onClick={() => setCurrentSlider(inx)} key={inx}
//                         src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
//                         alt={slide.title}/>
//                 ))}
//             </div>
//         </>
//   )};

//   export default Banner;


import { useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: "https://i.ibb.co/CQYK2W0/volunteer.png", title: "Empower Change, Join Our Volunteer Community Today!", des: "Offer your time, change a life. Volunteer today!"},
    { img: "https://i.ibb.co/YbK9tzw/volunteer2.png", title: "Make a Difference: Volunteer with Us and Impact Lives!", des: "Small acts, big impact. Join us in making a difference!"},
    { img: "https://i.ibb.co/Sdhvhxh/carousel3.jpg", title: "Join the Movement: Volunteer with Purpose!", des: " where passion meets purpose, and every effort matters!"}
  ];

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  };

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      <div className="relative w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear opacity-100"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-4xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
          <p className="text-sm md:text-base lg:text-2xl font-medium">{sliders[currentSlider].des}</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-0 lg:right-5 right-0 top-1/2">
            <button onClick={prevSlide} className="bg-[#E9FDFF] text-black border-2 lg:px-4 lg:py-3 px-2 py-1 rounded-full">❮</button>
            <button onClick={nextSlide} className="bg-[#E9FDFF] text-black border-2 lg:px-4 lg:py-3 px-2 py-1 rounded-full">❯</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 p-2">
        {sliders.map((slide, inx) => (
          <img onClick={() => setCurrentSlider(inx)} key={inx}
            src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title} />
        ))}
      </div>
    </>
  );
};

export default Banner;

