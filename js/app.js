



let PropertyList = document.querySelector(".propertyList")
let PropertyValue = document.querySelector(".propertyValue")
let propList = document.querySelector(".propList")

fetch('https://f7daacb2-ea37-4c20-9719-dc271658afb7.mock.pstmn.io/v7/property')
.then((response)=> response.json())
.then((properties)=>{
    let output = ""
    let outputProperty = ""
let  outputList = ""

//     properties.map(proplist => {
//         (output += `
//         <div>
//   <p class="propertyTitle">${proplist.name}</p>

//   </div>
// </div>
// `
// )})
// propList.innerHTML = outputList


    properties.map(Property => {
                      (output += `
                      <div>
                <div class="TitleAndTry"><p class="propertyTitle">${Property.name}</p>
                <a href='https://jsfiddle.net/8r936ck1/'>try it yourself</a></div>
                <p >${Property.definition}</p>
                <img   class="propertyImg"  src=${Property.Img}></img>
                <div>
                </div>
              </div>
              `
              )
                            
                Property.propertyValue.forEach(value=>{
                    (outputProperty += `
                    <div>
              <div class="propValue">
              <div><p >${Property.name} : ${value.value}</p>
              <p >${value.description}</p></div>
              <div ><img src=${value.propertyImg}></img></div>
              </div>
            </div>
            `)
                })

              PropertyList.innerHTML = output
              PropertyValue.innerHTML = outputProperty

    });

    })
      .catch(function(error){
console.error(error);
});
