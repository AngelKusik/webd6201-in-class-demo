//When the page loads, it display a message on the console
//Here we are suing an IFFY - this is an imeddiatly invoked function
//When the window loads we run the function start
(function () {

    function DisplayButton() {

        let randomButton = document.getElementById("RandonButton")
        randomButton.addEventListener("click", function() {
            console.log("button was clicked")
            Location.href = 'http://127.0.0.1:5500/webd6201-in-class-demo/projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        console.log(mainContent)


        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")


        let firstString = "This is a main paragraph that we added through javascript"


        mainParagraph.textContent = firstString



        //must use this in order for the element we created to appear on the page
        mainContent.appendChild(mainParagraph)
    }

    function Start() {
        console.log("App Started!")

        var x = 'Webd6201';

        // if(x === 'Webd6201'){
        //     console.log("Hey everyone! Welcome to ${ x }");
        // }else {
        //     console.log("Hey everyone! This is not ${ x }");
        // }

        //Now we will do a switch case to do the same thing
        switch(document.title) {
            case "Home - WEBD 6201 Demo":
              DisplayButton()
              break;
            case "Projects - WEBD 6201 Demo":
                DisplayButton()
              break;
            default:
              // code block
          } 
    }
    
    window.addEventListener("load", Start)
})()


