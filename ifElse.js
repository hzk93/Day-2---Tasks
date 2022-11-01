function age(){
    let age = document.getElementById('age');
    let ageTemp = age.value;
    if(ageTemp >=18 && ageTemp < 21){
        document.getElementById('result').innerHTML = "You are allowed To Use Mobile"
    }

    else if (ageTemp > 21 && ageTemp < 70) {
        document.getElementById('result').innerHTML = "You are allowed To Use Laptop"
    }

    else{
        document.getElementById('result').innerHTML = "Invalid"
    }
}