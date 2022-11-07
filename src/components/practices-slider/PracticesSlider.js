import "./PracticesSlider.css";
import RQoute from "../../assets/images/fi-sr-quote-right.svg";
import { useHistory } from "react-router-dom";

const PracticesSlider = (props) => {
  const product = props.item;
  const history = useHistory();

  // console.log("product props", product);
  return (
    <div className="practices-slide">
      <div className="col-12">
        <img src={product.picture} className="practices-img" />
        <div
          className="imag-detailes clickable"
          onClick={() =>
            history.push({
              pathname: `/law/${props.item.id}/`,
              state: { selected_id: "service-up" },
            })
          }
        >
          {product.name}
        </div>

        {/* <div className="">test</div> */}
      </div>
    </div>
  );
};
export default PracticesSlider;
