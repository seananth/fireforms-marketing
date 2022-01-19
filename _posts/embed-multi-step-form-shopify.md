---
title: "Embed a Multi Step Form on Shopify"
excerpt: "Shopify has seen tremendous success in the world of ecommerce to the point where building another solution just isn’t worth it most of the time. One of the big reasons for shopify's success is the ability to customize your shop. Adding multi step forms on shopify is easy and today I’m going to walk you through it!"
coverImage: "/assets/blog/fireforms-guides/covers/shopify-cover.png"
date: "2021-01-19"
author:
  name: "Sean Säfström"
  # picture: ''
ogImage:
  url: "/assets/blog/fireforms-guides/covers/shopify-cover.png"
---

## **Create a Form**

First of all you will need a form, if you’re having trouble with ideas feel free to browse our blog we cover a multitude of topics centered around forms.

Use the builder to drag and drop your inputs and add pages as you see fit. The first question is the most important, it’s your bait! Make sure it’s provoking and engaging, we really want people to stop in their tracks when scrolling (which isn’t an easy thing to do).

Once you’re happy with your form we’ll go on to the next step. (you can always edit your form later!)

## **Add a custom section**

Let's move on to shopify! This part is a bit more tricky but don’t worry we’ll make it out alive..

### Step 1: Edit code

From your themes page, click the dropdown and select edit code (it’s safe, the code is more scared of you than you are of it..)

![Add Code Block](/assets/blog/fireforms-guides/info-img/shopify/edit-code.jpg "edit code button")

### Step 2: Create new section

Locate the sections folder in the left hand menu and click the “add a new section” text. You can call the new section whatever you’d like however to make things simple we recommend naming it “Fireforms”.

![Add Code Block](/assets/blog/fireforms-guides/info-img/shopify/create-section.jpg "shopify section multi step form section")

You’ll see that a new file called Fireforms.liquid has been created, open it up and paste the following code:

```
<div class="custom-fireforms">
  {% comment %} Paste form code Below {% endcomment %}

  {% comment %} Paste form code Above {% endcomment %}
</div>

{% schema %}
  {
    "name": "FireForms",
    "settings": [],
	"presets": [{
    "name": "FireForms",
    "category": "Text"
  }]
  }
{% endschema %}

{% stylesheet %}
{% endstylesheet %}

{% javascript %}
{% endjavascript %}
```

### Step 3: Copy and paste unique form id

Lets jump back into our fireforms dashboard and grab that form we created earlier. All you have to do is copy the form code from your settings.

![Add Code Block](/assets/blog/fireforms-guides/info-img/How-to-embed-multi-step-form.png "How-to-embed-multi-step-form")

</br>

Once you have your form code all you have to do is paste it between the comments in your custom shopify section.

![Add Code Block](/assets/blog/fireforms-guides/info-img/shopify/Paste-here.jpg "shopify section multi step form section")

Make sure you save the file before you exit! (top right corner)

## **Add your custom section to your site**

Once your custom component is done you can go back to the themes page and click on the customize button.

Now you’re in the normal editing view that you’re probably used to. Click on the “add section” button and your custom section should show up.

![Add Code Block](/assets/blog/fireforms-guides/info-img/shopify/custom-section-add.jpg "add section")

The form itself might not pop up at first, refresh the page and it will show so don't freak out if it’s just blank.

![Add Code Block](/assets/blog/fireforms-guides/info-img/shopify/show-form-site.png "shopify section multi step form section")

Thats it you're done! With those tech skills you're almost a developer now.. Dont worry, once the form is there you wont have to touch to code again.

## **Editing Multi step form**

Once your form is embedded all changes can be done from your fireforms dashboard. Any changes you make will be updated automatically!

## **Changing forms**

If you want to change your form or add a different one you’ll need to either change the form code in your component or simply create a new one following this process again.

If you at any point feel like this is too difficult feel free to contact us and we’ll help you out!

## **Final words**

Fireforms is an ever evolving product. If there are any shopify specific functions you feel are missing, let us know and we’ll add those for you.

The same goes for other platforms or if you have general suggestions for the Fireforms team. Your feedback is what will make us great!
