function faecherLoad(){
    var url = myURL + "/subjects";
    var faecherliste;

    //Faecherliste anfordern
    fetch(url, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(json){
        faecherliste = json;
        console.log("Faecher: ", faecherliste);
        faecherAnzeigen(faecherliste);
    }).catch(function(err) {
	   console.log("there was an error" + err);
    });

}

function faecherAnzeigen(liste){
  for (var i = 0; i < liste.subjects.length; i++) {
    console.log(liste.subjects[i])
    var fach = liste.subjects[i].subjectName;
    document.getElementById('faecherliste').appendChild(document.createElement('li')).appendChild(document.createTextNode(fach))
  }

}
