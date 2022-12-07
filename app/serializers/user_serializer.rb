class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar_img, :user_name, :email, :contact, :password_digest

  has_many :coffees
end
