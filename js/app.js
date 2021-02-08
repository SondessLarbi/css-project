

let property = document.querySelector(".property")
let PropertyValue = document.querySelector(".propertyValue")
let propertyList = document.querySelector(".propertyList")


fetch('../data.json')
    .then((response) => response.json())
    .then((properties) => {
        let output = ""
        let outputProperty = ""
        let outputList = ""
        properties.map(Property => {
            console.log(Property.name,"hahahhaahhahahhahlist")
        })
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
                <a class="tryJsfiddle" href='https://jsfiddle.net/8r936ck1/'>try it yourself</a></div>
                <div class="definition" >
                <p class="defCont">Definition</p>
                <p class="defProp">${Property.definition}</p>
                </div>
                <div class="value">
                <p class="ValueCont">Property values</p>
                ${outputProperty}
                </div>
              </div>
              `
            )



            property.innerHTML = output
        });

    })
    .catch(function (error) {
        console.error(error);
    });

    fetch('../data.json')
    .then((response) => response.json())
    .then((properties) => {
        let outputList = ""
        properties.map(Property => {
            (outputList += `
            <div class="list">
                    <a class="proplist" href="https://www.w3schools.com">${Property.name}</a>
    </div>
    `
  )
            propertyList.innerHTML = outputList

        })


    })
    .catch(function (error) {
        console.error(error);
    });