#REMEMBER TO PSEUDOCODE
"""I want to first check if array already satisfies minsize requirements
if it meets minSize return array
else create a loop starting at array length and stoping minSize pushing
provided padded value
upon loop completion, return the modified list """
def pad(array, min_size, value = None):
    #list to be modified
    list1 = array
    #check to see if meets size requirements and returning if true
    if len(array) >= min_size:
        return array
    #else looping starting at lenght and stopping at min size appending value to list
    else:
        for x in range (len(array), min_size, 1):
            list1.append(value)
    #finally returning mutated list
    return list1