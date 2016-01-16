import SimpleHTTPServer
import SocketServer
import logging
import cgi
from urlparse import urlparse, parse_qs
import json

import sys


if len(sys.argv) > 2:
	PORT = int(sys.argv[2])
	I = sys.argv[1]
elif len(sys.argv) > 1:
	PORT = int(sys.argv[1])
	I = ""
else:
	PORT = 8400
	I = ""


class ServerHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

	def do_GET(self):
		query_components = parse_qs(urlparse(self.path).query)
		if "q" in query_components.keys():
			self.wfile.write("<html><body><h1>hi!</h1></body></html>STOPCODE999")
		print "GET REQUEST: Sending web page";
		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

	def do_POST(self):
		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = ServerHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Serving at: http://%(interface)s:%(port)s" % dict(interface=I or "localhost", port=PORT)
httpd.serve_forever()
