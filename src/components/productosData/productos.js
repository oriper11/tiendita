export default function getItemsFromAPI() {
    const itemShop = [
      {
        id: 1,
        title: "Paño tarot astrológico árbol y zodiaco constelaciones",
        price: 1560,
        stock: 54,
        category: "accesorios",
        thumbnail: "https://th.bing.com/th/id/OIP.46JR_mAn_o_51-VaVFpt_QHaHa?pid=ImgDet&rs=1",
        description: "Hermoso paño Árbol y Zodiaco constelaciones para lecturas de Tarot Astrológico, con bolsa para guardar mazo. Tela, tropical mecánico.",
      },
      {
        id: 2,
        title: "Kit 3 dados astrológicos Tarot de acrílico con instrucciones",
        description: "Kit de 3 dados astrológicos para tiradas de tarot y/o astrológicas en bolsita de gasa o lienzo. Uno representa los signos, otro representa las casas, y otro los planetas.",
        price: 2500,
        stock: 22,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_750171-MLA47415763693_092021-F.webp",
      },
      {
        id: 3,
        title: "Libro Astrologia Del Liderazgo [ilustrado] - Suarez Valente",
        description: "",
        price: 3400,
        stock: 133,
        category: "libros",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_700860-MLA44558709878_012021-F.webp",
      },
      {
        id: 4,
        title: "Libro Astro-lógica - F. Brizuela - L. Brizuela - Kier",
        description: "Guía inicial para el estudio de la astrología.",
        price: 6000,
        stock: 22,
        category: "libros",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_749201-MLA49975482561_052022-F.webp",
      },
      {
        id: 5,
        title: "Kit de limpieza astrologico: vela, sales , perfume áurico",
        description:
          "Set de productos: vela aromática, sales de baño, shower gel, perfume áurico inspirados en los elementos naturales (fuego, tierra, aire y Aqua) de los signos zodiacales",
        price: 499,
        stock: 32,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_698470-MLA47659084132_092021-F.webp",
      },
      {
        id: 6,
        title: "Luna Negra ,la - Coutela , Jacques - Carcamo",
        description:
          "Interpretación completa de Lilith",
        price: 4000,
        stock: 83,
        category: "libros",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_769672-MLA49416594741_032022-F.webp",
      },
    
      {
        id: 7,
        title: "Asuntos Venus + Alumbra La Luna - Lu Gaitán",
        description:
          "Un libro que tiene historias de vida reales, analizadas en clave astrológica.",
        price: 8000,
        stock: 68,
        category: "libros",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_765083-MLA50473464271_062022-F.webp",
      },
    
      {
        id: 8,
        title: "Cuadro Carta Natal/astral Zodiaco 20x30",
        description:
          "Hermoso cuadro de una carta natal/astral 20x30cm el cual incluye diagrama, más los datos personales (no trae informe).",
        price: 3500,
        stock: 100,
        category: "decoracion",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_916895-MLA47013203194_082021-F.webp",
      },
      {
        id: 9,
        title: "Sahumerios Sagrada Madre Lavanda & Olíbano Linea Hierbas",
        description: "Desde tiempos muy antiguos la Lavanda y el Incienso (Olíbano) son usados en rituales y ceremonias como protectores, purificadores y neutralizadores de energías.",        
        price:400 ,
        stock: 96,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/1000x1000/1582060867_6699fcf8.jpg",
      },
      {
        id: 10,
        title: "Palo santo - Limpieza de ambientes",
        description:
          "El palo santo LIVE THAI es 100% puro, no es mezcla de maderas. De origen peruano es muy concentrado y súper perfumado.",
        price: 600,
        stock: 89,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_994187-MLA31352679697_072019-F.webp",
      },
      {
        id: 11,
        title: "Las doce casas - Howard Sasportas",
        description:
          "Astrología general",
        price: 3000,
        stock: 65,
        category: "libros",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_947257-MLA28564696484_112018-F.webp",
      },
      {
        id: 12,
        title: "ProductosAccesoriosSahumadores.Sahumador Copalera Cerámica Grande Sagrada Madre",
        description: "COPALERAS SAHUMADOR",
        price: 1500,
        stock: 52,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/400x400/1625184812_e7ccdd2e.jpg",
      },
      {
        id: 13,
        title: "Bomba carbón X12 defumador Sagrada Madre. Aromas Limpieza Zen",
        description:
          "Limpieza Energética. Cantidad por caja: 12 carbones. Los Carbones Defumador se utilizan para sahumar con ramas o resinas. Dan una base de calor constante para un correcto sahumado.",
        price: 400,
        stock: 61,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_739433-MLA51775368825_092022-F.webp",
      },
      {
        id: 14,
        title: "Sahumador Cemento Cuenco Grande",
        description:
          "El Sahumador Cemento Cuenco Grande es perfecto para sahumar en cualquier espacio. Además es un Porta sahumerio",
        price: 900,
        stock: 50,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1612227058_05374e76.jpg",
      },
      {
        id: 15,
        title: "Cascada de Humo Mano con Flor Grande",
        description:
          "Fuente Cascada Humo. Modelo: Mano grande.Material: Yeso Negro.Alto: 17.cm",
        price: 800,
        stock: 35,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1626891195_f9bca0b2.jpg",
      },
      {
        id: 16,
        title: "Lampara de Sal Cilindrica",
        description:
          "Modelo Cilindro. Altura 15cm. Ancho 10cm.",
        price: 1900,
        stock: 110,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1635896572_8b64c3c5.jpg",
      },
      {
        id: 17,
        title: "Oleum 13A - Concentración Sagrada Madre",
        description:
          "Flores y Hierbas Aromáticas: Lavanda, Romero, Menta y Vetiver. Aceite esenciales que potencia la concentración",
        price: 1780,
        stock: 78,
        category: "accesorios",
        thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1661296184_11eea9f1.jpg",
      },
      {
        id: 18,
        title: "Cartas Mazo Tarot Marsella + Guía Básica",
        description:
          "Marselles Marsella",
        price: 40,
        stock: 88,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_836093-MLA40406790943_012020-F.webp",
      },
      {
        id: 19,
        title: "Oráculo Magia Simple (edición Tradicional) - Cápsula Dorada",
        description:
          "Mazo de 60 cartas full color con respuestas cortitas y al pie.",
        price: 3500,
        stock: 54,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_770289-MLA46795429522_072021-F.webp",
      },
      {
        id: 20,
        title: "Oráculo Flores Místicas - Cápsula Dorada",
        description:
          "Una baraja luminosa y transformadora, inspirada en las esencias de la terapia floral tradicional inglesa.",
        price: 3400,
        stock: 140,
        category: "accesorios",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_829107-MLA48088237349_112021-F.webp",
      },
      
  
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemShop);
      }, 2000);
    });
  }