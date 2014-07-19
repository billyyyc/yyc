//指定ID对应的section显示,其他隐藏
//用法:showSection(指定id)

function showSection(id){
	var sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
		if (sections[i].getAttribute('id') != id) {
			sections[i].style.display = "none";
		}else{
			sections[i].style.display = "block";
		}
		
	};
}