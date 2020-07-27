let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    axios.get("contact.txt").then(function(response){
    let con = document.getElementById("content");
    con.innerHTML = response.data;
    })
})