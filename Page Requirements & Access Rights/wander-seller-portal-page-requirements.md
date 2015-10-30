#WANDER SELLER PORTAL | PAGES 

               

##OUTLINE
(Format: Action, (VERB), Description, Access Rights, Requirements Outlined)  

- Home, (), Wander homepage, shared, yes
- About, (), about Wander and how it works, shared, no
- Contact, (), contact Wander, shared, no
- Log In, (), log in, shared, yes
- Create new User, (NEW), sign up, shared, yes 
- Create new Product, (NEW), add product, shared, yes
- Create new Category, (NEW), add category, admin, no
- All Users, (INDEX), view users, admin, no
- All Products, (INDEX), view products/welcome screen, shared, yes 
- All Categories, (INDEX), view categories, admin, no
- User Profile, (SHOW), view user's info, shared, yes
- Product Profile, (SHOW), view product info, shared, no
- User Edit/Update, (EDIT/UPDATE), edit/update a user's info, shared, no
- Product Edit/Update, (EDIT/UPDATE), edit/update a user's info, shared, yes
- Category Edit/Update, (EDIT/UPDATE), edit/update a category's info, admin, no



##PAGE REQUIREMENTS

##### Home
> Left nav
>> Home/Logo
>> About
>> Contact
>> Login
>> Sign Up
> Master Image


_______________________________________________________

##### Log In 

> Email

> Password


##### Sign Up

> Require following fields:

>> Role

>> Name

>> Description

>> Logo

>> email

>> password

>> password-confirmation

>>> Sign Up CTA

>>>> Dedicated email authentication page? Devise?  

_______________________________________________________


#####All Products / Welcome Screen

> **DESKTOP**

>> All products (Grid) 
>>> Admin: All products by all Brands 

>>> Brand: Filtered by Brand name

>>> Upon hover over a Product, reveal Edit and Delete options

>> Left hand nav

>>> Logo & name

>>> Menu:

>>>> Admin: Profile, All Products, All Brands, All Categories, Add Product, Add Brand, Add Category 

>>>> Brand: My Profile, My Products, Add Product



> **MOBILE**

>> Header strip

>> All products (Listed)
>>> Admin: All products by all Brands 

>>> Brand: Filtered by Brand name

>>> Upon swipe left on a Product, reveal Edit and Delete options


>> Slide out menu (left)

>>> Logo & name

>>> Menu:

>>>> Admin: Profile, All Products, All Brands, All Categories, Add Product, Add Brand, Add Category 

>>>> Brand: My Profile, My Products, Add Product

________________________________________________________________________________________


#####User Profile

> Show following fields:

>> Logo

>> Role

>> Name

>> Description

>> email

>> password (hidden)

> Edit CTA (link to Edit page)

> Delete CTA (one-step confirmation to complete action) 

________________________________________________________________________________________


##### Create New Product + Product Edit & Update

Require following fields:

> Title

> Description

> Price

> Sizes (Checkbox: XS, S, M, L, XL)

> Image(s)

> Brand

>> Admin: [Manually select from a list of User's names]

>> Brand: [Hidden value]

