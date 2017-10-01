function documentAnzeige(){
    var documentJson = JSON.parse(localStorage.getItem("documentAnz"));
    console.log("document", documentJson);
    document.getElementById('title').innerHTML = documentJson.title;
    document.getElementById('docmetadata').innerHTML = jsonToHTML(documentJson);
    document.getElementById('text').innerHTML = documentJson.text;
    document.getElementById('image').innerHTML = `<img style="max-width: 100%; max-height: 100%" src="http://192.168.9.129:3000/` + documentJson.tmpHash + "." +  documentJson.fileExtension + '">';
    document.getElementById('download-btn').href = `<img style="max-width: 100%; max-height: 100%" src="http://192.168.9.129:3000/` + documentJson.tmpHash + "." +  documentJson.fileExtension + '">';

    $('.star_rating .fa').siblings('input.rating-value').val(documentJson.rating);

}

function jsonToHTML(item){ 
    var htmlStr = "<p>Klassenstufe: " + item.class + "</p>" +
        "<p>User: " + item.userName + "</p>" +
        "<p>Keywords: " + item.keywords + "</p>" +
        "<p>Datum: " + item.date + "</p>";
    return htmlStr;
}