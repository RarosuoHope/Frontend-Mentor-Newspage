const menuIcon = document.getElementById("menu-icon");

const menuDesign = document.getElementById("menu-design");
const bacOpa = document.getElementById("bacopa")
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;



    let menuVisible = false;

    function toggleMenu() {
        if (!menuVisible) {
            menuDesign.style.display = "block";
            menuIcon.style.display = "none";
            bacOpa.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            bacOpa.style.position = "fixed";
            menuVisible = true;
        } else {
            menuIcon.style.display = "inline-block";
            menuDesign.style.display = "none";
            bacOpa.style.backgroundColor = "#ffffff";
            bacOpa.style.position = "initial";
            menuVisible = false;
        }
    }

    menuIcon.addEventListener('click', toggleMenu);
    menuDesign.addEventListener('click', toggleMenu);

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 739) {
            document.body.style.backgroundColor = "white"; 
            document.body.style.position = "initial";
            menuDesign.style.display = "none";
            menuIcon.style.display = "none";

        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth < 739) {
            document.body.style.backgroundColor = "white"; 
            document.body.style.position = "initial";
            menuIcon.style.display = "inline-block";
            
        }
    });