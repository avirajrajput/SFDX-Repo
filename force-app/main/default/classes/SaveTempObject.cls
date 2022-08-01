public class SaveTempObject {
    @AuraEnabled
    public static Id saveTempObjectDetails(TempObject__c tempObject){
        insert tempObject;
        return tempObject.Id;
    }
    
    @AuraEnabled
    public static Id saveChildObjDetails(ChildObject__c obj){
        insert obj;
        return obj.Id;
    }
    //1. Class name in Controller in Aura Conponent
    //2. var action = component.get("c.< Method Name >");
    //3. action.setParams({obj : chaildObj});
    //4. action.setCallback(this, function(a){
    //        a.getState();
    //        a.getReturnValue();
    //   });
    //   $A.enqueueAction(action);
}