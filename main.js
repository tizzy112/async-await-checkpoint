//Task 01:
//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
/*
function time (){
    return new Promise(resolve => setTimeout(resolve, 1000));
}
const ourArray = ['ola', 'emma', 'bisola', 'ada']

async function iterateWithAsyncAwait (){
    try{
        await time(1000);
        console.log( ourArray[0]  + ' was present in class')

        await time(1000);
        console.log( ourArray[1] + ' was present in class')

        await time(1000);
        console.log( ourArray[2] + ' was present in class')

        await time(1000);
        console.log( ourArray[3] + ' was present in class')
    }
    catch(error){
        console.log(error)
}
}
iterateWithAsyncAwait()
 */

//Task 02:
//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
/*
async function awaitCall (){
    try{
        let response = await fetch('https://freetestapi.com/api/v1/cars');
        const data= await response.json()
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }
}
awaitCall()

*/

//Task 03:
//Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
/*
async function awaitCall (){
    try{
        let response = await fetch('https://freetestapi.com/api/v1/cars');
        if (response.status === 200){
        const data= await response.json()
        console.log('success',data)
    }else{
        console.log('server error', response)
    }
}
    catch(error){
        console.log(error)
    }
}
awaitCall()

*/

//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function asyncfunction1(){
    await new Promise (resolve => 
        setTimeout(resolve,1000))
        console.log('asyncfunction1');
}
async function asyncfunction2(){
    await new Promise (resolve => 
        setTimeout(resolve,1000))
        console.log('asyncfunction2');
}
async function asyncfunction3(){
    await new Promise (resolve => 
        setTimeout(resolve,1000))
        console.log('asyncfunction3');
}
async function chainedAsyncFunctions(){
    await asyncfunction1();
    await asyncfunction2();
    await asyncfunction3();
}
chainedAsyncFunctions();

