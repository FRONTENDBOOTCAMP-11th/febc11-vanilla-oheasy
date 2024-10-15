import axios from "axios";

async function getList() {
  const res = await axios.get("https://11.fesp.shop/posts", {
    params: { type: "test", page: 2, limit: 5 },
  });
  return res.data;
}

async function renderList() {
  const list = await getList();
  const liList = list.item.map((post) => {
    return `<li>
              <h2>${post.title}</h2>
              <span>조회수: ${post.views} 날짜: ${post.createdAt}</span>
              <p>${post.content}</p>
          </li>
          <hr/>`;
  });
  document.querySelector("#postList").innerHTML = liList.join(" ");
}

renderList();
