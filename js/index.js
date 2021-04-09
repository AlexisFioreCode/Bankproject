function loadLayer() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {      
                let data = httpRequest.responseText;
                console.log(data)
            } 
            else {
                ajaxContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            ajaxContent.innerText = "Requête en cours";
        }
    };

    httpRequest.open('GET', 'layer.txt', true);
    httpRequest.send();
}