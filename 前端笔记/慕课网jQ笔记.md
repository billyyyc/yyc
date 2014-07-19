
###选择器

$(“#id”)


$(“.red span,.red p,.red>span”)

   * 多个只需要用逗号隔开,

   * 空格表示下属所有子,孙

   * 大于号表示子辈(不含孙辈)


######过滤选择
$(“div:has(span)”)包含span的所有div  
$(“li:first,li:last,li:eq(index),li:contains(’土豪')”)  
注意:使用eq()的时候,第一个元素的索引号是0


$(“p:hidden”)选择不可见的p(可见是visible)  
$(“li:first-child”)与first不同的是,返回一个集合,last-child同个道理


[attribute=value]/[attribute!=value]选择器  
例子:$(“li[tittle=土豪]”)/$(“li[tittle!=土豪]")选择标题包含/不包含土豪的属性的li    
[attribute*=value]包含自定内容的所有元素  
例子$(“li[tittle*=‘最']”)标题含有最的所有元素

$(“prev+next")表示prev元素的下一个由next选择器返回的唯一元素  
$(“prev~next")表示prev元素后所有由next选择器返回的元素  
例子:$(“p+span”)p临近的下一个span  
$(“p~span”)p后所有span

$(“\*")可以获取全部元素,获取全部div可以写成$(“div*”)

***
###DOM

attr()的是作用是设置或者返回元素的”值”!  
html(),text()参数为空表示获取该元素内容.text只能获取文本,不能获取html格式

css()可以设置或获取元素的某样式属性  
addClass(“name")参数是样式名称 需要引号分隔开 多个样式用空格隔  开,相对应removeClass()  
移除属性是removeAttr()  
remove()是删除元素,empty()是清空元素  

before()和after()向元素的前后插入内容

$(selector).replaceWith(content)  
$(content).replaceAll(selector)

$(selector).wrap(“\<div>\</div>")和wrapInner()分别是对整个元素包裹和对元素内容包裹

$(selector).each(function(index){})

append()方法是向元素追加内容.参数可以是html语句  
$(content).appendTo(selector)  
**这组方法需要再对比**

html()相当于innerHtml

***

###事件

ready()是在DOM结构被加载的时候触发  
$(document).ready(function(){})等价于$(function(){})  
onLoad()在页面加载完才触发

$(selector).bind("ev1 ev2 ev3",fn)绑定  
$(selector).unbind("ev1 ev2 ev3",fn)解除绑定  
one()是一次性绑定  
trigger()手动触发指定事件--------**看不懂**  
live()方法功能与bind相同,此外还可以绑定动态元素(类似向下查找变化后的元素)------**看不懂**

focus事件在元素获取焦点时触发  
blur在元素失去焦点时触发


$(selector).hover(overFn,outFn)
$(selector).toggle(fn1,fn2,fn3)需要点击才会执行fn2

***
###动画效果
show(speed,[callback])  
hide(speed,[callback])  
speed可以是slow/fast或者”毫秒数值”  
callback是可以选的,可以隐藏或显示动作执行完调用函数名  
slideUp()向上滑动,slideDown()向下滑动(仅适合被隐藏的元素,slideUp则相反)  
slideToggle(speed,[callback])  
例子:
fn=======>  
$spn.html() == "向下滑" ? $spn.html("向上滑") : $spn.html("向下滑");
                })  
fadeIn()和fadeOut()实现淡入淡出,用法和slide一样  
fadeTo(speed,opacity,[callback])多了一个透明度设置

#####简单运动:  
$(selector).animate({params},speed,[callback])  
params为制作动画效果的css属性名与值,例如:width:"11px",  
stop()终止运动

延时执行$(selector)delay(duration)-----**感觉作用位置有点奇怪**

###jQuery实现Ajax应用
pass

***

###jQuery常用插件
pass

***
3-13习题不会做;显示后不知道如何隐藏回去.  
第四章表格先pass   
6-9chang事件pass


没有什么编程思想,写句子老是连对象都没选好就开始写!


















