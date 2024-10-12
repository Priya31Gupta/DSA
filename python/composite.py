#Write a Python program that finds the numbers between 1000 and 2700, that are divisible by 7 and are also multiples of 5.

for x in range(1000,2700):
    if x%7==0 and x%5==0:
        print(x,end=' ')
    else:
        pass
print('\ndone')