const pdfEmbed = document.getElementById("pdf-embed");
const pdfButton = document.getElementById("pdf-button");

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || true
) {
    // use pdf download button
    pdfEmbed.style.display = "none";
    pdfButton.style.display = "block";
} else {
    // use the regular pdf embed
    pdfEmbed.style.display = "block";
    pdfButton.style.display = "none";
}