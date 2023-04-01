import "./StyleSheet/Footer.css";
import Last from "./Last";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="two">
          <h2 className="one">iSHOP</h2>
          <div id="content">
            A Shopping Concierge and Delivery Service, that provides you the
            best solutions for shipping items from around the World to your
            doorstep.
          </div>
        </div>
        <div id="two" className="two">
          <h4>Follow-Us</h4>
          <div id="content">
            Follow-us in social media like face book and insta whats app for
            purchace,
            <div id="icon">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqTjy_WlpCpVb5abviBQSOL7CklFa4WKuuA&usqp=CAU"
                  width={40}
                  height={35}
                  alt="404_ERROR"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_uy3KFO2vuo-IwTeKJHu_o4K5gKYc5FULw&usqp=CAU"
                  width={50}
                  height={40}
                  alt="404_ERROR"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH0y3j0Ihgw_JxhGlq_Qk3-xwfExz01MQ3Q&usqp=CAU"
                  width={50}
                  height={40}
                  alt="404_ERROR"
                />
            </div>
          </div>
        </div>
        <div id="two">
          <h4>Contact-Us</h4>
          <div id="content">
            DieSachbearbeiter.
            <br />
            Choriner Straße 49 10435 Berlin
            <br />
            E-Mail: moinsen2@blindtextgenerator.com
          </div>
        </div>
      </div>
      <br />
      <Last />
      <div id="MoneyLink">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdWPDClAnn2M46Q1jAuquhOIVXCmvuxbdBg&usqp=CAU"
            width={170}
            height={40}
            alt="404_ERROR"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxm5bhdjHzGOiR_e00L5B-rgTd1peF-2INYA&usqp=CAU"
            width={140}
            height={30}
            alt="404_ERROR"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGLq7V_Dz172nLv7nHPEQXdytlSH6yOF8hg&usqp=CAU"
            width={170}
            height={80}
            alt="404_ERROR"
          />
        </div>
      </div>
      <br />
    </>
  );
};
export default Footer;
