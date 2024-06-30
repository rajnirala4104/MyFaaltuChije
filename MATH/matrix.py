demo_metrix = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [41, 42, 43]]

# Creating an empty list
column = []
for row in demo_metrix:
   # Printing each row
   print(f"row{demo_metrix.index(row)}: {row}")
   # checking if current row index is less than the lenght of the current row
   if demo_metrix.index(row) < len(demo_metrix)-1:
      # using append() function to add the current row to the column and map() function to iterate over the current row elements
      column.append(list(map(lambda x: x[demo_metrix.index(row)], demo_metrix)))

print(column)


