trigger AccountTrigger on Account (before update) {
    System.debug('Account Trigger Called');
    if(!FirstApexTriggerHandler.updateBypass){
        //System.debug('inside: '+FirstApexTriggerHandler.updateBypass);
        //FirstApexTriggerHandler.updateBypass = true;
        //FirstApexTriggerHandler.updateAccounts(Trigger.newMap.KeySet());
        
        QueueJob q = new QueueJob(Trigger.newMap.keySet());
        System.enqueueJob(q);
        
    }
}