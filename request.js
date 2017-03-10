$(document).ready(function(){
	$("#submitadd").click(function(){
		$.ajax({type: "POST",dataType: 'json',
		url: "/webapi/" ,data: $('form').serialize(),
		error: function(xhr, ajaxOptions, thrownError){
			$('#response').html(xhr); },
		cache: false,beforeSend: function(){
			$('#response').html("<div class='progress progress-striped active'><div class='bar' style='width: 40%;'></div></div>");
			},
		success: function(s){
			if (s.status == "Success"){
				$('#response').html("<div class='alert alert-success'><strong>" + "Success : Your server has been added!. " + "<br>" + "Server Name : " + s.server + "<br>" + "Location : " + s.locate + "<br>" + "Root Password : " + s.pwd + "<br>" + "Donatur : " + s.owner + "<br>" + "Max User : " + s.maxuser + "<br>" + "User Expired : " + s.exp + "<br>" + "No Telp : " + s.contact + "<br>" + "Link FB : " + s.linkfb + "<br>" + "OpenSSH Port : " + s.openssh + "<br>" + "DropBear Port : " + s.dropbear + "<br>" + "Note : " + s.ket + "</strong></div>");
			} else {
			$('#response').html("<div class='alert alert-danger'><div class='container-fluid'><strong> Failed : " + s.result + "</strong></div></div>");}
			}
			});
			return false;
		});
	$("#submitcreate").click(function(){$.ajax({type: "POST",dataType: 'json',url: "/webapi/",data: $('form').serialize(),error: function(xhr, ajaxOptions, thrownError){$('#response').html(xhr);},cache: false,beforeSend: function(){$('#response').html("<img src='ajax-loader.gif'/>");},success: function(s){if (s.status == "Success"){$('#response').html("<div class='alert alert-success'><div class='container-fluid'><strong> Status : Your account added is Successfully.!<br>" + "Hostname/Ip Address : "+s.hostname + "<br>Username : " + s.username + "<br>Password : " + s.password + "<br>Registration Date : " + s.regdate + "<br>Expired Date : " + s.expdate + "</strong></div></div>");} else {$('#response').html("<div class='alert alert-danger'><div class='container-fluid'><strong> Failed : " + s.result + "</strong></div></div>");}}});return false;});
});
