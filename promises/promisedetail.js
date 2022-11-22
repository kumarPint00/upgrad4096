// let promise = new Promise(function(resolve, reject){
// //     //do something
// });

// // code in action 
// const count = false;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

// //Chaining the Promise with then()


// // returns a promise

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });


// //JavaScript catch() method
// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );
















// const addition = (a, b) =>
//   new Promise((resolve, reject) => {
//     if (typeof a == "number" && typeof b == "number") {
//       resolve(a + b);
//     } else {
//         reject ("Not a Number")
//     }
//   });

// // Resolve
//   addition(10, 5)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   // Reject
//   addition(10, "5") 
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//   //Promise methods
//   //Promise.all() Method
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, "resolved");
//   }); //will be resolved after 300ms
  
//   const promise2 = 93; //non-promise
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "resolved2");
//   }); // will be resolved after 100ms
  
//   Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
//   //expected output: [ 'resolved', 93, 'resolved2' ]


//   //Rejection of Promise.all() : Fail-Fast Behavior 

//   const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
//   });
  
//   const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
//   });
  
//   const pro3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("rejected"), 3000);
//   });
  
//   Promise.all([pro1, pro2, pro3])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  
//     //expected output: rejected




//     // another example
//     const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//          resolve('Promise1 resolved');
//         }, 2000);
//        });
//        const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//          resolve('Promise2 resolved');
//         }, 1500);
//        });
//        Promise.all([promise1, promise2])
//          .then((data) => console.log(data[0], data[1]))
//          .catch((error) => console.log(error));


//          // if rejected
//          const promise1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//              resolve('Promise1 resolved');
//             }, 2000);
//            });
//            const promise2 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//              reject('Promise2 rejected');
//             }, 1500);
//            });
//            Promise.all([promise1, promise2])
//              .then((data) => console.log(data[0], data[1]))
//              .catch((error) => console.log(error));  // Promise2 rejected
           

//     //Promise.any() Method
//     const SlowlyDone = new Promise((resolve, reject) => {
//         setTimeout(resolve, 500, "Done slowly");
//       }); //resolves after 500ms
      
//       const QuicklyDone = new Promise((resolve, reject) => {
//         setTimeout(resolve, 100, "Done quickly");
//       }); //resolves after 100ms
      
//       const Rejection = new Promise((resolve, reject) => {
//         setTimeout(reject, 100, "Rejected"); //always rejected
//       });
      
//       Promise.any([SlowlyDone, QuicklyDone, Rejection])
//         .then((value) => {
//           console.log(value);
//           //  QuicklyDone fulfils first
//         })
//         .catch((err) => {
//           console.log(err);
//         });
      
//       //expected output: Done quickly

//       //Rejection of Promise.any()
//       const Rejection = new Promise((resolve, reject) => {
//         setTimeout(reject, 100, "Rejected"); //always rejected
//       });
      
//       Promise.any([Rejection])
//         .catch((err) => {
//           console.log(err);
//         });
      
//       // expected output: "AggregateError: No Promise in Promise.any was resolved"

//       //Promise.prototype.finally()
//       const addition = (a, b) =>
//   new Promise((resolve, reject) => {
//     if (typeof a == "number" && typeof b == "number") {
//       resolve(a + b);
//     } else {
//       reject("Not a Number");
//     }
//   });

// addition(10, 5)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Numbers are added");
//   });

//   /* expected output: 15
//                      Numbers are added */


// //Promise.race() Method
// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 200);
//   });
  
//   const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 100);
//   });
  
//   Promise.race([pro1, pro2])
//     .then((response) => {
//       console.log(response); //output: two
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
//   const pro3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("rejected"), 300);
//   });
  
//   const pro4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("four"), 400);
//   });
  
//   Promise.race([pro3, pro4])
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     }); //output: rejected

//     //If we take this same example and pass all the promises inside Promise.race(), it will return two as output, as the pro2 is the fastest promise to be settled in this case.
//     const pro1 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("one"), 200);
//       });
      
//       const pro2 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("two"), 100);
//       });
      
//       const pro3 = new Promise((resolve, reject) => {
//         setTimeout(() => reject("rejected"), 300);
//       });
      
//       const pro4 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("four"), 400);
//       });
      
//       Promise.race([pro1, pro2, pro3, pro4])
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
      
//       //output: two

// // another example race()
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      resolve('Promise1 resolved');
//     }, 1000);
//    });
//    const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      reject('Promise2 rejected');
//     }, 1500);
//    });
//    Promise.race([promise1, promise2])
//      .then((data) => console.log(data))  // Promise1 resolved
//      .catch((error) => console.log(error));


// //Promise Chaining
// const promise1 = new Promise((resolve, reject) => {
//     resolve('Promise1 resolved');
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     resolve('Promise2 resolved');
//   });
//   const promise3 = new Promise((resolve, reject) => {
//     reject('Promise3 rejected');
//   });
//   promise1
//     .then((data) => {
//       console.log(data);  // Promise1 resolved
//       return promise2;
//     })
//     .then((data) => {
//       console.log(data);  // Promise2 resolved
//       return promise3;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);  // Promise3 rejected
//     });


//     //Common Mistake
//     const promise1 = new Promise((resolve, reject) => {
//         resolve('Promise1 resolved');
//       });
//       const promise2 = new Promise((resolve, reject) => {
//         resolve('Promise2 resolved');
//       });
//       const promise3 = new Promise((resolve, reject) => {
//         reject('Promise3 rejected');
//       });
//       promise1.then((data) => {
//         console.log(data);  // Promise1 resolved
//         promise2.then((data) => {
//           console.log(data);  // Promise2 resolved
          
//           promise3.then((data) => {
//             console.log(data);
//           }).catch((error) => {
//             console.log(error);  // Promise3 rejected
//           });
//         }).catch((error) => {
//           console.log(error);
//         })
//       }).catch((error) => {
//           console.log(error);
//         });