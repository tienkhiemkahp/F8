document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('myimage');
    var result = document.getElementById('myresult');
    var lens, cx, cy;

    function createLens() {
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        img.parentElement.insertBefore(lens, img);
    }

    function initZoomEffect() {
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
    }

    function moveLens(e) {
        e.preventDefault();
        requestAnimationFrame(function() {
            var pos = getCursorPos(e);
            var x = pos.x - (lens.offsetWidth / 2);
            var y = pos.y - (lens.offsetHeight / 2);
            x = Math.max(0, Math.min(x, img.width - lens.offsetWidth));
            y = Math.max(0, Math.min(y, img.height - lens.offsetHeight));
            lens.style.left = x + "px";
            lens.style.top = y + "px";

            var newPos = "-" + (x * cx) + "px -" + (y * cy) + "px";
            if (result.style.backgroundPosition !== newPos) {
                result.style.backgroundPosition = newPos;
            }
        });
    }

    function getCursorPos(e) {
        var a = img.getBoundingClientRect();
        return {
            x: e.clientX - a.left,
            y: e.clientY - a.top
        };
    }

    function hideZoomElements() {
        lens.style.display = "none";
        result.style.display = "none";
    }

    function showZoomElements() {
        lens.style.display = "block";
        result.style.display = "block";
    }

    createLens();
    initZoomEffect();

    img.addEventListener("mouseout", function() {
        hideZoomElements();
    });

    img.addEventListener("mouseenter", function() {
        showZoomElements();
    });
});
