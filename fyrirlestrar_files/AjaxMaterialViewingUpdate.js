<!-- Subrutine for initialization -->
	function createRequestObject(){
		var request_;
		var browser = navigator.appName;
		if(browser == "Microsoft Internet Explorer"){
			request_ = new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			request_ = new XMLHttpRequest();
		}
		return request_;
	}


<!-- The functions who will do the job, the request and displayer -->
	var http = createRequestObject();

	function AjaxMaterialViewingUpdate(i, j){
		http.open('get', './Ajax/AjaxMaterialViewingUpdate.asp?ID_Material='+i+'&ID_Type='+j, true);
		http.onreadystatechange = handleInfo;
		http.send(null);
	}

	function handleInfo(){
		if(http.readyState == 4){
//			var response = http.responseText;
//			alert ('eftir '+response);
//			document.getElementById('AjaxMaterialViewingUpdate').innerHTML = '' + response; 
		}
	}

