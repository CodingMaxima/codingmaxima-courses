import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ChangecoinComponent } from './changecoin/changecoin.component';
import { NcrComponent } from './ncr/ncr.component';
import { LongestCommonSubsequenceComponent } from './longest-common-subsequence/longest-common-subsequence.component';
import { KnapsackProblem01Component } from './knapsack-problem01/knapsack-problem01.component';
import { LongestIncreasingSubsequenceComponent } from './longest-increasing-subsequence/longest-increasing-subsequence.component';
import { LongestPalindromeComponent } from './longest-palindrome/longest-palindrome.component';
import { MaximumProductSubarrayComponent } from './maximum-product-subarray/maximum-product-subarray.component';
import { NthFibonacciNumberComponent } from './nth-fibonacci-number/nth-fibonacci-number.component';
import { NumbercoinsComponent } from './numbercoins/numbercoins.component';
import { PartitionEqualSubsetSumComponent } from './partition-equal-subset-sum/partition-equal-subset-sum.component';
import { SubsetSumProblemComponent } from './subset-sum-problem/subset-sum-problem.component';



@NgModule({
  declarations: [
    
    ChangecoinComponent,
    NcrComponent,
    LongestCommonSubsequenceComponent,
    KnapsackProblem01Component,
    LongestIncreasingSubsequenceComponent,
    LongestPalindromeComponent,
    MaximumProductSubarrayComponent,
    NthFibonacciNumberComponent,
    NumbercoinsComponent,
    PartitionEqualSubsetSumComponent,
    SubsetSumProblemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/dynamic-programming/changecoin", component:ChangecoinComponent},
      {path:"ds-algo/dynamic-programming/ncr", component:NcrComponent},
      {path:"ds-algo/dynamic-programming/longest-common-subsequence", component:LongestCommonSubsequenceComponent},
      {path:"ds-algo/dynamic-programming/knapsackProblem01", component:KnapsackProblem01Component},
      {path:"ds-algo/dynamic-programming/longest-increasing-subsequence", component:LongestIncreasingSubsequenceComponent},
      {path:"ds-algo/dynamic-programming/longest-palindrome", component:LongestPalindromeComponent},
      {path:"ds-algo/dynamic-programming/maximum-product-subarray", component:MaximumProductSubarrayComponent},
      {path:"ds-algo/dynamic-programming/nth-fibonacci-number", component:NthFibonacciNumberComponent},
      {path:"ds-algo/dynamic-programming/numbercoins", component:NumbercoinsComponent},
      {path:"ds-algo/dynamic-programming/partition-equal-subset-sum", component:PartitionEqualSubsetSumComponent},
      {path:"ds-algo/dynamic-programming/subset-sum-problem", component:SubsetSumProblemComponent},
      
      
      
    ])
   ]
})
export class DynamicProgrammingModule { }
