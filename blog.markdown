---
layout: page
title: Blog
permalink: /blog/
---

## All Posts

{% for post in site.posts %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
  </article>
  <hr>
{% endfor %}

{% if site.posts.size == 0 %}
  <p>No posts yet. Check back soon for updates!</p>
{% endif %}