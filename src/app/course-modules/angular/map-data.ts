import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularMapData {
  readonly chapters = [

    {
      name: "Introduction",
      lessons: [
        { name: "Installation", url: "angular/introduction-basics/installation" }

      ],
    },

    {
      name: "Components",
      lessons: [
        { name: "Data Binding", url: "angular/components/data-binding" },
        { name: "Interpolation", url: "angular/components/interpolation" },
        { name: "Property Binding", url: "angular/components/property-binding" },
        { name: "Event Binding", url: "angular/components/event-binding" },
        { name: "2 ways Data Binding", url: "angular/components/twoway-data-binding" },
        { name: "View Encapsulation", url: "angular/components/view-encapsulation" },
        { name: "Local References", url: "angular/components/local-references" },
        { name: "Component Lifecycle Hooks", url: "angular/components/component-lifecycle-hooks" },
      ],
    },

    {
      name: "Directives",
      lessons: [
        { name: "ngfor-ngif", url: "angular/directives/ngfor-ngif" },
        { name: "ngClass-ngStyle", url: "angular/directives/ngclass-ngstyle" },
        { name: "Custom Directives", url: "angular/directives/custom-directives" },
        { name: "Using HostListener to Listen to Host Events", url: "angular/directives/hostlistner" },
        { name: "Using HostBinding to Bind to Host Properties", url: "angular/directives/hostbinding" }

      ],
    },

    {
      name: "Services & Dependency Injection",
      lessons: [

        { name: "Hierarchical Injector", url: "angular/services-dependency-injection/hierarchical-injector" },
        { name: "Cross component communication", url: "angular/services-dependency-injection/cross-comp-communication" },
        { name: "Different ways of injecting services", url: "angular/services-dependency-injection/diffways-inj-services" }

      ],
    },

    {
      name: "Routing",
      lessons: [

        { name: "Router Links - Navigation", url: "angular/routing/routerlinks-navigation" },
        { name: " Navigating programmatically", url: "angular/routing/navigating-program" },
        { name: "Fetching route parameters", url: "angular/routing/fetch-route-parameter" },
        { name: "Query params & Fragments", url: "angular/routing/queryparam-fragments" },
        { name: "Child Routing", url: "angular/routing/child-routing" },
        { name: "Wildcard Routes", url: "angular/routing/wildcard-routes" },
        { name: "Outsourcing the Route Configuration", url: "angular/routing/outsource-route-config" },
        { name: "Route Guards", url: "angular/routing/route-gaurds" }


      ],
    },

    {
      name: "Observables & Forms, pipes",
      lessons: [

        { name: "Template Driven", url: "angular/observables-forms-pipes/templete-driven" },
        { name: "Reactive Forms", url: "angular/observables-forms-pipes/reactive-forms" },
        { name: "Using pipes to transform output", url: "angular/observables-forms-pipes/pipes-transform-output" }

      ],
    },
    {
      name: "Http Requests",
      lessons: [

        { name: "Interceptors", url: "angular/http-requests/interceptors" },
        { name: "Sending Requests", url: "angular/http-requests/sending-requests" },
        { name: "Headers & error handling", url: "angular/http-requests/header-error-handling" },
        { name: "Angular modules & Lazy Loading", url: "angular/http-requests/angmodule-lazyloading" }
      ],
    },

    {
      name: "Deploying an Angular App",
      lessons: [

      ],
    } 

  ]

}
