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

export interface StoryChapter {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WEDDING_DATA = {
  couple: {
    groom: "Muhammad Atif",
    groomFullName: "Muhammad Atif bin Hj. Razak",
    bride: "Ismasari",
    brideFullName: "Ismasari binti Dato' Seri Kamaruddin",
    parentsGroom: "Hj. Razak bin Othman & Hjh. Fauziah binti Ahmad",
    parentsBride: "Dato' Seri Kamaruddin bin Tan Sri Arshad & Datin Seri Rohani binti Ismail",
    shortNames: "Atif × Isma",
    initials: "A × I",
  },
  event: {
    title: "Walimatulurus",
    subtitle: "The Wedding Celebration",
    dayName: "SATURDAY",
    dayNum: "12",
    monthName: "DECEMBER",
    yearNum: "2026",
    dateFormatted: "Sabtu, 12 Disember 2026",
    hijriDate: "2 Rejab 1448H",
    akadTime: "10:00 AM",
    receptionTime: "12:30 PM — 4:30 PM",
    timeSpan: "10:00 Pagi — 4:30 Petang",
    targetDateIso: "2026-12-12T10:00:00+08:00",
    monthIndex: 11, // December (0-indexed)
    year: 2026,
    dayOfMonth: 12,
  },
  quranVerse: {
    arabic: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ",
    surah: "Surah Ar-Rum : 21",
    translation: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  },
  story: [
    {
      year: "2021",
      title: "THE BEGINNING",
      subtitle: "Pertemuan Pertama",
      description: "Bermula dengan secawan kopi di sebuah kafe seni di Bangsar. Perbualan ringkas tentang seni bina dan sastera bertukar menjadi bicara berjam-jam yang tidak pernah pudar.",
    },
    {
      year: "2023",
      title: "THE JOURNEY",
      subtitle: "Menyulam Persefahaman",
      description: "Mengharungi pelbagai musim kembara dan impian bersama. Belajar erti kesabaran, saling melengkapi ruang, dan mempercayai takdir yang tersusun indah.",
    },
    {
      year: "2026",
      title: "FOREVER BEGINS",
      subtitle: "Ikatan Abadi",
      description: "Dengan restu kedua ibu bapa dan titipan doa tulus sanak saudara, kami melangkah ke gerbang perkahwinan, memulakan babak terindah sebagai suami isteri.",
    },
  ] as StoryChapter[],
  venue: {
    name: "The Glasshouse at Seputeh",
    hall: "The Grand Conservatory & Courtyard Garden",
    address: "17, Lorong Syed Putra Kiri, Bukit Seputeh, 50460 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    googleMapsUrl: "https://maps.google.com/?q=The+Glasshouse+at+Seputeh+Kuala+Lumpur",
    wazeUrl: "https://waze.com/ul/hw283c7n6v",
    parkingNote: "Tempat letak kereta bertingkat percuma di kawasan venue. Perkhidmatan Valet disediakan di lobi utama dewan.",
    transitNote: "5 minit perjalanan dari KL Sentral / Mid Valley Megamall (mesra Grab / teksi).",
  },
  timeline: [
    {
      time: "10:00 AM",
      title: "Upacara Akad Nikah & Ijab Qabul",
      description: "Lafaz akad nikah, penyerahan mas kahwin, pembatalan air sembahyang dan bacaan doa kesyukuran.",
      category: "formal",
    },
    {
      time: "11:30 AM",
      title: "Sesi Restu Keluarga & Doa Selamat",
      description: "Upacara menepung tawar dan titipan restu daripada kedua-dua belah keluarga mempelai.",
      category: "formal",
    },
    {
      time: "12:30 PM",
      title: "Ketibaan Tetamu & Perarakan Masuk Mempelai",
      description: "Ketibaan para tetamu jemputan disusuli perarakan masuk pengantin berbusana songket diraja.",
      category: "reception",
    },
    {
      time: "01:00 PM",
      title: "Jamuan Santapan Diraja & Kenduri Raikan Tetamu",
      description: "Makan beradab bersama keluarga disulami hidangan bufet istimewa dan alunan muzik akustik.",
      category: "reception",
    },
    {
      time: "02:30 PM",
      title: "Upacara Memotong Kek & Sesi Ramah Mesra",
      description: "Momen manis pemotongan kek perkahwinan, bersapa mesra dengan rakan taulan dan sesi bergambar.",
      category: "reception",
    },
    {
      time: "04:30 PM",
      title: "Sesi Fotografi & Majlis Melabuhkan Tirai",
      description: "Ucapan penghargaan daripada Atif & Isma kepada semua tetamu yang sudi hadir menyerikan hari bahagia.",
      category: "closing",
    },
  ] as TimelineItem[],
  dressCode: {
    theme: "Earth Tones & Minimalist Luxury",
    note: "Para tetamu digalakkan mengenakan pakaian formal atau tradisional Melayu berona tona bumi (earth tones) yang tenang dan elegan.",
    swatches: [
      {
        name: "Espresso",
        hex: "#25231F",
        tone: "Deep Espresso",
        description: "Tona arang klasik untuk suit formal atau samping tenun gelap.",
      },
      {
        name: "Warm Mocha",
        hex: "#716C64",
        tone: "Warm Mocha",
        description: "Padanan sempurna untuk Baju Melayu Teluk Belanga atau Kebaya moden.",
      },
      {
        name: "Champagne Sand",
        hex: "#B7A58A",
        tone: "Champagne Sand",
        description: "Aksen kemasan sutera lembut atau selendang bertekstur anggun.",
      },
      {
        name: "Soft Limestone",
        hex: "#DED6C9",
        tone: "Soft Limestone",
        description: "Warna neutral asas yang menenangkan dan melengkapi suasana dewan kaca.",
      },
      {
        name: "Muted Olive",
        hex: "#6F7565",
        tone: "Muted Olive",
        description: "Tona dedaun zaitun lembut yang harmoni dengan dekorasi botani dewan.",
      },
    ] as SwatchColor[],
    guidance: {
      men: {
        title: "Panduan Tetamu Lelaki",
        description: "Baju Melayu Teluk Belanga atau Cekak Musang lengkap bersamping tenun, atau Lounge Suit rona neutral / charcoal.",
        recommendations: [
          "Baju Melayu Cekak Musang / Teluk Belanga",
          "Samping Songket / Tenun Halus",
          "Sut Formal Charcoal / Taupe Muted",
        ],
      },
      women: {
        title: "Panduan Tetamu Wanita",
        description: "Baju Kurung Moden, Kebaya Labuh, Abaya atau Dress sopan berona earth tones lembut dan tekstur sutera matte.",
        recommendations: [
          "Kurung Moden / Riau Fabrik Sutera",
          "Kebaya Labuh Songket Tradisional",
          "Dress Labuh / Abaya Minimalis",
        ],
      },
    },
  },
  salamKaut: {
    title: "WITH LOVE",
    subtitle: "Tanda Ingatan Kasih",
    description: "Kehadiran dan titipan doa anda adalah anugerah paling bermakna buat kami. Bagi yang berhajat untuk menitipkan tanda ingatan kasih atau salam kaut digital, maklumat akaun disediakan seperti di bawah:",
    banks: [
      {
        bankName: "Maybank",
        accountNumber: "164298314502",
        accountHolder: "Muhammad Atif bin Razak",
        type: "Akaun Pengantin Lelaki",
      },
      {
        bankName: "CIMB Bank",
        accountNumber: "704189231184",
        accountHolder: "Ismasari binti Kamaruddin",
        type: "Akaun Pengantin Perempuan",
      },
    ],
    duitNowId: "019-3829104",
    duitNowName: "MUHAMMAD ATIF & ISMASARI",
  },
  contacts: [
    {
      name: "Hj. Razak",
      role: "Bapa Pengantin Lelaki",
      phone: "+60123456789",
      whatsappMessage: "Salam hormat Hj. Razak, saya tetamu ingin bertanya berkenaan majlis perkahwinan Atif & Isma.",
    },
    {
      name: "Dato' Seri Kamaruddin",
      role: "Bapa Pengantin Perempuan",
      phone: "+60198765432",
      whatsappMessage: "Salam hormat Dato' Seri Kamaruddin, saya tetamu ingin bertanya berkenaan majlis perkahwinan Atif & Isma.",
    },
    {
      name: "Puan Hanis",
      role: "Penyelaras Majlis (Coordinator)",
      phone: "+60133214567",
      whatsappMessage: "Salam Puan Hanis, saya ingin membuat semakan kehadiran / panduan lokasi majlis Atif & Isma.",
    },
  ] as ContactPerson[],
  importantNotes: [
    {
      title: "Mesra Keluarga & Kanak-kanak",
      desc: "Kerusi bayi (high chair) dan ruang santai mesra keluarga disediakan di aras bawah dewan.",
    },
    {
      title: "Peringatan Ketepatan Masa",
      desc: "Upacara akad nikah bermula tepat jam 10:00 pagi. Tetamu disyorkan tiba 20–30 minit lebih awal.",
    },
    {
      title: "Hashtag Rasmi Majlis",
      desc: "Sertakan hashtag #AtifIsma2026 semasa memuat naik momen indah anda di media sosial.",
    },
  ],
  initialWishes: [
    {
      id: "w-1",
      name: "Dr. Zulkifli & Keluarga",
      attendance: "hadir",
      pax: 2,
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Tahniah Atif & Isma! Semoga ikatan suci ini berkekalan hingga syurga firdausi.",
      date: "2 hari yang lalu",
      likes: 18,
    },
    {
      id: "w-2",
      name: "Farah Diana & Suami",
      attendance: "hadir",
      pax: 2,
      message: "Alhamdulillah tumpang gembira buat Isma dan Atif. Cantik dan berseri sangat jemputan digital ni. Jumpa di The Glasshouse nanti!",
      date: "Kemarin",
      likes: 12,
    },
    {
      id: "w-3",
      name: "Syed Danial & Rakan Sekerja",
      attendance: "hadir",
      pax: 3,
      message: "Tahniah sahabat Atif! Selamat menempuh alam berumah tangga. Moga dipermudahkan segala urusan persiapan hari bahagia.",
      date: "14 jam yang lalu",
      likes: 9,
    },
  ] as GuestWish[],
};
