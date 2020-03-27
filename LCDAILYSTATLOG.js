function LCDAILYSTATLOG() {
  var ss = SpreadsheetApp.openById('PUT-SHEET-ID-HERE'); //Paste your Google Sheet ID here
  var sheet = ss.getSheetByName('PUT-SHEET-NAME-HERE'); //Paste your Google Sheet Name here
 
  
  var url = "https://api.lendingclub.com/api/investor/v1/accounts/PUT-LC-ACCOUNT-ID-HERE/summary"; //Paste your LC Account Number here
  var options = {
    "async": true,
    "crossDomain": true,
    'method' : 'get',
    'accept': 'text/plain',
    'cache-control': 'no-cache',
    "headers" : {
      'authorization': 'PUT-LC-API-KEY_HERE' // Paste your LC API key here
    }
  };
var response = UrlFetchApp.fetch(url, options);
var text = response.getResponseCode();
Logger.log(response.getContentText());

var json = response.getContentText(); 
  var data = JSON.parse(json); 
  
  Logger.log(data);
  
  var stats=[];
  
  var date = new Date(); //new date for timestamp
  
  //The following lines push the parsed json into empty stats array
  stats.push(date);//timestamp
  stats.push(data.availableCash);
  stats.push(data.accountTotal); 
  stats.push(data.accruedInterest);
  stats.push(data.infundingBalance);
  stats.push(data.receivedInterest);
  stats.push(data.receivedPrincipal);
  stats.push(data.receivedLateFees);
  stats.push(data.outstandingPrincipal);
  stats.push(data.totalNotes);
  stats.push(data.totalPortfolios);
  stats.push(data.netAnnualizedReturn.primaryNAR);
  stats.push(data.netAnnualizedReturn.primaryAdjustedNAR);
  stats.push(data.netAnnualizedReturn.primaryUserAdjustedNAR);
  stats.push(data.netAnnualizedReturn.tradedNAR);   
  stats.push(data.netAnnualizedReturn.tradedAdjustedNAR);
  stats.push(data.netAnnualizedReturn.tradedUserAdjustedNAR);
  stats.push(data.netAnnualizedReturn.combinedNAR);
  stats.push(data.netAnnualizedReturn.combinedAdjustedNAR);
  stats.push(data.netAnnualizedReturn.combinedUserAdjustedNAR);
  stats.push(data.adjustments.adjustmentForPastDueNotes);
  stats.push(data.adjustments.userAdjustmentForPastDueNotes);
      
    //Instruction to append the stats array to the active sheet 
  sheet.appendRow(stats)
  
}
