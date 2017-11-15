# st-micro
 
Simple dashboard. Application receives MQTT messages sent by an application deployed on the Everyware Gateway. Messages are processes and alerts are sent based on rules. Alerts are saved as documents. The dashboard allows sending commands to the device and changing some of its custom attributes.
  
  It can take static value or be synced to a Real-time Communication. 

## Requirements:
  
  UIComponents
  
  Modules: login, underscore, momentjs, twilio, zoho
  
## Getting started:

  - Check out UIComponents
  - Check out kitchen_sink
  - Install Modules: login, underscore, momentjs, twilio, zoho
  - Create sub-domain
  - Go to app/view/javascript/config.js and set your token and your sub-domain
  - Set your account Key and account Secret Key in app/entities/config
  - Create the following channels: responseChannel, responseChannel_acme, responseChannel_fe, responseChannel_scriptrio, subscribe
  - Set the following values in your configuration api:
    "optionalBindReferrer": "true", 
		"defaultTokenExpires": "86400", 
		"maximumTokenExpires": "86400", 
		"defaultTokenLifeTime": "86400", 
		"maximumTokenLifeTime": "604800"
  - Create the following groups: acme, fe, scriptrio 
  - Create a user and add him to one of the groups above.
  - Go to modules/login/login and require the login script from app/entities/login/login
  
To simulate data, go to app/simulator/api/initializeDevices and run the script.  

Go to app/view/html/index.html and launch your app
