var normalSlider = React.createElement(ReactBootstrapSlider, {
  step: 1,
  max: 24,
  min: 0,
  range: true, // "true", "false"
  handle: "custom", // "auto", ""
  orientation: "horizental", // "horizental", "vertical"
  reversed: false,
  rtl: "auto", // "left", "right"
  formatter: function(value) {
    if (Array.isArray(value)) {
      return value[0] + ":00 ~ " + value[1] + ":00";
    }
    return value;
  },
  handleChange: function(data) {
    console.log(data.target.value);
  },
  value: [8, 20], // eg: range? [1, 3]: 3
  disabled: "anything" // "disabled", "anything"
});

ReactDOM.render(
  normalSlider,
  document.getElementById("react-bootstrap-slider")
);
