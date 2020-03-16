<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
<script>




function importantCall(){

var autoPDP;

autoPDP = typeof window.CTC.GTM.mediator["_history"]["auto-compatible-need-check"];

if ( autoPDP == "undefined" ) {
   

var detailsInfo, imageContainer, headerBadge, priceDetials, productId, pdpFeatureItems, qantity, topHeader, headerName, reviewsCount, pattern, value, ratingIndex1, ratingTotalFinal, ratingIndex;

headerName = $('.pdp-header.pdp-header-section');
topHeader = $(".pdp-product-image-and-buy-box.base-pdp-buy-box");
detailsInfo = $('<div class="buy-box-details-info"></div>');
imageContainer = $(".pdp-product-image-content-wrapper");
headerBadge = $(".product-header-badges.section");
priceDetials = $("section.pdp-buy-box__primary-section");
pdpFeatureItems = $(".pdp-details-features__items ul");
qantity = $("form.sku-selectors");
$(headerName).insertBefore(topHeader);
$(detailsInfo).insertAfter(imageContainer);
$(headerBadge).clone(true).appendTo(".buy-box-details-info");
$(priceDetials).appendTo(detailsInfo);
$(pdpFeatureItems).clone(true).appendTo(detailsInfo);
$(qantity).appendTo(detailsInfo);
/* custom css */
$(".pdp-header.pdp-header-section").wrap('<div class="parent-header"></div>');


var styles = `
    @media only screen and (min-width:1918px){
    .pdp-product-image-content-wrapper {
        width: 30% !important;
        left: 55px;
        position: relative;
    }
    .buy-box-details-info, .pdp-buy-box {
        left: 55px;
        position: relative;
    }
    .brand-logo-link {
        display: none;
    }
    .pdp-product-image-and-buy-box .g-main-column, .global-breadcrumb__content-wrapper, .pdp-header .g-main-column {
        max-width:1880px;
    }
    .buy-box-details-info, .pdp-product-image-and-buy-box .pdp-product-image-content-wrapper, .pdp-product-image-and-buy-box .pdp-buy-box{
        float: left;
        clear: none;
        width: 32%;
        margin-left: 0;
        margin-right: 2%;
    }
    .buy-box-details-info li {
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        position: relative;
        padding-left: 15px;
        color: #333;
    }
    .buy-box-details-info li:before {
        content: '•';
        position: absolute;
        top: 0;
        left: 0;
    }
    .buy-box-details-info li:nth-of-type(1n+4) {
        display: none;
    }
    .sku-selectors__input-wrapper:first-child {
        display: flex;
        align-items: center;
    }
    .buy-box-details-info .sku-selectors__input-wrapper--quantity .sku-selectors__text-input-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: transparent;
        border: 1px solid #ccc;
        min-width: 30px;
    }
    .pdp-header.pdp-header-section {
        max-width: 1880px;
        margin: 0 auto;
        padding-top: 10px;
    }
    #pdp-product-image-s7viewer.s7flyoutviewer .s7flyoutzoomview .s7flyoutzoom {
        height: 600px !important;
        width: 1210px !important;
    }
    .delivery-options,.pdp-buy-box__actions-wrapper {
        background: #f4f4f4;
    }
    .stock {
        background: #fff;
    }
       .pdp-buy-box__actions-wrapper {
        padding: 0 20px 20px;
    }
    .delivery-options {
        padding: 0 10px;
    }
    .delivery-option {
        margin-bottom:0;
        padding: 13px;
    }
    .delivery-option__wrapper {
     padding: 16px 5px;

    }
    .buy-box-details-info ul {
        margin: 30px 0;
    }
    .buy-box-details-info .sku-selectors__input-wrapper:first-child {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .buy-box-details-info {
        width: 29%;
        margin-right: 1%;
    }
    .buy-box-details-info span.sku-selectors__number-wrap {
        margin-top: 15px;
        border-radius: 8px;
        border: 1.5px solid #ccc;
    }
    .buy-box-details-info span.sku-selectors__text-input-button.sku-selectors__text-input-button--plus.sku-selectors__text-input-button_inc , .buy-box-details-info span.sku-selectors__text-input-button.sku-selectors__text-input-button--minus.sku-selectors__text-input-button_dec, .buy-box-details-info .sku-selectors .sku-selectors__text-input{
        border: 0;
    }
    .pdp-buy-box .product-header-badge__badges,.parent-header .product-header-badges.section {
        display:none;
    }
    .pdp-header__actions {
        display:flex;
    }
    .pdp-header__reviews,.reviewscount {
        margin-right:5px;
    }
   
 .product-toc__details__border {

 margin-left:0 !important;
 }
    .product-toc__details__code {
    display: flex;
    align-items: center;
        }
    .pdp-header {
        padding-bottom:10px;
    }
    .general-header.general-header-block .global-header {
        border:0 !important;
    }
    .badgewrapper {
        width: 35%;
    }
    .recommendations__carousel-items .owl-item.owl-item-analytics {
        width: 193px !important;
    }
    .js-warning--quantity {
        background: #f4f4f4;
        margin-bottom: 0;
        width: 100%;
    }
    .pdp-buy-box__actions-wrapper {
        padding-top: 10px;
    }
    .parent-header {
        width: 100%;
        background: #fff;
    }

    .buy-box-details-info, .pdp-product-image-and-buy-box .pdp-product-image-content-wrapper, .pdp-product-image-and-buy-box .pdp-buy-box {
        margin-right:3%;
    }

    .pdp-tested-carousel__video--thumb {
        width:100%;
    }
    .price__tags.price__tags--tile.price__tags--tile-reg {
        margin-bottom: 10px;
    }
    .price__subtotal-wrapper {
        margin-bottom: 3px;
    }
    #pdp-product-image_swatches.s7swatches {
        visibility: inherit;
        top: 30% !important;
        left: -278px !important;
    }

    .sku-selectors .sku-selectors__text-input {
        height:26px !important;
    }

    span.price__reg-text.price__reg-text_sale {
        display:none;
    }
    /*
    span.price__reg-value.price__reg-value_crossed:before {
        content: "Regular Price: ";
    }
    span.price__total-value.price__total--on-sale:before {
        content: "Sale: ";
    }
    span.price__total-value.price__total--on-sale:before {
        font-size:25px;
    }
    */

    .pdp-header.pdp-header-section {
        visibility: visible !important;
        opacity: 1 !important;
    }
    .pdp-image-carousel {
        margin-top: 0;
        position: absolute;
        top: 9%;
        left: -57px;
        width: 51px;
    }
    div#pdp-product-image-s7viewer {
        position: relative;
        left: 14px;
    }
    .pdp-image-carousel .owl-stage {
        display: flex;
        flex-direction: column;
    }
    .pdp-image-carousel .owl-carousel.owl-theme.owl-loaded {
        margin-left: 0;
        width: 50px;
    }
    .pdp-product-image-and-buy-box__inner.g-main-column .buy-box-details-info:nth-child(n+4) {
        display: none;
    }
    .buy-box-details-info .product-header-badges.section:nth-child(n+2) {
        display: none;
    }
    #pdp-product-image-s7viewer.s7flyoutviewer {
        z-index:3 !important;
    }
    .global-header__content-wrapper, .global-header_sticky .global-header__content-wrapper {
        margin:0 auto;
    }
    .global-header__content-wrapper , .global-header_sticky .global-header__content-wrapper {
        padding: 0 1%;
    }
    .productIdId:nth-last-child(n+2) {
        display: none;
    }
    .productIdId:last-child:before {
        content: "|";
        margin-right: 7px;
    }
    .base-page-body, .global-breadcrumb.parbase.section div[data-component="GlobalBreadcrumb"], .pdp-details, .section-header.parbase.section, .pdp-video-selector, .pdp-store-availability {
        background-color: #fff !important;
    }
    div[data-component="WarningMsg"] {
        position: relative;
        top: 10px;
    }
    .global-breadcrumb.parbase.section {
        border-bottom: 1px solid #ccc;
    }
    .pdp-product-image-content-wrapper {
        margin-left: 3%;
    }
    .slick-prev,.slick-next {
        font-size: 0;
        position: absolute;
        
        color: #666 !important;
        border: 0;
        background: none;
        z-index: 1;
    }
    .slick-prev {
        left: 20px;
    }
    .slick-prev:after {
        content: "\f104";
        font: 40px/1 'FontAwesome';
    }
    .slick-next:after {
        content: "\f105";
        font: 40px/1 'FontAwesome';
    }
    .slick-prev:before, .slick-next:before {
        display:none;
    }
    .slick-next:after,.slick-prev:after {
        font: 33px/1 'FontAwesome';
        background: #000;
        border-radius: 50%;
    }
    .slick-prev:after {
        background: transparent;
    }
    .slick-next:after {
        background:transparent;
    }
    .slick-next {
        transform: rotate(90deg);
        bottom: -28px;
        top: unset;
        left: 5px;
    }
    button.slick-prev {
        right: unset;
        top: -25px;
        left: 10px;
        transform: rotate(90deg);
    }
    .slick-prev:hover:after, .slick-next:hover:after {
        color: #474343;
        background: transparent;
    
    }
    .slick-prev, .slick-next {
        width: 33px !important;
        height: 33px !important;
    }
    #pdp-product-image-s7viewer.s7flyoutviewer .s7flyoutzoomview .s7flyoutzoom {
        height: 600px !important;
        width: 1250px !important;
    }
    
    .pdp-image-carousel.fix {
        background: transparent;
        width: 50px !important;
        left: 20%;
    }
    .pdp-image-carousel__item, .pdp-image-carousel__item-video-thumbnail {
        position: relative;
    }
    button.pdp-image-carousel__item img {
        margin: 0 auto;
    }
    button.pdp-image-carousel__item.active {
        border: 2px solid #333;
        box-shadow: none;
    }
    .recommendations__product-tiles {
        padding-left: 0px !important;
        padding-right: 20px !important;
    }
}

`
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

}

}

if ($(window).width() > 1918) {



var clearTime = setInterval(function(){
    var countTime = 0;
    if ( countTime < 40 ) {

    if ( $(".delivery-option").length ) {
       
		
      importantCall();
      clearInterval(clearTime);
    }
    countTime ++;
}
}, 500);



var clearTimeForSlick = setInterval(function(){

var count = 0;
if ( count < 60 ) {

    var autoPDP1;

autoPDP1 = typeof window.CTC.GTM.mediator["_history"]["auto-compatible-need-check"];

if ( autoPDP1 == "undefined" ) {

if ( $(".pdp-image-carousel .owl-carousel").length ) {
       
        
       /* Insert mutation code for Reviews */


            $('.pdp-image-carousel .owl-carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.pdp-image-carousel .owl-carousel').find('.owl-stage-outer').unwrap();
            $('.pdp-image-carousel > div').not('.slick-initialized').slick({
                infinite: false,
                dots: false,
                vertical: true,
                slidesToShow: 4,
                slidesToScroll: 3,
                verticalSwiping: true
              });

/* End of Mutation Code for Reviews */
  }  
}
count ++;
}
else if ( count >=60 ) {
  clearInterval(clearTimeForSlick);

}
}, 1000);



}







</script>


<style>

 @media only screen and (min-width:1918px){
    .slick-prev,.slick-next {
        font-size: 0;
        position: absolute;
        
        color: #666 !important;
        border: 0;
        background: none;
        z-index: 1;
    }
    .slick-prev {
        left: 20px;
    }
    .slick-prev:after {
        content: "\f104";
        font: 40px/1 'FontAwesome';
    }
    .slick-next:after {
        content: "\f105";
        font: 40px/1 'FontAwesome';
    }
    .slick-prev:before, .slick-next:before {
        display:none;
    }
    .slick-next:after,.slick-prev:after {
        font: 33px/1 'FontAwesome';
        background: #000;
        border-radius: 50%;
    }
    .slick-prev:after {
        background: transparent;
    }
    .slick-next:after {
        background:transparent;
    }
    .slick-next {
        transform: rotate(90deg);
        bottom: -28px;
        top: unset;
        left: 5px;
    }
    button.slick-prev {
        right: unset;
        top: -25px;
        left: 10px;
        transform: rotate(90deg);
    }
    .slick-prev:hover:after, .slick-next:hover:after {
        color: #474343;
        background: transparent;
    
    }
    .slick-prev, .slick-next {
        width: 33px !important;
        height: 33px !important;
    }
    #pdp-product-image-s7viewer.s7flyoutviewer .s7flyoutzoomview .s7flyoutzoom {
        height: 600px !important;
        width: 1250px !important;
    }
    
    .pdp-image-carousel.fix {
        background: transparent;
        width: 50px !important;
        left: 20%;
    }
    .pdp-image-carousel__item, .pdp-image-carousel__item-video-thumbnail {
        position: relative;
    }
    button.pdp-image-carousel__item img {
        margin: 0 auto;
    }
    button.pdp-image-carousel__item.active {
        border: 2px solid #333;
        box-shadow: none;
    }
    .recommendations__product-tiles {
        padding-left: 0px !important;
        padding-right: 20px !important;
    }
    }


</style>