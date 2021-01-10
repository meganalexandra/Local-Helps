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
        jsonObject.stringify("C_name") = name;
        jsonObject.stringify("C_Link") link;
        jsonObject.stringify("PckUp") pickUp;
        donations = {
            jsonObject.stringify("NPFood") = nonPersishableFood;
            jsonObject.stringify("PFood") = perishableFood;
            jsonObject.stringify("Clth") = clothing;
            jsonObject.stringify("Fhyg") = feminineHygiene;
            jsonObject.stringify("Ghyg") = generalHygeine;
            jsonObject.stringify("Ctoy") = childrensToys;
            jsonObject.stringify("Furn") = furniture;
            jsonObject.stringify("Book") = books;
        }

        var loc = new charities;
    }
    for (i = 0; i < charities.length; i++) {
        charity = charities[i];
        addCharity(charities, charity);
    }
}

function addCharity(loc, jsonObject) {
    jsonObject.stringify("C_name") = name;
    jsonObject.stringify("C_Link") = link;
    jsonObject.stringify("PckUp") = pickUp;
    donations = {
        jsonObject.getAsString("NPFood") = nonPersishableFood;
        jsonObject.getAsString("PFood") = perishableFood;
        jsonObject.getAsString("Clth") = clothing;
        jsonObject.getAsString("Fhyg") = feminineHygiene;
        jsonObject.getAsString("Ghyg") = generalHygiene
        jsonObject.getAsString("Ctoy") = childrensToys;
        jsonObject.getAsString("Furn") = furniture;
        jsonObject.getAsString("Book") = books;
        charity = new charity(name, link, pickUp, donations);
        charities.addCharity(charity);
    }
}



