user_first_name = "Tony"
user_last_name = "Stark"
user_age = 51
user_is_genius = False


def check_user_is_genius(boolean_value):
    if boolean_value:
        return "Genius as well"
    else:
        return "Not Genius"


print(
    f"Hello {user_first_name} {user_last_name}, How are you?\nI know you are {user_age} years old and you're {check_user_is_genius(user_is_genius)}."
)
