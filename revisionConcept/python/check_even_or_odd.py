
def check_even_or_odd():
    user_num = int(input("Enter a number: "))
    if user_num%2 == 0:
        print("your number is an EVEN number")
    else: 
        print("Your number is an ODD number")
    

# check_even_or_odd()

# while True:
#     ask_for_again = input("continue? press 'yes' :  ")
#     if ask_for_again.lower() == "yes":
#         check_even_or_odd()
#     else:
#         break


def check_even_and_odd_from_range_number(num:int):
    even_number_arr = []
    odd_number_arr = []
    for i in range(0, num):
        if i %2 == 0:
            even_number_arr.append(i)
            print(f"even - {i}" )
        else:
            odd_number_arr.append(i)
            print(f"odd - {i}")

    print(f"\neven - {even_number_arr}\nodd - {odd_number_arr}")


user_number = int(input("Enter a number: "))
check_even_and_odd_from_range_number(user_number)