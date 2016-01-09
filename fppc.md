---
layout: default
permalink: /fppc/
---

<!-- Call to action -->
<div class="jumbotron">
  <h2>Evaluating Campaign Finance and Lobbying Data Platforms</h2>
  <p>Data about money and politics is available from many different sources. Some platforms are better than others and the <a href="http://www.fppc.ca.gov/">California Fair Political Practices Commission</a> (FPPC) is interested in hearing from the developer community about what works and what doesn’t in this space.</p>
  <p>
    <a class="btn btn-lg btn-success" href="https://ashroughani.typeform.com/to/OGBKj4" target="_blank" role="button"><i class="fa fa-bullhorn"></i></li> Take the Survey</a>
    <a class="btn btn-lg btn-primary" href="#platforms" role="button"><i class="fa fa-terminal"></i></li> Browse the Platforms</a>
  </p>
</div>

<!-- Help wanted -->
<div class="row">
  <div class="col-sm-12">
    <h2>Help Wanted</h2><hr>
    <p class="lead">The FPPC is the state’s political watchdog agency, and <a href="/">Code for Sacramento</a> and <a href="http://hackerlab.org/">Hacker Lab</a> have teamed up to help the FPPC get answers to these questions from web developers who can offer a critical perspective.</p>
  </div>
</div>

<!-- Data Platforms -->
<div class="row">
  <div class="col-sm-12">
    <h2 id="platforms">Data Platforms</h2><hr>
  </div>
</div>

<div class ="row">
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>Power Search</h4>
      <p><i class="fa fa-terminal"></i> <a href="http://maplight.org/">MapLight</a> in partnership with the <a href="http://www.sos.ca.gov/">California Secretary of State</a></p>
      <p class="lead">The CAL-ACCESS Power Search is a tool that allows journalists and citizens to easily search the California Secretary of State's bulk data download to find political contributions to all recipient committees from 2001 through the present.</p>
      <a class="btn btn-default btn-primary" href="http://powersearch.sos.ca.gov/" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="https://github.com/maplight/CAPS" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>Django CAL-ACCESS</h4>
      <p><i class="fa fa-terminal"></i> <a href="http://www.californiacivicdata.org/">California Civic Data Coalition</a></p>
      <p class="lead">A Django app to refine and investigate campaign finance data drawn from the California Secretary of State’s CAL-ACCESS database. Intended as a second layer atop <a href="https://github.com/california-civic-data-coalition/django-calaccess-raw-data">django-calaccess-raw-data</a> that transforms the source data and loads it into simplified models that serve as a platform for investigative analysis.</p>
      <a class="btn btn-default btn-primary" href="http://www.californiacivicdata.org/" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="http://django-calaccess-campaign-browser.californiacivicdata.org/en/latest/" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
</div>

<div class ="row">
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>followthemoney.org</h4>
      <p><i class="fa fa-terminal"></i> <a href="http://www.followthemoney.org/about-us/">National Institute on Money in State Politics</a></p>
      <p class="lead">The Institute receives its data in either electronic or paper files from the disclosure agencies with which candidates must file their campaign finance reports. The Institute collects the information for all state-level candidates in the primary and general elections and then puts it into a database.</p>
      <a class="btn btn-default btn-primary" href="http://www.followthemoney.org/" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="http://www.followthemoney.org/assets/FollowTheMoney-API.pdf" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>OpenFEC API</h4>
      <p><i class="fa fa-terminal"></i> <a href="https://18f.gsa.gov/">18F</a></p>
      <p class="lead">The FEC API is a RESTful web service supporting full-text and field-specific searches on Federal Elections Commission data (thus, only data on federal offices). Bulk downloads are available on the current site. Information is tied to the underlying forms by file ID and image ID.</p>
      <a class="btn btn-default btn-primary" href="https://api.open.fec.gov/developers" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="https://github.com/18F/openFEC" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
</div>

<div class ="row">
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>Socrata Open Data Platform</h4>
      <p><i class="fa fa-terminal"></i> <a href="http://www.socrata.com/">Socrata</a></p>
      <p class="lead">Socrata is a turn-key open data platform used by over 300 government agencies. Every dataset is automatically API-enabled with a RESTful JSON and GeoJSON API. The Socrata API supports filters and queries using a SQL-like query language called “Socrata Query Language” (SoQL) that was specifically designed for making it easy to work with data on the web.</p>
      <a class="btn btn-default btn-primary" href="https://brigades.opendatanetwork.com/TRANSPARENCY/California-Campaign-Finance-and-Lobbying-Activity-/5759-66xv" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="http://dev.socrata.com/" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="panel panel-default panel-body">
      <h4>BONUS: Civic Information API</h4>
      <p><i class="fa fa-terminal"></i> <a href="https://developers.google.com/">Google</a></p>
      <p class="lead">The Google Civic Information API lets developers build applications that display civic information to their users. For any U.S. residential address, you can look up who represents that address at each elected level of government. During supported elections, you can also look up polling places, early vote location, candidate data, and other election official information.</p>
      <a class="btn btn-default btn-primary" href="https://developers.google.com/civic-information/?hl=en" target="_blank"><i class="fa fa-rocket"></i> See it in Action</a>
      <a class="btn btn-default btn-default" href="https://developers.google.com/civic-information/docs/v2/?hl=en" target="_blank"><i class="fa fa-file-text-o"></i> Documentation</a>
    </div>
  </div>
</div>

<!-- Second Call to Action -->
<div class="row">
  <div class="col-sm-12">
    <h2>Tell us what you think!</h2><hr>
    <p class="lead">How might civic technologists build interfaces that help voters better understand how money is used in elections? Are existing application programming interfaces (APIs) usable or does the State of California need a new platform?</p>
    <p>
      <a class="btn btn-lg btn-success" href="https://ashroughani.typeform.com/to/OGBKj4" target="_blank" role="button"><i class="fa fa-bullhorn"></i></li> Take the Survey</a>
    </p>
  </div>
</div>
