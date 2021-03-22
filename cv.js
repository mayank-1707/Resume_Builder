//alert("working");
function addNewEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.setAttribute("rows",2);
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Extra caricular activity:");
    let scc=document.getElementById("ac");
    let addbutton1=document.getElementById("weAddButton");
    scc.insertBefore(newNode,addbutton1);
}
function addNewField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",2);
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Experience");
    let scc=document.getElementById("we");
    let addbutton1=document.getElementById("exAddButton");
    scc.insertBefore(newNode,addbutton1);
}


function addNewTPField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("tpField");
    newNode.setAttribute("rows",2);
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Technical Projects");
    let scc=document.getElementById("tp");
    let addbutton1=document.getElementById("tpAddButton");
    scc.insertBefore(newNode,addbutton1);
}




function addNewECField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ecField");
    newNode.setAttribute("rows",2);
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Extra caricullar Activity");
    let scc=document.getElementById("ec");
    let addbutton1=document.getElementById("ecAddButton");
    scc.insertBefore(newNode,addbutton1);
}









function generateCV()
{
    let nameField=document.getElementById("nameField").value;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("nameT1").innerHTML=nameField;
    
    let contactField=document.getElementById("contactField").value;
    document.getElementById("contactT1").innerHTML=contactField;
  
    
  let emailField=document.getElementById("emailField").value;
    document.getElementById("emailT1").innerHTML=emailField;
        
        let addressField=document.getElementById("addressField").value;
    document.getElementById("addressT1").innerHTML=addressField;
    
        let hackField=document.getElementById("hackField").value;
    document.getElementById("hackT1").href=hackField;
    
   let LinkedFild=document.getElementById("LinkedFild").value;
    document.getElementById("linkedT1").href=LinkedFild;
  
    let gitField=document.getElementById("gitField").value;
    document.getElementById("gitT1").href=gitField;
    
    let objectField=document.getElementById("objectField").value;
    document.getElementById("objectiveT11").innerHTML=objectField;
    
    
    let profileField=document.getElementById("profileField").files[0];
   
    console.log(profileField);
    let reader= new FileReader();
    reader.readAsDataURL(profileField);
    console.log(reader.result);
    reader.onloadend = function()
    {
        document.getElementById("profileT1").src=reader.result;
    };









    //workexperience
    let workExperience=document.getElementsByClassName("weField");
    let str="";
    for(let e of workExperience ) 
    {
        str =str +`<li> ${e.value} </li>`;
    }
    document.getElementById("weT1").innerHTML=str;

    


    let academicQ=document.getElementsByClassName("acField");
    let str1="";
    for(let e of academicQ ) 
    {
        str1 =str1 +`<li> ${e.value} </li>`;
    }
    document.getElementById("acT1").innerHTML=str1;


    let tpField=document.getElementsByClassName("tpField");
    let str2="";
    for(let e of tpField ) 
    {
        str2 =str2 +`<li> ${e.value} </li>`;
    }
    document.getElementById("tpT1").innerHTML=str2;

    let ecField=document.getElementsByClassName("ecField");
    let str3="";
    for(let e of ecField ) 
    {
        str3 =str3 +`<li> ${e.value} </li>`;
    }
    document.getElementById("ecT1").innerHTML=str3;





    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";



}
function printCV()
{
    window.print();
}
