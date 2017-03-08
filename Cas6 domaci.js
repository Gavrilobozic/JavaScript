var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime:"Petar",
		prezime:"Popovic"
	},
	ocenePolaznika: [3,2,7,4,8,1,9,2,10,10,3,6,3,1,7,3,5,4,10,9,1,9],
	organizacija: "Startit",
	kursJosTraje: true
};

// Zadatak 1

function ocene() {
	var x = testObjekat.ocenePolaznika;
	for (var i = 0; i < x.length; i++) {
		x[i]=x[i]+'/10';
	}
	return x;
}
document.write(ocene(testObjekat));

// Zadatak 2

function zastupljenostOcena () 
{
	var rezultat = [];
	var rates_count =[];
	var x = testObjekat.ocenePolaznika;
	for (var i = 1; i < 11; i++) 
	{
		var brojac = 0;
		for (var l = 0; l < x.length; l++) 
		{
			if (x[l]==i) 
			{
				brojac+=1;
			}
		}
		rezultat.push(brojac);
	}
	var s;
	for (n=0,s=1; n < rezultat.length; n++,s++ ) 
	{
		rates_count.push('\{rate\_' + s +'\:'+ rezultat[n] + '\}');
	}
	return rates_count;
}
document.write(zastupljenostOcena(testObjekat));


// Zadatak 3

function prosecnaOcena () 
{	var suma = 0;
	var x = testObjekat.ocenePolaznika;
	for (var i = 0; i < x.length; i++) 
	{
		suma+= x[i];	
	}
	var pro =  suma/x.length;
	
	return ('Prosecna ocena ucesnika kursa je '+ pro.toFixed(2)); 
}
document.write(prosecnaOcena(testObjekat));



///////////////////////////////////////////////////////////////////////////



var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

// Zadatak 4

function ukupnoIskustvo () 
{
	var x = 0;
	for (var i = 0; i < people.length; i++) {
		x+= people[i].yearsExperience;
	}
	return ('Ukupno godina iskustva svih zaposlenih u firmi = ' + x)
}
document.write(ukupnoIskustvo(people));

// Zadatak 5

function statistika () 
{
	var godineIT = 0;
	var godineManagement = 0;
	var godineEngineering = 0;

	for (var i = 0; i < people.length; i++) 
	{
		switch (people[i].department)
		{
		case 'IT': 
		godineIT+= people[i].yearsExperience; 
		break; 
		case 'Management':
		godineManagement+= people[i].yearsExperience;
		break;
		case 'Engineering':
		godineEngineering+=	 people[i].yearsExperience;
		break;
		}
	}
	return ('Objekat = \{' + '<br>' + 'Engineering : ' + godineEngineering + ',<br>' + 'IT :' + godineIT  + ',<br>' + 'Management : ' + godineManagement + '\}');

	var stagod = {Engineering:godineEngineering,IT:godineIT,Management:godineManagement};
	return stagod;
}
document.write(statistika (people));
