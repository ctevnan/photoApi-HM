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
        var geoLocation = response.results[0].geometry.location;
        console.log(geoLocation);
      }
    })
  });  
});