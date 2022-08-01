import { LightningElement, track, wire } from 'lwc';
import SMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { MessageContext, publish } from 'lightning/messageService';



export default class ParentTestComp extends LightningElement {

    myName;
    inputValue;
    myMessage = "Message for child";
    childRef;
    @wire(MessageContext)
    context

    constructor(){
        super();
        this.myName = "Aviraj";
        this.inputValue = "Default";//{value : "Default"};

        console.log("#YO>>> 2");

       
    }
    renderedCallback(){
        this.childRef = this.template.querySelector('c-child-test-component');
    }
    inputChange(event){
        //console.log("Old value >> this.inputValue "+this.inputValue);
       this.inputValue = event.target.value;
       this.childRef.printHello( this.inputValue);
       let data = {lmsData : this.inputValue};
       publish(this.context, SMC, data);
    }

    handleClick(){
        this.inputValue = "New Default";
    }
    get inputValueF(){
        return this.inputValue;
    }
    fireHandler(evnt){
        //console.log('Fire Handled '+evnt.detail);
    }
}