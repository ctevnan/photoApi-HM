$(document).ready(function() {
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyArxjU4hlitMhuPvMSdrjhHQFq0PAJnccM";
    googleApiUrl += "&address=" + userAddress;

      $.ajax({
        type: "GET",
        url: googleApiUrl,
        success: function(response) {
          var geoLoction = response.results[0].geometry.location;
          var matchApiUrl = "https://matchapi.halberdtechnologies.com/?userID=api/Database?userID={userID}";
          var matchApiParams = {
          getAllDatabases(String baseURL, String userID){
            String url = matchApiUrl + "/database?userID=" + userID;

            HttpClient httpclient = new DefaultHttpClient();

            //prep a req obj
            HttpGet httpget = new HttpGet("matchApiUrl");

            //execute req
            HttpResponse response;
            try {
              response = httpclient.execute(httpget);
              //examine response status
              Log.i("Result", response.getStatusLine().toString());

          lat: geoLocation.lat,
          lon: geoLocation.lng    
        }

        $.ajax({
          type: "GET",
          url: matchApiUrl + $.param(matchApiParams),
          success: function(response) {
            var hmPhotos = response.photos.photo;
            for(var i = 0; i < hmPhotos.length; i++) {
              
            }
          }
        })
      })
    }) 
  });  
});