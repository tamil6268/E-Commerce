import './StyleSheet/Ads.css';
import adsImg from './Images/iphone_6_plus.png';

const Ads = () => {
  return (
    <div id="Ads">
        <div id="triangle"></div>
      <div id="Ads-in">
        <h1 id="neck">iPhone 6 Plus</h1>
        <div>Performance and Design.Taken To The Right Edge</div>
        <br />
        <div>Shop Now</div>
      </div>
      <div id="AdsImg">
        <img src={adsImg} width={700}  height={520}   alt="404_ERROR"/>
      </div>
      <div id="triangle1"></div>
    </div>
  );
};
export default Ads;
