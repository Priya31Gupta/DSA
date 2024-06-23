


if [[$num1 -ge $num2 && $num1 -ge $num3]]; then 
    result=$num1
elif [[$num2 -ge $num1 && $num2 -ge $num3]]; then 
    result=$num2
else [[$num3 -ge $num2 && $num3 -ge $num1]]; then 
    result=$num3
fi
# Display the result
echo "$result"


# Read input from user
read -p "Enter a number: " num1
read -p "Enter a number: " num2
read -p "Enter a number: " num3

# Find the greatest number using logical operators
if [[ $num1 -ge $num2 && $num1 -ge $num3 ]]; then
    greatest=$num1
elif [[ $num2 -ge $num1 && $num2 -ge $num3 ]]; then
    greatest=$num2
else
    greatest=$num3
fi

# Display the greatest number
echo "$greatest"
