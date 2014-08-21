class ChildSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :dob, :avatar, :donations_number, :donations_total, :picture_one, :picture_two, :picture_three, :created_at, :updated_at, :user_id, :donations
end
