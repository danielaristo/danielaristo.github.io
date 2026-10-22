window.DEPTOS = ["Amazonas","Antioquia","Arauca","Atlántico","Bogotá D.C.","Bolívar","Boyacá","Caldas","Caquetá","Casanare","Cauca","Cesar","Chocó","Córdoba","Cundinamarca","Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta","Nariño","Norte de Santander","Putumayo","Quindío","Risaralda","San Andrés y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaupés","Vichada","Exterior"];

window.SKILLS = [
  { k: "scopus", t: "Buscar en Scopus o WoS" },
  { k: "cienciometria", t: "Cienciometría o bibliometría (VOSviewer, Bibliometrix)" },
  { k: "leer", t: "Leer artículos científicos" },
  { k: "redactar", t: "Redactar textos científicos" },
  { k: "gestor", t: "Usar un gestor bibliográfico" },
  { k: "excel_pbi", t: "Excel o Power BI" },
  { k: "programacion", t: "Programación" }
];

window.SCHEMA = [
  { id: "A", title: "Perfil", qs: [
    { k: "nombre", n: 1, t: "Nombre completo", type: "text", req: true, ph: "Nombre y apellidos" },
    { k: "formacion", n: 2, t: "Formación de pregrado", type: "single", req: true, other: "formacion_otra",
      opts: ["Ingeniería civil", "Geología", "Geotecnista", "Ingeniería de minas o geológica", "Ingeniería ambiental o sanitaria", "Arquitectura o construcción", "Otra"] },
    { k: "grado", n: 3, t: "Año de grado del pregrado", type: "single", req: true,
      opts: ["Antes de 2005", "2005-2012", "2013-2018", "2019 o después"] },
    { k: "posgrado", n: 4, t: "Estudios de posgrado previos", type: "single", req: true,
      opts: ["Ninguno", "Especialización", "Maestría", "Doctorado"] }
  ]},
  { id: "B", title: "Dónde vive", qs: [
    { k: "departamento", n: 5, t: "Departamento y ciudad", type: "depto", req: true }
  ]},
  { id: "C", title: "En qué trabaja", qs: [
    { k: "ocupacion", n: 6, t: "Ocupación principal", type: "single", req: true,
      opts: ["Consultoría o diseño", "Construcción u obra", "Interventoría", "Entidad pública", "Academia o investigación", "Minería, energía o hidrocarburos", "Independiente", "Sin empleo actual"] },
    { k: "experiencia", n: 7, t: "Años de experiencia en geotecnia", type: "single", req: true,
      opts: ["Ninguno", "1-3", "4-7", "8-15", "Más de 15"] },
    { k: "areas", n: 8, t: "Áreas donde ha trabajado", type: "multi", req: true, max: 3, exclusive: "Ninguna aún",
      opts: ["Taludes y laderas", "Cimentaciones", "Excavaciones y túneles", "Vías y subrasantes", "Presas y relaves", "Geotecnia sísmica", "Gestión del riesgo", "Mecánica de rocas", "Geotecnia ambiental", "Ninguna aún"] },
    { k: "herramientas", n: 9, t: "Herramientas que usa", type: "multi", req: false, exclusive: "Ninguna", other: "herramientas_otra", otherLabel: "Otra",
      opts: ["PLAXIS", "GeoStudio", "FLAC", "OpenSees", "Excel", "Python o R", "QGIS o ArcGIS", "Power BI", "Otra", "Ninguna"] }
  ]},
  { id: "D", title: "Investigación", qs: [
    { k: "inv_previa", n: 10, t: "Experiencia investigativa previa", type: "multi", req: true, exclusive: "Ninguna",
      opts: ["Trabajo de grado", "Artículo publicado", "Ponencia", "Proyecto de investigación", "Ninguna"] },
    { k: "skills", n: 11, t: "¿Qué tan cómodo se siente con...?", type: "matrix", req: true, items: window.SKILLS, hint: "1 = nada, 5 = mucho" },
    { k: "ingles", n: 12, t: "Nivel de lectura en inglés", type: "single", req: true,
      opts: ["Básico (A1-A2)", "Intermedio (B1)", "Avanzado (B2)", "Muy avanzado (C1-C2)"] }
  ]},
  { id: "E", title: "Expectativas", qs: [
    { k: "motivacion", n: 13, t: "Motivación principal", type: "single", req: true,
      opts: ["Crecer profesionalmente", "Investigar o publicar", "Prepararme para un doctorado", "Cambiar de sector", "Docencia", "Requisito laboral"] },
    { k: "expectativa", n: 14, t: "Su expectativa con la maestría, en una frase", type: "textarea", req: true, max: 200, ph: "Aprender a investigar problemas reales de mi región" },
    { k: "preocupaciones", n: 15, t: "Mayores preocupaciones", type: "multi", req: false, max: 3, exclusive: "Ninguna",
      opts: ["Tiempo", "Escritura científica", "Estadística", "Inglés", "Acceso a laboratorios", "Definir mi trabajo de grado", "Costos", "Conectividad", "Ninguna"] }
  ]}
];
