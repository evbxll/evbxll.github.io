---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
  <p>No posts yet. Check back soon for updates!</p>
{% endif %}