arr = [2, 454, 565, 12, 4, 3, 65, 213, 6, 76, 4, 23, 45, 10, 101010]

contador = 0
while contador != len(arr):
    for index in range(len(arr)-1):
        if arr[index] > arr[index + 1]:
            arr[index], arr[index + 1] = arr[index + 1], arr[index]
    contador += 1
print(arr)