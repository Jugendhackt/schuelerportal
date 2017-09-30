#!/usr/bin/env python

import os
import Cookie
import cgi,cgitb
from bauteile import userdata
form = cgi.FieldStorage()
login = False
print "Content-type: text/html\r\n\r\n"

print """
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/login.css">
<body>
"""


if 'HTTP_COOKIE' in os.environ:
    cookie_string=os.environ.get('HTTP_COOKIE')
    c=Cookie.SimpleCookie()
    c.load(cookie_string)
    try:
        data=c['Hausaufgabenwebseite'].value


    except KeyError:
        login = True

if login == True:
    print """
    <form  method="POST"action="login.py">
      <h1> Login </h1>
      <div class="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
      </div>
    </form>
                """
elif login == False:
            print "<script>"
            print "window.location.href=\"index.py\";"
            print "</script>"
print """
</body>
</html>

"""
