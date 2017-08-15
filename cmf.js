(function ($) {
  
  //declare JSON Object with IDB Doc ID numbers
  var pathLevelDocs = {
		
    "technicalSupport" : {
      "8":  '40881696',
      "9":  '40881697',
      "10": '40881698',
      "11": '40881699',
      "12": '40881700'
    },
    
    "officeSupport": {
      "8":  '40881647',
      "9":  '40881648',
      "10": '40881649',
      "11": '40881650',
      "12": '40881651'
    },
    
    "budget": {
      "1": '40881527',
      "2": '40881529',
      "3": '40881530',
      "4": '40881531',
      "5": '40881532',
      "6": '40881533',
      "7": '40881534',
      "8": '40881535',
      "9": '40881536',
    },
    
   "communications": {
      "1": '40881566',
      "2": '40881567',
      "3": '40881568',
      "4": '40881569',
      "5": '40881570',
      "6": '40881571',
      "7": '40881572',
      "8": '40881573',
      "9": '40881574',
    },
    
    "corporateServices": {
      "1": '40881740',
      "2": '40881741',
      "3": '40881742',
      "4": '40881743',
      "5": '40881744',
      "6": '40881745',
      "7": '40881746',
      "8": '40881747',
      "9": '40881748',
    },
    
    "economics": {
      "1": '40881576',
      "2": '40881577',
      "3": '40881578',
      "4": '40881579',
      "5": '40881580',
      "6": '40881581',
      "7": '40881582',
      "8": '40881583',
      "9": '40881584',
    },
    
    "fiduciary": {
      "1": '40881585',
      "2": '40881586',
      "3": '40881587',
      "4": '40881588',
      "5": '40881589',
      "6": '40881590',
      "7": '40881591',
      "8": '40881592',
      "9": '40881593',
    },
    
    "HR": {
      "1": '40881603',
      "2": '40881604',
      "3": '40881605',
      "4": '40881606',
      "5": '40881607',
      "6": '40881608',
      "7": '40881609',
      "8": '40881610',
      "9": '40881611',
    },
    
    "IT": {
      "1": '40881613',
      "2": '40881614',
      "3": '40881615',
      "4": '40881616',
      "5": '40881617',
      "6": '40881618',
      "7": '40881619',
      "8": '40881620',
      "9": '40881621',
    },
    
    "learningAndKnowledge": {
      "1": '40881627',
      "2": '40881628',
      "3": '40881629',
      "4": '40881630',
      "5": '40881631',
      "6": '40881632',
      "7": '40881633',
      "8": '40881634',
      "9": '40881635',
    },
    
    "legal": {
      "1": '40881638',
      "2": '40881639',
      "3": '40881640',
      "4": '40881641',
      "5": '40881642',
      "6": '40881643',
      "7": '40881644',
      "8": '40881645',
      "9": '40881646',
    },
    
    "operations": {
      "1": '40881652',
      "2": '40881653',
      "3": '40881654',
      "4": '40881655',
      "5": '40881656',
      "6": '40881657',
      "7": '40881658',
      "8": '40881659',
      "9": '40881660',
    },
    
    "oversight": {
      "1": '40881661',
      "2": '40881662',
      "3": '40881663',
      "4": '40881664',
      "5": '40881665',
      "6": '40881666',
      "7": '40881667',
      "8": '40881668',
      "9": '40881669',
    },
    
    "finance": {
      "1": '40881594',
      "2": '40881595',
      "3": '40881596',
      "4": '40881597',
      "5": '40881598',
      "6": '40881599',
      "7": '40881600',
      "8": '40881601',
      "9": '40881602',
    },
    
    "resourcePlanning": {
      "1": '40881675',
      "2": '40881676',
      "3": '40881677',
      "4": '40881681',
      "5": '40881682',
      "6": '40881683',
      "7": '40881684',
      "8": '40881685',
      "9": '40881686',
    },
    
    "sector": {
      "1": '40881687',
      "2": '40881688',
      "3": '40881689',
      "4": '40881690',
      "5": '40881691',
      "6": '40881692',
      "7": '40881693',
      "8": '40881694',
      "9": '40881695',
    },
    
    "treasury": {
      "1": '40881702',
      "2": '40881703',
      "3": '40881704',
      "4": '40881705',
      "5": '40881706',
      "6": '40881707',
      "7": '40881708',
      "8": '40881709',
      "9": '408817010',
    },
    
     "businessLeader": {
      "1": '40881538',
      "2": '40881539',
      "3": '40881540',
    },
    
    "countryLeader": {
      "R": '40881575'
    },
  };
  

  var button = $(".career-path-col .cmf-info-box"); // bind to boxes under career path column only
  
  
  button.on("click", function () {
    
    var thisButton = $(this), // get button instance clicked
        path = thisButton.data("path"); // get the career path value  of the button selected
    
  
    
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
      
      // if we're dealing with the Country Rep scenario...
      if(path === "countryLeader") {
     
        
        // show the country rep column
        $("#repBox").removeClass("cmf-col-hidden").addClass("cmf-col-visible");
        
      }
      
      else { 
        //show role column
        $("#repBox").removeClass("cmf-col-visible")
                    .addClass("cmf-col-hidden");
        
        thisButton.parent()
                  .siblings()
                  .removeClass("cmf-col-hidden")
                  .addClass("cmf-col-visible");
      }
      
      
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
    
    //select only the level buttons that are visible
    var level = $("div.cmf-col-visible .level-btn");
    
   
    
    var docIDs = []; // stores EZSHARE ids for path clicked
    
    for(prop in pathLevelDocs[path]) {
      docIDs.push(pathLevelDocs[path][prop]);
    }

    var baseURL = "http://idbdocs.iadb.org/WSDocs/getDocument.aspx?DOCNUM=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
       
        level[index].href = baseURL + docIDs[index] + "&CONTDISP=inline";

    });
    
    
    
    
  });
  
})(jQuery);
