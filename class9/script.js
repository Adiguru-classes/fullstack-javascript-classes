const tableData = document.getElementById("table-data");
const search = document.getElementById("search");
let tabData = [];

search.addEventListener("keyup", (e) => {
  const searchWord = e.target.value;
  const filteredData = tabData.filter((filData) => {
    return (
      filData.name.toLowerCase().includes(searchWord) ||
      filData.id == searchWord ||
      filData.email.toLowerCase().includes(searchWord)
    );
  });
  insertData(filteredData);
});

fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  return res.json().then((data) => {
    tabData = data;
    insertData(tabData);
  });
});

const insertData = (data) => {
  const userData = data.map((userInfo) => {
    return `<tr>
              <td>${userInfo.id}</td>
              <td>${userInfo.name}</td>
              <td>${userInfo.email}</td>
              <td>${userInfo.phone}</td>
            </tr>`;
  });
  tableData.innerHTML = userData;
};