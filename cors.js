function createNewAccount(){
	var http = new XMLHttpRequest();
	var url = "http://192.168.1.101:3000/api/accounts";
	var data = "account[email]=exampltwoe@domain.com; account[password]=Pa55Word; account[account_type_id]=1";
	http.open("POST", url,true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


	http.onreadystatechange = function(){
		// alert(http.responseText);
		if(http.readyState== 4 && http.status == 200){
			alert(http.responseText);
		}

		if (http.readyState== 4 && http.status == 422){
			alert(http);
		}
	}

	http.send(data);	
}

function getAccount(id){
	var http = new XMLHttpRequest();
	var url = "http://192.168.1.101:3000/api/accounts/"+id;
	http.open("GET", url,true);
	http.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImV4YW1wbGVAZG9tYWluLmNvbSIsImV4cCI6MTQxNTg2ODcyMH0.X-ok6zX8i1vE1IdaatrTZE5u8tDGlDbqVBCTayaZbNg");

	http.onreadystatechange = function(){
		if(http.readyState== 4 && http.status == 200){
			alert(http.responseText);
		}

		if (http.readyState== 4 && http.status == 422){
			alert(http);
		}
	}

	http.send();	
}

function activateAccount(){
	var http = new XMLHttpRequest();
	var url = "http://192.168.1.101:3000/api/account_activation";
	var param = "activated_token=49868bb8fdd5f35cd107f8425ac07de4";
	http.open("PATCH", url,true);
		http.onreadystatechange = function(){
		// alert(http.responseText);
		if(http.readyState== 4 && http.status == 200){
			alert(http.responseText);
		}

		if (http.readyState== 4 && http.status == 422){
			alert(http);
		}
	}

	http.send(param);
}

function createEmployment(){
	var http = new XMLHttpRequest();
	var url = "http://192.168.1.101:3000/api/employments";
	var param = "invitation_token=229de6037c84ce8db219069a7d134e29";
	http.open("POST", url,true);
	http.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImV4YW1wbGVAZG9tYWluLmNvbSIsImV4cCI6MTQxNTg2ODcyMH0.X-ok6zX8i1vE1IdaatrTZE5u8tDGlDbqVBCTayaZbNg");

	http.onreadystatechange = function(){
	// alert(http.responseText);
	if(http.readyState== 4 && http.status == 200){
		alert(http.responseText);
	}

	if (http.readyState== 4 && http.status == 422){
		alert(http);
	}
	}

	http.send(param);
}

function sendOptions(){
	var http = new XMLHttpRequest();
	var url = "http://192.168.1.101:3000/api/employments/1";
	// var param = "invitation_token=229de6037c84ce8db219069a7d134e29";
	http.open("OPTIONS", url,true);
	http.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImV4YW1wbGVAZG9tYWluLmNvbSIsImV4cCI6MTQxNTg2ODcyMH0.X-ok6zX8i1vE1IdaatrTZE5u8tDGlDbqVBCTayaZbNg");

	http.onreadystatechange = function(){
	// alert(http.responseText);
	if(http.readyState== 4 && http.status == 200){
		alert(http.responseText);
	}

	if (http.readyState== 4 && http.status == 422){
		alert(http);
	}
	}

	http.send();
}












