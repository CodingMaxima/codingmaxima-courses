import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreJavaMapData {
  readonly chapters = [
    {
      name: "Introduction",
      lessons: [
        { name: "Java Installation", url: "core-java/intro/install" },
        { name: "Introduction", url: "core-java/intro/introduction" },
        { name: "Data Types", url: "core-java/intro/datatypes" },
        { name: "Arithmetic Operators", url: "core-java/intro/arthmatic" },
        { name: "Relational Operators", url: "core-java/intro/relational" },
        { name: "Logical Operators", url: "core-java/intro/logical" },
        { name: "Assignment Operators", url: "core-java/intro/assignment" },
        { name: "Control Statements", url: "core-java/intro/control" },
        { name: "Flow/Iterative Statements", url: "core-java/intro/flow" },
        { name: "Reading Input", url: "core-java/intro/readinput" }
      ],
    },
    {
      name:"Loops",
      lessons: [
        {name:"Question-1", url:"core-java/loops/loopquestion1"},
        {name:"Question-2", url:"core-java/loops/loopquestion2"},
        {name:"Question-3", url:"core-java/loops/loopquestion3"},
        {name:"Question-4", url:"core-java/loops/loopquestion4"},
        {name:"Question-5", url:"core-java/loops/loopquestion5"},
        {name:"Question-6", url:"core-java/loops/loopquestion6"},
        {name:"Question-7", url:"core-java/loops/loopquestion7"},
        {name:"Question-8", url:"core-java/loops/loopquestion8"},
        {name:"Question-9", url:"core-java/loops/loopquestion9"},
        {name:"Question-10", url:"core-java/loops/loopquestion10"},

      ]
    },
    {
      name: "Basic Problems",
      lessons: [
        { name: "Even or Odd", url: "core-java/basic_program/Even_or_Odd" },
        { name: "Smaller Number", url: "core-java/basic_program/smaller_number" },
        { name: "Greater Number", url: "core-java/basic_program/grater_number" },
        { name: "Swap of Two Numbers", url: "core-java/basic_program/swaptwonumbers"},
        { name: "Reverse of Number", url: "core-java/basic_program/Reverse_of_number" },
        { name: "Palindrome", url: "core-java/basic_program/Palindrome" },
        { name: "Armstrong Number", url: "core-java/basic_program/Armstrong_number" },
        { name: "Neon Number", url: "core-java/basic_program/Neon_number" },
        { name: "SPY Number", url: "core-java/basic_program/SPY_number" },
        { name: "Factorial", url: "core-java/basic_program/Factorial" },
        { name: "Strong Number", url: "core-java/basic_program/Strong_Number" },
        { name: "Prime Number", url: "core-java/basic_program/Prime_number" },
        { name: "Perfect Number", url: "core-java/basic_program/Perfect_number" },
        { name: "Fibonacci Series", url: "core-java/basic_program/Fibonacci_Series" },
        { name: "Automorphic Number", url: "core-java/basic_program/Automorphic_number" },
        { name: "Trimorphic Number", url: "core-java/basic_program/Trimorphic_Number" },
        { name: "Weighted Sum of Digits", url: "core-java/basic_program/Weighted_Sum_of_Digits" },
        { name: "Type Conversion", url: "core-java/basic_program/typeconversion" },
        { name: "Sunny Number", url: "core-java/basic_program/Sunny_Number" },
        { name: "ASCII Values", url: "core-java/basic_program/ascii" }],
    },
    {
      name: "Patterns",
      lessons: [

        { name: "Pattern 1", url: "core-java/pattren/pattren1" },
        { name: "Pattern 2", url: "core-java/pattren/pattren2" },
        { name: "Pattern 3", url: "core-java/pattren/pattren3" },
        { name: "Pattern 4", url: "core-java/pattren/pattren4" },
        { name: "Pattern 5", url: "core-java/pattren/pattren5" },
        { name: "Pattern 6", url: "core-java/pattren/pattren6" },
        { name: "Pattern 7", url: "core-java/pattren/pattren7" },
        { name: "Pattern 8", url: "core-java/pattren/pattren8" },
        { name: "Pattern 9", url: "core-java/pattren/pattren9" },
        { name: "Pattern 10", url: "core-java/pattren/pattren10" },
        { name: "Pattern 11", url: "core-java/pattren/pattren11" },
        { name: "Pattern 12", url: "core-java/pattren/pattren12" },
        { name: "Pattern 13", url: "core-java/pattren/pattren13" },
        { name: "Pattern 14", url: "core-java/pattren/pattren14" },
        { name: "Pattern 15", url: "core-java/pattren/pattren15" },
        { name: "Pattern 16", url: "core-java/pattren/pattren16" },
      ],
    },
    {
      name: "Methods",
      lessons: [

        { name: "Introduction", url: "core-java/methods/introduction" },
        { name: "Example", url: "core-java/methods/example" },
        { name: "EvenOdd(Method)", url: "core-java/methods/evenoddmethod" },
        { name: "Reverse of Number(Method)", url: "core-java/methods/revnumbermethod" },
        { name: "Palindrom or not(Method)", url: "core-java/methods/palindromemethod" },
        { name: "Method Overloading", url: "core-java/methods/methodoverloading" }
      ],
    },
    {
      name: "Arrays",
      lessons: [

        { name: "Introduction", url: "core-java/arrays/introductionarray" },
        /* {name:"Static Array",url: "core-java/arrays/static"},
         {name:"Dynamic Array",url: "core-java/arrays/dynamic"},*/
        { name: "All Arrays", url: "core-java/arrays/readandprint" },
        { name: "Find Element", url: "core-java/arrays/findelement" },
        { name: "Key Count", url: "core-java/arrays/keycount" },
        { name: "Find Key Positions", url: "core-java/arrays/findkeypositions" },
        { name: "Max of Array", url: "core-java/arrays/maxofarray" },
        { name: "Min of Array", url: "core-java/arrays/minofarray" },
        { name: "Reverse of Array", url: "core-java/arrays/reverseofarray" },
        { name: "Second Max", url: "core-java/arrays/secondmax" },
        { name: "Count Primes in Array", url: "core-java/arrays/countprimes" },
        { name: "Reverse Each Element", url: "core-java/arrays/reverseeachelement" },
        { name: "Exclude Value", url: "core-java/arrays/excludenumber" },
        { name: "Each Number Count", url: "core-java/arrays/eachnumbercount" },
        { name: "Number of Pairs", url: "core-java/arrays/numberofpairs" },
        { name: "Super Array", url: "core-java/arrays/superarray" },
        { name: "Sorting An Array", url: "core-java/arrays/sortingarray" }

      ],
    },

    {
      name: "Strings",
      lessons: [
        { name: "Wrapper classes", url: "core-java/strings/wrapperclasses" },
        { name: "Introduction", url: "core-java/strings/stringintro" },
        { name: "String Pool Memory", url: "core-java/strings/stringpool" },
        { name: "Different Strings", url: "core-java/strings/diffstrings" },
        { name: "Find Letter", url: "core-java/strings/findletter" },
        { name: "Reverse Of String", url: "core-java/strings/reverse" },
        { name: "Palindrome", url: "core-java/strings/palindromestring" },
        { name: "Swap First Last Letters", url: "core-java/strings/swapfirstlast" },
        { name: "Vowels Count", url: "core-java/strings/vowels" },
        { name: "Vowel and Consonents Count", url: "core-java/strings/vowelsconsonents" },
        { name: "Different Characters", url: "core-java/strings/diffchars" },
        { name: "Special String", url: "core-java/strings/specialstring" }
      ],
    },

    {
      name: "Collections",
      lessons: [

        { name: "ArrayList Introduction", url: "core-java/collections/arraylistintro" },
        { name: "Find Value", url: "core-java/collections/findele" },
        { name: "Find String", url: "core-java/collections/strings" },
        { name: "Min Value", url: "core-java/collections/min" },
        { name: "Max Value", url: "core-java/collections/max" },
        { name: "Reverse", url: "core-java/collections/reverse" },
        { name: "Second Max", url: "core-java/collections/secondmax" },
        { name: "HashSet Introduction", url: "core-java/collections/hashsetintro" },
        { name: "All Strings(Unique)", url: "core-java/collections/uniquestring" },
        { name: "All Numbers(Unique)", url: "core-java/collections/uniquenumbers" },
      ],
    },
    {
      name: "Hash Map",
      lessons: [
        { name: "Introduction", url: "core-java/hashmap/introduction" },
        { name: "Read & Print", url: "core-java/hashmap/readandprint" },
        { name: "Number Occurrence", url: "core-java/hashmap/numberoccurance" },
        { name: "Most Occurrence Number", url: "core-java/hashmap/mostoccurancenumber" },
        { name: "Character Occurrence", url: "core-java/hashmap/charoccurance" },
        { name: "Most Occurrence Character", url: "core-java/hashmap/mostoccurancechar" },
        { name: "Duplicate Characters", url: "core-java/hashmap/duplicatechars" },
        { name: "Most Occurrence String", url: "core-java/hashmap/mostoccurancestring" },
        { name: "Longest String", url: "core-java/hashmap/longeststring" },
        { name: "Unique Numbers", url: "core-java/hashmap/getuniquenumber" },
        { name: "Unique Numbers Sum", url: "core-java/hashmap/uniquenumbersum" }
      ],
    },

    {
      name: "Multi Dimension Arrays & Collections",
      lessons: [
        { name: "Mutidimension Array Introduction", url: "core-java/multi/multiintro" },
        { name: "Matrix Addtion", url: "core-java/multi/matrixaddtion" },
        { name: "Matrix Subtraction", url: "core-java/multi/matrixsubtraction" },
        { name: "Matrix Multiplication", url: "core-java/multi/matrixmultiplication" },
        { name: "Diagonal Sum of Matrix", url: "core-java/multi/diognalsum" },
        { name: "Multidimension ArrayList", url: "core-java/multi/multiarraylist" },
        { name: "HashMap in the ArrayList", url: "core-java/multi/listwithmap" },
        { name: "ArrayList in the HashMap", url: "core-java/multi/mapwithlist" }
      ],
    },

    {
      name: "others",
      lessons: [
        { name: "keywords", url: "core-java/others/keywords" },
        { name: "access specifiers", url: "core-java/others/access-specifiers" }
      ],
    },
    {
      name: "Classes & Objects",
      lessons: [
        { name: "Object & Class Into", url: "core-java/objectclass/classandobject" },
        { name: "toString method", url: "core-java/objectclass/tostring" },
        { name: "Student Class", url: "core-java/objectclass/student" },
        { name: "Employee Class", url: "core-java/objectclass/employee" },
        { name: "House Class", url: "core-java/objectclass/house" },
        { name: "Human Class", url: "core-java/objectclass/human" },
        { name: "City Class", url: "core-java/objectclass/city" }
      ],
    },

    {
      name: "Pojo Classes",
      lessons: [
        { name: "Constructors, Getters & Setters", url: "core-java/pojoclasses/intro" },
        { name: "equals & hashcode methods", url: "core-java/pojoclasses/equalhascode" },
        { name: "Student PojoClass", url: "core-java/pojoclasses/student" },
        { name: "City PojoClass", url: "core-java/pojoclasses/city" },
        { name: "House PojoClass", url: "core-java/pojoclasses/house" },
        { name: "Employee PojoClass", url: "core-java/pojoclasses/employee" },
        { name: "Human PojoClass", url: "core-java/pojoclasses/human" }
      ],
    },

    {
      name: "Classes Relations",
      lessons: [
        { name: "Student - Branch", url: "core-java/classesrelations/studentbranch" },
        { name: "User - Movies", url: "core-java/classesrelations/usermovie" },
        { name: "College - Branch", url: "core-java/classesrelations/collegebranch" },
        { name: "Employee - Designation", url: "core-java/classesrelations/employeedesgnation" },
        { name: "House - Room", url: "core-java/classesrelations/houseroom" },
        { name: "Apartment - Flat - Room", url: "core-java/classesrelations/aptflatroom" },
        { name: "District - City", url: "core-java/classesrelations/districtcity" },
      ],
    },
    {
      name: "Management Systems",
      lessons: [
        { name: "Student Branch Managment System", url: "core-java/managementsystem/stdbranchmng" },
        { name: "Employee Designation Managment System", url: "core-java/managementsystem/empdesgmng" },
        { name: "College Branch Managment System", url: "core-java/managementsystem/clgbranchmng" },
      ],
    },
    {
      name: "Object Oriented Concepts",
      lessons: [
        { name: "Introduction", url: "core-java/oops/introduction" },
        { name: "Project-1", url: "core-java/oops/project-one" },
        { name: "Project-2", url: "core-java/oops/project-two" },
        { name: "Project-3", url: "core-java/oops/project-three" },
        //{ name: "Project-4", url: "core-java/oops/project-four" },
        { name: "Abstract Class (VS) Interface", url: "core-java/oops/abstract-interface" },
        //{ name: "Multiple Inheritance", url: "core-java/oops/multipleinhertance" },

      ],
    },
    {
      name: "Exceptions",
      lessons: [
        { name: "Exceptions Introduction", url: "core-java/exceptions/exceptionintro" },
        { name: "Userdefined Exceptions", url: "core-java/exceptions/userdefined" }
      ],
    },
    {
      name: "File Handling",
      lessons: [
        //{ name: "Introduction", url: "core-java/file-handling/introduction" },
        
        { name: "Reading file", url: "core-java/file-handling/read-file" },
        { name: "Writing file", url: "core-java/file-handling/write-file" },
        { name: "Assignment", url: "core-java/file-handling/assignment" }
      ],
    },

    {
      name: "Multi Threading",
      lessons: [
        { name: "Introduction", url: "core-java/multi-threading/introduction" },
        { name: "Thread Life Cycle", url: "core-java/multi-threading/thread-life-cycle" },
        { name: "Syncronization", url: "core-java/multi-threading/syncronization" },
        { name: "Thread Methods", url: "core-java/multi-threading/thread-methods" },
        { name: "Inter Thread Communication", url: "core-java/multi-threading/inter-thread-communication" },
        { name: "Deadlock", url: "core-java/multi-threading/deadlock" }
      ],
    },

    {
      name: "Interview Questions",
      lessons: [
        { name: "Interview questions", url: "core-java/interview-questions/questions" }
      ],
    },

    {
      name: "Advance",
      lessons: [
        { name: "Comparator-Comparable", url: "core-java/advance/comparator-comparable" },
        { name: "linked-list", url: "core-java/advance/linkedlist" },
        { name: "Generic classes", url: "core-java/advance/generic-classes" },
        { name: "Java-8 features", url: "core-java/advance/java8" }
      ],
    }
  ];
}