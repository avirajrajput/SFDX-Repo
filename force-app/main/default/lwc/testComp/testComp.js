import { LightningElement, track } from 'lwc';

export default class TestComp extends LightningElement {

        result = "no result !";
        firstName = "" ;
        lastName = "";
        phoneNumber = "";

        onSubmit(){
                this.result = this.firstName +" - "
                                +this.lastName +" - "
                                +this.phoneNumber;
                console.log(this.result);
        }

        onChangeFirstName(event){
                this.firstName = event.target.value;
        }

        onChangeLastName(event){
                this.lastName = event.target.value;
        }

        onChangePhoneNumber(event){
                this.phoneNumber = event.target.value;
        }
}