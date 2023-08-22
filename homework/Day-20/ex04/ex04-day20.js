var data = [
    {
        image: 'https://picsum.photos/200',
        title: 'Bài viết 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus, quis temporibus dolorem consequuntur vel, blanditiis atque nam perspiciatis accusantium maiores a aperiam expedita, magni eius. Quia excepturi quos iure.'
    },
    {
        image: 'https://picsum.photos/200',
        title: 'Bài viết 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus, quis temporibus dolorem consequuntur vel, blanditiis atque nam perspiciatis accusantium maiores a aperiam expedita, magni eius. Quia excepturi quos iure.'
    },
    {
        image: 'https://picsum.photos/200',
        title: 'Bài viết 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus, quis temporibus dolorem consequuntur vel, blanditiis atque nam perspiciatis accusantium maiores a aperiam expedita, magni eius. Quia excepturi quos iure.'
    }
];

var html = ``;
for (i = 0; i < data.length; i++) {
    if (i % 2 !== 0) {
        html += `
    <div class="content">
        <div>
            <h2>${data[i].title}</h2>
            <p>${data[i].content}</p>
            </div>
        <div>
            <img src="${data[i].image}">
        </div>
    </div>
    `
    } else {
        html += `
    <div class="content">
        <div>
        <img src="${data[i].image}">
        </div>
        <div>
        <h2>${data[i].title}</h2>
        <p>${data[i].content}</p>
        </div>
    </div>
    `
    }
}
document.write(html);