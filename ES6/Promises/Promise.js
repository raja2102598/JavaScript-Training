const myPromise = new Promise(function (resolve,reject) {
    if (1 < 2) {
        resolve("True")//Then()
    } else {
        reject("False")//Catch()
    }
})

myPromise
    .then(function (success) {
        console.log(success)
    })
    .catch(function (error) {
        console.log(error)
    })