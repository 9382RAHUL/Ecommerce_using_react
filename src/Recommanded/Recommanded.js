import React from "react";
import "./Recommanded.css";
import Buttons from "../components/Buttons";
const Recommanded = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2>Recommanded</h2>
        <div className="recommanded-btns">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommanded;

// import Buttons from "../components/Buttons";
// import "./Recommended.css";

// const Recommended = ({ handleClick }) => {
//   return (
//     <>
//       <div>
//         <h2 className="recommended-title">Recommended</h2>
//         <div className="recommended-flex">
//           <Buttons onClickHandler={handleClick} value="" title="All Products" />
//           <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
//           <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
//           <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
//           <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recommended;
