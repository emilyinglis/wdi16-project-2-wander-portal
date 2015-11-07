<<<<<<< HEAD
=======


![](./readme-assets/mobilevisuals/mobile-phone2.gif)


>>>>>>> 3936e57b1071f7dd12b12069a1f5223487f16443
# THE WANDER PORTAL

![](./readme-assets/all-screens.png)

### GA WDI16 London | Project 2

#### A portal for enabling Sellers on the Wander marketplace to sign up and manage their products on-the-go

##### [Click here](http://bit.ly/wander-portal) to vist the Wander Portal.

_________________________________________________

###INTRODUCTION

####What is *Wander*?

Wander is a contemporary marketplace for emerging fashion and homewares brands in the UK. Unlike most marketplaces, Wander is highly curated with each 'Seller' being hand-picked based on their range, quality and overall brand aesthetic. We do this to ensure that both the young brand's themselves benefit from good company, and our customers benefit from a good shopping experience.

####What's the *problem*?
At peasent, all products are managed by Wander and not the sellers. With the aim of scaling the business, we need to enable Sellers through Wander to manage their own products and personal information.


####The *Wander Portal*

<p style="float: left">
  <img src="./readme-assets/mobilevisuals/mobile-phone2.gif" />
</p>

The [Wander Portal](http://bit.ly/wander-portal) to vist the Wander Portal. is the answer to the problem; enabling Sellers to not only sign up and log in, but also upload, edit, delete and view their products - and only their products (i.e. they cannot view or manage other user's products or information).

The portal focusses first and foremost on the mobile experience for the user, keeping in mind these are individuals on the move rather than established businesses with premises. 


###Getting Started

####New User

To experience the portal as a new user ("Seller"):

:1. Go to the [Wander Portal](http://bit.ly/wander-portal)

:2. Click 'Sign Up' 

:3. Complete the form and click "Sign Up"

:4. Get started by adding a new product to your collection - either via the homepage quick links, or the My Products dropdown menu.

Once you've added a product, you can view it within All Products (My Producst < All Products). You can also easily update your information, such as your brand's name and description, as well as your email and password via My Profile, simply click Edit to do so.


####Existing User : 'Uncivilised'

To experience the portal as an existing user ("Seller") with multiple products,  we have created a profile for you to view:

:1. Go to the [Wander Portal](http://bit.ly/wander-portal)

:2. Click 'Log In' 

:3. Log in as 'Uncivilised' with the following:

>> uncivilised@uncivilised.com

>> password



### The Build

- HTML5
- CSS / SCSS
- RUBY 
- RAILS
- FOUNDATION 5 
- DEVICE



### Problems & Challenges

I spent a long time planning, which helped me greatly - particularly getting started, however I hadn't expected in the planning stage to require Size as a model. As such, I spent some time removing Size from the Product table and scaffolding separately.

On a similar note, upon deployment I found that checkboxes for Categories and Sizes wouldn't render on Heroku and with no time left was unable to fix - instead, I simply hid from the relative NEW, EDIT and SHOW pages for the time being.

A final area of difficulty was seeding; I was unable to succesfully get the seed working, with a big reason being the Categories and Sizes as well as the user_id properties when creating a new product. Whilst a problem on limited time, it would be merel a challenge that would be overcome in 15 minutes if I had the extra time so I'm not particularly concerned by this.




#### [for the] WIN

A significant win was the basis of my HTML and CSS. I spent a significant amount of time - keeping in mind the number of various divs on this page, in particular layered over each other - ensuring that I was engaging best practice in my positioning, to the best of my abilities/knowledge to date. This has previously been a well-oiled bad habit which I am slowly growing out of and feel confident that I can now adapt this relatively strong framework to become more mobile friendly in V2.



### Process

![](./images/prework-readme.png)

1. I started by outlining the problem (a real-life problem no les) and learnings from user research, such as that our Sellers are often 'on the go' and require a mobile-first application. 
2. . I then started planning my Associations, first writing them out and then creating a visual representation. You can find these within the **Associations** folder
3. Secondly, using what I had already gathered - I planned the various User Stories for the project. You can find these within the **User Stories** folder.
4. Thirdly, I started working on some wireframing - combining sketches and digital. Please note that you can find some visuals within the **Wireframing** folder, however I mislaid the sketches prior to uploading.
5. The final stage of planning was to combine all I had and build out a **Page Requirements & Access Rights** folder/file that would breakdown requirements for each page, based on Associations and User Stories.  
5. Finally it was time to start coding; I used Device to setup the app first and foremost. 
6. Once the basic framework was in place, I quickly moved into improving the aesthetics using various Foundation frameworks on the pages (Home and All Products).
7. Finally, I worked on refinining the mobile experience first and foremost, followed by Desktop; keeping in mind this is a mobile first application.


###"If I had an extra hour..."

In total - and outside of planning - this app was created in 8-9 hours in total. Given an extra couple of days, it would have a dedicated Admin user and Brand user experience, as well as a consumer-facing store (albeit, a very basic one). If I simply had an extra hour however, I would do the following: 

1. Get seed file working
3. Get Category and Sizes checkboxes rendering with Heroku
4. Repolace unsightly flash messages with design-friendly corner notifications
5. Clean up design accents such as buttons on forms
6. Personalise Heroku URL without it buggering the hero images (weird) 
<<<<<<< HEAD







<!--
![](./readme-assets/all-screens.png)
-->
=======
>>>>>>> 3936e57b1071f7dd12b12069a1f5223487f16443
