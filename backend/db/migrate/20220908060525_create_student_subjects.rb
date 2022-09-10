class CreateStudentSubjects < ActiveRecord::Migration[6.1]
  def change
    create_table :studentSubjects do |t|
      t.integer :student_id
      t.integer :subject_id
      t.timestamps
    end
  end
end
