public with sharing class C1TestServerComponent {
    public C1TestServerComponent() {

    }

    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accounts = [SELECT id, Name FROM Account];
        return accounts;
    }
}