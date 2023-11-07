


var getalltestcases=[];
var myData=[];
//var totaldefaut;
var url      = window.location.href; 
	url = new URL(url);
	var id = url.searchParams.get("sessionid");
	var urval_select=url.searchParams.get("select");
  getalltestcases=gettestcases();

if(urval_select=='testcases'){          
  $('#testcases').dataTable({
             aoColumns: [
             { mData: 'sommaire' },
             { mData: 'description' },
             { mData: 'version'},
             { mData: 'type'},
             { mData: 'environnement'},
             { mData: 'utilisateur'} ,
             { mData: 'automatisation'} 
          ]
      });
   //console.log(getalltestcases.automation);
   $('#testcases').dataTable().fnClearTable();
   for (var i = 0; i <getalltestcases.summary.length; i++) {
     myData[i] = [
      {
        "sommaire": getalltestcases.summary[i],
        "description": getalltestcases.description[i],
        "version": getalltestcases.version[i],
        "type": getalltestcases.type[i],
        "environnement": getalltestcases.environment[i],
        "utilisateur": getalltestcases.user[i],
        "automatisation": getalltestcases.automation[i]
      }
    ];
    $('#testcases').dataTable().fnAddData(myData[i]);
  }
  $('#defauts').hide();     
  $('#graphe').hide();  
  $('#label_defaut').hide(); 
  $('#label_projects').hide(); 
  $('#resultat_test').hide(); 
  $('#alltestresult').hide(); 
  $('#label_test_case').show(); 
  $('#testcases').show();   
}






function gettestcases()
{var m=0;
var n=0;
var o=0;
var l=0;
var p=0;
var q=0;
var r=0;
var s=0;
var summary=[];
var description=[];
var version=[];
var type=[];
var environment=[];
var automation=[];
var user=[];
var type=[];
var field_name=[];
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/testcases',
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
						field_name=Object.keys(data[1]);
						  data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'summary' ) {
		
		summary[l]=`${value}`;
        l++;
    }
  if (key == 'description' ) {
		
		description[m]=`${value}`;
        m++;
    }
  if (key == 'version' ) {
		
		version[n]=`${value}`;
        n++;
    }	
	  if (key == 'type' ) {
		
		type[o]=`${value}`;
        o++;
    }
  if (key == 'testEnvironments' ) {
		
		environment[p]=`${value}`;
        p++;
    }
	  if (key == 'user' ) {
		
		user[q]=`${value}`;
        q++;
    }
  if (key == 'type' ) {
		
		type[r]=`${value}`;
        r++;
    }
	  if (key == 'Automation' ) {
		
		automation[s]=`${value}`;
        s++;
    }
	  }
	  
	 
});
					
					}
					});
					
return {field_name:field_name,summary:summary,description:description,version:version,type:type,environment:environment,user:user,automation:automation};
}