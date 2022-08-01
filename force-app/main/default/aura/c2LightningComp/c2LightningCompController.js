({

    doInit : function(component){

        var action = component.get("c.getAccounts");
        
        action.setCallback(this, function(a){
            var state = a.getState();

            if(state === 'SUCCESS'){
                var accounts = a.getReturnValue();
                var names = [];
                accounts.forEach(item => {
                    names.push(item.Name);
                    console.log(names);
                })

                component.set("v.accounts", names);
            }
        });
        $A.enqueueAction(action);

    },

    fireEvent : function(component, event, helper) {
        var ent = component.getEvent("C2ComponentEvent");

        var msg = "Event fire from C2";

        ent.setParams({"message":msg})

        ent.fire();
    }
})