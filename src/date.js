import { format, parseISO } from 'date-fns';

const formatManager = (function() {
    const formatDateAndTime = function(inputDateAndTime) {
        const date = parseISO(inputDateAndTime);
        
        const formattedDate = format(date,"MMM do h:mmaaa")
        return formattedDate;
    }

    const formatDate =function(inputDate) {
        const date = parseISO(inputDate);
        
        const formattedDate = format(date,"MMM do")
        return formattedDate;
    }

    return {formatDateAndTime, formatDate};
})();

formatManager.formatDate("2025-05-16 12:37");

export { formatManager };