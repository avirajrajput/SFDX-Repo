@RestResource(urlMapping='/showAccounts/*')
global class RestApiTest {
	
    @HttpGet
    global static List<Account> getAccounts(){
		return [SELECT id, Name, phone FROM Account];
    }
    
    @HttpPost
    global static String createAccount(String name, String phone, String accountNumber){
		Account a = new Account();
        
        a.Name = name;
        a.Phone = phone;
        a.AccountNumber = accountNumber;
        
        INSERT a;
        return a.Id;
    }
    
    @HttpPatch
    global static String updateAccount(String accId, String name){
        Account acc = [SELECT id, Name FROM Account WHERE id =: accId];

		acc.Name = name;
        
        update acc;
        return acc.Id;
    }
    
    @HttpDelete
    global static void deleteAccount(){
        RestRequest res = RestContext.request;
        String resURI = res.requestURI;
        String accid = resURI.substring(resURI.lastIndexOf('/')+1);
        
        Account acc = [SELECT id, name FROM Account WHERE id =: accid];
        DELETE acc;
    }
}