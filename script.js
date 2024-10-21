//Check JS works
console.log('Hello World')

//Genertate Grid
const container = document.getElementById("container")


const button = document.querySelector('button')




let end = 16

function generateGrid(){
    let i = 0
    let k = 0
    console.log('function fired')
    container.setAttribute('style', "background: pink;")
    while(i < end){
        //create columns
        const gridColumn = document.createElement('div')
        gridColumn.setAttribute("style", "display: flex; flex:auto; flex-direction: column; border: 1px solid black;")
        container.appendChild(gridColumn)
        i++
        while(k < end){
            //create rows
            const gridRow = document.createElement('div')
            gridRow.setAttribute("style", "display: flex; flex:auto; flex-direction: row; border: 1px solid black;")
            gridColumn.appendChild(gridRow)
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

//button.addEventListener('click', generateGrid)