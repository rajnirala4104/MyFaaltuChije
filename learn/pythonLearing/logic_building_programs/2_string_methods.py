print("hello world; how're you dogin..?")

# 1st easy question
someText = " something "
print(someText.strip().upper())  # .stip() is used to remove all the whitespaces

# 2nd
givenText = "PYTHON IS FUN"
print(givenText.lower())  # .lower() is used to make the string smaller

# 3rd
givenText2 = "12345"
print(
    givenText2.isalnum()
)  # .isalnum() is used to check if a string contains any numaric value.

# 4th
givenText3 = "I Love JavaScript, and I Like java"
print(
    givenText3.replace("java", "Python")
)  # .replace("1", "2") is used to replace the parameter 1 to parameter 2


# 5th
givenText4 = "Banana"
print(givenText4.count("a"))  # .count("item") is used to count the item.

# 6th Medium Level Question
givenText5 = "Welcom to Python Programming"
print(
    givenText5.split(" ")
)  # .split("/") is used to split the string from the symbol that we give. this will return a list


# 7th
givenItem = ["python", "is", "lullu-pullu", "language"]
print(
    " ".join(givenItem)
)  # .join(iterable) is used to join every item of a list with the string that we give it as a parameter

print("-".join(givenItem))  # another example

# 8th
givenText6 = "raj is a super hero"
print(givenText6.startswith("raj"))  # .startswith() go with its name
print(givenText6.endswith("zero"))  # .endswith() go with its name

# 9th
givenText7 = "Hello world, world is big"
for i in givenText7.split(", "):
    print(i.find("world"))

# 10th
givenText8 = (
    "this is a test"  # this is input and output should be like "This Is A Test"
)
finalOutput = ""
for word in givenText8.split(" "):
    finalOutput += f"{word.capitalize()} "

print(finalOutput.strip())  # output: "This Is A Text"

# 11th advanced level questions
# remove all vowels from "Beautiful Day In Python"
