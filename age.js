function ageCalc() {
    let currentYear = document.getElementById('currentYear').value;
    let bornYear = document.getElementById('bornYear').value;
    let age = currentYear - bornYear
    let date = new Date()

    if (currentYear == '' || bornYear == '') {
        alert('Please ensure that you filled up the spaces')
    }
    else if (isNaN(currentYear) || isNaN(bornYear)) {
        alert('Please write numbers only')
    }
    else if (currentYear < bornYear || currentYear != date.getFullYear()) {
        alert('Please enter correct details')
    }
    else {
        alert('Your age is: ' + age)
    }
}




function tempCalc(){
    let temperature = document.getElementById('Temperature').value
    let celsius = (temperature-32)*9/5


    if (temperature == '') {
        alert('Please enter temperature')
    }
    else if (isNaN(temperature)) {
        alert('Please write numbers only')
    }
    else if(celsius > 23){
        alert("The temperature is ${celsius} degrees. It's warm today wear shorts and T-shrits")
    }
    else if(celsius < 22 && celsius > 16){
        alert("The temperature is ${celsius} degrees. Wear jeans and long sleeves")
    }
    else if(celsius < 16 && celsius > 12){
        alert("The temperature is ${celsius} degrees. It's going to be cold today")
    }
    else{
        alert("The temperature is ${celsius} degrees. Becareful of the possible rain today")
    }
}