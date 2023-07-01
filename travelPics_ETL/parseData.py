# Init script
print("\nParsing data...")

# Temporarily stores data from pictures folder
file = open('filteredData.txt', 'r')
lines = file.readlines()
my_dict = {}
my_list = []

f = open("parsedOutput.json", "w")
f.write('[')
f.close()
n = 0
for line in lines:
    line = line.split('=')
    line = [i.strip() for i in line]
    my_dict[line[0]] = line[1]   
    n += 1
    if n % 8 == 0:
      f = open("parsedOutput.json", "a")
      f.write(str(my_dict))
      if n < len(lines) - 8:
        f.write(',\n')
      my_dict.clear()
      f.close()
f = open("parsedOutput.json", "a")      
f.write(']')
f.close()        
file.close()    
print("\nParsing complete.\nData stored in parsedOutput.json")
