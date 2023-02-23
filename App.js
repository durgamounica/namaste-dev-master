import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <h1 id="title" key="h1">
      Namaste React
    </h1>
  );
};
const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Welome to Namaste React</h1>
      <h2>This is using h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
