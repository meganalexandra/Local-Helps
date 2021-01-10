class JsonReader {
    var
    source;
}

function jsonReader(source) {
    this.source = source;
}

function read() {
    var jsonData = readFile(source);
    jsonObject = new JSONObject(jsonData);
    return parseListOfCharities(jsonObject);
}

function parseListOfCharities(jsonObject) {
    var charities = {
        name = jsonObject.stringify("C_name");
        link = jsonObject.stringify("C_Link");
        pickUp = jsonObject.stringify("PckUp");
        donations = {
            nonPersishableFood = jsonObject.stringify("NPFood");
            perishableFood = jsonObject.stringify("PFood");
            clothing = jsonObject.stringify("Clth");
            feminineHygeine = jsonObject.stringify("Fhyg");
            generalHygeine = jsonObject.stringify("Ghyg");
            childrensToys = jsonObject.stringify("Ctoy");
            furniture = jsonObject.stringify("Furn");
            books = jsonObject.stringify("Book");
        }

        var loc = new charities;
    }
    for (i = 0; i < charities.length; i++) {
        charity = charities[i];
        addCharity(charities, charity);
    }
}

function addCharity(loc, jsonObject) {
    name = jsonObject.stringify("C_name");
    link = jsonObject.stringify("C_Link");
    pickUp = jsonObject.stringify("PckUp");
    donations = {
        nonPersishableFood = jsonObject.getAsString("NPFood");
        perishableFood = jsonObject.getAsString("PFood");
        clothing = jsonObject.getAsString("Clth");
        feminineHygeine = jsonObject.getAsString("Fhyg");
        generalHygeine = jsonObject.getAsString("Ghyg");
        childrensToys = jsonObject.getAsString("Ctoy");
        furniture = jsonObject.getAsString("Furn");
        books = jsonObject.getAsString("Book");
        charity = new charity(name, link, pickUp, donations);
        charities.addCharity(charity);
}



