class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :author
      t.string :description
      t.string :picture

      t.timestamps
    end
  end
end
