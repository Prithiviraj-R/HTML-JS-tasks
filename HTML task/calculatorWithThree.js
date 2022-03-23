var number1='';
var number2='';
var operator='';
var res=""
var ans=0;
var data="";
document.getElementById("display").value="0";
//method to enter the numbers.
function num(num)
{
    document.getElementById("display").value="";
    // normalcolor();
    if(operator!='' && number1=='')
    {
        number1="0";
        operator=operator;
        // operator='';
    }
    var displayElement=document.getElementById("display");
	if(operator=="" && number2=="" || operator=="√")  
	{
		number1 += num;
		displayElement.value+=numberWithCommas(number1);
        if(number1=='')
        {
            document.getElementById('overall').value+=number1;
        }
        else
        {
            document.getElementById('overall').value=number1;
        }
	}
	else
	{
        // normalcolor();
        if(num=='+' || num=='*' || num=='/')
        {
            num.replace(num.charAt(0),"");
        }
        res="";
        res+=num;
		number2 += num;
        displayElement.value+=numberWithCommas(number2);
        document.getElementById('overall').value+=num;
    }
}


//method to do Operations.
function oper(sign)
{
    document.getElementById("display").value="";
    if((number1!=0 || number1=="0") && (number2!=0 && number2!="-") && operator!='')
    {
        if(number1=="0")
        {
            number1=parseFloat(number1);
        }
        ans=operations(number1,number2,operator);
        number1=ans.toString();
        number2='';
        operator='';
    }
    if(sign=='-')
    {
        if(operator!='')
        {
            if(number2!="-")
            {
                normalcolor();
                number2=sign;
                document.getElementById('display').value+=number2;
                data=document.getElementById('overall').value+=number2;
            }
        }
        else if(operator==''&&number1=='')
        {
            number1=sign;
            document.getElementById('display').value+=number1;
            data=document.getElementById('overall').value+=number1;
        }
        else
        {
            document.getElementById("display").value=numberWithCommas(number1);
            operator=sign;
            data=document.getElementById('overall').value+=operator;
            normalcolor();
            event.target.style.background='green';
        }
    }
    else
    {
            document.getElementById("display").value=numberWithCommas(number1);
            if(operator=="" && number2!="-")
            {
                operator=sign;
                if(operator!='' && number1=='')
                {
                    number1="0";
                    operator=operator;
                    document.getElementById('display').value+=number1;
                    data=document.getElementById('overall').value+=number1;
                }  
                data=document.getElementById("overall").value+=operator;
                normalcolor();
                if(number1=="")
                {
                    event.target.style.background='white';
                }
                else
                {
                    event.target.style.background='green';
                }
            }   
    }
}



//method to do equal operation.
function process()
{
    normalcolor();
    document.getElementById("display").value="";
    var firstNum=parseFloat(number1);
    console.log(firstNum);
    var secondnum=parseFloat(number2);
    console.log(secondnum);
    var sign=operator;
    if(sign=="√")
    {
        var answer=singleNumberOperations(firstNum,sign);
        number1=answer.toString();
        var answerString=answer.toString();
        document.getElementById("display").value=numberWithCommas(answerString);
        document.getElementById("overall").value='';
        number2='';
        operator='';
    }
    else
    {
        console.log(sign);
        var answer=operations(firstNum,secondnum,sign);
        number1=answer.toString();
        var answerString=answer.toString();
        document.getElementById("display").value=numberWithCommas(answerString);
        // document.getElementById("overall").value='';
        document.getElementById("overall").value="";
        document.getElementById("overall").value+=answerString;
        number2='';
        operator='';
    }
}


//method to do Arithmetic Operations.
function operations(firstNum,secondNum,sign)
{
    if(sign=="+")
    {
       return parseFloat(firstNum)+parseFloat(secondNum);
    }
    else if(sign=="-")
    {
       return parseFloat(firstNum)-parseFloat(secondNum);
    }
    else if(sign=="*")
    {
       return parseFloat(firstNum)*parseFloat(secondNum);
    }
    else if(sign=="/")
    {
       return parseFloat(firstNum)/parseFloat(secondNum);
    }
    else if(sign=="%")
    {
        return parseFloat(firstNum)%parseFloat(secondNum);
    }
}

function singleNumberOperations(firstNum,sign)
{
    if(sign=="√")
    {
        return Math.sqrt(parseFloat(firstNum));
    }
}




//method to do Clear Display.
function clearDisplay()
{
    normalcolor();
    document.getElementById("overall").value="";
    document.getElementById("display").value="";
    number1='';
    number2='';
    operator='';
    document.getElementById("display").value="0";
}




//method to make the operation buttons to normal color.
function normalcolor()
{
    document.getElementById("D").style.background='white';
    document.getElementById("M").style.background='white';
    document.getElementById("S").style.background='white';
    document.getElementById("A").style.background='white';
    document.getElementById("Modulo").style.background='white';
    document.getElementById("sqrt").style.background='white';
}

// function commaSeparated(number)
// {
//     for(var i=0;i<number.length;i++)
//     {
//         if(number.length==4)
//         {

//         }
//     }
// }
// method to comma inserted numbers using regular expression. 
// function numberWithCommas(x)
// {
//     var lastOne=x.charAt(x.length-1);
//     x=x.substring(0,x.length-1).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
//     x=x+lastOne;
//     return x;
// }

// method to comma inserted numbers using string;
function numberWithCommas(value)
{
    valueArr=value.split(".");
    finalNum=valueArr[0].replace(",","");
    var lastDigit=value.charAt(finalNum.length-1);
    var result = "";
    var len = finalNum.length-1;
    var nDigits = 0;

    for (var i = len - 1; i >= 0; i--)
    {
        result = finalNum.charAt(i) + result;
        nDigits++;
        if (((nDigits % 2) == 0) && i>0)
        {
            result = "," + result;
        }
    }
    var finalAnswer=result+lastDigit;
    
    if(valueArr[1] || valueArr[1]=='')
    {
        return finalAnswer+"."+valueArr[1];
    }

    else
    {
        return finalAnswer;
    }
}