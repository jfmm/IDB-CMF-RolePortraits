(function ($) {
	
	// initialize Bootstrap tooltip plugin...
	$('[data-toggle="tooltip"]').tooltip();
	
  
  //declare JSON Object with IDB Doc ID numbers
  var pathLevelDocs = {
		
    "technicalSupport" : {
      "8":  'EZSHARE-947469414-446',
      "9":  'EZSHARE-947469414-447',
      "10": 'EZSHARE-947469414-448',
      "11": 'EZSHARE-947469414-449',
      "12": 'EZSHARE-947469414-450'
    },
    
    "officeSupport": {
      "8":  'EZSHARE-947469414-405',
      "9":  'EZSHARE-947469414-406',
      "10": 'EZSHARE-947469414-407',
      "11": 'EZSHARE-947469414-408',
      "12": 'EZSHARE-947469414-409'
    },
    
    "budget": {
      "1": 'EZSHARE-947469414-320',
      "2": 'EZSHARE-947469414-321',
      "3": 'EZSHARE-947469414-322',
      "4": 'EZSHARE-947469414-323',
      "5": 'EZSHARE-947469414-324',
      "6": 'EZSHARE-947469414-325',
      "7": 'EZSHARE-947469414-326',
      "8": 'EZSHARE-947469414-327',
      "9": 'EZSHARE-947469414-328',
    },
    
   "communications": {
      "1": 'EZSHARE-947469414-332',
      "2": 'EZSHARE-947469414-333',
      "3": 'EZSHARE-947469414-334',
      "4": 'EZSHARE-947469414-335',
      "5": 'EZSHARE-947469414-336',
      "6": 'EZSHARE-947469414-337',
      "7": 'EZSHARE-947469414-338',
      "8": 'EZSHARE-947469414-339',
      "9": 'EZSHARE-947469414-340',
    },
    
    "corporateServices": {
      "1": 'EZSHARE-947469414-460',
      "2": 'EZSHARE-947469414-461',
      "3": 'EZSHARE-947469414-462',
      "4": 'EZSHARE-947469414-463',
      "5": 'EZSHARE-947469414-464',
      "6": 'EZSHARE-947469414-465',
      "7": 'EZSHARE-947469414-466',
      "8": 'EZSHARE-947469414-467',
      "9": 'EZSHARE-947469414-468',
    },
    
    "economics": {
      "1": 'EZSHARE-947469414-342',
      "2": 'EZSHARE-947469414-343',
      "3": 'EZSHARE-947469414-344',
      "4": 'EZSHARE-947469414-345',
      "5": 'EZSHARE-947469414-346',
      "6": 'EZSHARE-947469414-347',
      "7": 'EZSHARE-947469414-348',
      "8": 'EZSHARE-947469414-349',
      "9": 'EZSHARE-947469414-350',
    },
    
    "fiduciary": {
      "1": 'EZSHARE-947469414-351',
      "2": 'EZSHARE-947469414-352',
      "3": 'EZSHARE-947469414-353',
      "4": 'EZSHARE-947469414-354',
      "5": 'EZSHARE-947469414-355',
      "6": 'EZSHARE-947469414-356',
      "7": 'EZSHARE-947469414-357',
      "8": 'EZSHARE-947469414-358',
      "9": 'EZSHARE-947469414-359',
    },
    
    "HR": {
      "1": 'EZSHARE-947469414-369',
      "2": 'EZSHARE-947469414-370',
      "3": 'EZSHARE-947469414-371',
      "4": 'EZSHARE-947469414-372',
      "5": 'EZSHARE-947469414-373',
      "6": 'EZSHARE-947469414-374',
      "7": 'EZSHARE-947469414-375',
      "8": 'EZSHARE-947469414-376',
      "9": 'EZSHARE-947469414-377',
    },
    
    "IT": {
      "1": 'EZSHARE-947469414-378',
      "2": 'EZSHARE-947469414-379',
      "3": 'EZSHARE-947469414-380',
      "4": 'EZSHARE-947469414-381',
      "5": 'EZSHARE-947469414-382',
      "6": 'EZSHARE-947469414-383',
      "7": 'EZSHARE-947469414-384',
      "8": 'EZSHARE-947469414-385',
      "9": 'EZSHARE-947469414-386',
    },
    
    "learningAndKnowledge": {
      "1": 'EZSHARE-947469414-387',
      "2": 'EZSHARE-947469414-388',
      "3": 'EZSHARE-947469414-389',
      "4": 'EZSHARE-947469414-390',
      "5": 'EZSHARE-947469414-391',
      "6": 'EZSHARE-947469414-392',
      "7": 'EZSHARE-947469414-393',
      "8": 'EZSHARE-947469414-394',
      "9": 'EZSHARE-947469414-395',
    },
    
    "legal": {
      "1": 'EZSHARE-947469414-396',
      "2": 'EZSHARE-947469414-397',
      "3": 'EZSHARE-947469414-398',
      "4": 'EZSHARE-947469414-399',
      "5": 'EZSHARE-947469414-400',
      "6": 'EZSHARE-947469414-401',
      "7": 'EZSHARE-947469414-402',
      "8": 'EZSHARE-947469414-403',
      "9": 'EZSHARE-947469414-404',
    },
    
    "operations": {
      "1": 'EZSHARE-947469414-410',
      "2": 'EZSHARE-947469414-411',
      "3": 'EZSHARE-947469414-412',
      "4": 'EZSHARE-947469414-413',
      "5": 'EZSHARE-947469414-414',
      "6": 'EZSHARE-947469414-415',
      "7": 'EZSHARE-947469414-416',
      "8": 'EZSHARE-947469414-417',
      "9": 'EZSHARE-947469414-418',
    },
    
    "oversight": {
      "1": 'EZSHARE-947469414-419',
      "2": 'EZSHARE-947469414-420',
      "3": 'EZSHARE-947469414-421',
      "4": 'EZSHARE-947469414-422',
      "5": 'EZSHARE-947469414-423',
      "6": 'EZSHARE-947469414-424',
      "7": 'EZSHARE-947469414-425',
      "8": 'EZSHARE-947469414-426',
      "9": 'EZSHARE-947469414-427',
    },
    
    "finance": {
      "1": 'EZSHARE-947469414-360',
      "2": 'EZSHARE-947469414-361',
      "3": 'EZSHARE-947469414-362',
      "4": 'EZSHARE-947469414-363',
      "5": 'EZSHARE-947469414-364',
      "6": 'EZSHARE-947469414-365',
      "7": 'EZSHARE-947469414-366',
      "8": 'EZSHARE-947469414-367',
      "9": 'EZSHARE-947469414-368',
    },
    
    "resourcePlanning": {
      "1": 'EZSHARE-947469414-428',
      "2": 'EZSHARE-947469414-429',
      "3": 'EZSHARE-947469414-430',
      "4": 'EZSHARE-947469414-431',
      "5": 'EZSHARE-947469414-432',
      "6": 'EZSHARE-947469414-433',
      "7": 'EZSHARE-947469414-434',
      "8": 'EZSHARE-947469414-435',
      "9": 'EZSHARE-947469414-436',
    },
    
    "sector": {
      "1": 'EZSHARE-947469414-437',
      "2": 'EZSHARE-947469414-438',
      "3": 'EZSHARE-947469414-439',
      "4": 'EZSHARE-947469414-440',
      "5": 'EZSHARE-947469414-441',
      "6": 'EZSHARE-947469414-442',
      "7": 'EZSHARE-947469414-443',
      "8": 'EZSHARE-947469414-444',
      "9": 'EZSHARE-947469414-445',
    },
    
    "treasury": {
      "1": 'EZSHARE-947469414-451',
      "2": 'EZSHARE-947469414-452',
      "3": 'EZSHARE-947469414-453',
      "4": 'EZSHARE-947469414-454',
      "5": 'EZSHARE-947469414-455',
      "6": 'EZSHARE-947469414-456',
      "7": 'EZSHARE-947469414-457',
      "8": 'EZSHARE-947469414-458',
      "9": 'EZSHARE-947469414-459',
    },
    
     "businessLeader": {
      "1": 'EZSHARE-947469414-329',
      "2": 'EZSHARE-947469414-330',
      "3": 'EZSHARE-947469414-331',
    },
    
    "countryLeader": {
      "R": 'EZSHARE-947469414-341'
    },
  };
  

  var button = $(".career-path-col .cmf-info-box"); // bind to boxes under career path column only
  
  
  button.on("click", function () {
    
    var thisButton = $(this), // get button instance clicked
        path = thisButton.data("path"); // get the career path value  of the button selected
    
		// first hide the elements tooltip
		thisButton.tooltip("hide");
		
		// if the box had already been selected
    if(thisButton.hasClass("cmf-info-box-selected")) {
		
			//hide its Work role column
      thisButton.parent()
								.siblings(":not(.track-box)") 
								.removeClass("cmf-col-visible cmf-info-box-selected")
								.addClass("cmf-col-hidden");
								
		} else {
			
			//show Work role column
      thisButton.parent()
								.siblings()
								.removeClass("cmf-col-hidden")
								.addClass("cmf-col-visible");
		}
			
    
   // if there's a button already selected, deselect it  
		if(button.hasClass("cmf-info-box-selected")) 
          button.removeClass("cmf-info-box-selected");
      
		
    //then add selected class to button that was clicked
      thisButton.addClass("cmf-info-box-selected");
      
      
      //hide the irrelevant Work role columns
      thisButton.parent()
                .parent()
                .siblings()
                .children(".role-col") // only children with this class
                .removeClass("cmf-col-visible")
                .addClass("cmf-col-hidden");
   
    
    
    //select work role links currently visible
   	var level = $("div.cmf-col-visible .level-btn");
		
		
	//conditional logic for Mangerial track
	if(path === "countryLeader" || path === "businessLeader") {

		for(var i = 0; i < level.length; i++) {

			var $currentBtn = $(level[i]);//cache jquery obj reference

			// disable/enable buttons according to path
			if($currentBtn.data("relatedpath") !== path) 
				$currentBtn.addClass("level-btn-disabled").removeAttr("target");
	
			 else 
				$currentBtn.removeClass("level-btn-disabled").attr("target", "_blank");
			
		}
	} 

    
   
		/*
    *  Link Dynamic population Logic
    */
    
    var docIDs = []; // stores IDB Doc ids for path clicked
    
    for(prop in pathLevelDocs[path]) {
      docIDs.push(pathLevelDocs[path][prop]);
    }
		

    var baseURL = "https://idbg.sharepoint.com/teams/ez-HRD/Outreach/_layouts/15/DocIdRedir.aspx?ID=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
      
        // do not append a URL to boxes that are disabled...
        if($(level[index]).hasClass("level-btn-disabled")) {

					level[index].href = "#";

				} 
				else if(path === "countryLeader") {
					
					// for country rep, we just hardcode the index for now...
					level[index].href = baseURL + docIDs[0] + "&CONTDISP=inline";
				
				}

				else {

					level[index].href = baseURL + docIDs[index];
				}

					});
  });
  
})(jQuery);
