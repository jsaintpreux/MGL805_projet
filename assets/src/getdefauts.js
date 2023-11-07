////////////////////////Ce fichier gère l'affichage des défauts au niveau de l'applicaton/////////////////////
var getalldata=[];
var myData=[];
var totaldefaut;
var link_dashboard;
var url      = window.location.href; 
	url = new URL(url);
	var id = url.searchParams.get("sessionid");
	var urval_select=url.searchParams.get("select");
getalldata=getdefauts();
updateMessageValue(id);
if(urval_select=='default'){          
        $('#defauts').dataTable({
                   aoColumns: [
                   { mData: 'id' },
                   { mData: 'description' },
                   { mData: 'execution_id', },
                   { mData: 'category', }
                ]
            });
         
         $('#defauts').dataTable().fnClearTable();
         for (var i = 0; i <getalldata.id.length; i++) {
           myData[i] = [
            {
              "id": getalldata.id[i],
              "description": getalldata.description[i],
              "execution_id": getalldata.execution_id[i],
              "category": getalldata.category[i]
            }
          ];
          $('#defauts').dataTable().fnAddData(myData[i]);
        }
        $('#defauts').show();     
        $('#graphe').show();  
        $('#label_defaut').show(); 
        $('#label_test_case').hide(); 
        $('#label_projects').hide(); 
        $('#resultat_test').hide(); 
        $('#testcases').hide();   
        $('#alltestresult').hide();   
    }

   
totaldefaut=`<div id="totaldefauts" style="top:10px;">
<p class="mb-0">Total défauts</p>
<h5 class="mb-0">`+getalldata.id.length+`</h5>
</div>`;
$( window ).on('load', function(){ 
$('#totaldefaut').html(totaldefaut);
$('#checkwelcomemodal').val(2);
if($('#checkwelcomemodal').val()==2){
link_dashboard=`<a href="../home?select=dashboard&sessionid=`+id+`&welcome=false" class="has-arrow">
	<div class="parent-icon"><i class='bx bx-home-alt'></i>
	</div>
	<div class="menu-title">Dashboard</div>
</a>`;
$('#link_dashboard').html(link_dashboard);
}
});

/////////////////////////Définition de la fonction getdefauts/////////////////////////////////////
function getdefauts()
{var m=0;
var n=0;
var o=0;
var l=0;
var id=[];
var description=[];
var execution_id=[];
var category=[];
var field_name=[];
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/defauts',
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
  if (key == 'Description' ) {
		
		description[m]=`${value}`;
        m++;
    }
  if (key == 'execution_id' ) {
		
		execution_id[n]=`${value}`;
        n++;
    }	
	  if (key == 'category' ) {
		
		category[o]=`${value}`;
        o++;
    }
	  
	  }
	 
});					
					}
					});				
			 
return {field_name:field_name,id:id,description:description,execution_id:execution_id,category:category};
}
function updateMessageValue(sessionid)
{$.ajax({'async': false,
                    type: "PUT",
                    url: 'http://localhost:3000/message/'+sessionid,
                    data: {
								
								"affichage": "Non"
						  },
					dataType:"json",
                    crossDomain: true,
                    cache: false,
                    error: function(c, r, v)  
					{ 
						alert("Erreur!!!! Merci de vérifier votre connexion internet");
					
            }	,
                    success: function(data) {
					}
					});
}

