User.delete_all
Child.delete_all
Donation.delete_all


ben = User.create!(email: Faker::Internet.email, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, password: Faker::Internet.password)
andrew = User.create!(email: Faker::Internet.email, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, password: Faker::Internet.password)
marie = User.create!(email: Faker::Internet.email, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, password: Faker::Internet.password)
kelly = User.create!(email: Faker::Internet.email, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, password: Faker::Internet.password)

ben.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
andrew.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
marie.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
kelly.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save

ben.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
andrew.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
marie.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save
kelly.children.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, dob: Time.at(0.0 + rand * (Time.now.to_f - 0.0.to_f)).to_date ).save

ben.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
ben.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

andrew.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
andrew.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

marie.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
marie.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

kelly.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
kelly.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

ben.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
ben.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

andrew.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
andrew.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

marie.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
marie.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save

kelly.children.first.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
kelly.children.last.donations.new(message: Faker::Lorem.word, amount: Faker::Number.number(2)).save
