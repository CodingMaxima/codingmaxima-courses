import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PythonMapData {

  readonly chapters = [
    {
      name: "Introduction",
      lessons: [

        { name: "Installation", url: 'python/introduction/installation' },
        { name: "Introduction", url: 'python/introduction/introduction' },
        { name: "Python Console", url: 'python/introduction/python-console' },
        { name: "Operators", url: 'python/introduction/operators' },
        { name: "Control Statments", url: 'python/introduction/control-statments' },
        { name: "Loops", url: 'python/introduction/loops' },
        { name: "Keywords", url: 'python/introduction/keywords' }

      ],
    },
    {
      name: "Basic Problems",
      lessons: [

        { name: "Even/Odd", url: 'python/basic-problems/even-odd' },
        { name: "Smaller Number", url: 'python/basic-problems/smaller-number' },
        { name: "Greater Number", url: 'python/basic-problems/greater-number' },
        { name: "Reverse Of Number", url: 'python/basic-problems/reverse-number' },
        { name: "Palindrome Number", url: 'python/basic-problems/palindrome-number' },
        { name: "Armstrong Number", url: 'python/basic-problems/armstrong-number' },
        { name: "Neon Number", url: 'python/basic-problems/neon-number' },
        { name: "Factorial", url: 'python/basic-problems/factorial' },
        { name: "Prime Number", url: 'python/basic-problems/prime-number' },
        { name: "Perfect Number", url: 'python/basic-problems/perfect-number' },
        { name: "Strong Number", url: 'python/basic-problems/strong-number' },
        { name: "Fibonacci Series", url: 'python/basic-problems/fibonacci-series' },
        { name: "Automorphic Number", url: 'python/basic-problems/automorphic-number' },
        { name: "Weighted Sum of Digits", url: 'python/basic-problems/weighted-sum' },
        { name: "Type Conversions", url: 'python/basic-problems/type-conversions' },
        { name: "Ascii-Values", url: 'python/basic-problems/ascii-values' },

      ],
    },
    {
      name: "Patterns",
      lessons: [
        { name: "Pattern-1", url: 'python/pattrens/py-pattern-one' },
        { name: "Pattern-2", url: 'python/pattrens/py-pattern-two' },
        { name: "Pattern-3", url: 'python/pattrens/py-pattern-three' },
        { name: "Pattern-4", url: 'python/pattrens/py-pattern-four' },
        { name: "Pattern-5", url: 'python/pattrens/py-pattern-five' },
        { name: "Pattern-6", url: 'python/pattrens/py-pattern-six' },
        { name: "Pattern-7", url: 'python/pattrens/py-pattern-seven' },
        { name: "Pattern-8", url: 'python/pattrens/py-pattern-eight' },
        { name: "Pattern-9", url: 'python/pattrens/py-pattern-nine' },
        { name: "Pattern-10", url: 'python/pattrens/py-pattern-ten' },
        { name: "Pattern-11", url: 'python/pattrens/py-pattern-eleven' },
        { name: "Pattern-12", url: 'python/pattrens/py-pattern-twelve' },
        { name: "Pattern-13", url: 'python/pattrens/py-pattern-thirteen' },
        { name: "Pattern-14", url: 'python/pattrens/py-pattern-fourteen' },
        { name: "Pattern-15", url: 'python/pattrens/py-pattern-fifteen' }
      ],
    },
    {
      name: "Functions",
      lessons: [
        { name: "Introduction", url: 'python/function/function-intro' },
        { name: "Pattern", url: 'python/function/pattern' },
        { name: "Pattern1", url: 'python/function/pattern1' },
        { name: "Reverse Number", url: 'python/function/reverse-number' },
        { name: "Prime Number", url: 'python/function/prime-number' },
        { name: "Swap 2 numbers", url: 'python/function/swap-number' },

      ],
    },
    {
      name: "Lists Tuples Sets Dictionaries",
      lessons: [
        { name: "Introduction", url: 'python/lists-tuples-dictionaries/lists-intro' },
        { name: "key occurance in array", url: 'python/lists-tuples-dictionaries/key-occurance' },
        { name: "sorting an array", url: 'python/lists-tuples-dictionaries/sort-array' },
        { name: "moving negative elements to one side", url: 'python/lists-tuples-dictionaries/negative-elements' },
        { name: "2 sorted arrays union & interaction", url: 'python/lists-tuples-dictionaries/union-insertion-array' },
        { name: "count pair", url: 'python/lists-tuples-dictionaries/count-pairs' },
        { name: "max subarray sum", url: 'python/lists-tuples-dictionaries/max-subarray-sum' },
        { name: "List Tuples in different ways", url: 'python/lists-tuples-dictionaries/tuples-elements' },
        { name: "Number Frequency(tuple)", url: 'python/lists-tuples-dictionaries/frequency-tuple' },
        { name: "Vowel count(set)", url: 'python/lists-tuples-dictionaries/vowels-count' },
        { name: "Character present in string(set)", url: 'python/lists-tuples-dictionaries/char-vowel' },
        { name: "common elements between 3 lists", url: 'python/lists-tuples-dictionaries/common-elements' },
        { name: "Number occurence(dictionaries)", url: 'python/lists-tuples-dictionaries/each-nooccurance' },
        { name: "Character occurence(dictionaries)", url: 'python/lists-tuples-dictionaries/char-occur-string' },
        { name: "Repeated Character(dictionaries)", url: 'python/lists-tuples-dictionaries/repeated-char' },
        { name: "Repeated Number(dictionaries)", url: 'python/lists-tuples-dictionaries/repeated-number' },
        { name: "Unique Number(dictionaries)", url: 'python/lists-tuples-dictionaries/unique-number' },
        { name: "Unique Number Sum(dictionaries)", url: 'python/lists-tuples-dictionaries/unique-nosum' },
        { name: "Duplicate Character(dictionaries)", url: 'python/lists-tuples-dictionaries/duplicate-char' },
        { name: "Longest String(dictionaries)", url: 'python/lists-tuples-dictionaries/longest-string' },
        // { name: "", url: 'python/lists-tuples-dictionaries/' },

      ],
    },

    {
      name: "*args-**kwargs",
      lessons: [
        { name: "Introduction", url: 'python/args-kwargs/args-kwargs-intro' }
      ],
    },
   
    {
      name: "Decorators",
      lessons: [
        { name: "Introduction", url: 'python/decorators/decorators-intro' },
        { name: "Logging Decorator", url: 'python/decorators/logging-decorator' },
        { name: "Timer Decorator", url: 'python/decorators/timer-decorator' },
        { name: "Authentication Decorator", url: 'python/decorators/authentication-decorator' },
      ],
    },
    
    {
      name: "Debugging python code",
      lessons: [

        { name: "Introduction", url: 'python/debuging-code/debugingcode-intro' },
        { name: "Debug with Vscode", url: 'python/debuging-code/debug-with-vscode' }
      ],
    },
    
    {
      name: "Modules",
      lessons: [
        { name: "Introduction", url: 'python/modules/modules-intro' },
        { name: "Built in Modules", url: 'python/modules/built-in-modules' },
        { name: "Custom Modules", url: 'python/modules/custom-modules' },
        { name: "Third Party Modules", url: 'python/modules/thirdparty-modules' },
      ],
    },

    {
      name: "Dunder/Magic methods",
      lessons: [
        { name: "Introduction", url: 'python/dunder-magic-methods/dunder-intro' },
        { name: "Car Class Example", url: 'python/dunder-magic-methods/car-class' },
        { name: "PlayList Class Example", url: 'python/dunder-magic-methods/playlist-class' },
        { name: "Point Class Example", url: 'python/dunder-magic-methods/point-class' },
      ],
    },

    {
      name: "Object Oriented Programming Concepts",
      lessons: [

        { name: "Introduction", url: 'python/object-oriented-programming-concepts/oops-intro' },
        { name: "Student Class", url: 'python/object-oriented-programming-concepts/student'},
        { name: "Employe Class", url: 'python/object-oriented-programming-concepts/employe' },
        { name: "Inheritance", url: 'python/object-oriented-programming-concepts/inheritance' },
        { name: "Multilevel Example", url: 'python/object-oriented-programming-concepts/interestcalculator' },
        { name: "Hiraricy Example", url: 'python/object-oriented-programming-concepts/employe-inheritance' },
      ],
    },
    
    {
      name: "Exception Handling",
      lessons: [
        { name: "Introduction", url: 'python/exception-handling/handling-intro' }
      ],
    },

    {
      name: "File handling",
      lessons: [
        { name: "Introduction", url: 'python/file-handling/filehandling-intro' },
        { name: "Read and Write in File", url: 'python/file-handling/file-read-write' },
        { name: "Read and Append in File", url: 'python/file-handling/file-read-append' },
        { name: "Exception Handling with Files", url: 'python/file-handling/file-exception-handling' },
      ],
    },

    {
      name: "Web Scraping",
      lessons: [
        { name: "Introduction", url: 'python/web-scraping/scraping-intro' },
        { name: "Webscraping Examples", url: 'python/web-scraping/webscraping-examples' },
      ],
    },
    {
      name: "Intro to Mathematical analysis (Numpy and Pandas)",
      lessons: [
        { name: "Numpy Introduction", url: 'python/mathematical-analysis-intro/numpy-intro' },
        { name: "Numpy Examples", url: 'python/mathematical-analysis-intro/numpy-examples' },
        { name: "Pandas Introduction", url: 'python/mathematical-analysis-intro/pandas-intro' },
        { name: "Pandas Examples", url: 'python/mathematical-analysis-intro/pandas-examples' },
      ],
    },

  ];

}
