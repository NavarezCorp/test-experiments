$('.tv-series-item').click(function(){
    $('.tv-series-video-player .panel-heading').html($(this).attr('title'));

    var html = '';

    html += '<link href="css/video-js.css" rel="stylesheet" type="text/css">';
    html += '<script type="text/javascript" src="js/video.js"></script>';
    html += '<script>videojs.options.flash.swf = "video-js.swf";</script>';
    html += '<video id="example_video_1" class="video-js vjs-default-skin" controls preload width="100%" height="449px" data-setup="{}" autoplay>';
    html += '<source src="media/' + $(this).attr('path') + '" type=\'video/mp4\'/>';
    //html += '<track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track>';
    //html += '<track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track>';
    html += '<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>';
    html += '</video>';

    $('.tv-series-video-player .panel-body').html(html);
});