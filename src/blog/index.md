# welcome to my blog!

hey there, welcome to my weblog, where... we blog?

i've lovingly dubbed this blog astronotes, despite it having nothing to do with astrology. it's the spacecore vibe, y'know?

## posts

some posts from before have been archived.

<ul class="blog-list">
{% for post in collections.posts %}<li class="blog-post"><a href="{{post.url}}">{{post.data.title}}</a><br><small>{{post.data.date | formatDateShort }}</small><br><div>{{post.data.desc}}</div></li>{% endfor %}
</ul>