({
	deleteFun : function(component, event, helper) {
		var list = component.get("v.listChild");
       	var index = component.get("v.indexNo");
        
       	list.splice(index, 1);
        
		component.set("v.listChild", list);        
	},
    
    saveChildDetails : function(component, event, helper){
        
        component.set("v.ChildObject.TempObject__c", component.get("v.ObjectId"));
        
        var chaildObj = component.get("v.ChildObject");
        
		var action = component.get("c.saveChildObjDetails");
        
        
        action.setParams({obj : chaildObj});
        
        
        action.setCallback(this, function(a){
            var state = a.getState();
            if(state === 'SUCCESS'){
                component.set("v.ObjectId", a.getReturnValue());
            }
            
            alert(state);
        });
        $A.enqueueAction(action);
        
    }
})