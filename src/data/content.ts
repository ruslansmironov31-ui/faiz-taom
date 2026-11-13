import heroFeastImg from '../assets/images/hero_feast_table_1794580433672.jpg';
import beshbarmakImg from '../assets/images/dish_beshbarmak_1794580432077.jpg';
import kuurdakImg from '../assets/images/dish_kuurdak_1794580434675.jpg';
import plovImg from '../assets/images/dish_plov_1794580434042.jpg';
import mantySamsaImg from '../assets/images/dish_manty_samsa_1794580435038.jpg';
import mantyBeefClassicImg from '../assets/images/manty_beef_classic_1794587789407.jpg';
import mantyPumpkinVegImg from '../assets/images/manty_pumpkin_veg_1794587790202.jpg';
import friedMantyImg from '../assets/images/dish_fried_manty_1794587359661.jpg';
import tandyrSamsaImg from '../assets/images/dish_tandyr_samsa_1794587337762.jpg';
import samsaPuffOvenImg from '../assets/images/samsa_puff_oven_1794587810743.jpg';
import samsaChickenCheeseImg from '../assets/images/samsa_chicken_cheese_1794587811419.jpg';
import samsaPumpkinSpiceImg from '../assets/images/samsa_pumpkin_spice_1794587812031.jpg';
import samsaHomeBakedImg from '../assets/images/samsa_home_baked_1794587812071.jpg';
import breadLepeshkaPlainImg from '../assets/images/bread_lepeshka_plain_1794587809987.jpg';
import breadPatyrRichImg from '../assets/images/bread_patyr_rich_1794587811008.jpg';
import breadKatlamaFlakyImg from '../assets/images/bread_katlama_flaky_1794587810700.jpg';
import shorpoTeaImg from '../assets/images/dish_shorpo_tea_1794580435086.jpg';
import soupChickenNoodleImg from '../assets/images/soup_chicken_noodle_1794587787143.jpg';
import soupMastavaImg from '../assets/images/soup_mastava_1794587788159.jpg';
import lagmanSoupImg from '../assets/images/dish_lagman_soup_1794587339031.jpg';
import lentilSoupImg from '../assets/images/dish_lentil_soup_1794587360683.jpg';
import borschtSoupImg from '../assets/images/dish_borscht_soup_1794587360078.jpg';
import saladCaesarImg from '../assets/images/dish_salad_caesar_1794587339569.jpg';
import saladAchikImg from '../assets/images/dish_salad_achik_1794587339837.jpg';
import saladKoreanCarrotImg from '../assets/images/salad_korean_carrot_1794587788196.jpg';
import saladOlivierImg from '../assets/images/salad_olivier_dish_1794587788458.jpg';
import kinzaAyranImg from '../assets/images/drink_kinza_ayran_1794587339939.jpg';
import maksymImg from '../assets/images/drink_maksym_1794582799707.jpg';
import chalapAyranImg from '../assets/images/drink_chalap_ayran_1794587360860.jpg';
import drinkTeaTeapotImg from '../assets/images/drink_tea_teapot_1794587789070.jpg';

export type Language = 'ru' | 'kg' | 'en';

export type DishCategory = 'all' | 'hot' | 'bakery' | 'soups' | 'salads' | 'drinks';

export interface Dish {
  id: string;
  category: Exclude<DishCategory, 'all'>;
  image: string;
  priceKgs: number;
  weight: Record<Language, string>;
  name: Record<Language, string>;
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  isHit?: boolean;
}

export interface Branch {
  id: string;
  index: string;
  name: Record<Language, string>;
  shortName: Record<Language, string>;
  address: Record<Language, string>;
  landmark: Record<Language, string>;
  hours: Record<Language, string>;
  phone: string;
  phoneHref: string;
  coords: {
    lat: number;
    lng: number;
  };
  mapQuery: string;
  googleMapsUrl: string;
  yandexMapsUrl: string;
}

export interface Advantage {
  index: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  detail: Record<Language, string>;
}

export interface Review {
  id: string;
  author: string;
  branch: Record<Language, string>;
  dish: Record<Language, string>;
  date: Record<Language, string>;
  rating: string;
  text: Record<Language, string>;
}

export const HERO_IMAGE = heroFeastImg;

export interface HeroSlide {
  id: string;
  image: string;
  label: Record<Language, string>;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-plov',
    image: plovImg,
    label: {
      ru: 'Плов чайханский в казане',
      kg: 'Казанда бышкан чайкана ашы',
      en: 'Chaykhana pilaf cooked in a kazan',
    },
  },
  {
    id: 'slide-beshbarmak',
    image: beshbarmakImg,
    label: {
      ru: 'Бешбармак классический',
      kg: 'Классикалык бешбармак',
      en: 'Classic Kyrgyz beshbarmak',
    },
  },
  {
    id: 'slide-samsa',
    image: mantySamsaImg,
    label: {
      ru: 'Манты и тандырная самса',
      kg: 'Манты жана тандыр самса',
      en: 'Steamed manty and tandyr samsa',
    },
  },
  {
    id: 'slide-kuurdak',
    image: kuurdakImg,
    label: {
      ru: 'Куурдак по-домашнему',
      kg: 'Үй шартындагы куурдак',
      en: 'Home-style roasted kuurdak',
    },
  },
  {
    id: 'slide-feast',
    image: heroFeastImg,
    label: {
      ru: 'Праздничный дастархан «Файз таом»',
      kg: '«Файз таом» берекелүү дасторкону',
      en: 'Festive dastarkhan at Faiz Taom',
    },
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    index: '01.',
    title: {
      ru: 'Свежее фермерское мясо',
      kg: 'Жаңы фермердик эт',
      en: 'Fresh farm meat',
    },
    description: {
      ru: 'Утренние поставки говядины и баранины из Чуйской долины.',
      kg: 'Чүй өрөөнүнөн күн сайын жаңы уй жана кой эти.',
      en: 'Daily morning deliveries of beef and lamb from the Chuy Valley.',
    },
    detail: {
      ru: '100% Халяль',
      kg: '100% Халал',
      en: '100% Halal',
    },
  },
  {
    index: '02.',
    title: {
      ru: 'Готовка на открытом огне',
      kg: 'Ачык отто бышыруу',
      en: 'Open-fire cooking',
    },
    description: {
      ru: 'Казаны на живом огне и выпечка в горячем тандыре.',
      kg: 'Оттогу казан жана ысык тандыр.',
      en: 'Cast-iron kazans over live flame and freshly fired tandyr ovens.',
    },
    detail: {
      ru: 'Дрова и тандыр',
      kg: 'Отун жана тандыр',
      en: 'Wood fire & tandyr',
    },
  },
  {
    index: '03.',
    title: {
      ru: 'Быстрая подача',
      kg: 'Тез тейлөө',
      en: 'Fast table service',
    },
    description: {
      ru: 'Подаём горячие блюда за 10–15 минут без ожидания.',
      kg: 'Ысык тамак 10–15 мүнөттө дасторкондо.',
      en: 'Hot dishes served within 10–15 minutes with no wait.',
    },
    detail: {
      ru: '10–15 минут',
      kg: '10–15 мүнөт',
      en: '10–15 mins',
    },
  },
  {
    index: '04.',
    title: {
      ru: 'Доступные цены',
      kg: 'Жеткиликтүү баалар',
      en: 'Fair everyday prices',
    },
    description: {
      ru: 'Сытные домашние порции от 110 сом без наценок.',
      kg: 'Үстөксүз 110 сомдон башталган порциялар.',
      en: 'Hearty home-style portions starting from 110 KGS.',
    },
    detail: {
      ru: 'Чек 380–550 сом',
      kg: 'Орточо 380–550 сом',
      en: 'Avg. 380–550 KGS',
    },
  },
];

export const DISHES: Dish[] = [
  // Основные блюда и Манты (хиты)
  {
    id: 'manty-classic',
    category: 'hot',
    image: mantyBeefClassicImg,
    priceKgs: 320,
    isHit: true,
    weight: { ru: '360 г · 5 шт', kg: '360 г · 5 даана', en: '360 g · 5 pcs' },
    name: {
      ru: 'Классические манты с рубленым мясом и луком',
      kg: 'Тууралган эт жана пияз кошулган классикалык манты',
      en: 'Classic Manty with Chopped Beef & Onion',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Сочные манты ручной лепки на пару из тонкого теста с отборной рубленой говядиной, сладким луком, сливочным маслом и пикантным лазаном.',
      kg: 'Жука камырга оролгон тууралган уй эти, таттуу пияз, сары май жана ачуу лаза кошулуп бууда бышкан ширелүү манты.',
      en: 'Hand-folded steamed dumplings filled with diced beef and sweet onion, topped with butter and house chili sauce.',
    },
  },
  {
    id: 'manty-pumpkin',
    category: 'hot',
    image: mantyPumpkinVegImg,
    priceKgs: 260,
    isHit: true,
    weight: { ru: '360 г · 5 шт', kg: '360 г · 5 даана', en: '360 g · 5 pcs' },
    name: {
      ru: 'Манты с тыквой',
      kg: 'Ашкабак мантысы',
      en: 'Steamed Pumpkin Manty',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Нежные паровые манты со сладкой спелой чуйской тыквой, пассерованным луком, чёрным перцем и сливочным маслом — без мяса.',
      kg: 'Этсиз даярдалган назик буу манты: таттуу Чүй ашкабагы, куурулган пияз, кара мурч жана каймак май менен.',
      en: 'Delicate steamed vegetarian manty filled with sweet ripe pumpkin, sautéed onion, cracked black pepper, and butter.',
    },
  },
  {
    id: 'manty-fried',
    category: 'hot',
    image: friedMantyImg,
    priceKgs: 340,
    isHit: true,
    weight: { ru: '350 г · 5 шт', kg: '350 г · 5 даана', en: '350 g · 5 pcs' },
    name: {
      ru: 'Жареные манты (хошан) с хрустящей корочкой',
      kg: 'Кытырак куурулган манты (хошан)',
      en: 'Crispy Pan-Fried Manty (Khoshan)',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Подрумяненные в казане до золотистой хрустящей корочки с бульоном внутри и ароматной томатной подливой с зеленью.',
      kg: 'Казанда алтын түскө чейин кытырак куурулуп, ичи ширелүү бойдон бышкан хошан мантысы, помидор соусу менен.',
      en: 'Pan-seared in a kazan until golden and crispy outside while staying juicy inside, served with tomato herb sauce.',
    },
  },
  {
    id: 'beshbarmak',
    category: 'hot',
    image: beshbarmakImg,
    priceKgs: 460,
    isHit: true,
    weight: { ru: '420 г', kg: '420 г', en: '420 g' },
    name: {
      ru: 'Традиционный Бешбармак',
      kg: 'Салттуу Бешбармак',
      en: 'Traditional Beshbarmak',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Томлёная фермерская говядина с домашней вручную раскатанной лапшой, ароматным луковым чыком и пиалой горячего бульона.',
      kg: 'Колдо жайылган камыр, жумшак бышкан фермердик уй эти, жыпар жыттуу пияз чыгы жана ысык шорпосу менен.',
      en: 'Slow-braised farm beef over hand-rolled noodles with savory onion chyk and a warm bowl of rich broth.',
    },
  },
  {
    id: 'kuurdak',
    category: 'hot',
    image: kuurdakImg,
    priceKgs: 430,
    isHit: true,
    weight: { ru: '380 г', kg: '380 г', en: '380 g' },
    name: {
      ru: 'Жареный Куурдак с картофелем',
      kg: 'Картошка менен куурулган Куурдак',
      en: 'Roasted Kuurdak with Potatoes',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Крупные сочные кусочки мяса, обжаренные на живом огне в казане с золотистым молодым картофелем, луком и свежей зеленью.',
      kg: 'Казанда ачык отто алтын түстүү картошка, пияз жана жаңы көк чөптөр менен куурулган эттин ширелүү кесимдери.',
      en: 'Tender meat chunks seared over live flame in a kazan with golden potatoes, sweet onions, and fresh herbs.',
    },
  },
  {
    id: 'plov',
    category: 'hot',
    image: plovImg,
    priceKgs: 350,
    isHit: true,
    weight: { ru: '400 г', kg: '400 г', en: '400 g' },
    name: {
      ru: 'Сочный Плов с мясом и нутом',
      kg: 'Эт жана нокот кошулган ширелүү Палоо',
      en: 'Juicy Kazan Pilaf with Beef & Chickpeas',
    },
    categoryLabel: {
      ru: 'Основные блюда и Манты',
      kg: 'Негизги тамактар жана Манты',
      en: 'Mains & Manty',
    },
    description: {
      ru: 'Рассыпчатый чайханский плов с нежной говядиной, сладкой жёлтой морковью, нутом, зирой и целой печёной головкой чеснока.',
      kg: 'Уй эти, сары сабиз, нокот, зире жана бүтүн бышкан сарымсак кошулуп, даана-даана демделген чайкана палоосу.',
      en: 'Fluffy chaykhana pilaf with tender beef, yellow carrots, chickpeas, cumin, and roasted whole garlic.',
    },
  },

  // Самса и Выпечка (8 видов)
  {
    id: 'samsa-tandyr',
    category: 'bakery',
    image: tandyrSamsaImg,
    priceKgs: 120,
    isHit: true,
    weight: { ru: '170 г', kg: '170 г', en: '170 g' },
    name: {
      ru: 'Тандырная самса с рубленой говядиной',
      kg: 'Тууралган уй эти кошулган тандыр самса',
      en: 'Tandyr Samsa with Chopped Beef',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Прямо из раскалённого тандыра: хрустящая корочка с кунжутом, сочная рубленая говядина, курдючный жир и ароматная зира.',
      kg: 'Ысык тандырдан жаңы чыккан кунжуттуу кытырак самса: тууралган уй эти, куйрук май жана зире менен.',
      en: 'Baked straight in a hot clay tandyr with sesame crust, diced beef, tail fat, and fragrant cumin.',
    },
  },
  {
    id: 'samsa-puff-oven',
    category: 'bakery',
    image: samsaPuffOvenImg,
    priceKgs: 115,
    weight: { ru: '160 г', kg: '160 г', en: '160 g' },
    name: {
      ru: 'Слоеная самса из духовки с мясом',
      kg: 'Мештен чыккан кабаттуу эт самса',
      en: 'Oven-Baked Flaky Beef Samsa',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Воздушное домашнее слоёное тесто на сливочном масле с нежной мясной начинкой, луком и золотистой румяной корочкой.',
      kg: 'Сары майга жуурулган үлпүлдөк кабаттуу камыр, ичи ширелүү эт жана пияз кошулуп меште бышырылган самса.',
      en: 'Airy butter-laminated puff pastry baked golden in the oven with savory minced beef and onion filling.',
    },
  },
  {
    id: 'samsa-chicken-cheese',
    category: 'bakery',
    image: samsaChickenCheeseImg,
    priceKgs: 110,
    weight: { ru: '155 г', kg: '155 г', en: '155 g' },
    name: {
      ru: 'Самса с курицей и сыром',
      kg: 'Тоок эти жана сыр кошулган самса',
      en: 'Chicken & Cheese Samsa',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Нежное куриное филе с расплавленным тягучим сыром, зеленью и сливочным оттенком в хрустящем слоёном тесте.',
      kg: 'Кытырак кабаттуу камырдын ичинде жумшак тоок эти, эриген сыр жана жаңы көк чөп.',
      en: 'Tender chicken breast with melted cheese and herbs baked inside flaky golden pastry.',
    },
  },
  {
    id: 'samsa-pumpkin',
    category: 'bakery',
    image: samsaPumpkinSpiceImg,
    priceKgs: 95,
    weight: { ru: '150 г', kg: '150 г', en: '150 g' },
    name: {
      ru: 'Самса с тыквой и специями',
      kg: 'Ашкабак жана татымал кошулган самса',
      en: 'Spiced Pumpkin Samsa',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Лёгкая и ароматная выпечка со сладкой чуйской тыквой, пассерованным луком, чёрным перцем и кунжутом.',
      kg: 'Таттуу ашкабак, куурулган пияз, кара мурч жана кунжут кошулган жеңил жана жыпар жыттуу самса.',
      en: 'Light flaky pastry filled with sweet local pumpkin, caramelized onions, and cracked black pepper.',
    },
  },
  {
    id: 'samsa-home',
    category: 'bakery',
    image: samsaHomeBakedImg,
    priceKgs: 95,
    weight: { ru: '150 г', kg: '150 г', en: '150 g' },
    name: {
      ru: 'Обычная домашняя самса с фаршем',
      kg: 'Фарш кошулган жөнөкөй үй самсасы',
      en: 'Classic Home-Style Minced Meat Samsa',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Знакомый с детства вкус: румяный треугольник из песочно-слоёного теста с сочным говяжьим фаршем и луком.',
      kg: 'Бала кезден тааныш даам: үйдө бышкан жумшак камыр, ширелүү уй этинин фаршы жана пияз менен.',
      en: 'Comforting homemade pastry triangle filled with juicy minced beef and onion.',
    },
  },
  {
    id: 'lepeshka-tandyr',
    category: 'bakery',
    image: breadLepeshkaPlainImg,
    priceKgs: 45,
    weight: { ru: '250 г', kg: '250 г', en: '250 g' },
    name: {
      ru: 'Горячая лепешка из тандыра',
      kg: 'Тандырдан жаңы чыккан ысык токоч',
      en: 'Hot Tandyr Flatbread (Lepeshka)',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Румяная пышная лепёшка с хрустящей корочкой, хрустящим донышком и посыпкой из чёрного тмина (седаны).',
      kg: 'Тандырдан жаңы үзүлгөн, үстү кызгылт-сары, кара зире себилген ысык жана жумшак токоч нан.',
      en: 'Warm crusty tandyr flatbread sprinkled with black nigella seeds, baked fresh every hour.',
    },
  },
  {
    id: 'bread-patyr',
    category: 'bakery',
    image: breadPatyrRichImg,
    priceKgs: 85,
    weight: { ru: '320 г', kg: '320 г', en: '320 g' },
    name: {
      ru: 'Сдобный хлеб Патыр',
      kg: 'Майлуу жумшак Патыр нан',
      en: 'Rich Festive Patyr Bread',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Узорная сдобная лепёшка на молоке и сливочном масле с тонкой глянцевой корочкой — идеальна к шурпе и чаю.',
      kg: 'Сүт жана каймак майга жуурулуп, кооз оюу салынып бышырылган назик патыр наны — шорпо жана чайга эң сонун.',
      en: 'Stamped butter-and-milk enriched flatbread with a delicate crumb and glossy golden crust.',
    },
  },
  {
    id: 'bread-katlama',
    category: 'bakery',
    image: breadKatlamaFlakyImg,
    priceKgs: 90,
    weight: { ru: '220 г', kg: '220 г', en: '220 g' },
    name: {
      ru: 'Слоеная лепешка Катлама',
      kg: 'Кабаттуу Катлама наны',
      en: 'Flaky Pan-Seared Katlama Flatbread',
    },
    categoryLabel: {
      ru: 'Самса и Выпечка',
      kg: 'Самса жана Нан',
      en: 'Samsa & Bakery',
    },
    description: {
      ru: 'Тончайшие хрустящие слои теста, промазанные топлёным маслом и обжаренные до золотистой слоистости.',
      kg: 'Сары май сиңирилген жука кабаттардан турган, алтын түскө чейин куурулган кытырак катлама.',
      en: 'Multi-layered crisp flatbread brushed with clarified butter and pan-griddled until flaky and golden.',
    },
  },

  // Супы (6 видов)
  {
    id: 'soup-shorpo',
    category: 'soups',
    image: shorpoTeaImg,
    priceKgs: 300,
    isHit: true,
    weight: { ru: '420 мл', kg: '420 мл', en: '420 ml' },
    name: {
      ru: 'Наваристая Шурпа из баранины',
      kg: 'Кой этинен коюу Шорпо',
      en: 'Rich Lamb Shurpa Soup',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Прозрачный насыщенный бульон на бараньей косточке с крупным картофелем, морковью, болгарским перцем и свежей кинзой.',
      kg: 'Сөөктүү кой этинен кайнатылган тунук коюу шорпо: картошка, сабиз, таттуу калемпир жана жаңы кинза менен.',
      en: 'Clear aromatic bone-in lamb broth simmered with chunky potatoes, carrots, bell pepper, and fresh cilantro.',
    },
  },
  {
    id: 'soup-chicken-noodle',
    category: 'soups',
    image: soupChickenNoodleImg,
    priceKgs: 240,
    weight: { ru: '400 мл', kg: '400 мл', en: '400 ml' },
    name: {
      ru: 'Домашний куриный суп с лапшой',
      kg: 'Кесме кошулган үй тоок шорпосу',
      en: 'Homemade Chicken Noodle Soup',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Лёгкий золотистый бульон из домашней курицы с тонкой яичной лапшой ручной нарезки, зеленью и свежим перцем.',
      kg: 'Үй тоогунун жеңил алтын шорпосу, колдо кесилген жука кесме жана жаңы көк чөптөр менен.',
      en: 'Light golden chicken broth with hand-cut egg noodles, tender chicken, and fresh herbs.',
    },
  },
  {
    id: 'soup-mastava',
    category: 'soups',
    image: soupMastavaImg,
    priceKgs: 270,
    weight: { ru: '420 мл', kg: '420 мл', en: '420 ml' },
    name: {
      ru: 'Мастава с рисом и мясом',
      kg: 'Күрүч жана эт кошулган Мастава',
      en: 'Mastava Rice & Beef Soup',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Сытный восточный суп с обжаренной говядиной, рисом, томатами и овощами — подаётся со сметаной или сюзьмой и зеленью.',
      kg: 'Куурулган уй эти, күрүч, помидор жана жашылчалар кошулуп бышкан тойгузчу мастава, сүзмө жана көк чөп менен.',
      en: 'Hearty Central Asian rice soup with seared beef, tomatoes, and vegetables, served with strained yogurt and herbs.',
    },
  },
  {
    id: 'soup-lagman',
    category: 'soups',
    image: lagmanSoupImg,
    priceKgs: 320,
    isHit: true,
    weight: { ru: '450 г', kg: '450 г', en: '450 g' },
    name: {
      ru: 'Лагман с тянутой лапшой и овощами',
      kg: 'Чоюлган кесме жана жашылчалуу Лагман',
      en: 'Hand-Pulled Noodle Lagman',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Упругая лапша ручной вытяжки в пряном мясном ваджу со сладким перцем, джусаем, сельдереем, редькой и чесноком.',
      kg: 'Колдо чоюлган кесме, таттуу калемпир, жусай, сельдерей жана эттүү коюу важу менен берилген лагман.',
      en: 'Springy hand-pulled noodles in spiced beef and vegetable vajou broth with peppers, celery, and garlic.',
    },
  },
  {
    id: 'soup-lentil',
    category: 'soups',
    image: lentilSoupImg,
    priceKgs: 230,
    weight: { ru: '350 мл', kg: '350 мл', en: '350 ml' },
    name: {
      ru: 'Чечевичный крем-суп с сухариками',
      kg: 'Кургатылган нан кошулган жасмык крем-шорпосу',
      en: 'Velvety Lentil Cream Soup with Croutons',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Бархатистый суп-пюре из красной чечевицы со сливочным маслом, пряной мятой, долькой лимона и хрустящими гренками.',
      kg: 'Кызыл жасмыктан даярдалган жумшак крем-шорпо, жалбыз, лимон кесими жана кытырак нан менен.',
      en: 'Silky red lentil soup finished with spiced mint oil, fresh lemon, and crisp garlic croutons.',
    },
  },
  {
    id: 'soup-borscht',
    category: 'soups',
    image: borschtSoupImg,
    priceKgs: 260,
    weight: { ru: '400 мл', kg: '400 мл', en: '400 ml' },
    name: {
      ru: 'Борщ по-домашнему со сметаной',
      kg: 'Каймак кошулган үй борщу',
      en: 'Homemade Beef Borscht with Sour Cream',
    },
    categoryLabel: {
      ru: 'Супы',
      kg: 'Шорполор',
      en: 'Soups',
    },
    description: {
      ru: 'Рубиновый наваристый борщ на говяжьей грудинке со свежей капустой, сладкой свёклой, укропом и прохладной сметаной.',
      kg: 'Уй этинен жасалган коюу кызыл борщ, жаңы капуста, кызылча, укроп жана салкын каймак менен.',
      en: 'Rich ruby beef brisket borscht with cabbage, sweet beets, fresh dill, and cool sour cream.',
    },
  },

  // Салаты (6 видов)
  {
    id: 'salad-caesar',
    category: 'salads',
    image: saladCaesarImg,
    priceKgs: 310,
    isHit: true,
    weight: { ru: '240 г', kg: '240 г', en: '240 g' },
    name: {
      ru: 'Салат «Цезарь» с куриным филе',
      kg: 'Тоок эти кошулган «Цезарь» салаты',
      en: 'Grilled Chicken Caesar Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Хрустящие листья салата романо, сочное куриное филе гриль, томаты черри, пшеничные сухарики, пармезан и фирменный соус.',
      kg: 'Кытырак салат жалбырактары, грилде бышкан тоок эти, черри помидору, пармезан, кургатылган нан жана фирмалык соус.',
      en: 'Crisp romaine lettuce with grilled chicken breast, cherry tomatoes, shaved parmesan, croutons, and Caesar dressing.',
    },
  },
  {
    id: 'salad-cucumber-tomato',
    category: 'salads',
    image: saladAchikImg,
    priceKgs: 180,
    weight: { ru: '220 г', kg: '220 г', en: '220 g' },
    name: {
      ru: 'Свежий салат «Огурцы и помидоры» с зеленью',
      kg: 'Көк чөптүү жаңы бадыраң-помидор салаты',
      en: 'Fresh Cucumber & Tomato Herb Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Спелые грунтовые помидоры и хрустящие огурчики со свежим укропом, кинзой и лёгкой заправкой на выбор.',
      kg: 'Бышкан ширелүү помидор, кытырак бадыраң, жаңы укроп, кинза жана өсүмдүк майы менен жеңил салат.',
      en: 'Ripe juicy tomatoes and crisp cucumbers tossed with fresh dill, cilantro, and light dressing.',
    },
  },
  {
    id: 'salad-korean-carrot',
    category: 'salads',
    image: saladKoreanCarrotImg,
    priceKgs: 160,
    weight: { ru: '200 г', kg: '200 г', en: '200 g' },
    name: {
      ru: 'Пикантный морковный салат по-корейски',
      kg: 'Корейче ачуу сабиз салаты',
      en: 'Spicy Korean-Style Carrot Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Сочная тонкая соломка сладкой моркови, маринованная с чесноком, молотым кориандром, острым перцем и кунжутом.',
      kg: 'Сарымсак, кориандр, ачуу калемпир жана кунжут кошулуп маринаддалган ширелүү сабиз салаты.',
      en: 'Crisp julienned carrots marinated with garlic, crushed coriander, chili spice, and toasted sesame.',
    },
  },
  {
    id: 'salad-achik-chuchuk',
    category: 'salads',
    image: saladAchikImg,
    priceKgs: 190,
    isHit: true,
    weight: { ru: '220 г', kg: '220 г', en: '220 g' },
    name: {
      ru: 'Салат «Ачик-чучук» с красным луком и перцем',
      kg: 'Кызыл пияз жана калемпир кошулган «Ачик-чучук»',
      en: 'Achik-Chuchuk Tomato & Red Onion Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Тонко нарезанные сладкие розовые томаты, полукольца красного лука, свежий стручковый перец и базилик — классика к плову.',
      kg: 'Жука тууралган таттуу помидор, кызыл пияз, ачуу жашыл калемпир жана райкан — палоо менен эң сонун айкалышат.',
      en: 'Paper-thin ripe tomatoes, sweet red onion rings, fresh chili pepper, and basil—the essential pilaf companion.',
    },
  },
  {
    id: 'salad-olivier',
    category: 'salads',
    image: saladOlivierImg,
    priceKgs: 240,
    weight: { ru: '230 г', kg: '230 г', en: '230 g' },
    name: {
      ru: 'Классический салат «Столичный» (Оливье)',
      kg: 'Классикалык «Столичный» (Оливье) салаты',
      en: 'Classic Stolichny (Olivier) Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Отварная говядина, молодой картофель, морковь, солёные огурчики, зелёный горошек и яйцо под нежным домашним соусом.',
      kg: 'Бышкан уй эти, картошка, сабиз, туздалган бадыраң, жашыл буурчак жана жумуртка кошулган классикалык салат.',
      en: 'Diced boiled beef, tender potatoes, carrots, pickles, sweet peas, and egg in classic creamy dressing.',
    },
  },
  {
    id: 'salad-vitamin',
    category: 'salads',
    image: saladAchikImg,
    priceKgs: 150,
    weight: { ru: '200 г', kg: '200 г', en: '200 g' },
    name: {
      ru: 'Витаминный салат из свежей капусты с зеленью',
      kg: 'Көк чөптүү жаңы капуста витамин салаты',
      en: 'Fresh Cabbage & Herb Vitamin Salad',
    },
    categoryLabel: {
      ru: 'Салаты',
      kg: 'Салаттар',
      en: 'Salads',
    },
    description: {
      ru: 'Хрустящая белокочанная капуста с тёртой морковью, болгарским перцем, укропом и ароматным растительным маслом.',
      kg: 'Тууралган жаңы капуста, сабиз, таттуу калемпир, укроп жана өсүмдүк майы кошулган сергитүүчү витамин салаты.',
      en: 'Crisp shredded white cabbage with carrot, bell pepper, fresh dill, and light vinaigrette.',
    },
  },

  // Напитки (4 вида)
  {
    id: 'drink-kinza',
    category: 'drinks',
    image: kinzaAyranImg,
    priceKgs: 95,
    isHit: true,
    weight: { ru: '360 мл', kg: '360 мл', en: '360 ml' },
    name: {
      ru: 'Саудовский газированный напиток Kinza (кола, цитрус, гранат)',
      kg: 'Саудиялык газдалган Kinza суусундугу (кола, цитрус, анар)',
      en: 'Saudi Sparkling Kinza (Cola, Citrus, Pomegranate)',
    },
    categoryLabel: {
      ru: 'Напитки',
      kg: 'Суусундуктар',
      en: 'Drinks',
    },
    description: {
      ru: 'Охлаждённый саудовский газированный напиток Kinza на выбор: классическая Кола, освежающий Цитрус или насыщенный Гранат.',
      kg: 'Муздатылган Саудиялык Kinza газдалган суусундугу: Кола, сергитүүчү Цитрус же таттуу Анар даамын тандаңыз.',
      en: 'Chilled Saudi sparkling Kinza soft drink in your choice of Classic Cola, Crisp Citrus, or Rich Pomegranate.',
    },
  },
  {
    id: 'drink-compote',
    category: 'drinks',
    image: maksymImg,
    priceKgs: 120,
    weight: { ru: '500 мл', kg: '500 мл', en: '500 ml' },
    name: {
      ru: 'Домашний охлажденный компот из сухофруктов и ягод',
      kg: 'Как жана мөмөлөрдөн муздатылган үй компоту',
      en: 'Chilled Homemade Dried Fruit & Berry Compote',
    },
    categoryLabel: {
      ru: 'Напитки',
      kg: 'Суусундуктар',
      en: 'Drinks',
    },
    description: {
      ru: 'Сваренный по-домашнему насыщенный узвар из сушёных иссык-кульских яблок, урюка, вишни и горной малины без лишнего сахара.',
      kg: 'Ысык-Көл алма кагы, өрүк, алча жана тоо малинасынан үй шартында кайнатылып муздатылган коюу компот.',
      en: 'Slow-brewed chilled compote from Issyk-Kul dried apples, apricots, sour cherries, and mountain berries.',
    },
  },
  {
    id: 'drink-ayran-chalap',
    category: 'drinks',
    image: chalapAyranImg,
    priceKgs: 110,
    weight: { ru: '450 мл', kg: '450 мл', en: '450 ml' },
    name: {
      ru: 'Традиционный айран / чалап',
      kg: 'Салттуу айран / чалап',
      en: 'Traditional Ayran / Chalap',
    },
    categoryLabel: {
      ru: 'Напитки',
      kg: 'Суусундуктар',
      en: 'Drinks',
    },
    description: {
      ru: 'Освежающий кисломолочный айран или прохладный взбитый чалап из фермерской сюзьмы с родниковой водой, укропом и мятой.',
      kg: 'Фермердик сүзмөдөн таза булак суусу, укроп жана жалбыз кошулуп чалынган сергитүүчү салттуу айран же чалап.',
      en: 'Refreshing chilled cultured ayran or whipped Kyrgyz chalap with farm suzmo, spring water, dill, and mint.',
    },
  },
  {
    id: 'drink-tea-pot',
    category: 'drinks',
    image: drinkTeaTeapotImg,
    priceKgs: 140,
    weight: { ru: '800 мл · чайник', kg: '800 мл · чайнек', en: '800 ml · pot' },
    name: {
      ru: 'Чайник черного или зеленого чая (с лимоном или чабрецом)',
      kg: 'Лимон же кийик оту кошулган кара же көк чай (чайнек)',
      en: 'Pot of Black or Green Tea (with Lemon or Thyme)',
    },
    categoryLabel: {
      ru: 'Напитки',
      kg: 'Суусундуктар',
      en: 'Drinks',
    },
    description: {
      ru: 'Свежезаваренный листовой чёрный или зелёный чай в большом фарфоровом чайнике с горным чабрецом или дольками лимона.',
      kg: 'Чоң фарфор чайнекте жаңы демделген жалбырактуу кара же көк чай — тоо кийик оту же лимон кесими менен.',
      en: 'Freshly brewed loose-leaf black or green tea in a large porcelain teapot infused with lemon or mountain thyme.',
    },
  },
];

export const BRANCHES: Branch[] = [
  {
    id: 'center',
    index: '01',
    name: {
      ru: 'Филиал «Центр»',
      kg: '«Борбор» филиалы',
      en: 'Center Branch',
    },
    shortName: {
      ru: 'Центр · пр. Чуй, 155',
      kg: 'Борбор · Чүй пр., 155',
      en: 'Center · 155 Chuy Ave',
    },
    address: {
      ru: 'г. Бишкек, проспект Чуй, 155',
      kg: 'Бишкек ш., Чүй проспектиси, 155',
      en: 'Bishkek, 155 Chuy Avenue',
    },
    landmark: {
      ru: 'Ориентир — ЦУМ «Айчурек»',
      kg: 'Багыт — «Айчүрөк» ЦУМу',
      en: 'Landmark — TSUM Aichurek',
    },
    hours: {
      ru: 'Ежедневно 08:00 – 23:00',
      kg: 'Күн сайын 08:00 – 23:00',
      en: 'Daily 08:00 – 23:00',
    },
    phone: '+996 (555) 155-001',
    phoneHref: 'tel:+996555155001',
    coords: { lat: 42.8763, lng: 74.6144 },
    mapQuery: 'Бишкек проспект Чуй 155',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.8763,74.6144',
    yandexMapsUrl: 'https://yandex.ru/maps/?pt=74.6144,42.8763&z=16&l=map',
  },
  {
    id: 'aitmatova',
    index: '02',
    name: {
      ru: 'Филиал «Айтматова»',
      kg: '«Айтматов» филиалы',
      en: 'Aitmatov Branch',
    },
    shortName: {
      ru: 'Айтматова · пр. Ч. Айтматова, 3',
      kg: 'Айтматов · Ч. Айтматов пр., 3',
      en: 'Aitmatov · 3 Ch. Aitmatov Ave',
    },
    address: {
      ru: 'г. Бишкек, проспект Чынгыза Айтматова, 3',
      kg: 'Бишкек ш., Чыңгыз Айтматов проспектиси, 3',
      en: 'Bishkek, 3 Chyngyz Aitmatov Ave',
    },
    landmark: {
      ru: 'Ориентир — ТРЦ «Asia Mall»',
      kg: 'Багыт — «Asia Mall» соода борбору',
      en: 'Landmark — Asia Mall',
    },
    hours: {
      ru: 'Ежедневно 08:00 – 23:00',
      kg: 'Күн сайын 08:00 – 23:00',
      en: 'Daily 08:00 – 23:00',
    },
    phone: '+996 (555) 155-002',
    phoneHref: 'tel:+996555155002',
    coords: { lat: 42.8559, lng: 74.5854 },
    mapQuery: 'Бишкек проспект Чынгыза Айтматова 3',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.8559,74.5854',
    yandexMapsUrl: 'https://yandex.ru/maps/?pt=74.5854,42.8559&z=16&l=map',
  },
  {
    id: 'south',
    index: '03',
    name: {
      ru: 'Филиал «Южная магистраль»',
      kg: '«Түштүк магистраль» филиалы',
      en: 'South Highway Branch',
    },
    shortName: {
      ru: 'Южная магистраль · пр. Токомбаева, 21/1Б',
      kg: 'Түштүк магистраль · Токомбаев пр., 21/1Б',
      en: 'South · 21/1B Tokombaev Ave',
    },
    address: {
      ru: 'г. Бишкек, проспект Аалы Токомбаева, 21/1Б',
      kg: 'Бишкек ш., Аалы Токомбаев проспектиси, 21/1Б',
      en: 'Bishkek, 21/1B Aaly Tokombaev Ave',
    },
    landmark: {
      ru: 'Ориентир — ТРЦ «Tommi Mall» / Асанбай',
      kg: 'Багыт — «Tommi Mall» / Асанбай',
      en: 'Landmark — Tommi Mall / Asanbai',
    },
    hours: {
      ru: 'Ежедневно 08:00 – 23:00',
      kg: 'Күн сайын 08:00 – 23:00',
      en: 'Daily 08:00 – 23:00',
    },
    phone: '+996 (555) 155-003',
    phoneHref: 'tel:+996555155003',
    coords: { lat: 42.8185, lng: 74.6238 },
    mapQuery: 'Бишкек проспект Аалы Токомбаева 21/1Б',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.8185,74.6238',
    yandexMapsUrl: 'https://yandex.ru/maps/?pt=74.6238,42.8185&z=16&l=map',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Азамат Касымов',
    branch: {
      ru: 'Филиал «Центр» · пр. Чуй, 155',
      kg: '«Борбор» филиалы · Чүй пр., 155',
      en: 'Center Branch · 155 Chuy Ave',
    },
    dish: {
      ru: 'Чайханский плов и тандырная самса',
      kg: 'Чайкана ашы жана тандыр самса',
      en: 'Chaykhana pilaf & tandyr samsa',
    },
    date: { ru: 'Октябрь 2026', kg: 'Октябрь 2026', en: 'October 2026' },
    rating: '5.0 / 5',
    text: {
      ru: 'Работаю рядом с ЦУМом и обедаю здесь трижды в неделю. Плов приносят за 10 минут — рис рассыпчатый, мяса не жалеют, а самса всегда с пылу с жару.',
      kg: 'ЦУМдун жанында иштейм, жумасына үч жолу ушул жерден түштөнөм. Ашты 10 мүнөттө алып келишет — күрүчү даана, эти мол, самсасы дайыма ысык.',
      en: 'I work near TSUM and have lunch here three times a week. The pilaf arrives in 10 minutes—fluffy rice, generous beef, and samsa straight out of the hot tandyr.',
    },
  },
  {
    id: 'r2',
    author: 'Айгуль Токтогулова',
    branch: {
      ru: 'Филиал «Айтматова» · пр. Айтматова, 3',
      kg: '«Айтматов» филиалы · Айтматов пр., 3',
      en: 'Aitmatov Branch · 3 Aitmatov Ave',
    },
    dish: {
      ru: 'Бешбармак классический и чай с лимоном',
      kg: 'Классикалык бешбармак жана лимондуу чай',
      en: 'Classic beshbarmak & lemon tea',
    },
    date: { ru: 'Ноябрь 2026', kg: 'Ноябрь 2026', en: 'November 2026' },
    rating: '5.0 / 5',
    text: {
      ru: 'Заехали семьёй после прогулки у Asia Mall. Очень чистый зал, вежливое обслуживание, а бешбармак по вкусу точно как дома у родителей.',
      kg: 'Asia Mall тарапта сейилдеп жүрүп үй-бүлөбүз менен кирдик. Залы абдан таза, тейлөөсү сылык, бешбармагынын даамы үйдөгүдөй экен.',
      en: 'Stopped by with family after walking near Asia Mall. Spotless dining hall, warm service, and the beshbarmak tastes just like homemade.',
    },
  },
  {
    id: 'r3',
    author: 'Эрлан Джумабеков',
    branch: {
      ru: 'Филиал «Южная магистраль» · Токомбаева, 21/1Б',
      kg: '«Түштүк магистраль» · Токомбаев, 21/1Б',
      en: 'South Highway · 21/1B Tokombaev Ave',
    },
    dish: {
      ru: 'Куурдак по-домашнему и шорпо',
      kg: 'Үй куурдагы жана шорпо',
      en: 'Home-style kuurdak & shorpo',
    },
    date: { ru: 'Ноябрь 2026', kg: 'Ноябрь 2026', en: 'November 2026' },
    rating: '4.9 / 5',
    text: {
      ru: 'Удобно бронировать столик или забирать заказ на вынос по дороге в Асанбай. Куурдак сочный, порции большие, цены честные для Бишкека.',
      kg: 'Асанбайга баратып стол брондоп же алып кетүүгө буйрутма бергенге абдан ыңгайлуу. Куурдагы ширелүү, порциясы чоң, баасы Бишкек үчүн абдан жакшы.',
      en: 'Super convenient to book a table or pick up takeaway on the way to Asanbai. Juicy kuurdak, generous portions, and honest Bishkek prices.',
    },
  },
];

export const UI_COPY = {
  brand: 'Файз таом',
  nav: {
    menu: { ru: 'Меню', kg: 'Меню', en: 'Menu' },
    branches: { ru: 'Филиалы', kg: 'Филиалдар', en: 'Branches' },
    reviews: { ru: 'Отзывы', kg: 'Пикирлер', en: 'Reviews' },
    booking: { ru: 'Бронь', kg: 'Брондоо', en: 'Booking' },
    ariaLabel: {
      ru: 'Основная навигация',
      kg: 'Негизги навигация',
      en: 'Main navigation',
    },
    langAriaLabel: {
      ru: 'Переключение языка',
      kg: 'Тилди тандоо',
      en: 'Language switcher',
    },
    openMenuAria: {
      ru: 'Открыть меню навигации',
      kg: 'Навигация менюсун ачуу',
      en: 'Toggle navigation menu',
    },
  },
  themeToggle: {
    toDark: {
      ru: 'Включить ночной режим',
      kg: 'Түнкү режимди күйгүзүү',
      en: 'Switch to dark mode',
    },
    toLight: {
      ru: 'Включить дневной режим',
      kg: 'Күндүзгү режимди күйгүзүү',
      en: 'Switch to light mode',
    },
  },
  headerCta: {
    ru: 'Забронировать',
    kg: 'Стол брондоо',
    en: 'Book a table',
  },
  hero: {
    kicker: {
      ru: 'Национальная ашкана · 3 филиала в Бишкеке · 08:00 – 23:00',
      kg: 'Улуттук ашкана · Бишкекте 3 филиал · 08:00 – 23:00',
      en: 'National Ashkana · 3 Branches in Bishkek · 08:00 – 23:00',
    },
    title: {
      ru: 'Домашняя кухня и тепло очага в сердце Бишкека',
      kg: 'Бишкектин жүрөгүндөгү үй даамы жана очок жылуулугу',
      en: 'Home-style Kyrgyz cuisine in the heart of Bishkek',
    },
    offerHeadline: {
      ru: 'Бесплатная доставка за 30 минут · Скидка 10% на самовывоз',
      kg: '30 мүнөттө акысыз жеткирүү · Өзүңүз алсаңыз 10% арзандатуу',
      en: 'Free 30-min delivery · 10% off takeaway pickup',
    },
    offerCta: {
      ru: 'Заказать со скидкой 10%',
      kg: '10% арзандатуу менен алуу',
      en: 'Order with 10% off',
    },
    slidesAriaLabel: {
      ru: 'Слайды блюд',
      kg: 'Тамак сүрөттөрү',
      en: 'Dish slideshow',
    },
    prevSlide: {
      ru: 'Предыдущий слайд',
      kg: 'Мурунку сүрөт',
      en: 'Previous slide',
    },
    nextSlide: {
      ru: 'Следующий слайд',
      kg: 'Кийинки сүрөт',
      en: 'Next slide',
    },
  },
  menu: {
    eyebrow: {
      ru: 'Меню и хиты продаж',
      kg: 'Меню жана эң көп суралган тамактар',
      en: 'Menu & Bestsellers',
    },
    heading: {
      ru: 'Любимые блюда Бишкека — с пылу с жару',
      kg: 'Бишкектин сүйүктүү тамактары — ысык бойдон дасторконго',
      en: 'Bishkek favorites — served piping hot',
    },
    subtitle: {
      ru: 'Выберите категорию, чтобы посмотреть вес порции, состав и цену в сомах.',
      kg: 'Порция салмагын, курамын жана сом менен баасын көрүү үчүн категорияны тандаңыз.',
      en: 'Choose a category to inspect portion weight, ingredients, and prices in KGS.',
    },
    categories: {
      all: { ru: 'Все блюда', kg: 'Баардыгы', en: 'All dishes' },
      hot: {
        ru: 'Основные блюда и Манты',
        kg: 'Негизги тамактар жана Манты',
        en: 'Mains & Manty',
      },
      bakery: {
        ru: 'Самса и Выпечка',
        kg: 'Самса жана Нан',
        en: 'Samsa & Bakery',
      },
      soups: { ru: 'Супы', kg: 'Шорполор', en: 'Soups' },
      salads: { ru: 'Салаты', kg: 'Салаттар', en: 'Salads' },
      drinks: { ru: 'Напитки', kg: 'Суусундуктар', en: 'Drinks' },
    },
    hitLabel: {
      ru: 'Хит продаж',
      kg: 'Хит тамак',
      en: 'Bestseller',
    },
    currency: {
      ru: 'сом',
      kg: 'сом',
      en: 'KGS',
    },
    addToOrder: {
      ru: 'В заказ на вынос',
      kg: 'Алып кетүүгө кошуу',
      en: 'Add to takeaway',
    },
    shortAdd: {
      ru: 'В заказ',
      kg: 'Кошуу',
      en: 'Add',
    },
    addedCount: {
      ru: 'В заказе',
      kg: 'Тандалды',
      en: 'In order',
    },
  },
  branches: {
    eyebrow: {
      ru: 'Наши 3 филиала в Бишкеке',
      kg: 'Бишкектеги 3 филиалыбыз',
      en: 'Our 3 branches in Bishkek',
    },
    heading: {
      ru: 'Приезжайте пообедать — стройте маршрут в один клик',
      kg: 'Түштөнүүгө келиңиз — бир басуу менен маршрут түзүңүз',
      en: 'Stop by for a meal — get directions in one click',
    },
    subtitle: {
      ru: 'Все три ашканы работают ежедневно с 08:00 до 23:00. Нажмите на филиал, чтобы увидеть его на карте крупным планом, или найдите ближайший к вам.',
      kg: 'Бардык үч ашкана күн сайын 08:00дөн 23:00гө чейин иштейт. Картадан жакын көрүү үчүн филиалды тандаңыз же эң жакынын табыңыз.',
      en: 'All three locations are open daily from 08:00 to 23:00. Select any branch to view it close up on the map or find the closest one.',
    },
    findNearest: {
      ru: 'Найти ближайший ко мне филиал',
      kg: 'Мага жакын филиалды табуу',
      en: 'Find nearest branch to me',
    },
    locating: {
      ru: 'Определяем адрес...',
      kg: 'Аныкталууда...',
      en: 'Locating...',
    },
    nearestLabel: {
      ru: 'Ближайший к вам:',
      kg: 'Эң жакын филиал:',
      en: 'Nearest to you:',
    },
    distanceUnit: {
      ru: 'км',
      kg: 'км',
      en: 'km',
    },
    fallbackGeoStatus: {
      ru: 'Центр Бишкека — выберите любой филиал на карте',
      kg: 'Бишкек борбору — картадан филиалды тандаңыз',
      en: 'Bishkek Center — choose any branch on the map',
    },
    centerOnMap: {
      ru: 'Показать на карте',
      kg: 'Картадан көрсөтүү',
      en: 'Show on map',
    },
    showingOnMap: {
      ru: 'Сейчас на карте',
      kg: 'Азыр картада',
      en: 'Pinned on map',
    },
    openGoogle: {
      ru: 'Маршрут Google Maps',
      kg: 'Google Maps маршруту',
      en: 'Google Maps route',
    },
    openYandex: {
      ru: 'Маршрут Яндекс Карты',
      kg: 'Яндекс Карта маршруту',
      en: 'Yandex Maps route',
    },
    mapProviderLabel: {
      ru: 'Карта:',
      kg: 'Карта:',
      en: 'Map:',
    },
    yandexProvider: {
      ru: 'Яндекс Карты',
      kg: 'Яндекс Карта',
      en: 'Yandex Maps',
    },
    googleProvider: {
      ru: 'Google Maps',
      kg: 'Google Maps',
      en: 'Google Maps',
    },
  },
  reviews: {
    eyebrow: {
      ru: 'Отзывы гостей',
      kg: 'Коноктордун пикирлери',
      en: 'Guest reviews',
    },
    heading: {
      ru: 'Что говорят жители и гости столицы',
      kg: 'Борбордун тургундары жана коноктору эмне дешет',
      en: 'What locals and visitors say',
    },
    socialProofScore: '4.8',
    socialProofText: {
      ru: 'Рейтинг 4.8 на основе 1 200+ отзывов в Google и Яндекс Картах',
      kg: 'Google жана Яндекс Карталардагы 1 200+ пикир боюнча 4.8 рейтинг',
      en: '4.8 rating based on 1,200+ reviews on Google & Yandex Maps',
    },
  },
  booking: {
    eyebrow: {
      ru: 'Быстрая бронь и самовывоз',
      kg: 'Тез брондоо жана алып кетүү',
      en: 'Quick booking & takeaway',
    },
    heading: {
      ru: 'Забронируйте столик или оформите заказ на вынос',
      kg: 'Стол брондоңуз же алып кетүүгө буйрутма бериңиз',
      en: 'Reserve a table or place a takeaway order',
    },
    subtitle: {
      ru: 'Приготовим всё точно ко времени вашего прихода — без очередей и со скидкой 10% при самовывозе.',
      kg: 'Келүү убактыңызга карата кезексиз даярдайбыз — өзүңүз алып кетсеңиз 10% арзандатуу.',
      en: 'Prepared fresh for your arrival time with zero queues—plus 10% off all takeaway orders.',
    },
    modeTable: {
      ru: 'Бронь столика',
      kg: 'Стол брондоо',
      en: 'Table reservation',
    },
    modeTakeaway: {
      ru: 'Самовывоз −10%',
      kg: 'Алып кетүү −10%',
      en: 'Takeaway −10%',
    },
    branchLabel: {
      ru: 'Выберите филиал',
      kg: 'Филиалды тандаңыз',
      en: 'Select branch',
    },
    nameLabel: {
      ru: 'Ваше имя',
      kg: 'Атыңыз',
      en: 'Your name',
    },
    namePlaceholder: {
      ru: 'Например, Нурлан',
      kg: 'Мисалы, Нурлан',
      en: 'e.g., Nurlan',
    },
    phoneLabel: {
      ru: 'Телефон (WhatsApp)',
      kg: 'Телефон (WhatsApp)',
      en: 'Phone (WhatsApp)',
    },
    phonePlaceholder: {
      ru: '+996 555 123 456',
      kg: '+996 555 123 456',
      en: '+996 555 123 456',
    },
    timeLabel: {
      ru: 'Время визита',
      kg: 'Келүү убактысы',
      en: 'Arrival time',
    },
    guestsLabel: {
      ru: 'Количество гостей',
      kg: 'Коноктордун саны',
      en: 'Number of guests',
    },
    dishesLabel: {
      ru: 'Выбранные блюда (можно добавить из меню или ниже)',
      kg: 'Тандалган тамактар (менюдан же төмөндөн кошуңуз)',
      en: 'Selected dishes (add from the menu or below)',
    },
    commentLabel: {
      ru: 'Пожелания к заказу',
      kg: 'Буйрутмага кошумча',
      en: 'Order notes',
    },
    commentPlaceholder: {
      ru: 'Например: без лука, детский стульчик или к 13:15',
      kg: 'Мисалы: пиязсыз, балдар отургучу же саат 13:15ке',
      en: 'e.g., no onion, high chair, or ready by 13:15',
    },
    submitTable: {
      ru: 'Забронировать столик',
      kg: 'Стол брондоо',
      en: 'Confirm reservation',
    },
    submitTakeaway: {
      ru: 'Оформить самовывоз со скидкой 10%',
      kg: '10% арзандатуу менен жөнөтүү',
      en: 'Place takeaway order (10% off)',
    },
    totalLabel: {
      ru: 'Итого со скидкой 10%:',
      kg: '10% арзандатуу менен жыйынтык:',
      en: 'Total with 10% pickup discount:',
    },
    emptyCartHint: {
      ru: 'Выберите блюда из меню выше или добавьте хиты ниже:',
      kg: 'Жогорудагы менюдан тандаңыз же хит тамактарды кошуңуз:',
      en: 'Pick dishes from the menu above or add bestsellers below:',
    },
    errorName: {
      ru: 'Пожалуйста, укажите ваше имя.',
      kg: 'Сураныч, атыңызды жазыңыз.',
      en: 'Please enter your name.',
    },
    errorPhone: {
      ru: 'Введите корректный номер телефона (минимум 9 цифр).',
      kg: 'Туура телефон номерин жазыңыз (кеминде 9 сан).',
      en: 'Please enter a valid phone number (at least 9 digits).',
    },
    errorDishes: {
      ru: 'Для заказа на вынос выберите хотя бы одно блюдо.',
      kg: 'Алып кетүүгө буйрутма берүү үчүн жок дегенде бир тамак тандаңыз.',
      en: 'Please select at least one dish for a takeaway order.',
    },
    successTitleTable: {
      ru: 'Столик предварительно забронирован',
      kg: 'Стол алдын ала брондолду',
      en: 'Table provisionally reserved',
    },
    successTitleTakeaway: {
      ru: 'Заказ на самовывоз принят',
      kg: 'Алып кетүүгө буйрутма кабыл алынды',
      en: 'Takeaway order received',
    },
    successNote: {
      ru: 'Администратор выбранного филиала свяжется с вами в течение 5 минут для подтверждения.',
      kg: 'Тандалган филиалдын администратору тастыктоо үчүн 5 мүнөттүн ичинде байланышат.',
      en: 'The branch host will contact you within 5 minutes to confirm.',
    },
    newRequest: {
      ru: 'Оформить ещё одну заявку',
      kg: 'Дагы бир өтүнмө калтыруу',
      en: 'Submit another request',
    },
    decreaseItem: {
      ru: 'Уменьшить',
      kg: 'Азайтуу',
      en: 'Decrease',
    },
    increaseItem: {
      ru: 'Добавить',
      kg: 'Кошуу',
      en: 'Add',
    },
  },
  footer: {
    tagline: {
      ru: 'Сеть национальных столовых в Бишкеке. Домашние рецепты, фермерское мясо Халяль и гостеприимство каждый день с 08:00 до 23:00.',
      kg: 'Бишкектеги улуттук ашканалар тармагы. Үй рецепттери, Халал фермердик эт жана күн сайын 08:00дөн 23:00гө чейин меймандостук.',
      en: 'A chain of national dining halls in Bishkek. Home recipes, Halal farm meat, and warm hospitality every day from 08:00 to 23:00.',
    },
    branchesTitle: {
      ru: 'Адреса филиалов',
      kg: 'Филиалдардын даректери',
      en: 'Branch addresses',
    },
    socialTitle: {
      ru: 'Связь и соцсети',
      kg: 'Байланыш жана соцтармактар',
      en: 'Contacts & social',
    },
    copyright: {
      ru: '© 2026 «Файз таом», г. Бишкек. Все права защищены.',
      kg: '© 2026 «Файз таом», Бишкек ш. Бардык укуктар корголгон.',
      en: '© 2026 Faiz Taom, Bishkek. All rights reserved.',
    },
  },
} as const;
