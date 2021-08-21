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
  const result: any = await myPromise
 
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
  const result: any = await myPromise
 
  const result2 = result + 2

  console.log('Result:', result2) // log: 'Result: 3'
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



//Ejercicios parte 2

//Reescribe los bloques de código para usar async/await

// Ejercicio 1


const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
  }, 500)
})
async function getResult() {
  const result = await myPromise
  .then((result) => {
    return 'This is a ' + result
  })
  myPromise.then((result) => {
    console.log(result)
  })
}
getResult()

// Ejercicio 2


const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1)
    } else {
      reject('An error has occurred')
    }
  }, 500)
})
async function getResult(){
  const result = await myPromise
  .then((result: number ) => {
    return result + 1
  })
  .then((result) => {
   console.log(result)
  })
  .catch((reject) => {
    console.log(reject)
  })
}

getResult()

