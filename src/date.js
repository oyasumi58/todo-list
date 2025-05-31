import { eachDayOfInterval, nextSunday, format, parseISO, endOfToday, isMonday, previousMonday, isSunday } from 'date-fns';

const formatManager = (function() {
    const formatDateAndTime = function(inputDateAndTime) {
        const date = parseISO(inputDateAndTime);
        
        const formattedDate = format(date,"MMM do h:mmaaa")
        return formattedDate;
    }

    const formatDate =function(inputDate) {
        if (!inputDate) {
            console.log(`no input date for ${inputDate}`);
            return;
        }
        const date = parseISO(inputDate);
        
        const formattedDate = format(date,"MMM do")
        return formattedDate;
    }

    const formatDateY =function(inputDate) {
        if (!inputDate) {
            console.log(`no input date for ${inputDate}`);
            return;
        }
        
        
        const date = parseISO(inputDate);
       

        const formattedDate = format(date,"yyyy MMM do")
        return formattedDate;
    }

    const formatDateYWOISO = function(inputDate) {
        if (!inputDate) {
            console.log(`no input date for ${inputDate}`);
            return;
        }
        const date = inputDate;
        const formattedDate = format(date,"y MMM do");
        console.log(formattedDate);
        return formattedDate;
    }

    const formatToday = function() {
        
        const rawToday = endOfToday();

        const today = format(rawToday, "y MMM do")
  
        return today;
    }

    const getWeek = function() {
        const today = endOfToday();
        let monday, sunday;
        if (!isMonday(today)) {
            monday = previousMonday(today);
             if (!isSunday(today)) {
                sunday = nextSunday(today);
            } else {
                sunday = today;
            }
        } else {
            monday = today;
            sunday = nextSunday(today);  
        }
        console.log(monday);
        console.log(sunday);
        
        const week = eachDayOfInterval({
            start: monday,
            end: sunday
        })
        return week;
    }

    return {formatDateYWOISO,  getWeek, formatDateAndTime, formatDate, formatDateY, formatToday};
})();

formatManager.formatDate("2025-05-16 12:37");

function c(msg) {
    console.log(msg);
}

export { formatManager, c };