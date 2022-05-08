// Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)

function calculate () {
    let start = new Date (document.getElementById("start").value);
    let end = new Date (document.getElementById("end").value);

    var diffDays= end.getTime()-start.getTime();

    var countdays = Math.round(diffDays/(1000*60*60*24));

    alert(countdays);
    }

