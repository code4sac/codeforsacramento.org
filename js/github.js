window.onload = function () {
    //saystuff("{{ project.title }}");

    function show_contributors($el,data) {
        console.log(data.length);
        $el.find('.contributors').html(data.length);
    }
    
    function show_issues($el, data) {
        $el.find('.issues').html(data.length);
    }

    // $('.gh-data').each(function (idx, el) {
    //     var $el = $(el);
    //     var repo = $el.data().repo;
    //
    //
    //     /* Fetch Contributors **/
    //     var contrib_api = 'https://api.github.com/repos/Code4Sac/' + repo + '/contributors?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';
    //
    //     $.getJSON(contrib_api).done(function(data) {
    //         show_contributors($el, data);
    //     });
    //
    //     /* Fetch open issues **/
    //     var issues_api = 'https://api.github.com/repos/Code4Sac/' + repo + '/issues?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';
    //
    //     $.getJSON(issues_api).done(function(data) {
    //         show_issues($el, data);
    //     });
    //
    // });
};