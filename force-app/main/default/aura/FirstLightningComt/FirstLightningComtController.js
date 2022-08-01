({
    doInit : function(compt){
        console.log("Init Function was Called !");
    },
    
	submit : function(component, event, helper) {
        var tempObject = component.get("v.tempForm");
		var action = component.get("c.saveTempObjectDetails");
        
        action.setParams({tempObject : tempObject});
        
        console.log(""+JSON.stringify(tempObject));
        
        action.setCallback(this, function(a){
            var state = a.getState();
            if(state === 'SUCCESS'){
                component.set("v.ObjectId", a.getReturnValue());
            }
            
            alert(state);
        });
        $A.enqueueAction(action);
	},
    
    onChangeCheckBox : function(component, event, helper){
    	var checkBoxValue = component.find("checkBoxId").get("v.checked");
        component.set("v.tempForm.CheckBox__c", checkBoxValue);
	},
    
    onChangeList : function(component, event, helper){
    	console.log("*** List Change *** !");
	},
    
    addComp2 : function(component, event, helper) {
		var list = component.get("v.list");
        
        var crrentSize = parseInt(list.length)
        
        var newSize = parseInt((list.length) + 1);
        
        list.push(newSize);
        
        component.set("v.list", list);
	}
})