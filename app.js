$(document).ready(function($) {

    let arrOfUsers = [];

    $.ajax({
        type: "GET",
        url: 'https://jsonplaceholder.typicode.com/users',
        success: function(data){

            for(let i in data) {
                for(let u in data[i]) {
                    if(data[i][u].city != undefined) {
                        arrOfUsers.push({'name': data[i].name, 'username': data[i].username, 'email': data[i].email, 'city': data[i][u].city });
                    }
                }
            }

            console.log(arrOfUsers);

            arrOfUsers = arrOfUsers.filter(function(obj) {
                return obj.city.includes('w') || obj.city.includes('W');
            })

            console.log(arrOfUsers);
            
        }
    });


})