#!/usr/bin/env python

import BaseHTTPServer
import CGIHTTPServer
import cgitb; cgitb.enable()  ## This line enables CGI error reporting

server = BaseHTTPServer.HTTPServer
handler = CGIHTTPServer.CGIHTTPRequestHandler
server_address = ("", 8080)
handler.server_version = ("Cooler Server")
handler.sys_version = ("")
handler.cgi_directories = ["/cgi"]

httpd = server(server_address, handler)
httpd.serve_forever()
