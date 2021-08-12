/* global db print */
/* eslint no-restricted-globals: "off" */

db.dishes.remove({});
db.stocks.remove({});
db.comments.remove({});

const DISHES = [
  {
    id: 1,
    dishId: 101,
    name: 'Shrimp Dumplings/Ha Kao',
    image: '/image/101.png',
    category: 'steamed',
    price: 6.50,
    description: 'These shrimp dumplings are transparent and smooth. '
      + 'The prawn dumplings first appeared in Guangzhou outskirts near '
      + 'the creek bazaar Deli. This dish is said to be the one that the '
      + 'skill of a dim sum chef is judged on. Traditionally, ha gow should '
      + 'have at least seven and preferably ten or more pleats imprinted on '
      + 'its wrapper. The skin must be thin and translucent, yet be sturdy '
      + 'enough not to break when picked up with chopsticks. It must not stick '
      + 'to the paper, container or the other ha gow in the basket. The shrimp '
      + 'must be cooked well, but not overcooked. The amount of meat should be '
      + 'generous, yet not so much that it cannot be eaten in one bite.',
  },
  {
    id: 2,
    dishId: 102,
    name: 'Pork Siu Mai',
    image: '/image/102.png',
    category: 'steamed',
    price: 6.50,
    description: 'As prepared in Cantonese cuisine, siumaai is also referred to '
      + 'as "pork and mushroom dumpling". Its standard filling consists primarily '
      + 'of ground pork, small whole or chopped shrimp, Chinese black mushroom, green '
      + 'onion (also called scallion) and ginger with seasonings of Chinese rice wine '
      + '(e.g. Shaoxing rice wine), soy sauce, sesame oil and chicken stock. Bamboo '
      + 'shoots, water chestnuts and pepper can also be added. The outer covering is '
      + 'made of a thin sheet of lye water dough, which is either yellow or white. The '
      + 'center is usually garnished with an orange dot, made of crab roe or diced carrot, '
      + 'although a green dot made with a pea may be used.',
  },
  {
    id: 3,
    dishId: 103,
    name: 'Chicken Feet w/Black Bean Sauce',
    image: '/image/103.png',
    category: 'steamed',
    price: 5.50,
    description: 'Chicken Feet are deep fried and steamed first to make them puffy '
      + 'before being stewed and simmered in a sauce flavoured with black fermented '
      + 'beans, bean paste, and sugar or in abalone sauce.',
  },
  {
    id: 4,
    dishId: 104,
    name: 'Spareribs w/Black Bean Sauce',
    image: '/image/104.png',
    category: 'steamed',
    price: 5.50,
    description: 'Steamed pork spare ribs with douchi - salty and fermented black '
      + 'soybeans and garlic and chili',
  },
  {
    id: 5,
    dishId: 105,
    name: 'Beef Balls',
    image: '/image/105.png',
    category: 'steamed',
    price: 5.50,
    description: 'Beef ball is a commonly cooked food in Cantonese and overseas Chinese '
      + 'communities which was originated by Teochew people. As the name suggests, the '
      + 'ball is made of beef that has been finely pulverized. They are easily distinguishable '
      + 'from fish balls due to their darker color. Another characteristic is the tiny pieces '
      + 'of tendon in each ball will dissolve with prolonged cooking.',
  },
  {
    id: 6,
    dishId: 106,
    name: 'Bean Curd Skin Roll in Oyster Sauce',
    image: '/image/106.png',
    category: 'steamed',
    price: 5.50,
    description: 'The bamboo steamed version is generally known as (鮮竹捲, sin zuk gyun). '
      + 'It is wrapped with dried tofu skin (腐竹, fu zhu). During the cooking process, the '
      + 'tofu skin is hydrated. It makes the roll very soft and tender. The steamed tofu skin '
      + 'rolls often contain bamboo shoots.',
  },
  {
    id: 7,
    dishId: 107,
    name: 'Bean Curd w/Shrimp Paste',
    image: '/image/107.png',
    category: 'steamed',
    price: 5.50,
    description: 'Tofu filled with ground meat mixture and shrimp paste. Variation of this '
      + 'food include vegetables and mushrooms stuffed with ground meat or surimi. Yong tau '
      + 'foo is eaten in numerous ways, either dry with a sauce or served as a soup dish.',
  },
  {
    id: 8,
    dishId: 108,
    name: 'Steam Shrimp Ball w/Sticky Rice',
    image: '/image/108.png',
    category: 'steamed',
    price: 6.50,
    description: 'Also called pearl meatballs. This is because after steaming, the rice '
      + 'coating makes the meatballs look like giant pearls from a distant. It is made of '
      + 'ground pork meat mixture with vegetables, then coating with glutinous rice',
  },
  {
    id: 9,
    dishId: 109,
    name: 'Braised Beef Tripe',
    image: '/image/109.png',
    category: 'steamed',
    price: 6.50,
    description: 'Marinating with a master stock is a specialty of Teochew cuisine, and it '
      + 'holds an irreplaceable position in the world of Guangdong cooking. Reticulum tripe, '
      + 'also known as honeycomb tripe, comes from one of the four chambers of a cow stomach. '
      + 'Marinated Dim Sum Beef Tripe must have a soft and pliable texture and a tasty and '
      + 'refreshing flavor. Thus, the greatest Marinated Dim Sum Beef Tripe dishes are those '
      + 'that can maintain the pliability of the tripe throughout the marinating process.',
  },
  {
    id: 10,
    dishId: 110,
    name: 'Sticky Rice in Lotus Leaf',
    image: '/image/110.png',
    category: 'steamed',
    price: 6.50,
    description: 'Lo mai gai is mostly a southern Chinese food. It contains glutinous rice '
      + 'filled with chicken, Chinese mushrooms, Chinese sausage, scallions, and sometimes '
      + 'dried shrimp or salted egg. The ball of rice is then wrapped in a dried lotus leaf and steamed.',
  },
  {
    id: 11,
    dishId: 111,
    name: 'Steam BBQ Pork Buns',
    image: '/image/111.png',
    category: 'steamed',
    price: 4.50,
    description: 'The traditional steamed version of cha siu bao. Although visually similar to other '
      + 'types of steamed baozi, the dough of steamed cha siu bao is unique since it makes use of both '
      + 'yeast and baking powder as leavening.[3][4] This unique mix of leavening gives the dough of cha '
      + 'siu bao the texture of a slightly dense, but fine soft bread. Encased in the center of the bun is '
      + 'tender, sweet, slow-roasted pork tenderloin. This cha siu is diced, and then mixed into a syrupy '
      + 'mixture of oyster sauce, hoisin sauce, roasted sesame seed oil, rice vinegar, shaoxing wine or dry '
      + 'sherry, soy sauce, sugar, and cornstarch.',
  },
  {
    id: 12,
    dishId: 112,
    name: 'Shrimp & Chive Dumpling',
    image: '/image/112.png',
    category: 'steamed',
    price: 5.50,
    description: 'Chewy Chinese chive dumplings (jiu cai jiao) are a delicious treat! They are filled with a '
      + 'hearty shrimp and chive dumpling filling, perfect for a pescatarian dim sum feast. These chive dumplings '
      + 'are called jiu cai jiao (韭菜饺) or occasionally jiu cai bao (韭菜包) in Mandarin. Jiu cai is Mandarin for '
      + 'chive. Jiao refers to small, transparent dumplings that are Hong Kong style and common in dim sum restaurants.',
  },
  {
    id: 13,
    dishId: 113,
    name: 'Golden Cream Buns',
    image: '/image/113.png',
    category: 'steamed',
    price: 5.50,
    description: 'Chinese custard bao (Liu Sha Bao). This is a deliciously sweet and salty dessert. The filling is '
      + 'a little sweet, creamy, and most noticeably the slightly salty, sandy and lava-like texture of the mashed '
      + 'salted eggs yolk. The molten, lava-like filling is the characteristic of this unique Cantonese dim sum.',
  },
  {
    id: 14,
    dishId: 114,
    name: 'Beef Tripe',
    image: '/image/114.png',
    category: 'steamed',
    price: 5.50,
    description: 'Dim Sum Tripe Stew is one of those dishes that you either love or won’t touch with a ten foot '
      + 'pole. Like many of these old and classic dishes, there usually is a variety of organ meats included in this '
      + 'dish. It is served with ginger and scallions for a lighter taste and chewy.',
  },
  {
    id: 15,
    dishId: 115,
    name: 'Egg Cream Buns',
    image: '/image/115.png',
    category: 'steamed',
    price: 5.50,
    description: 'Chinese steamed custard buns also called Nai Wong Bao are deliciously sweet dessert. '
      + 'Also called custard bun with a rich flavor of milk and egg yolk.',
  },
  {
    id: 16,
    dishId: 201,
    name: 'Portuguese Egg White Tarts',
    image: '/image/201.png',
    category: 'baked',
    price: 6.50,
    description: 'If you have ever been to Portugal, you know that one of the greatest pastries to '
      + 'binge-eat there is the Portuguese egg tart: its crisp, flaky crust holding a creamy custard '
      + 'center, blistered on top from the high heat of an oven.',
  },
  {
    id: 17,
    dishId: 202,
    name: 'Egg Tarts',
    image: '/image/202.png',
    category: 'baked',
    price: 5.50,
    description: 'The egg tart, featuring a lard-based puff pastry crust and a filling similar to '
      + 'steamed egg pudding (燉蛋), was invented by a department store for one of these "Weekly Special" '
      + 'competitions. The Zhen Guang Restaurant in Guangzhou is also credited with inventing the Chinese egg tart.',
  },
  {
    id: 18,
    dishId: 203,
    name: 'Baked BBQ Buns',
    image: '/image/203.png',
    category: 'baked',
    price: 4.50,
    description: 'The traditional steamed version of cha siu bao. Although visually similar to other '
      + 'types of steamed baozi, the dough of steamed cha siu bao is unique since it makes use of both '
      + 'yeast and baking powder as leavening.[3][4] This unique mix of leavening gives the dough of cha '
      + 'siu bao the texture of a slightly dense, but fine soft bread. Encased in the center of the bun is '
      + 'tender, sweet, slow-roasted pork tenderloin. This cha siu is diced, and then mixed into a syrupy '
      + 'mixture of oyster sauce, hoisin sauce, roasted sesame seed oil, rice vinegar, shaoxing wine or dry '
      + 'sherry, soy sauce, sugar, and cornstarch.',
  },
  {
    id: 19,
    dishId: 204,
    name: 'Pineapple Buns w/Salted Egg Yok',
    image: '/image/204.png',
    category: 'baked',
    price: 5.50,
    description: 'The top of the pineapple bun (the part which is made to resemble a pineapple) is '
      + 'made of a dough similar to that used to make sugar cookies, which consists of sugar, eggs, flour, '
      + 'and lard. It is crunchy and is quite sweet compared to the bread underneath. The bread dough underneath '
      + 'is that of which is used in Hong Kong-style breads, which is a softer and sweeter dough than in European '
      + 'breads. It is popular at breakfast or afternoon tea. Although it is known as a "pineapple bun", the '
      + 'traditional version contains no pineapple. The name originated from the fact that its sugary top crust '
      + 'is cooked to a golden-brown colour, and because its checkered top resembles the epicarp of a pineapple.',
  },
  {
    id: 20,
    dishId: 205,
    name: 'Pineapple Buns w/Egg Cream',
    image: '/image/205.png',
    category: 'baked',
    price: 5.50,
    description: 'The top of the pineapple bun (the part which is made to resemble a pineapple) is '
      + 'made of a dough similar to that used to make sugar cookies, which consists of sugar, eggs, flour, '
      + 'and lard. It is crunchy and is quite sweet compared to the bread underneath. The bread dough underneath '
      + 'is that of which is used in Hong Kong-style breads, which is a softer and sweeter dough than in European '
      + 'breads. It is popular at breakfast or afternoon tea. Although it is known as a "pineapple bun", the '
      + 'traditional version contains no pineapple. The name originated from the fact that its sugary top crust '
      + 'is cooked to a golden-brown colour, and because its checkered top resembles the epicarp of a pineapple.',
  },
  {
    id: 21,
    dishId: 301,
    name: 'Bread Sticks',
    image: '/image/301.png',
    category: 'fried',
    price: 3.50,
    description: 'Youtiao is a long golden-brown deep-fried strip of dough commonly eaten in China and '
      + '(by a variety of other names) in other East and Southeast Asian cuisines. Conventionally, youtiao '
      + 'are lightly salted and made so they can be torn lengthwise in two. Youtiao are normally eaten at '
      + 'breakfast as an accompaniment for rice congee, soy milk or regular milk blended with sugar. Youtiao '
      + 'may be known elsewhere as Chinese cruller, Chinese fried churro, Chinese oil stick, Chinese doughnut, '
      + 'Chinese breadstick, and fried breadstick.',
  },
  {
    id: 22,
    dishId: 302,
    name: 'Fried Shrimp Ball',
    image: '/image/302.png',
    category: 'fried',
    price: 6.50,
    description: 'Crispy and crunchy shrimp balls, a popular and delicious Chinese appetizer.',
  },
  {
    id: 23,
    dishId: 303,
    name: 'Fried Seafood Roll',
    image: '/image/303.png',
    category: 'fried',
    price: 6.50,
    description: 'The fried version is known as (腐皮捲, fu pei gyun). The first character "fu" comes '
      + 'from tofu, though a more accurate description is that the skin is made from the ingredient bean '
      + 'curd. Some Cantonese restaurants serve the fried crispy version with mayonnaise as dipping sauce. '
      + 'Ingredients include shrimp, chicken, leeks, bamboo shoots, small carrots, tofu, scallions, sesame '
      + 'oil, or bean sprouts.',
  },
  {
    id: 24,
    dishId: 304,
    name: 'Pork Dumplings',
    image: '/image/304.png',
    category: 'fried',
    price: 4.50,
    description: 'These pillow soft Ham Sui Gok (FRIED GLUTINOUS RICE DUMPLINGS) are fried until bubbly, '
      + 'golden and iconicly chewy. Its crispy skin and savory, juicy filling work in concert to bring out '
      + 'the best taste possible.',
  },
  {
    id: 25,
    dishId: 305,
    name: 'Eggplant Stuffed w/Shrimp Pasted',
    image: '/image/305.png',
    category: 'fried',
    price: 6.50,
    description: 'Fried eggplant filled with ground shrimp paste.',
  },
  {
    id: 26,
    dishId: 306,
    name: 'Taro Gok',
    image: '/image/306.png',
    category: 'fried',
    price: 5.50,
    description: 'The outer shell is made from a thick layer of taro that has been boiled and mashed. '
      + 'The filling is made from seasoned ground pork. The dumpling is deep fried, and the outermost '
      + 'layer of taro becomes crisp, light, and fluffy.',
  },
  {
    id: 27,
    dishId: 307,
    name: 'Sesame Balls',
    image: '/image/307.png',
    category: 'fried',
    price: 4.50,
    description: 'Jiandui is a type of fried Chinese pastry made from glutinous rice flour. The pastry '
      + 'is coated with sesame seeds on the outside and is crisp and chewy. Inside the pastry is a large '
      + 'hollow, caused by the expansion of the dough. The hollow of the pastry is filled with a filling '
      + 'of red bean paste. They are also sometimes referred to as sesame balls.',
  },
  {
    id: 28,
    dishId: 308,
    name: 'Crispy Durian Puff',
    image: '/image/308.png',
    category: 'fried',
    price: 6.50,
    description: 'Our Durian puffs are the perfect bite-sized heaven for durian lovers! Our pastries '
      + 'are backed to perfection which results in a soft and crispy outer layer. The filling is filled '
      + 'to the brim with real Mao Shan Want durian. As you sink your teeth into our durian puff, you can '
      + 'feel the strong burst of flavour that will melt amazingly in your mouth.',
  },
  {
    id: 29,
    dishId: 309,
    name: 'Spring Roll',
    image: '/image/309.png',
    category: 'fried',
    price: 4.50,
    description: 'Spring roll is a fried dish usually available as a dim sum. They contain minced pork, '
      + 'shredded carrot, bean sprouts and other vegetables served with Dipping sauce.',
  },
  {
    id: 30,
    dishId: 401,
    name: 'Pan Fried Turnip Cake',
    image: '/image/401.png',
    category: 'pan-fried',
    price: 4.50,
    description: 'They are cut into rectangular slices and pan-fried before serving. Each pan-fried cake '
      + 'has a thin crunchy layer on the outside from frying, and is soft on the inside. It is one of the '
      + 'standard dishes found in the dim sum cuisine of China as well as overseas Chinatown restaurants. '
      + 'It is also commonly eaten during Chinese New Year, since the word for radish (菜頭, chhài-thâu) is '
      + 'a homophone for "good fortune" (好彩頭, hó-chhái-thâu) in the Hokkien language.',
  },
  {
    id: 31,
    dishId: 402,
    name: 'Shanghai Pan Fried Buns',
    image: '/image/402.png',
    category: 'pan-fried',
    price: 5.50,
    description: 'Shengjian is made from semi-leavened dough, wrapped around pork and gelatin fillings. '
      + 'Chopped green onions and sesame are placed atop the buns during the cooking process.',
  },
  {
    id: 32,
    dishId: 403,
    name: 'Pork w/Vegetable Pot Stiker',
    image: '/image/403.png',
    category: 'pan-fried',
    price: 5.50,
    description: 'Guangdong gaau ji are rarely home-made because the wrapper, which needs to be thin but '
      + 'tough enough to not break, is more difficult to make. Pan-fried dumplings can be joined together by '
      + 'a brown, crispy lattice base created by pouring a flour and water mix into the pan at the end of cooking.',
  },
  {
    id: 33,
    dishId: 501,
    name: 'Steam BBQ Pork Rice Roll',
    image: '/image/501.png',
    category: 'rice roll-congee',
    price: 5.50,
    description: 'A rice noodle roll (also translated as steamed rice roll) is a Cantonese dish from '
      + 'Guangdong Province in southern China and Hong Kong, commonly served either as a snack, small '
      + 'meal or variety of dim sum. It is a thin roll made from a wide strip of shahe fen (rice noodles), '
      + 'filled with BBQ pork. Seasoned soy sauce—sometimes with siu mei drippings—is poured over the dish upon serving.',
  },
  {
    id: 34,
    dishId: 502,
    name: 'Steam Beef Rice Roll w/Parsley',
    image: '/image/502.png',
    category: 'rice roll-congee',
    price: 5.50,
    description: 'A rice noodle roll (also translated as steamed rice roll) is a Cantonese dish from '
      + 'Guangdong Province in southern China and Hong Kong, commonly served either as a snack, small '
      + 'meal or variety of dim sum. It is a thin roll made from a wide strip of shahe fen (rice noodles), '
      + 'filled with beef and parsley. Seasoned soy sauce—sometimes with siu mei drippings—is poured over '
      + 'the dish upon serving.',
  },
  {
    id: 35,
    dishId: 503,
    name: 'Steam Shrimp Rice Roll',
    image: '/image/503.png',
    category: 'rice roll-congee',
    price: 6.50,
    description: 'A rice noodle roll (also translated as steamed rice roll) is a Cantonese dish from '
      + 'Guangdong Province in southern China and Hong Kong, commonly served either as a snack, small '
      + 'meal or variety of dim sum. It is a thin roll made from a wide strip of shahe fen (rice noodles), '
      + 'filled with shrimp. Seasoned soy sauce—sometimes with siu mei drippings—is poured over '
      + 'the dish upon serving.',
  },
  {
    id: 36,
    dishId: 504,
    name: 'Steam Golden Shrimp Rice Roll',
    image: '/image/504.png',
    category: 'rice roll-congee',
    price: 9.25,
    description: 'A rice noodle roll (also translated as steamed rice roll) is a Cantonese dish from '
      + 'Guangdong Province in southern China and Hong Kong, commonly served either as a snack, small '
      + 'meal or variety of dim sum. It is a thin roll made from a wide strip of shahe fen (rice noodles), '
      + 'filled with shrimp and smeshed salted egg yolk. Seasoned soy sauce—sometimes with siu mei '
      + 'drippings—is poured over the dish upon serving.',
  },
  {
    id: 37,
    dishId: 505,
    name: 'Steam Rice Roll w/Bread Stick',
    image: '/image/505.png',
    category: 'rice roll-congee',
    price: 5.50,
    description: 'Zhaliang (Chinese: 炸兩; Cantonese Yale: jaléung) is a Cantonese dim sum. It is '
      + 'made by tightly wrapping rice noodle roll around youtiao (fried dough). It is often served '
      + 'doused in soy sauce, hoisin sauce or sesame paste and sprinkled with sesame seeds.',
  },
  {
    id: 38,
    dishId: 506,
    name: 'Preserved Egg & Pork Congee',
    image: '/image/506.png',
    category: 'rice roll-congee',
    price: 11.00,
    description: 'Chinese Congee is a warm and comforting rice porridge. Preserved century eggs and '
      + 'pork, make this pork congee recipe a flavorful, savory dish with hints of salt from the century '
      + 'eggs. Preserved century egg is usually a duck egg, that is preserved in ash, clay, salt, quicklime '
      + 'and rice hulls for an extended period of time. The egg yolk turns into a dark green/grey colour '
      + 'and becomes very creamy during the curing process. The egg whites turn a translucent dark brown/black '
      + 'colour with a texture similar to jelly.',
  },
  {
    id: 39,
    dishId: 601,
    name: 'Water Chestnut Cake',
    image: '/image/601.png',
    category: 'desserts',
    price: 4.50,
    description: 'Water chestnut cake (traditional Chinese: 馬蹄糕; simplified Chinese: 马蹄糕; '
      + 'Cantonese Yale: máhtài gōu) is a sweet Cantonese dim sum dish made of shredded Chinese water '
      + 'chestnut. When served during dim sum, the cake is cut into square-shaped slices before serving. '
      + 'The cake is soft and the cake is made with chopped water chestnuts embedded into each square '
      + 'piece with the vegetable being visible. One of the main trademark characteristics of the dish '
      + 'is its translucent appearance.',
  },
  {
    id: 40,
    dishId: 602,
    name: 'Mango Pudding',
    image: '/image/602.png',
    category: 'desserts',
    price: 4.50,
    description: 'Mango pudding is a very popular dessert in Hong Kong, where pudding is eaten as a '
      + 'traditional British food. The dessert is also found in Singapore, Malaysia, Thailand, Macau. '
      + 'The fresh variant consists of agar or gelatin, mangoes, evaporated milk, and sugar. In addition, '
      + 'fresh fruit mango added as garnish. Served and eaten refrigerator cold, mango pudding has a rich '
      + 'and creamy texture.',
  },
];

db.dishes.insertMany(DISHES);
const count = db.dishes.count();
print('Inserted ', count, ' dishes');

db.dishes.createIndex({ id: 1 }, { unique: true });
db.dishes.createIndex({ dishId: 1 }, { unique: true });
db.dishes.createIndex({ category: 1 });
db.dishes.createIndex({ name: 'text', description: 'text' });

const dishes = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
  201, 202, 203, 204, 205, 301, 302, 303, 304, 305, 306, 307, 308, 309, 401, 402, 403,
  501, 502, 503, 504, 505, 506, 601, 602];

const STOCKS = [];
for (let k = 0; k < dishes.length; k += 1) {
  const dishId = dishes[k];
  const stock = 100;
  const dishStock = { dishId, stock };
  STOCKS.push(dishStock);
}

db.stocks.insertMany(STOCKS);
print('Updated ', db.stocks.count(), ' stocks of dishes');
db.stocks.createIndex({ dishId: 1 }, { unique: true });

const COMMENTS = [];
const authors = ['Ravan', 'Eddie', 'Pieta', 'John', 'Victor', 'Nate', 'Fay', 'Ron', 'David',
  'Cindy', 'Ella', 'Hellen', 'Polar', 'Nini', 'Bella'];
const rates = [1, 2, 3, 4, 5];

for (let i = 0; i < dishes.length; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    const id = i * 10 + j + 1;
    const dishId = dishes[i];
    const rating = rates[Math.floor(Math.random() * 5)];
    const comment = `This is a MUST try! I will definately order this dish again. ${j}`;
    const author = authors[[Math.floor(Math.random() * 15)]];
    const randomCreatedDate = (new Date())
      - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
    const date = new Date(randomCreatedDate);
    const dishComment = {
      id, dishId, rating, comment, author, date,
    };
    COMMENTS.push(dishComment);
  }
}

db.comments.insertMany(COMMENTS);
const commentCount = db.comments.count();
print('Inserted ', commentCount, ' comments');

db.counters.remove({ _id: 'comments' });
db.counters.insert({ _id: 'comments', current: commentCount });

db.comments.createIndex({ id: 1 }, { unique: true });
db.comments.createIndex({ dishId: 1 });
db.comments.createIndex({ rating: 1 });
db.comments.createIndex({ date: 1 });
