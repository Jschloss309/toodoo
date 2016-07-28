// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function ready_or_not(){
  function newTask(){
    console.log(arguments);
  }

  $("#new_task").on("ajax:complete", function(event, response, status){
    $("#thing_to_update").append(response.responseText);
    $("#task_name").val('');
  });
}

$(document).on("ready", ready_or_not);
//
//
// var person = {
//   dob: new Date(),
//   first_name: "",
//   last_name: "",
//   full_name: function(){
//     return this.first_name +" "+ this.last_name
//   }
// }
//
// var me = Object.create(person)
// me.dob = new Date(1993, 02, 09)
// me.first_name = "Jonathon"
// me.last_name = "Schloss"
//
// test
//
// now lets use 2 keys to represent full name what should they be?
//
// now add a method called "full_name" to person that combines f & l then RETURNS
//
//
// use this
// // homework:
// // do it again
// // then do it 3 times in ES3 style - refer to slides if necessary


// <ul class="characters">
//   <li class="character">
//     <h1 class="name">Cersei</h1>
//     <h2 class="title">Queen Mother</h2>
//     <span class="house">House Lannister</span>
//   </li>
//   <li class="character">
//     <h1 class="name">Cersei</h1>
//     <h2 class="title">Queen Mother</h2>
//     <span class="house">House Lannister</span>
//   </li>
// </ul>
//
// $( ".characters" ).append("<li><h1>Cersei</h1></li>","<h2>Queen Mother</h2>", "<span>House Lannister</span>");

// $( ".characters" ).append(
//   "<li><h1>Jschloss</h1></li><h2>SamurAI</h2><span>House of Bulk</span>");

// var person = {
//   dob: new Date(),
//   first_name: "",
//   last_name: "",
//   full_name: function(){
//     return this.first_name +" "+ this.last_name
//   }
// }                                                        /* ES5 */
//
// var me = Object.create(person)
// me.dob = new Date(1993, 02, 09)
// me.first_name = "Jonathon"
// me.last_name = "Schloss"
// "Schloss"

//
// function Person (firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
//
// }
//
// Person.prototype.fullName = function() {                    /* ES3  */
//   console.log(this.firstName +" "+ this.lastName);
// }
//
// var me  = new Person("Jonathon","Schloss")
// me.firstName
// me.lastName
// me.fullName();
