---
title: Blog
author: Code for Sacramento
layout: page
permalink: /blog/
---

<ul class="list-unstyled">
  {% for post in site.posts limit:10 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h4>
        <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
      </h4>

      {{ post.excerpt }}

    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" }}">via RSS</a></p>
