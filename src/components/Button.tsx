import * as React from "react";
import "./styles/Button.css";

export interface IButton {
  imagePath: string;
}
function ControlButton({ imagePath }: IButton) {
  return (
    <div>
      <button className="controlButton">
        <Image source={imagePath} />
      </button>
    </div>
  );
}

export default ControlButton;
