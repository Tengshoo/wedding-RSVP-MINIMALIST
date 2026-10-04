export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  category: 'formal' | 'reception' | 'closing';
}

export interface SwatchColor {
  name: string;
  hex: string;
  tone: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  whatsappMessage: string;
}

export interface GuestWish {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir';
  pax: number;
  message: string;
  date: string;
  likes: number;
}

export const WEDDING_DATA = {
  couple: {
    groom: "Tengku Daniel",
    groomFullName: "Tengku Daniel bin Tengku Haris",
    bride: "Nur Iman",
    brideFullName: "Nur Iman binti Dato' Seri Azlan",
    parentsGroom: "Tengku Haris bin Tengku Mansor & Tengku Sharifah Mariam",
    parentsBride: "Dato' Seri Azlan bin Tan Sri Hamdan & Datin Seri Zaidah binti Ariffin",
    shortNames: "Daniel & Iman",
    initials: "D & I",
  },
  event: {
    title: "Walimatulurus",
    subtitle: "The Wedding Celebration",
    dateFormatted: "Sabtu, 14 November 2026",
    hijriDate: "4 Jamadilawal 1448H",
    timeSpan: "4:00 Petang — 11:00 Malam",
    targetDateIso: "2026-11-14T16:00:00+08:00",
    monthIndex: 10, // November (0-indexed)
    year: 2026,
    dayOfMonth: 14,
  },
  quranVerse: {
    arabic: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ",
    surah: "Surah Ar-Rum : 21",
    translation: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  },
  venue: {
    name: "The Glasshouse at Seputeh",
    hall: "Grand Conservatory & Courtyard",
    address: "17, Lorong Syed Putra Kiri, Bukit Seputeh, 50460 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    googleMapsUrl: "https://maps.google.com/?q=The+Glasshouse+at+Seputeh+Kuala+Lumpur",
    wazeUrl: "https://waze.com/ul/hw283c7n6v",
    parkingNote: "Tempat letak kereta bertingkat percuma di kawasan venue. Perkhidmatan Valet disediakan di pintu lobi utama.",
    transitNote: "5 minit perjalanan menaiki Grab / Teksi dari Stesen LRT/KTM Mid Valley atau KL Sentral.",
  },
  timeline: [
    {
      time: "16:00",
      title: "Ketibaan Tetamu Jemputan",
      description: "Pendaftaran tetamu, iringan alunan muzik akustik lembut, dan jamuan ringan di ruang legar.",
      category: "formal",
    },
    {
      time: "16:30",
      title: "Upacara Akad Nikah & Ijab Qabul",
      description: "Lafaz akad nikah, penyerahan mas kahwin, pembatalan air sembahyang dan sesi doa kesyukuran.",
      category: "formal",
    },
    {
      time: "17:15",
      title: "Perarakan Masuk Pengantin & Bersanding",
      description: "Perarakan masuk mempelai diiringi paluan kompang berirama moden dan alunan selawat.",
      category: "reception",
    },
    {
      time: "17:45",
      title: "Bacaan Doa & Upacara Menepung Tawar",
      description: "Titipan restu oleh ahli keluarga terdekat serta doa keberkatan mahligai bahagia.",
      category: "reception",
    },
    {
      time: "18:15",
      title: "Jamuan Santapan Diraja & Kenduri Beradab",
      description: "Makan beradab bersama kedua-dua belah keluarga disulami hidangan bufet mewah buat tetamu.",
      category: "reception",
    },
    {
      time: "20:30",
      title: "Upacara Memotong Kek & Sesi Ramah Mesra",
      description: "Momen manis pemotongan kek perkahwinan, perkongsian santai, dan sesi fotografi kenangan.",
      category: "reception",
    },
    {
      time: "23:00",
      title: "Sesi Fotografi & Majlis Bersurai",
      description: "Ucapan penutup penghargaan daripada keluarga mempelai dan majlis melabuhkan tirainya.",
      category: "closing",
    },
  ] as TimelineItem[],
  dressCode: {
    theme: "Neutral Minimalis & Formal Elegan",
    note: "Para tetamu digalakkan mengenakan pakaian formal atau tradisional bertemakan tona warna bumi (earth tones) yang tenang dan mewah.",
    swatches: [
      {
        name: "Coklat Gelap",
        hex: "#5A3825",
        tone: "Deep Espresso",
        description: "Tona mewah gelap untuk suit atau samping songket.",
      },
      {
        name: "Mocha Hangat",
        hex: "#8D735C",
        tone: "Warm Mocha",
        description: "Padanan sempurna untuk Baju Melayu atau Kebaya moden.",
      },
      {
        name: "Latte Lembut",
        hex: "#C5B5A3",
        tone: "Soft Latte",
        description: "Warna neutral klasik yang anggun dan menyejukkan pandangan.",
      },
      {
        name: "Krim Cerah",
        hex: "#E7DEC8",
        tone: "Warm Alabaster",
        description: "Tona lembut asas yang melengkapi suasana dewan kaca.",
      },
      {
        name: "Pasir Mutiara",
        hex: "#D4C5B9",
        tone: "Pearl Sand",
        description: "Aksen kemasan sutera atau selendang bertekstur.",
      },
    ] as SwatchColor[],
    guidance: {
      men: {
        title: "Panduan Busana Tetamu Lelaki",
        description: "Baju Melayu Cekak Musang atau Teluk Belanga lengkap bersamping warna sepadan, atau Sut Formal / Smart Casual dalam tona neutral gelap.",
        recommendations: ["Baju Melayu Teluk Belanga / Cekak Musang", "Samping Songket / Tenun Halus", "Lounge Suit Charcoal / Taupe"],
      },
      women: {
        title: "Panduan Busana Tetamu Wanita",
        description: "Baju Kurung Moden, Kebaya Labuh, Abaya atau Dress sopan berona pastel lembut dan neutral earth tones.",
        recommendations: ["Kurung Pahang / Moden Fabrik Sutera", "Kebaya Labuh Songket Tradisional", "Dress Labuh / Jubah Minimalis"],
      },
    },
  },
  salamKaut: {
    title: "Salam Kaut Digital & Hadiah Kasih",
    description: "Doa dan kehadiran anda adalah hadiah paling bermakna buat kami. Sekiranya ingin menitipkan hadiah kasih atau salam kaut digital, maklumat akaun disediakan seperti di bawah:",
    banks: [
      {
        bankName: "Maybank",
        accountNumber: "164298314502",
        accountHolder: "Tengku Daniel bin Tengku Haris",
        type: "Akaun Pengantin Lelaki",
      },
      {
        bankName: "CIMB Bank",
        accountNumber: "704189231184",
        accountHolder: "Nur Iman binti Azlan",
        type: "Akaun Pengantin Perempuan",
      },
    ],
    duitNowId: "019-3829104",
    duitNowName: "TENGKU DANIEL & NUR IMAN",
  },
  contacts: [
    {
      name: "Tengku Haris",
      role: "Bapa Pengantin Lelaki",
      phone: "+60123456789",
      whatsappMessage: "Salam hormat En Tengku Haris, saya ingin bertanya berkenaan majlis perkahwinan Daniel & Iman.",
    },
    {
      name: "Dato' Seri Azlan",
      role: "Bapa Pengantin Perempuan",
      phone: "+60198765432",
      whatsappMessage: "Salam hormat Dato' Seri Azlan, saya ingin bertanya berkenaan majlis perkahwinan Daniel & Iman.",
    },
    {
      name: "Puan Hanis",
      role: "Penyelaras Majlis (Wedding Planner)",
      phone: "+60133214567",
      whatsappMessage: "Salam Puan Hanis, saya tetamu majlis perkahwinan Daniel & Iman ingin membuat semakan kehadiran / lokasi.",
    },
  ] as ContactPerson[],
  importantNotes: [
    {
      title: "Mesra Keluarga & Kanak-kanak",
      desc: "Kanak-kanak amat dialu-alukan. Kerusi kanak-kanak (baby high chair) disediakan di dewan makan.",
    },
    {
      title: "Peringatan Ketepatan Masa",
      desc: "Upacara Akad Nikah akan bermula tepat jam 4:30 petang. Tetamu disyorkan tiba 30 minit lebih awal.",
    },
    {
      title: "Etika Fotografi & Media Sosial",
      desc: "Gunakan hashtag rasmi majlis #DanielImanForever ketika memuat naik momen indah anda di media sosial.",
    },
  ],
  initialWishes: [
    {
      id: "w-1",
      name: "Dato' Ir. Farhan & Keluarga",
      attendance: "hadir",
      pax: 2,
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Tahniah buat kedua-dua mempelai Daniel & Iman. Semoga mahligai yang dibina sentiasa diberkati sakinah, mawaddah wa rahmah hingga ke jannah.",
      date: "2 hari yang lalu",
      likes: 14,
    },
    {
      id: "w-2",
      name: "Dr. Nadia Kamaruddin",
      attendance: "hadir",
      pax: 1,
      message: "Cantik sangat tema majlis! Alhamdulillah, tumpang gembira melihat kalian berdua bersatu. Selamat melangkah ke alam rumah tangga Iman dan Daniel tersayang.",
      date: "1 hari yang lalu",
      likes: 9,
    },
    {
      id: "w-3",
      name: "Megat Amirul & Isteri",
      attendance: "hadir",
      pax: 2,
      message: "Tahniah sahabat Daniel! Semoga dipermudahkan segala urusan menjelang hari bahagia nanti. Jumpa di dewan kaca The Glasshouse!",
      date: "12 jam yang lalu",
      likes: 7,
    },
    {
      id: "w-4",
      name: "Aina Sofea & Rakan Sekelas UKM",
      attendance: "hadir",
      pax: 4,
      message: "Iman, we are so happy for you! Moga jodoh berkekalan hingga syurga firdausi. Tak sabar nak raikan cinta korang berdua!",
      date: "3 jam yang lalu",
      likes: 12,
    },
  ] as GuestWish[],
};
