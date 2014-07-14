(function ($) {
    $(function () {
        var CURRENT_CLASS_NAME = 'current',
            $switcherContainer = $('.js-switcher-container'),
            $smallImgList = $switcherContainer.find('.js-small-img-list'),
            $imgSwitchers = $smallImgList.find('li'),
            $bigImg = $switcherContainer.find('.js-big-img'),
            $prevButton = $switcherContainer.find('.js-prev-button'),
            $nextButton = $switcherContainer.find('.js-next-button');


        $smallImgList.on('click', 'li', function (event) {
            event.preventDefault();

            var currentTarget = event.currentTarget,
                $currentTarget = $(currentTarget),
                bigImgUrl = $currentTarget.find('a').data('big-img-url');

            $bigImg.attr('src', bigImgUrl);

            $imgSwitchers.removeClass(CURRENT_CLASS_NAME);

            $currentTarget.addClass(CURRENT_CLASS_NAME);

            console.log(bigImgUrl);
        });

        $prevButton.on('click', function (event) {
            event.preventDefault();

            var $current = $smallImgList.find('li.' + CURRENT_CLASS_NAME),
                $prev = $current.prev(),
                bigImgUrl;

            if ($prev.length) {
                switchImg($current, $prev);
            }

            console.log($current);
        });

        $nextButton.on('click', function (event) {
            event.preventDefault();

            var $current = $smallImgList.find('li.' + CURRENT_CLASS_NAME),
                $next = $current.next();

            if ($next.length) {
                switchImg($current, $next);
            }
        });

        function switchImg($current, $new) {
            var bigImgUrl = $new.find('a').data('big-img-url');

            $bigImg.attr('src', bigImgUrl);

            $current.removeClass(CURRENT_CLASS_NAME);
            $new.addClass(CURRENT_CLASS_NAME);
        }


    });
}(jQuery));