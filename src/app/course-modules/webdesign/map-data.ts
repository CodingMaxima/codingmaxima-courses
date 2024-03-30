import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebDesignMapData {
  readonly chapters = [
    {
      name: "HTML Introduction",
      lessons: [
        {name:"Introduction", url:"webdesign/html/intro"},
        {name:"Headings & Paragraphs",url:"webdesign/html/headingsparagraph"},
        {name:"Lists",url:"webdesign/html/list"},
        {name:"Links & Buttons",url:"webdesign/html/links"},
        {name:"Multimedia",url:"webdesign/html/multimedia"},
        {name:"Blocks",url:"webdesign/html/blocks"},
        {name:"Tables",url:"webdesign/html/tables"},
      ],
    },
    {
      name: "HTML Forms",
      lessons: [
        {name:"Forms Intro", url:"webdesign/html-forms/forms"},
        {name:"Forms 1", url:"webdesign/html-forms/forms-1"},
        {name:"Forms 2", url:"webdesign/html-forms/forms-2"},
        {name:"Forms 3", url:"webdesign/html-forms/forms-3"},
      ]
    },
    {
      name: "CSS (Cascading Style Sheets)",
      lessons: [
        {name:"Introduction", url:"webdesign/css/intro"},
        {name:"Properties Of CSS", url:"webdesign/css/properties-of-css"},
        {name:"CSS Box model", url:"webdesign/css/box-model"},
        {name:"CSS Tables Assignment", url:"webdesign/css/tables-assignment"},
        {name:"CSS Button Assignment", url:"webdesign/css/button-assignment"},
        {name:"CSS Forms Login Assignment", url:"webdesign/css/forms-login-assignment"},
        {name:"CSS Forms Signup Assignment", url:"webdesign/css/forms-signup-assignment"},
      ]
    },    
    {
      name: "CSS Animations",
      lessons: [
        {name:"Introduction", url:"webdesign/css-animations/intro"},
        {name:"Assignment one", url:"webdesign/css-animations/assignment-one"},
      ]
    },    
    {
      name: "Bootstrap",
      lessons: [
        {name:"Introduction", url:"webdesign/bootstrap/intro"},
        {name:"Bootstrap Grid", url:"webdesign/bootstrap/grid"},
      ]
    },
    {
      name: "Bootstrap Cards",
      lessons: [
        {name:"Cards", url:"webdesign/bootstrap-cards/cards"},
        {name:"Assignment one", url:"webdesign/bootstrap-cards/assignment-one"},
        {name:"Assignment two", url:"webdesign/bootstrap-cards/assignment-two"},
      ]
    },
    {
      name: "Bootstrap Forms",
      lessons: [
        {name:"Forms", url:"webdesign/bootstrap-forms/forms"},
        {name:"Assignment one", url:"webdesign/bootstrap-forms/assignment-one"},
        {name:"Assignment two", url:"webdesign/bootstrap-forms/assignment-two"},
        {name:"Assignment three", url:"webdesign/bootstrap-forms/assignment-three"},
      ]
    },    
    {
      name: "Bootstrap Tabs",
      lessons: [
        {name:"Tabs", url:"webdesign/bootstrap-tabs/tabs"},
        {name:"Pills", url:"webdesign/bootstrap-tabs/pills"},
        {name:"Assignment one", url:"webdesign/bootstrap-tabs/assignment-one"},
      ]
    },        
    {
      name: "Bootstrap Slide Show",
      lessons: [
        {name:"Slide Show", url:"webdesign/bootstrap-slide-show/slide-show"},
        {name:"Assignment one", url:"webdesign/bootstrap-slide-show/assignment-one"},
      ]
    },    
  ];

}
