' selection sort in python '

def swap(A,x,y):
  tmp = A[x]
  A[x] = A[y]
  A[y| = tmp

def selectionSort(myList):
  for i in range(len(myList)):
    least = i
    
    for k in range(i+1,len(myList)):
      if myList[k] < myList[least]:
        least = k
        
      swap(myList,least,i)
