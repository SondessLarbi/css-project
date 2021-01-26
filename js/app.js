let data =[
    {
          "name":"align-content",
          "definition": "align-content property aligns the content vertically (along cross/block/column axis) within a container. The container adjusts its padding so as to align the content vertically. We are using a flex container",
          "Img":"./images/normal.png",
      
          "propertyValue": [
              {
                "name":"normal",
                  "description":"It stretches out the descendant elements to fill the height completely.",
                  "value":"normal",
                  "propertyImg":"../images/normal.png"
              },
              {
                "name":"normal",
                  "description":"It stretches out the descendant elements to fill the height completely.",
                  "value":"normal",
                  "propertyImg":"https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.comC/O"
              },
              {
                "name":"normal",
                  "description":"It stretches out the descendant elements to fill the height completely.",
                  "value":"normal",
                  "propertyImg":"https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.comC/O"
              },
              {
                "name":"normal",
                  "description":"It stretches out the descendant elements to fill the height completely.",
                  "value":"normal",
                  "propertyImg":"https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.comC/O"
              },
              {
                "name":"normal",
                  "description":"It stretches out the descendant elements to fill the height completely.",
                  "value":"normal",
                  "propertyImg":"https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.comC/O"
              }
              ]
  }
  ]



let propertyDefinition = document.querySelector(".propertyDefinition")
let PropertyValue = document.querySelector(".propertyValue")
let propList = document.querySelector(".propList")
//  let output =""
//  let outputProperty = ""

// var numbers = [65, 44, 12, 4];
// let newarr = data.map(myFunction)


        // data.map(Property => {
        //     (output += `
        //         <div>
        //         <div class="TitleAndTry"><p class="propertyTitle">${Property.name}</p>
        //         <a href='https://jsfiddle.net/8r936ck1/'>try it yourself</a></div>
        //         <p >${Property.definition}</p>
        //         <img src=${Property.Img}></img>
        //         <div>
                
        //         </div>
        //       </div>
        //       `
        //     )
            // data.propertyValue.map(value => {
            //     (outputProperty += `
            //         <div>
            //   <div class="propValue">
            //   <div><p >${Property.name} : ${value.value}</p>
            //   <p >${value.description}</p></div>
            //   <div ><img src=${value.propertyImg}></img></div>
            //   </div>
            // </div>
            // `)
            // })
        // propertyDefinition.innerHTML = output
        // PropertyValue.innerHTML = outputProperty
        // })






// fetch("../data.json")
// .then(function(res){
//     return res.json
// })
// .then(function(data){
//     console.log(data)
// })
fetch('https://f7daacb2-ea37-4c20-9719-dc271658afb7.mock.pstmn.io/v7/property')
    .then((response) => response.json())
    .then((properties) => {
        let output = ""
        let outputProperty = ""
        let outputList = ""

        properties.map(Property => {
            (output += `
                      <div>
                <div class="TitleAndTry"><p class="propertyTitle">${Property.name}</p>
                <a href='https://jsfiddle.net/8r936ck1/'>try it yourself</a></div>
                <p >${Property.definition}</p>
                <div>
                </div>
              </div>
              `
            )

            Property.propertyValue.forEach(value => {
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

propertyDefinition.innerHTML = output
            PropertyValue.innerHTML = outputProperty

        });

    })
    .catch(function (error) {
        console.error(error);
    });
