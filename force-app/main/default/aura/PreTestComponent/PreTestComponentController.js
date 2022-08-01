({
	submit : function(component, event, helper) {
        console.log("--Called--");
        
		var acc = component.get("v.AccountObject");
        var action = component.get("c.saveAccount");
        action.setParams({acc : acc});
        console.log("--2");
        action.setCallback(this, 
		function(a){
           	var state = a.getState();
            console.log("--State: "+state);
           	alert(state);
        })
        $A.enqueueAction(action);
	}
})