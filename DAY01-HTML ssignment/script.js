document.addEventListener(
    "DOMContentLoaded", 
    function(){
         const sectionColor = document.getElementById("Change_Background_Color");
         const colors = ["red", "green", "blue"];
    let currentIndex = 0;
    sectionColor.addEventListener("click", function(){
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1 ) % colors.length;
    });
});