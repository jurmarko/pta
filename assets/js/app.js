var DECENTTHEMES = DECENTTHEMES || {};

(function($) {

  /*!----------------------------------------------
    # This beautiful code written with heart
    # by Aminul Islam <aminul@decentthemes.com>
    # In Nawabganj, BD at the Decent Themes workstation.
    ---------------------------------------------*/

  // USE STRICT
  "use strict";

  DECENTTHEMES.initialize = {

    init: function() {
      DECENTTHEMES.initialize.general();
      DECENTTHEMES.initialize.sectionBackground();
      DECENTTHEMES.initialize.revSlider();
      DECENTTHEMES.initialize.tabs();
      DECENTTHEMES.initialize.map();
      DECENTTHEMES.initialize.countup();
      DECENTTHEMES.initialize.timer();
      // DECENTTHEMES.initialize.mobileMenu();
    },

    /*=======================================================*/
    /*=           Collection of snippet and tweaks          =*/
    /*=======================================================*/
    general: function() {
      $('.swiper-container').each(function() {
        var $this = $(this);
        new swiperRunner($this);
      });

      $("body").append("<div class='mask' style='display: none;'></div>");

      $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).siblings('.panel-heading').addClass('active');
      });

      $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.panel-heading').removeClass('active');
      });

      $(".toggle-menu").click(function() {
        $("body").addClass("menu-open");
        $(".mask").fadeIn(300);
      });

      $(".close-menu, .mask, .menu a[href*='#']").each(function() {
        $(this).click(function() {
          $("body").removeClass("menu-open").addClass("no-scroll");
          $(".mask").fadeOut(300, function() {
            $("body").removeClass("no-scroll");
          });
        });
      });

      $('#navigation').slimmenu({
        resizeWidth: '768',
        collapserTitle: '<span class="mobile-logo"></span>',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
      });

      $('.collapse-button').on('click', function() {
        $(this).toggleClass("collapse-button--opened");
        // $(this).toggleClass("collapse-button--closed");
      });

      /* Wow init */
      new WOW().init()


      /* Search Open */

      var openCtrl = document.getElementById('btn-search');

      if (openCtrl) {
        var closeCtrl = document.getElementById('btn-search-close'),
          searchContainer = document.querySelector('.search'),
          inputSearch = searchContainer.querySelector('.search__input');

        function init() {
          initEvents();
        }

        function initEvents() {
          openCtrl.addEventListener('click', openSearch);
          closeCtrl.addEventListener('click', closeSearch);
          document.addEventListener('keyup', function(ev) {
            // escape key.
            if (ev.keyCode == 27) {
              closeSearch();
            }

          });

        }

        function openSearch() {
          searchContainer.classList.add('search--open');
          inputSearch.focus();
        }

        function closeSearch() {
          searchContainer.classList.remove('search--open');
          inputSearch.blur();
          inputSearch.value = '';
        }

        init();
      }



      var price = $("#price");

      $('input[type="range"]').rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
          var $class = '.item' + value;

          $('.price-plan .price-item').removeClass('active');
          $($class, '.price-plan').addClass('active');
        }
      });

      $('.youtube-wrapper').on('click', function(event) {
        event.preventDefault();
        var fr = $(this).find('iframe');
        var fadr = $(this).find('iframe').attr('src');
        var fuadr = fadr + '?autoplay=1';

        $(this).addClass('reveal');
        fr.attr('src', fuadr);
        console.log(fadr);
      });

      $('#coming-date').countdown({

        render: function(data) {
          $(this.el).html(
            "<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.days + "</h2>" + " <h4 class=\"countdown-word\">days</h4></div>" +
            "<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.hours + "</h2>" + " <h4 class=\"countdown-word\">hours</h4></div>" +
            "<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.min, 2) + "</h2>" + " <h4 class=\"countdown-word\">minutes</h4></div>" +
            "<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.sec, 2) + "</h2>" + " <h4 class=\"countdown-word\">seconds</h4></div>");
        }
      });


      /* Banner Static */
      if (typeof $.fn.ripples == 'function') {
        try {
          $('#banner-ripple').ripples({
            resolution: 500,
            perturbance: 0.04
          });
        } catch (e) {
          $('.error').show().text(e);
        }
      }
    },

    /*========================================*/
    /*=           Section Background         =*/
    /*========================================*/
    sectionBackground: function() {
      // Section Background Color
      $('[data-bg-color]').each(function() {
        var value = $(this).data('bg-color');
        $(this).css({
          backgroundColor: value,
        });
      });

      // Section Background Image
      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });

      //Parallax Background
      $('[data-parallax="image"]').each(function() {

        var actualHeight = $(this).position().top;
        var speed = $(this).data('parallax-speed');
        var reSize = actualHeight - $(window).scrollTop();
        var makeParallax = -(reSize / 2);
        var posValue = makeParallax + "px";

        $(this).css({
          backgroundPosition: '50% ' + posValue,
        });
      });
    },

    /*========================================*/
    /*=           Revolution Slider          =*/
    /*========================================*/
    revSlider: function() {

      $('#rev_slider_2').show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 70000,
        navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          navigationHOffset: 0,
          navigationVOffset: -20,

          touch: {
            touchenabled: "on",
            swipe_threshold: 25,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {
            enable: true,
            style: 'hermes',

            left: {
              container: 'slider',
              h_align: 'left',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0
            },

            right: {
              container: 'slider',
              h_align: 'right',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0
            }
          }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
          type: 'mouse+scroll',
          origo: 'slidercenter',
          speed: 500,
          levels: [5, 10, 15, 20, 25, 30, 35, 40,
            45, 46, 47, 48, 49, 50, 51, 55
          ],
          ddd_shadow: 'on',
          ddd_bgfreeze: 'off',
          ddd_overflow: 'visible',
          ddd_layer_overflow: 'visible',
          ddd_z_correction: 65,
          disable_onmobile: 'on'
        },
        shadow: 0,
        spinner: "off",
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        fullScreenOffsetContainer: "",
        hideThumbsOnMobile: "off",
        fullScreenOffset: "",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });

      $('#rev_slider_3').show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 7000,
        navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          navigationHOffset: 0,
          navigationVOffset: -20,

          touch: {
            touchenabled: "on",
            swipe_threshold: 25,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {

            enable: true,
            style: 'hermes',


            left: {
              container: 'slider',
              h_align: 'left',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0
            },

            right: {
              container: 'slider',
              h_align: 'right',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0
            }
          }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
          type: 'mouse+scroll',
          origo: 'slidercenter',
          speed: 500,
          levels: [5, 10, 15, 20, 25, 30, 35, 40,
            45, 46, 47, 48, 49, 50, 51, 55
          ],
          ddd_shadow: 'on',
          ddd_bgfreeze: 'off',
          ddd_overflow: 'visible',
          ddd_layer_overflow: 'visible',
          ddd_z_correction: 65,
          disable_onmobile: 'on'
        },
        shadow: 0,
        spinner: "off",
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        fullScreenOffsetContainer: "",
        hideThumbsOnMobile: "off",
        fullScreenOffset: "",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    },

    /*================================*/
    /*=           About Tab          =*/
    /*================================*/
    tabs: function() {

      $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

      $('.tab ul.tabs li a').click(function(g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
      });
    },

    /*=================================*/
    /*=           google Map          =*/
    /*=================================*/
    map: function() {

      $('.gmap3-area').each(function() {
        var $this = $(this),
          key = $this.data('key'),
          lat = $this.data('lat'),
          lng = $this.data('lng'),
          mrkr = $this.data('mrkr');

        $this.gmap3({
            center: [lat, lng],
            zoom: 16,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            style: [{
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [{
                "hue": "#ff00ca"
              }, {
                "saturation": "100"
              }, {
                "lightness": "0"
              }, {
                "gamma": "1"
              }]
            }, {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [{
                "hue": "#ff0000"
              }]
            }]
          })
          .marker(function(map) {
            return {
              position: map.getCenter(),
icon: 'http://maps.google.com/mapfiles/marker_green.png'            };
          })

      });
    },

    /*==============================*/
    /*=           Countup          =*/
    /*==============================*/
    countup: function() {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      };

      var counteEl = $('[data-counter]');

      if (counteEl) {
        counteEl.each(function() {
          var val = $(this).data('counter');

          var countup = new CountUp(this, 0, val, 0, 2.5, options);
          $(this).appear(function() {
            countup.start();
          }, {
            accX: 0,
            accY: 0
          })
        });
      }
    },

    /*================================*/
    /*=           Countimer          =*/
    /*================================*/
    timer: function() {
      var timer;

      var compareDate = new Date();
      compareDate.setDate(compareDate.getDate() + 300); //just for this demo today + 7 days

      timer = setInterval(function() {
        timeBetweenDates(compareDate);
      }, 1000);

      function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

          // Timer done
          clearInterval(timer);

        } else {

          var seconds = Math.floor(difference / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var days = Math.floor(hours / 24);

          hours %= 24;
          minutes %= 60;
          seconds %= 60;

          $("#days").text(days);
          $("#hours").text(hours);
          $("#minutes").text(minutes);
          $("#seconds").text(seconds);
        }
      }
    },


    /*==================================*/
    /*=           Mobile Menu          =*/
    /*==================================*/
    mobileMenu: function() {
      var Accordion = function(el, multiple) {
        this.el = el || {};

        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
          },
          this.dropdown);
      };

      Accordion.prototype.dropdown = function(e) {
        e.preventDefault();
        var $el = e.data.el,
          $this = $(this),

          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          //show only one menu at the same time
          $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
      }

      var accordion = new Accordion($('.accordion-menu'), false);
    }
  };

  DECENTTHEMES.documentOnReady = {
    init: function() {
      DECENTTHEMES.initialize.init();
    },

  };

  DECENTTHEMES.documentOnLoad = {
    init: function() {

      /* Loader Init */
      $("#loader").delay(1e3).addClass("loaded");
    },

  };

  DECENTTHEMES.documentOnResize = {
    init: function() {},

  };

  DECENTTHEMES.documentOnScroll = {
    init: function() {
      DECENTTHEMES.initialize.sectionBackground();

      /* Sticky Menu */
      var $headMenu = $('#header, #header.header-two');

      if ($(this).scrollTop() > 180) {
        $headMenu.addClass("navbar-small")
      } else {
        $headMenu.removeClass("navbar-small")
      }
    },

  };

  // Initialize Functions
  $(document).ready(DECENTTHEMES.documentOnReady.init);
  $(window).on('load', DECENTTHEMES.documentOnLoad.init);
  $(window).on('resize', DECENTTHEMES.documentOnResize.init);
  $(window).on('scroll', DECENTTHEMES.documentOnScroll.init);

})(jQuery);
