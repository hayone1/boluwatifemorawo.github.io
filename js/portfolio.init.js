//Portfolio filter
$(window).on('load', function() {
    var $container = $('.certs-wrapper');
    var $filter = $('#filterCerts');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });


    var $containerProjects = $('.projects-wrapper');
    var $filterProjects = $('#filterProjects');
    $containerProjects.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filterProjects.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filterProjects.find('a').removeClass('active');
        $(this).addClass('active');
        $containerProjects.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});