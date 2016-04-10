Handlebars.registerPartial("product", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"product\">\r\n    <img class=\"product__image\" src=\"http://lorempixel.com/g/600/600/technics\" />\r\n    <p class=\"product__description\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true}));
this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["App"]["templates"]["navigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<img class=\"logo pull-left hidden-xs\" src=\"http://placehold.it/300x100?text=build.it\" alt=\"build.it logo\" />\r\n<img class=\"logo pull-left visible-xs\" src=\"http://placehold.it/100x100?text=build.it\" alt=\"build.it logo\" />\r\n<ul class=\"navigation-links pull-left hidden-xs hidden-sm\">\r\n    <li><a href=\"/home\" class=\"navigation-link home-link -current\">Home</a></li>\r\n    <li><a href=\"/products\" class=\"navigation-link products-link\">Products</a></li>\r\n    <li><a href=\"/orders\" class=\"navigation-link orders-link\">Orders</a></li>\r\n</ul>\r\n<div class=\"simple-navigation hidden-md hidden-lg\">\r\n    <i class=\"fa fa-bars fa-2x menu pull-right\"></i>\r\n    <button class=\"button category -primary pull-right\" id=\"category-button\">Categories</button>\r\n</div>\r\n<div class=\"utility-navigation hidden-xs-inline hidden-sm-inline\">\r\n    <button class=\"button -primary pull-right\">Sign up</button>\r\n    <button class=\"button -primary pull-right\">Login</button>\r\n</div>";
},"useData":true});
this["App"]["templates"]["pageLinks"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li><a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.generatePages || (depth0 && depth0.generatePages) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.products : depth0),{"name":"generatePages","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
this["App"]["templates"]["products"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.product,depth0,{"name":"product","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});