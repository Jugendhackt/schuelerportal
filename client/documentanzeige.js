function documentAnzeige(){
    var documentJson = JSON.parse(localStorage.getItem("documentAnz"));
    console.log("document", documentJson);
    document.getElementById('title').innerHTML = documentJson.title;
    document.getElementById('text').innerHTML = documentJson.text;
    document.getElementById('image').innerHTML = `<img src="http://192.168.9.129:3000/uploadedData/` + documentJson.tmpHash + "." +  documentJson.fileExtension + '">';
    
    
}