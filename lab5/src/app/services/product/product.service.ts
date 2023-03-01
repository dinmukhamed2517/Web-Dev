import { Injectable } from '@angular/core';
import { Product} from "../../models/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductById(id:number):Product{
    return this.getAll().find(product => product.id == id)!;
  }
  getProductsByCategory(category:string):Product[]{
    return this.getAll().filter(product => product.category === category);
  }
  getAll():Product[] {
    return [
      {
        id:1,
        name:"Apple Iphone 14 Pro Max",
        category:"Phones and gadgets",
        imageUrl:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
        price : 1000,
        description:"технология NFC: Да\n" +
          "цвет: фиолетовый\n" +
          "тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n" +
          "диагональ: 6.7 дюйм\n" +
          "размер оперативной памяти: 6 ГБ\n" +
          "процессор: 6-ядерный Apple A16 Bionic\n" +
          "объем встроенной памяти: 256 ГБ\n" +
          "емкость аккумулятора: 3095 мАч",
        numberOfLikes: 0
      },
      {
        id:2,
        name:"Apple Iphone 13",
        category:"Phones and gadgets",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
        price : 800,
        description:"технология NFC: Да\n" +
          "цвет: белый\n" +
          "тип экрана: OLED, Super Retina XDR\n" +
          "диагональ: 6.1 дюйм\n" +
          "размер оперативной памяти: 4 ГБ\n" +
          "процессор: 6-ядерный Apple A15 Bionic\n" +
          "объем встроенной памяти: 128 ГБ\n" +
          "емкость аккумулятора: 3095 мАч",
        numberOfLikes: 0
      },
      {
        id:3,
        name:"Samsung Galaxy A13",
        category:"Phones and gadgets",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
        price : 500,
        description:"технология NFC: Да\n" +
          "цвет: черный\n" +
          "тип экрана: PLS TFT LCD сенсорный, мультитач\n" +
          "диагональ: 6.6 дюйм\n" +
          "размер оперативной памяти: 4 ГБ\n" +
          "процессор: 8-ядерный Exynos 850\n" +
          "объем встроенной памяти: 128 ГБ\n" +
          "емкость аккумулятора: 5000 мАч",
        numberOfLikes: 0
      },
      {
        id:4,
        name:"Apple Watch Series 8",
        category:"Phones and gadgets",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
        price : 500,
        description:"поддержка платформ: iOS\n" +
          "материал корпуса: алюминий\n" +
          "цвет корпуса: черный\n" +
          "технология экрана: OLED\n" +
          "объем встроенной памяти: 32 Гб\n" +
          "интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n" +
          "время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов",
        numberOfLikes: 0
      },
      {
        id:5,
        name:"Samsung Galaxy Buds Pro",
        category:"Phones and gadgets",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h1c/50133412315166/samsung-galaxy-buds-pro-sm-r190nzsacis-serebristyj-100956033-1-Container.jpg",
        price : 200,
        description:"тип: гарнитура\n" +
          "вид: внутриканальные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: открытые\n" +
          "тип крепления: без крепления\n" +
          "система активного шумоподавления: Да\n" +
          "микрофон: Да",
        numberOfLikes: 0
      },
      {
        id:6,
        name:"Logitech G Pro X Superlight",
        category:"Computers",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h03/46827701567518/logitech-g-pro-x-superlight-belyj-102712667-1.jpg",
        price : 250,
        description:"тип подключения: беспроводная\n" +
          "тип сенсора: оптическая лазерная\n" +
          "интерфейс: USB, ,радиоканал\n" +
          "дизайн: для правой руки\n" +
          "игровая: Да\n" +
          "разрешение оптического сенсора: 25600 dpi",
        numberOfLikes: 0
      },
      {
        id:7,
        name:"NuPhy Air75",
        category:"Computers",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hf6/68518715031582/nuphy-air75-korichnevyi-108704424-1.jpg",
        price : 300,
        description:"тип: механическая\n" +
          "дизайн: классическая\n" +
          "назначение: для настольного компьютера\n" +
          "тип подключения: проводная\n" +
          "тип механических клавиш: Cherry MX RGB Low Profile",
        numberOfLikes: 0
      },
      {
        id:8,
        name:"Apple MacBook Pro 14",
        category:"Computers",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
        price : 2000,
        description:"диагональ экрана: 14.2 дюйм\n" +
          "процессор: Apple M1 Pro\n" +
          "видеокарта: Apple M1 Pro 14-Core\n" +
          "размер оперативной памяти: 16 ГБ\n" +
          "тип жесткого диска: SSD\n" +
          "общий объем накопителей: 512 ГБ",
        numberOfLikes: 0
      },
      {
        id:9,
        name:"ASUS VivoBook Pro",
        category:"Computers",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/hbc/65501428088862/asus-vivobook-pro-k6500zc-ma301-90nb0xk1-m00jt0-temno-sinii-107490284-1.jpg",
        price : 1000,
        description:"диагональ экрана: 15.6 дюйм\n" +
          "процессор: Intel Core i5 12500H\n" +
          "видеокарта: NVIDIA GeForce RTX 3050\n" +
          "размер оперативной памяти: 16 ГБ\n" +
          "тип жесткого диска: SSD\n" +
          "общий объем накопителей: 512 ГБ",
        numberOfLikes: 0
      },
      {
        id:10,
        name:"Apple MacBook Pro 16 2023",
        category:"Computers",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/hc3/68378834239518/apple-macbook-pro-16-2023-mnw83-serebristyi-108645812-1.jpg",
        price : 2599,
        description:"диагональ экрана: 16.2 дюйм\n" +
          "процессор: Apple M2 Max\n" +
          "видеокарта: Apple M2 Max 38-Core\n" +
          "размер оперативной памяти: 32 ГБ\n" +
          "тип жесткого диска: SSD\n" +
          "общий объем накопителей: 1024 ГБ",
        numberOfLikes: 0
      },
      {
        id:11,
        name:"Ветровка Nike",
        category:"Clothes",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h70/63666560139294/nike-da0001-010-107098260-1jpg.jpg",
        price :70,
        description:"модель: ветровка\n" +
          "сезон: демисезон\n" +
          "состав: полиэстер\n" +
          "утеплитель: отсутствует",
        numberOfLikes: 0
      },
      {
        id:12,
        name:"Easy 880900",
        category:"Clothes",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h8f/62422794338334/demisezonnaa-kurtka-easy-880900-bezevyj-3xl-bezevyj-106428926-1.jpg",
        price : 50,
        description:"модель: тренчкот\n" +
          "сезон: демисезон\n" +
          "состав: хлопок",
        numberOfLikes: 0
      },
      {
        id:13,
        name:"Лонгслив Monari",
        category:"Clothes",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/hff/68648518123550/longsliv-monari-407497-belyi-42-belyi-108753937-1.jpg",
        price : 60,
        description:"модель: лонгслив\n" +
          "воротник/вырез: стойка\n" +
          "рукава: 3/4\n" +
          "состав: полиэстер, ,эластан, ,модал",
        numberOfLikes: 0
      },
      {
        id:14,
        name:"Юбка Mango",
        category:"Clothes",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/had/68739586588702/mango-47044043-chernyi-38-chernyi-108790953-1.jpg",
        price : 30,
        description:"для беременных: Нет\n" +
          "длина юбки: миди\n" +
          "состав: полиэстер\n" +
          "застежка: молния",
        numberOfLikes: 0
      },
      {
        id:15,
        name:"Майка Cheber",
        category:"Clothes",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/hf6/51190330818590/cheber-119-21-1m-bezevyj-44-bezevyj-105105954-1.jpg",
        price : 20,
        description:"модель: топ\n" +
          "вырез: v-вырез\n" +
          "состав: полиэстер",
        numberOfLikes: 0
      },
      {
        id:16,
        name:"Велосипед Land Rover",
        category:"Sport",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/hdc/51497808003102/land-rover-land-rover-26-kolesa-18-rama-model-2022g-26-dujm-2022-18-dujmov-cernyj-105280105-1.jpg",
        price : 250,
        description:"тип: горный, ,горный гибрид\n" +
          "модельный год: 2022\n" +
          "складной: Да\n" +
          "материал рамы: карбон (углепластик), ,алюминиевый сплав\n" +
          "размеры рамы: 18 дюймов",
        numberOfLikes: 0
      },
      {
        id:17,
        name:"Самокат E-Scooter S2",
        category:"Sport",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/hdf/51342518878238/xiaomi-e-scooter-s2-multikolor-105193151-1.jpg",
        price : 300,
        description:"тип: детский, ,городской, ,внедорожный, ,спортивный, ,электросамокат\n" +
          "максимальная нагрузка: 120 кг\n" +
          "материал рамы: сталь\n" +
          "мощность двигателя: 350 Вт\n" +
          "материал колес: резина",
        numberOfLikes: 0
      },
      {
        id:18,
        name:"Беговая дорожка Garden S900",
        category:"Sport",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h29/50984859402270/garden-s900-101685703-1.jpg",
        price : 350,
        description:"тип: электрическая\n" +
          "складная: Да\n" +
          "максимальный вес пользователя: 120 кг\n" +
          "ширина бегового полотна: 46 см",
        numberOfLikes: 0
      },
      {
        id:19,
        name:"Штанга Alex 58446 20 кг",
        category:"Sport",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h71/66112749731870/alex-58446-20-kg-107711972-1.jpg",
        price : 90,
        description:"тип: штанга\n" +
          "вид грифа: прямая\n" +
          "общий вес штанги: 20 кг\n" +
          "вес грифа: 2 кг\n" +
          "длина грифа: 120 см",
        numberOfLikes: 0
      },
      {
        id:20,
        name:"Скейтборд PWSport",
        category:"Sport",
        imageUrl: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h5d/33201136828446/pwsport-sbskl040wht-belyj-27-9-101733608-1-Container.jpg",
        price : 50,
        description:"тип: скейтборд\n" +
          "для детей: Да",
        numberOfLikes: 0
      }
    ]
  }
}
