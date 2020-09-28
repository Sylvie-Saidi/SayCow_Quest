const objet = require("./information.js");
var cowsay = require("cowsay");

console.log(cowsay.say({
	text :`Hi, i'm ${objet.name} from ${objet.campus}`,
	e : "oO",
	T : "U "
}));
