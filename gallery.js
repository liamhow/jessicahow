$(document).ready(function () {
    for (let i = 1; i <= 15; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let icon = document.createElement("span");

        div.className = "art-container";

        $("#gallery").append(div);

        img.className = "art";
        img.src = `Images/${i}.jpg`
        img.alt = ""
        img.onmouseenter = showExpand.bind(img, img);
        img.onmouseleave = hideExpand.bind(img, img);
        img.onclick = expand.bind(img, img);

        div.appendChild(img);

        icon.classList.add("expand-icon", "material-icons");
        icon.innerHTML = "open_in_full";

        div.appendChild(icon)
    }
});

function showExpand(obj) {
    $(obj).siblings(".expand-icon").css("opacity", "0.5");
}

function hideExpand(obj) {
    $(obj).siblings(".expand-icon").css("opacity", "0");
}

function expand(obj) {
    let cover = document.createElement("div");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let x = document.createElement("span");
    let src = $(obj).attr("src");

    cover.id = "cover";
    cover.onclick = clickOff.bind(cover, cover);
    $(cover).css("background-color", "black");
    $(cover).css("opacity", "0.8");
    $(cover).css("position", "fixed");
    $(cover).css("left", "0");
    $(cover).css("right", "0");
    $(cover).css("top", "0");
    $(cover).css("bottom", "0");
    $(cover).css("width", "100%");
    $(cover).css("height", "100%");

    div.id = "expanded-container";
    $(div).css("position", "absolute");
    $(div).css("left", "0");
    $(div).css("right", "0");
    $(div).css("top", "150px");
    $(div).css("margin-left", "auto");
    $(div).css("margin-right", "auto");
    $(div).css("height", "auto");
    $(div).css("width", "1000px");

    img.src = src;
    $(img).css("width", "1000px");
    $(img).css("height", "auto");

    x.classList.add("close-icon", "material-icons", "md-48");
    x.innerHTML = "close";
    $(x).css("cursor", "pointer");
    x.onclick = close.bind(x, x);

    $("body").append(cover);
    $("body").append(div);
    $(div).append(img);
    $(div).append(x);
}

function close(obj) {
    $(obj).parent().remove();
    $("#cover").remove();
}

function clickOff(obj) {
    $("#expanded-container").remove();
    $(obj).remove();
}