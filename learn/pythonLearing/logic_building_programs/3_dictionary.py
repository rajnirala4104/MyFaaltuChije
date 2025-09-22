print("hello jeee.. kaisan ho..?")

# 1 Basic Questions
demoDict = {
    "raj": {"math": "98", "science": "96", "social science": "34", "english": "76"},
    "neha": {"math": "75", "science": "54", "social science": "87", "english": "65"},
    "ashish": {"math": "76", "science": "65", "social science": "67", "english": "34"},
    "diksha": {"math": "65", "science": "74", "social science": "54", "english": "97"},
    "vinit": {"math": "43", "science": "64", "social science": "78", "engilsh": "70"},
    "aryan": {"math": "99", "science": "76", "social science": "54", "english": "44"},
}

# this is how  we can insert a data in a dictionary``
demoDict["reyan"] = {
    "math": "98",
    "science": "99",
    "social science": "97",
    "english": "99",
}

# print(demoDict)

# 2nd question
demoDict.pop("neha")  # this is how you can remove a perticular key value pair

# 3rd
print(demoDict.keys())  # .keys() to get all the keys of a dictionary

# 4rd
print(demoDict.values())  # .values() to get all the values of a dictionary


# 5th
def findKeyInDic(key, dictionary=demoDict):
    return key in dictionary


print(findKeyInDic("aryan"))


print("-------------------------------------")


# 6th Intermediate Questions
def newDicWithWordLength(listWithWord):
    finalOutput = {}
    for word in listWithWord:
        finalOutput[word] = len(word)

    return finalOutput


print(newDicWithWordLength(demoDict.keys()))


# 7th Sum of all the values of a dictionary
def sumOfAllTheValuesOfDictionary(dictionary):
    return sum(dictionary.values())


print(sumOfAllTheValuesOfDictionary(newDicWithWordLength(demoDict.keys())))
