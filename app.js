// //PROMISES


// const readUsers = new Promise((resolve, reject) => {
//     const user = false;

//     if(user){
//         resolve('usuario obtenido');

//     }else{
//         reject ('no se pudo obtener');
//     }
// });
//  //console.log(readUsers);
//  readUsers
//  .then((result) => console.log(result))
//  .catch((error) => console.log(error))





function readUsers() {
    

    //CONSUMO
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            myUsers(data);
        });
}
readUsers()

function myUsers(data) {
    let containerUsers = document.getElementById('containerUsers');
    
    data.forEach(users => {
        let boxName = document.createElement('div');
        boxName.classList.add('boxName');
        boxName.textContent = users.name;

        containerUsers.appendChild(boxName);
    });
}

// Llama a read() para comenzar la carga de datos cuando sea necesario.