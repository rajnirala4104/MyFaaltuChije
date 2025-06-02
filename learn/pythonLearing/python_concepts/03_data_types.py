# int (integer) - Whole numbers, positive or negative
a = 10
b = -20

print(type(a))  # <class 'int'>
print(b - a)  # -30


# float (floating points) - decimal numbers
f = 3.14
o = -9.8

print(type(o))  # <class 'float'>
print(o + f)  # -6.66


# str (string) - Sequence of characters enclosed in quotes
name = "raj"

print(type(name))  # <class 'str'>
print(name)  # raj


# bool (boolean) - only two values; True and False
is_python_fun = False
is_javascript_fun = True
print(type(is_javascript_fun))  # <class 'bool'>
print(is_javascript_fun)  # True

# list (Mutable Sequence) - ordered, changeable, allows, duplicates
car = ["tata curve", "toyta land cruser", "tata punch", "mahindra thar"]

print(car)
car.append("defender")
print(car)
car[2] = "fortuner"
print(car)


# tuple (Immutable Sequence) - Ordered, unchangeable, allows duplicates.
coordinates = (10.0, 20.0)
single_element = (5,)  # Notice the comma!
print(coordinates[0])  # 10.0

# dict (Dictionary) - Key-value pairs. Unordered (as of < 3.6), mutable, no duplicate keys.
person = {"name": "Raj", "age": 20, "is_student": True}
print(person["name"])  # Raj

# set (Unordered Collection, No Duplicates)
nums = {1, 2, 3, 3, 4}
print(nums)  # {1, 2, 3, 4}
nums.add(5)

# NoneType - Represents absence of value.
value = None
print(type(value))  # <class 'NoneType'>
