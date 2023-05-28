import "./StyleSheet/ImgSlides.css";
import slide2 from "../Images/AdsPic2.jpg";
import slide3 from "../Images/AdsPic3.png";
import slide4 from "../Images/AdsPic4.jpg";
import slide5 from "../Images/AdsPic5.jpg";
import slide1 from "../Images/AdsPic1.png";
// import { useState, useEffect } from "react";
import Carousel from "nuka-carousel";

const ImgSlides = () => {
  const picCollection = [slide3, slide2, slide1, slide5, slide4];
  // const [pic,setPic] =useState(0);

  // useEffect(()=>{
  //     setInterval(()=>{
  //         setPic(pic=>pic < 4 ? pic + 1 : 0)
  //     },2000)
  // },[])
  return (
    <Carousel
      className="pic"
      autoplay={true}
      autoplayInterval={2000}
      autoplayReverse={true}
    >
      {picCollection.map((item, index) => {
        return (
          <div id="imageSlide" key={index}>
            <div id="triangle2"></div>
            <img id="slide" src={item} alt="" />
            <div id="triangle3"></div>
          </div>
        );
      })}
    </Carousel>
  );
};
export default ImgSlides;
