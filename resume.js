async function loadNewImage() {
  fetch('https://randomfox.ca/floof/').then(async (res) => {
    const json = await res.json();
    const element = document.getElementById('img_container');
    element.src = json.image;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadNewImage();
  // Get a reference to the button element
  const myButton = document.getElementById('new-img-btn');

  // Add event listener to the button
  myButton.addEventListener('click', function () {
    // Code to be executed when the button is clicked
    loadNewImage();
  });
});
