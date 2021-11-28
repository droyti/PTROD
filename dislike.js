function waitForInfo(el) {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (document.evaluate(el, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) {
          clearInterval(intervalId);
          resolve();
        }
      }, 500);
    });
}

function dislike()
{    
    waitForInfo("//yt-formatted-string[text()='Dislike']").then(() => {
        var xpath = "//yt-formatted-string[text()='Dislike']";
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var dislikeButton = matchingElement.parentNode.parentNode;
    
        if(!dislikeButton.classList.contains("style-default-active"))
            dislikeButton.click();
      });
}

document.body.addEventListener("yt-navigate-finish", function(event) {
    dislike();
});

window.onload = dislike();

