
data=[
    {
          "name":"align-content",
          "definition": "align-content property aligns the content vertically (along cross/block/column axis) within a container. The container adjusts its padding so as to align the content vertically. We are using a flex container",
          "Img":"https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png",
      
          "propertyValue": [
              {
                "name":"flex-start",
                  "description":"lines packed to the start of the container.",
                  "value":"flex-start",
                  "propertyImg":"../images/flex-start.png"
              },
              {
                "name":"flex-end",
                  "description":"lines packed to the end of the container.",
                  "value":"flex-end",
                  "propertyImg":"../images/flex-end.png"
              },
              {
                "name":"center",
                  "description":"lines packed to the center of the container.",
                  "value":"center",
                  "propertyImg":"../images/center.png"
              },
              {
                "name":"space-between",
                  "description":"lines evenly distributed; the first line is at the start of the container while the last one is at the end.",
                  "value":"space-between",
                  "propertyImg":"../images/space-between.png"
              },
              {
                "name":"space-around",
                  "description":"lines evenly distributed with equal space between them.",
                  "value":"space-around",
                  "propertyImg":"../images/space-around.png"
              }
              ]
  },
  {
    "name":"align-items",
    "definition": "align-content property aligns the content vertically (along cross/block/column axis) within a container. The container adjusts its padding so as to align the content vertically. We are using a flex container",
    "Img":"https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png",

    "propertyValue": [
        {
          "name":"flex-start",
            "description":"lines packed to the start of the container.",
            "value":"flex-start",
            "propertyImg":"../images/flex-start.png"
        },
        {
          "name":"flex-end",
            "description":"lines packed to the end of the container.",
            "value":"flex-end",
            "propertyImg":"../images/flex-end.png"
        },
        {
          "name":"center",
            "description":"lines packed to the center of the container.",
            "value":"center",
            "propertyImg":"../images/center.png"
        },
        {
          "name":"space-between",
            "description":"lines evenly distributed; the first line is at the start of the container while the last one is at the end.",
            "value":"space-between",
            "propertyImg":"../images/space-between.png"
        },
        {
          "name":"space-around",
            "description":"lines evenly distributed with equal space between them.",
            "value":"space-around",
            "propertyImg":"../images/space-around.png"
        }
        ]
},
{
  "name":"align-self",
  "definition": "align-content property aligns the content vertically (along cross/block/column axis) within a container. The container adjusts its padding so as to align the content vertically. We are using a flex container",
  "Img":"https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png",

  "propertyValue": [
      {
        "name":"flex-start",
          "description":"lines packed to the start of the container.",
          "value":"flex-start",
          "propertyImg":"../images/flex-start.png"
      },
      {
        "name":"flex-end",
          "description":"lines packed to the end of the container.",
          "value":"flex-end",
          "propertyImg":"../images/flex-end.png"
      },
      {
        "name":"center",
          "description":"lines packed to the center of the container.",
          "value":"center",
          "propertyImg":"../images/center.png"
      },
      {
        "name":"space-between",
          "description":"lines evenly distributed; the first line is at the start of the container while the last one is at the end.",
          "value":"space-between",
          "propertyImg":"../images/space-between.png"
      },
      {
        "name":"space-around",
          "description":"lines evenly distributed with equal space between them.",
          "value":"space-around",
          "propertyImg":"../images/space-around.png"
      }
      ]
}
  ]

let property = document.querySelector(".container")
let PropertyValue = document.querySelector(".propertyValue")
let propertyList = document.querySelector(".propertyList")


// fetch('../data.json')
//     .then((response) => response.json())
//     .then((properties) => {
        let output = ""
        let outputProperty = ""
        data.map(Property => {
            Property.propertyValue.map(value => {
                (outputProperty += `

                <div class="radio">
                <input autocomplete="off" type="radio">
                <label>${Property.name}</label>
            </div>
            `)
            }),
            (output += `
                      <div class="property">
                      <div>
                      <p>${Property.name}</p>
                      <p>${Property.definition}</p>
                  </div>
                  <div class="karama">
                  <div class="codeContainer">
                  <div class="propertyName">${Property.name} property</div>
                  <form >
                  ${outputProperty}
                  </form>
                  </div>
                  <div class="resultContainer">
                  <div class="propertyName">Result :</div>
                  <div class="resultDiv"></div>
              </div>
                  </div>
                  <div>Click the property values above to see the result</div>
              </div>
              `
            )
            property.innerHTML = output
        });


        let outputList = ""
        data.map(Property => {
            (outputList += `
            <div class="list">
                    <a class="proplist" href="https://www.w3schools.com">${Property.name}</a>
    </div>
    `
  )
            propertyList.innerHTML = outputList

        })
    .catch(function (error) {
        console.error(error);
    });