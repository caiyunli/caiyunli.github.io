// 作品展****************************************

 function a2d(n){
    //弧度转角度
    return n*180/Math.PI;
}
function d2a(n){
    //角度转弧度
    return n*Math.PI/180;
}

//end 作品展****************************************
window.onload=function(){
	// js-case页****************************
	
		var oCase=document.getElementById('case');
		var oBtn=document.getElementById('btn');
        var oSpan=oCase.children[0];
        var timer=null;
        var N=10;
        var R=oCase.offsetWidth/2;

        for(var i=0;i<N;i++){
            var oSpan=document.createElement('span');

            oCase.appendChild(oSpan);

        }
        var aSpan=oCase.children;
         var arr=['中心放大','拖拽回放','手风琴','分页效果','判断容器方向','分布运动','分块运动','无缝运动','放大镜','苹果菜单']
         var arr2=['yundong/从中心点放大2.html','yundong/拖拽回放3.html','yundong/手风琴2.html','yundong/分页效果5.html','yundong/判断容器方向10.html','yundong/分布运动（文字）5.html','yundong/分块10.html','yundong/无缝运动6.html','yundong/放大镜4.html','yundong/苹果菜单6.html']
         
        var bSys=true;

        oBtn.onclick=function(){
            if(bSys){
                for(var i=0;i<aSpan.length;i++){
                    var deg=360/N*i;
                    doMove(aSpan[i],deg);
                }

		        for (var i = 0; i < aSpan.length; i++) {
		        	aSpan[i].innerHTML='<a href="'+arr2[i]+'" target="_blank">'+arr[i]+'</a>';

		        }
            }
            else{
                for(var i=0;i<aSpan.length;i++){
//                        var deg=360/N*i;
                    doMove(aSpan[i],0);
                }
            }

            bSys=!bSys;
        };


        function doMove(obj,iTarget){
            clearInterval(obj.timer);
            var R=oCase.offsetWidth/2;
            var iCount=Math.ceil(800/30);
            var start=obj.a || 0;
            var dis=iTarget-start;
            var n=0;

            obj.timer=setInterval(function(){
                n++;
                var a=n/iCount;
                var cur=start+dis*(a*a*a);
                //a+=2;

                var x=R+R*Math.sin(d2a(cur));
                var y=R-R*Math.cos(d2a(cur));
                obj.a=cur;

                obj.style.left=x+'px';
                obj.style.top=y+'px';

                if(n==iCount){
                    clearInterval(obj.timer);
                }
            },30);
        }

	
// js-case页 end********************************************************
}