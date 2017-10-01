if (typeof XMLHttpRequest === "undefined") {
  XMLHttpRequest = function () {
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
    throw new Error("This browser does not support XMLHttpRequest.");
  };
}



// Chat Verlauf
var counter = 0;
window.setInterval("refreshDiv()", 1500);

function refreshDiv(){
    counter = counter + 1;
    function reqListener () {
    inhalt=document.getElementById("chatoutput").innerHTML
    document.getElementById("chatoutput").innerHTML=this.responseText;

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://localhost:8080/cgi/chatoutput.py?"+Date.now() );
    oReq.send();
}



//Chat Senden
function chatsenden() {
  function reqListener () {
  inhalt=document.getElementById("chatoutput").innerHTML
  document.getElementById("chatoutput").innerHTML=this.responseText;

  }
  var sender = new XMLHttpRequest();
  sender.addEventListener("load", reqListener);
  console.log("Test")
  console.log(document.getElementById("chatinput").value )
  sender.open("GET", "http://localhost:8080/cgi/chat.py?chat="+document.getElementById("chatinput").value );
  document.getElementById("chatinput").value = "";
  sender.send();
}
