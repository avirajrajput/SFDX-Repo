import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/TestServerController.getAccounts';


const columns = [
    {label: 'id', fieldName: 'id'},
    {label: 'OwnerId', fieldName: 'OwnerId'},
    {label: 'Name', fieldName: 'Name'}
];
export default class NewLightingComponent extends LightningElement {

    columns;
    data;

    constructor(){
        super();   
        getAccounts().then( result => {
            console.log("#>>> "+result);
            this.data = result;
            this.columns = columns;
        })
    }
}