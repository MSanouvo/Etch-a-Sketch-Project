//Check JS works
console.log('Hello World')

//Genertate Grid
const container = document.getElementById("container")
const button = document.querySelector('button')
let end = 16

function generateGrid(end){
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

function gridPrompt(){
    end = prompt('Please select amount of grid sides. (max: 120)')
    if(end > 120){
        end = prompt('Number too large. Please try again. (max:120)')
    } 
    return end
}

function clearGrid(){
    while(container.firstChild){
        container.firstChild.remove()
    }
}

//Event handlers
addEventListener('load', (event) => {
    generateGrid(end)
});

button.addEventListener('click', () => {
    gridPrompt()
    clearGrid()
    generateGrid(end) 
})
