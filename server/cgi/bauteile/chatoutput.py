#!/usr/bin/python
# -*- coding: utf-8 -*-
import cgi,cgitb


#################Einstellungen###################
form = cgi.FieldStorage()
tab =  form.getvalue('tab')
chatdatei = "other/Chat.txt"
Hausaufgabenweb = "- Hausaufgabenwebseite"
#################################################
def chat():
    print "<p>Chat:</p>"
    file = open(chatdatei, "r")
    for line in file:
        print "<a class=\"nachricht\">"+line.replace(":-)","&#x1F604;").replace(":-|","&#x1F610;").replace(":-(","&#128542;")+"</a>"
        print "</br>"

    file.close()
chat()
