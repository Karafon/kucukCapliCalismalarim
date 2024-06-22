package basitHesapMakinesi;

import java.util.Scanner;

public class hesapMakinesi {
    public static void main(String[] args) {
       
    	Scanner scanner  = new Scanner(System.in);
    	
    	System.out.print("Bilmen Gerekenler \n"
    			+ "!!!Çarpma bölme işlem önceliği yoktur soldan sağa işlemleri sırasıyla yapar!!!\n"
    			+ "Örnek 1+7*3/2=12\n"
    			+ "Lütfen Yapmak İstediğini İşlemi Girin :");
    	
    	String input = scanner.nextLine();
    	
    	scanner.close();

    	if (!isValidInput(input)) {
    		System.out.println("Geçersiz giriş!");
    		return;
    	}
    	
    	String[] operator = input.trim().split("[0-9]+");
    	
    	String[] number = input.trim().split("[*+/\\-]");
		double result = Double.parseDouble(number[0].trim());

    	
    	try {
    		
    		for (int i = 1; i < number.length; i++) {
    			double sayi = Double.parseDouble(number[i].trim());
    			String operation = operator[i].trim();
    			
    			
    			switch (operation) {
    			case "+":
    				result+= sayi;
    				break;
    			case "-":
    				result-= sayi;
    				break;
    			case "/":
    				if(sayi != 0 ) {
    					result/= sayi;
    					break;
    				} else {
    					System.out.println("Payda sfır olamaz");
    					return;
    				}
    			case "*":
    				result*= sayi;
    				break;

    			default:
    				break;
    			}
    			
    		}

        	System.out.println("Sonuç = " + result);
			
		} catch (Exception e) {
			System.out.println("Geçersiz sayı formatı! Lütfen geçerli bir sayı formatı girin.");
		}
    	
		}
    
    private static boolean isValidInput(String input) {
        return input.matches("[0-9+\\-*/]+");
    }
    
    
    }

