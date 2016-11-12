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
function ajaxRequest(_method,_url,_parameter,_fn,_async){
		var _ajax = createXMLHttpRequest();
		if(_ajax){
			_ajax.onreadystatechange = function(){
			if(_ajax.readyState == 4) {
				_fn(_ajax.responseText);
			}
			}
			_ajax.open(_method, _url, _async);

			_ajax.send(_parameter);
			}

	}
	