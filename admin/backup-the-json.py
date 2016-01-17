#!/usr/bin/env python
import os;
import zipfile
import datetime
now = datetime.datetime.now()

def zipdir(root, ziph):
    # ziph is zipfile handle
    files = [f for f in os.listdir(".") if os.path.isfile(os.path.join(".", f))]
    jsons = filter(lambda x: x.split(".")[-1] == "json", files);
    for j in jsons:
    	ziph.write(j)


zipf = zipfile.ZipFile('json-backup/backup-' + str(now.month) + '-' + str(now.day) + '-' + str(now.year) + '.zip', 'w')
zipdir("json-backup/", zipf)
zipf.close()