function greetingPromise(name) {
    return new Promise ((resolve, reject) => {
        const greeting = `Hello ${name}`
        resolve(greeting);
    });
};

greetingPromise('Mithun').then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});