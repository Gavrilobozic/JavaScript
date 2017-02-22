
while (a!=='papir'||a!=='kamen'||a!=='makaze') {
	var userInput = prompt('Papir, kamen ili makaze?');
	var a = userInput.toLowerCase();
	if (a=='papir'||a=='kamen'||a=='makaze'||a=='ili') {
		break;
	}
}

if (a=='ili') {
	alert('Mnogo si pametan! Aj sad ispocetka.')
}

switch (a) {

case 'papir':document.getElementById('slika1').src='http://en.academic.ru/pictures/enwiki/82/Rock-paper-scissors_(paper).png';
break;

case 'kamen':document.getElementById('slika1').src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq7mu7qNKasY-2E8zQI7C5yT--j2MudPOHWXjMpedvv-VTFmOo';
break;

case 'makaze':document.getElementById('slika1').src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_(scissors).png/1024px-Rock-paper-scissors_(scissors).png';
break;
}

randomNumber =  Math.random();

if (randomNumber <0.33) {
	computer = 'papir';
	document.getElementById('slika2').src='http://en.academic.ru/pictures/enwiki/82/Rock-paper-scissors_(paper).png';
}
else if(randomNumber <= 0.66) {
	computer = 'kamen';
	document.getElementById('slika2').src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq7mu7qNKasY-2E8zQI7C5yT--j2MudPOHWXjMpedvv-VTFmOo';
}
else {
	computer = 'makaze';
	document.getElementById('slika2').src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_(scissors).png/1024px-Rock-paper-scissors_(scissors).png';

}

if (a==computer) {
	document.getElementById('izjava').innerHTML = 'Nereseno, rifresuj odmah!';
}
else if (a== 'papir') 
	if (computer=='makaze') {
	document.getElementById('izjava').innerHTML =  'Hahaha, izgubio si!';
	}
	else {
	document.getElementById('izjava').innerHTML = 'Nesto se desilo, nemam pojma. Moras da probas ponovo.';
	}

else if (a== 'makaze') 
	if (computer=='kamen') {
	document.getElementById('izjava').innerHTML =  'Hahaha, izgubio si!';
	}
	else {
	document.getElementById('izjava').innerHTML = 'Nesto se desilo, nemam pojma. Moras da probas ponovo.';
	}

else if (a== 'kamen') 
	if (computer=='papir') {
	document.getElementById('izjava').innerHTML =  'Hahaha, izgubio si!';
	}
	else {
	document.getElementById('izjava').innerHTML = 'Nesto se desilo, nemam pojma. Moras da probas ponovo.';
	}
