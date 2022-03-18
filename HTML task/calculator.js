// || numbers.length==0
var numbers=[];
var operators=[];
function number(num)
{
    data=document.getElementById("display").value+=num;
}
function oper(sign)
{
    if(sign=="-")
    {
        console.log(operators);
        console.log(operators.length-1);
        if(operators[0]==undefined)
        {
            operators.push(sign);
            numbers.push(data);
            document.getElementById("display").value="";
            console.log(numbers);
            console.log(operators);
        }
        else if(operators[operators.length-1]!="-")
        {
            if(operators[operators.length-1]=='*' || operators[operators.length-1]=='+' || operators[operators.length-1]=='/')
            {
                console.log(operators.length);
                document.getElementById("display").value="-";
            }
            else
            {
            operators.push(sign);
            numbers.push(data);
            document.getElementById("display").value="";
            console.log(numbers);
            console.log(operators);
            }
        }
        else if(operators[operators.length-1]=="-")
        {
            console.log(operators.length);
            document.getElementById("display").value="-";
        }
        else
        {
            console.log(operators.length);
            document.getElementById("display").value="-";
        }
    }
    else
    {
        numbers.push(data);
        operators.push(sign);
        document.getElementById("display").value="";
        console.log(numbers);
        console.log(operators);
    }
}
function process()
{
    numbers.push(data);
    document.getElementById("display").value="";
    var ans=0
    for(var k=0;k<numbers.length;k++)
    {
        if(k==0)
        {
            var num1=parseInt(numbers[k]);
            var num2=parseInt(numbers[k+1]);
            var sign=operators[k];
            ans=operations(num1,num2,sign);
        }
        else
        {
            if(k==(numbers.length-1))
            {
                break;
            }
            var numd=parseInt(numbers[k+1]);
            var sign=operators[k];
            ans=operations(ans,numd,sign);
        }
    }
    // var firstNum=parseInt(numbers[0]);
    // console.log(firstNum);
    // var secondnum=parseInt(numbers[1]);
    // console.log(secondnum);
    // var sign=operators[0];
    // console.log(sign);
    // var answer=operations(firstNum,secondnum,sign);
    document.getElementById("display").value=ans;
}

function operations(firstNum,secondNum,sign)
{
    if(sign=="+")
    {
       return firstNum+secondNum;
    }
    else if(sign=="-")
    {
       return firstNum-secondNum;
    }
    else if(sign=="*")
    {
       return firstNum*secondNum;
    }
    else if(sign=="/")
    {
       return firstNum/secondNum;
    }
}

function clearDisplay()
{
    document.getElementById("display").value="";
    numbers=[];
    operators=[];
}