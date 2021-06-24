console.log("JS started")

const myPromise = new Promise((resolve,reject) => {

    if (2 > 1) {

        const data = [100,200,300,400,500,900]

        resolve(data)
    }
    else {
        reject("Failed to fetch the data")
    }
})

myPromise
    .then(data => {
        console.log("Data is ",data)

        const filterData = data.filter(val => val <= 400)
        return filterData
    })
    .then(filterData => console.log("Filtered Data",filterData))
    .catch(error => console.log("Error is",error))

console.log("Js ended")