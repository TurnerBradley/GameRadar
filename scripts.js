function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function SmallFont(){
    var element = document.body;
    element.classList.add("Small-font");
    element.classList.remove("Medium-font");
    element.classList.remove("Large-font");
}

function MediumFont(){
    var element = document.body;
    element.classList.add("Medium-font");
    element.classList.remove("Small-font");
    element.classList.remove("Large-font");
}

function LargeFont(){
    var element = document.body;
    element.classList.add("Large-font");
    element.classList.remove("Medium-font");
    element.classList.remove("Small-font");
}



function changeText(){
    var name = document.getElementById("welcomeForm").fname.value;
    var welcome = "Thank you for Submitting" + name + "! <br><a href='contact.html'><buttonSubmit another form</button></a>";
    document.getElementById("welcomeText").innerHTML = welcome;
}
