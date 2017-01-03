(function(){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
        "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var name in names) {
        var new_par = document.createElement("p");
        new_par.id = "new_par"; 
        var greeter = document.getElementById("greeter");
        greeter.appendChild(new_par);

        var firstChar = names[name].charAt(0).toLowerCase();

        if (firstChar === 'j') {
            //byeSpeaker.speak(names[name]);
            document.getElementById("new_par").innerHTML = "Goodbye" + " " + names[name];


        } else {
            //helloSpeaker.speak(names[name]);
            document.getElementById("new_par").innerHTML = "Hello" + " " + names[name];           
    }
    }

})();
