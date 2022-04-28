
// function longProcess() {
//     setTimeout(() => {
//        return 42
//      }, 200);
//     const total = 100 + longProcess();
//     console.log('total', total); // NaN
//  }

//  longProcess();
 
// function longProcess() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (1) {
//             resolve(42);
//         } else reject('failed');
//             }, 200);
//     });
// }

// longProcess()
// .then(result => {
//     let total = 100 + result;
//     console.log('total', total);
// })
// .catch(err => {
//     console.log(err);
// });


// function getJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.ok) {
//                 console.log('in then', response);
//                 return response.json();
//             } else {
//                 throw new Error('not ok');
//                 console.log('will not run');
//             }
//         })
//         .catch(err => {
//         console.log(err);
//         });
// }
    

const baseUrl = 'https://pokeapi.co/api/v2/';

// myList.then(data => {
//   console.log(data);
//   buildList(data);
// });

async function getJson(url) {
    try {
        let response = await fetch(url);
        
        if (response.ok) {
            console.log('in then', response);
            return await response.json();

        } else {
            console.log('will not run');
            throw new Error('not ok');
        }
    }
    catch (err) {
        console.log(err);
    }
}

const myList = getJson(baseUrl + 'type/3');
myList.then(data => {
        console.log(data);
        buildList(data);
    });
   
function buildList(data) {
  const myListElement = document.getElementById('list');
  myListElement.innerHTML = data.pokemon
    .map(item => `<li>${item.pokemon.name}</li>`)
    .join('');
}