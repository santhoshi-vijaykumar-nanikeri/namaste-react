const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
// this is root.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
