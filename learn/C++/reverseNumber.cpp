#include <iostream>
using namespace std;

int main()
{

    int n;
    cin >> n;
    int reversed = 0;
    while (n > 0)
    {
        int lastDigit = n % 10; // getting last number
        reversed = reversed * 10 + lastDigit;

        n = n / 10;
    }
    cout << reversed << endl;

    return 0;
}