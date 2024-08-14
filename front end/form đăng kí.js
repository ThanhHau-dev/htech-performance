
// tạo hàm từ ID của button

/*
// Khởi tạo EmailJS
emailjs.init("q_n69OMBbpTCCAp9I");

// Hàm xử lý khi form được gửi
function actionEmailSend(e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

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
        from_phone: numberPhone, // Đổi tên biến nếu cần
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

// Đảm bảo liên kết hàm với sự kiện submit của form
document.getElementById("formEmail").addEventListener("submit", actionEmailSend);
*/



// DOM
// const actionBTN = document.getElementById("actionEmail");



emailjs.init("w15JVV1AB96-f0lko");

function actionEmailSend(e) {
e.preventDefault();

  
    console.log("Button đã được nhấn");

  
    const name = document.getElementById("name").value;
    const numberPhone = document.getElementById("numberPhone").value;
    const contentMessage = document.getElementById("contentMessage").value;
  
    // Kiểm tra các giá trị input
    if (!name || !numberPhone || !contentMessage) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
  
    const templateParams = {
      to_name: name,
      from_phone: numberPhone,
      message: contentMessage,
    };
  
    emailjs.send('service_96kzaxe', 'template_96zl9sf', templateParams)
      .then((result) => {
        console.log('Email đã được gửi thành công!', result.text);
        alert('Cảm ơn bạn nhiều nhé, chúng tôi sẽ sớm liên hệ lại !');
        window.location.href = './index.html';
      })
      .catch((error) => {
        console.error('Lỗi khi gửi email:', error);
        alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại sau hoặc liên hệ với chúng tôi. Qua tel: 0862 701 467');
        window.location.href = './index.html';
      });
  }
  
  document.getElementById("formEmail").addEventListener("submit", actionEmailSend);
//   document.getElementById("formEmail").addEventListener("submit", function(e));



/*
  ngày mai nhớ tìm hiểu lại các lỗi sai, h buồn ngủ quá rồi

  lỗi nhiều nhất là nó k in ra trạng thái ở màn hình console.log

  lỗi nghiêm trọng nhất là import emailjs sai cách, là sdk đó

  còn nhiều lỗi lắm, mà h mêt quá

  Nhớ check lỗi xong, ngồi xuống viết lại cho nhớ, bài học xương máu
 */

