var content=[];
var operator='';
var data="";
var minusFlag=false;
var minusSign="";
var doubleCheck="";
function num(number)
{
        data=document.getElementById("display").value+=number;
        document.getElementById("overall").value+=number;
}

function brac(symbol)
{
    document.getElementById("display").value="";
    document.getElementById("overall").value+=symbol;
    if(symbol==")" && content[content.length-1]!=")")
    {
        content.push(data);
    }
    content.push(symbol);
    // operator=sign;
    console.log("from Brac:"+content);
    document.getElementById("display").value="";
}

function oper(sign)
{
    if(!minusFlag)
    {
        console.log(operator);
        if(data.charAt(data.length-1)!="*" || (content[content.length-1]!="*" && data!="-"))
        {
            if(content[content.length-1]!=")")
            {
                content.push(data);
            }
            content.push(sign);
            document.getElementById("overall").value+=sign;
            document.getElementById("display").value="";
            console.log("from operation:"+content);
        }
    }
}

function sub(sign)
{
    if(sign=="-")
    {
        if(operator!="-")
        {
            if(minusFlag)
            {
                    operator="";
                    content.push(data);
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    minusFlag=false;
            }
            else if(document.getElementById("display").value!="")
            {
                    operator='';
                    content.push(data);
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    minusFlag=false;
            }
            else if(data=="" || content[content.length-1]=="-" || content[content.length-1]=="(" || content[content.length-1]=="*" || content[content.length-1]=="+")
            {
                    operator="-";
                    document.getElementById("display").value+="-";
                    document.getElementById("overall").value+="-"
                    minusFlag=true;
            }
            else if(data!="" && content[content.length-1]=="(")
            {
                    operator="";
                    content.push(data);
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    minusFlag=false;
            }
            else if(content[content.length-1]==")")
            {
                    operator="";
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    minusFlag=false;
            }
        }
    }
}

function process()
{
    if(content[content.length-1]!=")")
    {
        content.push(data);
    }
    document.getElementById("display").value=recursion(content);
}

function recursion(arr)
{
    var res="";
    while(true)
    {
        console.log(arr);
        if(arr.length==1)
        {
            if(arr[0]=="+" || arr[0]=="-" || arr[0]=="*" || arr[0]=="/")
            {
                alert("Please Enter the number in between brackets");
            }
            res=arr[0];
            break;
        }
        if(arr[0]=="(" && arr[arr.length-1]==")")
        {
            arr.shift();
            arr.pop();
        }
        if(arr.includes("("))
        {
            positionOfOpenBrac=arr.indexOf("(");
            position2=arr.indexOf(")");
            // arrFromStart=arr.slice(positionOfOpenBrac,arr.length);
            // for(var j=arr.length-1;j>=0;j--)
            // {
            //         if(arr[j]==")")
            //         {
            //             position2=j;
                        bracArray=arr.slice(positionOfOpenBrac+1,position2);
                        arr.splice(positionOfOpenBrac,position2-positionOfOpenBrac+1,recursion(bracArray));
                        m=0;
                        // break;
                    // }
            // }
        }
        else if(arr.includes("/"))
        {
            placeOfSign=arr.indexOf("/");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer); 
            console.log("FromDiv:"+arr);
            m=0;
        }
        else if(arr.includes("*"))
        {
            placeOfSign=arr.indexOf("*");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromMultiplyblock:"+arr);
            m=0;   
        }
        else if(arr.includes("+"))
        {
            placeOfSign=arr.indexOf("+");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromAddBlock:"+arr);
            m=0;
        }
        else if(arr.includes("-"))
        {
            placeOfSign=arr.indexOf("-");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromSubBlock"+arr);
            m=0;  
        }
    }
    return res;
}

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

function clearDisplay()
{
    content=[];
    operator="";
    data="";
    minusFlag=false;
    document.getElementById("display").value="";
    document.getElementById("overall").value="";
}