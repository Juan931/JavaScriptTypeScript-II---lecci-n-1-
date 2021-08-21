// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;



//EJERCICIOS PARTE 1

/*
Sigue las indicaciones de cada bloque de código.

- Agrega las porciones de código faltantes para que el código se ejecute sin errores. El código faltante esta indicado por `???`
*/

//Ejercicio 1

const myPromise =  new Promise((res, rej) => {
  setTimeout(() => {
    res('Success')
  }, 850)
})

async function getResult() {
  const result = await myPromise
  
  console.log('Result:', result) // log: 'Result: Success'
}

getResult()


//Ejercicio 2



const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

async function getResult() {
  const result = await myPromise
 
  const result2 = result + 2

  console.log('Result:', result2 ) // log: 'Result: 3'
}

getResult()



//Ejercicio 3


const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

async function getResult() {
  const result = await myPromise
 
  const result2 = result + 2

  console.log('Result:', result2 // log: 'Result: 3'
}

getResult()



//Ejercicio 4

const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    reject('error!')
  }, 1000)
})

async function getResult() {
  try {
    const result = await myPromise 
    console.log(result)
  } catch(reject) {
    console.error(reject);
  }
}

getResult()