#include <stdio.h>
 
void insertionSort(int arr[], int n)
{
  // declare current variable
  int currentVar;
  // loop through array starting at the second index
  for(int i = 1; i < n; i++) {
    currentVar = arr[i];
    int j = i - 1; 
    while (j >= 0 && arr[j] > currentVar){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = currentVar;
  }
  // set current val to arr[i]
  
  // loop through arr with j = i - 1
  
  // set j+1 = arr[j]
  // set j+1 = current value
  
  // return arr;
  // printArray(arr,n);
  
  
}
 
void printArray(int arr[], int n)
{
  for (int i = 0; i < n; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr)/sizeof(arr[0]);
 
  insertionSort(arr, n);
  printArray(arr, n);
 
  return 0;
}