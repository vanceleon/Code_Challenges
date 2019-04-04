def get_sum(a,b):
    diff = 0
    nums = []
    solution = 0
    if a == b: 
        return a
    if a < b:
        nums.append(a)
        diff = b - a
#         diff = abs(diff)
        while diff != 0:
            a += 1
            nums.append(a)
            diff -= 1
    if b < a: 
        nums.append(b)
        diff = a - b
#         diff = abs(diff)
        while diff != 0:
            b += 1
            nums.append(b)
            diff -= 1
    
    for x in nums: 
        solution += x
        # print(solution)
    return solution
    
    #good luck!


get_sum(9, 4)