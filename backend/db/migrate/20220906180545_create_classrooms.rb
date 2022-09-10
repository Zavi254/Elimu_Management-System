class CreateClassrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :classrooms do |t|
      t.string :name
      t.integer :teacher_id
      t.timestamps
    end
  end
end
