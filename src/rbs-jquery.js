$("#ex1").slider({
  formatter: function(value) {
    return value;
  },
  value: 10,
  min: 1,
  max: 100,
  step: 10,
  range: false
});
