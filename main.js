let organizations = [{}];
let suggestions = [{}];

class Organization {
    constructor(name, link, address, pickup) {
        this.name = name;
        this.link = link;
        var donations = [];
        organizations.donations = donations;
        console.log(organizations);
        this.address = address;
        pickup = null;
        var donations = {
            "nonPerishableFood" = nonPerishableFood;
            "perishableFood" = perishableFood;
            "clothing" = clothing;
            "feminineHygeine" = feminineHygeine;
            "generalHygeine" = generalHygeine;
            "childrensToys" = childrensToys;
            "furniture" = furniture;
            "books" = books;
        }
        organizations.push(this);
        console.log(organizations);

        console.log(JSON.stringify(organizations));
    }

    // function addDonation(donation) {
    //     donations.push(donation)
    // }
};

function checkCategory(category) {
    for (let i=0; i < donations.length; i++) {
        if (donations[i] == category) {
            return true;
        }
        return false;
    }
}

// function filterCategory() {
//     for (let i=0; i < organizations.length; i++) {
//         const filtered = this.donations.filter(word => word == "category");
//     }
// }

function filterCategory(category) {
    let filtered = [];
    for (let i=0; i < organizations.length; i++) {
        if (this.checkCategory()) {
            filtered.push(this);
        }
    }
    return filtered;
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