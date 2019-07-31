# Find Three Largest Numbers
# Write a function that takes an array of integers and returns a sorted 3-element array of the
# three largest integers in the input array
 
arr = [10, 5, 9, 10, 12]

def shift_and_update(arr, n, i):
  # we need to shift that number over to the left
  for x in range(i + 1):
    if x == i:
      arr[x] = n
    else:
      arr[x] = arr[x + 1]
    # need to also handle the case where there is already a number to the left 
  # if there isn't, then we can just put the number in this spot 

def update_three_nums(arr, n):
  # figures out if the n parameter belongs in the arr 
  # if n > arr[2], then it should replace whatever is at arr[2]
  if arr[2] is None or n > arr[2]:
    # if there is already a number at this spot, we need to shift it over to the left 
    shift_and_update(arr, n, 2)
  # else if n > arr[1], then it should replace whatever is at arr[1]
  elif arr[1] is None or n > arr[1]:
    # if there is already a number at this spot, we need to shift it over to the left 
    shift_and_update(arr, n, 1)
  # else if n > arr[0], then it should replace whatever is at arr[0]
  elif arr[0] is None or n > arr[0]:
    # if there is already a number at this spot, we need to shift it over to the left 
    shift_and_update(arr, n, 0)

def find_three_largest(arr):
  # need to return a three-element array with the three largest elems in ascending order 
  three_nums = [None, None, None]
  # loop through arr
  for n in arr:
    # for each num, check to see if it belongs in the three_nums array 
    # if it is, we'll then need to figure out where in the three_nums array it belongs 
    update_three_nums(three_nums, n)
  # return the three_nums array
  return three_nums 

print(find_three_largest(arr))