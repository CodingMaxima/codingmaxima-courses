import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreeVersionMapData {
  readonly chapters = [
    {
      name: "Free Java",
      lessons: [
        {name:"Even or Odd", url:"free-version/free-java/free-even-or-odd"},
        {name:"Reverse of Number", url:"free-version/free-java/free-reverse-number"},
        {name:"Prime Number", url:"free-version/free-java/free-prime-number"},
        {name:"Pattern-3", url:"free-version/free-java/free-pattern3"},
        {name:"Method working", url:"free-version/free-java/free-method-working"},
        {name:"Find Element In Array", url:"free-version/free-java/free-find-element-array"},
        {name:"Second Max In Array", url:"free-version/free-java/free-find-secondmax-array"},
        {name:"String Pool Memory", url:"free-version/free-java/free-string-poolmemory"},
        {name:"Vowel Count", url:"free-version/free-java/free-vowel-count"},
        {name:"Number Occurance Hashmap", url:"free-version/free-java/free-number-occurance-hashmap"},
        {name:"Class And Object", url:"free-version/free-java/free-class-object"},
        {name:"Pojo Class", url:"free-version/free-java/free-pojo-class"},
        {name:"Class-relations", url:"free-version/free-java/free-class-relation"},
        {name:"Exceptions", url:"free-version/free-java/free-exceptions"},
        {name:"Multi Threading", url:"free-version/free-java/free-multi-threading"}
      ],
    },
    {
      name: "Free My Sql",
      lessons: [
        {name:"Data-types", url: 'free-version/free-my-sql/free-datatypes'},
        {name:" Database",   url: 'free-version/free-my-sql/free-database '},
        { name:"Create Table",   url: 'free-version/free-my-sql/free-create-table'},
        { name:"Alter-Drop",   url: 'free-version/free-my-sql/free-alter-drop' },
        { name:"Insert Query",   url: 'free-version/free-my-sql/free-insert' },
        { name:"Select Query",   url: 'free-version/free-my-sql/free-select-query' },
        { name:"Constraints",   url: 'free-version/free-my-sql/free-consraints' },
        { name:"Update-delete",   url: 'free-version/free-my-sql/free-update-delete'},
        { name:"Aggregate Functions",   url: 'free-version/free-my-sql/free-aggregate' },
        { name:"Operators",   url: 'free-version/free-my-sql/free-operators' },
        { name:"Groupby-having",   url: 'free-version/free-my-sql/free-groupby-having' },
        { name:"Others",   url: 'free-version/free-my-sql/free-others' }
        
      ],
    },
    {
      name: "Free Python",
      lessons: [
        { name:"Even or Odd", url:"free-version/free-python/free-py-even-or-odd"},
        { name:"Smaller Number", url:"free-version/free-python/free-py-smaller-number"},
        { name:"Reverse of Number", url:"free-version/free-python/free-py-reverse-of-number"},
        { name:"Factorial", url:"free-version/free-python/free-py-factorial"},
        { name:"Pattern 4", url:"free-version/free-python/free-py-pattern4"},
        { name:"Pattern 11", url:"free-version/free-python/free-py-pattern11"},
        { name:"Key Occurance in Array", url:"free-version/free-python/free-py-key-occurance-in-array"},
        { name:"Vowel Count(set)", url:"free-version/free-python/free-py-vowel-count"},
        { name:"Number Occurance(Dictionaries)", url:"free-version/free-python/free-py-number-occurance"},
        { name:"Student Class", url:"free-version/free-python/free-py-student-class"}

      ],
    },
    {
      name: "Free JavaScript",
      lessons: [
        {name:"Even or Odd", url:"free-version/free-javascript/free-js-even-or-odd"},
        {name:"Reverse of Number", url:"free-version/free-javascript/free-js-reverse-of-number"},
        {name:"Pattern 1", url:"free-version/free-javascript/free-js-pattern1"},
        {name:"Pattern 2", url:"free-version/free-javascript/free-js-pattern2"},
        {name:"Pattern 5", url:"free-version/free-javascript/free-js-pattern5"},
        {name:"Kg/Pound Project", url:"free-version/free-javascript/free-js-kg-pound-project"},
        {name:"Random Quote Project", url:"free-version/free-javascript/free-js-random-quote-project"}

      ],
    }   
  ];
  
}
