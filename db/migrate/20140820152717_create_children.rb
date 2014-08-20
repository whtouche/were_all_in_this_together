class CreateChildren < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.date :dob, null: false
      t.string   :avatar
      t.integer :donations_number
      t.decimal :donations_total
      t.references :user, index: true

      t.timestamps
    end
  end
end
