#include <iostream>
using namespace std; // if you don't use this line, you'll have to use std:: before every cout

int main()
{
      // variable syntex -> dataType variableName = "value";

      int a = 4; // int for storing integer value - int takes 4 bytes space and 1byte has 8 bits it means 4bytes =  4X8 = 32 bits

      float b = 23.53; // float keyword for storing decimals number

      char n = 'r';               // char for storing a single charector
      char name[] = "raj nirala"; // this is how you can sotre a string in a variable

      cout << name << endl;
      cout << "int value " << a << " and flaot value is " << b << '\n';

      return 0;
}