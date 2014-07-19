## JS幻灯片剖析

#### 获取元素

	var getid = function(id){
		return document.getElementById(id)
	}
	
	var getTag = function(tag,obj){
		if (obj==null) {
			return document.getElementsByTagName(tag)
		}
		else{
			return obj.getElementsByTagName(tag)
		}
	}

#### 初始化
	var opac=0,j=0,t=63,num,scton=0,timer,timer2,timer3;
	
	var id = getid(source);
		id.removeChild(getTag("div",id)[0]);//删除loading
	var li = getTag("li",id);
	
	var div=document.createElement("div");
	var title=document.createElement("div");
	var span=document.createElement("span");
	var button=document.createElement("div");
	button.className="button";
	
**这里createElement只是创建,并没有写进html**

#### 透明度兼容

	function alpha(obj,n){
	  if(document.all){
	    obj.style.filter="alpha(opacity="+n+")";
	  }
	  else{
	    obj.style.opacity=(n/100);
	  }
	}
	
#### 控制焦点按钮

	function sc(n){
	  for(var i=0;i<li.length;i++){
	    button.childNodes[i].className="b1"};
	    button.childNodes[n].className="b2";
	  }
	
	title.className="num_list";
	title.appendChild(span);
	alpha(title,opac1);
	id.className="d1";
	div.className="d2";
	id.appendChild(div);
	id.appendChild(title);
	id.appendChild(button);
	
**涉及className,appendChild,childNodes**  
**childNodes需要再了解,对象的子标签?**
#### 小标题向上滚动	
	
	var scrolltxt=function(){
	  t+=num;
	  span.style.marginTop=t+"px";
	  if(num<0&&t>3){
	    timer3=setTimeout(scrolltxt,interv2)
	  }
	  else if(num>0&&t<62){
	    timer3=setTimeout(scrolltxt,interv2)
	  }
	  else{
	    scton=0
	  }
	};
	



#### 渐显
	var fadeon=function(){
		  opac+=5;
		  div.innerHTML=li[j].innerHTML;
		  span.innerHTML=getTag("img",li[j])[0].alt;//把alt作为图片名字显示出来
		  alpha(div,opac);
		  if(scton==0){
		    sc(j);
		    num=-2;
		    scrolltxt();
		    scton=1
		  };
		  if(opac<100){
		    timer=setTimeout(fadeon,interv2)
		  }
		  else{
		    timer2=setTimeout(fadeout,interv);
		  };
	  }
	  
**运动,渐变需要定时器,必须了解一下,这里的逻辑有点不符合正常思维,在函数中直接再对函数定时?**