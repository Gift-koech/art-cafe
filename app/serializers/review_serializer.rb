class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :coffee_id
end
