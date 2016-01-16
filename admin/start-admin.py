import SimpleHTTPServer
import SocketServer
from urlparse import urlparse, parse_qs
import urllib;
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
		qs = {i[0] : urllib.unquote_plus(i[1]) for i in parts}
		return qs;

	def getNewEventJson(self, qs):
		required_fields = ("parent-category", "name", "date", "content");
		if all([x in qs for x in required_fields]):
			return { "name": qs["name"], "date": qs["date"], "content": qs["content"] };
		else:
			return "BAD";

	def readJSONFile(self, fname):
		with open(fname, "r") as f:
			event_structure = json.loads(''.join(f.readlines()))
		return event_structure

	def writeJSONFile(self, data, fname):
		s = json.dumps(data)
		with open(fname, "w") as f:
			print "WRITING TO " + fname;
			f.write(s);

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
					if event == "BAD": 
						self.wfile.write("INVALID NEW EVENT REQUEST - NOT ENOUGH PARAMETERS");
						return;

					struct = self.readJSONFile("events.json");

					# Now insert into there.  I would use filter but it's immutable.
					for i in range(0, len(struct["categories"])):
						if struct["categories"][i]["category-name"] == qs["parent-category"]:
							struct["categories"][i]["events"].insert(0, event);
							break;
					else:
						self.wfile.write("INVALID NEW EVENT REQUEST - COULDN'T FIND PARENT CATEGORY");
						return;

					# Write it back to file.
					self.writeJSONFile(struct, "events.json");

					self.wfile.write("NEW_EVENT_SUCCESS");
					return;
				elif qs["arg"] == "new-category":
					if "name" not in qs or qs["name"] == "":
						self.wfile.write("INVALID NEW CATEGORY REQUEST |MISSING NAME");
						return;

					struct = self.readJSONFile("events.json");
					for i in range(0, len(struct["categories"])):
						if struct["categories"][i]["category-name"] == qs["name"]:
							self.wfile.write("INVALID NEW CATEGORY REQUEST |CATEGORY ALREADY EXISTS");
							return;
					else:
						struct["categories"].insert(0, {
							"category-name": qs["name"],
							"events": []
						});
						self.writeJSONFile(struct, "events.json");
						self.wfile.write("NEW_CATEGORY_SUCCESS");
				else:
					self.wfile.write("UNKNOWN COMMAND");
		else:
			self.wfile.write("MISSING COMMAND")

Handler = ServerHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Serving at: http://%(interface)s:%(port)s" % dict(interface=I or "localhost", port=PORT)
httpd.serve_forever()
