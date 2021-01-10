let organizations = [{}];
let suggestions = [{}];

class Organization {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        var donations = [];
        organizations.push(this);
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
        for (var i=0; i < organizations.length; i++) {
            suggestions.splice(,1)
        }
    }
}