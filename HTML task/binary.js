function binaryConversion()
{
    var num=document.getElementById("number").value;
    console.log(num);
    var count=0;
    var answerArray=[];
    // var answer="";
    while(num!=0)
    {
        var digit=num%2;
        // answer=digit+answer;
        count=count+1;
        answerArray.push(digit);
        num=Math.floor(num/2);
    }
    answerArray=answerArray.reverse();
    for(var value of answerArray)
    {
        document.getElementById("result").innerHTML+=value;
    }
    // document.getElementById("result").innerHTML=answer;   
    document.getElementById("count").innerHTML="The Count of 1's is:"+count;
}