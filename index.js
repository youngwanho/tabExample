// 출처: youngwanho(mavin) 개인 작업물
// 업데이트: 2023.10.15
// 탭메뉴 자료입니다.

const tabListItem = document.querySelectorAll(".tab-list-item")
const tabPanel= document.querySelectorAll(".tab-panel")

tabListItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabPanel.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabListItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabListItem[idx].classList.add('active')
        tabPanel[idx].classList.add('active')
    })
})