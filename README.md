# Lending Club Stats

This is a script that will pull the available performance and account stats from the Lending Club API and publish it to a Google Sheets spreadsheet.

Here is an example of what the outlook will look like -> [link](https://docs.google.com/spreadsheets/d/1ytJa51XOt6tpjH3JpWBqiBzYtTfHcmIPjkrFCcyj6GE/edit?usp=sharing)

You can configure it to automatically execute at an interval to keep a running log of your LC account performance.

# Notes:

You will need a Google Account (free). That will give you access to Google Apps Script and Google Sheets. If you have a gmail account, you already have all that you need.

You will need to supply your Lending Club API key to the script. This is how the script will have the permissions to pull down your data.

# Instructions:
### The required information that you will need ##
You will need 4 pieces of information to put into the script. Directions to find this information are below this list

1. Google Sheet ID...... This will go into the 'PUT-SHEET-ID-HERE' field of the script
2. Google Sheet Name...... This will go into the 'PUT-SHEET-NAME-HERE' field of the script
3. Your LC Account ID...... This will go into the 'PUT-LC-ACCOUNT-ID-HERE' field of the script
4. Your LC API Key...... This will go into the 'PUT-LC-API-KEY_HERE' field of the script

### Gathering the required information

Log into your Google Sheets account ([https://docs.google.com/spreadsheets/](https://docs.google.com/spreadsheets/)) and click the '+' button at the bottom right to create a new Sheet. Give the sheet a proper name by typing over the given "Untitled Sheet" name.

**Finding the Sheet ID**
You will need to copy the Sheet ID to put in your scipt. You can find the ID by looking in the URL.

![alt text](https://github.com/ryankorock/Lending-Club-Stats/blob/master/images/URL1.png)

**Finding the Sheet Name**

You will also need to copy Sheet Name to put into your script. You can find the Name by looking at bottom of your Sheet. By default, it is 'Sheet1'

![alt text](https://github.com/ryankorock/Lending-Club-STATS/blob/master/images/SHEETNAME1.PNG)

**Finding your LC Account ID**

You will need your Lending Club Account ID. You can find that by logging into your Lending Club account and navigating to your Settings page.

Your Account ID is the number that follows "Settings for XXXXXXXXXX"

**Finding your LC API Key**

You will need your Lending Club API key. You can find that by logging into your Lending Club account and navigating to your Settings page.

Now that you have the spreadsheet created and the information collected, it is time to create and tailor the script.

## Script Creation

In order to create the script, open the Google Apps Script editor at [https://script.google.com/](https://script.google.com/), and select to add a new project (button at the top left).

Rename the project from 'Untitled Project' to something more suitable, such as 'LCStats1'

Copy the script from the link below in, editing the following 4 specified fields to match your LC & Sheet details gathered in the first step.

https://github.com/ryankorock/Lending-Club-Stats/blob/master/LCDAILYSTATLOG.js

**Practice Run**

You will want to do a manual run of the script at this point to determine if it is working.

Click on the run button (image below). 

![alt text](https://github.com/ryankorock/Lending-Club-Stats/blob/master/images/RUN1.png)

If you get an "**Authorization Required**" message, select "**Review Permissions**" and select to give the script permission to run. 

After the script runs, check your Sheet. You should see the first row of values.


## Automating the updating of the stats

Since we want the script to automatically update our spreadsheet on a regular interval, we have to set a time based trigger to instruct the script to be run.

From the script page, pull down the **"Edit"** menu option and select **"Current project's triggers"**. You'll be brought to a page with no triggers set. Select the "**Add Trigger**" button on the bottom right.

Configure the script the to run at the interval of your choice. With the configuration below, the script will run just after midnight every day and update the spreadsheet.

![alt text](https://github.com/ryankorock/Lending-Club-Stats/blob/master/images/TRIGGER1.png)

Click 'Save' to save the trigger. The script should now run at the desired interval and add the new data as a new row in your Sheet.
