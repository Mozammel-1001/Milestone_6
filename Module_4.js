fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.jon())
    .then(json => console.log(json))
    .catch(error => console.log("Error", error))

const handleUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data)
    }

    catch {
        console.log("Error")
    }
}

handleUser();