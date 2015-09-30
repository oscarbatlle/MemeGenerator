$(document).ready(function () {
    $('.thumbnail').on('click', 'img', function () {
        var image = $(this).attr('src');
        $('#memeCanvas').find('img').attr('src', image);
        $('#memeCanvas').find('img').attr('rel', image);
        $('input[name="image"]').attr('value', image);
    });

    $('input[name="toptext"], input[name="bottomtext').on('keyup', function () {
        var toptext = $('input[name="toptext"]').val();
        var bottomtext = $('input[name="bottomtext"]').val();
        var image = $('#memeCanvas').find('img').attr('rel');
        $("#memeCanvas").find('img').attr("src", "MemeGenerator.php?image=" + image + "&top=" + toptext + "&bottom=" + bottomtext + "&preview=1");
    });

    $('form').on('submit', function(e){
        var toptext = $('input[name="toptext"]').val();
        var bottomtext = $('input[name="bottomtext"]').val();
        var image = $('#memeCanvas').find('img').attr('rel');

      e.preventDefault();
      $.ajax({
        url: 'MemeGenerator.php',
        type: 'POST',
        data: {upmsg: toptext, downmsg: bottomtext, preview: 0, image: image},
        success: function(e){
          $('#memeCanvas').attr('src', e);
        }
      })
    });
});
