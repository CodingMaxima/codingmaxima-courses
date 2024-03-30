import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DsAlgoMapData {

  readonly chapters = [
    {
      name: "Introduction",
      lessons: [
        { name: "", url: "" },
      ],
    },
    {
      name: "Arrays",
      lessons: [
        { name: "Maximum Sub Array Sum", url: "ds-algo/arrays/maxsubarraysum" },
        { name: "Container With Most Water", url: "ds-algo/arrays/containerwithmostwater" },
        { name: "Buy And sell", url: "ds-algo/arrays/buyandsell" },
        { name: "Find Dublicates in an Array", url: "ds-algo/arrays/finddublicates" },
        { name: "First Element to Occur K Times", url: "ds-algo/arrays/firstelementtooccurktimes" },
        { name: "Intersections Of Two Arrays", url: "ds-algo/arrays/intersectionoftwoarray" },
        { name: "Kadane`s Algorithm", url: "ds-algo/arrays/kadansalgo" },
        { name: "Longest Comman Prefix In An Array", url: "ds-algo/arrays/longestcomman" },
        { name: "Majority Element ", url: "ds-algo/arrays/majorityelement" },
        { name: "Missing Number in An Array", url: "ds-algo/arrays/missingnumber" },
        { name: "Trapping Rain Water", url: "ds-algo/arrays/trappingrain" },
        { name: "Product Array Puzzle", url: "ds-algo/arrays/productarrarpuzzle" },
        { name: "Spirally Traversing in Matrix", url: "ds-algo/arrays/spirallytraversing" },
        { name: "Subarray With Given Sum", url: "ds-algo/arrays/subarraygivensum" },
        { name: "Triplet Sum in Array", url: "ds-algo/arrays/tripletsum" },
        { name: "Remove Dublicate Element From Sorted Array", url: "ds-algo/arrays/removedublicates" },
        { name: "Kth Largest Element", url: "ds-algo/arrays/klargest" },
        

      ],
    },
    {
      name: "2DArrays",
      lessons: [
          { name: "", url: "" },
      ],
    },

    {
      name: "Searching",
      lessons: [
        { name: "", url: "" },
      ],
    },

    {
      name: "Sortings",
      lessons: [
        { name: "Anagram", url: "ds-algo/sortings/anagram" },
        { name: "Bubble Sort", url: "ds-algo/sortings/bubble" },
        { name: "Count the triplets", url: "ds-algo/sortings/counttriplet" },
        { name: "Find triplets with zero sum", url: "ds-algo/sortings/findtripletsum" },
        { name: "Heap Sort", url: "ds-algo/sortings/heapsort" },
        { name: "Insertion Sort.", url: "ds-algo/sortings/insertionsort" },
        { name: "Merge Sort", url: "ds-algo/sortings/mergesort" },
        { name: "Quick Sort.", url: "ds-algo/sortings/quicksort" },
        { name: "Sort an array of 0s, 1s and 2s", url: "ds-algo/sortings/sort1and2" },
        { name: "Wave Array", url: "ds-algo/sortings/wavearray" },
      ],
    },
    {
      name: "Stacks",
      lessons: [
        { name: "Get minimum element from stack", url: "ds-algo/stacks/getminimum" },
        { name: "Level order traversal in spiral form", url: "ds-algo/stacks/spirallevelorder" },
        { name: "Max rectangle(hard)", url: "ds-algo/stacks/maxrectangle" },
        { name: "Next Greater Element", url: "ds-algo/stacks/nextgreater" },
        { name: "Parenthesis Checker", url: "ds-algo/stacks/parenthesismacher" },
        { name: "Queue using two Stacks", url: "ds-algo/stacks/queuetwostack" },
        { name: "Sort a stack", url: "ds-algo/stacks/sortastack" },
        { name: "Special Stack", url: "ds-algo/stacks/specialstack" },
        { name: "Stack using two queues", url: "ds-algo/stacks/stackusingqueue" },
        { name: "Stock span problem", url: "ds-algo/stacks/stockspan" },
        { name: "The Celebrity Problem", url: "ds-algo/stacks/celebratypro" },
      ],
    },

    {
      name: "Queue",
      lessons: [
        { name: "Complete Binary Tree", url: "ds-algo/queue/completetree/completetree" },
        { name: "First non-repeating character in a stream", url: "ds-algo/queue/completetree/firstnonrepeatingchar" },
        { name: "IPL 2021 - Match Day 2", url: "ds-algo/queue/completetree/iplmatch2" },
        { name: "K-th Largest Sum Contiguous Subarray", url: "ds-algo/queue/completetree/kthlargestsum" },
        { name: "Maximum Diamonds", url: "ds-algo/queue/completetree/maximumdiamond" },
        { name: "Minimum Cost of ropes", url: "ds-algo/queue/completetree/maximumcostrope" },
        { name: "Operations on PriorityQueue", url: "ds-algo/queue/completetree/priorityqueue" },
        { name: "Print Binary Tree levels in sorted order", url: "ds-algo/queue/completetree/printinsortedorder" },
        { name: "Queue using stack", url: "ds-algo/queue/completetree/queuetostack" },
        { name: "Reverse First K elements of Queue", url: "ds-algo/queue/completetree/reversequeue" },
        
      ],
    },
    {
      name: "Linked List",
      lessons: [
        { name: "Add two numbers represented by linked lists", url:"ds-algo/graph/addtwonumber"  },
        { name: "Check if Linked List is Palindrome", url:"ds-algo/graph/ispalidrome"  },
        { name: "Detect Loop in linked list.", url:"ds-algo/graph/detectloop"  },
        { name: "Finding middle element in a linked list", url:"ds-algo/graph/middleelement"  },
        { name: "Intersection Point in Y Shaped Linked Lists", url:"ds-algo/graph/intersection"  },
        { name: "Nth node from end of linked list", url:"ds-algo/graph/endofnode"  },
        { name: "Remove duplicate element from sorted Linked List", url:"ds-algo/graph/sortedlist"  },
        { name: "Remove loop in Linked List", url:"ds-algo/graph/removeloop"  },  
        { name: "Reverse a Linked List in groups of given size", url:"ds-algo/graph/reverselist"  },
        { name: "Reverse a linked list", url:"ds-algo/graph/reverselist2"  },

      ],
    },
    {
      name: "Graphs",
      lessons: [
        { name: "BFS Of Graph", url:"ds-algo/linked-list/" },
        { name: "Bipartite Graph", url:"ds-algo/graph/bipartite-graph" },
        { name: "DFS of Graph", url:"ds-algo/graph/dfssofgraph" },
        { name: "Detect cycle in a directed graph", url:"ds-algo/graph/detectcycle" },
        { name: "Detect cycle in an undirected graph", url:"ds-algo/graph/detectcycleundirected" },
        { name: "Distance from the Source (Bellman-Ford Algorithm)", url:"ds-algo/graph/distancefromtheSource" },
        { name: "Minimum Spanning Tree", url:"ds-algo/graph/minimum-spanning-tree" },
        { name: "Topological sort", url:"ds-algo/graph/topologicalsort" },
        { name: "Word Boggle II", url:"ds-algo/graph/wordboggle" },
        { name: "Word Boggle", url:"ds-algo/graph/word-boggle" },
        { name: "Word Search", url:"ds-algo/graph/word-ssearch" },
      ],
    },

    {
      name: "Trees",
      lessons: [
        { name: "Array to BST", url: "ds-algo/trees/arrayto-bst" },
        { name: "Array Subset of another array", url: "ds-algo/trees/arraysubset" },
        { name: "Check for BST", url: "ds-algo/trees/checkforbst" },
        { name: "Delete a node from BST", url: "ds-algo/trees/deletebst" },
        { name: "Find a pair with given target in BST", url: "ds-algo/trees/targetinbst" },
        { name: "First and last occurrences of x", url: "ds-algo/trees/firstandlastoccurence" },
        { name: "Insert a node in a BST", url: "ds-algo/trees/insertinbst" },
        { name: "Largest BST", url: "ds-algo/trees/largestbst" },
        { name: "Lowest Common Ancestor in a BST", url: "ds-algo/trees/lowestcommanacester" },
        { name: "Preorder to PostOrder", url: "ds-algo/trees/pretopost" },
        { name: "Top View of Binary Tree", url: "ds-algo/trees/topviewoftree" },
        { name: "k-th smallest element in BST", url: "ds-algo/trees/kthsmallest" },
      ],
    },
    {
      name: "Dynamic Programming",
      lessons: [
        { name: "Coin Change", url: "ds-algo/dynamic-programming/changecoin" },
        { name: "nCr", url: "ds-algo/dynamic-programming/ncr" },
        { name: "Longest-Common-Subsequence", url: "ds-algo/dynamic-programming/longest-common-subsequence" },
        { name: "0 - 1 Knapsack Problem", url: "ds-algo/dynamic-programming/knapsackProblem01"},
        { name: "Longest Increasing Subsequence", url: "ds-algo/dynamic-programming/longest-increasing-subsequence"},
        { name: "Longest Palindrome in a String", url: "ds-algo/dynamic-programming/longest-palindrome"},
        { name: "Maximum Product Subarray", url: "ds-algo/dynamic-programming/maximum-product-subarray"},
        { name: "Nth Fibonacci Number", url: "ds-algo/dynamic-programming/nth-fibonacci-number"},
        { name: "Number of Coins", url: "ds-algo/dynamic-programming/numbercoins"},
        { name: "Partition Equal Subset Sum", url: "ds-algo/dynamic-programming/partition-equal-subset-sum"},
        { name: "Subset Sum Problem", url: "ds-algo/dynamic-programming/subset-sum-problem"},
        
      ],
    },

  ];

}
