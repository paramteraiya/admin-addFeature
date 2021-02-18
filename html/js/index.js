$(document).ready(function(){
    var parentHTML = $('.input-form').eq(0).html();
    var childHTML = $('.child-container').eq(0).html();    
    var parentSpecHTML = $('.specification').eq(0).html();
    var childSpecHTML = $('.specificationChildContainer').eq(0).html();

    $(document).on('click','.add-more',function(){
        $('.input-form').append(parentHTML);
        $('.specification').append(parentSpecHTML);
    });

    $(document).on('click','.add-child',function(){
        $(this).closest('.parent').find('.child-container').append(childHTML);
        $('.specificationParent').eq($(this).closest('.parent').index()).find('.specificationChildContainer').append(childSpecHTML);
    });

    $(document).on('click','.delete-this',function(){
        $('.specificationParent').eq($(this).closest('.parent').index()).remove();
        $(this).closest('.parent').remove();
    });

    $(document).on('click','.delete',function(){
        $('.specificationParent').eq($(this).closest('.parent').index()).find('.specificationChild').eq($(this).closest('.child').index()).remove();
        $(this).closest('.child').remove();
    });

    $(document).on('keyup','.myInputTitle',function(){
        $('.specificationParent').eq($(this).closest('.parent').index()).find('.'+$(this).data('attribute')).text($(this).val());
    });
    
    $(document).on('keyup','.myInput',function(){
        $('.specificationParent').eq($(this).closest('.parent').index()).find('.specificationChild').eq($(this).closest('.child').index()).find('.'+$(this).data('attribute')).text($(this).val());
    });
});