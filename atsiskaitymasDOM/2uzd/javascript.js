let body=document.querySelector("body");
body.setAttribute("id", "bodis");
body.style.display="flex";
body.style.flexDirection="column";



let ulList=document.createElement("input");
ulList.type="number";
ulList.placeholder="ul List";
ulList.style.textAlign="center";
ulList.style.width="20vw";
ulList.style.boxSizing="border-box";
body.append(ulList);

let olList=document.createElement("input");
olList.type="number";
olList.placeholder="ol List";
olList.style.textAlign="center";
olList.style.width="20vw";
olList.style.boxSizing="border-box";
body.append(olList);

let button=document.createElement("button");
button.innerText="Create LIST";
button.style.textAlign="center";
button.style.width="20vw";
button.style.boxSizing="border-box";
body.append(button);

function sarasoSukurimas(){
let div=document.createElement("div");
div.setAttribute("id", "div");
body.append(div);
if(ulList.value!="" && olList.value!=""){
    let ul=document.createElement("ul");
        ul.listStyleType="disc";
        div.append(ul);
    for(let i=0; i<ulList.value; i++){

        let list=document.createElement("li");
        list.innerText="unordered";
        ul.append(list);


        let ol=document.createElement("ol");
            ol.listStyleType="decimal";
            list.append(ol);

        for(let j=0; j<olList.value; j++){
            let li=document.createElement("li")
            li.innerText="ordered";
            ol.append(li);
        }
    }}
    ulList.value="";
    olList.value="";

}

button.addEventListener("click", ()=>{
if(document.getElementById("div")){
    document.getElementById("div").remove();
}
sarasoSukurimas();
})