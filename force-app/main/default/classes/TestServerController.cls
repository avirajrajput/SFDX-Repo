public with sharing class TestServerController {
    
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT id, Name, OwnerId FROM Account];
    }
}