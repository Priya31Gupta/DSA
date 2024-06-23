
a=12
b=10
 
if [ $a -eq $b ]
then
   echo " equal "
else
   echo " not equal "
fi
 
if [ $a -ne $b ]
then
   echo "[$a -ne $b]: The condition passed as a is not equal to b"
else
   echo "[$a -ne $b]: The condition failed as a is equal to b"
fi
 
if [ $a -gt $b ]
then
   echo "[$a -gt $b]: The condition passed as a is greater than b"
else
   echo "[$a -gt $b]: The condition failed as a is not greater than b"
fi
 
if [ $a -lt $b ]
then
   echo "[$a -lt $b]: The condition passed as a is less than b"
else
   echo "[$a -lt $b]: The condition failed as a is not less than b"
fi
 
if [ $a -ge $b ]
then
   echo "[$a -ge $b]: The condition passed as a is greater than or  equal to b"
else
   echo "[$a -ge $b]: The condition failed as a is not greater than or equal to b"
fi
 
if [ $a -le $b ]
then
   echo "[$a -le $b]: The condition passed as a is less than or  equal to b"
else
   echo "[$a -le $b]: The condition failed as a is not less than or equal to b"
fi
 