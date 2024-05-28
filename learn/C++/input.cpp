#include <iostream>
using namespace std;

int main()
{

      cout << "Enter first value :";

      int amount1;
      cin >> amount1; // we can take input using ---- cin >> variableName ------ variableName where we want to store the input data

      cout << "Enter second value: ";

      int amount2;
      cin >> amount2;

      cout << "the sum of all the value => " << amount1 + amount2 << endl;

      // ---------------------------------------------------------------

      string names[] = {"raj", "vicky", "vinit", "aryan"}; // this is how you can store string in array
      string dost;
      getline(cin, dost); // this is another way to take input and store in a variable

      cout << "-------------" << endl;
      for (int i = 0; i < names->length(); i++)
      {
            cout << names[i] << endl;
      }
      cout << dost << endl;

      return 0;
}