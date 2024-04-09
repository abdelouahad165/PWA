document.addEventListener("DOMContentLoaded", function() {
  const articles = [
      { ref: "001", article: "ANIKSA PULIDO", dimension: "120X60", prix: "700", srcImage: "/images/ANIKSA_PULIDO_120x260.jpg" },
      { ref: "002", article: "Aniksa PULIDO", dimension: "120x120", prix: "700", srcImage: "/images/ANIKSA_PULIDO_120x120.jpg" },
      { ref: "003", article: "ANIKSA PULIDO", dimension: "120x60", prix: "330", srcImage: "/images/ARAL_CREAM_NATURAL60x120.jpg" },
      { ref: "004", article: "FINEZZA_BIANCA_P", dimension: "120x260", prix: "400", srcImage: "/images/finezza_bianca_pulido120x260.jpg" },
      { ref: "005", article: "FINEZZA_ORO_P", dimension: "120x260", prix: "400", srcImage: "/images/fineza oro pulido.jpg" },

      { ref: "001", article: "NEWBURY_PULIDO", dimension: "120X60", prix: "330", srcImage: "/images/NEWBURY_PULIDO 60x120.jpg" },
      { ref: "002", article: "NEWBURY_PULIDO", dimension: "80x160", prix: "360", srcImage: "/images/NEWBURY_PULIDO_80x160cm.jpg" },
      { ref: "003", article: "NEWBURY_PULIDO", dimension: "120x240", prix: "500", srcImage: "/images/NEWBURY_PULIDO_120x240.jpg" },
      { ref: "004", article: "ESSEN_NEWBURY", dimension: "30x90", prix: "230", srcImage: "/images/NEWBURY_PULIDO_60x120cm.jpg" },
      

      { ref: "004", article: "SANIATAIRE", dimension: "MOYEN", prix: "2300", srcImage: "/images/IMG-20240212-WA0022.jpg" },
      
  ];

  const tableBody = document.querySelector("tbody");
  const searchInput = document.getElementById("searchInput");

  function renderTable(filteredArticles) {
      tableBody.innerHTML = "";
      const articlesToRender = filteredArticles || articles;
      articlesToRender.forEach(article => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${article.ref}</td>
              <td>${article.article}</td>
              <td>${article.dimension}</td>
              <td>${article.prix}</td>
              <td><img src="${article.srcImage}" alt="${article.article}" style="max-width: 100px;"></td>
          `;
          tableBody.appendChild(row);
      });
  }

  renderTable();

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredArticles = articles.filter(article =>
          article.article.toLowerCase().includes(searchTerm)
      );
      renderTable(filteredArticles);
  });
});
