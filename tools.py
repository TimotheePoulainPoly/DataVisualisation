# -*- coding: utf-8 -*-

# Keys
count = 0
print("[", end = "")
for l in ['A', 'B', 'C', 'D', 'E', 'F', 'G']:
    print("'"+l+"min', '"+l+"maj', ", end = "")
    count += 2
    if (l != 'C' and l != 'F'):
        print("'"+l+"bmin', '"+l+"bmaj', ", end = "")
        count += 2
print("]")

print(count)

# Genres
genres = []

file1 = open('genres.txt', 'r')
count = 0
  
while True:
    count += 1
  
    # Get next line from file
    line = file1.readline()
  
    if (line != "" and line not in genres):
        genres.append(line)
    # if line is empty
    # end of file is reached
    if not line:
        break
    print("Line {}: {}".format(count, line.strip()))
  
file1.close()

print(genres)
for g in genres:
    print("'"+g.replace('\n', '')+"', ", end = "")
    
print(len(genres))