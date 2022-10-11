let username=[];
let input1=prompt(username)
let input=prompt("Username daxil edin")
if(input!=null && isNaN(input)){
    if(input!=input1)
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
