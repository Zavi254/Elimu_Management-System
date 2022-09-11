class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get "/departments" do
      teacher = Department.all
      teacher.to_json
    end

    get '/teachers' do
      teacher = Teacher.all
      teacher.to_json(only: [:id, :name, :gender], include: {
        department: { only: [:name] }
      })
    end

    get '/students' do
      student = Student.all
      student.to_json(include: { allsubjects: { include: :subject } })
    end

    get '/students/:id' do
      student = Student.find(params[:id])
      student.to_json(include: { allsubjects: { include: :subject } })
    end

    post '/teachers' do
      teacher = Teacher.create(
        name: params[:name],
        gender: params[:gender],
        department_id: params[:department]
      )
      teacher.to_json
    end

    post '/students/:id' do
      student = Student.create(
        name: params[:name],
        gender: params[:gender],
        age: params[:age],
        email: params[:email]
      )
      student.to_json
    end

    patch '/students/:id' do
      student = Student.find(params[:id])
      student.update(
        name: params[:name],
        email: params[:email],
        gender: params[:gender],
        age: params[:age]
      )
      student.to_json
    end
    

    delete '/teachers/:id' do
      teacher = Teacher.find(params[:id])
      teacher.destroy
      review.to_json

    end
  
  end