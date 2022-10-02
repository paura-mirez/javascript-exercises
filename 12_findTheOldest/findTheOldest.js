const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function() {
    people.forEach(person => {
        if (person.yearOfDeath != null) {
            let age = person.yearOfDeath - person.yearOfBirth;
            person.age = age;
        }
        else {
            people.forEach(person => {
                today = new Date();
                person.age = (today.getFullYear() - person.yearOfBirth);
            })
        }
      });

    const ordered = people.sort((a, b) => a.age < b.age ? 1 : -1);
    return ordered[0];
};



// Do not edit below this line
module.exports = findTheOldest;
