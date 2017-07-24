"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var other_component_1 = require("./components/other/other.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'other', component: other_component_1.OtherComponent },
    { path: '**', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map