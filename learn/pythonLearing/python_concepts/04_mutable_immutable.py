# e.g - immutable
x = 10  # x has an object of 10
y = x  # y has the refrence of x which is 10
x = 20  # this x has created the another object of 20 - in other word this x is another variabe,
# NAME CAN BE DIFFIRENT BUT THE REFRENCE CAN'T BE SAME IN THE CASE OF STRING AND NUMBER; THIS IS CALLED IMMUTABLE, WHERE REFRENCE IS NOT CHANGED

#
#      _____
#     |     |
# /-->| 20  |
# |   |_____|
# |
# ^    _____
# |   |     |
# x = | 10  |
#     |_____|
#        ^
#        |
# y = ---/
#
#


print(x)  # ouput: 20
print(y)  # output: 10 - because y had the refrence of 10
