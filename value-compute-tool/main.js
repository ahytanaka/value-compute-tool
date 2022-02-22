// 核心程序代码
var size=0;//初始化数据个数
var list=new Array();//初始化数组


//初始化页面控件
var addinp=document.getElementById("add");
var addb=document.getElementById("addb");
var table=document.getElementById("table");
var avgi=document.getElementById("avgi");
var avgb=document.getElementById("avgb");
var maxi=document.getElementById("maxi");
var maxb=document.getElementById("maxb");
var mini=document.getElementById("mini");
var minb=document.getElementById("minb");

// 添加数据
addb.onclick=function(){
    
    list[size]=parseFloat(addinp.value);
    
    var p=document.createElement("p");
    var value=document.createTextNode(list[size]);
    p.appendChild(value);
    document.getElementById("result").appendChild(p);
    parseFloat(list[size])
    console.log(typeof list[size])
    size=size+1;
    addinp.value="";
   
}
// 计算平均值
avgb.onclick=function(){
    var sum=0.0;
    var avg=0.0;
    var m=list.length
    for(i=0;i<list.length;i++){
        sum=sum+list[i];
    }
    avg=sum/m;
    avgi.value=avg;
}
// 计算最大值
maxb.onclick=function(){
    var max=list[0];
    for(i=0;i<list.length;i++){
        if(list[i]>max){
            max=list[i];
        }
        maxi.value=max;
    }
}
//计算最小值
minb.onclick=function(){
    var min=list[0];
    for(i=0;i<list.length;i++){
        if(list[i]<min){
            min=list[i];
        }
        mini.value=min;
    }
}
