function suchRequestSimple(){
    var url = "http://192.168.9.129:3000/search";
    var suchRequest = {};
    
    suchRequest.keywords = document.forms["suchFeldOben"]["suchText"].value.split(',');
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo != "undefined"){
        suchRequest.class = userInfo.class;
    }
    
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
    return false;
}

function suchRequest(){
    
}
function suchResponse(json){
    
}
function fillOutFilter(){
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    lastSuchRequest = localStorage.getItem('last')
    document.forms["suchFilter"]["suchText"].value = lastSuchRequest.volltext;
    document.forms["suchFilter"]["class"].value = lastSuchRequest.class;
    
}