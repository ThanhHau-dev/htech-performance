/*
// tạo hàm từ ID của button

// Dom
const actionBTN = document.getElementById("actionEmail");

// Hàm xử lý khi button được nhấn
function actionEmailSend() {
    emailjs.init("q_n69OMBbpTCCAp9I");
    const name = document.getElementById("name").value;
    const numberPhone = document.getElementById("numberPhone").value;
    const contentMessage = document.getElementById("contentMessage").value;

    // tạo object để gửi qua emailjs, cái này chatgpt chỉ, chứ không hiểu
    const templateParams = {
        from_name: name,
        from_email: numberPhone,
        message: contentMessage
    };

       // Gửi email qua EmailJS
       emailjs.send('service_bcoczkh', 'template_96zl9sf', templateParams)
       .then(function(response) {
          alert('Email đã được gửi thành công!');
       }, function(error) {
          alert('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.');
       });
}




// Gọi hàm, khi nút button được nhấn
actionBTN.addEventListener('click', actionEmailSend);
*/

// DOM
const actionBTN = document.getElementById("actionEmail");

// Hàm xử lý khi button được nhấn
function actionEmailSend() {
    console.log("Button đã được nhấn"); // Thử thêm dòng này để kiểm tra xem hàm có được gọi hay không

    emailjs.init("q_n69OMBbpTCCAp9I");

    const name = document.getElementById("name").value;
    const numberPhone = document.getElementById("numberPhone").value;
    const contentMessage = document.getElementById("contentMessage").value;

    // Kiểm tra các giá trị input trước khi gửi email
    if (name === '' || numberPhone === '' || contentMessage === '') {
        alert('Vui lòng điền đầy đủ thông tin trước khi gửi.');
        return;
    }

    // Tạo object để gửi qua emailjs
    const templateParams = {
        from_name: name,
        from_phone: numberPhone,
        message: contentMessage,
    };

    // Gửi email qua EmailJS
    emailjs.send('service_bcoczkh', 'template_96zl9sf', templateParams)
    .then(function(response) {
        console.log('Email đã được gửi thành công!', response.status, response.text);
        alert('Email đã được gửi thành công!');
    }, function(error) {
        console.log('Có lỗi xảy ra khi gửi email:', error);
        alert('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.');
    });
}

// Gọi hàm khi nút button được nhấn
if (actionBTN) {
    actionBTN.addEventListener('click', actionEmailSend);
} else {
    console.log("Không tìm thấy nút button với id 'actionEmail'.");
}
