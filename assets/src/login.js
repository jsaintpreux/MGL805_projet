var email='';
	var motdepasse='';
	var x1=0;
	var x2=0;
	var nomprenom='';
	var field_name=[];
	var i=0;
	var k=0;
	var getdata=[];
		$(document).ready(function () {
			$("#connexion").on('click', function (event) {
			email=$("#inputEmailAddress").val();
			motdepasse=$("#inputChoosePassword").val();
			$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/users',
                    data: "",
					dataType:"json",
                    crossDomain: true,
                    cache: false,
                    beforeSend: function() {
                        $("#insert").val('Loading...');
                    }
					, error: function(c, r, v)  
					{ 
						alert("Erreur!!!! Merci de vérifier votre connexion internet");
					
            }	,
                    success: function(data) {
					getdata=data;
					field_name=Object.keys(data[1]);
						data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'email' ) {
		if(`${value}`==email){
		x1=1;
		k=i;
		}
		i++;
    }
 if (key == 'password') {
		if(`${value}`==motdepasse)
		x2=1;
    }	
	 //console.log(`${value}`+' '+email+'  '+motdepasse+' '+x1+' '+x2); 
//	 break;
 
  
  
	  }	 
});
	$(document).on('keypress',function(e) {
    if(e.which == 13) {
      //  alert('You pressed enter!');
    }
});
//console.log(k);
	 if(x1==0&&x2==1){
  alert('Cette adresse email n\'existe pas');
  k=0;
  i=0;
  }
  else
  { if(x1==1&&x2==0){
  alert('Mot de passe incorrect. Veuillez réessayer.');
  k=0;
  i=0;
  }
  else
  {if(x1==1&&x2==1){
	//console.log(data);
  if(getdata != null)
window.location.href = "http://localhost/taf/home/?sessionid="+getdata[k].id;
	}
	else{
	if(email=='')
	{alert('Le champ email est obligatoire');
	}
	else{
	if(motdepasse=='')
	alert('Le champ mot de passe est obligatoire');
	if(x1==0&&x2==0)
	alert('Connexion impossible. Email et/ou mot de passe incorrect.');
	}
	}	
  }
  }
	}
					});
			
			});
			
		});