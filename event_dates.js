var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

class Meeting {
    constructor(endDate, contactFormat, time) {
        this.endDate = endDate;
        this.contactFormat = contactFormat;
        this.time = time;
    }
}

class Event {
    constructor(startDate, endDate, description) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}

function dateToString(date) {
    if (date.startDate == null || Math.floor((Date.parse(date.startDate) - date.startDate.getTimezoneOffset() * 60000) / 86400000) == Math.floor((Date.parse(date.endDate) - date.endDate.getTimezoneOffset() * 60000) / 86400000)) {
        return weekday[date.endDate.getDay()] + ", " + month[date.endDate.getMonth()] + " " + date.endDate.getDate();
    }
    else
    {
        return weekday[date.endDate.getDay()] + ", " + month[date.endDate.getMonth()] + " " + date.startDate.getDate() + "-" + date.endDate.getDate();
    }
}

var meetings = [
    new Meeting(new Date(2018, 7, 8, 23, 59, 59), "Email", "N/A"),
    new Meeting(new Date(2018, 7, 28, 7, 25), "Meeting", "7:10"),
    new Meeting(new Date(2018, 8, 28, 23, 59, 59), "Email", "N/A"),
    new Meeting(new Date(2018, 10, 6, 7, 25), "Meeting", "7:10"),
    new Meeting(new Date(2018, 10, 27, 7, 25), "Meeting", "7:10"),
    new Meeting(new Date(2019, 0, 21, 23, 59, 59), "Email", "N/A"),
    new Meeting(new Date(2019, 1, 28, 23, 59, 59), "Email", "N/A"),
    new Meeting(new Date(2019, 2, 1, 7, 25), "Meeting", "7:10"),
    new Meeting(new Date(2019, 3, 9, 7, 25), "Meeting", "7:10"),
    new Meeting(new Date(2019, 4, 7, 7, 25), "Meeting", "7:10")
];

var events = [
    new Event(new Date(2018, 7, 15), new Date(2018, 7, 15, 23, 59, 59), "Meet the Teacher Night"),
    new Event(new Date(2018, 7, 27), new Date(2018, 7, 31, 23, 59, 59), "School Supply Drive"),
    new Event(new Date(2018, 8, 5), new Date(2018, 8, 5, 23, 59, 59), "Back to School Night"),
    new Event(new Date(2018, 9, 3), new Date(2018, 9, 3, 23, 59, 59), "Fall Bake Sale"),
    new Event(new Date(2018, 10, 9), new Date(2018, 10, 9, 23, 59, 59), "Fall Blood Drive"),
    new Event(new Date(2018, 10, 14), new Date(2018, 10, 14, 23, 59, 59), "NHS Induction"),
    new Event(new Date(2018, 11, 1), new Date(2018, 11, 1, 23, 59, 59), "Decorating Nursing Homes"),
    new Event(new Date(2019, 0, 12), new Date(2019, 0, 12, 23, 59, 59), "Taking Down Decorations"),
    new Event(new Date(2019, 1, 1), new Date(2019, 1, 1, 23, 59, 59), "Heifer Fund (Panera)"),
    new Event(new Date(2019, 2, 1), new Date(2019, 2, 1, 23, 59, 59), "Read Across America"),
    new Event(new Date(2019, 2, 21), new Date(2019, 2, 21, 23, 59, 59), "Spring Blood Drive"),
    new Event(new Date(2019, 3, 26), new Date(2019, 3, 26, 23, 59, 59), "Soles for Souls"),
    new Event(new Date(2019, 4, 3), new Date(2019, 4, 3, 23, 59, 59), "Penny Wars"),
    new Event(new Date(2019, 4, 11), new Date(2019, 4, 11, 23, 59, 59), "Prom (Fashion Show) at Nursing Home"),
    new Event(new Date(2019, 4, 21), new Date(2019, 4, 21, 23, 59, 59), "Spring Raffle")
];

function nextActivity(activityList) {
    for (var i = 0; i < activityList.length; i++) {
        if (Date.parse(activityList[i].endDate) > Date.now())
            return i;
    }
    return 0;
}

function updateEvents() {
    $(document).ready(function(){
        // Array of the tr elements of the upcoming events table
        var event_rows = document.getElementsByClassName("upcoming-events-body")[0].getElementsByTagName("tr");

        // The next closest activity's index
        var next_event_index = nextActivity(events);

        // Changes the dates of upcoming events
        for (var i = 0; i < event_rows.length; i++) {
            var current_row = event_rows[i];
            if (next_event_index + i < events.length) {
                current_row.getElementsByTagName("td")[0].innerHTML = dateToString(events[next_event_index + i]);
                current_row.getElementsByTagName("td")[1].innerHTML = events[next_event_index + i].description;
            } else {
                current_row.getElementsByTagName("td")[0].innerHTML = "";
                current_row.getElementsByTagName("td")[1].innerHTML = "";
            }
        }
    });
}

function updateMeetings() {
    $(document).ready(function(){
        // Array of the tr elements of the activity tables
        var meeting_rows = document.getElementsByClassName("upcoming-meetings-body")[0].getElementsByTagName("tr");

        // The next closest activity's index
        var next_meeting_index = nextActivity(meetings);
        
        // Changes the dates of upcoming meetings
        for (var i = 0; i < meeting_rows.length; i++) {
            var current_row = meeting_rows[i];
            if (next_meeting_index + i < meetings.length) {
                current_row.getElementsByTagName("td")[0].innerHTML = dateToString(meetings[next_meeting_index + i]);
                current_row.getElementsByTagName("td")[1].innerHTML = meetings[next_meeting_index + i].contactFormat;
                current_row.getElementsByTagName("td")[2].innerHTML = meetings[next_meeting_index + i].time;
            } else {
                current_row.getElementsByTagName("td")[0].innerHTML = "";
                current_row.getElementsByTagName("td")[1].innerHTML = "";
                current_row.getElementsByTagName("td")[2].innerHTML = "";
            }
        }
    });
}
