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
          console.log(response);
          var geoLocation = response.results[0].geometry.location;
          console.log(geoLocation);
          var flickrApiUrl = "https://api.flickr.com/services/rest/?";
          var flickrApiParams = { 
          api_key: "71583e82a6ee0e9735dcbb2cccf668fb",
          method: "flickr.photos.search",
          format: "json",
          nojsoncallback: 1,
          lat: geoLocation.lat,
          lon: geoLocation.lng    
        }

        $.ajax({
          type: "GET",
          url: flickrApiUrl + $.param(flickrApiParams),
          success: function(response) {
            var localPhotos = response.photos.photo;
            for(var i = 0; i < localPhotos.length; i++) {
              var newCol = buildThumbnail(localPhotos[i]);
              $("#photosRow").append(newCol);
            }
          }
        });
      }
    }); 
  });  

  function buildThumbnail(photoData) {
    var photoUrl = "https://farm" + photoData.farm;
    photoUrl += ".staticflickr.com/" + photoData.server;
    photoUrl += "/" + photoData.id;
    photoUrl += "_" + photoData.secret + ".jpg";

    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var photoImg = $("<img>").attr("src", photoUrl);
    var captionDiv = $("<div>").addClass("caption");
    var picTitle = $("<h3>").append("photoData.title");

    colDiv.append(thumbnailDiv
      .append(photoImg)
      .append(captionDiv
        .append(picTitle)
      )
    );
    
    return colDiv;
  }
});   