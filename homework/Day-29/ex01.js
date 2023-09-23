const modules = [
    {
      module: 'Nhập môn lập trình web',
      list: [
        'Giới thiệu khoá học HTML - CSS',
        'Nhập môn lập trình web - Phần 1',
        'Nhập môn lập trình web - Phần 2',
        'Công cụ - Phần mềm cần chuẩn bị'
      ]
    }, 
    {
      module: 'Ngôn ngữ HTML',
      list: [
        'HTML cơ bản - Phần 1',
        'HTML cơ bản - Phần 2'
      ]
    },
    {
      module: 'Ngôn ngữ CSS',
      list: [
        'Giới thiệu ngôn ngữ CSS - Cách viết CSS',
        'Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1',
        'Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản',
        'Chồng chéo CSS và thứ tự ưu tiên trong CSS',
        'Thuộc tính Background',
        'Thuộc tính Border',
        'Thuộc tính Width - Height'
      ]
    }
  ];
  
  const container = document.querySelector('.container');
  
  function renderModules() {
    const result = modules.map((module, index) => `
      <div class="module-item" draggable="true">
        <span>Module ${index + 1}</span>
        ${module.module}
      </div>
      ${module.list.map((lesson, idx) => `
        <div class="lesson-item" draggable="true">
          <span>Bài ${idx + 1}</span>
          ${lesson}
        </div>
      `).join('')}
    `).join('');
  
    container.innerHTML = result;
  
    const items = document.querySelectorAll('.module-item, .lesson-item');
  
    items.forEach((item) => {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragend", handleDragEnd);
    });
  }
  
  function handleDragStart(e) {
    this.classList.add("dragging");
  }
  
  function handleDragEnd() {
    this.classList.remove("dragging");
  }
  
  container.addEventListener('dragover', function(e) {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    const itemsNotDragging = document.querySelectorAll(".module-item:not(.dragging), .lesson-item:not(.dragging)");
  
    const node = Array.from(itemsNotDragging).find((item) => {
      return e.pageY <= item.offsetTop + draggingItem.offsetHeight / 2 + item.offsetHeight / 4;
    });
  
    container.insertBefore(draggingItem, node);
  });
  
  document.addEventListener('DOMContentLoaded', renderModules);
  
  