

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate)
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

module.exports = function getData(x, y) {
    var a = parseInt(new Date(x).getTime());
    var b = parseInt(new Date(y).getTime());

    var dateArray = getDates(new Date(a), new Date(b));
    var liste = [];
    
    for (i = 0; i < dateArray.length; i++) {
        var year = new Date(dateArray[i]).getFullYear();
        var mount = new Date(dateArray[i]).getMonth() + 1;
        var day = new Date(dateArray[i]).getDate();
        liste.push({ "year": year, "mount": mount, "day": day })
    }
    return liste
}








