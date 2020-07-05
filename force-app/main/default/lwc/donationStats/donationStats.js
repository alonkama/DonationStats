import { LightningElement, api, wire } from 'lwc';
import largestDonationDate from '@salesforce/apex/DonationStats.largestDonationDate';
import lastDonationAmount from '@salesforce/apex/DonationStats.lastDonationAmount';
import firstDonationAmount from '@salesforce/apex/DonationStats.firstDonationAmount';

export default class DonationStats extends LightningElement {
    largestDonationDate;
    lastDonationAmount;
    firstDonationAmount;
    error;
    
    @api recordId;

    @wire(largestDonationDate, { accountId: '$recordId'}) 
    wiredLargest({error, data}) {
        if (data) {
            this.largestDonationDate = data.CloseDate;
        }
        else {
            this.largestDonationDate = undefined;
            this.error = error;
        }
    };

    @wire(lastDonationAmount, { accountId: '$recordId'})
    wiredLast({error, data}) {
        if (data) {
            this.lastDonationAmount = data.Amount;
        }
        else {
            this.lastDonationAmount = undefined;
            this.error = error;
        }
    };

    @wire(firstDonationAmount, { accountId: '$recordId'})
    wiredfirst({error, data}) {
        if (data) {
            this.firstDonationAmount = data.Amount;
        }
        else {
            this.firstDonationAmount = undefined;
            this.error = error;
        }
    };


}