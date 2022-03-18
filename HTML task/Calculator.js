function operation(sign,id)
{
if(document.getElementById("display").value="+")
{
    content=content;
}
else
{
    content=document.getElementById("display").value;
    firstNum=parseInt(content);
    
}
    button=document.getElementById(id).style.background="green";
    tag=id;
}
function numbers(num)
{
    var x=document.getElementById("display").value+=num;
    document.getElementById(tag).style.background="white";
}
function process()
{
    document.getElementById(tag).style.background="white";
    var x = document.getElementById("display").value;
    console.log("secondNum:"+x);
    secondNum=parseInt(x);
    console.log("After changed"+secondNum)
    var y=myOwnEval();
    // var res=content+j+x;
    // var y=func(res);
    document.getElementById("display").value = y;
}

function myOwnEval()
{
    if(j=="+")
    {
        return firstNum+(secondNum);
    }
    else if(j=="-")
    {
        return firstNum-(secondNum);
    }
    else if(j=="*")
    {
        return firstNum*(secondNum);
    }
    else if(j=="/")
    {
        return firstNum/(secondNum);
    }
}

var func = function(res) 
{
    return (new Function( 'return (' + res + ')' )());
}