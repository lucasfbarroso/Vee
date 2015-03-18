/*
Handle navigating submissions by clicking
*/
$('div.submission').on('click', function() {
    if (window.location.pathname == '/' && $('div.submission').index(this) == 0) {
        // clicked on the feature sub header on index page
        return false;
    }
    $('div.highlighted').each(function() {
        $(this).removeClass('highlighted');
        console.log('click listener removed highlighting');
    });
    $(this).addClass('highlighted');
});

/*
Handle navigating submissions with the keyboard
*/
$(document).keypress(function(e) {
    switch (e.keyCode) {
        case 113:
            // q - move up
            $('div.submission').each(function(index) {
                if ($(this).hasClass('highlighted')) {
                    if (index > (window.location.pathname == '/' ? 1 : 0)) {
                        $(this).removeClass('highlighted');
                        $('div.submission').eq(index - 1).addClass('highlighted');
                        return false;
                    }
                }
            });
            break;
        case 97:
            // a - move down
            var found = false;
            $('div.submission').each(function(index) {
                if ($(this).hasClass('highlighted')) {
                    $(this).removeClass('highlighted');
                    found = true;
                    $('div.submission').eq(index + 1).addClass('highlighted');
                    return false;
                }
            });
            if (!found)
                $('div.submission').eq(window.location.pathname == '/' ? 1 : 0).addClass('highlighted');
            break;
        case 119:
            // w - open link
            // TODO
            break;
        case 115:
            // s - save
            // backburner
            break;
        case 99:
            // c - open comments
            // TODO
            break;
        case 101:
            // e - vote up
            $('div.submission').each(function(index) {
                if ($(this).hasClass('highlighted')) {
                    if (index > (window.location.pathname == '/' ? 1 : 0)) {
                        var arrow = $(this).parent().find('div.unvoted').find('div.arrow-upvote');
                        if (arrow.length > 0)
                            arrow.click();
                        else
                            $(this).parent().find('div.likes').find('div.arrow-upvoted').click();
                        return false;
                    }
                }
            });
            break;
        case 101:
            // e - vote up
            $('div.highlighted').each(function() {
                if ($('div.submission').index(this) > (window.location.pathname == '/' ? 1 : 0)) {
                    var arrow = $(this).parent().find('div.unvoted').find('div.arrow-upvote');
                    if (arrow.length > 0)
                        arrow.click();
                    else
                        $(this).parent().find('div.likes').find('div.arrow-upvoted').click();
                    return false;
                }
            });
            break;
        case 100:
            // d - vote down
            $('div.highlighted').each(function() {
                if ($('div.submission').index(this) > (window.location.pathname == '/' ? 1 : 0)) {
                    var arrow = $(this).parent().find('div.unvoted').find('div.arrow-downvote');
                    if (arrow.length > 0)
                        arrow.click();
                    else
                        $(this).parent().find('div.likes').find('div.arrow-downvotedd').click();
                    return false;
                }
            });
            break;
    }
});