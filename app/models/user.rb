class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :children
  has_many :donations
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
