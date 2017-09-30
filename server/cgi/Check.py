#!/usr/bin/python
# -*- coding: utf-8 -*-

# Import modules for CGI handling and for running an Commant
import cgi, cgitb , subprocess
#from future import print_function

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
Inhalt = form.getvalue('Inhalt')

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<meta charset=\"utf-8\">"
print "<link rel=\"stylesheet\" href=\"../css/box.css\">"
print "<title>Check</title>"
print "</head>"
print "<body class=\"back\">"
print "<a href=\"?Inhalt=Ip\">IP-ADRESSE</a>"
print "<a href=\"?Inhalt=Mone\">Close</a>"
if Inhalt=="Ip":
    ip = subprocess.check_output("ifconfig wifi0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'", shell=True)
    print "<p>IP-ADRESSE =",ip,"</p>"
print "</body>"
print "</html>"
