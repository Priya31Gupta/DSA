num1=30
num2=20

sum=`expr $num1 + $num2`
echo "sum:"
echo $sum

sub=`expr $num1 - $num2`
echo $sub

mul=`expr $num1 \* $num2`
echo $mul

div=`expr $num1 / $num2`
echo $div

mod=`expr $num1 % $num2`
echo $mod