function uploadRequest(){
    var url="http://192.168.9.129:3000/upload"
    var uploadObj = {};
    
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    uploadObj.title = document.forms["uploadForm"]["title"].value;
    uploadObj.subject = document.forms["uploadForm"]["faecher"].value;
    uploadObj.teacher = document.forms["uploadForm"]["lehrer"].value;
    uploadObj.type = document.forms["uploadForm"]["type"].value;
    uploadObj.notes = document.forms["uploadForm"]["notizen"].value;
    uploadObj.class = userInfo.class;
    uploadObj.userID = userInfo.userID;
    
    console.log(uploadObj);
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
    
    return false;
    
}

function uploadResponse(response){
    
}