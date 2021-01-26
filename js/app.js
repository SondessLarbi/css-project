

let propertyDefinition = document.querySelector(".propertyDefinition")
let PropertyValue = document.querySelector(".propertyValue")
let propList = document.querySelector(".propList")


fetch('../data.json')
    .then((response) => response.json())
    .then((properties) => {
        let output = ""
        let outputProperty = ""
        let outputList = ""

        properties.map(Property => {
            Property.propertyValue.map(value => {
                (outputProperty += `
                    <div>
              <div class="propValue">
              <div><p >${Property.name} : ${value.value}</p>
              <p class="descreptionProperty">${value.description}</p></div>
              <div ><img style="width:150px" src=${value.propertyImg}></img></div>
              </div>
            </div>
            `)
            }),
            (output += `
                      <div>
                <div class="TitleAndTry"><p class="propertyTitle">${Property.name}</p>
                <a href='https://jsfiddle.net/8r936ck1/'>try it yourself</a></div>
                <p >${Property.definition}</p>
                <div>
                ${outputProperty}
                </div>
              </div>
              `
            )



propertyDefinition.innerHTML = output
        });

    })
    .catch(function (error) {
        console.error(error);
    });
