define(['mui'], function(mui) {
    function init() {
        mui.init();
        render(); //调用
        addEvent(); //调用
        add();
    }

    function render() {
        mui.ajax("/api/list", {
            success(rs) {
                renderList(rs.data)
            }
        })
    }

    // function render2() {
    //     mui.ajax("/api/list2", {
    //         success(rs) {
    //             renderList2(rs.data)
    //         }
    //     })
    // }

    function renderList(data) {
        const list = document.querySelector(".content>ul");
        let str = '';
        data.map((item) => {
            return str += `<li>
            <img src="./images/1.png" alt="">
            <p>${item.title}</p>
            <span>${item.xin}</span>
        </li>`
        }).join('')
        list.innerHTML = str;
    }


    function addEvent() {
        const spans = [...document.querySelectorAll("span")];
        let idx = 0;
        mui(".nav").on("tap", "span", function() {
            // this.classList.add("active");
            // this[idx].classList.remove("active");
            // idx = this.getAttribute("data-index");
        })
    }

    // function renderList2(data) {
    //     const list = document.querySelector(".content>ul");
    //     let str = '';
    //     data.map((item) => {
    //         return str += `<li>
    //         <img src="./images/1.png" alt="">
    //         <p>${item.title}</p>
    //         <span>${item.content}</span>
    //     </li>`
    //     }).join('')
    //     list.innerHTML = str;
    // }

    function add() {
        const span1 = document.querySelector(".span1");
        span1.onclick = function() {
                this.parentNode.children.classList.remove("active");
                this.classList.add("active");
                renderList(data);
            }
            // const span2 = document.querySelector(".span2");
            // span1.onclick = function() {
            //     this.parentNode.children.classList.remove("active");
            //     this.classList.add("active");
            //     renderList2(data);
            // }
    }
    init();
})