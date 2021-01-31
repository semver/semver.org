const createAnchorLink = (id) => {
  const anchor = document.createElement("a");
  anchor.className = "anchor-link";
  anchor.href = "#" + id;
  return anchor;
};

window.onload = () => {
  let increment = 0;
  [...document.querySelectorAll("h1, h2, h3, #spec > ol > li > p")].forEach((el) => {
    if (el.id) {
      const anchorLink = createAnchorLink(el.id);
      el.insertBefore(anchorLink, el.firstChild);
    } else {
      increment++;
      el.parentElement.id = "spec-item-" + increment;
      const anchorLink = createAnchorLink(el.parentElement.id);
      el.parentElement.insertBefore(anchorLink, el);
    }
  });

  const hash = window.location.hash;
  if (hash) {
    const targetElTop = document.querySelector(hash).offsetTop;
    window.scrollTo(0, targetElTop);
  }
};
