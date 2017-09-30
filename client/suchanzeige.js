function suchAnzeige(jsonData){
    window.location = "suchergebnisse.html";
    var htmlStr = "";
    items = jsonData.items;
    console.log(items);
    for(var i in items){
        console.log(items[i]);
        htmlStr+= "<h1>Ergebnisse</h1>" + 
        "<h3><a href=" + ">" + items[i].title + "</a></h3>" + 
        "<p>" + items[i].class + "</p>" +
        "<p>" + items[i].userName + "</p>" +
        "<p>" + items[i].keywords + "</p>" +
        "<p>" + items[i].date + "</p>" +
        "<p>" + items[i].text + "</p><hr>"; 
    }
    
    console.log("html", htmlStr);
    window.onload = function(){
        document.getElementById("ergebnisse").innerHTML = htmlStr;
    };
}