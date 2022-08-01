({
	sendMessageLow : function(component, event, helper) {
        
        var message = "Message from Low TW1";
        
		var messageEvent = component.getEvent("LowMessageTW1");
        
        //Set Message attribute of Event.
        messageEvent.setParams({"message" : message});  
        messageEvent.fire();
	},
    
    sendMessageMedium : function(component, event, helper) {
        
        var message = "Message from Medium TW1";
        
		var messageEvent = component.getEvent("MediumMessageTW1");
        
        messageEvent.setParams({"message" : message});
        
        messageEvent.fire();
	},
    
    sendMessageHigh : function(component, event, helper) {
        
        var message = "Message from High TW1";
        
		var messageEvent = component.getEvent("HighMessageTW1");
        
        messageEvent.setParams({"message" : message})  
        
        messageEvent.fire();
	}
})