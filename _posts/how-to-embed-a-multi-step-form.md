---
title: "How to embed a multi-step form"
excerpt: "Having the tools to build powerful multi-step forms is one thing, but how do we actually embed them on our site?"
coverImage: "/assets/blog/fireforms-guides/covers/how-to-embed-multi-step-form.jpg"
date: "2021-01-04"
author:
  name: "Sean Säfström"
  # picture: ''
ogImage:
  url: "/assets/blog/fireforms-guides/covers/how-to-embed-multi-step-form.jpg"
---

## How to embed a multi-step form

Having the tools to build powerful multi-step forms is one thing, but how do we actually embed them on our site? After all, we use these tools to avoid having to do any coding but we still want them to look like they are specifically made for our website.

Below you’ll first find a more general guide to how embedding your forms is done. If you’re using regular HTML/CSS of perhaps something more advanced like React.js that's probably what you’re looking for.

However if technology isn't your thing and you’re using a website builder like Wordpress or Webflow you’ll find links to platform specific guides that you can follow along with at the bottom of this article.

If you’re having any technical difficulties or this feels like something way out of your comfort zone, don’t hesitate to contact us!

### HTML / CSS

If your intended website is built using good old fashion HTML and CSS then embedding a multistep form is pretty straight forward.

All you have to do is copy the embed code in your fireforms dashboard and paste it inside your < body> tags.

![Embed multi-step form](/assets/blog/fireforms-guides/info-img/how-to-embed-multi-step-form.png "Click the copy button to get your unique embedding code")

The part of the embed code that is a div should be placed where on your site you want the form to show up. It might be a good idea to keep the script tag and div together if you in the future want to remove them, but if you’d rather move the script tag to the bottom of your < body> that's up to you.

### React / next.js

Embedding a multi-step form on a React.js website requires you to install a Script library, I have personally used the “react-script-tag” library which works great, but any should do.

If you’re using Next.js then the included script tag package works great. If you’re a developer and you’re using something else the main crux is you want to have the fireforms script that is found in your dashboard to run on page load and the div is where it all gets rendered to.

If you run into any technical problems with incorporating fireforms into your project let me know and we’ll figure it out!
