const commentForm = document.querySelector("#commentForm");
const commentContainer = document.querySelector("#comments");
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = commentForm.elements.username;
  const comment = commentForm.elements.comment;
  addComment(username.value, comment.value);
  username.value = "";
  comment.value = "";
});

const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newComment.append(bTag);
  newComment.append(` 댓글 : ${comment}`);

  commentContainer.append(newComment);
};
