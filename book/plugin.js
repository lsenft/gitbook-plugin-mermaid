require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    mermaid.ganttConfig = {
        "titleTopMargin": 25,
        "barHeight": 20,
        "barGap": 4,
        "topPadding": 75,
        "sidePadding": 75
      };

    mermaid.init();
  });
});