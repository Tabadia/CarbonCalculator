function car(){
    let car = document.getElementById('cars').value
    let distance = document.getElementById('cdist').value
    if (distance < 0 || distance == null) {
        document.getElementById('cf').innerHTML = 0 + parseFloat(document.getElementById('cf').innerHTML);
        return; 
    } else {
        distance *= 1.609;
    }
    console.log(car + distance);

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            responseText = this.responseText.replace('{\"carbonEquivalent\":','').replace('}','')
            document.getElementById('cf').innerHTML = (parseFloat(responseText) + parseFloat(document.getElementById('cf').innerHTML)).toFixed(3);
            treeCalc();
        }
    });


    xhr.open("GET", "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=" + car + "&distance=" + distance);
    xhr.setRequestHeader("x-rapidapi-host", "carbonfootprint1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c010d70ccfmsh5313bb2f0b768e1p173ee6jsnd2fd1c4a5ecf");

    xhr.send(data);
}

function transit(){
    let transit = document.getElementById('transit').value
    let distance = document.getElementById('tdist').value
    console.log(transit + distance);

    if (distance < 0 || distance == null) {
        document.getElementById('cf').innerHTML = 0 + parseFloat(document.getElementById('cf').innerHTML);
        return; 
    } else {
        distance *= 1.609;
    }

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            responseText = this.responseText.replace('{\"carbonEquivalent\":','').replace('}','')
            document.getElementById('cf').innerHTML = (parseFloat(responseText) + parseFloat(document.getElementById('cf').innerHTML)).toFixed(3);
            treeCalc();
        }
    });

    xhr.open("GET", "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=" + transit + "&distance=" + distance);
    xhr.setRequestHeader("x-rapidapi-host", "carbonfootprint1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c010d70ccfmsh5313bb2f0b768e1p173ee6jsnd2fd1c4a5ecf");

    xhr.send(data);
}

function flight(){
    let flight = document.getElementById('flight').value
    let distance = document.getElementById('fdist').value
    console.log(flight + distance);

    if (distance < 0 || distance == null) {
        document.getElementById('cf').innerHTML = 0 + parseFloat(document.getElementById('cf').innerHTML);
        return; 
    } else {
        distance *= 1.609;
    }

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            responseText = this.responseText.replace('{\"carbonEquivalent\":','').replace('}','')
            document.getElementById('cf').innerHTML = (parseFloat(responseText) + parseFloat(document.getElementById('cf').innerHTML)).toFixed(3);
            treeCalc();
        }
    });

    xhr.open("GET", "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?type=" + flight + "&distance=" + distance);
    xhr.setRequestHeader("x-rapidapi-host", "carbonfootprint1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c010d70ccfmsh5313bb2f0b768e1p173ee6jsnd2fd1c4a5ecf");

    xhr.send(data);
}

function energy(){
    let energy = document.getElementById('etype').value
    let distance = document.getElementById('edist').value
    console.log(energy + distance);

    if (distance < 0 || distance == null) {
        document.getElementById('cf').innerHTML = 0 + parseFloat(document.getElementById('cf').innerHTML);
        return; 
    } else {
        distance *= 1.609;
    }

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            responseText = this.responseText.replace('{\"carbonEquivalent\":','').replace('}','')
            document.getElementById('cf').innerHTML = (parseFloat(responseText) + parseFloat(document.getElementById('cf').innerHTML)).toFixed(3);
            treeCalc();
        }
    });

    xhr.open("GET", "https://carbonfootprint1.p.rapidapi.com/CleanHydroToCarbonFootprint?consumption=" + distance + "&energy=" + energy);
    xhr.setRequestHeader("x-rapidapi-host", "carbonfootprint1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c010d70ccfmsh5313bb2f0b768e1p173ee6jsnd2fd1c4a5ecf");

    xhr.send(data);
}

function food(){
    let food = document.getElementById('ftype').value
    let cal = document.getElementById('cal').value
    cal = parseInt(cal)
    console.log(food+cal)
    if (food == 'd'){
        food = 2.2;
    }
    else if (food == 'ss'){
        food = 0.6;
    }
    else if (food == 'os'){
        food = 0.8;
    }
    else if (food == 'f'){
        food = 4.6;
    }
    else if (food == 'v'){
        food = 2.8;
    }
    else if (food == 'cb'){
        food = 1.3;
    }
    else if (food == 'd'){
        food = 4.5;
    }
    else if (food == 'cfp'){
        food = 3.8;
    }  
    else if (food == 'bl'){
        food = 14.1;
    }
    kg = (food * cal / 1000000)
    console.log(kg)
    document.getElementById('cf').innerHTML = parseFloat(kg) + parseFloat(document.getElementById('cf').innerHTML);
    treeCalc();
}

function fuel(){
    let fuel = document.getElementById('futype').value
    let distance = document.getElementById('litre').value
    console.log(fuel + distance);

    if (distance < 0 || distance == null) {
        document.getElementById('cf').innerHTML = 0 + parseFloat(document.getElementById('cf').innerHTML);
        return; 
    } else {
        distance *= 1.609;
    }

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            responseText = this.responseText.replace('{\"carbonEquivalent\":','').replace('}','')
            document.getElementById('cf').innerHTML = (parseFloat(responseText) + parseFloat(document.getElementById('cf').innerHTML)).toFixed(3);
            treeCalc();
        }
    });

    xhr.open("GET", "https://carbonfootprint1.p.rapidapi.com/FuelToCO2e?litres=" + distance + "&type=" + fuel);
    xhr.setRequestHeader("x-rapidapi-host", "carbonfootprint1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c010d70ccfmsh5313bb2f0b768e1p173ee6jsnd2fd1c4a5ecf");

    xhr.send(data);
}

function reset(){
    document.getElementById('cf').innerHTML = 0;
    document.getElementById('treeKill').innerHTML = 0;
}

function treeCalc() {
    const cf = parseFloat(document.getElementById('cf').innerHTML);
    const treeWeight = 1000; //average weight of a tree?????
    const treeDMass = treeWeight / 2;
    const treeAge = 20; // average age of a tree?????????
    const treeCarb = treeDMass * 0.475;
    const treeCO2 = treeCarb * 3.67;
    const treeDie = treeCO2 / treeAge;
    const numOfTreesD = cf / treeDie;
    //console.log(treeDie);
    document.getElementById('treeKill').innerHTML = parseFloat(document.getElementById('treeKill').innerHTML) + parseFloat(numOfTreesD.toFixed(3));
}