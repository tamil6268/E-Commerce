import './StyleSheet/ImgSlides.css';
import slide2 from '../Images/AdsPic2.jpg'
import slide3 from '../Images/AdsPic3.png'
import slide4 from '../Images/AdsPic4.jpg'
import slide5 from '../Images/AdsPic5.jpg'
import slide1 from '../Images/AdsPic1.png'
import {useState,useEffect} from 'react';

const ImgSlides=()=>{
    const [pic,setPic] =useState(0);
    const [picCollection]=useState([slide3,slide2,slide1,slide5,slide4])

    useEffect(()=>{
        setInterval(()=>{
            setPic(pic=>pic < 4 ? pic + 1 : 0)
        },2000)
    },[])
    return(
        <div id="imageSlide">
            <div id="triangle2"></div>
             <img id="slide" width={1346} height={400} src={picCollection[pic]} alt=""/>
             <div id="triangle3"></div>
        </div>
    )
}
export default ImgSlides;