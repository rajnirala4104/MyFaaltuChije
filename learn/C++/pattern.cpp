#include <iostream>
using namespace std;
int main()
{

    // ------------- filled rectangle -----------

    /*
    row=5, col=5

    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *

    */

    // int row, col;
    // cin >> row >> col;
    // for (int i = 0; i < row; i++)
    // {
    //     for (int j = 0; j < col; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // -------------- hollow rectangle -----------
    /*
    row=5, col=5

        * * * * *
        *       *
        *       *
        *       *
        * * * * *

    */

    // int row, col;
    // cin >> row >> col;
    // for (int i = 1; i <= row; i++)
    // {
    //     for (int j = 1; j <= col; j++)
    //     {
    //         if (i == 1 || i == row || j == 1 || j == col)
    //         {
    //             cout << "* ";
    //         }
    //         else
    //         {
    //             cout << "  ";
    //         }
    //     }
    //     cout << endl;
    // }

    // ------------- inverted half pyramid -------
    /*
        n=6

        * * * * *
        * * * *
        * * *
        * *
        *

    */

    // int n;
    // cin >> n;

    // for (int i = n; i >= 1; i--)
    // {
    //     for (int j = 0; j <= i; j++)
    //     {
    //         cout << "*";
    //     }
    //     cout << endl;
    // }

    // --------------- half pyramid ----------
    /*
    n=5
              *
            * *
          * * *
        * * * *
      * * * * *

    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= n; j++)
    //     {
    //         if (j <= n - i)
    //         {
    //             cout << "  ";
    //         }
    //         else
    //         {
    //             cout << "* ";
    //         }
    //     }
    //     cout << endl;
    // }

    // ---------------- half pyramid using numbers ---------

    /*
        n=5
        1
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5
    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << i << " ";
    //     }
    //     cout << endl;
    // }

    //-------------- half pyraming using icremented numbers ----------
    /*
    n=5 ---- rows -----

        1
        2 3
        4 5 6
        7 8 9 10
        11 12 13 14 15

    */

    // int n;
    // cin >> n;
    // int count = 1;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << count << " ";
    //         count++;
    //     }
    //     cout << endl;
    // }

    // ----------- butterfly pattern -----------
    /*
        n=4

        rows: 1 to n
        spaces: 2*m-2*rowNo

        *        *
        **      **
        ***    ***
        ****  ****
        **********
        **********
        ****  ****
        ***    ***
        **      **
        *        *

    */

    // int n;
    // cin >> n;

    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     int space = 2 * n - 2 * i;
    //     for (int j = 1; j <= space; j++)
    //     {
    //         cout << "  ";
    //     }

    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // for (int i = n; i >= 1; i--)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     int space = 2 * n - 2 * i;
    //     for (int j = 1; j <= space; j++)
    //     {
    //         cout << "  ";
    //     }

    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // ------------ inverted number pattern ------------
    /*

    n=5
        1 2 3 4 5
        1 2 3 4
        1 2 3
        1 2
        1

    */

    // int n;
    // cin >> n;

    // for (int i = 1; i <= n; i++)
    // {
    //     int col = n + 1 - i;
    //     for (int j = 1; j <= col; j++)
    //     {
    //         cout << j << " ";
    //     }
    //     cout << endl;
    // }

    // ---------------- 0 1 pattern -----------
    /*
        n=5

        1
        0 1
        1 0 1
        0 1 0 1
        1 0 1 0 1

    */

    // int n;
    // cin >> n;

    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         if ((i + j) % 2 == 0)
    //         {
    //             cout << "1" << " ";
    //         }
    //         else
    //         {
    //             cout << "0" << " ";
    //         }
    //     }
    //     cout << endl;
    // }

    // ---------------- rhombus pattern -----------
    /*
    n=5
           * * * * *
          * * * * *
         * * * * *
        * * * * *
       * * * * *

    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= n - i; j++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= n; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // -------------- number pyramid pattern --------------

    /*
        n=5
             1
            1 2
           1 2 3
          1 2 3 4
         1 2 3 4 5

    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= n - i; j++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << j << " ";
    //     }
    //     cout << endl;
    // }

    // ------------- palindromic pattern ---------
    /*
        n=5
                1
              2 1 2
            3 2 1 2 3
          4 3 2 1 2 3 4
        5 4 3 2 1 2 3 4 5

    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= n; i++)
    // {
    //     int j;
    //     for (j = 1; j <= n - i; j++)
    //     {
    //         cout << "  ";
    //     }

    //     int k = i;
    //     for (; j <= n; j++)
    //     {
    //         cout << k-- << " ";
    //     }
    //     k = 2;
    //     for (; j <= n + i - 1; j++)
    //     {
    //         cout << k++ << " ";
    //     }
    //     cout << endl;
    // }

    //  -------------- star pattern --------

    // int n;
    // cin >> n;

    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= n - i; j++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }
    // for (int i = n; i >= 1; i--)
    // {
    //     for (int j = 1; j <= n - i; j++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // ------------ zig zag pattern ----------

    /*
        n=9;

         *    *
        * *  * *
       *   *    *

    */

    // int n;
    // cin >> n;
    // for (int i = 1; i <= 3; i++)
    // {
    //     for (int j = 1; j <= n; j++)
    //     {
    //         if (((i + j) % 4 == 0) || (i == 2 && j % 4 == 0))
    //         {
    //             cout << "*  ";
    //         }
    //         else
    //         {
    //             cout << "   ";
    //         }
    //     }
    //     cout << endl;
    // }
}