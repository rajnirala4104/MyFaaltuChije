# 1st question
givenList = [1, 2, 3, 4, 5]
print(sum(givenList))

# 2nd question saperate even numbers
givenList2 = [23, 4, 5, 76, 556, 55, 3, 4, 2, 5, 6, 68, 40]
print(sorted([i for i in givenList2 if i % 2 == 0]))

# 3rd
givenText1 = "python"
print([ch for ch in givenText1.upper()])

# 4th
givenDict = {"a": 1, "b": 2, "c": 3, "e": 4}
print({key: values**2 for key, values in givenDict.items()})
