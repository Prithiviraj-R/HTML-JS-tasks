var content=[];
var operator='';
var data="";
var minusFlag=false;
var doubleCheck="";
var answer="";
var specialSymbol="";
function num(number)
{
        doubleCheck="";
        operator='';
        if((data.includes(".") && number=="."))
        {
            number="";
        }
        data=document.getElementById("display").value+=number;
        document.getElementById("overall").value+=number;
}

function brac(symbol)
{
    console.log("content Array At start:"+content[content.length-1])
    console.log("previous Entered Number:"+doubleCheck)
    if(content[content.length-1]==")" && symbol=="(")
    {
        content.push("*");
    }
    if(content[content.length-1]==undefined || content[content.length-1]!='')
    {
        if(symbol=="(" && data!='' && (content[content.length-1]=="-" || content[content.length-1]=="+" || 
        content[content.length-1]=="*" || content[content.length-1]=="/"))
        {
            content.push(data);
            content.push("*");
        }
        else if(content[content.length-1]==undefined && data!="")
            {
                content.push(data);
                content.push("*");
            }
    }
    document.getElementById("display").value="";
    document.getElementById("overall").value+=symbol;
    if((symbol==")" && content[content.length-1]!=operator) && data!='')
    {
        content.push(data);
    }
    content.push(symbol);
    // operator=sign;
    console.log("from Brac:"+content);
    document.getElementById("display").value="";
    data="";
    console.log(content);
}
function specOper(fri,oper)
{
    if(oper=="√")
    {
    //   var as=Math.sqrt(parseFloat(fri));
    if(Math.sign(fri)==-1)
    {
        var as=(Math.pow(parseFloat(fri),0.5));
        return as;
    }
    else
    {
        var as=Math.pow(parseFloat(fri),0.5);
        return as;
    }
    }
    else if(oper=="^2")
    {
      var as=Math.pow(parseFloat(fri),2);
      return as;
    }
    else if(oper=="^3")
    {
      var as=Math.pow(parseFloat(fri),3);
      return as;
    }
}
function oper(sign)
{
    if(sign=="√")
    {
        content.push("√");
        document.getElementById("overall").value+=sign;
        document.getElementById("display").value="";
        data="";
    }
    else if(sign=="^2")
    {
        if(doubleCheck=="+" || doubleCheck=="-" || doubleCheck=="*" || doubleCheck=="/" || content[content.length-1]=="√"){}
        else
        {
            if(data!="")
            {
                content.push(data);
            }
            content.push("^2");
            document.getElementById("overall").value+=sign;
            document.getElementById("display").value="";
            data="";
            console.log("from operation:"+content);
            console.log("From Data="+data);
        }
    }
    else if(sign=="^3")
    {
        if(doubleCheck=="+" || doubleCheck=="-" || doubleCheck=="*" || doubleCheck=="/" || content[content.length-1]=="√"){}
        else
        {
            if(data!="")
            {
                content.push(data);
            }
            content.push("^3");
            document.getElementById("overall").value+=sign;
            document.getElementById("display").value="";
            data="";
            console.log("from operation:"+content);
            console.log("From Data="+data);
        }
    }
    else if(doubleCheck.length!=1)
    {
        console.log(operator);
        if(data.charAt(data.length-1)!="*" || (content[content.length-1]!="*" && data!="-"))
        {
            if(content[content.length-1]!="√")
            {
                if(content[content.length-1]==undefined && (sign=="/" || sign=="*" || sign=="%"))
                {
                        content.push("0");
                        document.getElementById("overall").value+="0";
                }
                if(content[content.length-1]!=")" && data!="")
                {
                    content.push(data);
                }
                content.push(sign);
                doubleCheck=sign;
                document.getElementById("overall").value+=sign;
                document.getElementById("display").value="";
                data="";
                console.log("from operation:"+content);
            }
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
                    data="";
                    minusFlag=false;
            }
            else if(document.getElementById("display").value!="")
            {
                    operator='';
                    content.push(data);
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    data="";
                    minusFlag=false;
            }
            else if(content[content.length-1]==")" && data=="")
            {
                    operator='';
                    content.push(sign);
                    document.getElementById("display").value="";
                    document.getElementById("overall").value+="-";
                    data="";
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
                    data="";
                    minusFlag=false;
            }
        }
    }
}

function process()
{
    if(content[content.length-1]!=")" && data!="")
    {
        content.push(data);
    }
    data='';
    var openLoopCount=0;
    var closeLoopCount=0;
    for(var i=0;i<=content.length-1;i++)
    {
        if(content[i]=="(")
        {
            openLoopCount++;
        }
        else if(content[i]==")")
        {
            closeLoopCount++;
        }
    }
    if(openLoopCount==closeLoopCount)
    {
        answer=recursion(content);
        if(Number.isNaN(answer))
        {
            document.getElementById("display").value="Error";
            return;
        }
        else
        {
            document.getElementById("display").value=answer.toString();
        }
    }
    else
    {
        alert("please enter the brackets correctly");
        content=[];
        operator="";
        data="";
        doubleCheck="";
        minusFlag=false;
        document.getElementById("display").value="";
        document.getElementById("overall").value="";
    }
    
}
function recursion(arr)
{
    var res="";
    while(true)
    {
        console.log(arr);
        if(arr.length==1)
        {
            res=arr[0];
            break;
        }
        if(arr.includes("("))
        {
            positionOfOpenBrac=arr.lastIndexOf("(");
            position2=arr.indexOf(")",positionOfOpenBrac);
            bracArray=arr.slice(positionOfOpenBrac+1,position2);
            arr.splice(positionOfOpenBrac,position2-positionOfOpenBrac+1,recursion(bracArray));
        }
        else if(arr.includes("^3"))
        {
            placeOfSign=arr.indexOf("^3");
            number2=arr[placeOfSign-1];
            answer=specOper(number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+1,answer); 
            console.log("FromRoot:"+arr);
        }
        else if(arr.includes("^2"))
        {
            placeOfSign=arr.indexOf("^2");
            number2=arr[placeOfSign-1];
            answer=specOper(number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+1,answer); 
            console.log("FromRoot:"+arr);
        }
        else if(arr.includes("√"))
        {
            placeOfSign=arr.indexOf("√");
            number2=arr[placeOfSign+1];
            answer=specOper(number2,arr[placeOfSign]);
            arr.splice(placeOfSign,placeOfSign+2,answer); 
            console.log("FromRoot:"+arr);
        }
        else if(arr.includes("/"))
        {
            placeOfSign=arr.indexOf("/");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer); 
            console.log("FromDiv:"+arr);
        }
        else if(arr.includes("*"))
        {
            placeOfSign=arr.indexOf("*");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromMultiplyblock:"+arr);
        }
        else if(arr.includes("%"))
        {
            placeOfSign=arr.indexOf("%");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer); 
            console.log("FromDiv:"+arr);
        }
        else if(arr.includes("+"))
        {
            placeOfSign=arr.indexOf("+");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromAddBlock:"+arr);
        }
        else if(arr.includes("-"))
        {
            placeOfSign=arr.indexOf("-");
            number1=arr[placeOfSign-1];
            number2=arr[placeOfSign+1];
            answer=operations(number1,number2,arr[placeOfSign]);
            arr.splice(placeOfSign-1,placeOfSign+2,answer);
            console.log("fromSubBlock"+arr);
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
    doubleCheck="";
    minusFlag=false;
    document.getElementById("display").value="";
    document.getElementById("overall").value="";
}