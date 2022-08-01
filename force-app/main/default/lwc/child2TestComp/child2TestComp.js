import { LightningElement, wire } from 'lwc';
import SMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';

export default class Child2TestComp extends LightningElement {

    message;

    @wire(MessageContext)
    context

    renderedCallback(){
        subscribe(this.context, SMC, (msg) => {
            this.message = msg.lmsData;
        }, {scope: APPLICATION_SCOPE});
    }

}