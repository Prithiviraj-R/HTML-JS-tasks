function binaryConversion()
{
     
     if(Math.trunc(n/2)==0)
     {
         return n;
     }
     else
     {
         console.log(String.valueOf(n%2)+binaryConversion(n/2))
     }
}