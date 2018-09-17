# BudgetApp
A simple android app (hybrid) developed using cordova that helps in managing day to day expenses. A real time data table available with all the purchases helps in spending efficiently.


How to use it as an android app:
1) install cordova on your system using npm install -g cordova(For windows. follow the official documentation for other operating systems at https://cordova.apache.org)
2) Create a new project using the command 
cordova create BudgetApp com.android.budget BudgetApp (windows)
run this command in your preferred directory
3) cd BudgetApp
4) cordova plugins add cordova-plugin-sqlite-2 (this app uses the sqlite plugin to manage databases)
5) cordova platforms add android
6) clone the repository and copy the www folder to your cordova app directory. 
7) build the app using the CLI or build.phonegap.com

Debugging:
Install the app on your device and use Dev Tools on Chrome browser to debug.
