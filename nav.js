const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const table=document.querySelector("table");
button1.addEventListener("click",()=>{
    const tr1=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerHTML="1";
    td1.style.color="green";
    const td2=document.createElement("td");
    td2.innerHTML="jyotishree";
    td2.style.color="green";
    const td3=document.createElement("td");
    td3.innerHTML="21";
    td3.style.color="green";
    tr1.append(td1,td2,td3);
    table.append(tr1);

    const tr2=document.createElement("tr");
    const td11=document.createElement("td");
    td11.innerHTML="2";
    td11.style.color="red";
    const td22=document.createElement("td");
    td22.innerHTML="Sonali";
    td22.style.color="red";
    const td33=document.createElement("td");
    td33.innerHTML="22";
    td33.style.color="red";
    tr2.append(td11,td22,td33);
    table.append(tr2);

    const tr3=document.createElement("tr");
    const td111=document.createElement("td");
    td111.innerHTML="3";
    td111.style.color="brown";
    const td222=document.createElement("td");
    td222.innerHTML="Kamini";
    td222.style.color="brown";
    const td333=document.createElement("td");
    td333.innerHTML="22";
    td333.style.color="brown";
    tr3.append(td111,td222,td333);
    table.append(tr3);
    
});
button2.addEventListener("click",()=>{
    window.location.reload();
});