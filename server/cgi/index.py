#!/usr/bin/python
# -*- coding: utf-8 -*-

import cgi,cgitb,os
print "Content-type:text/html"
print "Set-Cookie:usercode=eins\r\n\r\n"

#################Einstellungen###################
form = cgi.FieldStorage()
tab =  0
chatinput  = form.getvalue('chat')
hausaufgabendatei = "other/Hausaufgaben.txt"
chatdatei = "other/Chat.txt"
username = "Gast"
ip = cgi.escape(os.environ["REMOTE_ADDR"])
#################################################



if form.getvalue('tab') != None:
	tab = form.getvalue('tab')

print "<html xmlns=\"http://www.w3.org/TR/html5/\">"
tabs=  ["Home","Hausaufgaben","Stundenplan","Chat","Einstellungen"]
#menu.menuhead(tabs[int(tab)])

#menu.printmenu(tab)
print "<body>"
print """
<script src="../js/chat.js"></script>
<div class="content">
"""

print "<div  class=\"chat\" id=\"chatoutput\">"
from bauteile import chatoutput
print "</div>"
print "<form action=\"chat.py\" method=\"post\">"
print" <input name=\"chat\" type=\"text\">"
print "</input>"
print "<input type=\"submit\">"
print "</input>"
print "</from>"
print "</div>"
print "</body>"
print "</html>"
