trigger TriggerOfPurchase on Purchase__c (after update) {
    
    
    if(Trigger.isUpdate && Trigger.isAfter && !FirstApexTriggerHandler.updateBypass){
        List<Purchase__c> purchases = [SELECT id, Name, Product__r.Value__c, CustomerCus__r.Value__c FROM Purchase__c WHERE id in : Trigger.newMap.KeySet()];
        
        for(Purchase__c p : purchases){
            Integer productValue = (Integer) p.Product__r.Value__c;
            Integer customerValue = (Integer) p.CustomerCus__r.Value__c;
            
            p.TotalMasterValues__c = productValue + customerValue;
        }
        System.debug('--> called <--');
        update purchases;
        
        FirstApexTriggerHandler.updateBypass = true;
    }
}