var xpath = "//yt-formatted-string[text()='Dislike']";
var dislikeButton = false;

function waitForDislikeButton() {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        var btnTxt = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (btnTxt != undefined) {
          dislikeButton = btnTxt.parentNode.parentNode;
          clearInterval(intervalId);
          resolve();
        }
      }, 500);
    });
}

function dislike()
{    
    waitForDislikeButton().then(() => {    
        if(!dislikeButton.classList.contains("style-default-active"))
            dislikeButton.click();
      });
}

document.body.addEventListener("yt-navigate-finish", function(event) {
    dislike();
});

window.onload = dislike();

