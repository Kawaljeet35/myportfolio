function redirectToCV() {
  window.open(
      'https://docs.google.com/document/d/1b05hDwsm1Blh-QHed3fhYbAJ_q4RmlqIPQ_za3rYsJw/edit?usp=sharing',
      '_blank'
  );
}

document.getElementById('downloadButton').addEventListener('click', redirectToCV);
