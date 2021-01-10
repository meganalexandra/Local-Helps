let organizations = new Array();
let suggestions = new Array();
let donations = new Array();

class Organization {
    constructor(name, link, donations) {
        this.name = name;
        this.link = link;
        this.donations = donations;

        // var donations = [];
        // organizations.donations = donations;
        // this.address = address;
        // pickup = null;
        // var donations = {
        //     "nonPerishableFood" = nonPerishableFood;
        //     "perishableFood" = perishableFood;
        //     "clothing" = clothing;
        //     "feminineHygiene" = feminineHygiene;
        //     "generalHygiene" = generalHygiene;
        //     "childrensToys" = childrensToys;
        //     "furniture" = furniture;
        //     "books" = books;
        // }
        organizations.push(this);
        // console.log(organizations);
        // console.log(JSON.stringify(organizations));
    }
    // function addDonation(donation) {
    //     donations.push(donation)
    // }
};


function checkCategory(category) {
    donations.includes(category)
    // for (let i=0; i < donations.length; i++) {
    //     if (donations[i] == category) {
    //         return true;
    //     }
    //     return false;
    // }
}

// function filterCategory() {
//     for (let i=0; i < organizations.length; i++) {
//         const filtered = this.donations.filter(word => word == "category");
//     }
// }

function filterCategory(category) {
    let filtered = new Array();
    for (let i=0; i < organizations.length; i++) {
        if (this.checkCategory()) {
            filtered.push(this);
        }
    }
    return filtered;
    console.log(filtered)
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
        // let organization = [];
        for (const [key, value] of Object.entries(json[i])) {
            if (key === "Name") {
                var name = value;
            }
            if (key === "C_Link") {
                var link = value;
            }
            // if (key === pickUp) {
            //     pickUp === Object.values(pickUp);
            // }
            // organization.push(`${key}: ${value}`);
            // if (key === "Name") {
            //     // console.log(`${key}: ${value}`);
            //     console.log(value);
            // }
        }
        new Organization(name, link, donations);
    }
}
    // parseListOfCharities();
new Organization("Big Brother", 'https://www.bigbrothersvancouver.com/clothing-donation/book-a-pick-up/'
    , ["food","clothing"]);
new Organization( 'Greater Vancouver Food Bank', 'https://foodbank.bc.ca/ways-to-give/donate-food/'
    , ["feminine hygiene","general hygiene"]);
    // console.log(organizations);
filterCategory("food");




