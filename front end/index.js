
// Điều hướng khi người dùng nhấn nút btn sang trang cảnh báo

const buttons = document.querySelectorAll('.btn');

        // Gán sự kiện click để điều hướng sang trang mới
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Điều hướng sang trang mới
                window.location.href = 'warning.html';
            });
        });



        const menua = document.querySelectorAll('a');

        // Gán sự kiện click để điều hướng sang trang mới
        menua.forEach(menua => {
            menua.addEventListener('click', function() {
                // Điều hướng sang trang mới
                window.location.href = 'warning.html';
            });
        });


        ScrollReveal().reveal('.main .row', {
            duration: 500, // Thời gian hiệu ứng (milliseconds)
            origin: 'bottom', // Điểm bắt đầu của hiệu ứng
            distance: '100px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });

        ScrollReveal().reveal('.header_2 img', {
            duration: 1000, // Thời gian hiệu ứng (milliseconds)
            origin: 'left', // Điểm bắt đầu của hiệu ứng
            distance: '50px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });

        ScrollReveal().reveal('.main img', {
            duration: 1000, // Thời gian hiệu ứng (milliseconds)
            origin: 'left', // Điểm bắt đầu của hiệu ứng
            distance: '50px', // Khoảng cách di chuyển
            reset: true // Cho phép hiệu ứng lặp lại khi cuộn trang
        });


     