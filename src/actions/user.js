let exports = {};

exports.setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name
  };
};

exports.setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
};

export default exports;
