function suchAnzeige(){
    jsonData = JSON.parse(localStorage.getItem("suchErgebnisse"));
    var htmlStr = "";
    items = jsonData.items;
    console.log(items);
    for(var i in items){
        console.log(items[i]);
        htmlStr+= "<h1>Ergebnisse</h1>" + 
        "<h3><a href=" + ">" + items[i].title + "</a></h3>" + 
        "<p>Klassenstufe: " + items[i].class + "</p>" +
        "<p>User: " + items[i].userName + "</p>" +
        "<p>Keywords: " + items[i].keywords + "</p>" +
        "<p>Datum: " + items[i].date + "</p>" +
        "<p>Text: " + items[i].text + "</p><hr>"; 
    }
    
    console.log("html", htmlStr);
    document.getElementById("ergebnisse").innerHTML = htmlStr;
    /*
    window.addEventListener("load", function(){
        console.log("window loaded");
        document.getElementById("ergebnisse").innerHTML = htmlStr;
    });
    
    window.onload = function(){
        console.log("window loaded");
        document.getElementById("ergebnisse").innerHTML = htmlStr;
    };*/
}