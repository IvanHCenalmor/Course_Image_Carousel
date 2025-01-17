document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("image-gallery");
    const indicators = document.querySelector(".carousel-indicators");
    const descriptionContainer = document.getElementById("image-description");

    let images = [];

    if (window.location.pathname.includes("gallery1.html")) {
        images = [
            { src: "images/gallery1/vscode_download.png", 
              description: "Step 1: Go to Visual Studio Code official download webpage." },
            { src: "images/gallery1/vscode_downloaded.png", 
              description: "Step 2: Once the .exe is downloaded go to it's folder and double click on it." },
            { src: "images/gallery1/accet_agreement.png", 
              description: "Step 3: The setup process will start. Accept the agreement." },
            { src: "images/gallery1/destination_folder.png", 
              description: "Step 4: Select the destination folder. The default option is good." },
            { src: "images/gallery1/additional_task.png", 
              description: "Step 5: Select additional options. I recommend as in the image (desktop app, edditor for supported file types and adding to PATH)." },
            { src: "images/gallery1/vscode_complete.png", 
              description: "Step 6: Select the destination folder. The default option is good." },
            // Add more images for gallery 1
        ];
    } else if (window.location.pathname.includes("gallery2.html")) {
        images = [
            { src: "images/gallery2/git_webpage.png", 
              description: "Step 1: Go to git official download webpage." },
            { src: "images/gallery2/gallery2_image2.png", 
              description: "Description for gallery 2 image 2" },
            // Add more images for gallery 2
        ];
    }

    images.forEach((image, index) => {
        const isActive = index === 0 ? "active" : "";

        const indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselExampleIndicators");
        indicator.setAttribute("data-slide-to", index);
        if (isActive) indicator.classList.add("active");
        indicators.appendChild(indicator);

        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (isActive) carouselItem.classList.add(isActive);

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.description;
        imgElement.classList.add("d-block", "w-100", "img-fluid");

        carouselItem.appendChild(imgElement);
        gallery.appendChild(carouselItem);

        if (isActive) {
            descriptionContainer.textContent = image.description;
        }
    });

    // Update description on slide change
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
        const nextIndex = $(e.relatedTarget).index();
        descriptionContainer.textContent = images[nextIndex].description;
    });

    // Initialize the carousel
    $('.carousel').carousel();
});