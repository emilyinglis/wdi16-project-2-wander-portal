


#WANDER SELLER PORTAL | ASSOCIATIONS


##THE PRODUCT REQUIREMENTS

“We want to create an app that enables both sellers ('Brands') and admins of the Wander marketplace to upload and manage a range of products across multiple categories.”


### MODELS

####PRODUCTS
- title :string
- description :text
- price :integer
- sold_out :boolean
- image :string 
- size & size inventory (**require assistance on this**)
- brand :references (this format generates `brand_id:integer`)

**Note.** We do not need to list *Category* as the association will be handled using a join table, see below.

[Note. need size but not sure how to represent as yet, will leave for now]

#####Associations:

“A product belongs_to a brand” 
>belongs_to :brand

“A product has_and_belongs_to_many categories” 
>has_and_belongs_to_many :categories
>> **join table required**

__________________________________________________________________


####CATEGORIES

name :string
> will require validation

#####Associations:
	
“A category has_and_belongs_to_many products”
>has_and_belongs_to_many :products
>>> **join table required (as above)**

__________________________________________________________________


####BRANDS

name :string
> will require validation

#####Associations:
	
“A brand has_many products” 
>has_many :products

“A brand has_many categories through products”
>has_many :categories, through: products

__________________________________________________________________


### JOIN TABLES
We join tables for the HABTM association:
> **products_categories** 
>>products
>>categories

__________________________________________________________________


####ORDER OF CREATION

As there is reliance on - for example - the model *Brands* to be present for the model *Products* to be migrated, we will need to follow this order when creating in the CLI:

1. Category
2. Brand
3. Product 


![]()