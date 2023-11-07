var getallprojects=[];
var myData=[];
//var totaldefaut;
var url      = window.location.href; 
	url = new URL(url);
	var id = url.searchParams.get("sessionid");
	var urval_select=url.searchParams.get("select");
  getallprojects=getprojects();

if(urval_select=='projects'){          
  $('#projects').dataTable({
             aoColumns: [
             { mData: 'id' },
             { mData: 'key' },
             { mData: 'name'},
             { mData: 'description'},
             { mData: 'url'},
             { mData: 'state'} ,
             { mData: 'visibility'} ,
             { mData: 'version'} ,
             { mData: 'revision'} ,
             { mData: 'environment'} ,
             { mData: 'status'}   
          ]
      });
      
   $('#projects').dataTable().fnClearTable();
   for (var i = 0; i <getallprojects.id.length; i++) {
     myData[i] = [
      {
        "id": getallprojects.id[i],
        "key": getallprojects.key1[i],
        "name": getallprojects.name[i],
        "description": getallprojects.description[i],
        "url": getallprojects.url[i],
        "state": getallprojects.state[i],
        "visibility": getallprojects.visibility[i],
        "version": getallprojects.version[i],
        "revision": getallprojects.revision[i],
        "environment": getallprojects.environment[i],
        "status": getallprojects.status[i]
      }
    ];
    $('#projects').dataTable().fnAddData(myData[i]);
  }
  $('#defauts').hide();     
  $('#graphe').hide();  
  $('#label_defaut').hide(); 
  $('#resultat_test').hide(); 
  $('#label_projects').show(); 
  $('#label_test_case').hide();
  $('#alltestresult').hide(); 
  $('#projects').show();   
}





function getprojects()
{var m=0;
var n=0;
var o=0;
var l=0;
var p=0;
var q=0;
var r=0;
var s=0;
var s1=0;
var t=0;
var u=0;
var id=[];
var key1=[];
var name=[];
var description=[];
var url=[];
var state=[];
var visibility=[];
var version=[];
var revision=[];
var environment=[];
var status=[];
var field_name=[];
 
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/projects',
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
    if (key == 'id' ) {
		
		id[l]=`${value}`;
        l++;
    }
	 if (key == 'key' ) {
		
		key1[t]=`${value}`;
        t++;
    }
	 if (key == 'name' ) {
		
		name[u]=`${value}`;
        u++;
    }
  if (key == 'description' ) {
		
		description[m]=`${value}`;
        m++;
    }
  if (key == 'url' ) {
		
		url[n]=`${value}`;
        n++;
    }	
	  if (key == 'state' ) {
		
		state[o]=`${value}`;
        o++;
    }
  if (key == 'visibility' ) {
		
		visibility[p]=`${value}`;
        p++;
    }
	  if (key == 'version' ) {
		
		version[q]=`${value}`;
        q++;
    }
  if (key == 'revision' ) {
		
		revision[r]=`${value}`;
        r++;
    }
	  if (key == 'environment' ) {
		
		environment[s]=`${value}`;
        s++;
    }
    if (key == 'status' ) {
		
		status[s1]=`${value}`;
        s1++;
    }
	  }
	  
	 
});
					
					}
					});
					
			
return {id:id,key1:key1,name:name,description:description,url:url,state:state,visibility:visibility,version:version,revision:revision,environment:environment,status:status};
}