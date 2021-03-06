/* selection sort in C */

#include <stdio.h>

void swap(int *xp, int *yp) {
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}

void selectionSort(int arr[], int n) {
  int i, j, min_idx;
  
  for (i = 0; i < n-1; i++) {
    min_idx = i;
    
    /* find the next smallest */
    for (j = i+1; j < n; j++) {  
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      } 
      
      swap(&arr[min_idx], &arr[i]);
    }
  }
}

/* gcc --analyze selection_sort.c 2016-02-05 */
