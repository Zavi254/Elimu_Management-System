class AddGenderColumnInTeachers < ActiveRecord::Migration[6.1]
  def change
    add_column :teachers, :gender, :string
  end
end
