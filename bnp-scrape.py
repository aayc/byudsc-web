import urllib
import json;
from bs4 import BeautifulSoup;

def validateRow (tr):
	if tr is None:
		return False
	if tr.find("abbr") is None:
		return False
	return True

def parseTeam (tr):
	score = tr.find("abbr", {"class" : "score"}).getText().strip().encode("utf-8")
	name = tr.find("a", {"class" : "team-link"}).getText().strip().encode("utf-8")
	position = tr.find("td", {"class" : "leader-number"}).getText().strip().encode("utf-8")
	return {
		"score" : score,
		"name" : name,
		"position" : int(position)
	};

url = "https://www.kaggle.com/c/bnp-paribas-cardif-claims-management/leaderboard"
soup = BeautifulSoup(urllib.urlopen(url).read(), 'html.parser')
listings = soup.find("table", {"id" : "leaderboard-table"}).findAll("tr")[1::];
listings = filter(lambda x: validateRow(x), listings)
listings = sorted(map(lambda x: parseTeam(x), listings), key=lambda x: x["position"])

byus = filter(lambda x: "BYU" in x["name"].upper(), listings)
asJson = [json.dumps(i) for i in byus]
for j in asJson:
	print j
