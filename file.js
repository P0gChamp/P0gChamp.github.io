var staticTickets = "Total Tickets Worked: ";
var ticketCount = 0;

function updateTicketCount() {
    var ticketCountElement = document.getElementById("ticketCount");
    ticketCountElement.textContent = staticTickets + ticketCount;
    setInterval(updateTicketCount, 5000);
}

// Fuction to keep track of how much time has passed
    function getTimeSinceLoad() {
      var currentTime = new Date();
      var timePassed = currentTime - window.performance.timing.navigationStart;
      var secondsPassed = Math.floor(timePassed / 1000);
      var minutesPassed = Math.floor(secondsPassed / 60);
      var hoursPassed = Math.floor(minutesPassed / 60);
      var daysPassed = Math.floor(hoursPassed / 24);
      var time = "Work Time: ";

      var timeString = "";
      if (daysPassed > 0) {
        timeString += daysPassed + "d ";
      }
      if (hoursPassed > 0) {
        timeString += (hoursPassed % 24) + "h ";
      }
      if (minutesPassed > 0) {
        timeString += (minutesPassed % 60) + "m ";
      }
      timeString += (secondsPassed % 60) + "s"; 

    var timeHeader = document.getElementById("timeHeader");
    timeHeader.textContent = time + timeString;
    setInterval(getTimeSinceLoad, 1000);
    }

    //load up main page
   function mainpageFunction() {
        location.replace("main.html")
      }


// Test Functions to save state with cookie

function saveState() {
  // Convert function state to a string representation (e.g., JSON.stringify)
  var state = JSON.stringify({ foo: 'bar', count: 42 });
  document.cookie = "functionState=" + encodeURIComponent(state) + "; expires=Thu, 31 Dec 2025 23:59:59 GMT";
}


// Function to resore state on page load.  Not working as of yet
function restoreState() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("functionState=") === 0) {
      var state = decodeURIComponent(cookie.substring("functionState=".length));
      // Parse the state string and restore the function state (e.g., JSON.parse)
      var restoredState = JSON.parse(stateString);

                // Use the restored state to set initial values or update the current function state
                ticketCount = state.ticketCount;
                timeHeader = state.timeHeader;
                
      // Use the restored state to set initial values or update the current function state
      console.log(restoredState);
      break;
    }
  }
}

// Start to place Paragraphs here for issue resolving
// TODO Possibly create separate file just for Issues or paragraphs


 function getTestIssue() {
   document.getElementById("test").textContent = "Issue: " + randomID + "\nLocation: " + randomLoc;
 }



 //function getRandomIssue(issueList) {
 // const randomIndex = Math.floor(Math.random() * issueList.data.length);
 // return issueList.data[randomIndex];
//}

class IssueList {
  constructor() {
    this.data = [];
  }

  addIssue(variable) {
    this.data.push(variable);
  }
}

// issue.addIssue(" ");
const issue = new IssueList();
issue.addIssue("Printer is low on ink");
issue.addIssue("Associate needs a radio for the day.  They left theirs at home and needs to borrow another one.  They have 3 checked out so far.");
issue.addIssue("Printer is printing lines in the labels");
issue.addIssue("Manager isn't able to send/receive email. Please assist, manager does not want to lose anything.");
issue.addIssue("cannot save excel, disk is full");
issue.addIssue("scanner not working properly on rebin 11 in AFE");
issue.addIssue("Memory issue -> cannot access application functionality");
issue.addIssue("Hello IT Support, please help me acquire a new security key.");
issue.addIssue("in need of RAM upgrade, currently only have 8GB on ");
issue.addIssue("laptop stuck");
issue.addIssue("AA is a PG and needs yubikey to access certain sites");
issue.addIssue("The IB Dock needs two more PS Cart charging stations we currently do not have enough for the number of PS carts we have on the dock.");
issue.addIssue("Please help me obtain a USB security key.");
issue.addIssue("Please help me with power issue on my computer.");
issue.addIssue("shipping label keeps cutting off like yesterdays 5-3. i adjusted the pressure like you told me and its still doing it. please come have a look thank you");
issue.addIssue("user can't sign into midway");
issue.addIssue("Please help me install Visulaization on laptop.");
issue.addIssue("Heat - AEN MDF Self-Contained cabinets");
issue.addIssue("Alexanca is locked out of her account and she cannot work due to this problem");
issue.addIssue("My work laptop is not allowing me to broadcast sound. It only displays the muted icon in the corner of the screen and whenever I try to unmute it pops up an admin password request");
issue.addIssue('*Zubikey not working. Showing "Authentication failed" After every login attempt. NO LOCAL IT on site to support.');
issue.addIssue("Time clock Issue Description: Wi-Fi not connected in Ipad and time clock is offline. ");
/* 
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");
issue.addIssue("");  
*/

console.log(issue.data); // Output: ["Variable 1", "Variable 2"]

const randomID = getRandomIssue(issue);
console.log(randomID);

function getRandomIssue(issueList) {
  const randomIndex = Math.floor(Math.random() * issueList.data.length);
  return issueList.data[randomIndex];
}


// Note to self, put locations down here



//--------------------------------------------------

class LocationList {
  constructor() {
    this.data = [];
  }

  addLocation(variable) {
    this.data.push(variable);
  }
}

const locations = new LocationList();
locations.addLocation("AFE Station 1-01");
locations.addLocation("AFE Station 1-02");
locations.addLocation("AFE Station 1-03");
locations.addLocation("AFE Station 1-04");
locations.addLocation("AFE Station 2-01");
locations.addLocation("AFE Station 2-02");
locations.addLocation("AFE Station 2-03");
locations.addLocation("AFE Station 2-04");
locations.addLocation("AFE Station 3-01");
locations.addLocation("AFE Station 3-02");
locations.addLocation("AFE Station 3-03");
locations.addLocation("AFE Station 3-04");
locations.addLocation("AFE Station 4-01");
locations.addLocation("AFE Station 4-02");
locations.addLocation("AFE Station 4-03");
locations.addLocation("AFE Station 4-04");
locations.addLocation("AFE Station 5-01");
locations.addLocation("AFE Station 5-02");
locations.addLocation("AFE Station 5-03");
locations.addLocation("AFE Station 5-04");
locations.addLocation("AFE Station 6-01");
locations.addLocation("AFE Station 6-02");
locations.addLocation("AFE Station 6-03");
locations.addLocation("AFE Station 6-04");
locations.addLocation("I don't know where I am");
locations.addLocation("In the building");
locations.addLocation("North side of RAT 122");
locations.addLocation("Problem Solve 2");
locations.addLocation("Wall 8 station 2 monitor");
locations.addLocation("forgot ubeykey");
locations.addLocation("CRETS station 5");
locations.addLocation("Problem Solve 3");
locations.addLocation("Slam station 13");
locations.addLocation("Green Mile");
locations.addLocation("Main Office");
locations.addLocation("Main bathroom");
locations.addLocation("photo studio");
locations.addLocation("mezz breakroom");
locations.addLocation("Everywhere");
locations.addLocation("My House");
locations.addLocation("Breakroom");
locations.addLocation("back cage");
locations.addLocation("Lane 37D");
locations.addLocation("dock door 135");
locations.addLocation("N/A");
locations.addLocation("shipdoc");
locations.addLocation("Ship sorter lane 15");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
/*
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
locations.addLocation("");
*/

console.log(locations.data); // Output: ["Variable 1", "Variable 2"]

const randomLoc = getRandomLocation(locations);
console.log(randomLoc);

function getRandomLocation(locationList) {
  const randomIndex2 = Math.floor(Math.random() * locationList.data.length);
  return locationList.data[randomIndex2];
}
