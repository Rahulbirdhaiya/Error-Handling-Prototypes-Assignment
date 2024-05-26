async function fetchMultiple() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        const tododata = await todoResponse.json();
        const postdata = await postResponse.json();

        const result = {
            todo : tododata, 
            post : postdata
        };

        console.log(result);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

fetchMultiple();