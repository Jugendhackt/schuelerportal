var myURL = "http://192.168.9.129:3000";

function anmeldungSenden() {
    var ip = myURL + "/user/login";
    //var ip = "lol";
    var obj = {}
    obj.username = document.forms["anmeldungForm"]["username"].value;
    obj.password = document.forms["anmeldungForm"]["passwort"].value;
    console.log(obj.username);
    console.log(obj.password);
    console.log(obj);
    
    var jsonObj = JSON.stringify(obj);
    
    //Daten senden
    fetch(ip, {
        method: 'post',
        body: jsonObj,
        headers: new Headers({
		'Content-Type': 'application/json'
	   })
    }).then(function(response) {
        return response.json();
    }).then(function(json){
        console.log("json: ", json);
        anmeldungResponse(json);
    }).catch(function(err) {
	   console.log("there was an error" + err);
    });
    
    
    return false;
}

//Response verarbeiten
function anmeldungResponse(responseJson){
    if(responseJson.err){
        document.getElementById('errMsg').innerHTML = "Anmeldung fehlgeschlagen";
        console.log("Anmeldung fehlgeschlagen");
    } else {
        localStorage.setItem("userInfo", JSON.stringify(responseJson));
        console.log("Anmeldung erfolgreich");
        window.location = "account.html";
    }
}

function isAngemeldet(){
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo == undefined || userInfo == null){
        console.log("nicht angemeldet");
        document.getElementById('abmelden').style.visibility = "hidden";
        return false;
    } else {
        return true;
    }
}

function checkAngemeldet(){
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log("Checking angemeldet");
    if(!isAngemeldet()){
        window.location = "anmeldung.html";
        return false;
    }else {
        return true;
    }
    
}

function abmelden(){
    localStorage.removeItem('userInfo');
    console.log("abgemeldet");
    document.getElementById('abmelden').style.visibility = "hidden";
    
}