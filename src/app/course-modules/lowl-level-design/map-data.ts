import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LowLevelDesignMapData {

  readonly chapters = [
    {
      name: "Solid Principles",
      lessons: [
        { name:"Single Responsibility",url: "lowl-level-design/solid/single"},
        { name:"Open-Closed",url: "lowl-level-design/solid/openclosed"},
        { name:"Liskov Subtitution",url: "lowl-level-design/solid/liskov"},
        { name:"Interface Segregation",url: "lowl-level-design/solid/interface"},
        { name:"Dependency Inversion",url: "lowl-level-design/solid/dependency"} 
      ],
    },

    {
      name: "Creational Design Patterns",
      lessons: [
        
        { name:"Singleton Design Pattern",url: "lowl-level-design/creational/singleton"},
        { name:"Factory Design Pattern",url: "lowl-level-design/creational/factory"},
        { name:"Abstract Design Pattern",url: "lowl-level-design/creational/abstractfactory"},
        { name:"Builder Design Pattern",url: "lowl-level-design/creational/builder"},
        { name:"Prototype Design Pattern",url: "lowl-level-design/creational/prototype"}
      ],
    },

    {
      name: "Structural Design Patterns",
      lessons: [
        { name:"Adapter Design Pattern",url: "lowl-level-design/structural/adapter"},
        { name:"Decorator Design Pattern",url: "lowl-level-design/structural/decorator"},
        { name:"Facade Design Pattern",url: "lowl-level-design/structural/facade"},
      ],
    },

    {
      name: "Behavioral Design Patterns",
      lessons: [
        
        { name:"Chain of Resposibilities Design Pattern",url: "lowl-level-design/behavioral/chainofresponsibilities"},
        { name:"State Design Pattern",url: "lowl-level-design/behavioral/state"},
        { name:"Observer Design Pattern",url: "lowl-level-design/behavioral/observer"},
        { name:"Strategy Design Pattern",url: "lowl-level-design/behavioral/strategy"}

      ],
    },

  ];

}
