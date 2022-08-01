global class BatchClass implements Database.Batchable<SObject>, Database.StateFul{
	
    global String query = 'SELECT Id, Name FROM Account';

    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext BC, List<Account> scope){
        
        //this.sendMail();
        //update scope;
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
    
    global void sendMail(){
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        
        List<String> sendTo = new List<String>();
        
        sendTo.add('manacherindia@gmail.com');
        
        //Set Address
        mail.setToAddresses(sendTo);
        mail.setReplyTo('manacherindia@gmail.com');
        
        mail.setSenderDisplayName('Official Bank of Nigeria');
        
        List<String> ccTo = new List<String>();
        ccTo.add('avirajrajput5@gmail.com');
        
        //Set CC Address
        mail.setCcAddresses(ccTo);
        
        //Set Subject
        mail.setSubject('Test Subject');
        
        String body = 'Test body of this test Mail';
        
        mail.setHtmlBody(body);
        
        List<Messaging.SingleEmailMessage> mails 
            = new List<Messaging.SingleEmailMessage>();
        mails.add(mail);
        
        System.debug('>>>'+mails.size());
        
        //Send Mail
        Messaging.sendEmail(mails);
        
    }
}