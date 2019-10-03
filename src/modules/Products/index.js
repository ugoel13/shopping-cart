console.log("This is products js file");

const handleSubmit = () => {
  console.log("handleSubmit function is called !!!!!!!!!");
};

document
  .getElementsByClassName("submit-button")[0]
  .addEventListener("click", handleSubmit);
