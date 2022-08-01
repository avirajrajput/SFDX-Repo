public class PreTestApexClass {

    @AuraEnabled
    public static Id saveAccount(Account acc){
        INSERT acc;
        return acc.Id;
    }
}