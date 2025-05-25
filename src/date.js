import { format, parseISO, endOfToday } from 'date-fns';

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

    const formatToday = function() {
        
        const rawToday = endOfToday();

        const today = format(rawToday, "y MMM do")
  
        return today;
    }

    return {formatDateAndTime, formatDate, formatDateY, formatToday};
})();

formatManager.formatDate("2025-05-16 12:37");

function c(msg) {
    console.log(msg);
}

export { formatManager, c };