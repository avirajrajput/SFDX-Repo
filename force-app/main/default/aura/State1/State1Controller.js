({
	handleMessage : function(component, event, helper) {
		var message = event.getParam("message");
        console.log("State: "+message);
	}
})