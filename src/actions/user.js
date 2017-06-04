let exports = {};

exports.setName = (name) => {
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  }
};

exports.setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
};

export default exports;
