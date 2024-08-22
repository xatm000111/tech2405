// Dữ liệu mẫu được lưu trong Local Storage
const sampleData = {
    "Kiwis": ["kiwi1.jpg", "kiwi2.jpg", "kiwi3.jpg"],
    "Lemons": ["lemons.jpg", "chanh1.jpg", "chanh2.jpg"],
    "Strawberries": ["strawberry.jpg", "dau1.jpg", "dau2.jpg"],
    "Figs": ["figs.jpg", "sung1.jpg", "sung2.jpg"],
    "Nectarines": ["nectarines.jpg", "dao1.jpg", "dao2.jpg"],
    "Watermelons": ["watermelons.jpg", "dh1.jpg", "dh2.jpg"]
};

// Lưu dữ liệu mẫu vào Local Storage
if (!localStorage.getItem('photoData')) {
    localStorage.setItem('photoData', JSON.stringify(sampleData));
}

// Lấy dữ liệu từ Local Storage
const photoData = JSON.parse(localStorage.getItem('photoData'));

// Hiển thị danh sách loại trái cây
const photoList = document.getElementById('photo-list');
for (const key in photoData) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = key;
    listItem.setAttribute('data-name', key);
    photoList.appendChild(listItem);
}

// Xử lý sự kiện khi nhấn vào một loại trái cây
photoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const selectedName = event.target.getAttribute('data-name');
        displayPhotos(selectedName);
    }
});

// Hàm hiển thị ảnh của loại trái cây được chọn
function displayPhotos(name) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = ''; // Xóa ảnh cũ
    const photos = photoData[name];

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${photo}`;
        imgElement.className = 'img-thumbnail m-2';
        imgElement.style.width = '150px';
        gallery.appendChild(imgElement);
    });
}
