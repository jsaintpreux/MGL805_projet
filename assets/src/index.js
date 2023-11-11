////////////////////////////////DEFINITION DES FONCTIONS QUI VONT ALIMENTER LES CHARTS/////////////////////////////////
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
		if(`${value}`=='Test GUI')
		 x0++;
	 else{
		 if(`${value}`=='Test API')
		 x1++;
	 else{if(`${value}`=='Test Performances')
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
/////////////////////////////////////////////////////////////////////////////////
function users_info()
{  
var k=0,m=0,n=0,o=0,p=0;
var user_info= [ "username","password","fullname","email","group_id"];
var username=[];
var password=[];
var fullname=[];
var email=[];
var group_id=[];
var taille=0;
var field_name=[];
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
					 taille=data.length; 
field_name=Object.keys(data[1]);

data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'username' ) {
		
		username[k]=`${value}`;
        k++;
    }	
	   if (key == 'password' ) {
		
		password[m]=`${value}`;
		 m++;
    }
		
	   if (key == 'fullname' ) {
		
		fullname[n]=`${value}`;
		 n++;
    }
	
	   if (key == 'email' ) {
		
		email[o]=`${value}`;
		o++;
    }
	 	
	   if (key == 'group_id' ) {
		
		group_id[p]=`${value}`;
		 p++;
    }

	  }
	 
});
				
					}	
                });	
				 
				 return {username:username,password:password,fullname:fullname,email:email,group_id:group_id};
}
/////////////////////////////////////////////////////////////////////////////////
function project_info()
{var m=0;
var k=0;
var l=0;
var environnement= [];
var count=[];
var statut=["Executing","Failed","Pending"];
var taille=0;
var field_name=[];
var pourcentage=[];
var test='';
var env=[];

	
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/env_exec',
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
    if (key == 'environment' ) {
		
		environnement[l]=`${value}`;
        l++;
    }	
	  
	  }
	 
});
					//	console.log(environnement);
					}
					});
					
	for(var j=0;j<environnement.length;j++){
	count[j]=0;
}				
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
					 taille=data.length; 
field_name=Object.keys(data[1]);

data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'environment' ) {
		
		env[k]=`${value}`;
        k++;
    }	
	   if (key == 'status' ) {
		
		if(`${value}`=='Executing')
        m++;
    }
	  }
	 
});
 pourcentage[0]=Math.round((m/taille)*100);
for (var i = 0; i < taille; i++) {
	for(j=0;j<count.length;j++){
	 if(env[i].search(environnement[j])>=0){
	 count[j]=count[j]+1;
	}
	
	}	
	}				
					}	
                });	
				 
				 return {taille:taille,count:count,environnement:environnement,pourcentage:pourcentage};
}
/////////////////////////////////////////////////////////////////////////////////////
function getBrowserData()
{ //var temp='';
var k=0;
var navigateur= ["Chrome", "Firefox", "Edge", "Safari", "Opera"];
var count=[];
var statut=[];
var taille=0;
var field_name=[];
var test='';
var env=[];
for(var j=0;j<navigateur.length;j++){
	count[j]=0;
}
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/executions',
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

data.forEach((obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key == 'Environnement' ) {
		env[k]=`${value}`;
        k++;
    }	
	  }
});
//console.log(env);
for (var i = 0; i < taille; i++) {
	// statut[i]=JSON.stringify(data[i][field_name[1]]);
	for(j=0;j<count.length;j++){
	 if(env[i]==navigateur[j]){
	 count[j]=count[j]+1;
	// //console.log(statut[i].replace('"','').replace('"','')+' '+val[0]);
	}
	}	
	}	
// }					
					}	
				//	
                });	
		//	console.log(count);
				 
				 return {taille:taille,count:count,navigateur:navigateur};
}
///////////////////////////////////////////////////////////////////////////////////////////////
function getcurrentuserinfo()
{var url      = window.location.href; 
url = new URL(url);
var id = url.searchParams.get("sessionid");
var urval_select=url.searchParams.get("select");
var fullname;
$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/users/'+id,
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
					fullname=data.fullname;	
					}
					});
		return {fullname,id};
}
///////////////////////////////////////////////////////////////////////////////////////////////
function getMessageValue(session_id)
{var val=[];
var l=0;
	$.ajax({'async': false,
                    type: "GET",
                    url: 'http://localhost:3000/message/'+session_id,
                    data: "",
					dataType:"json",
                    crossDomain: true,
                    cache: false,
					error: function(c, r, v)  
					{ 
						alert("Erreur!!!! Merci de vérifier votre connexion internet");
					
            }	,
                    success: function(data) {
					val=data.affichage;
					}
					});
					console.log(val);
					
return {val:val};
}
///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	"use strict";
	var e = {
		series: [{
			name: "Revenue",
			data: [240, 10, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: "line",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#17a00e"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#17a00e"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#17a00e"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart1"), e).render();
	e = {
		series: [{
			name: "Customers",
			data: [5, 6, 7]
		}],
		chart: {
			type: "bar",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !0,
				top: 10,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#17a00e"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#1884c6"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				columnWidth: "30%",
				endingShape: "rounded"
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart2"), e).render();
	e = {
		series: [{
			name: "Store Visitores",
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: "line",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#f41127"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#f41127"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#f41127"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart3"), e).render();
	e = {
		series: [{
			name: "Total Sales",
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: "Customers",
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: "Store Visitores",
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			foreColor: "#9ba7b2",
			type: "bar",
			height: 300,
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				columnWidth: "55%",
				endingShape: "rounded"
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			colors: ["transparent"]
		},
		colors: ["#0dcaf0", "#0d6efd", "#e5e7e8"],
		xaxis: {
			categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
		},
		grid: {
			show: true,
			borderColor: 'rgba(0, 0, 0, 0.15)',
			strokeDashArray: 4,
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function(e) {
					return "$ " + e + " thousands"
				}
			}
		}
	};
	new ApexCharts(document.querySelector("#chart4"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart5"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart6"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart7"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart8"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart9"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart10"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart11"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#17a00e"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#17a00e"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#17a00e"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart12"), e).render();
	e = {
		series: [{
			name: "Pageviews",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#f41127"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#f41127"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#f41127"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart13"), e).render();
	e = {
		series: [{
			name: "New Sessions",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0dcaf0"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#0dcaf0"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		colors: ["#0dcaf0"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};

	
/////////////////////////////////APPEL AUX DIFFERENTES FONCTIONS POUR ALIMENTER LES CHARTS///////////////////////////////////////////////////
	new ApexCharts(document.querySelector("#chart14"), e).render();
	var val=['PASSED','UNCOVERED','FAILED','NOTRUN'];
	var quantite_test=[];
	var qtyexecution;
	var texte;
	var userinfo=[];
	var getuserinfo=[];
	var getresult=[];
	var getprojectinfo=[];
	var info_test=[];
	var getdata=[];
	var nav=[];
	var qtyperbnav=[];
	var qtyexecution;
	var getbrowserinfo=[];
	var currentuserinfo='';
	var currentuserdata=[];
	var myData=[];
	var link_utilities;
	var link_testcases;
	var link_dashboard;
	var link_projects;
	var link_testresult;
	var messagevalue;
	var url      = window.location.href; 
	url = new URL(url);
	var id = url.searchParams.get("sessionid");
	var urval_select=url.searchParams.get("select");
	getbrowserinfo=getBrowserData();
	getdata=getTestResult();//On récupère le tableau d'objet renvoyé par la fonction getTestResult
	getprojectinfo=project_info();//On récupère le tableau d'objet renvoyé par la fonction project_info
	getuserinfo=users_info();//On récupère le tableau d'objet renvoyé par la fonction users_info
	currentuserdata=getcurrentuserinfo();
	messagevalue=getMessageValue(id);
///////////////////////////////LOAD DATA TO THE UI/////////////////////////////////////////
$( window ).on('load', function(){ 
	if(messagevalue.val=='Oui')
	$('#welcomeModal').modal('show');
else
$('#welcomeModal').modal('hide');
	link_utilities=`<li> <a href="../utilities?select=default&sessionid=`+currentuserdata.id+`"><i class='bx bx-radio-circle'></i>Défauts</a>`;
	link_testcases=`<li> <a href="../utilities?select=testcases&sessionid=`+currentuserdata.id+`"><i class='bx bx-radio-circle'></i>Cas de test<sub style="font-size:9px;color:blue;">Format Cucumber</sub></a>`;
	link_projects=`<li> <a href="../utilities?select=projects&sessionid=`+currentuserdata.id+`"><i class='bx bx-radio-circle'></i>Projets</a>`;
	link_testresult=`<li> <a href="../utilities?select=testresult&sessionid=`+currentuserdata.id+`&alltest#testresult"><i class='bx bx-radio-circle'></i>Résultat des tests</a>`;
	link_dashboard=`<a href="../home?select=dashboard&sessionid=`+currentuserdata.id+`" class="has-arrow">
	<div class="parent-icon"><i class='bx bx-home-alt'></i>
	</div>
	<div class="menu-title">Dashboard</div>
</a>`;
	$('#link_utilities').html(link_utilities);
	$('#link_testresult').html(link_testresult);
	$('#link_dashboard').html(link_dashboard);
	$('#link_testcases').html(link_testcases);
	$('#link_projects').html(link_projects);
	currentuserinfo=`<p class="user-name mb-0"> Utilisateur connnecté: <b>`+currentuserdata.fullname+`</b></p>
	<a href='../'>Déconnexion</a>`;
	$('#currentuser').html(currentuserinfo);
	/*for (var i = 0; i < getdata.count.length; i++) {
 info_test[i]='<li class="list-group-item d-flex bg-transparent justify-content-between align-items-center" id="id'+i+'">'+val[i]+' <span class="rounded-pill">'+getdata.count[i]+'</span></li>';
	$('#test').html(info_test);
	$(document).on("click", "#id"+i, function () {
		//alert(val[i]);
	});
	}*/
	texte=`
	<h6 style="font-size:15px;color:red;">Quantité de projet testé par OS</h6>
	<b>[`+getprojectinfo.environnement[0]+`: `+getprojectinfo.count[0]+`]    [`+getprojectinfo.environnement[1]+`: `+getprojectinfo.count[1]+`]     [`+getprojectinfo.environnement[2]+`: `+getprojectinfo.count[2]+`]</b>
	`;
	$('#info_projet').html(texte);		

	qtyexecution=getbrowserinfo.taille;
$('#qtyexecution').html('Test/navigateur: '+qtyexecution);
//console.log(getdata);
$('#allresult').dataTable({
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
$('#allresult').dataTable().fnClearTable();
for (var i = 0; i <getdata.id.length; i++) {
myData[i] = [
{
"id": getdata.id[i],
"Statut": getdata.statut[i],
"Type": getdata.type[i],
"Description": getdata.description[i],
"Priorité": getdata.priorite[i],
"Version": getdata.version_correction[i],
"Progression": getdata.progression[i],
"Taux succès": getdata.taux_succes[i],
"Etiquette": getdata.etiquettes[i],

}
];
$('#allresult').dataTable().fnAddData(myData[i]);
}
 

for (var i = 0; i < getuserinfo.email.length; i++) {
userinfo[i]=`
		<div class="customers-list-item d-flex align-items-center border-bottom p-2 cursor-pointer">
			<div class="ms-2">
				<h6 class="mb-1 font-14">`+getuserinfo.fullname[i]+`</h6>
				<p class="mb-0 font-13 text-secondary">`+getuserinfo.email[i]+`</p>
				<p class="mb-0 font-13 text-secondary"><b style='color:#333131;'>Groupe id</b>: `+getuserinfo.group_id[i]+`</p>
			</div>
			<div class="list-inline d-flex customers-contacts ms-auto">	<a href="javascript:;" class="list-inline-item"><i class='bx bxs-envelope'></i></a>
				<a href="javascript:;" class="list-inline-item"><i class='bx bxs-microphone'></i></a>
				<a href="javascript:;" class="list-inline-item"><i class='bx bx-dots-vertical-rounded'></i></a>
			</div>
			</div>
		</div>`;
												}
				$('#users_info').html(userinfo);


 
																																																																																																										
});	
	//console.log(getdata.count); 

	e = {
		series: getdata.count,
		chart: {
			height: 240,
			type: "donut"
		},
		legend: {
			position: "bottom",
			show: !1
		},
		plotOptions: {
			pie: {
				donut: {
					size: "80%"
				}
			}
		},
		colors: ["#17a00e", "#0d6efd", "#f41127", "#ffc107","#000000"],
		dataLabels: {
			enabled: !1
		},
		labels: val,//ajout des champs
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 200
				},
				legend: {
					position: "bottom"
				}
			}
		}]
	};
	new ApexCharts(document.querySelector("#chart15"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.5)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#6c757d",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#000",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#17a00e"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#17a00e"],
		series: [getdata.percentagetestcategory[0]],
		stroke: {
			lineCap: "round",
			width: "5"
		},
		labels: ["Test GUI"]
	};
	new ApexCharts(document.querySelector("#chart16"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#6c757d",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#000",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#f41127"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#f41127"],
		series: [getdata.percentagetestcategory[1]],
		stroke: {
			lineCap: "round"
		},
		labels: ["Test API"]
	};
	new ApexCharts(document.querySelector("#chart17"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#6c757d",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#000",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#ffc107"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#ffc107"],
		series: [getdata.percentagetestcategory[2]],
		stroke: {
			lineCap: "round"
		},
		labels: ["Test de Performances"]
	};
	new ApexCharts(document.querySelector("#chart18"), e).render();
	e = {
		series: [{
			name: "Test exécuté",
			data: [10, 5, 8, 10, 3, 5, 7, 2, 10, 11, 15, 20]
		}],
		chart: {
			foreColor: "#9ba7b2",
			type: "area",
			height: 270,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !1
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		grid: {
			show: true,
			borderColor: 'rgba(0, 0, 0, 0.15)',
			strokeDashArray: 4,
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				columnWidth: "30%",
				endingShape: "rounded"
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			//////////////////////////////////////////////graphe//////////////////////////////////
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !0
			},
			y: {
				formatter: function(e) {
					return " " + e + " "
				}
			},
			marker: {
				show: !1
			}
		}
	};
	
	new ApexCharts(document.querySelector("#chart19"), e).render();
	e = {
		series: getprojectinfo.pourcentage,//pourcentage des projets testés
		chart: {
			height: 310,
			type: "radialBar",
			offsetY: -10
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				hollow: {
					margin: 0,
					size: "70%",
					background: "transparent"
				},
				track: {
					strokeWidth: "100%",
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						opacity: .12
					}
				},
				dataLabels: {
					name: {
						fontSize: "16px",
						color: "#212529",
						offsetY: 5
					},
					value: {
						offsetY: 20,
						fontSize: "30px",
						color: "#212529",
						formatter: function(e) {
							return e + "%"
						}
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				shadeIntensity: .15,
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 65, 91]
			}
		},
		colors: ["#17a00e"],
		stroke: {
			dashArray: 4
		},
		labels: ["Pourcentage projet testé"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 300
				}
			}
		}]
	};
	

nav=getbrowserinfo.navigateur;
qtyperbnav=getbrowserinfo.count;
qtyexecution=getbrowserinfo.taille;
$("#qtyexecution").val(qtyexecution);


	new ApexCharts(document.querySelector("#chart20"), e).render();
	e = {
		series: [{
			name: "Quantité",
			data: qtyperbnav//qté par navigateur
		}],
		chart: {
			foreColor: "#6c757d",
			type: "bar",
			height: 390,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 10,
				blur: 3,
				opacity: .1,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "70%"
				}
			},
			bar: {
				horizontal: !1,
				columnWidth: "35%",
				endingShape: "rounded"
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: nav//nom des navigateurs utilisés
		},
		grid: {
			show: true,
			borderColor: 'rgba(0, 0, 0, 0.15)',
			strokeDashArray: 4,
		},
		fill: {
			opacity: 1
		}
	};
	new ApexCharts(document.querySelector("#chart21"), e).render()
	
	$(document).ready(function() {
		$('#Transaction-History').DataTable({
			lengthMenu: [[6, 10, 20, -1], [6, 10, 20, 'Todos']]
		});
	  } );
	  
	  
	  
	  
	    new PerfectScrollbar('.product-list');
		new PerfectScrollbar('.customers-list');
	
	
	
	
	
	
	
});