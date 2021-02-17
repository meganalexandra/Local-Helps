var organizations = new Array();
var suggestions = new Array();
var filtered = new Array();
var names = new Array();

class Organization {
    constructor(name, link, donations) {
        this.name = name;
        this.link = link;
        this.donations = donations;

        organizations.push(this);
    }
};

function filterCategory(category) {
    filtered.length = 0;
    for (let i=0; i < organizations.length; i++) {
        if (organizations[i].donations.includes(category)) {
            filtered.push(organizations[i]);
        }
    }
}

function printResults() {
    for (var i=0; i < filtered.length;i++) {
        names.push(filtered[i].name);        
        // document.write(filtered[i].name + "<br>");
    }    
}

class Suggestions {
    votes = 0;
    constructor(name, website) {
        this.name = name;
        this.website = website;
        suggestions.push(this);
    }
};

function thumbsUp() {
    votes++;
    if (votes == 10) {
        for (let i=0; i < suggestions.length; i++) {
            // deletes this suggestion from the lists of suggestions
            suggestions.splice(suggestions[i],1);
            // moves suggestions to the organizations list
            organizations.push(this);
        }
    }
}

function parseListOfCharities() {
    const json = [
        {
            "Name": "Big Brother",
            "C_Link": "https://www.bigbrothersvancouver.com/clothing-donation/book-a-pick-up/",
            "PckUp": "1",
            "C_LocG": "EV",
            "C_LocF": "1193 Kingsway Unit 102, Vancouver, BC V5V 3C9",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "1",
            "Furn": "0",
            "Book": "1"
        },
        {
            "Name": "Downtown Eastside Women's Centre",
            "C_Link": "https://dewc.ca/donate",
            "PckUp": "0",
            "C_LocG": "WV",
            "C_LocF": "302 Columbia St, Vancouver, BC V6A 4J1",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "1",
            "Ctoy": "0",
            "Furn": "0",
            "Book": "0"
        },
        {
            "Name": "The Wildlife Thrift Store",
            "C_Link": "https://www.wildlifethriftstore.com/donations",
            "PckUp": "0",
            "C_LocG": "DT",
            "C_LocF": "1295 Granville St, Vancouver, BC V6Z 1M5",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "1",
            "Furn": "1",
            "Book": "1"
        },
        {
            "Name": "VGH Thrift Store",
            "C_Link": "https://vghthriftstore.org/way-to-give/",
            "PckUp": "1",
            "C_LocG": "WV",
            "C_LocF": "2535 E Hastings St, Vancouver, BC V5K 1Z2",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "1",
            "Furn": "1",
            "Book": "1"
        },
        {
            "Name": "Helping Families in Need Society",
            "C_Link": "http://hfin.webwindow.ca/wp/schedule-a-pickup/",
            "PckUp": "1",
            "C_LocG": "BB",
            "C_LocF": "1679 Gilmore Ave, Burnaby, BC V5C 5V9",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "0",
            "Furn": "1",
            "Book": "0"
        },
        {
            "Name": "Vancouver Women's Health Collective",
            "C_Link": "https://womenshealthcollective.ca/giving/",
            "PckUp": "1",
            "C_LocG": "DT",
            "C_LocF": "29 West Hastings Street, Vancouver, BC V6B 1G4",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "1",
            "Ghyg": "1",
            "Ctoy": "0",
            "Furn": "0",
            "Book": "0"
        },
        {
            "Name": "Greater Vancouver Food Bank",
            "C_Link": "https://foodbank.bc.ca/ways-to-give/donate-food/",
            "PckUp": "1",
            "C_LocG": "BB",
            "C_LocF": "8345 Winston St, Burnaby, BC V5A 2H3",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "1",
            "PFood": "0",
            "Clth": "0",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "0",
            "Furn": "0",
            "Book": "0"
        },
        {
            "Name": "Covenant House Vancouver",
            "C_Link": "https://www.covenanthousebc.org/ways-to-give/other-ways-to-give/donate-items/",
            "PckUp": "0",
            "C_LocG": "DT",
            "C_LocF": "1302 Seymour St, Vancouver, BC V6B 3P3",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "1",
            "PFood": "1",
            "Clth": "1",
            "Fhyg": "0",
            "Ghyg": "0",
            "Ctoy": "0",
            "Furn": "0",
            "Book": "0"
        },
        {
            "Name": "Sheway",
            "C_Link": "http://www.vch.ca/locations-services/result?res_id=900",
            "PckUp": "1",
            "C_LocG": "DT",
            "C_LocF": "533 E Hastings St, Vancouver, BC V6A 1P9",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "1",
            "Ghyg": "1",
            "Ctoy": "1",
            "Furn": "1",
            "Book": "1"
        },
        {
            "Name": "Wish Drop In Centre",
            "C_Link": "https://wish-vancouver.net/about/our-board/get-involved/wish-list/",
            "PckUp": "1",
            "C_LocG": "DT",
            "C_LocF": "334 Alexander St, Vancouver, BC V6A 1C3",
            "ThUP": "10",
            "ThDW": "0",
            "NPFood": "0",
            "PFood": "0",
            "Clth": "1",
            "Fhyg": "1",
            "Ghyg": "1",
            "Ctoy": "0",
            "Furn": "0",
            "Book": "0"
        }
    ];
    for (let i = 0; i < json.length; i++) {
        let donations = new Array();
        for (const [key, value] of Object.entries(json[i])) {
            if (key === "Name") {
                var name = value;
            }
            if (key === "C_Link") {
                var link = value;
            }
            if ((key === "NPFood") && (value === "1")) {
                donations.push("non-perishableFoods");
            }
            if ((key === "PFood") && (value === "1")) {
                donations.push("perishableFoods");
            }
            if ((key === "Clth") && (value === "1")) {
                donations.push("clothes");
            }
            if ((key === "Fhyg") && (value === "1")) {
                donations.push("feminineHygieneProducts");
            }
            if ((key === "Ghyg") && (value === "1")) {
                donations.push("generalHygieneProducts");
            }
            if ((key === "Ctoy") && (value === "1")) {
                donations.push("children's toys");
            }
            if ((key === "Furn") && (value === "1")) {
                donations.push("furniture");
            }
            if ((key === "Book") && (value === "1")) {
                donations.push("books");
            }
        }
        new Organization(name, link, donations);
    }
}





