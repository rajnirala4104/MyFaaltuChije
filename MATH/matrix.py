demo_metrix = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [41, 42, 43]]

# Creating an empty list
column = []
for row in demo_metrix:
   # Printing each row
   print(f"row{demo_metrix.index(row)}: {row}")
   # checking if current row index is less than the lenght of the current row
   # If true, then the current row is being pushed into the 'column' list
   if demo_metrix.index(row) < len(demo_metrix)-1:
      # Using map() function to append the current row to the 'column' list.
      # The map() function takes two arguments: a function and an iterable. 
      column.append(list(map(lambda x: x[demo_metrix.index(row)], demo_metrix)))

print(column)


