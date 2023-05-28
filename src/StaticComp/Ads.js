import './StyleSheet/Ads.css';
import adsImg from './Images/iphone_6_plus.png';

const Ads = () => {
  return (
    <div id="Ads">
        {/* <div id="triangle"></div> */}
      <div id="Ads-in">
        <h1 id="neck">iPhone 6 Plus</h1>
        <div>Performance and Design.Taken To The Right Edge</div>
        <div>RAM : <b>6 GB</b>,180 Mega Pixals Cam</div>
        <div>Cool To use,</div>
        <h3>Offer End's Today</h3>
        <strong>$ 49,999/-</strong>
        <br />
        {/* <div id="shop" onClick={""}>Shop Now</div> */}
      </div>
      <div >
        <img src={adsImg} id="AdsImg" alt="404_ERROR"/>
      </div>
      {/* <div id="triangle1"></div> */}
    </div>
  );
};
export default Ads;
