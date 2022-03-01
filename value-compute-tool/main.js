/**
 * ahy的试验项目
 * 
 * 
 * 
 */



console.log("由kantaimi创建");
console.log("create by kantaimi");

// 核心程序代码
var size = 0;//初始化数据个数
var list = new Array();//初始化数组


//初始化页面控件
var addinp = document.getElementById("add");
var addb = document.getElementById("addb");
var cleanb = document.getElementById("cleanb");
var delcb = document.getElementById("delcb");
var table = document.getElementById("table");
var avgi = document.getElementById("avgi");
var avgb = document.getElementById("avgb");
var maxi = document.getElementById("maxi");
var maxb = document.getElementById("maxb");
var mini = document.getElementById("mini");
var minb = document.getElementById("minb");
var ceni = document.getElementById("ceni");
var cenb = document.getElementById("cenb");
var result = document.getElementById("result");
var rp = result.getElementsByTagName("tr")
var db = result.getElementsByTagName("input");







// 添加数据
addb.onclick = function () {

    list[size] = parseFloat(addinp.value);
    var div = document.createElement("tr");
    var p = document.createElement("p");
    var sp=document.createElement("p");
    var bu = document.createElement("input");
    var value = document.createTextNode(list[size]);
    var title = document.createTextNode("删除：");
    
    p.appendChild(value);
    sp.appendChild(title);
    bu.setAttribute("type","checkbox");
    


    document.getElementById("result").appendChild(div);
    document.getElementById("result").appendChild(div).appendChild(p);
    document.getElementById("result").appendChild(div).appendChild(sp);
    document.getElementById("result").appendChild(div).appendChild(bu);
    db = result.getElementsByTagName("input");
    






    size = size + 1;
    addinp.value = "";
    console.log(list);
    db = result.getElementsByTagName("button");
    var dbi=db.length
   



}
//清空所有数据
cleanb.onclick = function () {
    for (var i = list.length; i > 0; i--) {
        list.pop();
    }
    size = 0;
    for (var i = result.children.length - 1; i >= 0; i--) {
        result.removeChild(result.children[i]);
    }
}
 //删除选定数据
delcb.onclick=function(){
    db = result.getElementsByTagName("input");
    console.log(db);
    for(var i=0;i<db.length;i++){
        
        
        if(db[i].checked==true){
            list.splice(i,1);
            result.removeChild(rp[i]);
           
            size=size-1;
           
        }
       
    }
    
}






// 计算平均值
avgb.onclick = function () {
    var sum = 0.0;
    var avg = 0.0;
    var m = list.length
    for (i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    avg = sum / m;
    avgi.value = avg;
}
// 计算最大值
maxb.onclick = function () {
    var max = list[0];
    for (i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
        maxi.value = max;
    }
}
//计算最小值
minb.onclick = function () {
    var min = list[0];
    for (i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
        mini.value = min;
    }
}

//计算中位数
cenb.onclick=function(){
    function f(a,b){
        return(a - b)
    }
    list.sort(f);
    console.log(list)
    if(list.length%2==0){
        var c=list.length/2;
        var d=c-1;
        cen=(list[c]+list[d])/2
       
    }else{
        var a=parseInt(list.length/2);
        console[a];
        cen=list[a];

    }
    ceni.value=cen
}
