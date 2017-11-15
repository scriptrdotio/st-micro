var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    {"id":"1", "iconClass":"fa fa-globe", "label": "Map", "route":"#/map", "active":"true"},
    {"id":"2", "iconClass":"fa fa-dashboard", "label": "Dashboard", "route":"#/dashboard", "active":"false", "sub": "col2"},
    {"id":"1", "iconClass":"fa fa-line-chart", "label": "Reports", "route":"#/reports", "active":"false", "sub": "col3"},
    {"id":"1", "iconClass":"fa fa-list-alt", "label": "Generic Rules", "route":"#/rules", "active":"false", "sub": "col4"}
  ],
  "col2": [
    {"id":"6", "iconClass":"fa fa-clock-o", "label":"Real Time", "route":"#/realTime", "active":"false"},
    {"id":"7", "iconClass":"fa fa-file-text-o", "label": "Logs", "route":"#/logs", "active":"false"},  
    {"id":"7", "iconClass":"fa fa-bar-chart", "label": "Historical", "route":"#/historical", "active":"false"},
    {"id":"8", "iconClass":"fa fa-ticket", "label":"Tickets", "route":"#/tickets", "active":"false"}
 //   {"id":"5", "iconClass":"fa fa-hand-stop-o", "label": "Nucleo Threshold", "route":"#/threshold", "active":"false"}
  ],
  "col3": [
    {"id":"6", "iconClass":"fa fa-battery-half", "label":"Battery Level", "route":"#/batteryLevel", "active":"false"},
    {"id":"7", "iconClass":"fa fa-thermometer-2", "label": "High Temperature", "route":"#/highTemperature", "active":"false"},
 //   {"id":"8", "iconClass":"fa fa-unlink", "label":"Tampered With", "route":"#/tamperedWith", "active":"false"}
  ],
   "col4": [
        {"id":"6", "iconClass":"fa fa-lock", "label":"Edit ticket rule", "route":"#/ticketRule", "active":"false"},
//    {"id":"6", "iconClass":"fa fa-lock", "label":"Edit lock rule", "route":"#/lockRule", "active":"false"},
   // {"id":"7", "iconClass":"fa fa-thermometer-2", "label": "Edit temperature rule", "route":"#/temperatureRule", "active":"false"}
  ]  
}; 

var headerItems = {
    //"logo": "",
    "items": [],
    "subitems": [
        {"id":"1", "iconClass":"fa fa-bell", "label": "Notification Rules", "route":"#/notifications", "active":"false"},
        {"id":"2", "iconClass":"fa fa-users", "label":"User Management", "route":"#/userManagement", "active":"true", "roles":["management"]}
    ], 
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"}
};

var routingItems = {
  "params": [
    {"route": "map", "template": "/app/view/html/views/map/map.html"},
    {"route": "realTime", "template": "/app/view/html/views/dashboard/realTime.html"},
    {"route": "logs", "template": "/app/view/html/views/dashboard/logs.html"},  
    {"route": "historical", "template": "/app/view/html/views/dashboard/historical.html"},
    {"route": "tickets", "template": "/app/view/html/views/dashboard/tickets.html"},
 //   {"route": "threshold", "template": "/app/view/html/views/dashboard/threshold.html"},
    {"route": "userManagement", "template": "/app/view/html/views/management/userManagement.html"},   
    {"route": "notifications", "template": "/app/view/html/views/notifications/notifications.html", controller: "notificationCtrl as vm"},
    {"route": "batteryLevel", "template": "/app/view/html/views/reports/batteryLevel.html", controller: "batteryLevelCtrl as vm"},  
    {"route": "highTemperature", "template": "/app/view/html/views/reports/temperature.html", controller: "temperatureLevelCtrl as vm"},    
    {"route": "tamperedWith", "template": "/app/view/html/views/reports/tamperedWith.html", controller: "tamperedWithlCtrl as vm"},
    {"route": "lockRule", "template": "/app/view/html/views/genericRules/genericLockRule.html", controller: "lockRuleCtrl as vm"},  
    {"route": "ticketRule", "template": "/app/view/html/views/genericRules/ticketRule.html", controller: "ticketRuleCtrl as vm"},  
    {"route": "temperatureRule", "template": "/app/view/html/views/genericRules/genericTemperatureRule.html", controller: "temperatureRuleCtrl as vm"},    
    {"route": "logout", "template": "/app/view/html/logout.html"},  
  ],
  "otherwiseOption" : {"template": "/"}
};
