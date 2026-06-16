"""
ASCII (American Standard Code for Information Interchange) is a system that maps.
characters ↔ numbers
'A' → 65
'a' → 97
'0' → 48

So computers don’t store 'A' — they store 65.
"""

# we have to built-in functions which is very important.
# 1) ord(c)  - c stands for a character.
# 2) chr(i)  - i stands for an integer.

print("hello world;")

print(ord("a"))
print(chr(79))

for i in range(65, 97):
    print(chr(i), end=" ")
