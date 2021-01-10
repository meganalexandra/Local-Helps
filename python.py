import csv
import json

csvfile = open('LocalHelps.csv', 'r')
jsonfile = open('LocalHelps.json', 'w')

fieldnames = ("C_Name","C_Link","PckUp","C_LocG","C_LocF","ThUP","ThDW","NPFood","PFood","Clth","Fhyg","Ghyg","Ctoy","Furn","Book")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')

csvfile.close()
jsonfile.close()