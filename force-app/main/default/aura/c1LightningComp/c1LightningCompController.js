({
    myAction : function(component, event, helper) {

    },
    getInputC : function(c, e, h){
        c.set("v.xyzChild", "Changed In Child");
    },

    eventHandler:function(c, e, h){
        var message = e.getParams("message");
        console.log("In C1 >> "+message);
    }
})