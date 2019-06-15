
$(document).ready(function(){

    /* Page select-configuration.html */ 
    /* On check select panel*/
    $(".check-box-right.header :checkbox").on('click', function(){
        $(this).parent().parent().toggleClass("selected");
    });

    $('.expand-btn.collapsed').on('click',function(){
        var $checkbox = $(this).parent().find('.header input[type=checkbox]');
        $checkbox.trigger("click");
    });
    /* To show tooltip*/
    //$('[data-toggle="tooltip"]').tooltip();


    /*Page landing-page.html */
    /*navbar dropdown to avoid click event and overlay effect for login */
    $('.dropdown-menu').on('click', function(e) {
        if($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
        if($(this).hasClass('checkbox-list-dp')) {
            e.stopPropagation();
        }
		if($(this).hasClass('radiobtn-list-dp')) {
            e.stopPropagation();
        }
    });
    /* landing page card content transition */
    $(".services-content .expand-btn").mouseover(function() {
        if($(".hidden-content :visible").length > 0 && $(".expand-btn :hidden").length > 0 ){
        $(".hidden-content").slideUp(700);
        $(".expand-btn :hidden").parent().css("display","block");   

        $(this).parent().find(".hidden-content").slideDown(700);
        $(this).parent().find(".expand-btn").css("display","none");
        }else{
          $(this).parent().find(".hidden-content").slideDown(700);
          $(this).parent().find(".expand-btn").css("display","none");     
        }
    });


    /* add-locations.html - */
    /* Show address panel */
    $('.bottom-btn .btn').on('click', function(e) {
        $('.location-section').removeClass('d-none')
    });
    
    // /* Show slider*/
    // $('.modal-slider').on('click', function (e) {
    //     console.log('coming');
    //     setTimeout(function () {
    //         $('.slider-for').slick({
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           arrows: false,
    //           asNavFor: '.slider-nav',
    //           draggable:false,
    //           infinite:false
    //         });
    //         $('.slider-nav').slick({
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           asNavFor: '.slider-for',
    //           dots: false,
    //           focusOnSelect: true,
    //             infinite:false,
    //           nextArrow: '<i class="slick-arrow right icon-caret-right"></i>',
    //           prevArrow: '<i class="slick-arrow left icon-caret-left"></i>',
    //         });
            
    //     }, 150);
    // });
    
    /* get quote page - on checked change colore */
    // $(".quote-list li input:checkbox").change(function(){
    //   $(this).closest("li").toggleClass('current', this.checked);
    //   if($('.quote-list li').hasClass('current')){
    //       $('.price-summary.hidden-content').slideDown(300);
    //       $('.price-summary .amt-unit').removeClass('d-none');
    //   }else{
    //       $('.price-summary.hidden-content').slideUp(300);
    //       $('.price-summary .amt-unit').addClass('d-none');
    //   }
    // });
    
    /* get quote page - for group dropdown */
    // $('.hide-group').hide();
    // $('.hide-group.active').show();
    // $('#groupDp').change(function(){
    //     $('.quote-list li input:checkbox').prop('checked', false);
    //     $('.quote-list li').removeClass('current')
    //     $('.price-summary.hidden-content').slideUp(300);
    //     $('.price-summary .amt-unit').addClass('d-none');
        
    //     $('.hide-group').hide();
    //     $('.hide-group').removeClass('active');
    //     $('#' + $(this).val()).show();
    //     $('#' + $(this).val()).addClass('active');
        
    //     if($('#geography').hasClass('active')){
    //         $('.country-ct-switch').removeClass('d-none');
    //         $('.slider-for').slick({
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           arrows: false,
    //           asNavFor: '.slider-nav',
    //           draggable:false,
    //             infinite:false
    //         });
    //         $('.slider-nav').slick({
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           asNavFor: '.slider-for',
    //           dots: false,
    //           focusOnSelect: true,
    //             infinite:false,
    //           nextArrow: '<i class="slick-arrow right icon-caret-right"></i>',
    //           prevArrow: '<i class="slick-arrow left icon-caret-left"></i>',
    //         });
            
    //     }else{
    //         $('.country-ct-switch').addClass('d-none');
    //     }
    // });
   
    /* COF page */
     $("input:checkbox[value=signature-rights]").click(function() {
        if($(this).is(':checked')){
            $('#signatureModal').modal('show');
        }
    });
    $("input:checkbox[value=read-tc]").click(function() {
        if($(this).is(':checked')==true){
            $('.order-btn').removeClass('inactive-btn');
            $('.order-btn').addClass('active-btn');
        }else{
            $('.order-btn').removeClass('active-btn');
            $('.order-btn').addClass('inactive-btn');
        }
    });

    /* Sales order page */ 
    /* Script to check the radio condition to disable/enable generate report button */
    $("input:radio[name=entitynumber]").click(function() {
        if($('input[value=single]:checked').length == 1)
        {  
            $(".generate-docs button").removeClass('inactive-btn');  
            $(".generate-docs button").addClass('active-btn');  
        }
        if($('input[value=multiple]:checked').length == 1)
        {
            $(".generate-docs button").removeClass('active-btn');  
            $(".generate-docs button").addClass('inactive-btn'); 
            $('#multipledocs').modal('show');
        } 
    });

    /*To show Name of selected/checked Legal entity */
    $('.radiobtn-list-dp .radio-box ').click(function(){
        $('#selected').text($(this).text());
    });

    /* Script to show the tax excemption alert when foreign location is clicked in legal entity */
    $("#onboardEntity").click(function() {
        $('#taximplications').modal('show');
    });

    /* Script to show the address section after clicking the add address button in the modal */
    $(".add-address").click(function() {
        $('.siteaddresses').removeClass('d-none');
    });
    
    /* Script to hide the address section when there is no tax excemption */
    $("input:radio[value=taxexcempno]").click(function() {
        $('.siteaddresses').addClass('d-none');
    });

    /* Script to show the select site address modal when there is tax excemption */
    $("input:radio[value=taxexcempyes]").click(function() {
        if($(this).is(':checked')){
            $('#taxexcemption').modal('show');
        }
    });
    
    /* site list page input range slider */
    var timeout, tabMinus = $('#minus'), tabPlus = $('#plus');

	/*slider functionality */
	$('#slider').mouseup(function(){
	   var res =parseInt($('#slider').val());
       document.getElementById("delta").innerHTML=res + " Mbps";
	});

	$('#delta').keyup(function(){
    	$('#slider').val($('#delta').val());
	});

	/* plus-minus tab functionality */
	tabMinus.mouseup(function(){
		$('#delta').val($('#slider').val() - 1);
    	$('#slider').val($('#delta').val() - .2);
        var result=$('#delta').val();
        document.getElementById("delta").innerHTML=result + " Mbps";
	});

	tabPlus.mouseup(function(){
  	let delatvalue = parseInt($('#slider').val()) + 1;
		$('#delta').val(delatvalue);
		$('#slider').val(delatvalue + .2);
		var result=$('#delta').val();
        document.getElementById("delta").innerHTML=result + " Mbps";
    });

    /*Generic - On next button click - move selection to next tab to show data*/
    $(function () {
        $('.next-tab').click(function (e) {
            e.preventDefault();
            $('a[href="' + $(this).attr('data-target') + '"]').tab('show');
        })
    });
    
    /* Datepicker */
    // $('.date-select input').datepicker({
    //     format: 'dd / mm / yyyy',
    //     autoHide: true
    // });

    /* show file value after file select */
    $('.custom-file-input').on('change',function(){
        $(this).next('.form-control-file').addClass("selected").html($(this).val());
    })

    /* congratulations page */
    // $('.navbar-toggler').click( function() {
    //     $('.sidenavbar').toggleClass("sidenavbar-toggle");
    //     $('main').toggleClass("togglemain");
    // });

});