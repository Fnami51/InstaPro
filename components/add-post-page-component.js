import { uploadImage } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста

    // >> [FNM: Task 2.1] - Скопировать HTML у конкурентов
    const appHtml = `
    <div class="page-container">
      <div class="header-container">
  <div class="page-header">
      <h1 class="logo">instapro</h1>
      <button class="header-button add-or-login-button">
      <div title="Добавить пост" class="add-post-sign"></div>
      </button>
      <button title="Fnami" class="header-button logout-button">Выйти</button>  
      
  </div>
  
</div>
      <div class="form">
        <h3 class="form-title">Добавить пост</h3>
        <div class="form-inputs">
          <div class="upload-image-container">
  <div class="upload=image">
      
            <label class="file-upload-label secondary-button">
                <input id="image-file" type="file" class="file-upload-input" style="display:none">
                Выберите фото
            </label>
          
      
  </div>
</div>
          <label>
            Опишите фотографию:
            <textarea id="description" class="input textarea" rows="4"></textarea>
            </label>
            <button class="button" id="add-button">Добавить</button>
        </div>
      </div>
    </div>
  `;

    appEl.innerHTML = appHtml;
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    const descriptionUser = getElementById("description");
    const imageFile = getElementById("image-file");

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        // >> [FNM: Task 2.2] - Закидывать сюда поле_ввода.value
        description: descriptionUser.value,

        // >> [FNM: Task 2.3] - imageUr вставлять ссылку использую upload-image-component
        imageUrl: imageFile.value,

        // >> [FNM: Task 2.4] - Отправлять в АПИ (Создать запрос в АПИ "POST" отправлять эти значения)
        // >> [FNM: Task 2.4] - Возвращать на главную страницу goToPage(POSTS_PAGE)
      });
      console.log(imageUrl) //>>log
    });
  };

  render();
}
