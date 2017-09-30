function suchAnzeige(jsonData){
    window.location = "suchergebnisse.html";
    var htmlStr = "";
    for(item in jsonData){
        htmlStr+= "<h1>Ergebnisse</h1>" + 
        "<h3><a href=" + ">" + item.title + "</a></h3>" + 
        "<p>" + item.class + "</p>" +
        "<p>" + item.userName + "</p>" +
        "<p>" + item.keywords + "</p>" +
        "<p>" + item.date + "</p>" +
        "<p>" + item.text + "</p><hr>"; 
    }
    
    window.onload(function(){
        document.getElementById("ergebnisse").innerHTML = htmlStr;
    });
}