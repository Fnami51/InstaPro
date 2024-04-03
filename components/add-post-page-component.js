export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста

    // >> [FNM: Task 2.1] - Скопировать HTML у конкурентов
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      Cтраница добавления поста
      <button class="button" id="add-button">Добавить</button>
    </div>
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        // >> [FNM: Task 2.2] - Закидывать сюда поле_ввода.value
        description: "Описание картинки",

        // >> [FNM: Task 2.3] - imageUr вставлять ссылку использую upload-image-component
        imageUrl: "https://image.png",

        // >> [FNM: Task 2.4] - Отправлять в АПИ (Создать запрос в АПИ "POST" отправлять эти значения)
      });
    });
  };

  render();
}
