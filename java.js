document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.addEventListener("DOMContentLoaded", function() {
                const cursor = document.createElement("div");
                cursor.classList.add("custom-cursor");
                document.body.appendChild(cursor);
            
                document.addEventListener("mousemove", (e) => {
                    cursor.style.left = `${e.clientX}px`;
                    cursor.style.top = `${e.clientY}px`;
                });
            
                document.querySelectorAll("a, button").forEach(element => {
                    element.addEventListener("mouseover", () => cursor.classList.add("cursor-grow"));
                    element.addEventListener("mouseleave", () => cursor.classList.remove("cursor-grow"));
                });
            });
            
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
