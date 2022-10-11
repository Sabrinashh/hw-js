let username=[];
let input1=prompt("Daxil edin")
if(input1!=null && isNaN(input1)){
}  
else{
    alert("Duzgun daxil edin")
}
username.push(input1)
let input=prompt("Username daxil edin")
if(input!=null && isNaN(input)){
    if(input!=username)
    alert("Username ugurla elave olundu")
else{
    alert("Bele Username movcutdur")
    input=prompt("Username daxil edin")
}
}
else{
    alert("Duzgun daxil edin")
    input=prompt("Username daxil edin")
}
