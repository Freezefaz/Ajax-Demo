// first part
// let url = "https://anapioficeandfire.com/api/books/";
// let btn = document.querySelector("#load");
// btn.addEventListener("click", ()=>{
//     axios.get(url).then((response)=>{
//         for (let book of response.data){
//             let template = `
//             <div class="card">
//             <div class="card-title">${book.name}</div>
//             <div class="card-body">
//             <ul>
//             <li>ISBN: ${book.isbn}</li>
//             <li>Number of Pages: ${book.numberOfPages}</li> 
//             </ul>
//             </div>
//             </div>`;
//            document.querySelector(".book").innerHTML += template;
//         }
//     })
// })

// Challenge part
let url = "https://anapioficeandfire.com/api/books/";
let btn = document.querySelector("#load");
btn.addEventListener("click", ()=>{
    axios.get(url).then(async (response)=>{
        for (let book of response.data){
            let characters =[];
            for (let character of book.povCharacters){
                let results = await axios.get(character);
                characters.push(results.data.name);
            }
            let template = `
            <div class="card">
            <div class="card-title">${book.name}</div>
            <div class="card-body">
            <ul>
            <li>ISBN: ${book.isbn}</li>
            <li>Number of Pages: ${book.numberOfPages}</li>
            <li>Characters: ${characters.join()}</li> 
            </ul>
            </div>
            </div>`;
           document.querySelector(".book").innerHTML += template;
        }
    })
})

// All characters are loaded at the same time *** Not working
// let url = "https://anapioficeandfire.com/api/books/";
// let btn = document.querySelector("#load");
// btn.addEventListener("click", ()=>{
//     axios.get(url).then(async (response)=>{
//         for (let book of response.data){
//             let requests =[];
//             for (let character of book.povCharacters){
//                 let r = await axios.get(character);
//                 requests.push(r);
//             }
//             axios.all(requests).then(function(responses) {
//                 let characters = [];
//                 for (let eachResponse of reponses) {
//                     characters.push(eachResponse.data.name);
//                 }
//             })
//             let template = `
//             <div class="card">
//             <div class="card-title">${book.name}</div>
//             <div class="card-body">
//             <ul>
//             <li>ISBN: ${book.isbn}</li>
//             <li>Number of Pages: ${book.numberOfPages}</li>
//             <li>Characters: ${characters.join()}</li> 
//             </ul>
//             </div>
//             </div>`;
//            document.querySelector(".book").innerHTML += template;
//         }
//     })
// })