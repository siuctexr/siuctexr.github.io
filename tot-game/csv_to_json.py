import csv
import json

my_dict = {}

with open('sites.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    next(reader)
    for row in reader:
        lst = my_dict.get(row[0], [])
        lst.append({'siteType': row[1], 'name': row[2]})
        my_dict[row[0]] = lst

print(my_dict)

with open('data.json', 'w') as outfile:
    json.dump(my_dict, outfile)
