let url = "https://randomuser.me/api/?results=10"
let btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    axios.get(url).then((response)=>{
        let profileDiv = document.querySelector(".card")
    })
})