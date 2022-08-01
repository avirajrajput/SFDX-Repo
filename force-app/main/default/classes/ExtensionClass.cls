public class ExtensionClass {

    public List<Account> accountList{get; set;}
    public ExtensionClass(VfController c){
        accountList = [SELECT id, Name, Phone, Type, Rating, AccountNumber FROM Account];
    }
}