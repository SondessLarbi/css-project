



const PropertyList = document.querySelector(".PropertyList")
const myFetch = fetch('https://f7daacb2-ea37-4c20-9719-dc271658afb7.mock.pstmn.io/v3/property')
myFetch.then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);
}).catch(function(error){
    console.error('hhhhhhhhhhh');
console.error(error);
});

const showProperties = () => {
  let output = ""
  myFetch.forEach(
    ({ name }) =>
      (output += `
              <div class="card">
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  PropertyList.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showProperties)