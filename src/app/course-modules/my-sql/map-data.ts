import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySqlMapData {

  readonly chapters = [
    {
      name: "SQL-Introduction",
      lessons: [
        { name: "SQL & DataBase Introduction", url: "my-sql/sqlintroduction/mysql-intro" },
        { name: "SQL Datatypes", url: "my-sql/sqlintroduction/sql-datatypes" },
        { name: "And-Or-Not Operators", url: "my-sql/sqlintroduction/andornot" }
      ],
    },
    {
      name: "Database",
      lessons: [

        { name: "Create Database/Schema", url: "my-sql/database/create" },
        { name: "Select Database/Schema", url: "my-sql/database/selectdatabase" },
        { name: "Delete Database/Schema", url: "my-sql/database/deletedatabase" }
      ],
    },
    {
      name: "Create Tables",
      lessons: [
        { name:"Create Employee", url: "my-sql/createquery/create-employee"},
        { name:"Create Student", url: "my-sql/createquery/create-student"},
        { name:"Create Movies", url: "my-sql/createquery/create-movies"}
      ],
    },

    {
      name: "Alter & Drop",
      lessons: [
        { name:"Pre Data", url: "my-sql/alter-and-drop-queries/pre-data"},
        { name:"Alter & drop intro", url: "my-sql/alter-and-drop-queries/alter-and-drop-intro"},
        { name:"Alter Employee", url: "my-sql/alter-and-drop-queries/alter-employee"},
        { name:"Alter Student", url: "my-sql/alter-and-drop-queries/alter-student"},
        { name:"Alter Movies", url: "my-sql/alter-and-drop-queries/alter-movies"},
        { name:"Drop Example", url: "my-sql/alter-and-drop-queries/drop-example"},
        
      ],
    },

    {
      name: "Insert Query",
      lessons: [

        { name: "Pre Data", url: "my-sql/insert-query/insert-pre-data" },
        { name: "Insert Employee", url: "my-sql/insert-query/insert-employee" },
        { name: "Insert Student", url: "my-sql/insert-query/insert-student" }
      ],
    },
    {
      name: "Select Query",
      lessons: [
        { name: "Pre Data", url: "my-sql/select-query/select-pre-data" },
        { name: "Select Employee", url: "my-sql/select-query/select-employee" },
        { name: "Select Student", url: "my-sql/select-query/select-student" }

      ],
    },

    {
      name: "Constraints",
      lessons: [

        { name: "Introduction", url: "my-sql/constraints/intoduction" },
        { name: "Employee Table with Constraints", url: "my-sql/constraints/employeeconstraints" },
        { name: "Student Table with Constraints", url: "my-sql/constraints/studentconstraints" }
      ],
    },
    {
      name: "Update & Delete Data",
      lessons: [
        { name: "Pre Data", url: "my-sql/update-and-delete-queries/preupdatedata" },
        { name: "Update Employee", url: "my-sql/update-and-delete-queries/updateemployee" },
        { name: "Update Student", url: "my-sql/update-and-delete-queries/updatestudent" },
        { name: "Delete Queries", url: "my-sql/update-and-delete-queries/delete-queries" },
      ],
    },
    {
      name: "Aggregate Functions",
      lessons: [
        { name: "Pre Data", url: "my-sql/aggregatefunctions/pre-data" },
        { name: "AggregateIntro", url: "my-sql/aggregatefunctions/aggregate-intro" },
        { name: "Employee Aggregate ", url: "my-sql/aggregatefunctions/employee-aggregate" },
        { name: "Student Aggregate", url: "my-sql/aggregatefunctions/student-aggregate" }

      ],
    },
    {
      name: "Operators",
      lessons: [
        { name: "Pre Data", url: "my-sql/operators/pre-data" },
        { name: "Operators Intro", url: "my-sql/operators/operators-intro" },
        { name: "Employee Operators", url: "my-sql/operators/employee-operator" },
        { name: "Student Operators", url: "my-sql/operators/student-operator" }
      ]
    },
    {
      name: "GroupBy-Having",
      lessons: [
        { name: "Pre Data", url: "my-sql/groupbyhaving/predata" },
        { name: "GROUP BY-HAVING-INTRO", url: "my-sql/groupbyhaving/groupby-having-intro" },
        { name: "EMPLOYEE GROUP BY-HAVING", url: "my-sql/groupbyhaving/employee-groupby-having" },
        { name: "STUDENT-GROUP BY-HAVING", url: "my-sql/groupbyhaving/student-groupby-having" }
      ],
    },
    {
      name: "others",
      lessons: [

        { name: "Pre Data", url: "my-sql/others/pre-data" },
        { name: "Inner-Queries", url: "my-sql/others/inner-queries" },
        { name: "UNION", url: "my-sql/others/union" },
        { name: "EXIST", url: "my-sql/others/exist" },
        { name: "SORTING", url: "my-sql/others/sorting" }

      ],
    },
    {
      name: "Relation Mapping",
      lessons: [

        { name: "Anomalies in DBMS", url: "my-sql/relations/anomalies" },
        { name: "Relation Mapping", url: "my-sql/relations/relation-mapping" },
        { name: "One-To-One Examples", url: "my-sql/relations/onetoone-mapping" },
        { name: "One-To-Many Examples", url: "my-sql/relations/onetomany-mapping" },
        { name: "Many-To-Many Examples", url: "my-sql/relations/manytomany-mapping" }
      ],
    },
    {
      name: "Joins",
      lessons: [
        { name: "Pre Data", url: "my-sql/joins/pre-data" },
        { name: "JOINS Introduction", url: "my-sql/joins/joins-intro" },
        { name: "Employee-Laptop ", url: 'my-sql/joins/employee-laptop' },
        { name: "Country-Captial ", url: 'my-sql/joins/country-capital' },
        { name: "Apartment-Flat ", url: 'my-sql/joins/apartment-flat' },
        { name: "Employee-Designation ", url: 'my-sql/joins/employee-designation' },
        { name: "User-Movies ", url: 'my-sql/joins/user-movies' },

      ],
    },
    {
      name: "Advance Joins",
      lessons: [
        { name: "Employee Mapping Joins", url: "my-sql/advancejoins/employee-mapping-joins" }

      ],
    },
    {
      name: "Index",
      lessons: [
        { name: "Pre Data", url: 'my-sql/index/pre-data' },
        { name: "Index", url: 'my-sql/index/index' },
        { name: "View", url: 'my-sql/index/view' }


      ],
    },

    {
      name: "Paging/Pagination",
      lessons: [
        { name: "Pre Data", url: 'my-sql/paging/pre-data' },
        { name: "Paging", url: 'my-sql/index/paging' }
      ],
    },
    {
      name: "Interview Questions",
      lessons: [
        { name: "Interview Questions", url: "my-sql/interview/questions" }
      ],
    }
  ];

}
