#!/usr/bin/python
# -*- coding: utf-8 -*-
# Import modules for CGI handling
import cgi, cgitb, os
from bauteile import menu
#from future import print_function

#################Einstellungen###################
form = cgi.FieldStorage()
tab =  form.getvalue('tab')
facherdatei = "other/faecher.txt"
hausaufgabendatei = "other/Hausaufgaben.txt"
#################################################

print "Content-type:text/html\r\n\r\n"
print "<html xmlns=\"http://www.w3.org/TR/html5/\">"
print "<head>"
menu.menuhead("Editor")
print "<meta charset=\"utf-8\">"
print "<title>Hausaufgaben hinzufuegen</title>"
print "</head>"
print "<body>"
menu.printmenu(1)
print "<div class=\"content\">"
print "<p>Tipp tippe \"Loeschen\" um die Hausaufgaben zu Loeschen</p>"
print "<form action=\"save.py\" method=\"get\">"
print "Fach: <select name=\"Fach\">"
file = open(facherdatei, "r")
for line in file:
    print "<option value=\""+line+"\">"+line+"</option>"
file.close()
print "</select>  <input name=\"Inhalt\" type=\"text\">"
print "</input>"
print "<input  type=\"submit\">"
print "</input>"
print "</form>"

print "<p>Schon da!  :</p>"
file = open(hausaufgabendatei, "r")
for line in file:
    print line,
    print "</br>"
print "</body>"
print "</html>"
file.close()
