var getalltestresult=[];
var myData=[];
var url      = window.location.href; 
url = new URL(url);
var id = url.searchParams.get("sessionid");
var urval_select=url.searchParams.get("select");
getalltestresult=getTestResult();
if(urval_select=='testresult'){  
    $('#alltestresult').dataTable({
	aoColumns: [
	{ mData: 'id' },
	{ mData: 'Statut' },
	{ mData: 'Type'},
	{ mData: 'Description'},
	{ mData: 'Priorité'},
	{ mData: 'Version'},
	{ mData: 'Progression' },
	{ mData: 'Taux succès'},
	{ mData: 'Etiquette'}
	
 ]
});
$('#alltestresult').dataTable().fnClearTable();
for (var i = 0; i <getalltestresult.id.length; i++) {
myData[i] = [
{
"id": getalltestresult.id[i],
"Statut": getalltestresult.statut[i],
"Type": getalltestresult.type[i],
"Description": getalltestresult.description[i],
"Priorité": getalltestresult.priorite[i],
"Version": getalltestresult.version_correction[i],
"Progression": getalltestresult.progression[i],
"Taux succès": getalltestresult.taux_succes[i],
"Etiquette": getalltestresult.etiquettes[i],

}
];
$('#alltestresult').dataTable().fnAddData(myData[i]);
$('#defauts').hide();     
$('#graphe').hide();  
$('#label_defaut').hide(); 
$('#label_test_case').hide(); 
$('#label_projects').hide(); 
$('#resultat_test').show(); 
$('#testcases').hide();   
$('#alltestresult').show(); 
}  
  }
  


function getTestResult()
{ 
var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x0=0,x1=0,x2=0,x3=0;
var id=[];
var statut=[];
var type=[];
var description=[];
var priorite=[];
var version_correction=[];
var progression=[];
var totaux_exec_test=[];
var taux_succes=[];
var exigence_id=[];
var etiquettes=[];
var taille=0;
var field_name=[];
var testtype=[];
var count=[];
var percentagetestcategory=[];
var val=['PASSED','UNCOVERED','FAILED','NOTRUN'];

$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/testcategory',
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
						data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'testtype' ) {
		
		testtype[l]=`${value}`;
        l++;
    }	
	  
	  }
	 
});
					
					}
					});
for(var j=0;j<val.length;j++){
	count[j]=0;
}
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/tests/',
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
									 taille=data.length; 
field_name=Object.keys(data[1]);
					
for (var i = 0; i < taille; i++) {
	statut[i]=JSON.stringify(data[i][field_name[1]]);
	for(j=0;j<count.length;j++){
	if(statut[i].replace('"','').replace('"','')==val[j]){
	count[j]=count[j]+1;
	}
	}	
}
						
					 data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'id' ) {
		
		id[k]=`${value}`;
        k++;
    }	
	   if (key == 'Status' ) {
		
		statut[m]=`${value}`;
		 m++;
    }
		
	   if (key == 'Type' ) {
		
		type[n]=`${value}`;
		 n++;
    }
	
	   if (key == 'Description' ) {
		
		description[o]=`${value}`;
		o++;
    }
	 	
	   if (key == 'Priorite' ) {
		
		priorite[p]=`${value}`;
		 p++;
    }
  if (key == 'Version_correction' ) {
		
		version_correction[q]=`${value}`;
		 q++;
    }
	 if (key == 'Progression' ) {
		
		progression[r]=`${value}`;
		 r++;
    }
	if (key == 'Totaux_exec_test' ) {
		
		totaux_exec_test[s]=`${value}`;
		 s++;
    }
	if (key == 'Taux_succes' ) {
		
		taux_succes[u]=`${value}`;
		 u++;
    }
	if (key == 'exigence_id' ) {
		
		exigence_id[v]=`${value}`;
		 v++;
    }
	if (key == 'Etiquettes' ) {
		
		etiquettes[w]=`${value}`;
		 w++;
    }
	if (key == 'testtype' ) {
		if(`${value}`=='Unit test')
		 x0++;
	 else{
		 if(`${value}`=='Integration test')
		 x1++;
	 else{if(`${value}`=='Performance test')
		 x2++;
		 else{if(`${value}`=='Smoke test')
		 x3++;
		 }
	 }
	 }
							}
	
	  }
	 
});		
					}	
				//	
                });	
percentagetestcategory[0]=Math.round((x0/taille)*100);				 
percentagetestcategory[1]=Math.round((x1/taille)*100);				 
percentagetestcategory[2]=Math.round((x2/taille)*100);				 
percentagetestcategory[3]=Math.round((x3/taille)*100);	
			 
				 return {percentagetestcategory:percentagetestcategory,field_name:field_name,testtype:testtype,count:count,id:id,statut:statut,type:type,description:description,priorite:priorite,version_correction:version_correction,progression:progression,totaux_exec_test:totaux_exec_test,taux_succes:taux_succes,exigence_id:exigence_id,etiquettes:etiquettes};
}
