// Zadatak 1

var cene = [5,145,69,56,13,456,78,4,30];
var manjiOdPedeset = [];
var veciOdPedeset = [];


for (var i=0;i<cene.length;i++) 
{
	if (cene[i]<50) {
		manjiOdPedeset.push((cene[i]+cene[i]*0.18));
	}
	else {
		veciOdPedeset.push((cene[i]+cene[i]*0.08));
	}
}
console.log(manjiOdPedeset);
console.log(veciOdPedeset);

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