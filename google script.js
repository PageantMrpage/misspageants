// Google Apps Script for Form Submission to Google Sheets

// Copy this entire code into your Google Apps Script project

// Replace with your Google Sheet ID (found in the URL)
const SHEET_ID = '1tJ91GZg3WiPJ6H4UG0QY0mjptA9MWVP4KIPTyAVb08M';

const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

function doPost(e) {
  try {
    let data;
    
    // Form submissions come through e.parameter
    // JSON requests come through e.postData.contents
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      // Form data submission
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // JSON submission
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        throw new Error('Failed to parse JSON: ' + parseError.toString());
      }
    } else {
      throw new Error('No data received. e.parameter: ' + JSON.stringify(e.parameter) + ', e.postData: ' + JSON.stringify(e.postData));
    }
    
    // Open the spreadsheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    
    // Get the last row to check if headers exist
    const lastRow = sheet.getLastRow();
    
    // If this is the first row (empty sheet), add headers
    if (lastRow === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Instagram', 'City', 'Message']);
    }
    
    // Extract data with fallbacks
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.instagram || '',
      data.city || '',
      data.message || ''
    ];
    
    // Append the form data as a new row
    sheet.appendRow(rowData);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully',
      data: rowData
    }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error to help with debugging
    Logger.log('Error in doPost: ' + error.toString());
    Logger.log('e.parameter: ' + JSON.stringify(e.parameter));
    Logger.log('e.postData: ' + JSON.stringify(e.postData));
    
    // Return error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  // Handle CORS preflight requests
  // This is required when making POST requests with JSON from browsers
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet(e) {
  // Handle GET requests (optional - for testing)
  // Add CORS headers for GET requests as well
  return ContentService.createTextOutput('This web app only accepts POST requests.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// IMPORTANT: CORS Configuration
// Google Apps Script automatically handles CORS for web apps when deployed with the following settings:
// 1. Deploy > New deployment > Type: Web app
// 2. Execute as: Me (your account)
// 3. Who has access: Anyone (this enables CORS automatically)
// 
// The ContentService automatically sets appropriate CORS headers when deployed correctly.
// No additional CORS code is needed - just ensure the deployment settings are correct.
//
// After deployment, copy the Web App URL and paste it into Contact.tsx as GOOGLE_SCRIPT_URL

