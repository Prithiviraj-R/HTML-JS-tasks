function sumOfDigits(startLimit)
{
    var startLimit=startLimit;
    var digit=0;
    var sum=0;
    var add=0;
    if(Math.trunc(startLimit/10)==0)
    {
      return startLimit;
    }
    else
    {
    while(startLimit/10>0)
    {
      digit=startLimit%10;
      console.log(digit);
      sum=sum+digit;
      startLimit=Math.trunc(startLimit/10);
    }
    if(Math.trunc(sum/10)==0)
    {
      return sum;
    }
    else
    {
      // while(sum/10>0)
      // {
      // digit=sum%10;
      // console.log(digit);
      // add=add+digit;
      // sum=Math.trunc(sum/10);
      // }
      // return add;
      return (sum%10+sumOfDigits(sum/10));
    }
  }
}
function trapSequence(startLimit,endLimit,secondNum)
{    
     const map=new Map();
     var a=startLimit;
     var start=startLimit;
     var end=endLimit;
     var secondNum=secondNum;
     var count=0;
     while(start<=endLimit)
     {  
      var num=sumOfDigits(start);
      // var num=sumOfDigits(num);
         if(num==secondNum || (num%secondNum)==0 || (secondNum%num)==0)
         {
                map.set(start,secondNum);
                start=start+1;
                secondNum=secondNum+2;
         }
         if(start===secondNum || (start%secondNum)===0 || (secondNum%start)===0)
         {
              map.set(start,secondNum);
              start=start+1;
              secondNum=secondNum+2;
         }
         else
         {
              if(secondNum==a)
              {
                start=start+1;
                secondNum=secondNum;
              }
              else
              {
                start=start+1;
                secondNum=secondNum-1;
              }
         }
     }
     for(var x of map)
     {
     count=count+1;
     document.getElementById("result").innerHTML+=x+"<br>";
     }``
     document.getElementById("count").innerHTML+=count+"<br>";
}