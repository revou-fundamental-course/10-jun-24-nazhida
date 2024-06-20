function btnC() {
    let inputC = document.getElementById("celcius").value.trim();
    if (inputC === ""){
        alert("input kosong")
        return;
     }
     var bC = 1.8;
     var cC = 32;
     const abC = inputC * bC;
     const hasilF = abC + cC + "°F";
     console.log(hasilF)

     document.getElementById("output").value = hasilF;

     let inputF = document.getElementById("farenheit").value.trim();
     if (inputF > 0){
        document.getElementById("farenheit").value = "";
     } else if (inputF < 0){
        document.getElementById("farenheit").value = "";
    }
    return
    
}
     

function btnF() {
    let inputF = document.getElementById("farenheit").value.trim();
    if(inputF === ""){
        alert("input kosong")
        return;
     }
    var bF = 5 / 9;
    var cF = 32;
    
    const abF = inputF - cF;
    const hasilC = abF * bF +"°C";
    console.log(hasilC);

    document.getElementById("output").value = hasilC;

    let inputC = document.getElementById("celcius").value.trim();
    if (inputC > 0){
       document.getElementById("celcius").value = "";
    } else if (inputC < 0){
        document.getElementById("celcius").value = "";
    }
    return
}

