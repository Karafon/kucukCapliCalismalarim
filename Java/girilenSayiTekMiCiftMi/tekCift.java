package girilenSayiTekMiCiftMi;
import java.util.Scanner;


public class tekCift {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		
		
		System.out.print("Lütfen kaç adet sayı gireceğinizi yazınız : ");
		int diziUzunluğu = scanner.nextInt();
		scanner.nextLine();		
		int[] sayilar = new int[diziUzunluğu];
		
		for (int i = 0 ; i < sayilar.length; i++) {
			System.out.print((i+1)+". sayıyı giriniz : ");
			sayilar[i] = scanner.nextInt();
		}
		for (int i : sayilar) {

			tekCiftt(i);
			
		}
		scanner.close();


	}
	
	public static void tekCiftt(int sayi) {
		if (sayi%2==0) {
			System.out.println(sayi + " çift");
		}	else {
			System.out.println(sayi + " tek");

		}
		
		
		

	}

	
	

}
