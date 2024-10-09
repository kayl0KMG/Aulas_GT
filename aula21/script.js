let api = fetch('https://randomuser.me/api/?results=10')
console.log(api);

let users = [];

fetch('https://randomuser.me/api/?results=10')
.then( response => response.json())
.then( data => 
    console.log(data.results
));

console.log(users);