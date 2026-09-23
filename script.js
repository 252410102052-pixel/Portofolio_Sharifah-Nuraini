
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });

    });

}


/* =========================
   TYPING EFFECT
========================= */

const words = [
  "coding",
  "designing",
  "learning",
  "building"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typedText");

function typeLoop() {

  if (!typedText) {
    return;
  }

  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent =
    currentWord.slice(0, charIndex);


  if (
    !isDeleting &&
    charIndex === currentWord.length
  ) {

    isDeleting = true;

    setTimeout(typeLoop, 1000);

    return;
  }


  if (
    isDeleting &&
    charIndex === 0
  ) {

    isDeleting = false;

    wordIndex =
      (wordIndex + 1) % words.length;

  }


  const typingSpeed =
    isDeleting ? 55 : 105;

  setTimeout(typeLoop, typingSpeed);

}

typeLoop();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.12
      }

    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("show");

  });

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   BACK TO TOP
========================= */

const backTop =
  document.getElementById("backTop");


if (backTop) {

  window.addEventListener("scroll", () => {

    backTop.classList.toggle(
      "visible",
      window.scrollY > 500
    );

  });


  backTop.addEventListener("click", () => {

    window.scrollTo({

      top: 0,
      behavior: "smooth"

    });

  });

}


/* =========================
   CERTIFICATE DATA
========================= */

const certificateData = {

  sarasehan: {

    title:
      "Certificate · Secretary Sarasehan 2026",

    description:
      "Certificate of participation as Secretary of Sarasehan 2026.",

    image:
      "./Sertif Sarasehan.png"

  },


  hacks: {

    title:
      "Certificate · Secretary HACKS Seminar 2026",

    description:
      "Certificate of participation as Secretary of HACKS Seminar 2026.",

    image:
      "./Sertif HACKS.png"

  }

};


/* =========================
   CERTIFICATE ELEMENTS
========================= */

const certificateModal =
  document.getElementById("certificateModal");

const certificateClose =
  document.getElementById("certificateClose");

const certificateTitle =
  document.getElementById("certificateTitle");

const certificateDescription =
  document.getElementById("certificateDescription");

const certificateImage =
  document.getElementById("certificateImage");


/* =========================
   OPEN CERTIFICATE
========================= */

const certificateCards =
  document.querySelectorAll(
    "[data-certificate]"
  );


certificateCards.forEach((card) => {

  card.addEventListener("click", () => {

    const certificateType =
      card.dataset.certificate;

    const data =
      certificateData[certificateType];


    if (!data) {

      console.error(
        "Certificate data not found:",
        certificateType
      );

      return;

    }


    if (certificateTitle) {

      certificateTitle.textContent =
        data.title;

    }


    if (certificateDescription) {

      certificateDescription.textContent =
        data.description;

    }


    if (certificateImage) {

      certificateImage.src =
        data.image;

      certificateImage.alt =
        data.title;

    }


    if (certificateModal) {

      certificateModal.classList.add("open");

      certificateModal.setAttribute(
        "aria-hidden",
        "false"
      );

    }

  });

});


/* =========================
   CLOSE CERTIFICATE
========================= */

function closeCertificate() {

  if (!certificateModal) {
    return;
  }

  certificateModal.classList.remove("open");

  certificateModal.setAttribute(
    "aria-hidden",
    "true"
  );

}


if (certificateClose) {

  certificateClose.addEventListener(
    "click",
    closeCertificate
  );

}


if (certificateModal) {

  certificateModal.addEventListener(
    "click",
    (event) => {

      if (
        event.target === certificateModal
      ) {

        closeCertificate();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeCertificate();

    }

  }
);