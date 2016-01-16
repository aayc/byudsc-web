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

stopCode = "STOPCODE999";

class ServerHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

	def do_GET(self):
		qs = parse_qs(urlparse(self.path).query)
		'''print "GOT GET";
		if "arg" in qs.keys():
			print "ARG IN KEYS"
			if qs["arg"] == "new_event":
				print "HELLO"
				self.wfile.write(stopCode);'''

		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

	def do_POST(self):
		content_len = int(self.headers.getheader('content-length', 0))
		post_body = self.rfile.read(content_len)
		if len(post_body) > 0:
			print "presplit parts:",post_body
			post_body.replace("!", "");
			parts = [i for i in post_body.split("&")];
			print "Split parts: ", parts
			parts = map(lambda x: (x.split("=")[0], x.split("=")[1]), parts)
			qs = {i[0]:i[1] for i in parts}
			print "q map: ", qs
			if "arg" in qs:
				print "qs: ", qs
				print "POST BODY: ", post_body
				self.wfile.write("heyehyeh" + stopCode);
				return;
		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = ServerHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Serving at: http://%(interface)s:%(port)s" % dict(interface=I or "localhost", port=PORT)
httpd.serve_forever()
