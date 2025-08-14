function renderMenu(data) {
  const menuList = document.getElementById('menuList');
  if (!menuList) return;

  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
    <a href=#>
      <img src="img/${item.image}" alt="${item.title}">
      <div>
        <h3>${item.title}</h3>
        <p class = title_eng>${item.title_eng}</p>
        <p class = prices>단품 ₩${item.price}</p>
        <p class = prices>세트 ₩${item.price_set}</p>
      </div>
    </a>
    `;
    menuList.appendChild(li);
  });
}

// JSON 데이터를 직접 변수에 넣어서 테스트할 수도 있음
const menuData = [
  {
    "image":"order_더블맥스파이시.png",
    "title":"더블 맥스파이시 상하이  버거",
    "title_eng":"Double McSpicy Shanghai Burger",
    "price":"9,700",
    "price_set":"12,200"
  },
  {
    "image":"order_더블쿼터.png",
    "title":"더블 쿼터 파운드 치즈 버거",
    "title_eng":"Double Quater Pounder With Cheese",
    "price":"7,400",
    "price_set":"9,300"
  },
  {
    "image":"order_빅맥.png",
    "title":"빅맥",
    "title_eng":"Big Mac",
    "price":"6,300",
    "price_set":"8,700"
  },
  {
    "image":"order_1955.png",
    "title":"1955버거",
    "title_eng":"1955 Burger",
    "price":"8,700",
    "price_set":"11,400"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderMenu(menuData);
});
