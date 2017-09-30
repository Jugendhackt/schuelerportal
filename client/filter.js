function suchRequestSimple(){
    var suchRequest;
    
    suchRequest.volltext = document.forms["suchFeldOben"]["suchText"];
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(user != "undefined"){
        suchRequest.class = userInfo.class;
    }
    
    localStorage.setItem("lastSearch", JSON.stringify(suchRequest));
}

function fillOutFilter(){
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    lastSuchRequest = localStorage.getItem('last')
    document.forms["suchFilter"]["suchText"].value = lastSuchRequest.volltext;
    document.forms["suchFilter"]["class"].value = lastSuchRequest.class;
    
}