(function () {
  const body = document.querySelector("body");
  const themeToggler = document.querySelector("#dark-mode");
  const articles = document.querySelectorAll(".article");
  const search = document.querySelector("#searchPosts");
  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    body.dataset.theme = theme;
  };
  const toggleDarkMode = () => {
    let currentTheme = body.dataset.theme;
    if (currentTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const searchPosts = () => {
    let input = search.value;
    articles.forEach((article) => {
      let articleTitle = article
        .querySelector("a")
        .textContent.trim()
        .toLowerCase();
      if (articleTitle.includes(input)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  };

  themeToggler.addEventListener("click", toggleDarkMode);
  search && search.addEventListener("input", searchPosts);

  if (localStorage.getItem("theme") == "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
})();
