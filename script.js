 const faqItems = document.querySelectorAll(".faq-item");

    function closeItem(item) {
      const button = item.querySelector(".faq-button");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector(".faq-icon");

      button.setAttribute("aria-expanded", "false");
      content.style.maxHeight = "0px";
      icon.textContent = "+";
    }

    function openItem(item) {
      const button = item.querySelector(".faq-button");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector(".faq-icon");

      button.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }

    faqItems.forEach((item) => {
      const button = item.querySelector(".faq-button");

      button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";

        // Close all accordion items
        faqItems.forEach(closeItem);

        // Open the clicked item when it was previously closed
        if (!isOpen) {
          openItem(item);
        }
      });
    });

    // Set the initial height of the default open item
    window.addEventListener("DOMContentLoaded", () => {
      faqItems.forEach((item) => {
        const button = item.querySelector(".faq-button");

        if (button.getAttribute("aria-expanded") === "true") {
          openItem(item);
        } else {
          closeItem(item);
        }
      });
    });

    // Recalculate height when the screen size changes
    window.addEventListener("resize", () => {
      faqItems.forEach((item) => {
        const button = item.querySelector(".faq-button");

        if (button.getAttribute("aria-expanded") === "true") {
          const content = item.querySelector(".faq-content");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });