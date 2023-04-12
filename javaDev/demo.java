import java.util.Scanner;
public class demo{
    public static void main(String[] args){

        System.out.println("Hello guys, i'm raj nirala your dost.");
        Scanner inpMethod = new Scanner(System.in);

        //this is how your can take input from user
        System.out.println("Enter a number: ");
        int a = inpMethod.nextInt();

        String name = "Raj Nirala";
        System.out.println(name);
        
        for(int i=1; i<=10; i++){
            System.out.println(i*a);
        }
        inpMethod.close();
    }
}
