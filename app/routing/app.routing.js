"use strict";
var router_1 = require('@angular/router');
var contact_component_1 = require('../components/contactComponent/contact.component');
var player_component_1 = require('../components/playerComponent/player.component');
var home_component_1 = require('../components/homeComponent/home.component');
var pageNotFound_component_1 = require('../components/pageNotFoundComponent/pageNotFound.component');
var appRoutes = [
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'player',
        component: player_component_1.PlayerComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: pageNotFound_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map