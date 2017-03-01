// Zadatak 1

var cene = [5,145,69,56,13,456,78,4,30];
var ceneSaPorezom = [];
var zbirCenaBezPoreza = 0;
var zbirCenaSaPorezom = 0;

for (var i=0;i<cene.length;i++) 
{
	if (cene[i]<50) {
		ceneSaPorezom.push((cene[i]+cene[i]*0.18));
	}
	else {
		ceneSaPorezom.push((cene[i]+cene[i]*0.08));
	}
}
for (var i in cene) {zbirCenaBezPoreza += cene[i]}
for (var i in ceneSaPorezom) {zbirCenaSaPorezom += ceneSaPorezom[i]}

var ukupnoZaPorez = zbirCenaSaPorezom - zbirCenaBezPoreza;

console.log('Ovako izgledaju cene sa uracunatim porezima: ' + ceneSaPorezom);
console.log('Ukupan zbir svih cena bez poreza: ' + zbirCenaBezPoreza);
console.log('Ukupan zbir svih cena sa porezom: ' + zbirCenaSaPorezom);
console.log('Ukupan zbir poreza na sve cene: ' + ukupnoZaPorez);

// Zadatak 2

do {
	var userInput = prompt('Unesi neku rec da proveris da li je palindrom.');
	userInput= userInput.trim();
	userInput=userInput.toLowerCase(); 
}
while (userInput==Number); 

var l = userInput.length-1;
var rec=true;
		for (var i = 0; i<l; i++)
		{
			if (userInput[i]===userInput[l--]) 
			{
				console.log('Vasa rec '+ userInput + ' je palindrom.')
			}
			else
			{
				console.log('Vasa rec ' + userInput + ' nije palindrom.')
				break;
			}
		}


// Hakerski nacin
do {
	var userInput = prompt('Unesi neku rec da proveris da li je palindrom.');
	userInput= userInput.trim();
	userInput=userInput.toLowerCase(); 
}
while (userInput==Number); 

var rec = userInput.split("");
var splitRec = userInput.split("");
var cer = rec.reverse();
    for (var i = 0; i < rec.length; i++)
    {
		if (splitRec[i]==cer[i]) 
		{
			console.log('Vasa rec '+ userInput + ' je palindrom.');
		}
		else 
		{
			console.log('Vasa rec '+ userInput + ' nije palindrom.');
		}
	}
