import { LightningElement,api } from 'lwc';

export default class ChildTestComponent extends LightningElement {

    @api childData;

    constructor(){
        super();
        this.childData = "Child Initial";
    }

    @api printHello(val){
       // console.log(val);
    }
    handleClick(){
      let cusEvt = new CustomEvent('fire', {detail:"My data", bubbles:false});
      this.dispatchEvent(cusEvt);
    }
}