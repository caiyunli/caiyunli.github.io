function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
    clearInterval(obj.timer);
    options = options || {};
    options.type=options.type || 'ease-in';
    options.time=options.time || 500;

    //执行的总次数
    var iCount=Math.ceil(options.time/30);
    //当前的位置
    var start={};
    //距离
    var dis={};

    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        if(isNaN(start[name])){
            switch(name){
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'opacity':
                    start[name]=1;
            }
        }
        dis[name]=json[name]-start[name];
    }
    console.log(start);
    var n=0;
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            switch(options.type){
                case 'linear':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a=1-n/iCount;
                    var cur=start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')'
            }else{
                obj.style[name]=cur+'px';
            }

        }

        if(n==iCount){
            clearInterval(obj.timer);
            options.end && options.end();
        }

    },30);

}





















