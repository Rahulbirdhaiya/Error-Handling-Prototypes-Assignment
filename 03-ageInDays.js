const person1 = {
    FirstName : 'Mistun',
    LastName : 'choudhary',
    Age : 27
}

function ageInDays(person, logResult) {
    let fullName = person.FirstName +" "+ person.LastName;
    let newAge = person.Age * 365;

    const callBack = () => {
        console.log(`The person Name is ${fullName} and his age in days is ${newAge}`);
    };
    return callBack;
};

const logResult = (callBack) => {callBack();};
// Call ageInDays and get the callback function
const callBack = ageInDays(person1);

// Pass the callback function to logResult to invoke it
logResult(callBack);