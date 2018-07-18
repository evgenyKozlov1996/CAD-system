import * as React from "react";
import * as ReactDOM from "react-dom";
import ControlButton from "./components/Button";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ControlButton imagePath="/images/line.png" />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
