function suchRequestSimple(){
    var url = "http://192.168.9.129:3000/search";
    var suchRequest = {};
    
    suchRequest.keywords = document.forms["suchFeldOben"]["suchText"].value;
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log("userInfo:", userInfo);
    if(userInfo != undefined){
        suchRequest.class = userInfo.className;
    }
    
    console.log(suchRequest);
    
    //Daten senden
    fetch(url, {
        method: 'post',
        body: JSON.stringify(suchRequest),
        headers: new Headers({
		'Content-Type': 'application/json'
	   })
    }).then(function(response) {
        return response.json();
    }).then(function(json){
        console.log("json: ", json);
        suchResponse(json);
    }).catch(function(err) {
	   console.log("there was an error" + err);
    });
    
    localStorage.setItem("lastSearch", JSON.stringify(suchRequest));
    
    window.location = "suchergebnisse.html";
    return false;
}

function suchRequest(){
    var url = "http://192.168.9.129:3000/search";
    var suchRequest = {}; 
    
}

function suchResponse(json){
    
}

function fillOutFilter(){
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    lastSuchRequest = JSON.parse(localStorage.getItem('lastSearch'));
    console.log("filling out filter");
    console.log(lastSuchRequest);
    document.forms["suchFilter"]["suchText"].value = lastSuchRequest.keywords;
    document.forms["suchFilter"]["class"].value = lastSuchRequest.class;
    
}