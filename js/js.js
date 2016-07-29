function findDir(oDiv,ev){
            var oEvent=ev||event;
            var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
            var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft

            var y=oDiv.offsetHeight/2+getPos(oDiv).top-(oEvent.clientY+scrollT);
            var x=oDiv.offsetWidth/2+getPos(oDiv).left-(oEvent.clientX+scrollL);

            return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
        }
        function getPos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t};
        }

        window.onscroll=window.onload=function(){
            var oPort=document.getElementById('container');
            
            var aA=oPort.children[1].children;
            // alert(aA.length)
            // for (var i = 0; i < aA.length; i++) {
            //     aA[i].style.background=
            // }

            for(var i=0;i<aA.length;i++){
                aA[i].onmouseover=function(ev){
                    var oEvent=ev||event;
                    var oSon=this.getElementsByTagName('span')[0];
                    // alert(oSon.length);
                    var oFrom=oEvent.fromElement || oEvent.relatedTarget;
                    if(this.contains(oFrom))return false;

                    switch(findDir(this,ev)){
                        case 0:
//                        oDiv.innerHTML='右';
                            oSon.style.left=200+'px';
                            oSon.style.top=0;
                            break;
                        case 1:
//                        oDiv.innerHTML='下';
                            oSon.style.left=0;
                            oSon.style.top=200+'px';
                            break;
                        case 2:
//                        oDiv.innerHTML='左';
                            oSon.style.left=-200+'px';
                            oSon.style.top=0;
                            break;
                        case 3:
//                        oDiv.innerHTML='上';
                            oSon.style.top=-200+'px';
                            oSon.style.left=0;
                            break;
                    }
                    move(oSon,{left:0,top:0});

                };
                aA[i].onmouseout=function(ev){
                    var oEvent=ev||event;
                    var oSon=this.getElementsByTagName('span')[0];
                    var to=oEvent.toElement || oEvent.relatedTarget;
                    if(this.contains(to))return false;

                    switch(findDir(this,ev)){
                        case 0:
                            move(oSon,{left:200,top:0});
//                        oDiv.innerHTML='右';
                            break;
                        case 1:
//                        oDiv.innerHTML='下';
                            move(oSon,{left:0,top:200});
                            break;
                        case 2:
//                        oDiv.innerHTML='左';
                            move(oSon,{left:-200,top:0});
                            break;
                        case 3:
//                        oDiv.innerHTML='上';
                            move(oSon,{top:-200,left:0});
                            break;
                    }


                };
            }


        };