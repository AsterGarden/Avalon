// JavaScript source code
//先定义函数方法，再调用
//动图1
function over(){
	var image =document.getElementById("img01");
	image.src="http://wx3.sinaimg.cn/large/95c4147fgy1fuzpwzslyfg20tl0gwb2k.gif";
       }

function out(){
	var image =document.getElementById("img01");
	image.src="http://wx2.sinaimg.cn/large/95c4147fgy1fuzpwp7zs6j20tl0gwaut.jpg";
       }


 	var image1=document.getElementById("img01");
	image1.onmouseover=over;
	image1.onmouseout=out;
	
//直接绑定匿名函数
//动图2
var image2=document.getElementById("img02");

	image2.onmouseover=function(){
		var image =document.getElementById("img02");
	image.src="http://wx3.sinaimg.cn/large/95c4147fgy1fuzpxm594fg20tl0gwqvk.gif";
	}
	
	image2.onmouseout=function(){
	var image =document.getElementById("img02");
	image.src="http://wx1.sinaimg.cn/large/95c4147fgy1fuzpwqqyqhj20tl0gw1j8.jpg";
       }


//动图3
var image3=document.getElementById("img03");

	image3.onmouseover=function(){
		var image =document.getElementById("img03");
	image.src="http://wx1.sinaimg.cn/large/95c4147fgy1fuzpxnr6cog20tl0gw7wx.gif";
	}
	
	image3.onmouseout=function(){
	var image =document.getElementById("img03");
	image.src="http://wx2.sinaimg.cn/large/95c4147fgy1fuzpwossuij20tl0gw17y.jpg";
       }
	
//动图4
var image4=document.getElementById("img04");

	image4.onmouseover=function(){
		var image =document.getElementById("img04");
	image.src="http://wx4.sinaimg.cn/large/95c4147fgy1fuzpyp90tmg20tl0gwkjw.gif";
	}
	
	image4.onmouseout=function(){
	var image =document.getElementById("img04");
	image.src="http://wx4.sinaimg.cn/large/95c4147fgy1fuzpwq3b2aj20tl0gwx3q.jpg";
       }

//pick部分
function click1(){
	alert("和居老师一起走花路！");
}
function click2(){
	var image5=document.getElementById("imga");
		image5.style.display="block";

}
//pick按钮
var but = document.getElementById("pick");
but.addEventListener("click",click1,false);
but.addEventListener("click",click2,false);

//左右侧按钮更换图片

//先定义后调用
function clickbut1(){
	var image6=document.getElementById("imgc");
	image6.src="http://wx3.sinaimg.cn/large/98224fa1ly1fuzs4evterj21kw10t7wh.jpg";
	
}

var butleft=document.getElementById("but0_1");
butleft.addEventListener("click",clickbut1,false);

//直接写匿名函数
var butright=document.getElementById("imgc");
but1_1.onclick=function(){
		var image =document.getElementById("imgc");
	image.src="http://wx2.sinaimg.cn/large/98224fa1ly1fuzs664ccxj212k0qo47d.jpg";
	}