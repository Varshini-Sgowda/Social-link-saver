/* eslint-disable no-unused-vars */
import './style.css';
let bookmarks = [];

function addBookmark() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const tag = document.getElementById("tag").value;

  if (!title || !url) {
    alert("Please fill all fields");
    return;
  }

  bookmarks.push({ title, url, tag });
  displayBookmarks();

  document.getElementById("title").value = "";
  document.getElementById("url").value = "";
  document.getElementById("tag").value = "";
}

function displayBookmarks(list = bookmarks) {
  const ul = document.getElementById("bookmarkList");
  ul.innerHTML = "";

  list.forEach((b, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <a href="${b.url}" target="_blank">${b.title}</a>
        <span class="tag">${b.tag}</span>
      </div>
      <button onclick="deleteBookmark(${index})">Delete</button>
    `;
    ul.appendChild(li);
  });
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  displayBookmarks();
}

function searchBookmarks() {
  const query = document.getElementById("search").value.toLowerCase();

  const filtered = bookmarks.filter(b =>
    b.title.toLowerCase().includes(query) ||
    b.tag.toLowerCase().includes(query)
  );

  displayBookmarks(filtered);
}