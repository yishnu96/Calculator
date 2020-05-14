
function cal(num){
    document.form.textview.value += num
    
}

function equal(){
    var exp = document.form.textview.value;
    if(exp)
    {
        document.form.textview.value = eval(exp);
    }
}

function clr(){
    document.form.textview.value = " ";
    console.log("Cleared");
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1);
    console("Last one Deleted");
}

function per(){
    var num = document.form.textview.value;
    num = parseInt(num)
    document.form.textview.value=num/100;
    console.log("% calculated");
}