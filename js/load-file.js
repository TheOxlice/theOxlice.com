window.onload = () => {
    const uploadFile = document.getElementById("fileFF");
    const uploadBtn = document.getElementById("upload-btn");
    const uploadText = document.getElementById("upload-text");

    uploadBtn.addEventListener("click", function () {
        uploadFile.click();
    });

    uploadFile.addEventListener("change", function() {
        if (uploadFile.value) {
            uploadText.innerText = upploadFile.value;
        } else {
            upploadFile.innerText = "Файл не выбран";
        }
    });
}