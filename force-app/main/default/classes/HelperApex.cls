public class HelperApex {
	@AuraEnabled
    public static List<Account> getAccounts(){
		List<Account> accounts = [SELECT id, Name FROM Account];
        
        return accounts;
    }
    
}