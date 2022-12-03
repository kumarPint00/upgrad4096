// getYear = function() {
//     return new Date().getFullYear();
// }
// getMonth = function() {
//     return new Date().getMonth();
// }
// module.exports = {getYear, getMonth};


// const date = {
//     getYear: function() {
//        return new Date().getFullYear();
//     },
//     getMonth: function() {
//        return new Date().getMonth();
//     }
//   }
//   module.exports = date;


  const getYear = function() {
    return new Date().getFullYear();
  }
  const getMonth = function() {
    return new Date().getMonth();
  }
  module.exports.getYear = getYear;
  module.exports.getMonth = getMonth;

  module.exports.getFullYear= function(){
    console.log("hello")
  }

