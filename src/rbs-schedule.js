var DateRangeItem = React.createClass({
  render: function() {
    var self = this,
      props = this.props;

    console.log(self.props.disabled);

    return React.createElement(
      "div",
      { className: "slider-wrapper" },
      React.createElement(
        "div",
        { className: "slider-title" },
        self.props.label
      ),
      React.createElement(ReactBootstrapSlider, {
        step: 1,
        max: 24,
        min: 0,
        range: true,
        handle: "triangle",
        orientation: "vertical",
        reversed: false,
        rtl: "auto",
        formatter: function(value) {
          if (Array.isArray(value)) {
            return value[0] + ":00 ~ " + value[1] + ":00";
          }
          return value;
        },
        handleChange: function(data) {
          var startHour = data.target.value[0];
          var endHour = data.target.value[1];
          console.log(
            `[${
              self.props.label
            }] run import task from ${startHour}:00 to ${endHour}:00`
          );
        },
        value: self.props.value,
        disabled: self.props.disabled
      })
    );
  }
});
var TimeInfoItme = React.createElement(
  "div",
  {
    className: "slider-wrapper",
    style: { position: "absolute", height: "140px" }
  },
  React.createElement(
    "div",
    {
      style: { position: "absolute", top: "18px", color: "#e8e8e8" }
    },
    "00:00"
  ),
  React.createElement(
    "div",
    {
      style: { position: "absolute", bottom: "0", color: "#e8e8e8" }
    },
    "24:00"
  )
);
var rootElement = React.createElement(
  "div",
  { className: "import-shedule-panel" },
  React.createElement(DateRangeItem, {
    value: [3, 8],
    label: "M",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [9, 18],
    label: "T",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [13, 15],
    label: "W",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [7, 10],
    label: "T",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [1, 5],
    label: "F",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [2, 22],
    label: "S",
    disabled: "anything"
  }),
  React.createElement(DateRangeItem, {
    value: [9, 18],
    label: "S",
    disabled: "disabled"
  }),
  TimeInfoItme
);

ReactDOM.render(
  rootElement,
  document.getElementById("react-bootstrap-slider2")
);
