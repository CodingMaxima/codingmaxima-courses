import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringBootMapData {

  readonly chapters = [
    {
      name: "Introduction",
      lessons: [
        { name:"Prerequsites",url: "springboot/intro/pre"},
        { name:"XML Files",url: "springboot/intro/xml"},
        { name:"JSON Object",url: "springboot/intro/json"},
        { name:"REST APIs",url: "springboot/intro/rest"},
        { name:"Maven Dependencies",url: "springboot/intro/maven"}
      ],
    },

    {
      name: "Spring Boot",
      lessons: [
        { name:"Spring Boot Starter",url: "springboot/boot/start"},
        { name:"Spring Boot Properties",url: "springboot/boot/properties"},
        { name:"POSTMAN",url: "springboot/boot/postman"},
        { name:"Entity Classes",url: "springboot/boot/entity"},
        { name:"Dependency Injection",url: "springboot/boot/dependency-injection"},
        { name:"Beans & Components",url: "springboot/boot/spring-beans-and-components"},
        { name:"IoC Container",url: "springboot/boot/spring-ioc"}
      ],
    },

    {
      name: "Basic Projects",
      lessons: [

        { name:"Student APIs",url: "springboot/basicprojects/first-project"},
        { name:"Using MySQL Database",url: "springboot/basicprojects/second-project"},
        { name:"One-To-One Relation",url: "springboot/basicprojects/third-project"},
        { name:"One-To-Many Relation",url: "springboot/basicprojects/fourth-project"},
        { name:"Many-To-Many Relation",url: "springboot/basicprojects/fifth-project"}
       
      ],
    },

    {
      name: "Other Concepts",
      lessons: [
       
        { name:"Lombok Dependency",url: "springboot/otherconcepts/lombok"},
        { name:"Data Trasfer Objects (DTOs)",url: "springboot/otherconcepts/dtos"},
        { name:"Entity-Dto Mappers",url: "springboot/otherconcepts/mapper"},
        { name:"Spring Accuator",url: "springboot/otherconcepts/spring-acuator"},
        { name :"Logging", url: "springboot/otherconcepts/logging"}
      ],
    },

    {
      name: "Error Handing / Exceptions",
      lessons: [
       
        { name:"HTTP STATUS CODES",url: "springboot/error/http-statuscodes"},
        { name:"Project - 1",url: "springboot/error/errorhandlingproject1"},
        { name:"Project - 2",url: "springboot/error/errorhandlingproject2"},
      ],
    },

    {
      name: "Spring AOP",
      lessons: [
       
        { name:"Spring AOP",url: "springboot/springaop/aop"},
        { name:"Example - 1",url: "springboot/springaop/example1"},
        { name:"Example - 2",url: "springboot/springaop/example2"}
      ],
    },

    {
      name: "Swagger",
      lessons: [
       
      ],
    },

    {
      name: "Spring Sequrity",
      lessons: [
       
      ],
    },

    {
      name: "Courier Service Application",
      lessons: [
       
      ],
    },

    {
      name: "Library Management Application",
      lessons: [
       
      ],
    },
   
  ];

}
