// function sumOfDigits(startLimit)
// {
//     var startLimit=startLimit;
//     var digit=0;
//     var sum=0;
//     var add=0;
//     if(Math.trunc(startLimit/10)==0)
//     {
//       return startLimit;
//     }
//     else
//     {
//     while(startLimit/10>0)
//     {
//       digit=startLimit%10;
//       console.log(digit);
//       sum=sum+digit;
//       startLimit=Math.trunc(startLimit/10);
//     }
//     return sum
//    }
// }
function trapSequence(start,endLimit,secondNum)
{    
   var map=new Map();
   for(var n1=start;n1<=endLimit;n1++)
   {
      var a=n1;
      while(true)
         {
            if((a%secondNum)==0 || (secondNum%a)==0)
            {
               map.set(n1,secondNum);
               secondNum=secondNum+2;
               break;
            }
            else
            {
               var sum=0;
               var temp=a;
               while(temp>0)
               {
                  var digit=temp%10;
                  sum+=digit;
                  temp=Math.floor(temp/10);
               }
               if(a<10)
               {
                     if(secondNum>3)
                     {
                        secondNum--;
                     }
                     break;
               }
               // c=sumOfDigits(a);
               // a=c;
               a=sum;
            }
          }
   }
   
     for(var answer of map)
     {
        document.getElementById("result").innerHTML+="<ul><li>"+answer+"</li></ul>";
     }``
     
     document.getElementById("count").innerHTML+="The Number of pairs is:"+map.size+"<br>";
}