 $.ajax({
        type: "GET",
        url: googleApiUrl,
        success: function(response) {
          console.log(response);
          var geoLocation = response.results[0].geometry.location;
          console.log(geoLocation);
          var matchApiUrl = "https://matchapi.halberdtechnologies.com/?userID=UUID.randomUUID().toString().trim()";
          var matchApiParams = { 
          length: "7846",
          type: "text/html; charset=utf-8", 
          server: "Microsoft-IIS/80", 
          format: "json",
          lat: geoLocation.lat,
          lon: geoLocation.lng    
        }
/*
        $.ajax({
          type: "GET",
          url: matchApiUrl + $.param(matchApiParams),
          success: function(response) {
            var hmPhotos = response.photos.photo;
            for(var i = 0; i < hmPhotos.length; i++) {

            }
          }
        })*/