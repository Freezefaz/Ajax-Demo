
document.querySelector("#btn").addEventListener('click', async function(){
    let response = await axios.get('users.json');
    let allUserDiv = document.querySelector('#all-users');
    for (let eachUser of response.data.users) {
        let HTMLfragment = ` <div class="user">
        <p>Name: ${eachUser.firstName} ${eachUser.lastName}</p>
        <p>Email: ${eachUser.emailAddress}</p>
      </div>`;

        allUserDiv.innerHTML += HTMLfragment;
    }
})

let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function(){
    axios.get("users.json").then(function(response){
        let userIdNumber = document.querySelector("#user-id").value;
        let searchUserDiv = document.querySelector(".search-user");
        for (let eachUser of response.data.users) {
            console.log(eachUser)
            if (userIdNumber == eachUser.userId) {
                console.log(userIdNumber)
                console.log(eachUser.userId)
                let HTML = `<div class="search-user">
                <p>Name: ${eachUser.firstName} ${eachUser.lastName}</p>
                </div>`;
                searchUserDiv.innerHTML = HTML;
                console.log(searchUserDiv.innerHTML)
            }
        }     
    })
})
