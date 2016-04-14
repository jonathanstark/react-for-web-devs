let helpers = {
    prettyDate: function(utcDateString) {
        var weekdays    = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months      = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            date        = new Date(utcDateString),
            prettyDate  = weekdays[date.getUTCDay()] + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCDate()
        ;



        return prettyDate;
    },
    storeDate: function(dateObject) {
        var dd          = ('0' + dateObject.getUTCDate()).slice(-2),
            mm          = ('0' + (dateObject.getUTCMonth() + 1)).slice(-2),
            yyyy        = dateObject.getUTCFullYear(),
            dateString  = yyyy + '-'+ mm + '-'+ dd
        ;

        return dateString;
    },

    caloriesRemaining : function(entries, selectedDate) {
        var entryKeys   = Object.key(entries),
            calories    = 0,
            maxCalories = 2000,
            key
        ;

        for(var i = 0; i < entryKeys.length; i++) {
            key = entryKeys[i];
            if (entries[key].date == selectedDate) {
                calories += entries[key].calories;
            }
        }

        return maxCalories - calories;
    },

    getClubColors : function(name) {
        var objColors = {};
        switch (name) {
            case 'Werder Bremen' :
                objColors.main      = '#009252';
                objColors.secondary = '#006737';
                break;
            case 'Bayern Munich' :
                objColors.main      = '#c03';
                objColors.secondary = '#ff0040';
        }

        return objColors;
    },

    nameToImageShield : function(name) {
        var imagePath;
        switch (name) {
            case 'Werder Bremen' :
                imagePath = 'werder.svg';
                break;
            case 'Bayern Munich' :
                imagePath = 'bayern.svg';
                break;
            case 'Hertha BSC' :
                imagePath = 'hertha.svg';
                break;
            case 'VfL Wolfsburg' :
                imagePath = 'wolfsburg.svg';
                break;
            case 'Hamburger SV' :
                imagePath = 'hamburg.svg';
                break;
            case '1.FC Kaiserlautern' :
                imagePath = 'kaiserlautern.svg';
                break;
            case 'SSV Ulm 1846' :
                imagePath = 'svv_ulm.svg';
                break;
            case 'SC Freiburg' :
                imagePath = 'freiburg.svg';
                break;
            case '1860 Munich' :
                imagePath = '1860_muenchen.svg';
                break;
            case 'Bor. Dortmund' :
                imagePath = 'borusia_dortmund.svg';
                break;
            case 'Hansa Rostock' :
                imagePath = 'hansa_rostock.svg';
                break;
            case 'E. Frankfurt' :
                imagePath = 'eintracht_frankfurt.svg';
                break;
            case 'Arm. Bielefeld' :
                imagePath = 'arminia_bielefeld.svg';
                break;
            case 'Bay. Leverkusen' :
                imagePath = 'bayer_leverkusen.svg';
                break;
            case 'FC Schalke 04' :
                imagePath = 'schalke04.svg';
                break;
            case 'VfB Stuttgart' :
                imagePath = 'stuttgart.svg';
                break;
            case 'Unterhaching' :
                imagePath = 'unterhaching.svg';
                break;
            case 'MSV Duisburg' :
                imagePath = 'duisburg.svg';
                break;
            case 'Bor. Monchengladbach' :
                imagePath = 'borusia_monchengladbach.svg';
                break;
        }
        return imagePath;
    }
};

export default helpers;