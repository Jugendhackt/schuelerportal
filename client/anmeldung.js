function anmeldungSenden() {
    var ip = "http://192.168.9.129:3000/user/login";
    //var ip = "lol";
    var obj = {}
    obj.username = document.forms["anmeldungForm"]["username"].value;
    obj.password = document.forms["anmeldungForm"]["passwort"].value;
    console.log(obj.username);
    console.log(obj.passwort);
    console.log(obj);
    
    var jsonObj = JSON.stringify(obj);
    
    fetch(ip, {
        method: 'post',
        body: jsonObj,
        headers: new Headers({
		'Content-Type': 'application/json'
	})
    }).then(function(response) {
	   console.log("response: " + response);
    }).catch(function(err) {
	   console.log("there was an error" + err);
    });
    
    
    return false;
}

function anmeldungResponse(response){
    
}
