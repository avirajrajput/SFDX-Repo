({
	doInit : function(component, event, helper) {
		var action = component.get("c.getAccounts");
        
        action.setCallback(this, function(a){
            var state = a.getState();
            
            if(state === "SUCCESS"){
                var accounts = a.getReturnValue();
                component.set("v.Accounts", accounts);
            }
        })
        $A.enqueueAction(action)
	}
})