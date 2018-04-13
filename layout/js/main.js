// Tooltip logic
var testingToolTip = {
    toolTipTrigger: $('#tool-tip-trigger, #test-tool-tip'),
    testToolTip: $('#test-tool-tip'),
    toggleToolTip: function(){
        //var self = this;
        this.toolTipTrigger.on('mouseenter', function(){
            this.testToolTip.css('display', 'block');
        }.bind(this));
        this.toolTipTrigger.on('mouseleave', function(){
            this.testToolTip.css('display', 'none');
        }.bind(this));
    }
};


testingToolTip.toggleToolTip();