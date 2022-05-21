jQuery(document).ready(function () {
  jQuery('.losb-menu-element').on('click', function () {
    jQuery('.losb-menu-element').removeClass('active');
    jQuery(this).addClass('active');
    var id = jQuery(this).attr('data-id');
    if (id) {
      switchLosb(id);
    }
  });
  jQuery('.losb-menu-element-sub').on('click', function () {
    jQuery('.losb-menu-element-sub').removeClass('active');
    jQuery(this).addClass('active');
    var id = jQuery(this).attr('data-id');
    if (id) {
      switchLosbSub(id);
    }
  });
  function switchLosb(id) {
    jQuery('.losb-content').removeClass('active');
    jQuery('.losb-content[data-id="losb-content-' + id + '"]').addClass('active');
  }
  function switchLosbSub(id) {
    jQuery('.losb-content-sub').removeClass('active');
    jQuery('.losb-content-sub[data-id="losb-content-sub-' + id + '"]').addClass('active');
  }
});
