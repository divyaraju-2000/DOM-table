function myFunction(){
    var food = "";
    let fcount = 0;
    if(document.getElementById("food1").checked == true){
        food = food + " " + document.getElementById("food1").value
        fcount++
    }
    if(document.getElementById("food2").checked == true){
        food = food + " " + document.getElementById("food2").value
        fcount++
    }
    if(document.getElementById("food3").checked == true){
        food = food + " " + document.getElementById("food3").value
        fcount++
    }
    if(document.getElementById("food4").checked == true){
        food = food + " " + document.getElementById("food4").value
        fcount++
    }
    if(document.getElementById("food5").checked == true){
        food = food + " " + document.getElementById("food5").value
        fcount++
    }
    
    if(fcount >=2){
    var tbl=document.getElementById("tab");
    var row=tbl.insertRow();
    var cel1=row.insertCell();
    var cel2=row.insertCell();
    var cel3=row.insertCell();
    var cel4=row.insertCell();
    var cel5=row.insertCell();
    var cel6=row.insertCell();
    var cel7=row.insertCell();
    var cel8=row.insertCell();
    cel1.innerHTML=document.getElementById("fnam").value;
    cel2.innerHTML= document.getElementById("lnam").value;
    cel3.innerHTML= document.getElementById("add").value;
    cel4.innerHTML= document.getElementById("pin").value;
    cel5.innerHTML= document.getElementById("stat").value;
    cel6.innerHTML= document.getElementById("country").value;
    cel7.innerHTML= document.querySelector("#gender-select").value;
    cel8.innerHTML= food;
    }
    else {
        alert("atleat 2 item "); return false;
    }
    var form = document.getElementById("formData");
   form.reset();
}
