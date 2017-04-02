/**
 * Created by kalebclark on 3/29/17.
 */
window.onload = function () {

    function show_issues(data) {
        console.log(data);
        $.each(data, function(idx, val) {
             // $('#issues').append("<li><a href='"+ val.html_url +"'>"+ val.title + "</a></li>");
            // $('#issues').append("<div class='panel panel-default'><div class='panel-body'><a href='"+ val.html_url +"'>"+ val.title + "</a></div> </div>")
            $('#issues').append("<tr><td><a target='_blank' href='"+ val.html_url +"'>"+ val.title + "</a></td></tr>")
            //return idx < 6;
        });
    }
    
    function show_contributors(data) {
        // console.log(data);
        $.each(data, function(idx, val) {
            $('#contributors').append("<a href='"+val.html_url+"'><img class='img-thumbnail' src='"+val.avatar_url+"' alt='"+val.login+"' title='"+val.login+"'></a>")

        });
    }

    var issues_el = $('#issues');
    var contrib_el = $('#contributors');
    
    var repo = issues_el.data().repo;

    /* Fetch open issues **/
    var issues_api = 'https://api.github.com/repos/code4sac/' + repo + '/issues?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';

    $.getJSON(issues_api).done(function(data) {
        show_issues(data);
    });

    var contrib_api = 'https://api.github.com/repos/Code4Sac/' + repo + '/contributors?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';

    $.getJSON(contrib_api).done(show_contributors);

};