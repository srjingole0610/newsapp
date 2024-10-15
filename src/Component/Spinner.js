import React from "react";
import loading from "./../loading.gif";

/**
 * A functional component that renders a spinner.
 *
 * The Spinner component renders a simple spinner using a .gif image.
 *
 * @return {JSX.Element} The rendered component.
 */
function Spinner() {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="loading" height="35px" width="35px" />
    </div>
  );
}

export default Spinner;
