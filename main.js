let organizations = [{}];

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