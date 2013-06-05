(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}},i={}.hasOwnProperty,n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};if("undefined"==typeof Backbone||null===Backbone)throw Error("Backbone is not defined. Please include the latest version from http://documentcloud.github.com/backbone/backbone.js");Backbone.Marionette.Modals=function(i){function o(){return this.close=e(this.close,this),t=o.__super__.constructor.apply(this,arguments)}return n(o,i),o.prototype.modals=[],o.prototype.zIndex=0,o.prototype.show=function(t,e){var i,n,o,s,r,l;for(null==e&&(e={}),this.ensureEl(),this.modals.length>0&&(i=_.last(this.modals),i.modalEl.addClass(""+i.prefix+"-animation-stacked"),o=this.modals[this.modals.length-1],null!=o&&o.modalEl.removeClass(""+o.prefix+"-animation-stacked-reverse")),t.render(),this.$el.show(),this.$el.append(t.el),this.modals.length>0&&t.$el.css({background:"none"}),Marionette.triggerMethod.call(t,"show"),Marionette.triggerMethod.call(this,"show",t),this.currentView=t,l=this.modals,s=0,r=l.length;r>s;s++)n=l[s],n.undelegateModalEvents();return t.on("modal:close",this.close),this.modals.push(t),this.zIndex++},o.prototype.close=function(){var t,e;return e=this.currentView,e&&!e.isClosed?(e.close?e.close():e.remove&&e.remove(),e.off("modal:close",this.close),this.modals.splice(_.indexOf(this.modals,e),1),this.zIndex--,this.currentView=this.modals[this.zIndex-1],t=_.last(this.modals),t&&(t.modalEl.addClass(""+t.prefix+"-animation-stacked-reverse"),_.delay(function(){return t.modalEl.removeClass(""+t.prefix+"-animation-stacked")},300),0!==this.zIndex&&t.delegateModalEvents()),Marionette.triggerMethod.call(this,"close")):void 0},o.prototype.closeAll=function(){var t,e,i,n,o;for(n=this.modals,o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(this.close());return o},o}(Backbone.Marionette.Region)}).call(this);