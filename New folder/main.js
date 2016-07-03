function CreateMarin() {
    var self = this;
    this.weapon = makeWeapon();
    this.damage = makeMarinDamage(self);
    this.health = makeMarinHealth();
}

var allMarin = [];

function makeMarinHealth() {
    var rezultat = Math.floor(Math.random() * (600 - 400 + 1) + 400);
    return rezultat;
}

function makeWeapon() {
    var weapons = ["knife", "rifle", "sniper"];
    var random = Math.floor(Math.random() * weapons.length);
    return weapons[random];
}

function makeMarinDamage(self) {
    if (self.weapon == "knife") {
        var rezultat = Math.floor(Math.random() * (70 - 50 + 1) + 50);
        return rezultat;
    } else if (self.weapon == "rifle") {
        var rezultat = Math.floor(Math.random() * (150 - 100 + 1) + 100);
        return rezultat;
    } else if (self.weapon == "sniper") {
        return 500;
    }
}

for (var i = 0; i < 2; i++) {
    var marinac = new CreateMarin();
    allMarin.push(marinac);
}
console.log(allMarin);