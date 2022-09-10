class CreateAllSubjects < ActiveRecord::Migration[6.1]
  def change
    create_table :allsubjects do |t|
      t.integer :student_id
      t.integer :subject_id
    end
  end
end
