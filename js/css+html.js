
	
		


document.addEventListener('DOMContentLoaded',function(){
	;(function(){
		       
		var oBox=document.querySelector('.blog-artical');
		
		var N=11;
		var arr=['燃烧的文字','模糊文字','爆炸','打字','倒影','翻页','翻转效果','展示','立体','蒙版','透视']
		for(var i=0; i<N;i++){
			var oLi=document.createElement('li');

			oLi.style.backgroundImage='url(img-1/'+(i+1)+'.jpg)';
			oLi.innerHTML+='<a href="css3/'+(i+1)+'.html" target="_blank" style="display: block;">'+arr[i]+'</a>';
			oBox.appendChild(oLi);
		}
		
		var aLi=oBox.children;
		
		for(var i=0; i<aLi.length;i++){
			aLi[i].style.transition='0.5s all ease '+(N-i)*200+'ms';
			var aA=aLi[i].children[0];
			aA.style.width=133+'px';
			aA.style.height=200+'px';	



			(function(index){
				setTimeout(function(){
					aLi[index].style.transform='perspective(800px)  rotateY('+(360/N*index)+'deg) translateZ(340px)';
				},0);
			})(i);
		}
		
	
		
		var y=0;
		var x=-15;
		var iSpeedX=0;
		var lastX=0;
		var iSpeedY=0;
		var lastY=0;
		var timer=null;
		
		oBox.onmousedown=function(ev){
			clearInterval(timer);
			var disX=ev.clientX-y;
			var disY=ev.clientY-x;

			document.onmousemove=function(ev){
				y=ev.clientX-disX;
				x=ev.clientY-disY;
				change(y/3,x);
				
				iSpeedX=ev.clientX-lastX;
				lastX=ev.clientX;
				iSpeedY=ev.clientY-lastY;
				lastY=ev.clientY;			
			}
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;	
				timer=setInterval(function(){
					iSpeedX*=0.8;
					iSpeedY*=0.8;
					y+=iSpeedX;	
					x+=iSpeedY;	

					change(y/3,x);
					if(Math.abs(iSpeedX)<1 && Math.abs(iSpeedY)<1){
						clearInterval(timer);	
					}
				},30);
			};
			return false;
		}
		
		aLi[0].addEventListener('transitionend',function(){
			change(y);	
		},false);
	
		function change(y,x){
			
			oBox.style.transform='rotateX('+-x/20+'deg)';
			
			for(var i=0; i<aLi.length;i++){
				aLi[i].style.transition='none';
				aLi[i].style.transform='perspective(800px)  rotateY('+(360/N*i+y)+'deg) translateZ(340px)';
				
				var scale= Math.abs(Math.abs((360/N*i+y)%360)-180)/180;
				
				// console.log(scale);
				scale<0.4 && (scale=0.4);
				aLi[i].style.opacity=scale;
			}	
		}	
	})();

;(function(){

	var oSer=document.getElementById('services');
	var oUl=document.getElementById('ul_container');
		var aLi=oUl.children;

		var oA=oUl.getElementsByTagName('a');
		
		var x=0;
		var y=0;
		

		oSer.onmousedown=function(ev){
			var oEvent=ev || event;
			var disX=oEvent.clientX-x;
			var disY=oEvent.clientY-y;
			
			document.onmousemove=function(ev){
				var oEvent=ev || event;
				
				 x=oEvent.clientX-disX;
				 y=oEvent.clientY-disY;
				 
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].style.marginLeft=-x*aLi[i].style.zIndex/10+'px';
					aLi[i].style.marginTop=-y*aLi[i].style.zIndex/10+'px';
				}
			}
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;
				


			}
			
			return false;
		}
})();
},false)
