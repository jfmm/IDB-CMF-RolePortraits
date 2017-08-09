(function ($) {
  
  //declare JSON Object with IDB Doc ID numbers
  var pathLevelDocs = {
		
    "technicalSupport" : {
      "8": '',
      "9": '',
      "10": '',
      "11": '',
      "12": ''
    },
    
    "officeSupport": {
      "8": '',
      "9": '',
      "10": '',
      "11": '',
      "12": ''
    },
    
    "budget": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
   "communications": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "corporateServices": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "economics": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "fiduciary": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "HR": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "IT": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "learningAndKnowledge": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "legal": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "operations": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "oversight": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "finance": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "resourcePlanning": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "sector": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
    "treasury": {
      "1": '',
      "2": '',
      "3": '',
      "4": '',
      "5": '',
      "6": '',
      "7": '',
      "8": '',
      "9": '',
    },
    
     "businessLeader": {
      "1": '',
      "2": '',
      "3": '',
    },
    
    "countryLeader": {
      "1": '',
      "2": '',
      "3": '',
    },
  };
  

  var button = $(".career-path-col .cmf-info-box"); // bind to boxes under career path column only
  
  
  button.on("click", function () {
    
    var thisButton = $(this);// get button instance clicked
   
    
    /*
    * GUI Logic
    *
    */ 
    if (thisButton.data("type") === "path") {
      
      // if there's a button already selected, deselect it
      if(button.hasClass("cmf-info-box-selected")) 
          button.removeClass("cmf-info-box-selected");
      
      //then add selected class to button that was clicked
      thisButton.addClass("cmf-info-box-selected");
      
      //show sibling columns
      thisButton.parent().siblings().removeClass("cmf-col-hidden").addClass("cmf-col-visible");
      
      //hide the other work roles/grade levels
      thisButton.parent()
                .parent()
                .siblings()
                .children(".role-col") // only children with this class
                .removeClass("cmf-col-visible")
                .addClass("cmf-col-hidden");
    }
    
    
    
    
    /*
    *  Link Logic
    */
    
    var path = thisButton.data("path");
    
    //select only the level buttons that are visible
    var level = $("div.cmf-col-visible .level-btn");
    
   
    
    var docIDs = []; // stores EZSHARE ids for path clicked
    
    for(prop in pathLevelDocs[path]) {
      docIDs.push(pathLevelDocs[path][prop]);
    }

    var baseURL = "https://idbg.sharepoint.com/teams/IICCorporate/administrative management/_layouts/15/DocIdRedir.aspx?ID=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
       
        level[index].href = baseURL + docIDs[index];

    });
    
    
    
    
  });
  
})(jQuery);
