define([],function(){return Backbone.View.extend({initialize:function(d,c){this.app=d;this.text_enable=d.options.text_enable||"Enable";this.text_disable=d.options.text_disable||"Disable";this.cls_enable=d.options.cls_enable||"fa fa-plus-square";this.cls_disable=d.options.cls_disable||"fa fa-minus-square";this.field=c.field;this.default_value=c.default_value;this.setElement(this._template(c));this.$field=this.$el.find(".ui-table-form-field");this.$optional=this.$el.find(".ui-table-form-optional");this.$optional_icon=this.$el.find(".ui-table-form-optional").find(".icon");this.$error_text=this.$el.find(".ui-table-form-error-text");this.$error=this.$el.find(".ui-table-form-error");this.$field.prepend(this.field.$el);this.field.skip=false;var b=this.field.value&&this.field.value();this.field.skip=Boolean(c.optional&&(b===null||b===""||b===this.default_value||String(b)===String(this.default_value)||Number(b)===Number(this.default_value)||JSON.stringify(b)===JSON.stringify(this.default_value)));this._refresh();var a=this;this.$optional.on("click",function(){a.field.skip=!a.field.skip;a._refresh();a.app.trigger("change")})},error:function(a){this.$error_text.html(a);this.$error.show();this.$el.addClass("ui-error")},reset:function(){this.$error.hide();this.$el.removeClass("ui-error")},_refresh:function(){this.$optional_icon.removeClass().addClass("icon");if(!this.field.skip){this.$field.fadeIn("fast");this._tooltip(this.text_disable,this.cls_disable)}else{this.$field.hide();this._tooltip(this.text_enable,this.cls_enable);this.field.value&&this.field.value(this.default_value)}},_tooltip:function(b,a){if(this.$optional.length){this.$optional_icon.addClass(a).tooltip({placement:"bottom"}).attr("data-original-title",b).tooltip("fixTitle").tooltip("hide")}},_template:function(a){var b='<div class="ui-table-form-element"><div class="ui-table-form-error ui-error"><span class="fa fa-arrow-down"/><span class="ui-table-form-error-text"/></div><div class="ui-table-form-title">';if(a.optional){b+='<div class="ui-table-form-optional"><i class="icon"/>'+a.label+"</div>"}else{b+=a.label}b+='</div><div class="ui-table-form-field">';b+='<div class="ui-table-form-info">';if(a.help){b+=a.help}b+="</div>";b+="</div></div>";return b}})});