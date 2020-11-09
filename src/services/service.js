class MenuList {
  getMenu() {
    // например тут я получаю данные из сервера в таком вот формате
    const menuobj = [
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Пармиджано-Реджано с карамелизованным орехом и клубникой",
        id: 1,
        price: 280,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Салат из битых огурцов и азиатской заправкой",
        id: 10,
        price: 350,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Салат из авакадо",
        id: 2,
        price: 220,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Салат с королевскими креветками в фирменом соусе",
        id: 3,
        price: 550,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Салат из камчатского краба",
        id: 4,
        price: 1070,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Лосось с пряным хлебом и сливочным сыром",
        id: 5,
        price: 350,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Закуска из комплекта сыров",
        id: 6,
        price: 120,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Закуска из свежих овощей в ассортименте",
        id: 7,
        price: 250,
      },
      {
        img:
          "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk96l6VQm8VGeAoKExZuZulKaKTM5SRkZCeTgDn6uOyic",
        descr: "Крем-суп из акульих плавников",
        id: 8, // например id  может быть заголовок названия блюда. Все это можно получать из какой-то bd и вытаскивать нужные данные
        price: 900,
      },
    ];
    return menuobj;
  }
}

export default MenuList;
