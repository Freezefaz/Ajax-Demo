let fruits = document.getElementById("content");
let btn = document.getElementById("btn");
btn = addEventListener("click", function(){
    axios.get("items.txt").then(function(response){
        
        // let fruits = document.getElementById("content");
        fruits.innerText = response.data;
        // let fruit = fruits.split();
       
    })
        // let fruit = fruits.split();
        // console.log(fruit);
        let p = document.getElementById("list");
        p.innerHTML += fruits.innerHTML;
        // for (let f in fruit){
        //     p.innerHTML += "<li>${f}</li>";
        // }
        
        console.log(fruits);
})