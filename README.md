# ajaxBynana
ajax
function createXMLHttpRequest(){
		try{
			//throw("error");//手动抛出一个错误，
			return new window.XMLHttpRequest();//上面手动抛出了错误，所以该句不执行
		}catch(e){//捕捉错误
			try{
				//throw("error");
				return new ActiveXObiect("MSXML2.XMLHTTP.6.0");
			}catch(e){
				try{
					//throw("error");
					return new ActiveXObiect("MSXML2.XMLHTTP.3.0");
				}catch(e){
					try{
						//throw("error");
						return new ActiveXObiect("MSXML2.XMLHTTP");
					}catch(e){
						if(window.confirm("浏览器版本太低，是否下载新版本")){
							window.location.href="http://download.firefox.com.cn"
						}
					}
				}
			}
		}
	}
	function aja(){
		var _ajax = createXMLHttpRequest();
		if(_ajax){
			_ajax.onreadystatechange = function(){
				if(_ajax.readyState == 4) {
					alert(_ajax.responseText);
				}
			}
			_ajax.open("get", "text1.txt", true);

			_ajax.send(null);
			}
	}
	
	function ajax2(){
		var _ajax = createXMLHttpRequest();
		if(_ajax){
			_ajax.onreadystatechange = function(){
			if(_ajax.readyState == 4) {
				alert(_ajax.responseText);
			}
			}
			_ajax.open("get", "ajax1.html", true);

			_ajax.send(null);
		}

	}
	function ajax3(){
		var _ajax = createXMLHttpRequest();
		if(_ajax){
			_ajax.onreadystatechange = function(){
			if(_ajax.readyState == 4) {
				alert(_ajax.responseText);
			}
			}
			_ajax.open("get", "a.js", true);

			_ajax.send(null);
			}

	}
	function demo(_obj){
		alert(_obj);
	}
	window.onload=function(){
		aja();
		ajax2();
		ajax3();
		ajaxRequest("post","text2.txt",null,demo,true);
		ajaxRequest("post","text1.txt",null,function(data){
			alert(data);
		},true);
	}
