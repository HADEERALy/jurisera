import styled from "styled-components";
import "./Items.css";
// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #683bb7;
//   color: #fff;
//   margin: 15px;
//   font-size: 4em;
// `;
const Items = (props) => {
  const product = props.item;
  // console.log("product propsssss", product);
  return (
    <div className="items-style">
      <div className="row  items-image">
        <img
          src={product.picture}
          alt="JuriseraLogo"
          style={{ height: "270px", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="row  items-content">
        <div className="col-6 items-name ">{product.title}</div>
        <div className="col-6 items-year d-flex justify-content-end">
          {product.created}
        </div>
      </div>
    </div>
  );
};
export default Items;
