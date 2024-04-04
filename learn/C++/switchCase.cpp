#include <iostream>
using namespace std;

int main(){

      //----- problem : a -> "hello", b -> "namastey", c -> "hola", d -> "bonsour", e -> "vadakkam", unkown char -> "i'm still learning new things"

      char userChar;
      cin>>userChar;


      // --------- first method to do that ------
      // if(userChar == 'a'){
      //       cout<<"Hello"<<endl;
      // }else if(userChar == 'b'){
      //       cout << "Namastey" << endl;
      // }else if(userChar == 'c'){
      //       cout << "Hola" << endl;
      // }else if(userChar == 'd'){
      //       cout << "Bonsour" << endl;
      // }else if(userChar == 'e'){
      //       cout << "vadakkam" << endl;
      // }else{
      //       cout << "sorry, i'm still learning" << endl;
      // }

      // ---------- second method to do that -----------
      switch (userChar)
      {
      case 'a':
            cout<< "Hello" << endl;
            break;
      case 'b':
            cout<< "Namastey" << endl;
            break;
      case 'c':
            cout<< "Hola" << endl;
            break;
      case 'd':
            cout<< "Bonsour" << endl;
            break;
      case 'e':
            cout<< "Vadakkam" << endl;
            break;
      
      default:
      cout << "Sorry i'm still learning " << endl;
            break;
      }


      return 0;
}