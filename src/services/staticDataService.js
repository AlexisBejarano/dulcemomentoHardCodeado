// Datos estáticos de productos
const staticProducts = [
  {
    id: '1',
    name: 'Palmeritas de Hojaldre',
    description: 'Deliciosas palmeritas de hojaldre crujientes, espolvoreadas con canela y azúcar. Perfectas para un snack dulce y fácil de comer.',
    imageSrc: '/images/snacks/palmeritas-hojaldre.jpg',
    yield: '8',
    station: 'Todas',
    category: 'snacks',
    rating: '4.7',
    price: '5.50',
    highlight: '1'
  },
  {
    id: '2',
    name: 'Brownies Bites',
    description: 'Pequeños y densos cuadrados de brownie de chocolate intenso, con trocitos de nuez. Ideales para un bocado rápido y satisfactorio.',
    imageSrc: '/images/snacks/brownies-bites.jpg',
    yield: '12',
    station: 'Otoño, Invierno',
    category: 'snacks',
    rating: '4.9',
    price: '7.80',
    highlight: '0'
  },
  {
    id: '3',
    name: 'Galletas de Avena y Pasas',
    description: 'Galletas chewy y saludables hechas con copos de avena, canela y jugosas pasas. Un snack clásico y reconfortante.',
    imageSrc: '/images/snacks/galletas-avena-pasas.jpg',
    yield: '10',
    station: 'Todas',
    category: 'snacks',
    rating: '4.5',
    price: '6.00',
    highlight: '0'
  },
  {
    id: '4',
    name: 'Palomitas de Caramelo',
    description: 'Crujientes palomitas de maíz bañadas en un delicioso caramelo casero, formando una mezcla perfecta de dulce y salado.',
    imageSrc: '/images/snacks/palomitas-caramelo.jpg',
    yield: '6',
    station: 'Invierno',
    category: 'snacks',
    rating: '4.6',
    price: '4.50',
    highlight: '1'
  },
  {
    id: '5',
    name: 'Barritas de Cereal y Frutos Secos',
    description: 'Barritas energéticas caseras con cereales, miel, almendras y arándanos deshidratados. Un snack saludable y lleno de energía.',
    imageSrc: '/images/snacks/barritas-cereal.jpg',
    yield: '8',
    station: 'Primavera, Verano',
    category: 'snacks',
    rating: '4.4',
    price: '5.20',
    highlight: '1'
  },
  {
    id: '6',
    name: 'Tartaletas de Manzana Mini',
    description: 'Pequeñas tartaletas con una base de masa quebrada y un relleno suave y aromático de compota de manzana con un toque de canela.',
    imageSrc: '/images/snacks/tartaletas-manzana.jpg',
    yield: '8',
    station: 'Otoño',
    category: 'snacks',
    rating: '4.8',
    price: '8.50',
    highlight: '0'
  },
  {
    id: '7',
    name: 'Pretzels Cubiertos de Chocolate',
    description: 'Suaves pretzels horneados, parcialmente cubiertos con un glaseado de chocolate negro. La combinación perfecta entre salado y dulce.',
    imageSrc: '/images/snacks/pretzels-chocolate.jpg',
    yield: '10',
    station: 'Todas',
    category: 'snacks',
    rating: '4.3',
    price: '6.80',
    highlight: '0'
  },
  {
    id: '8',
    name: 'Bolitas de Coco (Coconut Bliss Balls)',
    description: 'Deliciosas bolitas sin horno hechas con coco rallado, avena y miel. Un snack rápido, saludable y muy adictivo.',
    imageSrc: '/images/snacks/bolitas-coco.jpg',
    yield: '12',
    station: 'Primavera, Verano',
    category: 'snacks',
    rating: '4.5',
    price: '5.00',
    highlight: '1'
  },
  {
    id: '9',
    name: 'Cruasanes Mini de Chocolate',
    description: 'Mini cruasanes de masa hojaldrada con una sorpresa de chocolate en su interior. Perfectos para acompañar un café o para picar.',
    imageSrc: '/images/snacks/mini-cruasanes-chocolate.jpg',
    yield: '12',
    station: 'Todas',
    category: 'snacks',
    rating: '4.7',
    price: '7.00',
    highlight: '0'
  },
  {
    id: '10',
    name: 'Churros en Miniatura',
    description: 'Pequeños churros crujientes, espolvoreados con azúcar y canela. Se sirven con una salsa de chocolate caliente para dipping.',
    imageSrc: '/images/snacks/mini-churros.jpg',
    yield: '6',
    station: 'Otoño, Invierno',
    category: 'snacks',
    rating: '4.9',
    price: '6.50',
    highlight: '1'
  },
  {
    id: '11',
    name: 'Pastel de Tres Leches',
    description: 'Esponjoso bizcocho bañado en una mezcla de tres leches, coronado con un suave merengue y canela. Un clásico irresistiblemente húmedo y dulce.',
    imageSrc: '/images/pasteles/tres-leches.jpg',
    yield: '12',
    station: 'Primavera, Verano',
    category: 'pasteleria',
    rating: '4.9',
    price: '45.00',
    highlight: '0'
  },
  {
    id: '12',
    name: 'Red Velvet',
    description: 'Pastel de terciopelo rojo con un sutil sabor a cacao, capas de un intenso color rojo y un frosting de queso crema suave y ligeramente ácido.',
    imageSrc: '/images/pasteles/red-velvet.jpg',
    yield: '16',
    station: 'Otoño, Invierno',
    category: 'pasteleria',
    rating: '4.8',
    price: '55.00',
    highlight: '0'
  },
  {
    id: '13',
    name: 'Pastel de Zanahoria',
    description: 'Húmedo pastel de zanahoria con nueces y especias, cubierto con un delicioso frosting de queso crema. Un clásico reconfortante.',
    imageSrc: '/images/pasteles/zanahoria.jpg',
    yield: '14',
    station: 'Otoño, Invierno',
    category: 'pasteleria',
    rating: '4.7',
    price: '48.00',
    highlight: '1'
  },
  {
    id: '14',
    name: 'Chocolate Supremo',
    description: 'Pastel de chocolate intenso y húmedo, con relleno de ganache y cubierto con un glaseado de chocolate semiamargo. Para los más chocolateros.',
    imageSrc: '/images/pasteles/chocolate-supremo.jpg',
    yield: '12',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4.9',
    price: '52.00',
    highlight: '1'
  },
  {
    id: '15',
    name: 'Pastel de Fresas con Crema',
    description: 'Delicadas capas de bizcocho vainilla empapado en almíbar, rellenas de fresas frescas y crema batida ligera. Frescura y suavidad en cada bocado.',
    imageSrc: '/images/pasteles/fresas-crema.jpg',
    yield: '10',
    station: 'Primavera, Verano',
    category: 'pasteleria',
    rating: '4.8',
    price: '46.00',
    highlight: '1'
  },
  {
    id: '16',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Suave y cremoso cheesecake horneado sobre una base de galleta, coronado con una compota casera de frutos rojos (frambuesas, arándanos, moras).',
    imageSrc: '/images/pasteles/cheesecake-frutos-rojos.jpg',
    yield: '12',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4.9',
    price: '58.00',
    highlight: '0'
  },
  {
    id: '17',
    name: 'Pastel de Limón Merengue',
    description: 'Crujiente base de masa quebrada, cremosa y ácida crema de limón, y un esponjoso merengue tostado. Un equilibrio perfecto de sabores.',
    imageSrc: '/images/pasteles/limon-merengue.jpg',
    yield: '10',
    station: 'Primavera, Verano',
    category: 'pasteleria',
    rating: '4.6',
    price: '42.00',
    highlight: '0'
  },
  {
    id: '18',
    name: 'Opera Cake',
    description: 'Fino pastel francés con capas de bizcocho de almendra empapado en café, ganache de chocolate y crema de mantequilla de café. Elegancia y sofisticación.',
    imageSrc: '/images/pasteles/opera-cake.jpg',
    yield: '14',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4.9',
    price: '65.00',
    highlight: '1'
  },
  {
    id: '19',
    name: 'Pastel de Vainilla y Frambuesas',
    description: 'Clásico pastel de vainilla con un toque de almendra, intercalado con mermelada de frambuesa y buttercream de vainilla. Simple y delicioso.',
    imageSrc: '/images/pasteles/vainilla-frambuesa.jpg',
    yield: '12',
    station: 'Primavera, Verano',
    category: 'pasteleria',
    rating: '4.7',
    price: '49.00',
    highlight: '0'
  },
  {
    id: '20',
    name: 'Pastel de Café y Avellana',
    description: 'Bizcocho de café húmedo, relleno de crema de avellana (Nutella) y buttercream de café. Ideal para acompañar con un buen café.',
    imageSrc: '/images/pasteles/cafe-avellana.jpg',
    yield: '12',
    station: 'Otoño, Invierno',
    category: 'pasteleria',
    rating: '4.8',
    price: '54.00',
    highlight: '1'
  }
];

// Datos estáticos de recetas
const staticRecipes = [
  {
    id: '1',
    name: 'Tarta Sacher',
    autor: 'Ana Martínez',
    description: 'Clásica tarta austriaca de chocolate con finas capas de bizcocho y mermelada de albaricoque, cubierta con un glacé de chocolate intenso.',
    imageSrc: '/images/recipes/sacher-tarta.jpg',
    yield: '12',
    station: 'Invierno',
    category: 'pasteleria',
    rating: '3',
    cookingTime: '2 hrs 30 min',
    cookingMethod: 'Hornear',
    difficulty: 'Hard',
    servingOccasion: 'Celebraciones especiales, Navidad',
    miseEnPlace: 'Precalentar horno a 180°C. Engrasar y enharinar molde de 24cm. Preparar todos los ingredientes a temperatura ambiente.',
    preparation: 'Comenzar batiendo mantequilla con azúcar. Incorporar huevos uno a uno. Alternar harina con chocolate derretido. Hornear 45 min. Enfriar y cubrir con mermelada y glaze de chocolate.',
    ingredients: 'Chocolate negro, 200g. Mantequilla, 150g. Azúcar glass, 120g. Huevos, 6 unidades. Harina de repostería, 150g. Mermelada de albaricoque, 200g. Chocolate para cobertura, 300g.',
    notes: 'Dejar enfriar completamente antes de desmoldar. La mermelada debe estar a temperatura ambiente para un mejor extendido.',
    region: 'Austriaca',
    glossary: 'Glaseado: Cobertura brillante de chocolate. Bizcocho: Masa esponjosa base para tartas.'
  },
  {
    id: '2',
    name: 'Cheesecake Horneado de Vainilla',
    autor: 'Carlos Rodríguez',
    description: 'Suave y cremoso cheesecake con una base crujiente de galleta, aromatizado con vainilla natural y horneado a baja temperatura.',
    imageSrc: '/images/recipes/cheesecake-vainilla.jpg',
    yield: '10',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '5 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Cenas elegantes, Cumpleaños',
    miseEnPlace: 'Precalentar horno a 160°C. Triturar galletas para base. Mantener ingredientes a temperatura ambiente.',
    preparation: 'Mezclar galletas trituradas con mantequilla. Formar base en molde. Batir queso crema con azúcar hasta cremoso. Añadir huevos uno a uno. Incorporar crema y vainilla. Hornear al baño María 1 hora.',
    ingredients: 'Queso crema, 600g. Galletas digestive, 200g. Mantequilla, 100g. Azúcar, 150g. Huevos, 3 unidades. Crema de leche, 200ml. Esencia de vainilla, 2 cucharaditas.',
    notes: 'No abrir el horno durante la cocción. Enfriar gradualmente dentro del horno apagado.',
    region: 'Americana',
    glossary: 'Baño María: Cocción suave con agua caliente alrededor del molde.'
  },
  {
    id: '3',
    name: 'Croissants Artesanales',
    autor: 'María López',
    description: 'Crujientes y ligeros croissants de masa hojaldrada con mantequilla, perfectamente dorados y con su característica miga alveolada.',
    imageSrc: '/images/recipes/croissants.jpg',
    yield: '16',
    station: 'Todas',
    category: 'pasteleria',
    rating: '5',
    cookingTime: '8 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Hard',
    servingOccasion: 'Desayunos especiales, Brunch',
    miseEnPlace: 'Refrigerar mantequilla. Preparar superficie de trabajo amplia. Tener harina de fuerza lista.',
    preparation: 'Preparar masa madre. Realizar 3 dobleces con reposos de 30 min entre cada uno. Dar forma triangular. Fermentar 2 horas. Hornear a 200°C hasta dorar.',
    ingredients: 'Harina de fuerza, 500g. Mantequilla de laminar, 250g. Agua, 200ml. Leche, 50ml. Azúcar, 50g. Sal, 10g. Levadura fresca, 20g.',
    notes: 'La mantequilla y la masa deben estar a misma temperatura. Trabajar en ambiente fresco.',
    region: 'Francesa',
    glossary: 'Laminado: Técnica de doblado para crear capas. Alveolado: Estructura de agujeros en la miga.'
  },
  {
    id: '4',
    name: 'Macarons de Frambuesa',
    autor: 'Isabel Chen',
    description: 'Delicadas galletas de almendra con base lisa y pie fruncido, rellenas de ganache de frambuesa intenso y equilibrado.',
    imageSrc: '/images/recipes/macarons-frambuesa.jpg',
    yield: '24',
    station: 'Primavera',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '3 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Hard',
    servingOccasion: 'Fiestas elegantes, Té de la tarde',
    miseEnPlace: 'Tamizar almendra y azúcar glass. Preparar papel de horno con plantilla. Batidora limpia y seca.',
    preparation: 'Batir claras con azúcar hasta pico firme. Incorporar mezcla de almendra con movimiento envolvente. Poner en manga. Formar círculos. Reposar 30 min. Hornear a 150°C 12 min.',
    ingredients: 'Almendra molida, 150g. Azúcar glass, 150g. Claras de huevo, 110g. Azúcar granulada, 50g. Colorante rosa, 1g. Frambuesas, 200g. Chocolate blanco, 150g.',
    notes: 'La humedad ambiental afecta el resultado. Reposar hasta formar piel.',
    region: 'Francesa',
    glossary: 'Pie fruncido: Base rugosa característica. Macaronage: Técnica de mezclado específica.'
  },
  {
    id: '5',
    name: 'Tarta de Santiago',
    autor: 'Antonio García',
    description: 'Tarta tradicional de almendra sin harina, decorada con la cruz de Santiago espolvoreada en azúcar glass sobre su superficie dorada.',
    imageSrc: '/images/recipes/tarta-santiago.jpg',
    yield: '8',
    station: 'Otoño',
    category: 'pasteleria',
    rating: '2',
    cookingTime: '1 hrs 15 min',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Celebraciones familiares, Postre diario',
    miseEnPlace: 'Molde de 22cm. Almendra molida lista. Batidora con varillas.',
    preparation: 'Batir huevos con azúcar hasta blanquear. Incorporar almendra y canela suavemente. Verter en molde enharinado. Hornear 35 min a 180°C. Decorar con plantilla cruz.',
    ingredients: 'Almendra molida, 250g. Huevos, 4 unidades. Azúcar, 200g. Ralladura de limón, 1 unidad. Canela molida, 5g. Azúcar glass, 50g.',
    notes: 'No abrir horno primeros 25 min. Dejar enfriar en molde.',
    region: 'Española',
    glossary: 'Almendra marcona: Variedad española de almendra.'
  },
  {
    id: '6',
    name: 'Profiteroles con Chocolate',
    autor: 'Laura Méndez',
    description: 'Pequeños bollos de pasta choux rellenos de crema pastelera y bañados en salsa caliente de chocolate negro intenso.',
    imageSrc: '/images/recipes/profiteroles.jpg',
    yield: '6',
    station: 'Invierno',
    category: 'pasteleria',
    rating: '5',
    cookingTime: '2 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Cenas románticas, Postre restaurante',
    miseEnPlace: 'Preparar crema pastelera con antelación. Horno precalentado. Manga pastelera con boquilla.',
    preparation: 'Cocinar agua con mantequilla. Añadir harina de golpe. Secar masa. Incorporar huevos uno a uno. Hornear 25 min sin abrir. Rellenar con crema. Bañar con salsa chocolate.',
    ingredients: 'Agua, 250ml. Mantequilla, 100g. Harina, 150g. Huevos, 4 unidades. Crema pastelera, 500ml. Chocolate negro, 200g. Nata, 100ml.',
    notes: 'No abrir horno durante cocción. Pinchar para liberar vapor al sacar.',
    region: 'Francesa',
    glossary: 'Pasta choux: Masa que crea cavidad interior al hornear.'
  },
  {
    id: '7',
    name: 'Brazo de Gitano',
    autor: 'Elena Torres',
    description: 'Bizcocho esponjoso enrollado con relleno de crema y mermelada, espolvoreado con azúcar glass en su característica forma cilíndrica.',
    imageSrc: '/images/recipes/brazo-gitano.jpg',
    yield: '8',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '1 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Meriendas, Celebraciones informales',
    miseEnPlace: 'Papel de horno. Paño de cocina húmedo. Rodillo para enrollar.',
    preparation: 'Batir huevos con azúcar. Incorporar harina suavemente. Extender en bandeja. Hornear 12 min a 200°C. Enrollar caliente con paño. Rellenar y volver a enrollar.',
    ingredients: 'Huevos, 4 unidades. Azúcar, 120g. Harina, 100g. Crema pastelera, 300ml. Mermelada de albaricoque, 100g. Azúcar glass, 50g.',
    notes: 'Enrollar inmediatamente al sacar del horno. Usar paño ligeramente húmedo.',
    region: 'Española',
    glossary: 'Enrollado en caliente: Técnica para evitar grietas.'
  },
  {
    id: '8',
    name: 'Crème Brûlée',
    autor: 'Pierre Dubois',
    description: 'Crema de vainilla horneada con textura sedosa, coronada con una capa crujiente de caramelo tostado que se quiebra al golpear con la cuchara.',
    imageSrc: '/images/recipes/creme-brulee.jpg',
    yield: '6',
    station: 'Otoño, Invierno',
    category: 'pasteleria',
    rating: '1',
    cookingTime: '4 hrs',
    cookingMethod: 'Hornear, Gratinar',
    difficulty: 'Medium',
    servingOccasion: 'Cenas gourmet, Restaurantes elegantes',
    miseEnPlace: 'Ramerkins individuales. Soplete de cocina. Baño María preparado.',
    preparation: 'Calentar nata con vainilla. Mezclar yemas con azúcar. Unir sin batir. Colar y verter en moldes. Hornear al baño María 40 min. Enfriar 4 horas. Caramelizar con soplete.',
    ingredients: 'Nata líquida, 500ml. Yemas de huevo, 6 unidades. Azúcar, 100g. Vainilla en vaina, 1 unidad. Azúcar moreno, 60g.',
    notes: 'No sobrecalentar nata. Enfriar completamente antes de caramelizar.',
    region: 'Francesa',
    glossary: 'Ramerkin: Molde individual para cremas. Soplete: Herramienta para caramelizar.'
  },
  {
    id: '9',
    name: 'Tarta de Manzana Alsaciana',
    autor: 'Jean-Luc Bernard',
    description: 'Tarta rustica con base de masa quebrada, rellena de finas láminas de manzana dispuestas en espiral y aromatizada con canela.',
    imageSrc: '/images/recipes/tarta-manzana-alsaciana.jpg',
    yield: '8',
    station: 'Otoño',
    category: 'pasteleria',
    rating: '5',
    cookingTime: '1 hrs 30 min',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Postre familiar, Celebrations de otoño',
    miseEnPlace: 'Enfriar masa 30 min. Pelar y cortar manzanas uniformemente. Precalentar horno.',
    preparation: 'Estirar masa en molde. Disponer manzanas en espiral apretada. Espolvorear azúcar y canela. Hornear 45 min hasta dorar. Pincelar con mermelada al salir.',
    ingredients: 'Masa quebrada, 300g. Manzanas reineta, 6 unidades. Azúcar, 80g. Canela molida, 10g. Mantequilla, 50g. Mermelada de albaricoque, 3 cucharadas.',
    notes: 'Usar manzanas firmes. Cortar láminas del mismo grosor.',
    region: 'Francesa',
    glossary: 'Masa quebrada: Base friable y mantecosa.'
  },
  {
    id: '10',
    name: 'Tiramisú Clásico',
    autor: 'Giovanni Rossi',
    description: 'Postre italiano con capas de bizcochos de soletilla embebidos en café, alternadas con crema de mascarpone y cacao en polvo.',
    imageSrc: '/images/recipes/tiramisu.jpg',
    yield: '10',
    station: 'Todas',
    category: 'pasteleria',
    rating: '5',
    cookingTime: '6 hrs',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Cenas italianas, Reuniones familiares',
    miseEnPlace: 'Café frío. Mascarpone a temperatura ambiente. Molde cuadrado.',
    preparation: 'Batir yemas con azúcar. Incorporar mascarpone. Montar claras y añadir. Mojar soletillas en café. Alternar capas. Refrigerar 6 horas mínimo. Espolvorear cacao.',
    ingredients: 'Mascarpone, 500g. Huevos, 4 unidades. Azúcar, 120g. Soletillas, 300g. Café fuerte, 400ml. Cacao amargo, 40g.',
    notes: 'Usar café frío para mojar. Refrigerar mínimo 6 horas.',
    region: 'Italiana',
    glossary: 'Soletillas: Bizcochos alargados y secos. Mascarpone: Queso cremoso italiano.'
  },
  {
    id: '11',
    name: 'Éclairs de Café',
    autor: 'Sophie Laurent',
    description: 'Pasteles alargados de pasta choux rellenos de crema de moka y glaseados con fondant de café, decorados con granos de café.',
    imageSrc: '/images/recipes/eclairs-cafe.jpg',
    yield: '12',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '3 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Té de la tarde, Eventos elegantes',
    miseEnPlace: 'Manga pastelera con boquilla lisa. Crema de moka preparada. Fondant listo.',
    preparation: 'Preparar pasta choux. Formar cilindros de 12cm. Hornear 25 min. Dejar enfriar. Rellenar con crema de moka. Bañar con fondant de café.',
    ingredients: 'Agua, 125ml. Mantequilla, 50g. Harina, 75g. Huevos, 2-3 unidades. Crema de moka, 400ml. Fondant, 200g. Café instantáneo, 2 cucharadas.',
    notes: 'No abrir horno primeros 20 min. Rellenar justo antes de servir.',
    region: 'Francesa',
    glossary: 'Fondant: Glaseado suave y brillante. Moka: Sabor combinado de café y chocolate.'
  },
  {
    id: '12',
    name: 'Pastel de Zanahoria con Nueces',
    autor: 'David Johnson',
    description: 'Bizcocho húmedo de zanahoria y especias, con trozos de nuez tostada y cubierto con frosting de queso crema y más nueces.',
    imageSrc: '/images/recipes/pastel-zanahoria.jpg',
    yield: '12',
    station: 'Otoño',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '2 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Celebraciones informales, Meriendas',
    miseEnPlace: 'Rallar zanahoria. Tostar nueces. Ingredientes a temperatura ambiente.',
    preparation: 'Mezclar ingredientes secos. Incorporar zanahoria y huevos. Añadir nueces. Hornear 40 min. Enfriar completamente. Cubrir con frosting.',
    ingredients: 'Zanahoria rallada, 300g. Harina, 250g. Azúcar moreno, 200g. Huevos, 3 unidades. Nueces, 150g. Canela, 10g. Queso crema, 200g. Mantequilla, 100g.',
    notes: 'Rallar zanahoria fina. No sobrehornear para mantener humedad.',
    region: 'Americana',
    glossary: 'Frosting: Cobertura cremosa para pasteles.'
  },
  {
    id: '13',
    name: 'Mousse de Chocolate Negro',
    autor: 'Alain Ducasse',
    description: 'Postre aéreo y sedoso de chocolate intenso, con textura ligera pero con sabor profundo, decorado con virutas de chocolate.',
    imageSrc: '/images/recipes/mousse-chocolate.jpg',
    yield: '6',
    station: 'Todas',
    category: 'pasteleria',
    rating: '3',
    cookingTime: '4 hrs',
    cookingMethod: 'Ninguno',
    difficulty: 'Medium',
    servingOccasion: 'Cenas elegantes, Postre restaurante',
    miseEnPlace: 'Chocolate picado. Bolsas limpias y secas. Refrigerar copas.',
    preparation: 'Derretir chocolate al baño María. Montar nata. Batir claras a punto de nieve. Incorporar chocolate a nata. Envolver con claras. Refrigerar 4 horas.',
    ingredients: 'Chocolate negro 70%, 200g. Nata montada, 250ml. Claras de huevo, 4 unidades. Azúcar, 50g. Mantequilla, 30g.',
    notes: 'Trabajar con ingredientes a misma temperatura. No sobrebatir.',
    region: 'Francesa',
    glossary: 'Mousse: Textura espumosa y aireada. Punto de nieve: Claras batidas a punto.'
  },
  {
    id: '14',
    name: 'Cannoli Sicilianos',
    autor: 'Maria Siciliano',
    description: 'Tubos crujientes de masa frita rellenos de crema de ricotta endulzada con chips de chocolate y cáscara de naranja confitada.',
    imageSrc: '/images/recipes/cannoli.jpg',
    yield: '15',
    station: 'Primavera',
    category: 'pasteleria',
    rating: '5',
    cookingTime: '3 hrs',
    cookingMethod: 'Freír',
    difficulty: 'Hard',
    servingOccasion: 'Fiestas italianas, Postre especial',
    miseEnPlace: 'Cannoli forms. Aceite caliente. Ricotta escurrida.',
    preparation: 'Mezclar harina con vino. Estirar masa fina. Cortar círculos. Enrollar en forms. Freír hasta dorar. Rellenar con crema de ricotta justo antes de servir.',
    ingredients: 'Harina, 250g. Vino Marsala, 60ml. Ricotta, 500g. Azúcar glass, 150g. Chocolate chips, 100g. Naranja confitada, 50g.',
    notes: 'Rellenar justo antes de servir para mantener crujiente.',
    region: 'Italiana',
    glossary: 'Cannoli forms: Moldes metálicos para dar forma. Marsala: Vino fortificado siciliano.'
  },
  {
    id: '15',
    name: 'Strudel de Manzana',
    autor: 'Klaus Schmidt',
    description: 'Masa finísima estirada a mano rellena de manzana, pasas y canela, enrollada y horneada hasta quedar dorada y crujiente.',
    imageSrc: '/images/recipes/strudel-manzana.jpg',
    yield: '8',
    station: 'Otoño',
    category: 'pasteleria',
    rating: '2',
    cookingTime: '2 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Hard',
    servingOccasion: 'Meriendas alemanas, Postre familiar',
    miseEnPlace: 'Mesa grande para estirar. Paño de cocina. Manzanas ácidas.',
    preparation: 'Preparar masa elástica. Estirar sobre paño hasta transparente. Rellenar con manzana. Enrollar ayudándose con paño. Hornear 35 min.',
    ingredients: 'Harina de fuerza, 300g. Agua tibia, 150ml. Manzanas Granny Smith, 6 unidades. Pasas, 100g. Pan rallado, 50g. Canela, 15g. Azúcar, 120g.',
    notes: 'Estirar masa hasta ver a través. Usar manzanas firmes.',
    region: 'Austriaca',
    glossary: 'Strudel: Masa estirada muy fina.'
  },
  {
    id: '16',
    name: 'Panna Cotta de Vainilla',
    autor: 'Marco Bellini',
    description: 'Postre italiano de crema cocida sin huevos, de textura temblorosa y sedosa, aromatizado con vainilla natural y acompañado de coulis de frutos rojos.',
    imageSrc: '/images/recipes/panna-cotta.jpg',
    yield: '6',
    station: 'Primavera, Verano',
    category: 'pasteleria',
    rating: '3',
    cookingTime: '6 hrs',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Cenas ligeras, Postre verano',
    miseEnPlace: 'Moldes individuales. Gelatina en hojas. Coulis preparado.',
    preparation: 'Hidratar gelatina. Calentar nata con vainilla y azúcar. Disolver gelatina. Colar y verter en moldes. Refrigerar 6 horas. Desmoldar con cuidado.',
    ingredients: 'Nata líquida, 500ml. Azúcar, 100g. Gelatina en hojas, 4 unidades. Vainilla, 1 vaina. Frutos rojos, 200g. Azúcar glass, 50g.',
    notes: 'No hervir la nata. Refrigerar mínimo 6 horas.',
    region: 'Italiana',
    glossary: 'Panna cotta: "Crema cocida" en italiano. Coulis: Salsa de frutas fina.'
  },
  {
    id: '17',
    name: 'Baklava',
    autor: 'Mehmet Yilmaz',
    description: 'Postre turco de capas de pasta filo con nueces y pistachos, bañado en almíbar de miel y aromatizado con agua de rosas.',
    imageSrc: '/images/recipes/baklava.jpg',
    yield: '20',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '3 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Celebraciones, Fiestas orientales',
    miseEnPlace: 'Pasta filo descongelada. Nueces picadas. Almíbar preparado.',
    preparation: 'Intercalar capas de pasta filo con mezcla de nueces. Cortar en rombos antes de hornear. Hornear 45 min. Bañar con almíbar caliente.',
    ingredients: 'Pasta filo, 500g. Nueces, 300g. Pistachos, 150g. Mantequilla derretida, 200g. Miel, 400g. Agua de rosas, 2 cucharadas.',
    notes: 'Cortar antes de hornear. Almíbar caliente sobre baklava caliente.',
    region: 'Turca',
    glossary: 'Pasta filo: Masa muy fina. Agua de rosas: Aromatizante floral.'
  },
  {
    id: '18',
    name: 'Tarta de Queso Vasca',
    autor: 'Aitor Mendizabal',
    description: 'Tarta de queso con exterior tostado y corazón cremoso, tradicionalmente marcada con el escudo de la cruz vasca antes de hornear.',
    imageSrc: '/images/recipes/tarta-queso-vasca.jpg',
    yield: '8',
    station: 'Todas',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '1 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Postre tradicional, Bares vascos',
    miseEnPlace: 'Molde alto. Queso de pasta blanda. Harina de trigo.',
    preparation: 'Mezclar queso con azúcar. Añadir huevos uno a uno. Incorporar harina y nata. Verter en molde. Marcar cruz vasca. Hornear hasta dorar exterior.',
    ingredients: 'Queso de pasta blanda, 600g. Azúcar, 200g. Huevos, 4 unidades. Harina, 30g. Nata líquida, 200ml. Mantequilla, para engrasar.',
    notes: 'Quemar exterior pero mantener cremoso interior. Enfriar completamente.',
    region: 'Vasca',
    glossary: 'Cruz vasca: Símbolo tradicional vasco.'
  },
  {
    id: '19',
    name: 'Financiers de Almendra',
    autor: 'Jacques Pépin',
    description: 'Pequeños pasteles franceses de almendra y mantequilla tostada, con textura húmeda y sabor intenso a avellana.',
    imageSrc: '/images/recipes/financiers.jpg',
    yield: '18',
    station: 'Todas',
    category: 'pasteleria',
    rating: '3',
    cookingTime: '1 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Té de la tarde, Desayuno francés',
    miseEnPlace: 'Moldes financiers. Mantequilla tostada lista. Clara a temperatura ambiente.',
    preparation: 'Tostar mantequilla hasta avellanado. Mezclar almendra, harina y azúcar. Incorporar clara y mantequilla. Llenar moldes 3/4. Hornear 15 min.',
    ingredients: 'Mantequilla, 150g. Almendra molida, 150g. Azúcar glass, 180g. Harina, 50g. Clara de huevo, 5 unidades. Esencia de almendra, 1 cucharadita.',
    notes: 'No sobrehornear. Dejar enfriar en molde 5 min.',
    region: 'Francesa',
    glossary: 'Beurre noisette: Mantequilla tostada hasta color avellana.'
  },
  {
    id: '20',
    name: 'Selva Negra',
    autor: 'Hans Müller',
    description: 'Pastel alemán de chocolate con cerezas, kirsch y nata montada, decorado con virutas de chocolate y cerezas confitadas.',
    imageSrc: '/images/recipes/selva-negra.jpg',
    yield: '14',
    station: 'Invierno',
    category: 'pasteleria',
    rating: '4',
    cookingTime: '4 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Hard',
    servingOccasion: 'Celebraciones alemanas, Navidad',
    miseEnPlace: 'Bizcocho de chocolate. Cerezas en almíbar. Kirsch. Nata muy fría.',
    preparation: 'Cortar bizcocho en 3 capas. Emborrachar con kirsch. Alternar con nata y cerezas. Cubrir completamente con nata. Decorar con virutas y cerezas.',
    ingredients: 'Bizcocho chocolate, 1 unidad. Cerezas en almíbar, 500g. Kirsch, 100ml. Nata montada, 800ml. Chocolate negro, 200g. Cerezas confitadas, 12 unidades.',
    notes: 'Emborrachar bien el bizcocho. Refrigerar 2 horas antes de servir.',
    region: 'Alemana',
    glossary: 'Kirsch: Aguardiente de cerezas. Emborrachar: Humedecer bizcocho con licor.'
  },
  {
    id: '21',
    name: 'Palmeritas de Hojaldre Caseras',
    autor: 'Ana García',
    description: 'Crujientes palmeritas de hojaldre casero espolvoreadas con azúcar y canela, perfectas para meriendas o acompañar el café.',
    imageSrc: '/images/recipes/palmeritas-hojaldre.jpg',
    yield: '20',
    station: 'Todas',
    category: 'reposteria',
    rating: '4',
    cookingTime: '1 hrs 30 min',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Meriendas, Desayunos, Fiestas infantiles',
    miseEnPlace: 'Mantener mantequilla fría. Preparar superficie enharinada. Precalentar horno a 200°C.',
    preparation: 'Preparar masa de hojaldre. Estirar en rectángulo. Espolvorear azúcar y canela. Enrollar por ambos lados. Cortar rodajas de 2cm. Hornear 15-20 min hasta dorar.',
    ingredients: 'Harina de repostería, 250g. Mantequilla fría, 150g. Agua fría, 125ml. Sal, 5g. Azúcar, 100g. Canela molida, 15g. Huevo, 1 unidad para pintar.',
    notes: 'Trabajar rápido para que la mantequilla no se caliente. Dejar reposar la masa entre pliegues.',
    region: 'Española',
    glossary: 'Hojaldre: Masa con múltiples capas de mantequilla.'
  },
  {
    id: '22',
    name: 'Brownies Bites con Nueces',
    autor: 'Carlos Mendoza',
    description: 'Pequeños cuadrados de brownie intenso de chocolate, con trozos de nuez tostada y textura entre húmeda y crujiente.',
    imageSrc: '/images/recipes/brownies-bites.jpg',
    yield: '24',
    station: 'Otoño, Invierno',
    category: 'reposteria',
    rating: '5',
    cookingTime: '45 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Cumpleaños, Picnic, Postre rápido',
    miseEnPlace: 'Derretir chocolate y mantequilla. Tostar nueces. Precalentar horno a 180°C. Molde cuadrado preparado.',
    preparation: 'Derretir chocolate con mantequilla. Batir huevos con azúcar. Combinar ambas mezclas. Incorporar harina y nueces. Hornear 25 min. Enfriar y cortar en cuadrados.',
    ingredients: 'Chocolate negro, 200g. Mantequilla, 150g. Huevos, 3 unidades. Azúcar, 200g. Harina, 100g. Nueces, 150g. Esencia de vainilla, 1 cucharadita.',
    notes: 'No sobrehornear para mantener textura húmeda. Cortar cuando esté tibio.',
    region: 'Americana',
    glossary: 'Brownie: Pastel de chocolate denso. Bites: Porciones pequeñas.'
  },
  {
    id: '23',
    name: 'Galletas de Avena y Pasas',
    autor: 'Laura Hernández',
    description: 'Galletas saludables y chewy de avena con pasas jugosas y un toque de canela, perfectas para el desayuno o snack saludable.',
    imageSrc: '/images/recipes/galletas-avena-pasas.jpg',
    yield: '18',
    station: 'Todas',
    category: 'reposteria',
    rating: '3',
    cookingTime: '35 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Desayunos, Meriendas saludables, Lunch escolar',
    miseEnPlace: 'Hidratar pasas en agua tibia. Precalentar horno a 175°C. Preparar bandejas con papel de horno.',
    preparation: 'Batir mantequilla con azúcares. Añadir huevo y vainilla. Incorporar avena, harina y canela. Agregar pasas escurridas. Formar bolitas. Hornear 12-15 min.',
    ingredients: 'Avena tradicional, 150g. Harina integral, 100g. Mantequilla, 120g. Azúcar moreno, 100g. Huevo, 1 unidad. Pasas, 120g. Canela, 10g. Bicarbonato, 5g.',
    notes: 'Dejar enfriar 5 min en bandeja antes de transferir.',
    region: 'Americana',
    glossary: 'Chewy: Textura masticable y blanda.'
  },
  {
    id: '24',
    name: 'Palomitas Caramelizadas',
    autor: 'Miguel Torres',
    description: 'Crujientes palomitas de maíz cubiertas con caramelo dorado y un toque de sal marina, ideales para cine en casa.',
    imageSrc: '/images/recipes/palomitas-caramelo.jpg',
    yield: '4',
    station: 'Invierno',
    category: 'reposteria',
    rating: '4',
    cookingTime: '20 min',
    cookingMethod: 'Saltear, Hervir',
    difficulty: 'Easy',
    servingOccasion: 'Cine en casa, Fiestas, Noches de película',
    miseEnPlace: 'Tener todos los ingredientes medidos. Cacerola antiadherente. Espátula de silicona.',
    preparation: 'Preparar palomitas en olla. En otra cacerola, hacer caramelo con azúcar y mantequilla. Verter sobre palomitas. Mezclar rápidamente. Extender para enfriar.',
    ingredients: 'Maíz para palomitas, 100g. Azúcar, 150g. Mantequilla, 50g. Agua, 2 cucharadas. Sal marina, 5g. Aceite de girasol, 2 cucharadas.',
    notes: 'Trabajar rápido con el caramelo antes de que endurezca.',
    region: 'Americana',
    glossary: 'Caramelizar: Convertir azúcar en caramelo.'
  },
  {
    id: '25',
    name: 'Barritas Energéticas Caseras',
    autor: 'Elena Vargas',
    description: 'Barritas de cereales, frutos secos y miel sin horno, perfectas para deportistas o snack saludable entre horas.',
    imageSrc: '/images/recipes/barritas-energeticas.jpg',
    yield: '12',
    station: 'Primavera, Verano',
    category: 'reposteria',
    rating: '3',
    cookingTime: '30 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Deporte, Trekking, Snack oficina',
    miseEnPlace: 'Picar frutos secos. Preparar molde rectangular. Forrar con papel de horno.',
    preparation: 'Mezclar cereales y frutos secos en bowl. Calentar miel con mantequilla. Combinar ambas mezclas. Prensar en molde. Refrigerar 2 horas. Cortar en barritas.',
    ingredients: 'Copos de avena, 200g. Almendras, 100g. Nueces, 80g. Miel, 150g. Mantequilla, 50g. Pasas, 70g. Semillas de girasol, 40g.',
    notes: 'Prensar bien para que compacten. Conservar en refrigerador.',
    region: 'Internacional',
    glossary: 'Frutos secos: Almendras, nueces, avellanas, etc.'
  },
  {
    id: '26',
    name: 'Tortitas de Plátano Maduro',
    autor: 'Isabel Cruz',
    description: 'Tortitas dulces y húmedas de plátano maduro con un toque de canela, ideales para desayuno o merienda rápida.',
    imageSrc: '/images/recipes/tortitas-platano.jpg',
    yield: '8',
    station: 'Todas',
    category: 'reposteria',
    rating: '4',
    cookingTime: '25 min',
    cookingMethod: 'Freír',
    difficulty: 'Easy',
    servingOccasion: 'Desayunos rápidos, Meriendas, Snack infantil',
    miseEnPlace: 'Machacar plátanos. Mezclar ingredientes secos. Sartén antiadherente caliente.',
    preparation: 'Machacar plátanos con tenedor. Añadir huevo y leche. Incorporar harina y polvos. Mezclar suavemente. Cocinar en sartén 2 min por lado.',
    ingredients: 'Plátanos maduros, 3 unidades. Harina, 150g. Huevo, 1 unidad. Leche, 100ml. Azúcar, 50g. Canela, 5g. Polvo de hornear, 10g.',
    notes: 'Usar plátanos muy maduros para más dulzor. Cocinar a fuego medio.',
    region: 'Latinoamericana',
    glossary: 'Tortitas: Pequeños panqueques densos.'
  },
  {
    id: '27',
    name: 'Bolitas de Coco y Avena',
    autor: 'Sofia Martínez',
    description: 'Energéticas bolitas sin horno de coco y avena con miel, perfectas para snack saludable o pre-entrenamiento.',
    imageSrc: '/images/recipes/bolitas-coco-avena.jpg',
    yield: '16',
    station: 'Primavera, Verano',
    category: 'reposteria',
    rating: '3',
    cookingTime: '20 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Snack saludable, Pre-entrenamiento, Oficina',
    miseEnPlace: 'Tener coco rallado y avena lista. Bowl mediano. Papel film.',
    preparation: 'Mezclar avena con coco rallado. Añadir miel y mantequilla de maní. Formar bolitas con las manos. Rebozar en coco extra. Refrigerar 1 hora.',
    ingredients: 'Coco rallado, 200g. Copos de avena, 150g. Miel, 100g. Mantequilla de maní, 80g. Esencia de vainilla, 1 cucharadita.',
    notes: 'Si la mezcla está muy blanda, añadir más avena.',
    region: 'Internacional',
    glossary: 'Mantequilla de maní: Pasta de cacahuetes tostados.'
  },
  {
    id: '28',
    name: 'Pretzels Suaves Caseros',
    autor: 'David Schmidt',
    description: 'Pretzels suaves y dorados con su característico baño de sosa cáustica y espolvoreados con sal gruesa.',
    imageSrc: '/images/recipes/pretzels-caseros.jpg',
    yield: '8',
    station: 'Todas',
    category: 'panaderia',
    rating: '5',
    cookingTime: '2 hrs',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Oktoberfest, Picnic, Snack salado',
    miseEnPlace: 'Preparar solución de sosa con cuidado. Superficie de trabajo enharinada. Horno precalentado a 220°C.',
    preparation: 'Preparar masa y fermentar 1 hora. Formar pretzels. Sumergir en solución de sosa 30 segundos. Espolvorear sal. Hornear 12-15 min hasta dorar.',
    ingredients: 'Harina de fuerza, 500g. Agua tibia, 300ml. Levadura fresca, 20g. Sal, 10g. Sosa cáustica, 40g. Agua, 1 litro (para baño). Sal gruesa, 30g.',
    notes: 'Manejar la sosa con guantes. No usar aluminio con la sosa.',
    region: 'Alemana',
    glossary: 'Sosa cáustica: Hidróxido de sodio para el baño característico.'
  },
  {
    id: '29',
    name: 'Chips de Manzana Deshidratada',
    autor: 'Patricia López',
    description: 'Crujientes chips de manzana deshidratadas al horno con canela, snack saludable y natural sin aceite añadido.',
    imageSrc: '/images/recipes/chips-manzana.jpg',
    yield: '4',
    station: 'Otoño',
    category: 'reposteria',
    rating: '4',
    cookingTime: '2 hrs 30 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Snack saludable, Dietas, Lunch escolar',
    miseEnPlace: 'Manzanas firmes. Mandolina para cortar fino. Papel de horno.',
    preparation: 'Lavar manzanas. Cortar en rodajas finas uniformes. Disponer en bandeja. Espolvorear canela. Hornear a 120°C 2 horas, volteando a mitad.',
    ingredients: 'Manzanas Granny Smith, 4 unidades. Canela molida, 10g. Azúcar (opcional), 20g.',
    notes: 'Cortar rodajas del mismo grosor para cocción uniforme.',
    region: 'Internacional',
    glossary: 'Deshidratar: Extraer humedad mediante calor suave.'
  },
  {
    id: '30',
    name: 'Empanadillas de Atún',
    autor: 'Carmen Ruiz',
    description: 'Pequeñas empanadillas crujientes rellenas de atún, pimiento y cebolla, perfectas para tapas o snack salado.',
    imageSrc: '/images/recipes/empanadillas-atun.jpg',
    yield: '15',
    station: 'Todas',
    category: 'reposteria',
    rating: '4',
    cookingTime: '50 min',
    cookingMethod: 'Freír',
    difficulty: 'Medium',
    servingOccasion: 'Tapas, Fiestas, Cenas informales',
    miseEnPlace: 'Preparar relleno frío. Mesa de trabajo. Aceite caliente.',
    preparation: 'Saltear verduras para relleno. Mezclar con atún. Rellenar obleas. Cerrar bien con tenedor. Freír en aceite caliente hasta dorar.',
    ingredients: 'Obleas para empanadillas, 30 unidades. Atún en aceite, 2 latas. Cebolla, 1 unidad. Pimiento rojo, 1 unidad. Tomate frito, 3 cucharadas. Huevo duro, 2 unidades.',
    notes: 'Escurrir bien el atún. Cerrar bien para que no salga relleno.',
    region: 'Española',
    glossary: 'Obleas: Discos de masa fina para empanadillas.'
  },
  {
    id: '31',
    name: 'Muffins de Arándanos',
    autor: 'Jennifer Adams',
    description: 'Muffins esponjosos repletos de arándanos frescos con topping crujiente de azúcar, ideales para desayuno o merienda.',
    imageSrc: '/images/recipes/muffins-arandanos.jpg',
    yield: '12',
    station: 'Primavera, Verano',
    category: 'reposteria',
    rating: '5',
    cookingTime: '40 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Desayunos, Brunch, Meriendas',
    miseEnPlace: 'Precalentar horno 190°C. Preparar pirotines. Enharinar arándanos.',
    preparation: 'Mezclar ingredientes secos. Combinar con líquidos suavemente. Incorporar arándanos. Llenar moldes 3/4. Hornear 20-25 min. Enfriar en rejilla.',
    ingredients: 'Harina, 300g. Arándanos frescos, 200g. Huevos, 2 unidades. Leche, 180ml. Aceite de girasol, 100ml. Azúcar, 150g. Polvo de hornear, 15g.',
    notes: 'No sobremezclar para mantener textura esponjosa.',
    region: 'Americana',
    glossary: 'Muffin: Panecillo individual dulce. Pirotines: Moldes de papel para muffins.'
  },
  {
    id: '32',
    name: 'Bastones de Queso y Jamón',
    autor: 'Roberto Díaz',
    description: 'Crujientes bastones de masa de hojaldre rellenos de queso y jamón, perfectos para aperitivo o picoteo.',
    imageSrc: '/images/recipes/bastones-queso-jamon.jpg',
    yield: '16',
    station: 'Todas',
    category: 'reposteria',
    rating: '5',
    cookingTime: '30 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Aperitivos, Fiestas, Cócteles',
    miseEnPlace: 'Hojaldre descongelado. Queso y jamón cortado en tiras. Horno precalentado 200°C.',
    preparation: 'Estirar hojaldre. Colocar tiras de jamón y queso. Enrollar y cortar en bastones. Pintar con huevo. Hornear 15 min hasta dorar.',
    ingredients: 'Masa de hojaldre, 500g. Jamón York, 200g. Queso emmental, 200g. Huevo, 1 unidad para pintar. Semillas de sésamo, 2 cucharadas.',
    notes: 'Cerrar bien los extremos para que no se salga el relleno.',
    region: 'Española',
    glossary: 'Bastones: Forma alargada y delgada.'
  },
  {
    id: '33',
    name: 'Tostadas Francesas Mini',
    autor: 'Claire Dubois',
    description: 'Pequeñas tostadas francesas con canela y azúcar glass, perfectas para desayuno especial o merienda dulce.',
    imageSrc: '/images/recipes/tostadas-francesas.jpg',
    yield: '4',
    station: 'Todas',
    category: 'reposteria',
    rating: '5',
    cookingTime: '20 min',
    cookingMethod: 'Freír',
    difficulty: 'Easy',
    servingOccasion: 'Desayunos especiales, Brunch, Meriendas',
    miseEnPlace: 'Pan de día anterior. Batidora para huevos. Sartén antiadherente.',
    preparation: 'Cortar pan en rebanadas. Batir huelos con leche y canela. Empapar pan. Freír en mantequilla hasta dorar. Espolvorear azúcar glass.',
    ingredients: 'Pan de molde, 8 rebanadas. Huevos, 2 unidades. Leche, 200ml. Canela, 10g. Mantequilla, 50g. Azúcar glass, 30g. Esencia de vainilla, 1 cucharadita.',
    notes: 'Usar pan algo duro para mejor absorción.',
    region: 'Francesa',
    glossary: 'Tostada francesa: Pan empapado en huevo y frito.'
  },
  {
    id: '34',
    name: 'Galletas de Queso Parmesano',
    autor: 'Giuseppe Romano',
    description: 'Galletas saladas y crujientes de queso parmesano con romero, ideales para acompañar vinos o como snack elegante.',
    imageSrc: '/images/recipes/galletas-parmesano.jpg',
    yield: '25',
    station: 'Todas',
    category: 'reposteria',
    rating: '3',
    cookingTime: '35 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Cócteles, Aperitivos, Fiestas elegantes',
    miseEnPlace: 'Rallar parmesano fresco. Romero picado. Precalentar horno 180°C.',
    preparation: 'Mezclar queso con harina y mantequilla. Añadir romero. Formar cilindro. Enfriar 30 min. Cortar rodajas. Hornear 12-15 min.',
    ingredients: 'Queso parmesano rallado, 200g. Harina, 150g. Mantequilla fría, 100g. Romero fresco, 2 cucharadas. Pimienta negra, 5g. Huevo, 1 unidad.',
    notes: 'Enfriar bien la masa para facilitar el corte.',
    region: 'Italiana',
    glossary: 'Parmesano: Queso italiano curado y granular.'
  },
  {
    id: '35',
    name: 'Rollitos de Salchicha',
    autor: 'Thomas Müller',
    description: 'Pequeños rollitos de masa de hojaldre con salchicha en su interior, perfectos para fiestas o snack rápido.',
    imageSrc: '/images/recipes/rollitos-salchicha.jpg',
    yield: '12',
    station: 'Todas',
    category: 'reposteria',
    rating: '3',
    cookingTime: '25 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Fiestas infantiles, Partidos, Picnic',
    miseEnPlace: 'Hojaldre descongelado. Salchitas tipo cocktail. Horno precalentado 200°C.',
    preparation: 'Estirar hojaldre. Cortar en tiras triangulares. Enrollar salchichas. Pintar con huevo. Hornear 15 min hasta dorar.',
    ingredients: 'Masa de hojaldre, 400g. Salchitas cocktail, 12 unidades. Huevo, 1 unidad para pintar. Semillas de amapola, 1 cucharada. Sésamo, 1 cucharada.',
    notes: 'Apretar bien los extremos al enrollar.',
    region: 'Alemana',
    glossary: 'Salchitas cocktail: Salchichas pequeñas para aperitivo.'
  },
  {
    id: '36',
    name: 'Trufas de Chocolate Rápidas',
    autor: 'Andrea Blanc',
    description: 'Trufas de chocolate intenso cubiertas de cacao, preparadas en minutos sin horno y con solo 4 ingredientes.',
    imageSrc: '/images/recipes/trufas-chocolate.jpg',
    yield: '20',
    station: 'Todas',
    category: 'reposteria',
    rating: '5',
    cookingTime: '30 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Regalos, Fiestas, Postre rápido',
    miseEnPlace: 'Galletas trituradas. Chocolate picado. Cacao en polvo en plato.',
    preparation: 'Triturar galletas. Derretir chocolate con mantequilla. Mezclar todo. Formar bolitas con manos. Rebozar en cacao. Refrigerar 1 hora.',
    ingredients: 'Galletas digestive, 200g. Chocolate negro, 150g. Mantequilla, 50g. Cacao puro en polvo, 50g.',
    notes: 'Usar guantes para formar bolitas si la mezcla está pegajosa.',
    region: 'Francesa',
    glossary: 'Trufa: Dulce de chocolate con forma de hongo.'
  },
  {
    id: '37',
    name: 'Bolitas de Cereal y Miel',
    autor: 'Natalia Chen',
    description: 'Snack energético de cereales inflados unidos con miel y mantequilla de maní, formando bolitas crujientes sin horno.',
    imageSrc: '/images/recipes/bolitas-cereal-miel.jpg',
    yield: '15',
    station: 'Todas',
    category: 'reposteria',
    rating: '5',
    cookingTime: '20 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Deporte, Escuela, Snack rápido',
    miseEnPlace: 'Cereales en bowl grande. Miel y mantequilla medidas.',
    preparation: 'Calentar miel con mantequilla hasta burbujas. Verter sobre cereales. Mezclar bien. Formar bolitas con manos húmedas. Refrigerar 30 min.',
    ingredients: 'Cereales de arroz inflado, 200g. Miel, 100g. Mantequilla, 40g. Mantequilla de maní, 50g. Pasas, 60g. Coco rallado, 30g.',
    notes: 'Tener manos húmedas evita que se pegue la mezcla.',
    region: 'Internacional',
    glossary: 'Cereales inflados: Cereales procesados con aire.'
  },
  {
    id: '38',
    name: 'Pinchos de Fruta Chocolateada',
    autor: 'Eva Santos',
    description: 'Brochetas de fruta fresca bañadas en chocolate negro fundido, snack saludable y divertido para todas las edades.',
    imageSrc: '/images/recipes/pinchos-fruta-chocolate.jpg',
    yield: '8',
    station: 'Primavera, Verano',
    category: 'reposteria',
    rating: '5',
    cookingTime: '25 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Fiestas infantiles, Verano, Postre ligero',
    miseEnPlace: 'Lavar y cortar fruta. Secar bien. Derretir chocolate. Palillos de brocheta.',
    preparation: 'Cortar fruta en trozos similares. Ensartar en palillos alternando colores. Fundir chocolate al baño María. Bañar mitad de cada pincho. Dejar secar.',
    ingredients: 'Fresas, 16 unidades. Plátano, 2 unidades. Uvas, 16 unidades. Chocolate negro, 200g. Kiwi, 2 unidades.',
    notes: 'Secar bien la fruta para que el chocolate se adhiera.',
    region: 'Internacional',
    glossary: 'Baño María: Método suave para fundir chocolate.'
  },
  {
    id: '39',
    name: 'Crackers de Semillas Caseras',
    autor: 'Peter Schmidt',
    description: 'Galletas saladas crujientes con mezcla de semillas, perfectas para acompañar quesos o como snack saludable.',
    imageSrc: '/images/recipes/crackers-semillas.jpg',
    yield: '30',
    station: 'Todas',
    category: 'panaderia',
    rating: '4',
    cookingTime: '45 min',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Aperitivos, Quesos, Snack saludable',
    miseEnPlace: 'Mezclar semillas. Precalentar horno 180°C. Superficie para estirar.',
    preparation: 'Mezclar harinas y semillas. Añadir agua y aceite. Formar masa. Estirar muy fino. Cortar cuadrados. Hornear 15-20 min hasta dorar.',
    ingredients: 'Harina integral, 150g. Harina de fuerza, 100g. Semillas de sésamo, 30g. Semillas de lino, 30g. Semillas de girasol, 30g. Agua, 150ml. Aceite de oliva, 50ml.',
    notes: 'Estirar lo más fino posible para que queden crujientes.',
    region: 'Internacional',
    glossary: 'Crackers: Galletas saladas y crujientes.'
  },
  {
    id: '40',
    name: 'Bolitas de Datiles y Nueces',
    autor: 'Yasmin Alami',
    description: 'Dulces bolitas energéticas de dátiles y nueces sin azúcar añadido, snack natural y saludable para cualquier momento.',
    imageSrc: '/images/recipes/bolitas-datiles.jpg',
    yield: '18',
    station: 'Todas',
    category: 'reposteria',
    rating: '5',
    cookingTime: '20 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Snack saludable, Pre-entrenamiento, Vegano',
    miseEnPlace: 'Deshuesar dátiles. Procesador de alimentos. Coco rallado para rebozar.',
    preparation: 'Procesar dátiles con nueces hasta formar pasta. Añadir coco y especias. Formar bolitas con manos. Rebozar en coco extra. Refrigerar 1 hora.',
    ingredients: 'Dátiles medjool, 250g. Nueces, 150g. Coco rallado, 100g. Canela, 10g. Esencia de vainilla, 1 cucharadita. Cacao puro, 2 cucharadas.',
    notes: 'Si no se une, añadir un poco de agua o aceite de coco.',
    region: 'Medio Oriental',
    glossary: 'Dátiles medjool: Variedad de dátil grande y carnosa.'
  },
  {
    id: '41',
    name: 'Nachos Supremos con Queso Fundido',
    autor: 'Ricardo Mendez',
    description: 'Tortilla chips crujientes cubiertas con queso fundido, jalapeños, frijoles y guacamole, perfectos para compartir.',
    imageSrc: '/images/recipes/nachos-supremos.jpg',
    yield: '4',
    station: 'Todas',
    category: 'snacks',
    rating: '5',
    cookingTime: '25 min',
    cookingMethod: 'Hornear, Gratinar',
    difficulty: 'Easy',
    servingOccasion: 'Partidos, Fiestas, Cine en casa',
    miseEnPlace: 'Preparar todos los toppings. Rallar queso. Precalentar horno a 200°C.',
    preparation: 'Disponer chips en bandeja. Esparcir frijoles y queso. Hornear 8-10 min. Añadir toppings frescos al salir. Servir inmediatamente.',
    ingredients: 'Tortilla chips, 200g. Queso cheddar, 150g. Frijoles refritos, 1 lata. Jalapeños en rodajas, 50g. Guacamole, 100g. Crema agria, 100g. Salsa, 100ml.',
    notes: 'Servir inmediatamente para que los chips no se ablanden.',
    region: 'Mexicana',
    glossary: 'Nachos: Tortilla chips con toppings. Gratinar: Dorar superficie con calor alto.'
  },
  {
    id: '42',
    name: 'Alitas de Pollo Picantes',
    autor: 'Chen Wong',
    description: 'Alitas de pollo crujientes bañadas en salsa picante dulce, horneadas hasta quedar doradas y pegajosas.',
    imageSrc: '/images/recipes/alitas-pollo.jpg',
    yield: '6',
    station: 'Todas',
    category: 'snacks',
    rating: '4',
    cookingTime: '45 min',
    cookingMethod: 'Hornear, Saltear',
    difficulty: 'Medium',
    servingOccasion: 'Partidos, Fiestas, Picoteo',
    miseEnPlace: 'Secar bien las alitas. Precalentar horno a 200°C. Preparar salsa.',
    preparation: 'Secar alitas con papel. Salpimentar. Hornear 35 min hasta dorar. Preparar salsa mezclando ingredientes. Bañar alitas y hornear 5 min más.',
    ingredients: 'Alitas de pollo, 1kg. Salsa de soja, 100ml. Miel, 80ml. Sriracha, 3 cucharadas. Ajo en polvo, 2 cucharaditas. Jengibre fresco, 2cm. Sésamo tostado, 2 cucharadas.',
    notes: 'Secar bien las alitas para mayor crujiente.',
    region: 'Asiatica',
    glossary: 'Sriracha: Salsa picante tailandesa.'
  },
  {
    id: '43',
    name: 'Pinchos Morunos Caseros',
    autor: 'Omar Benali',
    description: 'Brochetas de cerdo marinadas en especias marroquíes, a la plancha hasta quedar jugosas por dentro y doradas por fuera.',
    imageSrc: '/images/recipes/pinchos-morunos.jpg',
    yield: '8',
    station: 'Verano',
    category: 'snacks',
    rating: '5',
    cookingTime: '4 hrs',
    cookingMethod: 'Parrilla, A la Plancha',
    difficulty: 'Easy',
    servingOccasion: 'Barbacoa, Fiestas, Tapas',
    miseEnPlace: 'Cortar carne en cubos. Preparar marinada. Remojar palillos de brocheta.',
    preparation: 'Preparar marinada con especias. Marinar carne 4 horas. Ensartar en palillos. Cocinar en plancha 8-10 min, girando. Servir con limón.',
    ingredients: 'Lomo de cerdo, 600g. Comino molido, 2 cucharaditas. Pimentón dulce, 1 cucharada. Ajo, 4 dientes. Perejil fresco, 1 manojo. Aceite de oliva, 100ml. Limón, 2 unidades.',
    notes: 'No pinchar la carne al cocinar para que no pierda jugos.',
    region: 'Marroqui',
    glossary: 'Pinchos morunos: Brochetas de carne especiadas. Marinada: Mezcla para sazonar y ablandar carne.'
  },
  {
    id: '44',
    name: 'Bolitas de Jamón y Queso',
    autor: 'Laura Cisneros',
    description: 'Deliciosas bolitas crocantes rellenas de jamón y queso fundido, ideales para picar calientes.',
    imageSrc: '/images/recipes/bolitas-jamon-queso.jpg',
    yield: '15',
    station: 'Todas',
    category: 'snacks',
    rating: '3',
    cookingTime: '30 min',
    cookingMethod: 'Freír',
    difficulty: 'Medium',
    servingOccasion: 'Meriendas, Fiestas infantiles, Aperitivo',
    miseEnPlace: 'Rallar queso. Picar jamón finamente. Preparar masa.',
    preparation: 'Mezclar harina con huevo y leche. Añadir jamón y queso. Formar bolitas con manos enharinadas. Freír en aceite caliente hasta dorar.',
    ingredients: 'Harina, 200g. Queso mozzarella, 150g. Jamón cocido, 100g. Huevo, 1 unidad. Leche, 150ml. Perejil picado, 2 cucharadas. Pan rallado, 100g.',
    notes: 'Freír a fuego medio para que se funda el queso interior.',
    region: 'Española',
    glossary: 'Crocrante: Textura crujiente al freír.'
  },
  {
    id: '45',
    name: 'Chips de Batata al Horno',
    autor: 'Ana Torres',
    description: 'Chips saludables de batata horneadas con romero y sal marina, sin aceite añadido y naturalmente dulces.',
    imageSrc: '/images/recipes/chips-batata.jpg',
    yield: '4',
    station: 'Otoño',
    category: 'snacks',
    rating: '5',
    cookingTime: '40 min',
    cookingMethod: 'Hornear',
    difficulty: 'Easy',
    servingOccasion: 'Snack saludable, Aperitivo light',
    miseEnPlace: 'Lavar y secar batatas. Cortar en rodajas finas uniformes. Precalentar horno 180°C.',
    preparation: 'Cortar batatas en rodajas muy finas. Disponer en bandeja con papel. Espolvorear romero y sal. Hornear 30-35 min hasta crujientes.',
    ingredients: 'Batatas, 2 grandes. Romero fresco, 2 ramas. Sal marina, 1 cucharadita. Pimienta negra, 1/2 cucharadita. Aceite de oliva (opcional), 1 cucharada.',
    notes: 'Cortar rodajas del mismo grosor para cocción uniforme.',
    region: 'Internacional',
    glossary: 'Batata: Boniato, camote.'
  },
  {
    id: '46',
    name: 'Canapés de Salmón y Queso Crema',
    autor: 'Elena Volkov',
    description: 'Elegantes canapés con base de pan de molde, queso crema con eneldo y loncha de salmón ahumado.',
    imageSrc: '/images/recipes/canapes-salmon.jpg',
    yield: '12',
    station: 'Todas',
    category: 'snacks',
    rating: '5',
    cookingTime: '20 min',
    cookingMethod: 'Ninguno',
    difficulty: 'Easy',
    servingOccasion: 'Cócteles, Fiestas elegantes, Aperitivo',
    miseEnPlace: 'Cortar pan en círculos. Mezclar queso con eneldo. Salmón cortado en tiras.',
    preparation: 'Tostar ligeramente el pan. Mezclar queso con eneldo y limón. Extender sobre pan. Colocar salmón. Decorar con eneldo fresco.',
    ingredients: 'Pan de molde, 12 rebanadas. Salmón ahumado, 150g. Queso crema, 200g. Eneldo fresco, 3 cucharadas. Limón, 1/2 unidad. Alcaparras, 2 cucharadas.',
    notes: 'No tostar demasiado el pan para que no se rompa.',
    region: 'Internacional',
    glossary: 'Canapé: Pequeña porción de comida servida en pan tostado.'
  },
  {
    id: '47',
    name: 'Berenjenas Fritas con Miel',
    autor: 'Antonio Ruiz',
    description: 'Láminas de berenjena crujientes fritas y bañadas con miel de caña, combinación dulce-salada perfecta.',
    imageSrc: '/images/recipes/berenjenas-miel.jpg',
    yield: '4',
    station: 'Otoño',
    category: 'snacks',
    rating: '3',
    cookingTime: '25 min',
    cookingMethod: 'Freír',
    difficulty: 'Easy',
    servingOccasion: 'Tapas, Aperitivo, Bar',
    miseEnPlace: 'Cortar berenjenas en láminas finas. Salar y dejar sudar 15 min. Secar bien.',
    preparation: 'Cortar berenjenas en láminas. Salar y dejar 15 min. Secar con papel. Rebozar en harina. Freír hasta dorar. Escurrir y bañar con miel.',
    ingredients: 'Berenjenas, 2 grandes. Harina, 150g. Miel de caña, 100ml. Sal, 1 cucharadita. Aceite de oliva, 500ml. Semillas de sésamo, 1 cucharada.',
    notes: 'Secar bien las berenjenas después de salar para mejor textura.',
    region: 'Española',
    glossary: 'Sudar: Proceso de salar verduras para extraer agua.'
  },
  {
    id: '48',
    name: 'Palomitas con Especias Tajín',
    autor: 'Carlos Rivera',
    description: 'Palomitas de maíz caseras con limón y chile en polvo Tajín, snack picante y adictivo.',
    imageSrc: '/images/recipes/palomitas-tajin.jpg',
    yield: '4',
    station: 'Todas',
    category: 'snacks',
    rating: '5',
    cookingTime: '15 min',
    cookingMethod: 'Saltear',
    difficulty: 'Easy',
    servingOccasion: 'Cine en casa, Picoteo, Fiestas',
    miseEnPlace: 'Tener todos los ingredientes listos. Cacerola con tapa. Mantequilla derretida.',
    preparation: 'Calentar aceite en cacerola. Añadir maíz y tapar. Cocinar hasta que deje de reventar. Mezclar con mantequilla y Tajín. Servir caliente.',
    ingredients: 'Maíz para palomitas, 100g. Aceite de girasol, 2 cucharadas. Tajín, 3 cucharadas. Mantequilla derretida, 50g. Sal, al gusto. Limón en polvo, 1 cucharada.',
    notes: 'No destapar hasta que deje de sonar el reventar.',
    region: 'Mexicana',
    glossary: 'Tajín: Especia mexicana con chile y limón.'
  },
  {
    id: '49',
    name: 'Rollitos de Primavera al Horno',
    autor: 'Lin Chen',
    description: 'Rollitos de primavera crujientes rellenos de verduras, horneados en lugar de fritos para versión más ligera.',
    imageSrc: '/images/recipes/rollitos-primavera.jpg',
    yield: '8',
    station: 'Primavera, Verano',
    category: 'snacks',
    rating: '5',
    cookingTime: '45 min',
    cookingMethod: 'Hornear',
    difficulty: 'Medium',
    servingOccasion: 'Aperitivo, Comida asiática, Snack saludable',
    miseEnPlace: 'Picar todas las verduras. Descongelar obleas. Precalentar horno 200°C.',
    preparation: 'Saltear verduras con jengibre y ajo. Enfriar relleno. Rellenar obleas enrollando bien. Pintar con huevo. Hornear 20-25 min hasta dorar.',
    ingredients: 'Obleas para rollitos, 8 unidades. Repollo, 200g. Zanahoria, 1 unidad. Brotes de soja, 100g. Cebolleta, 2 unidades. Jengibre, 2cm. Salsa de soja, 2 cucharadas.',
    notes: 'Cerrar bien los rollitos para que no se abran al hornear.',
    region: 'Asiatica',
    glossary: 'Rollitos de primavera: Aperitivo chino de verduras enrollado.'
  },
  {
    id: '50',
    name: 'Tostadas de Aguacate y Huevo',
    autor: 'Marta González',
    description: 'Tostadas integrales con aguacate machacado, huevo pochado y semillas, snack nutritivo y saciante.',
    imageSrc: '/images/recipes/tostadas-aguacate.jpg',
    yield: '2',
    station: 'Todas',
    category: 'snacks',
    rating: '4',
    cookingTime: '20 min',
    cookingMethod: 'Escalfado, Tostar',
    difficulty: 'Medium',
    servingOccasion: 'Desayuno, Brunch, Merienda saludable',
    miseEnPlace: 'Tostar pan. Madurar aguacates. Preparar agua para escalfar.',
    preparation: 'Tostar pan. Machacar aguacate con limón y sal. Escalfar huevos 3-4 min. Montar: tostada, aguacate, huevo, semillas.',
    ingredients: 'Pan integral, 2 rebanadas. Aguacate, 1 unidad. Huevos, 2 unidades. Limón, 1/2 unidad. Semillas de sésamo, 1 cucharada. Pimienta negra, al gusto. Sal marina, al gusto.',
    notes: 'Usar huevos muy frescos para mejor escalfado.',
    region: 'Internacional',
    glossary: 'Pochado: Cocer huevo sin cáscara en agua con vinagre.'
  }
];

class StaticDataService {
  // Datos para la página de inicio
  static getHomeData() {
    const sectionTopRatedSnacksProducts = staticProducts
      .filter(product => product.highlight === '1' && product.category === 'snacks')
      .slice(0, 5);

    const sectionTopRatedPastelProducts = staticProducts
      .filter(product => product.highlight === '1' && product.category === 'pasteleria')
      .slice(0, 5);

    const allCategoryRecipe = [
      { category: 'pasteleria' },
      { category: 'reposteria' },
      { category: 'panaderia' },
      { category: 'snacks' }
    ];

    const sectionTopRatedCakesRecipe = staticRecipes
      .filter(recipe => (recipe.category === 'pasteleria' || recipe.category === 'snacks') && recipe.rating >= 4.5)
      .slice(0, 11);

    const sectionTopRatedYieldRecipies = staticRecipes
      .filter(recipe => recipe.yield >= 8 && recipe.rating >= 4.5)
      .slice(0, 3);

    const sectionTopRatedHighLightProducts = staticProducts
      .filter(product => product.yield >= 8 && product.highlight === '1')
      .slice(0, 5);

    return Promise.resolve({
      success: true,
      sectionTopRatedSnacksProducts: {
        count: sectionTopRatedSnacksProducts.length,
        data: sectionTopRatedSnacksProducts
      },
      sectionTopRatedPastelProducts: {
        count: sectionTopRatedPastelProducts.length,
        data: sectionTopRatedPastelProducts
      },
      allCategoryRecipe: {
        count: allCategoryRecipe.length,
        data: allCategoryRecipe
      },
      sectionTopRatedCakesRecipe: {
        count: sectionTopRatedCakesRecipe.length,
        data: sectionTopRatedCakesRecipe
      },
      sectionTopRatedYieldRecipies: {
        count: sectionTopRatedYieldRecipies.length,
        data: sectionTopRatedYieldRecipies
      },
      sectionTopRatedHighLightProducts: {
        count: sectionTopRatedHighLightProducts.length,
        data: sectionTopRatedHighLightProducts
      }
    });
  }

  // Búsqueda global
  static globalSearch({ searchTerm, lastId = 0, searchType = 'all' }) {
    const limit = 20;
    let productsResults = [];
    let recipesResults = [];

    if (searchType === 'all' || searchType === 'products') {
      productsResults = staticProducts
        .filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(product => product.id > lastId)
        .slice(0, limit)
        .map(product => ({ ...product, type: 'product' }));
    }

    if (searchType === 'all' || searchType === 'recipes') {
      recipesResults = staticRecipes
        .filter(recipe => 
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.autor.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(recipe => recipe.id > lastId)
        .slice(0, limit)
        .map(recipe => ({ ...recipe, type: 'recipe' }));
    }

    const allResults = [...productsResults, ...recipesResults]
      .sort((a, b) => a.id - b.id)
      .slice(0, limit);

    const lastSearchId = allResults.length > 0 
      ? allResults[allResults.length - 1].id 
      : lastId;

    const hasMore = allResults.length === limit;

    return Promise.resolve({
      success: true,
      searchResults: {
        count: allResults.length,
        productsCount: productsResults.length,
        recipesCount: recipesResults.length,
        data: allResults,
        lastId: lastSearchId,
        hasMore: hasMore,
        searchTerm: searchTerm,
        searchType: searchType
      }
    });
  }

  // Obtener productos paginados
  static getFeaturedProducts(lastId = 0) {
    const limit = 20;
    const pageProducts = staticProducts
      .filter(product => product.id > lastId)
      .slice(0, limit);

    const lastProductsId = pageProducts.length > 0 
      ? pageProducts[pageProducts.length - 1].id 
      : lastId;

    const hasMore = pageProducts.length === limit;

    return Promise.resolve({
      success: true,
      pageProducts: {
        count: pageProducts.length,
        data: pageProducts,
        lastId: lastProductsId,
        hasMore: hasMore
      }
    });
  }

  // Buscar productos por nombre
  static searchProductsByName({ searchTerm, lastId = 0 }) {
    const limit = 20;
    const searchResults = staticProducts
      .filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.id > lastId
      )
      .slice(0, limit);

    const lastSearchId = searchResults.length > 0 
      ? searchResults[searchResults.length - 1].id 
      : lastId;

    const hasMore = searchResults.length === limit;

    return Promise.resolve({
      success: true,
      searchResults: {
        count: searchResults.length,
        data: searchResults,
        lastId: lastSearchId,
        hasMore: hasMore,
        searchTerm: searchTerm
      }
    });
  }

  // Obtener recetas paginadas
  static getFeaturedRecipes(lastId = 0) {
    const limit = 20;
    const pageRecipes = staticRecipes
      .filter(recipe => recipe.id > lastId)
      .slice(0, limit);

    const lastRecipesId = pageRecipes.length > 0 
      ? pageRecipes[pageRecipes.length - 1].id 
      : lastId;

    const hasMore = pageRecipes.length === limit;

    return Promise.resolve({
      success: true,
      pageRecipes: {
        count: pageRecipes.length,
        data: pageRecipes,
        lastId: lastRecipesId,
        hasMore: hasMore
      }
    });
  }

  // Búsqueda avanzada de recetas
  static searchRecipes(filters) {
    const { 
      searchTerm, 
      cookingTime, 
      ingredient, 
      category, 
      region, 
      difficulty,
      lastId = 0 
    } = filters;

    const limit = 20;
    
    let filteredRecipes = staticRecipes.filter(recipe => recipe.id > lastId);

    if (searchTerm && searchTerm.trim() !== '') {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.autor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (cookingTime && cookingTime.trim() !== '') {
      // Implementar lógica de filtrado por tiempo de cocción según sea necesario
    }

    if (ingredient && ingredient.trim() !== '') {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.ingredients.toLowerCase().includes(ingredient.toLowerCase())
      );
    }

    if (category && category.trim() !== '') {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.category === category.trim()
      );
    }

    if (region && region.trim() !== '') {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.region === region.trim()
      );
    }

    if (difficulty && difficulty.trim() !== '') {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.difficulty === difficulty.trim()
      );
    }

    const searchResults = filteredRecipes.slice(0, limit);
    const lastSearchId = searchResults.length > 0 
      ? searchResults[searchResults.length - 1].id 
      : lastId;

    const hasMore = searchResults.length === limit;

    return Promise.resolve({
      success: true,
      searchResults: {
        count: searchResults.length,
        data: searchResults,
        lastId: lastSearchId,
        hasMore: hasMore,
        filtersUsed: {
          searchTerm: searchTerm || null,
          cookingTime: cookingTime || null,
          ingredient: ingredient || null,
          category: category || null,
          region: region || null,
          difficulty: difficulty || null
        }
      }
    });
  }
}

export default StaticDataService;