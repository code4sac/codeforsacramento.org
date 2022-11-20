(function () {
	
	var ghReposApi = 'https://api.github.com/orgs/code4sac/repos?per_page=5&sort=updated&direction=desc';
	var ghIssuesApi = 'https://api.github.com/repos/code4sac/{repo}/issues?per_page=5&sort=updated&direction=desc' 

	var displayProjects = function (data) {
		Promise.all(data.map(function (project) {
			var issueDataPromise = $.getJSON(ghIssuesApi.replace('{repo}', project.name)).promise()
			return issueDataPromise.then(function (issueData) {
				return  {
					...project,
					updated_at: moment(project.updated_at).fromNow(),
					issues: issueData
				}
			})
		})).then(function (hydratedData) {
			var template = Handlebars.compile($('#project-template').html());
			$('#projects').append(template({ projects: hydratedData }));
		})
	};
	
	$(document).ready(function () {
    
		$.getJSON(ghReposApi)
		.done(displayProjects);
	});

}());
