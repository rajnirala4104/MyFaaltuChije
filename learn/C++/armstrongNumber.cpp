#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int sum = 0;
    int realN = n;

    while (n > 0)
    {
        int lastDigit = n % 10;
        sum += static_cast<int>(pow(lastDigit, 3)); // Cast the result of pow to int
        n = n / 10;
    }

    if (sum == realN)
    {
        cout << "Armstrong Number" << endl;
    }
    else
    {
        cout << "Not An Armstrong number" << endl;
    }

    return 0;
}
