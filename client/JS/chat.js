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
//window.setInterval("refreshDiv()", 1500);

function refreshDiv(){
    counter = counter + 1;
    function reqListener () {
    inhalt=document.getElementById("chatoutput").innerHTML
    document.getElementById("chatoutput").innerHTML=this.responseText;

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "../cgi/chatoutput.py?"+Date.now() );
    oReq.send();
}



//Chat Senden
$(document).ready(function() {
  $( "#chatsubmit" ).on("submit", function( event ) {
    event.preventDefault();
    sendinput = document.getElementById('chatinput');
    console.log("Test");
    $.post( "192.168.9.90/cgi/c<!--hat.py", { chat: sendinput } );
    sendinput.value = "";
    return false;
  });
});
