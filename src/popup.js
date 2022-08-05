jQuery('.kit-oferta').click(function(){
	container = jQuery(this).parent().find(".bg-kit-escolha");
	jQuery(container).slideDown();
	jQuery('html, body').animate({scrollTop:jQuery(container ).offset().top-200},1000);
});

jQuery('.primeiro-link .esc-tamanho').click(function(e){
	tamanho = jQuery(this).text();
	selecionado = jQuery(this).parent().parent().find(".link-tamanho"+tamanho);
	todos = jQuery(this).parent().parent().find(".link-tamanhoPP, .link-tamanhoP, .link-tamanhoM, .link-tamanhoG, .link-tamanhoGG");

	jQuery(this).parent().find('.esc-tamanho').removeClass("ativo");
	jQuery(this).addClass("ativo");


	jQuery(todos).hide();
	jQuery(selecionado).slideDown();
	jQuery('html, body').animate({scrollTop:jQuery(selecionado).offset().top-200},500);

 desmarcados
	jQuery('.link-tamanhoPP, .esc-tamanho, .link-tamanhoP .esc-tamanho, .link-tamanhoM .esc-tamanho, .link-tamanhoG .esc-tamanho, .link-tamanhoGG .esc-tamanho').removeClass("ativo");
});


jQuery('.link-tamanhoPP, .esc-tamanho, .link-tamanhoP .esc-tamanho, .link-tamanhoM .esc-tamanho, .link-tamanhoG .esc-tamanho, .link-tamanhoGG .esc-tamanho').click(function(){
	jQuery('.link-tamanhoPP, .esc-tamanho, .link-tamanhoP .esc-tamanho, .link-tamanhoM .esc-tamanho, .link-tamanhoG .esc-tamanho, .link-tamanhoGG .esc-tamanho').removeClass("ativo");
	jQuery(this).addClass('ativo');
});

jQuery('.1tamanho .esc-tamanho').click(function(){
	jQuery(this).parent().find('.esc-tamanho').removeClass('ativo');
	jQuery(this).addClass('ativo');
});


if(window.location.href.split('?')[1] !== undefined){
	jQuery('a.esc-tamanho').each(function(index, value){
		allParametros = window.location.href.split('?')[1].split('#')[0];
		if(allParametros !== undefined){
			urlNova = jQuery(this).attr('href');
			jQuery(this).attr('href', urlNova);
		}
	});
}