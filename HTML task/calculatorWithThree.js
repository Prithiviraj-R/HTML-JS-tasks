var number1='';
var number2='';
var operator='';
var ans=0;
var data="";

//method to enter the numbers.
function number(num)
{
    normalcolor();
    var displayElement=document.getElementById("display");
    if(operator!='' && number1=='')
    {
        number1="0";
        operator=operator;
        // operator='';
    }
	if(operator=="" && number2=="" || operator=="√")  
	{
		number1 += num;
		displayElement.value=number1;
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
        normalcolor();
        if(num=='*' || num=='*' || num=='/')
        {
            num.replace(num.charAt(0),"");
        }
		number2+=num;
        document.getElementById('overall').value+=num;
		displayElement.value=number2;
    }
}

//method to do Operations.
function oper(sign)
{
    if(number1!=0 && number2!=0 && operator!=0)
    {
        ans=operations(number1,number2,operator);
        number1=ans.toString();
        number2='';
        operator='';
    }
    if(sign=='-')
    {
        if(operator!='')
        {
            normalcolor();
            number2=sign;
            document.getElementById('display').value+=number2;
            document.getElementById('overall').value+=number2;
        }
        else if(operator==''&&number1=='')
        {
            number1=sign;
            document.getElementById('display').value+=number1;
            document.getElementById('overall').value+=number1;
        }
        else
        {
            document.getElementById("display").value='';
            operator=sign;
            document.getElementById('overall').value+=operator;
            normalcolor()
            event.target.style.background='green';
        }
    }
    else
    {
            document.getElementById("display").value='';
            operator=sign;  
            document.getElementById("overall").value+=operator;
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
        document.getElementById("display").value=answer;
        document.getElementById("overall").value='';
        number1=answer;
        number2='';
        operator='';
    }
    else
    {
        console.log(sign);
        var answer=operations(firstNum,secondnum,sign);
        document.getElementById("display").value=answer;
        document.getElementById("overall").value='';
        number1=answer;
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