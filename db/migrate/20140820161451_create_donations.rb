class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.decimal :amount
      t.text :message
      t.string :picture
      t.references :user, index: true

      t.timestamps
    end
  end
end
