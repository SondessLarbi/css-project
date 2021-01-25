


let propList = document.querySelector(".propList")

fetch('https://f7daacb2-ea37-4c20-9719-dc271658afb7.mock.pstmn.io/v7/property')
.then((response)=> response.json())
.then((properties)=>{
let  outputList = ""

    properties.map(proplist => {
        (output += `
        <div>
  <p class="propertyTitle">${proplist.name}</p>

  </div>
</div>
`
)})
propList.innerHTML = outputList


    })
      .catch(function(error){
console.error(error);
});
