
puts "🌱 Seeding spices..."

Teacher.create(name: "Lauryn Philipa Wescott", gender: "Male", department_id: 1)
Teacher.create(name: "Dinah Elenora North", gender: "Female", department_id: 2)
Teacher.create(name: "Nikkole Gertrude Yap", gender: "Female", department_id: 2)
Teacher.create(name: "Jackie Kaety Comstock", gender: "Female", department_id: 4)
Teacher.create(name: "Macy Parnel Davis", gender: "Male", department_id: 3)

Classroom.create(name: "Clever Clowns", teacher_id: 2)
Classroom.create(name: "Bingo Wives", teacher_id: 2)
Classroom.create(name: "Alive Scholars", teacher_id: 1)
Classroom.create(name: "Birds of a Feather", teacher_id: 3)
Classroom.create(name: "Clever Acts", teacher_id: 4)

Department.create(name:"Sciences")
Department.create(name:"Engineering")
Department.create(name:"Computing")
Department.create(name:"Human Resources")

puts "✅ Done seeding!"