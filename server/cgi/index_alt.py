#!/usr/bin/python
# -*- coding: utf-8 -*-

import cgi,cgitb,os
from bauteile import menu
print "Content-type:text/html\r\n\r\n"


#################Einstellungen###################
form = cgi.FieldStorage()
tab =  0
chatinput  = form.getvalue('chat')
hausaufgabendatei = "other/Hausaufgaben.txt"
Hausaufgabenweb = "- Hausaufgabenwebseite"
chatdatei = "other/Chat.txt"
username = "Gast"
ip = cgi.escape(os.environ["REMOTE_ADDR"])
#################################################

if form.getvalue('tab') != None:
	tab = form.getvalue('tab')

print "<html xmlns=\"http://www.w3.org/TR/html5/\">"
tabs=  ["Home"+Hausaufgabenweb,"Hausuafgaben"+Hausaufgabenweb,"Stundenplan"+Hausaufgabenweb,"Chat"+Hausaufgabenweb,"Einstellungen"+Hausaufgabenweb]
print"""
	<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/onlymenu.css">
	<link rel="stylesheet" href="../css/nohtmlinchat.css">
	<link rel="stylesheet" href="../css/chat.css">
    <script src="../js/chat.js"></script>
	<link rel="stylesheet" href="../css/box.css">
	<title>%s</title>
	</head>
	"""%tabs[int(tab)]
print """
	<body>
	<link rel="stylesheet" href="../css/openclose.css">
	<link rel="help" href="/help/">
	<script src="../js/openclose.js"></script>
	"""
menu.printmenu(tab)
print """
<div class="content">
"""
print	"<h3>Hallo und herzlich Wilkommen auf der Hausaufgaben Webseite</h3>"
print "Hallo,"+cgi.escape(os.environ["REMOTE_ADDR"])
print "</br>"
if tab == "0":
	print   "<p>Du bist auf der Startseite</p>"
elif tab == "1":
	print "<p>Hausaufgaben:</p>"
	file = open(hausaufgabendatei, "r")
	for line in file:
	    print line,
	    print "</br>"
	print "</br></br><a href=\"./edit.py\">EDITOR</a>"
	file.close()
elif tab == "2":
	print   "<img width=\"300\" class=\"\" height=\"200\" src=\"../other/Stundenplan2.png\"></img>"
elif tab == "3":
	print "<div  class=\"chat\" id=\"chatoutput\">"
	from bauteile import chatoutput
	print "</div>"
	print "<form action=\"chat.py\" method=\"get\">"
	print" <input name=\"chat\" type=\"text\">"
	print "</input>"
	print "<input type=\"submit\">"
	print "</input>"
	print "</from>"
else:
	print   "<p>Du bist auf der Startseite</p>"
print "</div>"
print "</body>"
print "</html>"
