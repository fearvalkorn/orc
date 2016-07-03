function CreateOrc(){
	var self = this;
	this.weapon = makeOrcWeapon();
	this.damage = makeOrcDamage(self);
	this.health = makeOrcHealth();
}

var allOrc = [];

function makeOrcHealth(){
	var rezultat = Math.floor(Math.random() * (800 - 700 + 1) + 700);
	return rezultat;
}
function makeOrcWeapon() {
    var weapons = ["axe", "hammer", "sword"];
    var random = Math.floor(Math.random() * weapons.length);
    return weapons[random];
}
function makeOrcDamage(self) {
    if (self.weapon == "axe") {
        var rezultat = Math.floor(Math.random() * (60 - 40 + 1) + 40);
        return rezultat;
    } else if (self.weapon == "hammer") {
        var rezultat = Math.floor(Math.random() * (130 - 70 + 1) + 70);
        return rezultat;
    } else if (self.weapon == "sword") {
        return 200;
    }
}
for (var i = 0; i < 2; i++) {
    var orck = new CreateOrc();
    allOrc.push(orck);
}
console.log(allOrc);