import "./HomeSlider.css";
import RQoute from "../../assets/images/fi-sr-quote-right.svg";
const HomeSlider = (props) => {
  const product = props.item;
  // console.log("product props", product);
  return (
    <div className="slider-style">
      <div className="slider-descr1 ">
        <img src={RQoute} className="qoute-style " alt="right-qoute" />
        <div className="slider-margin">
          {/* {product.desc1} */}
          {product.text}
          {/* <span className="slider-descr2 ">{product.descr2}</span> */}
        </div>
      </div>
      <div
        className="col-12 slider-name d-flex justify-content-start mt-4 
"
      >
        {product.name}, {product.member?.position}
      </div>
    </div>
  );
};
export default HomeSlider;
