/*
  U nastavku su test podaci kao i potpisi funkcija. U komentarima je objašnjenje šta koja funkcija treba da uradi i šta treba da vrati kao rezultat izvršenja.
*/

var test_objekat1 = {
    ime: "Petar",
    prezime: "Petrovic",
    ocene: [1, 6, 2, 5, 7, 2, 8, 3]
};
    
var test_objekat2 = {
    ime: "Marko",
    prezime: "Markovic",
    ocene: [45, 62, 123, 63, 74, 85, 21, 77]
};

var test_objekat3 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    ocene: [-6, 23, 10, 0, -22, 52, 86, 2]
};


// Najmanja ocena osobe, funkcija vraća broj
function getMinGrade(person) 
{   
    var min = 200;
    var x = person.ocene;

    for (var i = 0; i < x.length; i++)
    {
       if (x[i] < min)
      {
          min = x[i];
      }
    }

    return min; 
}

console.log("Get Min Grade: -----------------");
console.log(getMinGrade(test_objekat1));
console.log(getMinGrade(test_objekat2));
console.log(getMinGrade(test_objekat3));

// Najveća ocena osobe, funkcija vraća broj
function getMaxGrade(grades) 
{
    var max =0;

    for (var i = 0; i < grades.length; i++)
    {
       if (grades[i] > max)
      {
          max = grades[i];
      }
    }

    return max; 
}

console.log("Get Max Grade: -----------------");
console.log(getMaxGrade(test_objekat1.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat2.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat3.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument 

// Novi niz koji se sastoji od parnih ocena osobe, funkcija vraća niz
function getArrayOfEvenGrades(person) 
{
    var noviNiz = [];
    var x = person.ocene;
    for (var i = 0; i < x.length; i++)
    {
        if (x[i]%2==0)
        {
            noviNiz.push(x[i]);
        }
    }
    return noviNiz;
}

console.log("Array of Even Grades: -----------------");
console.log(getArrayOfEvenGrades(test_objekat1));
console.log(getArrayOfEvenGrades(test_objekat2));
console.log(getArrayOfEvenGrades(test_objekat3));

// Novi niz koji se sastoji od neparnih ocena osobe, funkcija vraća niz
function getArrayOfOddGrades(grades) 
{
    var noviNiz = [];

    for (var i = 0; i < grades.length; i++)
    {
        if (grades[i]%2!==0)
        {
            noviNiz.push(grades[i]);
        }
    }

    return noviNiz;
}

console.log("Array of Odd Grades: -----------------");
console.log(getArrayOfOddGrades(test_objekat1.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat2.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat3.ocene)); // Oprez

// Suma svih ocena, funkcija vraća broj
function getSumOfGrades(grades) 
{
    var suma = 0;

    for (var i = 0; i < grades.length; i++)
    {
       suma+=grades[i];
    }
    
    return suma;
}

console.log("Sum of elements: -----------------");
console.log(getSumOfGrades(test_objekat1.ocene));
console.log(getSumOfGrades(test_objekat2.ocene));
console.log(getSumOfGrades(test_objekat3.ocene));

// Novi niz koji se dobija množenjem parnih ocena sa 3, a neparnih sa 4, funkcija vraća niz
function getMappedGrades(person) 
{
  var noviNiz = [];
  var x = person.ocene;

  for (var i = 0; i < x.length; i++)
    {
        if (x[i]%2==0)
        {
            noviNiz.push(x[i]*3);
        }
        else 
        {
          noviNiz.push(x[i]*4)
        }
    }

    return noviNiz;
}

console.log("Mapped grades: -----------------");
console.log(getMappedGrades(test_objekat1));
console.log(getMappedGrades(test_objekat2));
console.log(getMappedGrades(test_objekat3));

// Novi niz koji se dobija stavljanjem parnih ocena na početak niza, a neparnih na kraj. Mogu se praviti pomoćni nizovi za parne i neparne pa da se na kraju spoje. Funkcija vraća niz
function reorderGrades(grades) 
{
  var noviNiz = [];

  for (var i = 0; i < grades.length; i++)
  {
    if (grades[i]%2==0)
        {
            noviNiz.push(grades[i]);
        }
  }
  for (i = 0; i < grades.length; i++)
  {
    if (grades[i]%2!==0)
        {
            noviNiz.push(grades[i]);
        }
  }

    return noviNiz;
}

console.log("Reordered array: -----------------");
console.log(reorderGrades(test_objekat1.ocene));
console.log(reorderGrades(test_objekat2.ocene));
console.log(reorderGrades(test_objekat3.ocene));

// Koliko je ocena veće od zadatog broja? Funkcija vraća broj.
function getNumberOfGradesGreaterThan(person, limit) 
{
    var x = person.ocene;
    brojac = 0;

    for (var i = 0; i < x.length; i++)
    {
        if (x[i]>limit)
        {
            brojac++;
        }
    }

    return brojac;
}

console.log("Grades greater than given number: -----------------");
console.log(getNumberOfGradesGreaterThan(test_objekat1, 5));
console.log(getNumberOfGradesGreaterThan(test_objekat2, 47));
console.log(getNumberOfGradesGreaterThan(test_objekat3, 3));

// Ako je treći argument true treba napraviti novi niz od ocena osobe 
//koji su VEĆE ili JEDNAKE od zadatog broja. 
//Ako je treći argument false treba napraviti novi niz od 
//ocena osobe koji su MANJE od zadatog broja. Funkcija vraća niz
function filterOutGrades(array, limit, direction) 
{
  var x = array.ocene;
  var noviNiz = [];

  if (direction==true)
  {
    for (var i = 0; i < x.length; i++)
    {
        if (x[i]>=limit) 
        {
            noviNiz.push(x[i]);
        }
    }
  }
  else
  {
    for (i = 0; i < x.length; i++)
    {
    if (x[i]<limit) 
        {
            noviNiz.push(x[i]);
        }
    }
  }

  return noviNiz;
}

console.log("Filtered grades: -----------------");
console.log(filterOutGrades(test_objekat1, 5, true));
console.log(filterOutGrades(test_objekat1, 7, false));

console.log(filterOutGrades(test_objekat2, 47, false));
console.log(filterOutGrades(test_objekat2, 47, true));

console.log(filterOutGrades(test_objekat3, 1, true));
console.log(filterOutGrades(test_objekat3, 5, false));