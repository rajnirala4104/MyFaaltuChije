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
print(givenText8.title())  # output: "This Is A Text"
finalOutput = ""
for word in givenText8.split(" "):
    finalOutput += f"{word.capitalize()} "

print(finalOutput.strip())  # output: "This Is A Text"

# 11th advanced level questions
# remove all vowels from "Beautiful Day In Python"
givenText9 = "Beautiful Day In Python"
vowels = ["a", "i", "o", "u", "e"]
finalOutput11Q = ""

for char in givenText9:
    if char not in vowels:
        finalOutput11Q += char

print(finalOutput11Q)


# 12th :- reversed using sliceing method
givenText10 = "raaj"
print(givenText10[::-1])

# 13th find the user name by their email id
givenText11 = "rajnirala@gmail.com"
print(givenText11.split("@")[0])  # output:- rajnirala

# 14th count the string
givenText12 = "my name is raj nirala and i'm a super hero"
print(len(givenText12))  # len() method is used to get the length

# 15th :- sqap upper to lower and lower to upper
givenText13 = "Hello World, This is Raj Nirala"
finalOutput13Q = ""
for char in givenText13:
    if char.isupper():
        finalOutput13Q += char.lower()
    else:
        finalOutput13Q += char.upper()

print(finalOutput13Q)

# 16th :- "apple,banana,grapes" turn this is string into a list then string separated by "|"
givenText14 = "apple,banana,grapes"
textList = givenText14.split(",")
print("|".join(textList))

# 17th :- check "madam" is palindrome or not
givenText15 = "madam"
print(givenText15[::-1] == givenText15)

# 18th :-
# askName = input("Enter your name: ")
# askAge = int(input("Enter your age: "))
# print(f"Hello {askName}, I know you're {askAge} year old")

# 19th :- Extract all digits from "My phone number is 98765 and pin is 411045".
givenText16 = "My phone number is 98765 and pin is 411045"
allChars = givenText16.split(" ")
finalOutput19Q = []
for w in allChars:
    if w.isdigit():
        finalOutput19Q.append(w)

print(finalOutput19Q)


# 20th :- Write a program that counts the frequency of each character in "mississippi" and prints like
"""
m: 1
i: 4
s: 4
p: 2
"""
giventText17 = "mississiPPI"
finalOutputDict = {}
for ch in giventText17.lower():
    if ch in finalOutputDict.keys():
        finalOutputDict[ch] += 1
    else:
        finalOutputDict[ch] = 1

for i in finalOutputDict.items():
    print(i)
