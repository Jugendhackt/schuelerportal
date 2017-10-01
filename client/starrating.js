
$(document).ready(function() {
    
    //code for rating by the user
    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
      return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
          return $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
          return $(this).removeClass('fa-star').addClass('fa-star-o');
        }
      });
    };

    $star_rating.on('click', function() {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    });

    $('#rate_btn').on('click', function(){
        var commentJson = {};
        commentJson.rating = $star_rating.siblings('input.rating-value').val();
        console.log("Kommentar: ", commentJson);
        //Daten senden
        fetch(myURL + "/rate", {
            method: 'post',
            body: JSON.stringify(commentJson),
            headers: new Headers({
            'Content-Type': 'application/json'
           })
        }).then(function(response) {
            return response.json();
        }).then(function(json){
            console.log("json: ", json);
            suchResponse(json);
        }).catch(function(err) {
           console.log("there was an error" + err);
        });
        
    })
    
    SetRatingStar();
    
    
});
