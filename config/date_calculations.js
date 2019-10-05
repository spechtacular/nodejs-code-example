
const moment = require("moment");


const date_calculations = {

    date_is_valid(date) {
        return moment(date, "YYYY-M-D", true).isValid()
    },
    // date
    date_extract(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').format("YYYY-MM-DD");
        }
    },

    date_add(date, days) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').add( days,'days').format("YYYY-MM-DD");
        }
    },

    date_subtract(date, days) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract( days,'days').format("YYYY-MM-DD");
        }
    },

    // this week: start and end dates; could use either future_week, or past_week, with weeks=0
    start_of_week(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').startOf('week').format('YYYY-MM-DD');
        }
    },
    end_of_week(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').endOf('week').format('YYYY-MM-DD');
        }
    },

    // future week: start and end dates
    start_of_future_week(date, weeks) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').add(weeks, 'weeks').startOf('week').format('YYYY-MM-DD');
        }
    },
    end_of_future_week(date, weeks) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').add(weeks, 'weeks').endOf('week').format('YYYY-MM-DD');
        }
    },

    // past week: start and end dates
    start_of_past_week(date, weeks) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(weeks, 'weeks').startOf('week').format('YYYY-MM-DD');
        }
    },
    end_of_past_week(date, weeks) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(weeks, 'weeks').endOf('week').format('YYYY-MM-DD');
        }
    },

    // this month: start and end dates; could use either future_month, or past_month, with months=0
    start_of_month(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').startOf('month').format('YYYY-MM-DD');
        }
    },
    end_of_month(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').endOf('month').format('YYYY-MM-DD');
        }
    },
    // future month: start and end dates
    start_of_future_month(date, months) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').add(months, 'months').startOf('month').format('YYYY-MM-DD');
        }
    },
    end_of_future_month(date, months) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else  {
            return moment.utc(date, 'YYYY/MM/DD').add(months, 'months').endOf('month').format('YYYY-MM-DD');
        }
    },
    // past month: start and end dates
    start_of_past_month(date, months) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(months, 'months').startOf('month').format('YYYY-MM-DD');
        }
    },
    end_of_past_month(date, months) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(months, 'months').endOf('month').format('YYYY-MM-DD');
        }
    },

    // this calendar year: start and end dates; could use either future_year, or past_year, with years=0
    start_of_year(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').startOf('year').format('YYYY-MM-DD');
        }
    },
    end_of_year(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').endOf('year').format('YYYY-MM-DD');
        }
    },
    // this fiscal year: start and end dates; could use either future_year, or past_year, with years=0
    start_of_fyear(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(6, 'months').startOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    },
    end_of_fyear(date) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(6, 'months').endOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    },

    // future calendar year: start and end dates
    start_of_future_year(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').add(years, 'years').startOf('year').format('YYYY-MM-DD');
        }
    },
    end_of_future_year(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').add(years, 'years').endOf('year').format('YYYY-MM-DD');
        }
    },

    // future fiscal year: start and end dates
    start_of_future_fyear(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').add(years, 'years').subtract(6, 'months').startOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    },
    end_of_future_fyear(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').add(years, 'years').subtract(6, 'months').endOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    },

    // past calendar year: start and end dates
    start_of_past_year(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(years, 'years').startOf('year').format('YYYY-MM-DD');
        }
    },
    end_of_past_year(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(years, 'years').endOf('year').format('YYYY-MM-DD');
        }
    },

    // past fiscal year: start and end dates
    start_of_past_fyear(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(years, 'years').subtract(6, 'months').startOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    },
    end_of_past_fyear(date, years) {
        if (!moment(date, "YYYY-M-D", true).isValid()) {
            return null;
        } else {
            return moment.utc(date, 'YYYY/MM/DD').subtract(years, 'years').subtract(6, 'months').endOf('year').add(6, 'months').format('YYYY-MM-DD');
        }
    }

};

module.exports =  date_calculations;

