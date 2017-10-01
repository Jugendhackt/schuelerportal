function uploadRequest(){
    var url="http://192.168.9.129:3000/upload"
    var uploadObj = {};
    
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    uploadObj.title = document.forms["uploadForm"]["title"].value;
    uploadObj.subjectID = document.forms["uploadForm"]["faecher"].value;
    uploadObj.teacher = document.forms["uploadForm"]["lehrer"].value;
    uploadObj.type = document.forms["uploadForm"]["type"].value;
    uploadObj.notes = document.forms["uploadForm"]["notizen"].value;
    uploadObj.class = userInfo.className;
    uploadObj.userID = userInfo.userID;
    uploadObj.keywords = document.forms["uploadForm"]["keywords"].value;
    
    
    var reader = new FileReader();
    
    reader.onload = function(e) {
        var dataURL = reader.result;
        uploadObj.file = dataURL;
        console.log(dataURL);
        //Daten senden
        fetch(url, {
            method: 'post',
            body: JSON.stringify(uploadObj),
            headers: new Headers({
            'Content-Type': 'application/json'
           })
        }).then(function(response) {
            return response.json();
        }).then(function(json){
            console.log("json: ", json);
            uploadResponse(json);
        }).catch(function(err) {
           console.log("there was an error" + err);
        });
    }

    reader.readAsDataURL(document.forms["uploadForm"]["datei"].files[0]);
    
    console.log(uploadObj);   
    
    return false;
    
}

function uploadResponse(response){
    if(response.err){
        document.getElementById('errMsg').innerHTML = "Fehler beim Hochladen";
    } else {
        document.getElementById('errMsg').innerHTML = "Hochladen erfolgreich";
    }
}