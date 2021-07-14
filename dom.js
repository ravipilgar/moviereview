
   $(document).ready(function(){
    $('#review').click(function(){
        $("#reference").css("visibility: visible");
        let innerhtml=$('#review').html();
        $('#reviw1').html(innerhtml);
        let innerhtml1=$('#comment').html(); /* plain text not bold not any effect*/
        $('#comment1').html(innerhtml1);
       
    });
    
});

