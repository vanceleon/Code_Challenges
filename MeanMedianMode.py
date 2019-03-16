

    # define a dictionary / 
    # set variables to dictionary /
    # have three loops testing for median, mean, mode 
    # each loop will have the cal
    # return the dictionary

def meanMedianMode(numbers):
  mean = 0
  median = 0
  mode = 0 
  n = len(numbers)
  sortedList = sorted(numbers)
  
  # mean
  total = 0
  for num in numbers: 
    total += num
  mean = total/len(numbers)
  print(mean)
  
  # median
  # print(sortedList)
  index = (n - 1) // 2
  if n < 1:
    print(None)
  else:
    median = sortedList[index]

  
  # mode 
  sameNum = []
  count = 0
  maxCount = 0 
  loopCount = 0
  
  # print("index 0 sorted List", sortedList[0])
  
  # loop through the sorted List
  print("first count", count)
  print("sortedList",sortedList)
  for i in sortedList:
  # identify same numbers
    try:
      print("each iteration", loopCount)
      # print("match numbers", i, i + 1)
      if sortedList[loopCount] == sortedList[loopCount + 1]:
  # count how many numbers there are
        print("matching", count)
        if count == 0: 
          print("first count",count)
          sameNum.insert(0, sortedList[loopCount])
          sameNum.insert(1, sortedList[loopCount + 1])
          print("first additions to sameNUm",sameNum)
          
          count = 2   
          print("count 2", count)
        else:
          print("testin this else")
          count += 1
          print("counting match",count)
          sameNum.append(sortedList[loopCount + 1])
          print("true test", sameNum)
      else: 
  # store that in a maxCount variable
        print("count VS maxCount", count, maxCount)
        if count > maxCount: 
          print("final count",count)
          maxCount = count
          print("setting maxCount", maxCount)
          mode = sameNum[0]
          print("setting mode", mode)
  # if next variable is not similar then clear sameNum array
          sameNum.clear()
          if sameNum != None: 
            break
          else:
            
            print("clearing sameNUm array", sameNum)
            count = 0
            print("reseting count", count )

      loopCount += 1
    except: 
      
      print("count VS maxCount", count, maxCount)
      if count > maxCount: 
        print("final count",count)
        maxCount = count
        print("setting maxCount", maxCount)
        mode = sameNum[0]
        print("setting mode", mode)
# if next variable is not similar then clear sameNum array
        sameNum.clear()
        print("clearing sameNUm array", sameNum)
        count = 0
      else:
        break
      
  mmm_dict = {
    "mean": mean,
    "median": median,
    "mode": mode
  }
  return mmm_dict
print(meanMedianMode([
  951, 219, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
  615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941,
  386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
  399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
  815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717,
  958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470,
  743, 527
]))