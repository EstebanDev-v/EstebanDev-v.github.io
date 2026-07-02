function initTyping(){

    const element = document.getElementById("typing");

    if(!element) return;

    const text = "Desarrollador Full Stack";

    let index = 0;

    element.textContent = "";

    function type(){

        if(index < text.length){

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, 70);

        }

    }

    type();

}