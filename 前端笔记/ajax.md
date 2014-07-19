### 表单控制

限制字数:

- 输入事件:$('textarea').keyup(function(){})
- 剩余0个字 直接赋值为零
- 定义一个规定长度的字符串var val=$(this).val()substring(0,len);直接赋值给输入框$(this).val(val)



# Ajax

- ### load:
.load(url,data,callback)
url+#id在读取html的时候可以只加载id内容
缓存问题:(?date='+Math.random()+')
  
  load例子:
  $('.load').load('pro.php?date='+Math.random(),send,function(data,textStatus,XMLHttpRquest){})

- ### get:
get方法要在回调的时候在制定目标
返回的不是原生的XML对象
近段时间很少使用XML了

  get例子:
  $.get('test.txt?date='+Math.random(),function(data){$('.load').html(data)})


- ### post:
同get用法一模一样

- ### Ajax:
$.ajax(url,type,data,fn(data)) 

eval()可以将string变成可执行(字符串解析成代码)
		$(document).ajaxStart(function() {
			$('.info>img').show();
		}).ajaxStop(function(){
			$('.info>img').hide();
		})

### 获取格式化数据
- 原始方法:var sendData = {'username':$('#username').val()}
- serialize()

### ajax错误

timeout:1000
error:
errrorThrown
textStatus
$.ajaxError(fn)





复杂数据用数据加json的格式