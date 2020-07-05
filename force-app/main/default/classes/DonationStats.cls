public with sharing class DonationStats {
    @AuraEnabled(cacheable=true)
    public static Opportunity largestDonationDate(Id accountId) {
        return [SELECT CloseDate from Opportunity 
                WHERE AccountId = :accountId AND StageName = 'Received' 
                ORDER BY Amount DESC, CloseDate DESC LIMIT 1];

    }

    @AuraEnabled(cacheable=true)
    public static Opportunity lastDonationAmount(Id accountId) {
        return [SELECT Amount from Opportunity 
            WHERE AccountId = :accountId AND StageName = 'Received'
            ORDER BY CloseDate DESC, Amount DESC LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static Opportunity firstDonationAmount(Id accountId) {
        return [SELECT Amount from Opportunity 
                WHERE AccountId = :accountId AND StageName = 'Received'
                ORDER BY CloseDate ASC, Amount DESC LIMIT 1];
    }

    public DonationStats() {

    }
}
