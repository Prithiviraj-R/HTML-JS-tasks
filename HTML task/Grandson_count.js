function createTable()
{
    var $body=document.body;
    // for table creation
    var $table=document.createElement("TABLE");
    var countOfRows=document.getElementById("count").value;
    let thead = $table.createTHead();
    for(var i=0;i<countOfRows;i++)
    {
        var row=$table.insertRow(i);//for create row
        for(var j=0;j<2;j++)
        {
            if(j==0)
            {   
                var cell=row.insertCell(j);//for create cell in rows
                var parent=document.createElement("label");
                parent.setAttribute("name","parent");
                parent.innerHTML="Parent name:";
                cell.appendChild(parent);
                var input=document.createElement("input");
                input.setAttribute("name","parentName");
                input.setAttribute("type","text");
                cell.appendChild(input);
            }
            else if(j==1)
            {
                var cell=row.insertCell(j);
                var child=document.createElement("label");
                child.setAttribute("name","child");
                child.innerHTML="Child name:";
                cell.appendChild(child); 
                var input=document.createElement("input");
                input.setAttribute("name","childName");
                input.setAttribute("type","text");
                cell.appendChild(input);
            }
        }
    }
    $body.appendChild($table);
    //for submit option
    var submit=document.createElement("input");
    submit.setAttribute("type","submit")
    submit.setAttribute("onclick","nameCaller()");
    // addEventListener("click",nameCaller);
    $body.append(submit);
    $body.append(document.createElement("div"));//for create space in the lines
}

function nameCaller()
{
    var $body=document.body;
    //for label creation
    var header=document.createElement("label");
	header.setAttribute("id","header");
    $body.appendChild(header);
	header.innerHTML="Enter the name you want to get result:";
    $body.append(document.createElement("div"));//for create space in the lines
    //for input type=text used to enter the name want to search
    var search=document.createElement("input");
    search.setAttribute("id","search");
    search.setAttribute("type","text");
    $body.appendChild(search);
    $body.append(document.createElement("div"));//for create space in the lines
    //for submit option
    var submit=document.createElement("input");
    submit.setAttribute("type","submit")
    submit.setAttribute("onclick","relationShipFinder()");
    // addEventListener("click",relationShipFinder);
    $body.append(submit);
}

function relationShipFinder()
{
    var parentList=document.getElementsByName("parentName");
    var childList=document.getElementsByName("childName");
    var searchedName=document.getElementById("search").value;
    var length1=parentList.length;
    var map=new Map();
    for(i=0;i<length1;i++)
    {
        var element=map.get(parentList[i].value);
        if(element==null)
        {
            var array=[];
            array.push(childList[i].value)
            map.set(parentList[i].value,array);
        }
        else
        {
            element.push(childList[i].value);
        }
    }
    var result=map.get(searchedName);
    var count=0;
    var answer=[];
    var resultString="They are";
    for(var k=0;k<result.length;k++)
    {
        var name=result[k];
        var grandChilds=map.get(name);
        if(grandChilds!=undefined)
        {
            answer.push(grandChilds);
            count=count+grandChilds.length;
        }
    }
    var num=document.createElement("p");
    num.setAttribute("id","result");
    document.body.appendChild(num);
    if(count<=1)
    {
        num.textContent=searchedName+" has "+count+" grandson.";
    }
    else
    {
        num.textContent=searchedName+" has "+count+" grandsons.";
    }
    var list=document.createElement("p");
    num.setAttribute("id","statement");
    var res=answer.toString();
    console.log(res);
    var myarray=res.split(",");
    console.log(myarray);
    console.log(myarray.length);
    for(var c=0;c<myarray.length;c++)
    {
        if(c==myarray.length-1 && c>1)
        {
            resultString+="and "+myarray[c]+".";
            list.textContent=resultString;
            break;
        }
        else if(c==myarray.length-1 && c==0)
        {
            if(myarray[c].length>0)
            {
                resultString="He is "+myarray[c]+".";
                list.textContent=resultString;
            }
        }
        else if(c>=0)
        {
            resultString+=" "+myarray[c]+",";
            list.textContent=resultString;
        }
    }
    document.body.appendChild(list);
}