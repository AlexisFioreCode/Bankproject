let layer = document.getElementById("layer");
let bglayer = document.getElementById("bg-layer");
function loadLayer() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {   
                layer.innerHTML = this.responseText;              
            } 
        } 
    };

    httpRequest.open('GET', 'layer.txt', true);
    httpRequest.send();
}
function removeLayer() {
    if(layer !== null)
    layer.remove()
    bglayer.remove()
}