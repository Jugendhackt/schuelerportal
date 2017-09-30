#!/usr/bin/python
# -*- coding: utf-8 -*-

# Import modules for CGI handling
import cgi, cgitb
#from future import print_function

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
#################Einstellungen###################
Fach = form.getvalue('Fach')
Inhalt  = form.getvalue('Inhalt')

hausaufgabendatei = "other/Hausaufgaben.txt"
chatdatei = "other/Chat.txt"
#################################################
print "Content-type:text/html\r\n\r\n"

print "<html xmlns=\"http://www.w3.org/TR/html5/\">"
print "<html>"
print "<head>"
print "<meta charset=\"utf-8\">"
print "<link rel=\"stylesheet\" href=\"../css/box.css\">"
print "<title>Hausaufgaben werden Gespeichert</title>"
print "</head>"
print "<body>"
print "<script>"
print "window.location.href=\"edit.py\";"
print "</script>"
print "</body>"
print "</html>"

if Inhalt=="Loeschen":
	file = open(hausaufgabendatei, "w")
	file.close()
else:
	file = open(hausaufgabendatei, "a")
	foo = Fach+": "+Inhalt+"\n"
	file.write(foo)
	file.close()
