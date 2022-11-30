import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWogv-ZhExtN7Y7NK7b0QzVZFs3UJUEbI",
  authDomain: "astrologiart.firebaseapp.com",
  projectId: "astrologiart",
  storageBucket: "astrologiart.appspot.com",
  messagingSenderId: "192689449732",
  appId: "1:192689449732:web:6fa8cfa63b4d845ca9fe51",
  measurementId: "G-GR3FMTJ8PT"
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);

export function testDatabase() {
  console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
  try { 
    const docRef = doc(DB, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("El producto no existe");
    }
  }
  catch(error){
    throw error;
  }
}


export async function getItemsFromAPI() {
  try {
   
    const collectionProducts = collection(DB, "products");

    let respuesta = await getDocs(collectionProducts);

    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const emptyArray = productsSnap.docs.length < 1;

  if (emptyArray) throw new Error("Categoría sin resultados");

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);

  return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products");
  const collectionOrdersRef = collection(DB, "buyorders");
  const batch = writeBatch(DB);

  let arrayIds = buyOrderData.items.map((item) => {
    return item.id;
  });

  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let productSnapshot = await getDocs(q);

  productSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;

    batch.update(doc.ref, { stock: stockActualizado });
  });

  const docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);

  batch.commit();

  return docOrderRef.id;
}

async function exportItemsToFirestore() {
  const items = [
    {
    id: 1,
    title: "PAÑO TAROT ASTROLÓGICO ÁRBOL Y ZODIACO CONSTELACIONES",
    price: 1560,
    stock: 54,
    discount:10,
    category: "accesorios",
    thumbnail: "https://th.bing.com/th/id/OIP.46JR_mAn_o_51-VaVFpt_QHaHa?pid=ImgDet&rs=1",
    description: "Hermoso paño Árbol y Zodiaco constelaciones para lecturas de Tarot Astrológico, con bolsa para guardar mazo. Tela, tropical mecánico.",
  },
  {
    id: 2,
    title: "KIT 3 DADOS ASTROLÓGICOS TAROT DE ACRÍLICO CON INSTRUCCIONES",
    description: "Kit de 3 dados astrológicos para tiradas de tarot y/o astrológicas en bolsita de gasa o lienzo. Uno representa los signos, otro representa las casas, y otro los planetas.",
    price: 2500,
    stock: 22,
    
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_750171-MLA47415763693_092021-F.webp",
  },
  {
    id: 3,
    title: "LIBRO ASTROLOGIA DEL LIDERAZGO - SUAREZ VALENTE",
    description: "",
    price: 3400,
    stock: 133,
    
    category: "libros",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_700860-MLA44558709878_012021-F.webp",
  },
  {
    id: 4,
    title: "LIBRO ASTRO-LÓGICA - F. BRIZUELA - L. BRIZUELA - KIER",
    description: "Guía inicial para el estudio de la astrología.",
    price: 6000,
    stock: 22,
    
    category: "libros",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_749201-MLA49975482561_052022-F.webp",
  },
  {
    id: 5,
    title: "KIT DE LIMPIEZA ASTROLÓGICO: VELA, SALES , PERFUME ÁURICO",
    description:
      "Set de productos: vela aromática, sales de baño, shower gel, perfume áurico inspirados en los elementos naturales (fuego, tierra, aire y Aqua) de los signos zodiacales",
    price: 499,
    stock: 32,
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_698470-MLA47659084132_092021-F.webp",
  },
  {
    id: 6,
    title: "LUNA NEGRA ,LA - COUTELA , JACQUES - CARCAMO",
    description:
      "Interpretación completa de Lilith",
    price: 4000,
    stock: 83,
    category: "libros",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_769672-MLA49416594741_032022-F.webp",
  },

  {
    id: 7,
    title: "ASUNTOS VENUS + ALUMBRA LA LUNA - LU GAITÁN",
    description:
      "Un libro que tiene historias de vida reales, analizadas en clave astrológica.",
    price: 8000,
    stock: 68,
    
    category: "libros",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_765083-MLA50473464271_062022-F.webp",
  },

  {
    id: 8,
    title: "CUADRO CARTA NATAL/ASTRAL ZODIACO 20X30",
    description:
      "Hermoso cuadro de una carta natal/astral 20x30cm el cual incluye diagrama, más los datos personales (no trae informe).",
    price: 3500,
    stock: 100,
    category: "servicios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_916895-MLA47013203194_082021-F.webp",
  },
  {
    id: 9,
    title: "SAHUMERIOS SAGRADA MADRE LAVANDA & OLÍBANO LINEA HIERBAS",
    description: "Desde tiempos muy antiguos la Lavanda y el Incienso (Olíbano) son usados en rituales y ceremonias como protectores, purificadores y neutralizadores de energías.",        
    price:400 ,
    stock: 96,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/1000x1000/1582060867_6699fcf8.jpg",
  },
  {
    id: 10,
    title: "PALO SANTO - LIMPIEZA DE AMBIENTES",
    description:
      "El palo santo LIVE THAI es 100% puro, no es mezcla de maderas. De origen peruano es muy concentrado y súper perfumado.",
    price: 600,
    stock: 89,
    
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_994187-MLA31352679697_072019-F.webp",
  },
  {
    id: 11,
    title: "LAS DOCE CASAS - HOWARD SASPORTAS",
    description:
      "Astrología general",
     price: 3000,
    stock: 65,
    category: "libros",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_947257-MLA28564696484_112018-F.webp",
  },
  {
    id: 12,
    title: "SAHUMADOR COPALERA CERÁMICA GRANDE SAGRADA MADRE",
    description: "COPALERAS SAHUMADOR",
    price: 1500,
    stock: 52,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/400x400/1625184812_e7ccdd2e.jpg",
  },
  {
    id: 13,
    title: "BOMBA CARBÓN X12 DEFUMADOR SAGRADA MADRE. AROMAS LIMPIEZA ZEN",
    description:
      "Limpieza Energética. Cantidad por caja: 12 carbones. Los Carbones Defumador se utilizan para sahumar con ramas o resinas. Dan una base de calor constante para un correcto sahumado.",
    price: 400,
    stock: 61,
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_739433-MLA51775368825_092022-F.webp",
  },
  {
    id: 14,
    title: "SAHUMADOR CEMENTO CUENCO GRANDE",
    description:
      "El Sahumador Cemento Cuenco Grande es perfecto para sahumar en cualquier espacio. Además es un Porta sahumerio",
    price: 900,
    stock: 50,
    discount:10,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1612227058_05374e76.jpg",
  },
  {
    id: 15,
    title: "CASCADA DE HUMO CON FLOR GRANDE",
    description:
      "Fuente Cascada Humo. Modelo: Mano grande.Material: Yeso Negro.Alto: 17.cm",
    price: 800,
    stock: 35,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1626891195_f9bca0b2.jpg",
  },
  {
    id: 16,
    title: "LAMPARA DE SAL CILINDRICA",
    description:
      "Modelo Cilindro. Altura 15cm. Ancho 10cm.",
    price: 1900,
    stock: 110,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1635896572_8b64c3c5.jpg",
  },
  {
    id: 17,
    title: "OLEUM 13A - CONCENTRACIÓN SAGRADA MADRE",
    description:
      "Flores y Hierbas Aromáticas: Lavanda, Romero, Menta y Vetiver. Aceite esenciales que potencia la concentración",
    price: 1780,
    stock: 78,
    category: "accesorios",
    thumbnail: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1661296184_11eea9f1.jpg",
  },
  {
    id: 18,
    title: "CARTAS MAZO TAROT MARSELLA + GUÍA BÁSICA",
    description:
      "Marselles Marsella",
    price: 400,
    stock: 88,
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_836093-MLA40406790943_012020-F.webp",
  },
  {
    id: 19,
    title: "ORÁCULO MAGIA SIMPLE (EDICIÓN TRADICIONAL) - CÁPSULA DORADA",
    description:
      "Mazo de 60 cartas full color con respuestas cortitas y al pie.",
    price: 3500,
    stock: 54,
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_770289-MLA46795429522_072021-F.webp",
  },
  {
    id: 20,
    title: "ORÁCULO FLORES MÍSTICAS - CÁPSULA DORADA",
    description:
      "Una baraja luminosa y transformadora, inspirada en las esencias de la terapia floral tradicional inglesa.",
    price: 3400,
    stock: 140,
    category: "accesorios",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_829107-MLA48088237349_112021-F.webp",
  },
  {
    id: 21,
    title: "INTRODUCCIÓN A LA CARTA ASTRAL",
    description:
      "La carta astral es un mapa o plano del cielo que representa las posiciones planetarias, en un determinado momento. Este diagrama, puede ser diseñado para una persona (carta natal), un país o un hecho específico, pero siempre los eventos estelares serán observados desde la perspectiva terrestre.La Astrología Occidental tiene un enfoque geocéntrico, es decir, se considera a la Tierra el centro del Universo, con los cuerpos celestes girando a su alrededor (aunque no sea científicamente cierto).En un efecto ilusorio, al observar los fenómenos planetarios desde la óptica terrestre, pareciera que la Tierra fuese el punto central, y que los astros se mueven en torno a ella.",
    price: 3000,
    stock: 1,
    category: "servicios",
    thumbnail: "https://assets.wemystic.com/wmcom/2018/10/carta-astral-850x640.jpg",
  },
  {
    id: 22,
    title: "INTRODUCCIÓN A CARTA NUMEROLÓGICA",
    description:
      "Cada número es un código que va más allá de cuantificar,  porque nos da la naturaleza o características de las personas, incluso de los animales, los eventos y los lugares. Todos tenemos nombres y apellidos  y una fecha de nacimiento que no se repite igual en otro ser humano, por ello digo que es como tu huella de identidad que es única, los números nos hablan de la personalidad,  del carácter, de tu actitud ante las situaciones, las emociones, los talentos, fortalezas, herencias familiares, los desafíos, las oportunidades e influencias de una persona.",
    price: 3000,
    stock: 1,
    category: "servicios",
    thumbnail: "https://th.bing.com/th/id/R.e90f0c76547ff90a859d9ee9004bd121?rik=Op66sH7cKJTvKA&riu=http%3a%2f%2fsobrehistoria.com%2fwp-content%2fuploads%2f2014%2f02%2fnumeros-romanos-tallados.jpg&ehk=dn%2bWVJas1JqmhajOm4wcgw4aCqNs%2fmQE1f5TH1p78BA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 23,
    title: "CARTA ASTRAL + CARTA NUMEROLÓGICA.",
    description:
      "Combinación de ambas técnicas para el descubrimiento de tu identidad.",
    price: 5200,
    stock: 1,
    category: "servicios",
    thumbnail: "https://1.bp.blogspot.com/-OUd_zl23hzI/UP80ZZobk_I/AAAAAAAAASs/sER207cWPlQ/s1600/tatvasat1+(1).jpg",
  },
  {
    id: 24,
    title: "CONSULTA AL TAROT + MENSAJE DE ORÁCULO",
    description:
      "Se realiza vía asincrónica, una tirada de cartas en base a tres preguntas que necesites resolver al momento. No son de carácter predictivo. Se envía las imágenes de las cartas, el significado en relación con la cuestión presentada. Al finalizar se envía una mensaje del oráculo de los ángeles.",
    price: 1500,
    stock: 1,
    category: "servicios",
    thumbnail: "https://th.bing.com/th/id/OIP.s78CUBQI32sfhJn8RHFwnQAAAA?pid=ImgDet&rs=1",
  },
];

const collectionRef = collection(DB, "products");

for (let item of items) {
  item.index = item.id;
  delete item.id;
  const docRef = await addDoc(collectionRef, item);
  console.log("Document created with ID", docRef.id);
}
}