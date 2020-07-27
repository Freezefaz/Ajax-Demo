// let url = "https://programming-quotes-api.herokuapp.com/quotes/random"
// let btn = document.querySelector("#quote-btn");
// btn.addEventListener("click", function(){
//     axios.get(url).then(function(response){
//         let quoteDiv = document.querySelector(".quote");
//         let quote = response.data;
//         let HTML = `<div class="quote">
//         <p>Quote:${quote.en}</p>
//         </div>`;
//         quoteDiv.innerHTML += HTML; if put = and not += can overwrite
//     })
//     let quoteDiv = document.querySelector(".quote");
//     quoteDiv.innerHTML = "";
// })
// let rBtn = document.querySelector("#remove");
// rBtn.addEventListener("click", function(){
//      let quoteDiv = document.querySelector(".quote");
//      quoteDiv.innerHTML = "";
// })

let url = "https://programming-quotes-api.herokuapp.com/quotes/random"
let btn = document.querySelector("#quote-btn");
btn.addEventListener("click", async ()=>{
    // use await to wait for response
    let response = await axios.get(url);
    let quoteElement = document.querySelector(".quote");
    quoteElement.innerHTML = `
    <blockquotes>${response.data.en}</blockquotes><br>
    <span>${response.data.author}</span>`
})
