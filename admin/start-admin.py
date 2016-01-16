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

	def decodePostBody(self, post_body):
		post_body.replace("!", "");
		parts = [i for i in post_body.split("&")];
		parts = map(lambda x: (x.split("=")[0], x.split("=")[1]), parts)
		qs = {i[0]:i[1] for i in parts}
		return qs;

	def getEventJson(self, qs):
		print "NEW EVENT ARG DETECTED"
		required_fields = ("name", "date", "content");
		if all([x in qs for x in required_fields]):
			return json.dumps({
				name: qs["name"], date: qs["date"], content: qs["content"]
			});
		else:
			self.wfile.write("INVALID NEW EVENT REQUEST - NOT ENOUGH PARAMETERS");

	def getEventStructure(self, f):
		with open("events.json") as f:
			event_structure = json.loads(''.join(f.readlines()))
		print "EVENTS.JSON: ",event_structure;
		return event_structure

	def do_GET(self):
		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

	def do_POST(self):
		content_len = int(self.headers.getheader('content-length', 0))
		post_body = self.rfile.read(content_len)
		if len(post_body) > 0:
			qs = self.decodePostBody(post_body);

			if "arg" in qs:
				if qs["arg"] == "new-event":
					event = self.getNewEventJson(qs);
					print "CONSTRUCTED JSON: ", event;
					struct = self.getEventStructure("events.json");
				elif qs["arg"] == "new-category":
					print "NEW CATEGORY COMING SOON!"

				return;
		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = ServerHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Serving at: http://%(interface)s:%(port)s" % dict(interface=I or "localhost", port=PORT)
httpd.serve_forever()
