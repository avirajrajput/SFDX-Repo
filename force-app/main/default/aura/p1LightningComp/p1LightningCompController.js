({
	myAction : function(component, event, helper) {
		
	},
	getInput : function(component, evt, hlp){

		var myName = component.find("name").get("v.value");
        var myText = component.find("outName");
        var greet = "Hi, " + myName;
        //myText.set("v.value", greet);

		var xyzValue = component.get("v.xyzP1");
		console.log("xyzValue >>> "+xyzValue);
		component.set("v.xyzP1", xyzValue+"Changed Parent");
	},

	eventHandler:function(c, e, h){
        var message = e.getParams("message");
        console.log("In P1 >> "+message);
    }

})