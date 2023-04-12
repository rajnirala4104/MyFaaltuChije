import java.util.Scanner ;
public class conditional{
    public static void main(String args[]){
        System.out.println("Enter your Age: ");
        Scanner sc =  new Scanner(System.in);
        int userAge = sc.nextInt();
        if(userAge < 18){
            System.out.println("Sorry you can't vote...");
        }else if(userAge >= 80){
            System.out.println("You're not in world bro");
        }
        else{
            System.out.println("You can vote");
        }
        sc.close();
    }
}