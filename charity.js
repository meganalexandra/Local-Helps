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

}


function filterCategory() {
    for (let i=0; i < organizations.length; i++) {
        const filtered = this.donations.filter(word => word == "category");
    }
}