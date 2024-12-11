let body=document.querySelector("body");
body.setAttribute=("id", "bodis");

let minusas=document.createElement("button");
minusas.innerText="-";
minusas.style.height="40px";
minusas.style.width="100px";
minusas.style.backgroundColor="grey";
body.append(minusas);

let pliusas=document.createElement("button");
pliusas.innerText="+";
pliusas.style.height="40px";
pliusas.style.width="100px";
pliusas.style.backgroundColor="grey";
body.append(pliusas);

let skaicius=7;
let paragrafas=document.createElement("p");
paragrafas.innerText=skaicius;
paragrafas.style.height="40px";
paragrafas.style.width="200px";
paragrafas.style.textAlign="center";
body.append(paragrafas);


pliusas.addEventListener("click", ()=>{
skaicius++;
if(skaicius%2==0){
    pliusas.style.backgroundColor="red";
}
else{
    pliusas.style.backgroundColor="grey";
}
paragrafas.innerText=skaicius;
})

minusas.addEventListener("click", ()=>{
    skaicius--;
    if(skaicius%2==0){
        minusas.style.backgroundColor="red";
    }
    else{
        minusas.style.backgroundColor="grey";
    }
    paragrafas.innerText=skaicius;
    })