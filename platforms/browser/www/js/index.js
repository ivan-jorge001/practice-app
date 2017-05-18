/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
charactersAPI.getOneRegister($('#searchByID').val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());
  });



  // ===============================================================
  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
var
name = $('#name').val(),
occupation = $('#occupation').val(),
debt ,
weapon = $('#weapon').val();

if( $('#debt').prop("checked",true)){
  debt = true;
}else {
  debt = false;
}
console.log(name,occupation,debt,weapon);
charactersAPI.createOneRegister(name,occupation,debt,weapon);
  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();

    var
    one = $('#updateOne').val(),
    name = $('#edit-name').val(),
    occupation = $('#edit-occupation').val(),
    debt ,
    weapon = $('#edit-weapon').val();
    if( $('#edit-debt').prop("checked",true)){
      debt = true;
    }else {
      debt = false;
    }
charactersAPI.updateOneRegister(one,name,occupation,debt,weapon);
  });

});


    },
    // Update DOM on a Received Event

};
