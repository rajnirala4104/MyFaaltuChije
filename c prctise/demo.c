#include <stdio.h>
#include <string.h>

struct studentDetails
{
    int studentId;
    char studentName[50];
    int age;
};

struct studentDetails Raj, achich, chhotu; 
int main(){
    Raj.studentId = 34;
    strcpy(Raj.studentName,"raj nirala");
    Raj.age = 18;
    achich.studentId = 32;
    strcpy(achich.studentName,"Ashish singh bhist");
    achich.age = 19;
    chhotu.studentId = 60;
    strcpy(chhotu.studentName, "vinit prjapati");
    chhotu.age = 10;

    char student[][10]= {"Raj", "achich", "chhotu"};

    printf("%s\n", achich.studentName);
    return 0;
}  