public class FirstApexTriggerHandler {
	
    public static Boolean updateBypass = false;
    
    @future
    public static void updateAccounts(Set<Id> ids){
       
        List<Account> accounts 
        	= [SELECT Id, Name, (SELECT Id, Amount FROM Opportunities) FROM Account WHERE Id in : ids];
        
            for(Account a : accounts){
            	Integer sum = 0;
            
                for(Opportunity o : a.Opportunities){
                    sum = sum + (Integer)o.Amount;
                }
            
        		a.TotalAmount__c  = sum;
    		}
         System.debug('Future: '+accounts);
        update accounts; 
    }
}