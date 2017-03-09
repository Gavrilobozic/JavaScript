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
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];

// Zadatak 1 Koliko ljudi pripada kom sektoru?

function statistika () 
{
	var brojZapolenihIT = 0;
	var brojZapolenihManagement = 0;
	var brojZapolenihEngineering = 0;

	for (var i = 0; i < people.length; i++) 
	{
		switch (people[i].department)
		{
		case 'IT': 
		brojZapolenihIT++; 
		break; 
		case 'Management':
		brojZapolenihManagement++;
		break;
		case 'Engineering':
		brojZapolenihEngineering++;
		break;
		}
	}
	var noviObjekat = {BrojRadnikaIT: brojZapolenihIT,
	 brojRadnikaManagement: brojZapolenihManagement,
	 brojRadnikaEngineering: brojZapolenihEngineering};

	return ('Broj IT radnika je ' + noviObjekat.BrojRadnikaIT);
	return ('Broj Management radnika je ' +  noviObjekat.brojRadnikaManagement);
	return ('Broj Engineering radnika je ' + noviObjekat.brojRadnikaEngineering);
	

}	
document.write(statistika (people));

//////////////////////////////////////////////////////////////////////////////////

// Zadatak 2

function statistika () 
{
	var am = [];
	var ex = [];
	var ne = [];
	var pr = [];
	
	for (var i = 0; i < people.length; i++) 
	{
		var x = people[i].yearsExperience;
		
		if (x<=1)
		{
			ne.push(people[i].name); 
		}
		else if (x<=5)
		{
			am.push(people[i].name);
		}
		else if (x<=10)
		{
			ex.push(people[i].name);
		}
		else 
		{
			pr.push(people[i].name);
		}
	}
	var noviObjekat = {NEWBIE: ne,
	 AMATER: am,
	 EXPERT: ex,
	 PRO:pr};

	return noviObjekat;
}	
document.write(statistika (people));


// Zadatak 3

function imenaZaposlenih () 
{
	var nizImena = [];

	for (var i = 0; i < people.length; i++)
		{
			imenaZaposlenih.push(people[i].name)
		}

	return imenaZaposlenih;
}
document.write(imenaZaposlenih (people));


///////////////////////////////////////////////////////////////////////

// Novi nizovi

var test_niz1 = [1,6,2,5,7,2,8,3];
var test_niz2 = [45,62,123,63,74,85,21,77];
var test_niz3 = [-6,23,10,0,-22,52,86,2];


// Zadatak 4

function multiplyEvenAndOdds(array) {

  	var noviNiz = [];

  	for (var i = 0; i < array.length; i++) {
  		if (array[i]%2 == 0)
  		{
  			noviNiz.push(array[i]*3); 
  		}
  		else
  		{
  			noviNiz.push(array[i]*4)
  		}
  	}
  	return noviNiz;
}
multiplyEvenAndOdds (test_niz1);
multiplyEvenAndOdds (test_niz2);
multiplyEvenAndOdds (test_niz3);


// Zadatak 5

function getNumberOfElementsGreaterThan(array, limit) {
  	var brojac = 0;
  	for (var i = 0; i < array.length; i++)
  	{
  		if (limit<array[i])
  		{
  			brojac+=1;
  		}
  	}
  	return brojac;
}
console.log(getNumberOfElementsGreaterThan(test_niz1, 5));
console.log(getNumberOfElementsGreaterThan(test_niz2, 47));
console.log(getNumberOfElementsGreaterThan(test_niz3, 3));



// Zadatak 6

function filterOutElements(array, limit, direction) {
  
	var noviNiz = [];

  if (direction == true)
  {
  	for (var i = 0; i < array.length; i++) 
  	{
  		if (array[i]>=limit)
  		{
  			noviNiz.push(array[i]);
  		}
  	}
  }
  else 
  {
  	if (array[i]<limit)
  		{
  			noviNiz.push(array[i]);
  		}
  }

  return noviNiz;
}
console.log(filterOutElements(test_niz1, 5, true));
console.log(filterOutElements(test_niz1, 7, false));

console.log(filterOutElements(test_niz2, 47, false));
console.log(filterOutElements(test_niz2, 47, true));

console.log(filterOutElements(test_niz3, 1, true));
console.log(filterOutElements(test_niz3, 5, false));