trigger ContactTrigger on Contact (After insert) {
	
    
    List<Contact> newContacts = Trigger.new;
    List<Contact> oldContacts = Trigger.old;
    
    List<String> accountsIds = new List<String>();
   
    if(newContacts != null){
        
        for(Contact contact : newContacts){
            accountsIds.add(contact.AccountId);
        }
        
    }else if(oldContacts != null){
        for(Contact contact : oldContacts){
            accountsIds.add(contact.AccountId);
        }
    }
    
   	List<Account> accountsList = [SELECT id, Name, (SELECT id, Name, isPrimary__c FROM Contacts ORDER BY CreatedDate DESC) FROM Account WHERE Id in: accountsIds];
	List<Contact> results = new List<Contact>();
    for(Account account : accountsList){        
        List<Contact> contacts = account.Contacts;      
        if(contacts != null){
            
            contacts.get(0).isPrimary__c = true;
            results.add(contacts.get(0));        
            for(Integer i = 1; i < contacts.size(); i++){
            	contacts.get(i).isPrimary__c = false;
                results.add(contacts.get(i));
        	}          
        } 
    }
    UPDATE results;
}