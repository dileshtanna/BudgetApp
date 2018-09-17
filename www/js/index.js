window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
        
    }
}




    if("username" in localStorage){
    var username = window.localStorage.getItem("username");
        
    }
    var myDB = null;

         if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                             alert("android");

               document.addEventListener("deviceready",onDeviceReady,false); 
            function onDeviceReady(){
                    alert("inside ");
                    
                        myDB = window.sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);
//                if(window.localStorage.getItem("loggedIn") != 1){
//                    window.location.href("loginSignUp.html");
//                    
//                }
            
             
                
                 document.getElementById("tableData").innerHTML = "";
                  myDB.transaction(function(transaction) {
                  transaction.executeSql('SELECT * FROM '+username+'Budget ORDER BY rowid DESC LIMIT 1', [], function (tx, results) {
                        var len = results.rows.length, i;
                        for (i = 0; i < len; i++){
                            $("#tableData").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");
                      
                  }},null);
                 
             });
         
             
                 document.getElementById("tableData2").innerHTML = "";
                              myDB.transaction(function(transaction) {
                                  var executeQuery = "SELECT * FROM "+username+"Budget where  date >= date('now','-30 days') order by rowid DESC"
                              transaction.executeSql(executeQuery, [], function (tx, results) {
                                    var len = results.rows.length, i;
                                    for (i = 0; i < len; i++){
                                        $("#tableData2").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");

                              }},null);

                         });
                 
             
             
        myDB.transaction(function(transaction) {
                        $("#bankDetails").html("");
                        transaction.executeSql('SELECT * FROM '+username+'Details', [], function (tx, results) {
                            var len = results.rows.length, i;
                            var bank = 0;
                            for (i = 0; i < len; i++){
                                $("#cash").append(results.rows.item(i).cash);
                                
                                
                                
                                
                                if(results.rows.item(i).bank1Amt == "" || results.rows.item(i).bank1Amt == "undefined" || results.rows.item(i).bank1Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 1 Info to ADD:</label></h3> <input id = 'addBank1Name' placeholder = 'Enter Bank 1 Name'> <input id = 'addBank1Amt' placeholder = 'Enter Bank 1 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank1()'>ADD</button> ");
                                }
                                
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank1Amt+"</span> in "+results.rows.item(i).bank1Name+"</label></h3> <input id='newBank1Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank1()'>Update</button> ");
                                    bank = +bank+ +results.rows.item(i).bank1Amt;
                                    
                                }
                                if(results.rows.item(i).bank2Amt == "" || results.rows.item(i).bank2Amt == "undefined" || results.rows.item(i).bank2Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 2 Info to ADD:</label></h3> <input id = 'addBank2Name' placeholder = 'Enter Bank 2 Name'> <input id = 'addBank2Amt' placeholder = 'Enter Bank 2 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank2()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank2Amt+"</span> in "+results.rows.item(i).bank2Name+"</label></h3> <input id='newBank2Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank2()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank2Amt;
                                }
                                if(results.rows.item(i).bank3Amt == "" || results.rows.item(i).bank3Amt == "undefined" || results.rows.item(i).bank3Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 3 Info to ADD:</label></h3> <input id = 'addBank3Name' placeholder = 'Enter Bank 3 Name'> <input id = 'addBank3Amt' placeholder = 'Enter Bank 3 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank3()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank3Amt+"</span> in "+results.rows.item(i).bank3Name+"</label></h3> <input id='newBank3Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank3()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank3Amt;
                                }
                                if(results.rows.item(i).bank4Amt == "" || results.rows.item(i).bank4Amt == "undefined" || results.rows.item(i).bank4Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 4 Info to ADD:</label></h3> <input id = 'addBank4Name' placeholder = 'Enter Bank 4 Name'> <input id = 'addBank4Amt' placeholder = 'Enter Bank 4 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank4()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank4Amt+"</span> in "+results.rows.item(i).bank4Name+"</label></h3> <input id='newBank4Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank4()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank4Amt;
                                }
                                if(results.rows.item(i).bank5Amt == "" || results.rows.item(i).bank5Amt == "undefined" || results.rows.item(i).bank5Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 5 Info to ADD:</label></h3> <input id = 'addBank5Name' placeholder = 'Enter Bank 5 Name'> <input id = 'addBank5Amt' placeholder = 'Enter Bank 5 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank5()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank5Amt+"</span> in "+results.rows.item(i).bank5Name+"</label></h3> <input id='newBank5Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank5()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank5Amt;
                                }
                                $("#bank").append(bank);
                            
                      }},null);

                        
                 });
                

            
    }

             
//             document.addEventListener("deviceready",onSettingsReady,false);
//             document.addEventListener("deviceready",topTableEntry,false);
//             document.addEventListener("deviceready",getCurrentMonthStatement,false);
             
        }
//        else {
//            alert("browser");
//                onDeviceReady();
//                onSettingsReady();
//                function onDeviceReady(){
//                    
//                    
//                    myDB = window.openDatabase('mydb.db', '1.0', '', 1);
//                    //if(window.localStorage.getItem("loggedIn") != 1){
//                    //window.location.href("loginSignUp.html"); 
//                }                   
//
//                }
                

                if (performance.navigation.type == 1) {
                    $("#tableData").html("");
                    //var username = window.localStorage.getItem("username").value();
                    myDB.transaction(function(transaction) {
                    transaction.executeSql('SELECT * FROM '+username+'Budget ORDER BY rowid DESC LIMIT 1', [], function (tx, results) {
                        var len = results.rows.length, i;
                        for (i = 0; i < len; i++){
                            $("#tableData").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");
                      
                  }},null);
                    
                 
             });
              } else {
                console.info( "This page is not reloaded");
              }

                            
                        


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("tableData2").innerHTML = "";
                              myDB.transaction(function(transaction) {
                                  var executeQuery = "SELECT * FROM "+username+"Budget where  date >= date('now','-30 days') order by rowid DESC"
                              transaction.executeSql(executeQuery, [], function (tx, results) {
                                    var len = results.rows.length, i;
                                    for (i = 0; i < len; i++){
                                        $("#tableData2").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");

                              }},null);

                         });
    
                    $("#tableData").html("");
                    //var username = window.localStorage.getItem("username").value();
                    myDB.transaction(function(transaction) {
                    transaction.executeSql('SELECT * FROM '+username+'Budget ORDER BY rowid DESC LIMIT 1', [], function (tx, results) {
                        var len = results.rows.length, i;
                        for (i = 0; i < len; i++){
                            $("#tableData").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");
                      
                  }},null);
                    
                 
             });
    
    
}, false);



$(window).on('shown.bs.modal', function() { 
    
    $("#mopB").html("");
    //var username = window.localStorage.getItem("username").value();
    myDB.transaction(function(transaction) {
        
    var executeQuery = "SELECT * from "+username+"Details";             
    transaction.executeSql(executeQuery, []
        , function(tx, result) {
            var len = result.rows.length, i;
            
            for (i = 0; i < len; i++){
                if(result.rows.item(i).bank1Name == "" || result.rows.item(i).bank1Name == "undefined" || result.rows.item(i).bank1Name == "null"){}
                else{
                $("#mopB").append(" <option value='1'>"+result.rows.item(i).bank1Name+" Wallet</option> <option value='2'>"+result.rows.item(i).bank1Name+" Debit Card</option> <option value='3'>"+result.rows.item(i).bank1Name+" Net Banking</option>");
                }
                if(result.rows.item(i).bank2Name == "" || result.rows.item(i).bank2Name == "undefined" || result.rows.item(i).bank2Name == "null"){}
                else{
                $("#mopB").append(" <option value='4'>"+result.rows.item(i).bank2Name+" Wallet</option> <option value='5'>"+result.rows.item(i).bank2Name+" Debit Card</option> <option value='6'>"+result.rows.item(i).bank2Name+" Net Banking</option>");
                }
                if(result.rows.item(i).bank3Name == "" || result.rows.item(i).bank3Name == "undefined" || result.rows.item(i).bank3Name == "null"){}
                else{
                $("#mopB").append(" <option value='7'>"+result.rows.item(i).bank3Name+" Wallet</option> <option value='8'>"+result.rows.item(i).bank3Name+" Debit Card</option> <option value='9'>"+result.rows.item(i).bank3Name+" Net Banking</option>");
                }
                if(result.rows.item(i).bank4Name == "" || result.rows.item(i).bank4Name == "undefined" || result.rows.item(i).bank4Name == "null"){}
                else{
                $("#mopB").append(" <option value='10'>"+result.rows.item(i).bank4Name+" Wallet</option> <option value='11'>"+result.rows.item(i).bank4Name+" Debit Card</option> <option value='12'>"+result.rows.item(i).bank4Name+" Net Banking</option>");
                }
                if(result.rows.item(i).bank5Name == "" || result.rows.item(i).bank5Name == "undefined" || result.rows.item(i).bank5Name == "null"){}
                else{
                $("#mopB").append(" <option value='13'>"+result.rows.item(i).bank5Name+" Wallet</option> <option value='14'>"+result.rows.item(i).bank5Name+" Debit Card</option> <option value='15'>"+result.rows.item(i).bank5Name+" Net Banking</option>");
                }              
        }},
        function(error){
             alert('Transaction ERROR: ' + error.message); 
        });
    });
    


    $("#submitData").click(function(){

    var date= document.getElementById("date").value;
    var product = document.getElementById("product").value;
    var cost = document.getElementById("cost").value;
    var mop = document.getElementById("mop");
    var method = mop.options[mop.selectedIndex].text;
    var methodValue = mop.options[mop.selectedIndex].value;
        alert("methodValue: "+methodValue);
    
    var mopB = document.getElementById("mopB");
    
    if(methodValue==1){
        var methodB = "NA";
        var methodBValue = 0;
        alert("methodB : "+methodB);
        alert("methodBValue:"+methodBValue);
    }
        else{
            var methodB = mopB.options[mopB.selectedIndex].text;
        var methodBValue = mopB.options[mopB.selectedIndex].value;
        }
    
    var comments = document.getElementById("comments").value;
    //var username = window.localStorage.getItem("username").value();
    myDB.transaction(function(transaction) {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS '+username+'Budget (date  , product , cost , mop , mopb , comments )', [],
    function(tx, result) {
        alert("Table created successfully");
    }, 
    function(error) {
          alert("Error occurred while creating the table.");
    });
    var executeQuery = "INSERT INTO "+username+"Budget VALUES (?,?,?,?,?,?)";             
    transaction.executeSql(executeQuery, [date,product,cost,method,methodB,comments]
        , function(tx, result) {
             alert('Inserted');
        },
        function(error){
             alert('Transaction ERROR: ' + error.message); 
        });
        
    });

    updateChanges(cost,method,methodB,methodBValue);
});

    
});
    





$('#myModal').on('hidden.bs.modal', function () {
 location.reload();
})




function getStatement(){
     document.getElementById("tableData2").innerHTML = "";
                  myDB.transaction(function(transaction) {
                      var fromDate = $("#fromDate").val();
                        var toDate = $("#toDate").val();
                      //var username = window.localStorage.getItem("username").value();
                      var executeQuery = "SELECT * FROM "+username+"Budget where  date >= ? AND date <= ? order by rowid DESC"
                  transaction.executeSql(executeQuery, [fromDate, toDate], function (tx, results) {
                        var len = results.rows.length, i;
                        for (i = 0; i < len; i++){
                            $("#tableData2").append("<tr><td>"+results.rows.item(i).date+"</td><td>"+results.rows.item(i).product+"</td><td>"+results.rows.item(i).cost+"</td><td>"+results.rows.item(i).mop+"</td><td>"+results.rows.item(i).mopb+"</td><td>"+results.rows.item(i).comments+"</td></tr>");
                      
                  }},null);
                 
             });

}


$("#submitProfile").click(function(){

    
    var name = $("#name").val();
    var cash = $("#cash").val();
    var bank1Name = $("#bank1Name").val();
    var bank1Amt = $("#bank1Amt").val();
    var bank2Name = $("#bank2Name").val();
    var bank2Amt = $("#bank2Amt").val();
    var bank3Name = $("#bank3Name").val();
    var bank3Amt = $("#bank3Amt").val();
    var bank4Name = $("#bank4Name").val();
    var bank4Amt = $("#bank4Amt").val();
    var bank5Name = $("#bank5Name").val();
    var bank5Amt = $("#bank5Amt").val();
    var username = window.localStorage.getItem("username");
    
    myDB.transaction(function(transaction) {
                  transaction.executeSql('CREATE TABLE IF NOT EXISTS '+username+'Details (name, cash , bank1Name , bank1Amt , bank2Name , bank2Amt ,bank3Name , bank3Amt ,bank4Name , bank4Amt ,bank5Name , bank5Amt )', [],
                    function(tx, result) {
                        alert("Table created successfully");
                    }, 
                    function(error) {
                          alert("Error occurred while creating the table."+error);
                    });
                         
                    var executeQuery = "INSERT INTO "+username+"Details VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";             
                    transaction.executeSql(executeQuery, [name, cash , bank1Name , bank1Amt , bank2Name , bank2Amt ,bank3Name , bank3Amt ,bank4Name , bank4Amt ,bank5Name , bank5Amt]
                        , function(tx, result) {
                             alert('Inserted');
                        },
                        function(error){
                             alert('Error occurred'); 
                        });
                 
             });
    window.location="index.html";
    
});



function showSignUp(){
    
    $("#signUp").show();
    $("#loginNo").hide();
    
}

function showLogin(){
    
    $("#signUp").hide();
    $("#loginNo").show();
    
}


function login(){
    
    var user = $("#username").val();
    alert(user);
    var password = $("#password").val();
    myDB.transaction(function(transaction) {
                        
                    var executeQuery = "SELECT * FROM users WHERE username=? AND password=?";             
                    transaction.executeSql(executeQuery, [user,password]
                        , function(tx, result) {
                             alert("login successful");
                            
                            window.localStorage.setItem("loggedIn",1);
                            window.localStorage.setItem("username",user);
                            var executeQuery = "SELECT * FROM "+user+"Details";             
                            transaction.executeSql(executeQuery, []
                            , function(tx, result) {
                             window.location="index.html";
                                },
                                function(error){
                                     window.location="profile.html"; 
                                });

                            },
                        function(error){
                             alert('No such user found'); 
                        });
                 
             });
    
}


function signUp(){
    
    myDB.transaction(function(transaction) {
                  transaction.executeSql('CREATE TABLE IF NOT EXISTS users (username, password )', [],
                    function(tx, result) {
                        alert("Table created successfully");
                    }, 
                    function(error) {
                          alert("Error occurred while creating the table."+error);
                    });
                    var user = document.getElementById("usernameSignUp").value;
                    var password = document.getElementById("passwordSignUp").value;    
                    var executeQuery = "INSERT INTO users VALUES (?,?)";             
                    transaction.executeSql(executeQuery, [user, password]
                        , function(tx, result) {
                             alert('Inserted');
                            $("#signUp").hide();
                            $("#loginNo").show();
                        },
                        function(error){
                             alert('Error occurred'); 
                        });
                 
             });
    
    
}





//Settings Page Starts Here
    function onSettingsReady(){
        myDB.transaction(function(transaction) {
                        $("#bankDetails").html("");
                        transaction.executeSql('SELECT * FROM '+username+'Details', [], function (tx, results) {
                            var len = results.rows.length, i;
                            var bank = 0;
                            for (i = 0; i < len; i++){
                                $("#cash").append(results.rows.item(i).cash);
                                
                                
                                
                                
                                if(results.rows.item(i).bank1Amt == "" || results.rows.item(i).bank1Amt == "undefined" || results.rows.item(i).bank1Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 1 Info to ADD:</label></h3> <input id = 'addBank1Name' placeholder = 'Enter Bank 1 Name'> <input id = 'addBank1Amt' placeholder = 'Enter Bank 1 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank1()'>ADD</button> ");
                                }
                                
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank1Amt+"</span> in "+results.rows.item(i).bank1Name+"</label></h3> <input id='newBank1Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank1()'>Update</button> ");
                                    bank = +bank+ +results.rows.item(i).bank1Amt;
                                    
                                }
                                if(results.rows.item(i).bank2Amt == "" || results.rows.item(i).bank2Amt == "undefined" || results.rows.item(i).bank2Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 2 Info to ADD:</label></h3> <input id = 'addBank2Name' placeholder = 'Enter Bank 2 Name'> <input id = 'addBank2Amt' placeholder = 'Enter Bank 2 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank2()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank2Amt+"</span> in "+results.rows.item(i).bank2Name+"</label></h3> <input id='newBank2Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank2()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank2Amt;
                                }
                                if(results.rows.item(i).bank3Amt == "" || results.rows.item(i).bank3Amt == "undefined" || results.rows.item(i).bank3Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 3 Info to ADD:</label></h3> <input id = 'addBank3Name' placeholder = 'Enter Bank 3 Name'> <input id = 'addBank3Amt' placeholder = 'Enter Bank 3 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank3()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank3Amt+"</span> in "+results.rows.item(i).bank3Name+"</label></h3> <input id='newBank3Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank3()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank3Amt;
                                }
                                if(results.rows.item(i).bank4Amt == "" || results.rows.item(i).bank4Amt == "undefined" || results.rows.item(i).bank4Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 4 Info to ADD:</label></h3> <input id = 'addBank4Name' placeholder = 'Enter Bank 4 Name'> <input id = 'addBank4Amt' placeholder = 'Enter Bank 4 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank4()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank4Amt+"</span> in "+results.rows.item(i).bank4Name+"</label></h3> <input id='newBank4Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank4()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank4Amt;
                                }
                                if(results.rows.item(i).bank5Amt == "" || results.rows.item(i).bank5Amt == "undefined" || results.rows.item(i).bank5Amt == "null"){
                                    $("#bankDetails").append(" <h3><label>Enter Bank 5 Info to ADD:</label></h3> <input id = 'addBank5Name' placeholder = 'Enter Bank 5 Name'> <input id = 'addBank5Amt' placeholder = 'Enter Bank 5 Amount'> <button type='submit' class='btn btn-primary' id='update' onClick = 'addBank5()'>ADD</button> ");
                                }
                                else{
                                $("#bankDetails").append(" <h3> <label> You have = <span>"+results.rows.item(i).bank5Amt+"</span> in "+results.rows.item(i).bank5Name+"</label></h3> <input id='newBank5Amt'> <button type='submit' class='btn btn-primary' id='update' onClick = 'updateBank5()'>Update</button> ");
                                    bank = +bank + +results.rows.item(i).bank5Amt;
                                }
                                $("#bank").append(bank);
                            
                      }},null);

                        
                 });

            
    }

function updateCash(){
    
    var newAmt = $("#newCash").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET cash=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}

function updateBank1(){
    
    var newAmt = $("#newBank1Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank1Amt=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}

function updateBank2(){
    
    var newAmt = $("#newBank2Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank2Amt=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}

function updateBank3(){
    
    var newAmt = $("#newBank3Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank3Amt=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}
function updateBank4(){
    
    var newAmt = $("#newBank4Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank4Amt=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}
function updateBank5(){
    
    var newAmt = $("#newBank5Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank5Amt=?";
    transaction.executeSql(executeQuery, [newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  });
    location.reload();
}


function addBank5(){
    var newName = $("#addBank5Name").val();
    var newAmt = $("#addBank5Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank5Name=? , bank5Amt=?";
    transaction.executeSql(executeQuery, [newName, newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  }); 
location.reload();
    
}


function addBank4(){
    var newName = $("#addBank4Name").val();
    var newAmt = $("#addBank4Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank4Name=? , bank4Amt=?";
    transaction.executeSql(executeQuery, [newName, newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  }); 
location.reload();
    
}

function addBank3(){
    var newName = $("#addBank3Name").val();
    var newAmt = $("#addBank3Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank3Name=? , bank3Amt=?";
    transaction.executeSql(executeQuery, [newName, newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  }); 
location.reload();
    
}

function addBank2(){
    var newName = $("#addBank2Name").val();
    var newAmt = $("#addBank2Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank2Name=? , bank2Amt=?";
    transaction.executeSql(executeQuery, [newName, newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  }); 

    location.reload();
}

function addBank1(){
    var newName = $("#addBank1Name").val();
    var newAmt = $("#addBank1Amt").val();
    myDB.transaction(function(transaction) {
    var executeQuery = "UPDATE "+username+"Details SET bank1Name=? , bank1Amt=?";
    transaction.executeSql(executeQuery, [newName, newAmt],
      //On Success
      function(tx, result) {alert('Updated successfully');},
      //On Error
      function(error){alert('Something went Wrong');});
  }); 
location.reload();
    
}


function updateChanges(cost,methodValue,methodB,methodBValue){
    alert("update starts");
    var totalCash = 0;
    var newCash = 0;
    alert("methodValue in update:"+methodValue)
    if (methodValue=="Cash"){
        alert("updating cash");
        myDB.transaction(function(transaction) {
        var executeQuery = "SELECT cash from "+username+"Details";
        transaction.executeSql(executeQuery, [],
      
      function(tx, result) {
            totalCash = result.rows.item(0).cash;
            alert("total cash"+totalCash)
             newCash = totalCash - parseInt(cost);
            alert("new cash:"+newCash);
        },
      
      function(error){alert('Something went Wrong');})});
           
            
        myDB.transaction(function(transaction) {
        var executeQuery = "UPDATE "+username+"Details SET cash=?";
        transaction.executeSql(executeQuery, [newCash],
                               
      function(tx, result) {alert('Updated successfully');},

        function(error){alert('Something went Wrong');});
        });
        
    }
    else{
        
            if (methodBValue!=0){
                 if(methodBValue==1 ||methodBValue==2 ||methodBValue==3 ){
                     myDB.transaction(function(transaction) {
                    var executeQuery = "SELECT bank1Amt from "+username+"Details";
                     transaction.executeSql(executeQuery, [],
                  function(tx, result) {
                        totalCash = result.rows.item(0).bank1Amt;
                        alert("total cash"+totalCash)
                         newCash = totalCash - parseInt(cost);
                        alert("new cash:"+newCash);
                    },function(error){alert('Something went Wrong');});});
                       
                    myDB.transaction(function(transaction) {
                    var executeQuery = "UPDATE "+username+"Details SET bank1Amt=?";
                    transaction.executeSql(executeQuery, [newCash],                        
                  function(tx, result) {alert('Updated successfully');},function(error){alert('Something went Wrong');});
                    });
                 }
                else if(methodBValue==4 ||methodBValue==5 ||methodBValue==6 ){
                    myDB.transaction(function(transaction) {
                    var executeQuery = "SELECT bank2Amt from "+username+"Details";
                    transaction.executeSql(executeQuery, [],
      function(tx, result) {
            totalCash = result.rows.item(0).bank2Amt;
            alert("total cash"+totalCash)
             newCash = totalCash - parseInt(cost);
            alert("new cash:"+newCash);
        },function(error){alert('Something went Wrong');});});
        myDB.transaction(function(transaction) {
        var executeQuery = "UPDATE "+username+"Details SET bank2Amt=?";
        transaction.executeSql(executeQuery, [newCash],                        
      function(tx, result) {alert('Updated successfully');},function(error){alert('Something went Wrong');});
        });
                }
                else if(methodBValue==7 ||methodBValue==8 ||methodBValue==9 ){
                    myDB.transaction(function(transaction) {
                    var executeQuery = "SELECT bank3Amt from "+username+"Details";
            transaction.executeSql(executeQuery, [],
      function(tx, result) {
            totalCash = result.rows.item(0).bank3Amt;
            alert("total cash"+totalCash)
             newCash = totalCash - parseInt(cost);
            alert("new cash:"+newCash);
        },function(error){alert('Something went Wrong');});});
        myDB.transaction(function(transaction) {
        var executeQuery = "UPDATE "+username+"Details SET bank3Amt=?";
        transaction.executeSql(executeQuery, [newCash],                        
      function(tx, result) {alert('Updated successfully');},function(error){alert('Something went Wrong');});
        });
                }
                else if(methodBValue==10 ||methodBValue==11 ||methodBValue==12 ){
                    myDB.transaction(function(transaction) {
                    var executeQuery = "SELECT bank4Amt from "+username+"Details";
                    transaction.executeSql(executeQuery, [],
      function(tx, result) {
            totalCash = result.rows.item(0).bank4Amt;
            alert("total cash"+totalCash)
             newCash = totalCash - parseInt(cost);
            alert("new cash:"+newCash);
        },function(error){alert('Something went Wrong');});});
        myDB.transaction(function(transaction) {
        var executeQuery = "UPDATE "+username+"Details SET bank4Amt=?";
        transaction.executeSql(executeQuery, [newCash],                        
      function(tx, result) {alert('Updated successfully');},function(error){alert('Something went Wrong');});
        });
                }
                else{
                    myDB.transaction(function(transaction) {
                    var executeQuery = "SELECT bank5Amt from "+username+"Details";
                    transaction.executeSql(executeQuery, [],
      function(tx, result) {
            totalCash = result.rows.item(0).bank5Amt;
            alert("total cash"+totalCash)
             newCash = totalCash - parseInt(cost);
            alert("new cash:"+newCash);
        },function(error){alert('Something went Wrong');});});
        myDB.transaction(function(transaction) {
        var executeQuery = "UPDATE "+username+"Details SET bank5Amt=?";
        transaction.executeSql(executeQuery, [newCash],                        
      function(tx, result) {alert('Updated successfully');},function(error){alert('Something went Wrong');});
        });}}}}