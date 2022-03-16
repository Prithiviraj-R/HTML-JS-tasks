function createTable(id)
{
    var $body=document.body;
    var countOfRows=document.getElementById(id).value;
    var $table=document.createElement("TABLE");
    for(var i=0;i<countOfRows;i++)
    {
        var row=$table.insertRow(i);
        for(var j=0;j<2;j++)
        {
        if(j==0)
        {
          var cell=row.insertCell(j);
          var input=document.createElement("input");
          input.setAttribute("name","parentName");
          input.setAttribute("type","text");
          cell.appendChild(input);
        }
        else if(j==1)
        {
          var cell=row.insertCell(j);
          var input=document.createElement("input");
          input.setAttribute("name","childName");
          input.setAttribute("type","text");
          cell.appendChild(input);
        }
        }
    }
    $body.appendChild($table);
    var search=document.createElement("input");
    search.setAttribute("id","search");
    search.setAttribute("name","search");
    search.setAttribute("type","text");
    $body.appendChild(search);
    var submit=document.createElement("input");
    submit.setAttribute("name","submit");
    submit.setAttribute("value","submit");
    submit.setAttribute("type","submit")
    submit.setAttribute("onclick","relationShipFinder()");
    $body.append(submit);
}
function relationShipFinder()
{
    var parentList=document.getElementsByName("parentName");
    var childList=document.getElementsByName("childName");
    var searchedName=document.getElementById("search").value;
    var length1=parentList.length;
    var length2=childList.length;
    console.log(length1);
    var map=new Map();
    var keys=map.keys();
    console.log("process");
    for(i=0;i<length1;i++)
    {
        var element=map.get(parentList[i].value);
        if(element==null)
        {
            var array=[];
            array.push(childList[i].value)
            map.set(parentList[i].value,array);
            console.log(map.values);
        }
        else
        {
            element.push(childList[i].value);
        }
    }
    for(var p of map)
    {
        for(var i=0;i<p.length;i++)
        {
            // console.log(p[i]);
        }
    }

    var result=map.get(searchedName);
    console.log(result);
    var count=0;
    for(var k=0;k<result.length;k++)
    {
        var name=result[k];
        var grandChilds=map.get(name);
        count=count+grandChilds.length;
    }
    var num=document.createElement("p");
    num.setAttribute("id","result");
    if(count==1)
    {
        num.textContent=searchedName+" has "+count+" grandson.";
    }
    else
    {
        num.textContent=searchedName+" has "+count+" grandsons.";
    }
    document.body.appendChild(num);
    var list=document.createElement("p");
    num.setAttribute("id","statement");
    var number=grandChilds.toString();
    list.innerHTML="they are "+number+".";
    document.body.appendChild(list);
}