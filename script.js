//Check JS works
console.log('Hello World')

//Genertate Grid
const container = document.getElementById("container")
const button = document.querySelector('button')
let end = 16

function generateGrid(){
    let i = 0
    let k = 0
    //container.setAttribute('style', "background: pink;")
    while(i < end){
        //create columns
        const gridColumn = document.createElement('div')
        gridColumn.setAttribute("style", "display: flex; flex:auto; flex-direction: column;")
        container.appendChild(gridColumn)
        i++
        while(k < end){
            //create rows
            const gridRow = document.createElement('div')
            gridRow.setAttribute("style", "display: flex; flex:auto; flex-direction: row;")
            gridColumn.appendChild(gridRow)
            //Hover Effect for grid children
            gridRow.addEventListener('mouseover', () => {
                gridRow.setAttribute("style", "display: flex; flex:auto; flex-direction: column; background-color: pink;")
            })
            //gridRow.addEventListener('mouseleave', () => {
                //gridRow.setAttribute("style", "display: flex; flex:auto; flex-direction: column;")
            //})
            k++
        }
        k=0
    }
}


//Event handlers
addEventListener('load', (event) => {
    console.log('page loaded')
    generateGrid()
});

button.addEventListener('click', generateGrid)