document.querySelectorAll("p").forEach(p => {
    // console.log(p.innerText.replace(/faraday/gm, "farfadet"))
    p.innerText = p.innerText.replace((/faraday/gmi), "farfadet")
})
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("src", "https://cdn.discordapp.com/attachments/1015757477620502548/1070716699785039985/image.png")
})
