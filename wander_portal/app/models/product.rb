class Product < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :sizes
  has_and_belongs_to_many :categories
end
