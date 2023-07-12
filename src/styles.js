const styles = `
  .loader {
    display: none;
    /* Додайте стилі для завантажувача */
  }

  .error {
    display: none;
    /* Додайте стилі для елементу помилки */
  }

  .cat-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .cat-image {
    width: 350px;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    margin-top: 30px;
  }

  .breed-name {
    /* Додайте стилі для назви породи */
  }

  .breed-description {
    /* Додайте стилі для опису породи */
  }

  .breed-temperament {
    /* Додайте стилі для темпераменту породи */
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
