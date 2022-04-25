
const metToFeet = document.getElementById('met-feet')
const litToGallon = document.getElementById('lit-gallon')
const kiloToPounds = document.getElementById('kilo-pounds')
const btn = document.getElementById('btn-click')




const convertToUnit = () => {
    
    let inputValue = document.getElementById('input-val').innerText

    let meter = (inputValue * 0.3048).toFixed(3)
    let feet = (inputValue / 0.3048).toFixed(3)
    let gallon = (inputValue * 0.264172).toFixed(3)
    let liters = (inputValue / 0.264172).toFixed(3)
    let pounds = (inputValue * 2.20462).toFixed(3)
    let kilograms = (inputValue / 2.20462).toFixed(3)
    

    metToFeet.textContent = `${inputValue} meters = ${feet} feets | ${inputValue} feets = ${meter} meters`
    litToGallon.textContent = `${inputValue} Liters = ${gallon} gallons | ${inputValue} gallons = ${liters} meters`
    kiloToPounds.textContent = `${inputValue} Kilograms = ${pounds} pounds | ${inputValue} pounds = ${kilograms} Kilograms`
}





function convert(){
    const inputNum = document.getElementById('input-num').value
    console.log(inputNum)
    document.getElementById('input-val').textContent = inputNum
    convertToUnit()
    
}
convertToUnit()