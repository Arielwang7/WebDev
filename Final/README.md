## Final Project Documentation

link to website:http://127.0.0.1:3004/Midterm/Midterm.html

projet summary: A website that has different photo album of all the places I've traveled to

## Code Snippet: 
const gallery = document.getElementById("gallery");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    const radius = 300;
    const centerX = 200;
    const centerY = 200;

    images.forEach((src, i) => { /*loops thru each image in images*/
      const angle = (i / images.length) * Math.PI * 2; /*calculate the angle to locate each pic at circle*/
      const img = document.createElement("img");
      img.src = src;
      img.style.left = `${centerX + radius * Math.cos(angle) - 40}px`; /*position each image, 40 centers the 80px image (80/2=40)*/
      img.style.top = `${centerY + radius * Math.sin(angle) - 40}px`;

      img.addEventListener("click", () => { /*when u click on the cirlce, it creates an overlay that enlarges the picture*/
        overlayImg.src = src;
        overlay.classList.add("show");
      });

      gallery.appendChild(img); /*add pics to the gallery container*/
    });

    overlay.addEventListener("click", () => { /*when u click anywhere on overlay it exits and goes back to circle*/
      overlay.classList.remove("show");
    });

## Notes: 
* What I struggled with: Nav bars & cards
* What I'm proud of: the circular gallery that I was able to code
* What I would add if I had more time: Like/Save buttons next to all of my polaroids that allows users to save.