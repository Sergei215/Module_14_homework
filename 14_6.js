function newValue (){
    const sv = Math.round(Math.random()*100)
    return sv
}

const startValue=newValue()

const celValue=startValue%2

console.log(startValue)
console.log(celValue)

const myPromise = new Promise((resolve, reject) => {
    if (celValue==0) {
        setTimeout(() =>{
            resolve()
        },3000)
    } else {
        setTimeout(() =>{
        reject();
        },3000)
    }
});

myPromise
    .then((result) => {
        console.log("Сгенерированное число — "+`${startValue}`+"\"");
    })
    .catch((error) => {
        console.log("Сгенерированное число — "+`${startValue}`+"\"");
    })