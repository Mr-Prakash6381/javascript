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

// data.then((name) => {
//     return getUserDetails(name);
// }).then((userDetail) => {
//     console.log(userDetail);
// }).catch((error) => {
//     console.log(error.stack);
// }).finally(() => {
//     console.log("Finally");
// })

//----------------Await-------------------
// try {
//     const name = await data;
//     const userDtail = await getUserDetails(name);
//     console.log(userDtail);
//     console.log("Test");

// } catch (error) {
//     console.log(error.message);

// }
// finally {
//     console.log("From Finally");
// }
// console.log("Last");

//----------Async--------------
async function processing() {
    try {
        const name = await data;
        const userDtail = await getUserDetails(name);
        console.log(userDtail);
        console.log("Test");

    } catch (error) {
        console.log(error.message);

    }
    finally {
        console.log("From Finally");
    }

}
processing()
console.log("Last");
