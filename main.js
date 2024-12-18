import React from "https://esm.sh/react@17";
import ReactDOM from "https://esm.sh/react-dom@17";

function ScanComponent() {
  React.useEffect(() => {
    const searchIcon = document.querySelector("#search");
    if (searchIcon === null) return;
    const { width, height } = searchIcon.getBoundingClientRect();
    searchIcon.style.setProperty("--search-w", `${width}px`);
    searchIcon.style.setProperty("--search-h", `${height}px`);
  }, []);
  return /*#__PURE__*/(
    React.createElement("div", { className: "ScanComponent" }, /*#__PURE__*/
    React.createElement("i", { id: "file", className: "fas fa-file" }), /*#__PURE__*/
    React.createElement("i", { id: "search", className: "fas fa-search" })));


}
function App() {
  React.useEffect(() => {
    if (typeof addVideoLinks === "function") {
      addVideoLinks("7449051661189844246", "hU24Khx64hQ", "#35c4ff", "DDpX-mhItv2");
    }
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/
    React.createElement(ScanComponent, null)));


}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));