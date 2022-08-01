trigger FirtApexTrigger on Project__c (before insert, before update, after update) {
    
    if(Trigger.isBefore && Trigger.isUpdate){
        System.debug('before insert >> ');
    }else{
       System.debug('Not before insert>>s'); 
    }
}