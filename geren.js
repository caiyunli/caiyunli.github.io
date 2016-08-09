//主页******************************************

// 导航条（遮罩）
;(function(){
    var left=0;
    var speed=0;
    
    var timer=null;

    window.elastic=function (obj,iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            speed-=(left-iTarget)/5;
            speed*=.7;

            left+=speed;

            obj.style.left=Math.round(left)+'px';
            if(Math.round(speed)<1 && Math.round(left)==iTarget)clearInterval(timer);
            
        },30);
    }
})();
// end主页***************************************


window.onload=function(){
	//主页 *********************
		var oNav=document.getElementById('nav');
		var aItems=oNav.children;
		var oResume=document.getElementById('resume');
		var aP=oResume.children;

		
		var j=1;
        var timer=null;
		for(var i=0;i<aItems.length-1;i++){
	        aItems[i].index=i;
	        aItems[i].onmouseover=function(){
	            elastic(aItems[aItems.length-1],this.index*150)
	        }
	    };
	    
    	
    		
    	timer=setInterval(function(){
    	   console.log(j)
    		aP[j].style.display='block';
    		j++;
            if (j>=aP.length) clearInterval(timer)
    	  },200)
    
	  
	

// end主页*********************************




	
}