const floatingButton = document.querySelector(".floating-scroll");

if(floatingButton){

    floatingButton.addEventListener("click", () => {

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

    });

}