// Adding text to chat box//being able to capture every word typed inside the input element and add it to a list



    // adding event listener for every single key press
    
    list = []
    alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    capsAlphabet =[' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    document.querySelector("input").addEventListener("keydown", function (event) {
       
        var key = event.key

    if (alphabet.includes(key) === true || capsAlphabet.includes(key) === true ) {

          // adding to a list

        list.push(key)
    
    } else if (key === "Enter") {

        const div = document.createElement('div');
        const section = document.querySelector("#chat");
        section.appendChild(div);
        var text = list.join("");
        section.setAttribute("class", "text-box");
        section.innerHTML = text;
        console.log("Enter");
    } else {
        return
    }

  
    })
    


    //  creating a <div> element inside the chat box

    //adding a class attribute to the element

    //inserting a new class inside the class attribute to the element

    //adding the text inserted in the chat box inside the element