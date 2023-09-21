function firstFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("first function called after 4 second.");
        resolve();
      }, 4000);
    });
  }
  
  function secondFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second function called after 3 seconds.");
        resolve();
      }, 3000);
    });
  }
  
  function thirdFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Third function called after 2 seconds.");
        resolve();
      }, 2000);
    });
  }
  
  function fourthFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fourth function called after 1 seconds");
        resolve();
      }, 1000);
    });
  }
  
  function fifthFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fifth function called at once");
        resolve();
      });
    });
  }
  
  firstFn()
    .then(secondFn)
    .then(thirdFn)
    .then(fourthFn)
    .then(fifthFn)
    .catch((error) => {
      console.error("Error:", error);
    });