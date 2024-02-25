function redirectToCV() {
  window.open(
      'https://docs.google.com/document/d/1c4DPIxqk-Uu11-BI7y-btwR-96EhV9QqWVqyPfMhzWA/edit?usp=sharing',
      '_blank'
  );
}

document.getElementById('downloadButton').addEventListener('click', redirectToCV);
