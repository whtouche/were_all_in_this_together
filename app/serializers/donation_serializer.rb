class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :message, :picture
end
