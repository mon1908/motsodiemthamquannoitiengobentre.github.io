
// Lấy các phần tử từ DOM
const menuButton = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

// Gắn sự kiện click cho nút
menuButton.addEventListener("click", function() {
    // Kiểm tra trạng thái menu
    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block"; // Hiện menu
    } else {
        menuList.style.display = "none"; // Ẩn menu
    }
})