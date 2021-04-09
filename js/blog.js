function loadBlog() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let apiContent = document.getElementsByClassName("apiContent")
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                console.log(data)
                for (let i = 0 ; i< data.length; i++ ) {
                apiContent[i].innerText = `id : ${data[i].id} \ntitre : ${data[i].titre} \ncontenu : ${data[i].contenu}`; 
            }
            } 
            else {
                apiContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            apiContent.innerText = "Requête en cours";
        }
    };
    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
}


