$(document).ready(function () {

    $(".player").mb_YTPlayer();




    $.ajax({
            type: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbyPKJwJ6mjEHQPY3uoACmifmQPT9CNh5DMYz5Mjs3r5x4zz1wh2/exec',
            dataType: 'json',
            success: function(data){
               // var jsondata = $.parseJSON(data);
                // $('#desktop').append('<div id="jsoninfo">Data loaded.</div>');
                // var myicons = jsondata['myicons'];
                // $.each(myicons, function() {
                //     alert('found!');
                for(var i=0;i<data.songjson.length;i++){
                
                		                	$(".displayvideo").append(
                		    '<div class="col-md-6 col-lg-4 movie-tile text-center bgvideo" data-trailer-youtube-id="' + data.songjson[i].url + '" data-toggle="modal" data-target="#trailer">' + 
                		        '<img src="http://img.youtube.com/vi/' + data.songjson[i].url + '/0.jpg" width="220" height="250">' +
                		        '<h4>' + data.songjson[i].title + '</h4>' + 
                		    '</div>'
                		);


                	
                	


      
                }

                for(var i=0;i<data.songjson.length;i++){
                	console.log(data.songjson[i].title);
                }


  
                //$(#displayvideo).append(data)
                console.log(data);
                console.log("Success")
                //}
                //);


            },  
            error: function() {
                //$('#desktop').append('<div id="jsoninfo">Failed to load desktop.</div>');
                console.log("error")
            }   
        });

});

//https://script.google.com/macros/s/AKfycbyPKJwJ6mjEHQPY3uoACmifmQPT9CNh5DMYz5Mjs3r5x4zz1wh2/exec

