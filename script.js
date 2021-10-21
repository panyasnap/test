
let array = [];
let name = [];

function getUsers() {
    fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                array.push(data[i].name, data[i].username)
                name.push(array.join(' '))
                array = []
            }

            // console.log(getRandomInt(name.length))
            name.splice(getRandomInt(name.length), 1);
            name.splice(getRandomInt(name.length), 1);
            // console.log(name)
            name.forEach(e =>{
            const li = document.createElement('li');
            const text = document.createTextNode(e);
            li.append(text);
            document.body.append(li);})


        })

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max); //Максимум не включается, минимум включается
}
getUsers()