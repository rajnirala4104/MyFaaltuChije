
#output should -> 7,1,6,2,5,3,4
arr = [1,2,3,4,5,6,7]

for i in arr:
    theValue = arr[len(arr)-1]*arr[len(arr)-2]+arr[0]
    print(theValue%arr[len(arr)-1])