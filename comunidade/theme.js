(function($) {

  var $translations = {
    en: {
      'Enterprise': 'Cooperative'
      'Enterprises': 'Cooperatives'
      'My enterprises': 'My cooperatives'
    },
    es: {
      'Empresa': 'Cooperativa'
      'Empresas': 'Cooperativas'
      'My enterprises': 'My cooperatives'
    },
    pt: {
      'Empreendimento': 'Cooperativa'
      'Empreendimentos': 'Cooperativas'
      'Meus empreendimentos': 'Minhas cooperativas'
    }
  }

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#top-menu li a, #mapsite li a, #manage-enterprises, #memberships-index .profile-details, #search-filter-title').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html().replace(/^\s*|\s*$/g,'')];
      if (translated) {
        if (translated.constructor != Array) translated = [translated];
        element.html(translated[0]);
      }
    });
  }
})(jQuery);

