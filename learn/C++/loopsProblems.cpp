#include <iostream>
using namespace std;

int main()
{

      // int pocketMoney = 5000;
      // for (int date = 0; date < 30; date++){
      //       if (date % 2 == 0){
      //             continue; // it'll skip this itration and will move to the next itration
      //       }

      //       if (pocketMoney == 0){
      //             break; // it'll terminate the loop
      //       }

      //       cout << "go out today" << endl;
      //       pocketMoney = pocketMoney - 300;
      // }

      // -------------- problem ----------

      // for (int num = 0; num <= 100; num++){
      //       if (num % 3 == 0){
      //             continue;
      //       }
      //       cout << num << endl;
      // }

      // ---------- prime number ----------
      int startRang, endRang;
      cin >> startRang >> endRang;

      for (int j = startRang; j < endRang; j++){
            int i;
            for (i = 2; i < j; i++){
                  if (j % i == 0){
                        cout << "non prime number " << j << endl;
                        break;
                  }
            }
            if (i == j){
                  cout << "prime number " << i << endl;
            }
      }

      

      return 0;
}