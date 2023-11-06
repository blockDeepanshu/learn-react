const createElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", "", "Inner Child")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createElement);
