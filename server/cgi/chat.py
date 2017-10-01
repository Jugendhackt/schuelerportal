#!/usr/bin/python
# -*- coding: utf-8 -*-
# Import modules for CGI handling
import cgi, cgitb,os
#from future import print_function

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
Inhalt  = form.getvalue('chat')

hausaufgabendatei = "other/Hausaufgaben.txt"
chatdatei = "other/Chat.txt"
username = "Gast"

ip = cgi.escape(os.environ["REMOTE_ADDR"])

if ip == "192.168.9.90":
	username = "Anton"
if ip == "192.168.9.177":
	username = "Kira"
if ip == "192.168.9.147":
	username = "Lena"
if ip == "192.168.9.134":
	username = "Julia"dataType
print "Access-Control-Allow-Origin:*"
print "Access-Control-Allow-Methods:*"
print "Content-type:text/html\r\n\r\n"
print "<html xmlns=\"http://www.w3.org/TR/html5/\">"
print "<head>"
print "<meta charset=\"utf-8\">"
print "<title>Chat</title>"
print "<link rel=\"stylesheet\" href=\"/box.css\">"
print "<script>window.close();</script>"
print "</head>"
print "<body>"
print "<script>"
print "window.location.href=\"index.py\";"
print "</script>"
print "</body>"
print "</html>"


if Inhalt=="/clear":
	file = open(chatdatei, "w")
	file.close()
else:
    file = open(chatdatei, "a")
    foo = username + ": "+ Inhalt + "\n"
    file.write(foo)
    file.close()
