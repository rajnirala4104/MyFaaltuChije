# ------------------ LAMBDA FUCNTIONS --------------

"""
A lambda function is a small anonymous function (meaning it doesn’t have a name like normal def functions).

It is created using the keyword lambda.

Syntax:-
lambda arguments: expression
"""

# basic example


# Normal function
def add(x, y):
    return x + y


# Lambda function
add_lambda = lambda x, y: x + y

print(add(5, 3))  # 8
print(add_lambda(5, 3))  # 8
