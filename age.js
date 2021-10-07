function ageCalc() {
    var currentYear = document.getElementById('currentYear').value;
    var bornYear = document.getElementById('bornYear').value;
    var age = currentYear - bornYear

    if (currentYear < bornYear || currentYear != 2021) {
        alert('You entered a wrong year')
    }
    else if (isNaN(currentYear)) {
        alert('Please write numbers only')
    }
    else if (isNaN(bornYear)) {
        alert('Please write numbers only')
    }
    else {
        alert('Your age is: ' + age)
    }
}




function tempCalc(){
    var temperature = document.getElementById('Temperature').value
    var celsius = (temperature-32)*9/5
    alert(`The temperature is ${celsius} degrees celsius`)
    if(celsius > 23){ alert("It's warm today wear shorts and T-shrits")}
    else if(celsius < 22 && celsius > 16){alert("Wear jeans and long sleeves")}
    else if(celsius < 16 && celsius > 12){alert("It's going to be cold today")}
    else{alert("Becareful of the possible rain today")}
}