({
	handleMessage : function(component, event, helper) {
        var message = event.getParams("message");
        
        var eventInfo = event.getSource();
        var sourceName = eventInfo.getName();
        
        if(sourceName === "cTWShop1"){
            event.pause();
            event.resume();
        }
	}
})