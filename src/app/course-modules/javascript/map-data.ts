import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JavascriptMapData {
  readonly chapters = [
    {
      name: 'Introduction',
      lessons: [
        { name: 'Introduction', url: 'javascript/introduction/introduction' },
        { name: 'Basic Syntax', url: 'javascript/introduction/syntax' },
        { name: 'Variables', url: 'javascript/introduction/variables' },
        { name: 'Data Types', url: 'javascript/introduction/datatypes' },
        { name: 'Operators', url: 'javascript/introduction/operatiors' },
        {
          name: 'Conditional Statements',
          url: 'javascript/introduction/control-statments',
        },
        { name: 'Looping Statements', url: 'javascript/introduction/loops' },
        { name: 'jumping Statements', url: 'javascript/introduction/jumping' },
        { name: 'Keywords', url: 'javascript/introduction/keywords' },
      ],
    },

    {
      name: 'Basic Problems',
      lessons: [
        { name: 'Even/Odd', url: 'javascript/basic-problems/even-odd' },
        {
          name: 'Reverse of number',
          url: 'javascript/basic-problems/reverse-number',
        },
        { name: 'Factorial', url: 'javascript/basic-problems/factorial' },
        { name: 'Prime Number', url: 'javascript/basic-problems/prime' },
        { name: 'Pattern1', url: 'javascript/basic-problems/pattern1' },
        { name: 'Pattern2', url: 'javascript/basic-problems/pattern2' },
        { name: 'Pattern3', url: 'javascript/basic-problems/pattern3' },
        { name: 'Pattern4', url: 'javascript/basic-problems/pattern4' },
        { name: 'Pattern5', url: 'javascript/basic-problems/pattern5' },
        { name: 'Pattern6', url: 'javascript/basic-problems/pattern6' },
      ],
    },

    {
      name: 'Functions',
      lessons: [
        { name: 'Function', url: 'javascript/functions/function' },
      ],
    },

    {
      name: 'Arrays-Strings',
      lessons: [
        {
          name: 'Arrays-sets-maps ',
          url: 'javascript/array-set-map/array-set-map',
        },
        { name: 'Arrays ', url: 'javascript/array-set-map/arrays' },
        { name: 'Map ', url: 'javascript/array-set-map/map' },
        { name: 'Set ', url: 'javascript/array-set-map/set' },
        { name: 'Strings ', url: 'javascript/array-set-map/strings' },
        { name: 'Date-time ', url: 'javascript/array-set-map/date-time' },

      ],
    },

    {
      name: 'DOM',
      lessons: [
        {
          name: 'Dom ',
          url: 'javascript/dom-events/dom',
        },
        {
          name: 'DOM Events ',
          url: 'javascript/dom-events/events',
        },
      ],
    },

    {
      name: 'Projects',
      lessons: [
        {
          name: 'kgs/pounds conversions',
          url: 'javascript/projects/kg-pound-conversion',
        },
        {
          name: 'centimeters/feet conversions',
          url: 'javascript/projects/conversions',
        },
        {
          name: 'centimeters/feet/inch conversions',
          url: 'javascript/projects/conversions-two',
        },
        {
          name: 'random-quote generation',
          url: 'javascript/projects/random-quote',
        },
        {
          name: 'Digital clock',
          url: 'javascript/projects/digital-clock',
        },
        {
          name: 'guess number',
          url: 'javascript/projects/guessing-number',
        },
        {
          name: 'conversions advance',
          url: 'javascript/projects/all-conversions',
        },
        {
          name: 'Random-quiz generation',
          url: 'javascript/projects/quiz',
        },
        {
          name: 'Random-quiz generation advance',
          url: 'javascript/projects/advance-quiz',
        },

        {
          name: 'StopWatch',
          url: 'javascript/projects/stopwatch',
        },
        // {
        //   name: '',
        //   url: 'javascript/projects/',
        // },     
      ],
    },

    {
      name: 'Objects',
      lessons: [
        {
          name: 'Objects',
          url: 'javascript/objects/objects',
        },
      ]
    },
    {
      name: 'Oops',
      lessons: [
        {
          name: 'Oops',
          url: 'javascript/oops/oops',
        },
      ]
    },

    {
      name: 'Error Handlings',
      lessons: [
        {
          name: 'Error-handling',
          url: 'javascript/error-handling/error-handling',
        },
      ]
    },

    {
      name: 'Asynchronous Javascript',
      lessons: [
        {
          name: 'Asynchronous Javascript',
          url: 'javascript/asynchronous/asynchronous',
        },
      ]
    },

  ];
}
