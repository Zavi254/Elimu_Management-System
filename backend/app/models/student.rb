class Student < ActiveRecord::Base
    has_many :allsubjects
    has_many :subjects, through: :allsubjects 
end