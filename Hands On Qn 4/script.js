let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
   axios.get("artwork.json").then(function(response){
    let artwork = response.data;
    let artworkHTML = `<h1>${artwork.title}</h1>
    <img src="${artwork.image_url}">`;

    let artworkDiv = document.getElementById("new");
    artworkDiv.innerHTML = artworkHTML;
}) 
})
