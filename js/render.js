export function renderResult(company) {
  const resultDiv = document.getElementById("result");


  if (company) {
    // 会社名・業種を改行して表示
    const header = document.createElement("p");
    header.classList.add("header"); // CSSでスタイルを管理
    header.innerHTML = `会社名: ${company["企業名"]}<br>業種: ${company["業種"]}`;
    resultDiv.appendChild(header);

    // 大株主一覧
    if (company["大株主"] && company["大株主"].length > 0) {
      const table = document.createElement("table");
      table.classList.add("shareholders"); // CSSでスタイルを管理

      // 見出し行
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      ["株主名", "住所", "持株数", "持株比率(%)"].forEach((title) => {
        const th = document.createElement("th");
        th.textContent = title;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // データ行
      const tbody = document.createElement("tbody");
      company["大株主"].forEach((shareholder) => {
        const row = document.createElement("tr");
        [shareholder["株主名"], shareholder["住所"], shareholder["持株数"], shareholder["持株比率"]].forEach((value) => {
          const td = document.createElement("td");
          td.textContent = value;
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      resultDiv.appendChild(table);
    } else {
      const noShareholder = document.createElement("p");
      noShareholder.textContent = "大株主情報はありません。";
      resultDiv.appendChild(noShareholder);
    }
  } else {
    resultDiv.textContent = "該当する会社が見つかりません。";
  }
}