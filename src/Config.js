const app_data = [{
    name: 'Nguyễn Ngọc Nhân',
    avatar: '/assets/avatar/my-avatar.jpg',
    career: 'Website Developer',
    aboutme: [
        {id: 1, content: 'Tôi là Nguyễn Ngọc Nhân hiện đang là một Freelancer với công việc phát triển website bán hàng mà trước đó từng là Web Developer mất việc làm do đại dịch Covid-19.'},
        {id: 2, content: 'Qua công việc của mình tôi nhận thấy được cái khách hàng cần nhất là SEO tốt, load nhanh. Nên tôi vẫn đang miệt mài tìm các giải pháp giúp họ thực hiện điều đó.'},
        {id: 3, content: 'Có đam mê code từ hồi cấp 3 nhưng lận đận chuyện chọn ngành để làm cho tương lại nên giờ làm trái ngành mình đã học.'},
        {id: 4, content: 'Hay tò mò mở Core của các Framework ngâm cứu, thử chạy tất cả các Open Soucre khác nhau để xem ưu điểm của nó là gì... rồi thiết nghĩ mình sẽ đi tạo cho mình một Soucre nhẹ nhàng đơn giản,chạy hiệu suất, tùy chỉnh linh hoạt.'},
        {id: 5, content: 'Tôi có khá nhiều tài lẻ như chụp hình máy cơ, hát karaoke... '},
        {id: 6, content: 'Ưu điểm bản thân là học hỏi nhanh, trung thực và có trách nhiệm công việc. Khuyết điểm là ít nói, ngại khi phát biểu trước đám đông'}
    ],
    careergoals: [
        {id: 1, content: 'Mong muốn trở thành một lập trình viên chuyên nghiệp, FullStack PHP, FullStack Javascript trong tương lai gần.'},
        {id: 2, content: 'Học hỏi và rèn luyện kỹ năng code, học thêm các ngôn ngữ lập trình nổi bật để nâng cao code level'},
        {id: 3, content: 'Phát triển các thư viện code tối ưu để phục vụ cho công việc phát triển web với tiêu chí: linh hoạt, hiệu suất cao, dễ sự dụng, ít phụ thuộc bên thứ 3..'},
        {id: 4, content: 'Xây dựng một đội ngủ phát triển phần mềm ứng dụng trực tuyến dựa trên tiêu chí đơn giản, hiệu quả, thân thiện'},
        {id: 5, content: 'Ngoài ra mong muốn được làm trong một môi trường chuyên nghiệp, năng động, đồng nghiệp hòa đồng, phúc lợi tốt.'}
    ],
    education: [
        {id: 1, time_working: '2007-2009', school_name: 'Cao Đẳng Thương Mại', class_name: 'Cử nhân Kế Toán Thương Mại Dịch Vụ'},
        {id: 2, time_working: '9.2011 - 2.2012', school_name: 'Trung tâm iNET', class_name: 'Khóa học lập trình với PHP'},
        {id: 3, time_working: '5.2022 - 12.2022', school_name: 'Softech Aptech Đà Nẵng', class_name: 'FullStack React, Node.js (M.E.R.N)'}
    ],
    skill_others: [
        {id: 1, content: 'Laravel Framework'},
        {id: 2, content: 'ECShop Ecommecer'},
        {id: 3, content: 'Adobe illustator'},
        {id: 4, content: 'Adobe Photoshop'},
        {id: 5, content: 'Adobe Lightroom'}
    ],
    experience: [
        {
            id: 1, 
            time_working: '09-2009 đến 04-2020', 
            company_name: 'Bách Khoa Shop', 
            position: 'Desiner - Web Developer', 
            desc: [
                {id: 1, content: 'Quản lí và xây dựng hệ thống website bán hàng cho công ty, bán thẻ cào ĐT, thu hộ trả góp'},
                {id: 2, content: 'Thiết kế banner, tờ rơi, Bangrol, Standee, Backdrop, Bao thư, Lì xì, Phiếu bán hàng'},
                {id: 3, content: 'SEO cơ bản, Chạy Quảng cáo Googel Adwords'},
                {id: 4, content: 'Sao lưu backup code, Database các website định kỳ hàng tuần'}
            ]
        },
        {
            id: 2, 
            time_working: '04-2020 đến nay', 
            company_name: 'Freelancer', 
            position: 'Website Developer', 
            desc: [
                {id: 1, content: 'Quản lí VPS, Backup dữ liệu, Data khách hàng'},
                {id: 2, content: 'Thiết kế website bán hàng, tin tức theo yêu cầu khách hàng'},
                {id: 3, content: 'Thiết kế banner, quảng cáo...cho khách hàng'},
                {id: 4, content: 'Quản trị và nhập liệu data cho khách hàng'}
            ]
        }
    ],
    interests: [
        {id: 1, content: 'Vọc code, tìm cách tối ưu code'},
        {id: 2, content: 'Du lịch khám phá, tìm hiểu văn hóa bản địa'},
        {id: 3, content: 'Xem phim khoa học viễn tưởng, thế giới động vật'}
    ],
    project: [
        {id: 1, name: 'muagame.vn', link: 'https://muagame.vn'},
        {id: 2, name: 'bkin.vn', link: 'https://bkin.vn'},
        {id: 3, name: 'rubikstore.vn', link: 'https://rubikstore.vn'},
        {id: 4, name: 'baochauelec.com', link: 'https://baochauelec.com'},
        {id: 5, name: 'hoangaudio.vn', link: 'https://hoangaudio.vn'}
    ],
    project_other: [
        {id: 1, name: 'Apple Store', link: 'https://ecshopvietnam.com/ecshopapple/'},
        {id: 2, name: 'Mi Store', link: 'https://ecshopvietnam.com/ecshopmi/'},
        {id: 3, name: 'Fashion Store', link: 'https://ecshopvietnam.com/ecshopfashion/'},
        {id: 4, name: 'eMart', link: 'https://ecshopvietnam.com/ecshopstore/'},
        {id: 5, name: 'Travel', link: 'https://ecshopvietnam.com/ecshoptravel/'},
        {id: 6, name: 'Blog', link: 'https://ecshopvietnam.com/ecshopblog/'}
    ],
    socials: [
        {id: 1, icon: 'fa-brands fa-facebook', link:'https://www.facebook.com/nobjnguyenn'},
        {id: 2, icon: 'fa-brands fa-twitter', link: 'https://twitter.com/Nhannn87Dn'}
    ],
    contacts : [
        {id: 1, icon: 'fa-regular fa-calendar', text: '22/03/1988'},
        {id: 2, icon: 'fa-solid fa-location-dot', text: 'Thanh Khê, TP Đà Nẵng'},
        {id: 3, icon: 'fa-regular fa-envelope', text: 'nhannn78dn@gmail.com'},
        {id: 4, icon: 'fa-solid fa-mobile-retro', text: '0988 071 443'},
        {id: 5, icon: 'fa-brands fa-twitter', text: '@Nhannn87Dn'}
        
    ],
    skills : [
        {id: 1, icon: 'fa-brands fa-html5', name: 'Html', percent:80},
        {id: 2, icon: 'fa-brands fa-css3', name: 'Css', percent:80},
        {id: 3, icon: 'fa-brands fa-php', name: 'PHP', percent:70},
        {id: 4, icon: 'fa-brands fa-node', name: 'NodeJs', percent:70},
        {id: 5, icon: 'fa-brands fa-react', name: 'ReactJs', percent:80},
        {id: 6, icon: 'fa-solid fa-database', name: 'MySQL', percent:70}
    ],
    driver_share: 'https://drive.google.com/file/d/1zHOxY5kGoNwUKFuiCq4WokO2d1S0h8P7/view?usp=sharing'

}];

export default app_data;