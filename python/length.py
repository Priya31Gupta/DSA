str=input("Enter the alphanumeric string")
num=0
char=0
for letter in str:
    if letter.isdigit():
        num +=1
    elif letter.isalpha():
        char+=1
print(f"numbers are {num} and characters are {char}")
