const Search = require("../model/search");

module.exports = {
  async index(req, res) {
    const pages = await Search.get();
    return res.render("index", { pages });
  },

  githubRedirect(req, res) {
    if (req.params.midia === "github") {
      return res.redirect("https://github.com/hartye");
    }

    if (req.params.midia === "linkedin") {
      return res.redirect(
        "https://www.linkedin.com/in/carlos-daniel-274a55219/"
      );
    } else {
      return res.redirect("/");
    }
  },

  async pages(req, res) {
    let id = req.params.id;

    const page = await Search.getPage(id);

    return res.render("pages", { page });
  },
};
