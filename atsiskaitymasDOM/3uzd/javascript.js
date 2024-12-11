if (localStorage.getItem("toDo") === null) {
    localStorage.setItem("toDo", JSON.stringify([]));//tikrinu ls ir jei tuscias sukuriu kaip tuscia masyva
}
const sarasas=JSON.parse(localStorage.getItem("toDo"));

let body=document.querySelector("body");
body.style.display="flex";
body.style.flexDirection="column";

let form=document.querySelector("form");

let textArea=document.querySelector("textarea");

let mygtukas=document.createElement("button");
mygtukas.innerText=("to To Do List");
mygtukas.style.width="10vw";
body.append(mygtukas);//smagu buvo suzinoti jei appendini i forma mygtuka, ji pasppaudus refreshina puslapi

if(sarasas!=null){//sukuriu lentele is local storage
    sukurtiForma();
}

function sukurtiForma(){
    if(document.getElementById("kuriamaForma")!=null){//tikrina pagal id ar jau egzistuoja si forma ir ja perraso
        document.getElementById("kuriamaForma").remove();
    }

    const sarasas=JSON.parse(localStorage.getItem("toDo"));

    const array=[];
    for(let i=0; i<sarasas.length; i++){
        array.push(sarasas[i]);//masyvui priskiriu ls reiksmes kad po to galeciau splicinti
    }

    let forma=document.createElement("forma");
    forma.setAttribute("id", "kuriamaForma");
    body.append(forma);
    for(let i=0; i<sarasas.length; i++){//kuria lentele ir jos elemnetus
        let tr=document.createElement("tr");
        tr.setAttribute("id", `tr${i}`);
        forma.append(tr);

        let td=document.createElement("td");
        td.innerText="done";
        td.style.border="thick solid #0000FF";
        tr.append(td);

        let checkBox=document.createElement("input");//sukuria checkbox
        checkBox.type="checkbox";
        td.append(checkBox);

        let td2=document.createElement("td");
        td2.innerText=sarasas[i].toDo;
        td2.style.border="thick solid #0000FF";
        tr.append(td2);

        let td3=document.createElement("td");
        td3.innerText=sarasas[i].priority;
        td3.style.border="thick solid #0000FF";
        tr.append(td3);

        let td4=document.createElement("td");
        td4.style.border="thick solid #0000FF";
        tr.append(td4);

        let mygtukasPasalinti=document.createElement("button");
        mygtukasPasalinti.setAttribute("id", `pasalinti${i}`);
        mygtukasPasalinti.innerText="Istrinti";
        td4.append(mygtukasPasalinti);

        mygtukasPasalinti.addEventListener("click", ()=>{//sukuria mygtuka kuris po to trina tr pagal id.
            document.getElementById(`tr${i}`).remove();
            array.splice(i,1);//splicina masyva
            localStorage.setItem("toDo", JSON.stringify(array));//masyva sukelia i ls
            sukurtiForma();//is naujo paleidzia funkcija kad kurtu lentele su naujais duomenimis

        })
    }
}


mygtukas.addEventListener("click", ()=>{
    const sarasas=JSON.parse(localStorage.getItem("toDo"));//kad atnaujintu ls kai yra pasalinti duomenys is ten
    let select=document.querySelector("select");
    if(textArea.value!=""){//tikrina ar yra kazkas ivesta texarea
    const duomenysILS={};//sukuria objekta
    const duomenysKuriuosIrasysime=Object.create(duomenysILS);//objektas i masyva
    duomenysKuriuosIrasysime.toDo=textArea.value;//value is texarea
    duomenysKuriuosIrasysime.priority=select.value;//value is select
    sarasas[sarasas.length]=duomenysKuriuosIrasysime;//priskiria gautas vertes i nauja ls objekto pozicija
    localStorage.setItem("toDo", JSON.stringify(sarasas));//sukelia i ls
    sukurtiForma();//paleidzia formos kurima
    textArea.value="";//nunulina texarea
}
})
