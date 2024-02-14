export default detailsSlide;
  $(function detailsSlide(){
  
    if ($(".details-slide__small").length > 0) {
      $('.details-slide__small').slick({
        // при нажатии меняет в большом
        asNavFor: '.details-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        waitForAnimate: false,
        responsive: [
          {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
          }
          }
          ]
  
      });
      $('.details-slide__big').slick({
        // при нажатии меняет в маленьком
        asNavFor: '.details-slide__small',
        arrows: false,
        fade: true
  
      });

      
    }

    
    
    });
  
