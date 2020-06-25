// https://dchart.vndirect.com.vn/charting_library/*
window.onload = function() {
  if (window.location.hash.indexOf('interval=D') < 0) {
    $('div[class*="drawingToolbar-"] > .common-tooltip-vertical').click()
    
    $("span:contains('Volume')")[0] && $("span:contains('Volume')")[0].click()
    $(".context-menu > td:contains('Merge Up')").click()
    
    $('div[title="Fullscreen mode"]').click()
  }
  
  function toogleBtm() {
    var height = $('.chart-widget').height()
    if ($('.chart-controls-bar').is(":hidden")) {
      $('.chart-widget, .chart-widget table.chart-markup-table').height(height - 32)
      $(`[style*="height: ${height - 26}"]`).height(height - 58)
    } else {
      $('.chart-widget, .chart-widget table.chart-markup-table').height(height + 32)
      $(`[style*="height: ${height - 26}"]`).height(height + 6)
    }
    $('.chart-controls-bar').toggle()
  }
  $("canvas").dblclick(toogleBtm)
}
