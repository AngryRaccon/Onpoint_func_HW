const Router = function () {
  this.data = {};
  this.bind = function (URL, method, callback) {
    this.data[`${URL}, ${method}`] = callback;
  }

  this.runRequest = function (URL, method) {
    let func = this.data[`${URL}, ${method}`];
    if (func) {
      return func();
    } else {
      return "Error 404: Not Found";
    }
  }
};

module.exports = Router;
