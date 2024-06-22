import java.util.Scanner;


public class diziOlustutrupAsalArama {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String asallar = "";
		String asalOlmayanlar = "";
		int asalToplam = 0;
		int asalOlmayanToplam = 0;
		System.out.println("Asal sayı bulma uygulamasına hoşgeldiniz.");
		
		System.out.print("kaç tane sayı gireceğinizi yazınız : ");
		int diziUzunluğu = scanner.nextInt();
		scanner.nextLine();
		
		int[] sayilar = new int[diziUzunluğu];
		for (int i = 0 ; i < sayilar.length ; i++) {
			System.out.print((i + 1) + ". sayıyı girin : ");
			sayilar[i] = scanner.nextInt();
		}
		
		for (int i : sayilar) {
			boolean asalMi = true;
					if(i<=1) {
						asalMi = false;
					} else {
						for (int j = 2; j < i ; j++) {
							if (i%j==0) {
								asalMi = false;
							}
							
						}
					}
					if (asalMi) {
						asalToplam++;
						asallar += i + " "; 
					} else {
						asalOlmayanToplam++;
						asalOlmayanlar += i + " ";
					}
					
			
		}
		
		System.out.println("Toplam Asal sayı adedi: " + asalToplam);
        System.out.println("Toplam Asal olmayan sayı adedi: " + asalOlmayanToplam);
        System.out.println("Asal olan sayılar: " + asallar);
        System.out.println("Asal olmayan sayılar: " + asalOlmayanlar);		
    	scanner.close();

	}

}
