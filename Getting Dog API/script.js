let btn = document.querySelector("#btn");
let apiURL = "https://random.dog/woof.json";
btn.addEventListener("click", function() {
    axios.get(apiURL).then(function(response){
        let imageElement = document.querySelector("#image-placeholder");
        imageElement.src = response.data.url;
        // set to image to display as inline
        imageElement.style.display = "inline";
    })
})