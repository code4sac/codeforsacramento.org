---
title: Fix OSX Excel CSV export linebreaks
author: Kaleb Clark
layout: post
permalink: /fix-osx-excel-csv-export-linebreaks/
main_image:
  - 
categories:
  - blog
---
If you are working with data on OSX and need to get it into a CSV format, you may have run into the linefeed problem.

The problem is this: Excel for OSX exports CSV files with wrong linefeeds. If you do a line count on a file that you have exported from Excel, it will show that it is one giant line. If you are going to process this with python, or feed it into an SQL table, it needs to have proper linefeeds.

Quick and dirty hack solution:

<pre class="brush: bash; title: ; notranslate" title="">cat brokenfile.csv | tr '\15' '\n' &gt; awesomefile.csv
</pre>

This will replace the broken linefeeds with proper &#8216;\n&#8217; linefeeds.

Enjoy  
-Kaleb