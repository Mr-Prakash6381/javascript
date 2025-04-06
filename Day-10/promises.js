const data = new Promise((resolve, reject) => {
  setTimeout(() => {
      const ans = "Anto";
      if (ans) {
          resolve(ans);
      }
      else {
          reject(new Error("No Data"))
      }

  }, 1000);
});

function getUserDetails(inputName) {
  const userDatails = new Promise((resolve, reject) => {
      setTimeout(() => {
          let userDetails = [{ name: "Anto", age: 30 }];
          const user = userDetails.find((user) => user.name === inputName)
          if (user) {
              resolve(user);
          }
          else {
              reject("Error Occurred")
          }
      }, 1000)
  })
  return userDatails;
}
data.then((name) => {
  return getUserDetails(name);
}).then((userDetail) => {
  console.log(userDetail);
}).catch((error) => {
  console.log(error.stack);
}).finally(() => {
  console.log("Finally");
})