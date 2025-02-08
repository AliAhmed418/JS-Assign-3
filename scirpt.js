var char = prompt ("Enter a Character");
if(char >=0){
    document.write(char + "is number");
}else if(char.toUpperCase()== char){
    document.write(char + " is Upper case character")
}else if(char.toLowerCase()== char){
    document.write(char + " is Lower case character")
}
