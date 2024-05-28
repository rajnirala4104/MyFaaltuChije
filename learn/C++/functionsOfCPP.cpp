#include <iostream>
#include <cmath> // Use <cmath> for C++ style
using namespace std;

bool isPrime(int num)
{
    if (num < 2) // Adding a check for numbers less than 2
    {
        return false;
    }
    for (int i = 2; i <= sqrt(num); i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main() // Corrected the typo here
{
    int a, b;
    cin >> a >> b;

    for (int i = a; i <= b; i++)
    {
        if (isPrime(i))
        {
            cout << i << " is Prime" << endl;
        }
        else
        {
            cout << i << " is non prime" << endl;
        }
    }

    return 0;
}
