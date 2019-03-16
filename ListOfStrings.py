def match_ends(words):
  # Your code here
  count = 0
  # word_length = []
  for x in words:
    if(len(x) >= 2 and x[0] == x[len(x) - 1]):
      count += 1
      print(count)
  return count
  
    # word_length.append(len(x))
    
    # print(word_length)
    
    # if (len(words[x + 1]) >= words[x]):
match_ends(["Vance", "eRenee", "travel", "gooooog"]);
