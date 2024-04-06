// the promise object represent the cobplete (or failure) of an asynchronous operation and it's resulting value.

// it complete in future

// Promise hase 3 state :   pending: fulfield : reject

//history before blue brid and Q library used to handle promises.

// creation promise

//it reduce call back hell (function in funtoin)

const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  // Db calls, cryptography, network

  setTimeout(() => {
    console.log("async task is complete");
    resolve(); // it is use to connect to then
  }, 1000);
});

//resolve is connected to then()

promiseOne.then(() => {
  console.log("promise consumed");
});

// better way or professional way

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this 2 promise");
    resolve();
  }, 1000);
}).then(() => {
  console.log("2 promise is consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("3 promise");
    resolve({ username: "hs", email: "hs@gmail.com" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

const forthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("4 promise");
    let error = true;
    if (!error) {
      resolve({ username: "hs", email: "hs@gmail.com" });
    } else {
      reject("this is rejected");
    }
  }, 1000);
});

forthPromise
  .then((user) => {
    console.log("4 reslolve");
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise resolve or reject");
  });

// const fivePromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("5 promise");
//     let error = false;
//     if (!error) {
//       resolve({ username: "hs", password: "hs@gmail.com" });
//     } else {
//       reject('this is 5 rejected')
//     }
//     }, 1000)
// });


// async function usingAsync(){
//     const response = await fivePromise
//     console.log(response);
// }

