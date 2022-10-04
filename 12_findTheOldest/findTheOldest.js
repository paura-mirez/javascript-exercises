const findTheOldest = function(people) {
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
