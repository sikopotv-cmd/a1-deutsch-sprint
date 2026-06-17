const units = [
  {
    id: "unit01",
    code: "Unit 01",
    title: "Sich vorstellen",
    subtitle: "Perkenalan diri",
    goals: [
      "Memperkenalkan nama, asal, domisili, bahasa, dan pekerjaan.",
      "Bertanya informasi dasar kepada orang lain.",
      "Memakai sein, heißen, kommen, wohnen, sprechen, dan lernen."
    ],
    grammar: [
      {
        title: "Verb posisi kedua",
        body: "Dalam kalimat utama bahasa Jerman, kata kerja biasanya berada di posisi kedua: Ich lerne Deutsch. Heute lerne ich Deutsch."
      },
      {
        title: "du dan Sie",
        body: "Gunakan du untuk informal dan Sie untuk formal. Untuk administrasi, kursus, dan interview, latih bentuk Sie sejak awal."
      }
    ],
    phrases: [
      ["Ich heiße Ahmad.", "Nama saya Ahmad."],
      ["Ich komme aus Indonesien.", "Saya berasal dari Indonesia."],
      ["Ich wohne in Bandung.", "Saya tinggal di Bandung."],
      ["Ich spreche Indonesisch.", "Saya berbicara bahasa Indonesia."],
      ["Ich arbeite freiberuflich.", "Saya bekerja freelance."],
      ["Ich lerne Deutsch für eine Ausbildung.", "Saya belajar bahasa Jerman untuk Ausbildung."]
    ],
    flashcards: [
      ["Wie heißen Sie?", "Siapa nama Anda?"],
      ["Woher kommen Sie?", "Anda berasal dari mana?"],
      ["Wo wohnen Sie?", "Anda tinggal di mana?"],
      ["Was machen Sie beruflich?", "Apa pekerjaan Anda?"],
      ["Ich bin Freelancer.", "Saya adalah freelancer."],
      ["Ich möchte eine Ausbildung machen.", "Saya ingin mengikuti Ausbildung."]
    ],
    quiz: [
      {
        q: "Apa arti 'Ich komme aus Indonesien'?",
        options: ["Saya berasal dari Indonesia", "Saya tinggal di Indonesia", "Saya belajar di Indonesia"],
        answer: 0
      },
      {
        q: "Pertanyaan formal untuk 'Siapa nama Anda?'",
        options: ["Wie heißt du?", "Wie heißen Sie?", "Wo wohnen Sie?"],
        answer: 1
      },
      {
        q: "Kalimat yang benar untuk 'Saya belajar bahasa Jerman' adalah ...",
        options: ["Ich Deutsch lerne.", "Ich lerne Deutsch.", "Deutsch ich lerne."],
        answer: 1
      }
    ],
    builder: [
      { words: ["Ich", "lerne", "Deutsch"], answer: "Ich lerne Deutsch" },
      { words: ["Ich", "wohne", "in", "Bandung"], answer: "Ich wohne in Bandung" },
      { words: ["Ich", "arbeite", "als", "Freelancer"], answer: "Ich arbeite als Freelancer" }
    ],
    speaking: [
      "Wie heißen Sie?",
      "Woher kommen Sie?",
      "Wo wohnen Sie?",
      "Was machen Sie beruflich?",
      "Warum lernen Sie Deutsch?"
    ],
    writing: "Tulis profil 60-80 kata: nama, asal, domisili, keluarga, pekerjaan, bahasa, dan alasan belajar Jerman.",
    checklist: [
      "Saya bisa memperkenalkan diri tanpa membaca.",
      "Saya bisa bertanya nama, asal, domisili, dan pekerjaan.",
      "Saya paham bedanya du dan Sie.",
      "Saya sudah membuat satu rekaman speaking."
    ]
  },
  {
    id: "unit02",
    code: "Unit 02",
    title: "Daten, Zahlen und Termine",
    subtitle: "Data pribadi, angka, dan janji",
    goals: [
      "Mengeja nama dan alamat email.",
      "Menyebut angka, umur, nomor telepon, tanggal, dan jam.",
      "Membuat janji sederhana dengan hari dan jam."
    ],
    grammar: [
      {
        title: "am dan um",
        body: "Gunakan am untuk hari atau tanggal, dan um untuk jam: Der Kurs ist am Montag um acht Uhr."
      },
      {
        title: "Ja/Nein-Fragen",
        body: "Untuk pertanyaan ya/tidak, kata kerja berada di awal: Lernen Sie Deutsch? Haben Sie am Montag Zeit?"
      }
    ],
    phrases: [
      ["Ich bin 35 Jahre alt.", "Saya berumur 35 tahun."],
      ["Meine Telefonnummer ist 0812 3456 7890.", "Nomor telepon saya 0812 3456 7890."],
      ["Meine E-Mail-Adresse ist ahmad@example.com.", "Alamat email saya ahmad@example.com."],
      ["Der Termin ist am Montag.", "Janjinya pada hari Senin."],
      ["Der Kurs ist um acht Uhr.", "Kursusnya jam delapan."],
      ["Können Sie das bitte wiederholen?", "Bisakah Anda mengulanginya?"]
    ],
    flashcards: [
      ["die Telefonnummer", "nomor telepon"],
      ["die E-Mail-Adresse", "alamat email"],
      ["der Termin", "janji / appointment"],
      ["Wie spät ist es?", "Jam berapa sekarang?"],
      ["am Montag", "pada hari Senin"],
      ["um acht Uhr", "jam delapan"]
    ],
    quiz: [
      {
        q: "Untuk hari, gunakan ...",
        options: ["am", "um", "aus"],
        answer: 0
      },
      {
        q: "Untuk jam, gunakan ...",
        options: ["in", "am", "um"],
        answer: 2
      },
      {
        q: "Apa arti 'Wie ist Ihre Telefonnummer?'",
        options: ["Di mana nomor telepon Anda?", "Berapa nomor telepon Anda?", "Kapan nomor telepon Anda?"],
        answer: 1
      }
    ],
    builder: [
      { words: ["Ich", "bin", "35", "Jahre", "alt"], answer: "Ich bin 35 Jahre alt" },
      { words: ["Der", "Termin", "ist", "am", "Montag"], answer: "Der Termin ist am Montag" },
      { words: ["Der", "Kurs", "ist", "um", "acht", "Uhr"], answer: "Der Kurs ist um acht Uhr" }
    ],
    speaking: [
      "Wie alt sind Sie?",
      "Wie ist Ihre Telefonnummer?",
      "Wie ist Ihre E-Mail-Adresse?",
      "Wann ist Ihr Deutschkurs?"
    ],
    writing: "Tulis pesan pendek ke tempat kursus: nama, ingin belajar Deutsch, tanya jadwal A1, tanya harga, tutup dengan sopan.",
    checklist: [
      "Saya bisa menyebut angka 0-100.",
      "Saya bisa mengeja nama dan email.",
      "Saya paham am untuk hari dan um untuk jam.",
      "Saya bisa membuat janji sederhana."
    ]
  },
  {
    id: "unit03",
    code: "Unit 03",
    title: "Familie und persönliche Situation",
    subtitle: "Keluarga dan kondisi pribadi",
    goals: [
      "Menyebut anggota keluarga.",
      "Menjelaskan status menikah, anak, dan kondisi keluarga sederhana.",
      "Memakai haben, mein/meine, dan kein/keine/keinen."
    ],
    grammar: [
      {
        title: "haben",
        body: "Haben berarti punya: ich habe, du hast, er/sie hat, Sie haben. Contoh: Ich habe eine Familie."
      },
      {
        title: "mein dan meine",
        body: "Gunakan mein untuk maskulin/netral dan meine untuk feminin/plural: mein Vater, meine Mutter, mein Kind, meine Kinder."
      }
    ],
    phrases: [
      ["Ich bin verheiratet.", "Saya sudah menikah."],
      ["Ich habe eine Familie.", "Saya punya keluarga."],
      ["Meine Frau ist schwanger.", "Istri saya sedang hamil."],
      ["Ich habe einen Sohn.", "Saya punya seorang anak laki-laki."],
      ["Wir wohnen zusammen in Indonesien.", "Kami tinggal bersama di Indonesia."],
      ["Meine Familie ist sehr wichtig für mich.", "Keluarga saya sangat penting bagi saya."]
    ],
    flashcards: [
      ["die Familie", "keluarga"],
      ["der Vater", "ayah"],
      ["die Mutter", "ibu"],
      ["das Kind", "anak"],
      ["der Sohn", "anak laki-laki"],
      ["schwanger", "hamil"]
    ],
    quiz: [
      {
        q: "Kalimat 'Saya sudah menikah' adalah ...",
        options: ["Ich bin ledig.", "Ich bin verheiratet.", "Ich habe verheiratet."],
        answer: 1
      },
      {
        q: "Mana yang benar?",
        options: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        answer: 1
      },
      {
        q: "Negatif dari 'Ich habe eine Schwester' adalah ...",
        options: ["Ich habe kein Schwester.", "Ich habe keine Schwester.", "Ich habe keinen Schwester."],
        answer: 1
      }
    ],
    builder: [
      { words: ["Ich", "bin", "verheiratet"], answer: "Ich bin verheiratet" },
      { words: ["Ich", "habe", "eine", "Familie"], answer: "Ich habe eine Familie" },
      { words: ["Meine", "Frau", "ist", "schwanger"], answer: "Meine Frau ist schwanger" }
    ],
    speaking: [
      "Sind Sie verheiratet?",
      "Haben Sie Kinder?",
      "Wie alt ist Ihr Kind?",
      "Wo wohnt Ihre Familie?",
      "Warum lernen Sie Deutsch?"
    ],
    writing: "Tulis profil keluarga 80-100 kata: status menikah, pasangan, anak, domisili, pekerjaan, alasan belajar Jerman, dan rencana Ausbildung.",
    checklist: [
      "Saya bisa menyebut anggota keluarga.",
      "Saya bisa menjelaskan status menikah.",
      "Saya bisa memakai haben.",
      "Saya bisa membedakan mein dan meine.",
      "Saya sudah menulis profil keluarga."
    ]
  },
  {
    id: "unit04",
    code: "Unit 04",
    title: "Alltag und Tagesablauf",
    subtitle: "Aktivitas harian dan rutinitas",
    goals: [
      "Menjelaskan rutinitas harian sederhana.",
      "Menyebut aktivitas dari pagi sampai malam.",
      "Memakai trennbare Verben seperti aufstehen, einkaufen, dan fernsehen."
    ],
    grammar: [
      {
        title: "Trennbare Verben",
        body: "Beberapa kata kerja terpisah. Awalannya pindah ke akhir kalimat: Ich stehe um fünf Uhr auf."
      },
      {
        title: "Waktu di awal kalimat",
        body: "Kalau waktu ada di awal, kata kerja tetap posisi kedua: Morgens lerne ich Deutsch."
      },
      {
        title: "nicht untuk aktivitas",
        body: "Gunakan nicht untuk meniadakan aktivitas: Ich arbeite heute nicht. Ich sehe nicht fern."
      }
    ],
    phrases: [
      ["Ich stehe um fünf Uhr auf.", "Saya bangun jam lima."],
      ["Morgens lerne ich Deutsch.", "Pagi hari saya belajar bahasa Jerman."],
      ["Danach arbeite ich freiberuflich am Computer.", "Setelah itu saya bekerja freelance di komputer."],
      ["Mittags mache ich eine Pause.", "Siang hari saya istirahat."],
      ["Nachmittags lerne ich mit Anki.", "Sore hari saya belajar dengan Anki."],
      ["Abends höre ich Deutsch und schreibe kurze Sätze.", "Malam hari saya mendengarkan bahasa Jerman dan menulis kalimat pendek."]
    ],
    flashcards: [
      ["der Tagesablauf", "rutinitas harian"],
      ["aufstehen", "bangun"],
      ["frühstücken", "sarapan"],
      ["einkaufen", "belanja"],
      ["morgens", "pada pagi hari"],
      ["abends", "pada malam hari"]
    ],
    quiz: [
      {
        q: "Kalimat yang benar untuk 'Saya bangun jam lima' adalah ...",
        options: ["Ich aufstehe um fünf Uhr.", "Ich stehe um fünf Uhr auf.", "Ich stehe auf um fünf Uhr."],
        answer: 1
      },
      {
        q: "Kalau 'morgens' di awal kalimat, bentuk yang benar adalah ...",
        options: ["Morgens ich lerne Deutsch.", "Morgens lerne ich Deutsch.", "Morgens Deutsch lerne ich."],
        answer: 1
      },
      {
        q: "Untuk meniadakan aktivitas, gunakan ...",
        options: ["kein", "nicht", "eine"],
        answer: 1
      }
    ],
    builder: [
      { words: ["Ich", "stehe", "um", "fünf", "Uhr", "auf"], answer: "Ich stehe um fünf Uhr auf" },
      { words: ["Morgens", "lerne", "ich", "Deutsch"], answer: "Morgens lerne ich Deutsch" },
      { words: ["Abends", "höre", "ich", "Deutsch"], answer: "Abends höre ich Deutsch" }
    ],
    speaking: [
      "Wann stehen Sie auf?",
      "Was machen Sie am Morgen?",
      "Wann arbeiten Sie?",
      "Wann lernen Sie Deutsch?",
      "Was machen Sie am Abend?"
    ],
    writing: "Tulis rutinitas harian 80-100 kata: jam bangun, aktivitas pagi, freelance, waktu belajar Jerman, Anki/kursus, malam hari, dan alasan belajar Jerman.",
    checklist: [
      "Saya bisa menjelaskan rutinitas harian sederhana.",
      "Saya bisa memakai morgens, mittags, nachmittags, dan abends.",
      "Saya paham trennbare Verben seperti aufstehen dan einkaufen.",
      "Saya bisa memakai nicht untuk meniadakan aktivitas.",
      "Saya sudah menulis rutinitas harian 80-100 kata."
    ]
  },
  {
    id: "unit05",
    code: "Unit 05",
    title: "Essen, Einkaufen und Preise",
    subtitle: "Makanan, belanja, dan harga",
    goals: [
      "Menyebut makanan dan minuman dasar.",
      "Bertanya harga dan jumlah.",
      "Memakai ich möchte, ich brauche, ich nehme, dan Akkusativ dasar."
    ],
    grammar: [
      {
        title: "ich möchte",
        body: "Möchte berarti ingin dalam bentuk sopan: Ich möchte Wasser. Ich möchte einen Kaffee."
      },
      {
        title: "Akkusativ dasar",
        body: "Untuk objek maskulin, ein berubah menjadi einen: der Kaffee -> einen Kaffee. Feminin dan netral tetap: eine Banane, ein Brot."
      },
      {
        title: "Harga",
        body: "Gunakan Was kostet das? atau Wie viel kostet das? Jawaban: Das kostet zwei Euro."
      }
    ],
    phrases: [
      ["Ich möchte Wasser.", "Saya ingin air."],
      ["Ich möchte einen Kaffee.", "Saya ingin kopi."],
      ["Ich brauche ein Kilo Reis.", "Saya membutuhkan satu kilo beras."],
      ["Ich nehme eine Flasche Wasser.", "Saya ambil satu botol air."],
      ["Wie viel kostet das?", "Berapa harganya?"],
      ["Das kostet zusammen acht Euro.", "Totalnya delapan euro."]
    ],
    flashcards: [
      ["das Wasser", "air"],
      ["der Kaffee", "kopi"],
      ["das Brot", "roti"],
      ["der Supermarkt", "supermarket"],
      ["der Preis", "harga"],
      ["eine Flasche", "satu botol"]
    ],
    quiz: [
      {
        q: "Kalimat yang benar untuk 'Saya ingin kopi' adalah ...",
        options: ["Ich möchte ein Kaffee.", "Ich möchte einen Kaffee.", "Ich möchte eine Kaffee."],
        answer: 1
      },
      {
        q: "Untuk bertanya harga, gunakan ...",
        options: ["Wo wohnen Sie?", "Was kostet das?", "Wie heißen Sie?"],
        answer: 1
      },
      {
        q: "Mana yang benar untuk 'satu pisang'?",
        options: ["einen Banane", "eine Banane", "ein Banane"],
        answer: 1
      }
    ],
    builder: [
      { words: ["Ich", "möchte", "einen", "Kaffee"], answer: "Ich möchte einen Kaffee" },
      { words: ["Ich", "brauche", "ein", "Kilo", "Reis"], answer: "Ich brauche ein Kilo Reis" },
      { words: ["Wie", "viel", "kostet", "das"], answer: "Wie viel kostet das" }
    ],
    speaking: [
      "Wo kaufen Sie ein?",
      "Was kaufen Sie oft?",
      "Was trinken Sie gern?",
      "Wie viel kostet Wasser?",
      "Kaufen Sie lieber im Supermarkt oder auf dem Markt?"
    ],
    writing: "Tulis daftar belanja dan paragraf 80-100 kata: tempat belanja, 5 barang, 2 harga, makanan/minuman yang disukai, ich möchte, dan ich brauche.",
    checklist: [
      "Saya bisa menyebut makanan dan minuman dasar.",
      "Saya bisa bertanya harga.",
      "Saya bisa memakai ich möchte, ich brauche, dan ich nehme.",
      "Saya paham Akkusativ dasar: einen, eine, ein.",
      "Saya sudah membuat dialog belanja sederhana."
    ]
  },
  {
    id: "unit06",
    code: "Unit 06",
    title: "Wohnung, Zimmer und Gegenstände",
    subtitle: "Rumah, kamar, dan benda",
    goals: [
      "Menyebut ruangan dan benda di rumah.",
      "Mendeskripsikan rumah atau kamar sederhana.",
      "Memperkuat artikel der, die, das dan pola es gibt."
    ],
    grammar: [
      {
        title: "Artikel der, die, das",
        body: "Hafalkan nomina selalu dengan artikelnya: der Tisch, die Lampe, das Bett. Artikel adalah bagian dari kata."
      },
      {
        title: "es gibt",
        body: "Es gibt berarti ada. Setelah es gibt, objek memakai Akkusativ: Es gibt einen Tisch, eine Lampe, ein Bett."
      },
      {
        title: "Tempat dasar",
        body: "Pola awal: in der Tasche, auf dem Tisch, neben dem Tisch, unter dem Tisch."
      }
    ],
    phrases: [
      ["Ich wohne mit meiner Familie in einer kleinen Wohnung.", "Saya tinggal bersama keluarga di tempat tinggal kecil."],
      ["Meine Wohnung ist sauber und praktisch.", "Tempat tinggal saya bersih dan praktis."],
      ["In meinem Zimmer gibt es einen Tisch.", "Di kamar saya ada meja."],
      ["Das Buch ist auf dem Tisch.", "Buku itu ada di atas meja."],
      ["Mein Handy ist in der Tasche.", "HP saya ada di dalam tas."],
      ["Ich lerne oft in meinem Zimmer Deutsch.", "Saya sering belajar bahasa Jerman di kamar saya."]
    ],
    flashcards: [
      ["die Wohnung", "tempat tinggal / apartemen"],
      ["das Zimmer", "kamar / ruangan"],
      ["der Tisch", "meja"],
      ["das Bett", "tempat tidur"],
      ["die Lampe", "lampu"],
      ["es gibt", "ada"]
    ],
    quiz: [
      {
        q: "Artikel yang benar untuk Tisch adalah ...",
        options: ["der Tisch", "die Tisch", "das Tisch"],
        answer: 0
      },
      {
        q: "Kalimat 'Di kamar saya ada tempat tidur' adalah ...",
        options: ["In meinem Zimmer gibt es ein Bett.", "In meinem Zimmer ist gibt ein Bett.", "In mein Zimmer gibt es Bett."],
        answer: 0
      },
      {
        q: "Setelah es gibt untuk benda maskulin, bentuk yang benar adalah ...",
        options: ["ein Tisch", "eine Tisch", "einen Tisch"],
        answer: 2
      }
    ],
    builder: [
      { words: ["In", "meinem", "Zimmer", "gibt", "es", "ein", "Bett"], answer: "In meinem Zimmer gibt es ein Bett" },
      { words: ["Das", "Buch", "ist", "auf", "dem", "Tisch"], answer: "Das Buch ist auf dem Tisch" },
      { words: ["Meine", "Wohnung", "ist", "sauber"], answer: "Meine Wohnung ist sauber" }
    ],
    speaking: [
      "Wie ist Ihre Wohnung?",
      "Was gibt es in Ihrem Zimmer?",
      "Ist Ihr Zimmer groß oder klein?",
      "Wo ist Ihr Computer?",
      "Wo lernen Sie Deutsch?"
    ],
    writing: "Tulis deskripsi rumah atau kamar 80-100 kata: jenis tempat tinggal, 4 ruangan, 5 benda, 3 kata sifat, 2 kalimat es gibt, dan tempat belajar Jerman.",
    checklist: [
      "Saya bisa menyebut ruangan di rumah.",
      "Saya bisa menyebut benda-benda dasar.",
      "Saya terbiasa menghafal nomina dengan artikel.",
      "Saya bisa memakai es gibt.",
      "Saya sudah menulis deskripsi rumah/kamar 80-100 kata."
    ]
  },
  {
    id: "unit07",
    code: "Unit 07",
    title: "Stadt, Wege und Verkehr",
    subtitle: "Kota, arah, dan transportasi",
    goals: [
      "Menyebut tempat umum di kota.",
      "Bertanya dan memberi arah sederhana.",
      "Memakai wie komme ich, zum/zur, dan transportasi dasar."
    ],
    grammar: [
      {
        title: "wo dan wohin",
        body: "Wo bertanya lokasi: Wo ist der Bahnhof? Wohin bertanya tujuan: Wohin gehen Sie?"
      },
      {
        title: "wie komme ich",
        body: "Pola penting bertanya jalan: Wie komme ich zum Bahnhof? Wie komme ich zur Apotheke?"
      },
      {
        title: "mit transportasi",
        body: "Gunakan mit untuk kendaraan: Ich fahre mit dem Bus. Ich fahre mit der Bahn. Ich gehe zu Fuß."
      }
    ],
    phrases: [
      ["Wie komme ich zum Bahnhof?", "Bagaimana cara saya ke stasiun?"],
      ["Gehen Sie geradeaus.", "Jalan lurus."],
      ["Dann gehen Sie nach links.", "Lalu belok/jalan ke kiri."],
      ["Die Apotheke ist neben der Bank.", "Apotek ada di samping bank."],
      ["Ich fahre mit dem Bus zum Deutschkurs.", "Saya naik bus ke kursus bahasa Jerman."],
      ["Manchmal gehe ich zu Fuß.", "Kadang-kadang saya berjalan kaki."]
    ],
    flashcards: [
      ["der Bahnhof", "stasiun kereta"],
      ["die Haltestelle", "halte"],
      ["die Apotheke", "apotek"],
      ["links", "kiri"],
      ["rechts", "kanan"],
      ["geradeaus", "lurus"]
    ],
    quiz: [
      {
        q: "Pertanyaan 'Bagaimana cara saya ke stasiun?' adalah ...",
        options: ["Wo wohnen Sie?", "Wie komme ich zum Bahnhof?", "Was kostet der Bahnhof?"],
        answer: 1
      },
      {
        q: "Untuk 'ke apotek', bentuk yang benar adalah ...",
        options: ["zum Apotheke", "zur Apotheke", "zu Apotheke"],
        answer: 1
      },
      {
        q: "Kalimat 'Saya naik bus' adalah ...",
        options: ["Ich fahre mit dem Bus.", "Ich gehe mit dem Bus.", "Ich fahre zu Fuß."],
        answer: 0
      }
    ],
    builder: [
      { words: ["Wie", "komme", "ich", "zum", "Bahnhof"], answer: "Wie komme ich zum Bahnhof" },
      { words: ["Gehen", "Sie", "geradeaus"], answer: "Gehen Sie geradeaus" },
      { words: ["Ich", "fahre", "mit", "dem", "Bus"], answer: "Ich fahre mit dem Bus" }
    ],
    speaking: [
      "Wie kommen Sie zum Deutschkurs?",
      "Wo ist der Supermarkt?",
      "Fahren Sie mit dem Bus?",
      "Ist der Bahnhof weit?",
      "Was gibt es in Ihrer Stadt?"
    ],
    writing: "Tulis deskripsi kota dan transportasi 80-100 kata: kota/desa, 5 tempat umum, 2 transportasi, 1 kalimat zum, 1 kalimat zur, dan 1 arah sederhana.",
    checklist: [
      "Saya bisa menyebut tempat umum di kota.",
      "Saya bisa menyebut transportasi dasar.",
      "Saya bisa bertanya jalan dengan Wie komme ich ...?",
      "Saya paham pola zum dan zur pada contoh dasar.",
      "Saya bisa memakai links, rechts, dan geradeaus."
    ]
  },
  {
    id: "unit08",
    code: "Unit 08",
    title: "Arbeit, Beruf und Arbeitsplatz",
    subtitle: "Pekerjaan, profesi, dan tempat kerja",
    goals: [
      "Menjelaskan pekerjaan freelance sederhana.",
      "Menyebut tempat kerja dan aktivitas kerja.",
      "Memakai arbeiten als, arbeiten bei, arbeiten in, dan können."
    ],
    grammar: [
      {
        title: "arbeiten als",
        body: "Gunakan arbeiten als untuk peran/profesi: Ich arbeite als Freelancer. Ich arbeite als AI Evaluator."
      },
      {
        title: "arbeiten bei / in",
        body: "Bei untuk perusahaan/lembaga, in untuk tempat atau bidang: Ich arbeite bei einer Firma. Ich arbeite im Homeoffice."
      },
      {
        title: "können",
        body: "Können berarti bisa. Kata kerja kedua kembali ke bentuk dasar: Ich kann am Computer arbeiten."
      }
    ],
    phrases: [
      ["Ich arbeite freiberuflich im Homeoffice.", "Saya bekerja freelance dari rumah."],
      ["Ich arbeite als AI Evaluator.", "Saya bekerja sebagai AI evaluator."],
      ["Ich lese Texte und prüfe Daten.", "Saya membaca teks dan memeriksa data."],
      ["Ich höre Audiodateien.", "Saya mendengarkan file audio."],
      ["Ich kann gut am Computer arbeiten.", "Saya bisa bekerja dengan baik di komputer."],
      ["Ich interessiere mich für Büromanagement und E-Commerce.", "Saya tertarik pada Büromanagement dan E-Commerce."]
    ],
    flashcards: [
      ["die Arbeit", "pekerjaan"],
      ["der Beruf", "profesi"],
      ["das Büro", "kantor"],
      ["die Erfahrung", "pengalaman"],
      ["die Bewerbung", "lamaran"],
      ["Ich kann", "saya bisa"]
    ],
    quiz: [
      {
        q: "Kalimat yang benar untuk 'Saya bekerja sebagai freelancer' adalah ...",
        options: ["Ich arbeite bei Freelancer.", "Ich arbeite als Freelancer.", "Ich arbeite in Freelancer."],
        answer: 1
      },
      {
        q: "Kalimat 'Saya bisa bekerja dengan komputer' adalah ...",
        options: ["Ich kann am Computer arbeiten.", "Ich kann arbeite am Computer.", "Ich arbeite kann am Computer."],
        answer: 0
      },
      {
        q: "Untuk tempat kerja dari rumah, frasa yang benar adalah ...",
        options: ["im Homeoffice", "bei Homeoffice", "als Homeoffice"],
        answer: 0
      }
    ],
    builder: [
      { words: ["Ich", "arbeite", "als", "Freelancer"], answer: "Ich arbeite als Freelancer" },
      { words: ["Ich", "kann", "am", "Computer", "arbeiten"], answer: "Ich kann am Computer arbeiten" },
      { words: ["Ich", "prüfe", "Daten"], answer: "Ich prüfe Daten" }
    ],
    speaking: [
      "Was machen Sie beruflich?",
      "Als was arbeiten Sie?",
      "Arbeiten Sie im Büro oder im Homeoffice?",
      "Was können Sie gut?",
      "Welche Ausbildung interessiert Sie?"
    ],
    writing: "Tulis profil kerja 80-120 kata: pekerjaan sekarang, tempat kerja, 4 aktivitas kerja, 3 skill dengan ich kann, alasan belajar Jerman, dan bidang Ausbildung yang diminati.",
    checklist: [
      "Saya bisa menjelaskan pekerjaan saya secara sederhana.",
      "Saya bisa memakai arbeiten als, arbeiten bei, dan arbeiten in.",
      "Saya bisa memakai können untuk skill.",
      "Saya bisa menyebut 4 aktivitas kerja.",
      "Saya sudah menulis profil kerja 80-120 kata."
    ]
  },
  {
    id: "unit09",
    code: "Unit 09",
    title: "Gesundheit, Arzt und Apotheke",
    subtitle: "Kesehatan, dokter, dan apotek",
    goals: [
      "Menyebut keluhan ringan dan bagian tubuh dasar.",
      "Membuat janji dokter dan membeli obat di apotek.",
      "Memakai haben untuk keluhan serta müssen/können untuk kebutuhan."
    ],
    grammar: [
      {
        title: "haben untuk keluhan",
        body: "Banyak keluhan memakai haben: Ich habe Fieber. Ich habe Kopfschmerzen. Ich habe Husten."
      },
      {
        title: "müssen",
        body: "Müssen berarti harus. Kata kerja kedua kembali ke bentuk dasar: Ich muss viel Wasser trinken."
      },
      {
        title: "können untuk permintaan",
        body: "Gunakan können untuk permintaan sopan: Können Sie mir bitte helfen? Kann ich einen Termin bekommen?"
      }
    ],
    phrases: [
      ["Mir geht es nicht gut.", "Saya kurang sehat."],
      ["Ich habe Kopfschmerzen.", "Saya sakit kepala."],
      ["Ich habe kein Fieber.", "Saya tidak demam."],
      ["Ich muss zum Arzt.", "Saya harus ke dokter."],
      ["Ich möchte einen Termin machen.", "Saya ingin membuat janji."],
      ["Können Sie mir bitte helfen?", "Bisakah Anda membantu saya?"]
    ],
    flashcards: [
      ["die Gesundheit", "kesehatan"],
      ["der Arzt", "dokter laki-laki"],
      ["die Apotheke", "apotek"],
      ["das Medikament", "obat"],
      ["das Fieber", "demam"],
      ["Ich muss", "saya harus"]
    ],
    quiz: [
      {
        q: "Kalimat 'Saya kurang sehat' adalah ...",
        options: ["Mir geht es nicht gut.", "Ich habe kein gut.", "Ich bin nicht geht."],
        answer: 0
      },
      {
        q: "Kalimat yang benar untuk 'Saya harus minum air' adalah ...",
        options: ["Ich muss Wasser trinken.", "Ich muss trinke Wasser.", "Ich Wasser muss trinken."],
        answer: 0
      },
      {
        q: "Untuk bertanya 'Bisakah Anda membantu saya?', gunakan ...",
        options: ["Können Sie mir bitte helfen?", "Müssen Sie mir bitte helfen?", "Haben Sie mir bitte helfen?"],
        answer: 0
      }
    ],
    builder: [
      { words: ["Mir", "geht", "es", "nicht", "gut"], answer: "Mir geht es nicht gut" },
      { words: ["Ich", "habe", "Kopfschmerzen"], answer: "Ich habe Kopfschmerzen" },
      { words: ["Ich", "muss", "Wasser", "trinken"], answer: "Ich muss Wasser trinken" }
    ],
    speaking: [
      "Wie geht es Ihnen?",
      "Was haben Sie?",
      "Haben Sie Fieber?",
      "Müssen Sie zum Arzt?",
      "Können Sie morgen zum Arzt gehen?"
    ],
    writing: "Tulis pesan izin sakit pendek: salam, kamu sedang sakit, keluhan, tidak bisa datang, ingin istirahat, ucapan terima kasih, dan penutup.",
    checklist: [
      "Saya bisa menyebut keluhan ringan.",
      "Saya bisa mengatakan Mir geht es nicht gut.",
      "Saya bisa memakai haben untuk keluhan.",
      "Saya bisa memakai müssen untuk kebutuhan.",
      "Saya sudah menulis pesan izin sakit pendek."
    ]
  },
  {
    id: "unit10",
    code: "Unit 10",
    title: "E-Mail, Nachrichten und Verwaltung",
    subtitle: "Email, pesan formal, dan administrasi",
    goals: [
      "Menulis email formal pendek.",
      "Meminta informasi dan mengonfirmasi jadwal.",
      "Memakai ich möchte, ich kann, ich muss, dan bitte dalam administrasi."
    ],
    grammar: [
      {
        title: "Salam formal",
        body: "Jika tidak tahu nama penerima, gunakan Sehr geehrte Damen und Herren. Penutup aman: Mit freundlichen Grüßen."
      },
      {
        title: "Permintaan sopan",
        body: "Pola paling aman: Können Sie mir bitte helfen? Können Sie mir bitte Informationen schicken?"
      },
      {
        title: "Modal verbs dalam email",
        body: "Ich möchte mich anmelden. Ich kann am Dienstag kommen. Ich muss den Termin absagen."
      }
    ],
    phrases: [
      ["Sehr geehrte Damen und Herren,", "Yth. Bapak/Ibu,"],
      ["Ich möchte mich anmelden.", "Saya ingin mendaftar."],
      ["Ich habe eine Frage.", "Saya punya pertanyaan."],
      ["Können Sie mir bitte Informationen schicken?", "Bisakah Anda mengirim informasi kepada saya?"],
      ["Ich möchte den Termin bestätigen.", "Saya ingin mengonfirmasi janji."],
      ["Mit freundlichen Grüßen", "Salam hormat"]
    ],
    flashcards: [
      ["die E-Mail", "email"],
      ["die Anmeldung", "pendaftaran"],
      ["die Bestätigung", "konfirmasi"],
      ["die Unterlagen", "dokumen-dokumen"],
      ["der Ausweis", "kartu identitas"],
      ["Vielen Dank für Ihre Antwort.", "Terima kasih atas jawaban Anda."]
    ],
    quiz: [
      {
        q: "Pembuka formal jika tidak tahu nama penerima adalah ...",
        options: ["Hallo!", "Sehr geehrte Damen und Herren,", "Tschüss,"],
        answer: 1
      },
      {
        q: "Penutup formal yang benar adalah ...",
        options: ["Mit freundlichen Grüßen", "Bis später", "Danke bro"],
        answer: 0
      },
      {
        q: "Kalimat 'Saya harus membatalkan janji' adalah ...",
        options: ["Ich muss den Termin absagen.", "Ich kann den Termin bestätigen.", "Ich möchte den Termin kommen."],
        answer: 0
      }
    ],
    builder: [
      { words: ["Ich", "möchte", "mich", "anmelden"], answer: "Ich möchte mich anmelden" },
      { words: ["Können", "Sie", "mir", "bitte", "helfen"], answer: "Können Sie mir bitte helfen" },
      { words: ["Vielen", "Dank", "für", "Ihre", "Antwort"], answer: "Vielen Dank für Ihre Antwort" }
    ],
    speaking: [
      "Wie schreiben Sie eine formelle E-Mail?",
      "Wie fragen Sie nach Informationen?",
      "Wie bestätigen Sie einen Termin?",
      "Wie sagen Sie einen Termin ab?",
      "Was schreiben Sie am Ende einer formellen E-Mail?"
    ],
    writing: "Tulis email formal 80-100 kata untuk meminta informasi Ausbildung atau kursus bahasa: salam formal, nama, tujuan, 3 pertanyaan, terima kasih, dan penutup.",
    checklist: [
      "Saya bisa menulis email formal pendek.",
      "Saya tahu pembuka dan penutup formal.",
      "Saya bisa meminta informasi sederhana.",
      "Saya bisa mengonfirmasi dan membatalkan jadwal.",
      "Saya sudah menulis 3 email pendek."
    ]
  },
  {
    id: "unit11",
    code: "Unit 11",
    title: "Deutschlandplan und Ausbildung",
    subtitle: "Rencana ke Jerman dan Ausbildung",
    goals: [
      "Menjelaskan alasan belajar bahasa Jerman.",
      "Menyebut bidang Ausbildung yang diminati.",
      "Memakai möchten, wollen, dan weil dalam kalimat sederhana."
    ],
    grammar: [
      {
        title: "möchten",
        body: "Möchten berarti ingin dan terdengar sopan: Ich möchte eine Ausbildung in Deutschland machen."
      },
      {
        title: "wollen",
        body: "Wollen berarti mau/ingin dan lebih langsung: Ich will B1 erreichen. Ich will jeden Tag lernen."
      },
      {
        title: "weil",
        body: "Weil berarti karena. Kata kerja pindah ke akhir: Ich lerne Deutsch, weil ich eine Ausbildung machen möchte."
      }
    ],
    phrases: [
      ["Ich lerne Deutsch für meine Zukunft.", "Saya belajar bahasa Jerman untuk masa depan saya."],
      ["Ich möchte eine Ausbildung in Deutschland machen.", "Saya ingin mengikuti Ausbildung di Jerman."],
      ["Ich suche einen Ausbildungsplatz.", "Saya mencari tempat/posisi Ausbildung."],
      ["Ich interessiere mich für Büromanagement und E-Commerce.", "Saya tertarik pada Büromanagement dan E-Commerce."],
      ["Ich habe Erfahrung als Freelancer.", "Saya punya pengalaman sebagai freelancer."],
      ["Mein Ziel ist B1.", "Target saya adalah B1."]
    ],
    flashcards: [
      ["die Ausbildung", "Ausbildung / pelatihan vokasi"],
      ["der Ausbildungsplatz", "posisi / tempat Ausbildung"],
      ["die Bewerbung", "lamaran"],
      ["der Lebenslauf", "CV"],
      ["das Ziel", "tujuan"],
      ["Ich will B1 erreichen.", "Saya ingin mencapai B1."]
    ],
    quiz: [
      {
        q: "Kalimat 'Saya ingin mengikuti Ausbildung di Jerman' adalah ...",
        options: ["Ich möchte eine Ausbildung in Deutschland machen.", "Ich mache eine Ausbildung möchte Deutschland.", "Ich will Ausbildung bei Deutschland."],
        answer: 0
      },
      {
        q: "Setelah weil, posisi kata kerja biasanya ...",
        options: ["di awal", "di akhir", "hilang"],
        answer: 1
      },
      {
        q: "Kalimat 'Target saya B1' adalah ...",
        options: ["Mein Ziel ist B1.", "Meine Ziel ist B1.", "Mein Ziel B1 ist."],
        answer: 0
      }
    ],
    builder: [
      { words: ["Ich", "möchte", "eine", "Ausbildung", "machen"], answer: "Ich möchte eine Ausbildung machen" },
      { words: ["Ich", "will", "B1", "erreichen"], answer: "Ich will B1 erreichen" },
      { words: ["Mein", "Ziel", "ist", "B1"], answer: "Mein Ziel ist B1" }
    ],
    speaking: [
      "Warum lernen Sie Deutsch?",
      "Welche Ausbildung interessiert Sie?",
      "Haben Sie Berufserfahrung?",
      "Was können Sie gut?",
      "Was ist Ihr Ziel?"
    ],
    writing: "Tulis profil motivasi 100-120 kata: nama, asal, keluarga, pekerjaan, 3 skill, alasan belajar Jerman, bidang Ausbildung, target bahasa, dan rutinitas belajar.",
    checklist: [
      "Saya bisa menjelaskan alasan belajar bahasa Jerman.",
      "Saya bisa menyebut bidang Ausbildung yang diminati.",
      "Saya bisa menjelaskan pengalaman freelance sederhana.",
      "Saya bisa memakai möchte, will, dan weil.",
      "Saya sudah menulis profil motivasi 100-120 kata."
    ]
  },
  {
    id: "unit12",
    code: "Unit 12",
    title: "Review und Mini-Test",
    subtitle: "Review A1 dan mini test",
    goals: [
      "Mengulang topik utama Unit 1-11.",
      "Mengukur Wortschatz, Grammar, Lesen, Schreiben, dan Sprechen.",
      "Menentukan apakah siap mulai A2 sambil review A1."
    ],
    grammar: [
      {
        title: "Review modal verbs",
        body: "Ich bin, ich habe, ich kann, ich muss, ich möchte, ich will. Ini pola utama yang harus terasa otomatis."
      },
      {
        title: "Review Akkusativ",
        body: "Maskulin berubah: der Kaffee -> einen Kaffee. Feminin dan netral: eine Banane, ein Brot."
      },
      {
        title: "Review weil",
        body: "Weil berarti karena dan kata kerja pindah ke akhir: weil ich eine Ausbildung machen möchte."
      }
    ],
    phrases: [
      ["Ich heiße Ahmad und komme aus Indonesien.", "Nama saya Ahmad dan saya berasal dari Indonesia."],
      ["Ich bin verheiratet und habe eine Familie.", "Saya sudah menikah dan punya keluarga."],
      ["Ich arbeite freiberuflich im Homeoffice.", "Saya bekerja freelance dari rumah."],
      ["Ich kann am Computer arbeiten, Daten prüfen und Texte bewerten.", "Saya bisa bekerja dengan komputer, memeriksa data, dan menilai teks."],
      ["Ich lerne Deutsch, weil ich eine Ausbildung in Deutschland machen möchte.", "Saya belajar bahasa Jerman karena ingin Ausbildung di Jerman."],
      ["Mein Ziel ist B1.", "Target saya B1."]
    ],
    flashcards: [
      ["Stellen Sie sich bitte vor.", "Tolong perkenalkan diri Anda."],
      ["Warum lernen Sie Deutsch?", "Mengapa Anda belajar bahasa Jerman?"],
      ["Welche Ausbildung interessiert Sie?", "Ausbildung apa yang menarik bagi Anda?"],
      ["Was ist Ihr Ziel?", "Apa tujuan Anda?"],
      ["Welche Unterlagen brauche ich?", "Dokumen apa yang saya butuhkan?"],
      ["Ich möchte 2027 einen Ausbildungsplatz suchen.", "Saya ingin mencari posisi Ausbildung pada 2027."]
    ],
    quiz: [
      {
        q: "Kalimat yang benar adalah ...",
        options: ["Ich habe eine Familie.", "Ich bin eine Familie.", "Ich kann eine Familie."],
        answer: 0
      },
      {
        q: "Mana Akkusativ maskulin yang benar?",
        options: ["Ich möchte ein Kaffee.", "Ich möchte einen Kaffee.", "Ich möchte eine Kaffee."],
        answer: 1
      },
      {
        q: "Setelah weil, kalimat yang benar adalah ...",
        options: ["weil ich möchte eine Ausbildung machen", "weil ich eine Ausbildung machen möchte", "weil möchte ich eine Ausbildung machen"],
        answer: 1
      },
      {
        q: "Penutup email formal adalah ...",
        options: ["Mit freundlichen Grüßen", "Bis später", "Hallo zusammen"],
        answer: 0
      },
      {
        q: "Kalimat 'Saya harus ke dokter' adalah ...",
        options: ["Ich muss zum Arzt.", "Ich möchte Arzt.", "Ich habe zum Arzt."],
        answer: 0
      }
    ],
    builder: [
      { words: ["Ich", "lerne", "Deutsch", "jeden", "Tag"], answer: "Ich lerne Deutsch jeden Tag" },
      { words: ["Mein", "Ziel", "ist", "B1"], answer: "Mein Ziel ist B1" },
      { words: ["Ich", "möchte", "eine", "Ausbildung", "machen"], answer: "Ich möchte eine Ausbildung machen" }
    ],
    speaking: [
      "Stellen Sie sich bitte vor.",
      "Warum lernen Sie Deutsch?",
      "Welche Ausbildung interessiert Sie?",
      "Haben Sie Berufserfahrung?",
      "Was ist Ihr Ziel?"
    ],
    writing: "Tulis email formal 80-100 kata untuk meminta informasi kursus B1 atau Ausbildung: salam, nama/asal, tujuan, 3 pertanyaan, terima kasih, dan penutup.",
    checklist: [
      "Saya sudah mengulang Unit 1-11.",
      "Saya sudah mengerjakan mini test Wortschatz.",
      "Saya sudah mengerjakan mini test Grammar dan Lesen.",
      "Saya sudah menulis email formal 80-100 kata.",
      "Saya sudah merekam speaking 2 menit."
    ]
  }
];

const savedFlashcardMode = localStorage.getItem("a1.flashcardMode");
const flashcardModeMigrationKey = "a1.flashcardModeDefault.v2";
let initialFlashcardMode = savedFlashcardMode || "unitAll";
if (localStorage.getItem(flashcardModeMigrationKey) !== "done" && (!savedFlashcardMode || savedFlashcardMode === "quick")) {
  initialFlashcardMode = "unitAll";
  localStorage.setItem("a1.flashcardMode", "unitAll");
  localStorage.setItem(flashcardModeMigrationKey, "done");
}

const state = {
  unitId: localStorage.getItem("a1.activeUnit") || "unit01",
  view: localStorage.getItem("a1.activeView") || "lesson",
  flashcardIndex: 0,
  flashcardFlipped: false,
  flashcardMode: initialFlashcardMode,
  quizIndex: 0,
  quizAnswered: false,
  quizFeedback: "",
  quizStats: { correct: 0, wrong: 0 },
  builderIndex: 0,
  builderAnswered: false,
  builderFeedback: "",
  builderStats: { correct: 0, wrong: 0 },
  selectedWords: [],
  practiceTimer: null,
  practiceSecondsLeft: 20 * 60,
  articleScope: localStorage.getItem("a1.articleScope") || "unit",
  articleIndex: 0,
  articleAnswered: null,
  articleStats: { correct: 0, wrong: 0 }
};

const $ = (selector) => document.querySelector(selector);

function getUnit() {
  return units.find((unit) => unit.id === state.unitId) || units[0];
}

function save(key, value) {
  localStorage.setItem(key, value);
}

function progressKey(unitId, item) {
  return `a1.progress.${unitId}.${item}`;
}

function isChecked(unitId, item) {
  return localStorage.getItem(progressKey(unitId, item)) === "1";
}

function setChecked(unitId, item, value) {
  if (value) {
    localStorage.setItem(progressKey(unitId, item), "1");
  } else {
    localStorage.removeItem(progressKey(unitId, item));
  }
}

function dailyKey(item) {
  const today = new Date().toISOString().slice(0, 10);
  return `a1.daily.${today}.${item}`;
}

function practiceKey(unitId, item) {
  const today = new Date().toISOString().slice(0, 10);
  return `a1.practice.${today}.${unitId}.${item}`;
}

function getPracticeItems(unit) {
  const builderItems = getBuilderItems(unit);
  return {
    flashcards: unit.flashcards.slice(0, 5),
    quiz: unit.quiz.slice(0, 3),
    builder: builderItems[0],
    speaking: unit.speaking[0],
    writing: unit.writing
  };
}

function normalizeCard(card) {
  if (Array.isArray(card)) {
    return { front: card[0], back: card[1], tags: "quick" };
  }
  return card;
}

function getAllAnkiCards() {
  return Object.values(window.ankiCards || {}).flat().map(normalizeCard);
}

function getFlashcards(unit) {
  const unitCards = (window.ankiCards?.[unit.id] || []).map(normalizeCard);
  const quickCards = unit.flashcards.map(normalizeCard);

  if (state.flashcardMode === "unitAll") {
    return unitCards.length ? unitCards : quickCards;
  }

  if (state.flashcardMode === "allRandom") {
    const allCards = getAllAnkiCards();
    return allCards.length ? allCards : quickCards;
  }

  if (state.flashcardMode === "unitRandom") {
    return unitCards.length ? unitCards : quickCards;
  }

  return quickCards;
}

function getArticleFromTags(tags = "") {
  const match = tags.match(/noun::(der|die|das)/);
  return match ? match[1] : null;
}

function getArticleCards(unit) {
  const source = state.articleScope === "all"
    ? getAllAnkiCards()
    : (window.ankiCards?.[unit.id] || []).map(normalizeCard);

  return source
    .map((card) => {
      const article = getArticleFromTags(card.tags);
      if (!article) return null;
      const noun = card.front.replace(/^(der|die|das)\s+/i, "").trim();
      return {
        ...card,
        article,
        noun,
        unitId: card.tags?.match(/a1::(unit\d+)/)?.[1] || unit.id
      };
    })
    .filter(Boolean);
}

function articleWrongKey() {
  return "a1.articleWrong";
}

function getArticleWrongList() {
  try {
    return JSON.parse(localStorage.getItem(articleWrongKey()) || "[]");
  } catch {
    return [];
  }
}

function addArticleWrong(card) {
  const list = getArticleWrongList();
  const id = `${card.unitId}:${card.front}`;
  const next = [
    { id, front: card.front, back: card.back, article: card.article, noun: card.noun, unitId: card.unitId },
    ...list.filter((item) => item.id !== id)
  ].slice(0, 30);
  localStorage.setItem(articleWrongKey(), JSON.stringify(next));
}

function clearArticleWrongList() {
  localStorage.removeItem(articleWrongKey());
}

function nextArticleIndex(cards) {
  if (cards.length <= 1) return 0;
  let next = Math.floor(Math.random() * cards.length);
  if (next === state.articleIndex) {
    next = (next + 1) % cards.length;
  }
  return next;
}

function normalizeBuilderAnswer(text) {
  return text
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function hashString(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(items, seedText) {
  const result = [...items];
  let seed = hashString(seedText) || 1;
  const random = () => {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822507);
    seed = Math.imul(seed ^ (seed >>> 13), 3266489909);
    return ((seed ^= seed >>> 16) >>> 0) / 4294967296;
  };

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function getBuilderItems(unit) {
  const manual = unit.builder.map((item) => ({
    words: item.words.map((word, index) => ({ word, index })),
    answer: normalizeBuilderAnswer(item.answer),
    source: "manual"
  }));

  const generated = (window.ankiCards?.[unit.id] || [])
    .map(normalizeCard)
    .filter((card) => {
      const front = normalizeBuilderAnswer(card.front);
      const words = front.split(" ");
      const isSentenceLike = /^[A-ZÄÖÜ]/.test(front) && words.length >= 3 && words.length <= 9;
      const hasUsefulTag = /(sentence|question|answer|ausbildung|message|appointment|können|müssen|weil|transport|health|work)/.test(card.tags || "");
      return isSentenceLike && hasUsefulTag && !front.includes("/") && !front.includes(":");
    })
    .map((card) => {
      const answer = normalizeBuilderAnswer(card.front);
      return {
        words: answer.split(" ").map((word, index) => ({ word, index })),
        answer,
        source: "anki",
        back: card.back
      };
    });

  const seen = new Set();
  return [...manual, ...generated].filter((item) => {
    if (seen.has(item.answer)) return false;
    seen.add(item.answer);
    return true;
  });
}

function getQuizItems(unit) {
  const manual = unit.quiz.map((item) => ({ ...item, source: "manual" }));
  const unitCards = (window.ankiCards?.[unit.id] || []).map(normalizeCard);
  const generated = unitCards
    .filter((card) => card.front && card.back && card.front.length <= 80 && card.back.length <= 90)
    .map((card, index) => {
      const distractors = seededShuffle(
        unitCards
          .filter((candidate) => candidate.back !== card.back && candidate.back.length <= 90)
          .map((candidate) => candidate.back),
        `${unit.id}:quiz:${card.front}`
      ).slice(0, 2);

      if (distractors.length < 2) return null;
      const options = seededShuffle([card.back, ...distractors], `${unit.id}:options:${card.front}`);
      return {
        q: `Apa arti "${card.front}"?`,
        options,
        answer: options.indexOf(card.back),
        source: "anki",
        id: `${unit.id}:${index}:${card.front}`
      };
    })
    .filter(Boolean);

  const seen = new Set();
  return [...manual, ...generated].filter((item) => {
    const key = `${item.q}:${item.options[item.answer]}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getFlashcardModeLabel() {
  const labels = {
    quick: "Ringkas",
    unitAll: "Semua Kartu Unit",
    unitRandom: "Acak Unit Ini",
    allRandom: "Acak Semua Unit"
  };
  return labels[state.flashcardMode] || labels.quick;
}

function nextFlashcardIndex(cards) {
  if (state.flashcardMode === "unitRandom" || state.flashcardMode === "allRandom") {
    if (cards.length <= 1) return 0;
    let next = Math.floor(Math.random() * cards.length);
    if (next === state.flashcardIndex) {
      next = (next + 1) % cards.length;
    }
    return next;
  }
  return (state.flashcardIndex + 1) % cards.length;
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let inCode = false;
  let codeLines = [];
  let listBuffer = [];

  const flushList = () => {
    if (!listBuffer.length) return;
    html.push(`<ul>${listBuffer.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    listBuffer = [];
  };

  const renderTable = (startIndex) => {
    const tableLines = [];
    let index = startIndex;
    while (index < lines.length && lines[index].trim().startsWith("|") && lines[index].trim().endsWith("|")) {
      tableLines.push(lines[index].trim());
      index += 1;
    }

    if (tableLines.length < 2 || !/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(tableLines[1])) {
      return null;
    }

    const rows = tableLines
      .filter((_, rowIndex) => rowIndex !== 1)
      .map((row) => row.slice(1, -1).split("|").map((cell) => inlineMarkdown(cell.trim())));
    const header = rows.shift() || [];
    const body = rows;
    const table = `
      <table>
        <thead><tr>${header.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    `;
    return { table, nextIndex: index };
  };

  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      flushList();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!line) {
      flushList();
      continue;
    }

    const tableResult = line.startsWith("|") ? renderTable(i) : null;
    if (tableResult) {
      flushList();
      html.push(tableResult.table);
      i = tableResult.nextIndex - 1;
      continue;
    }

    if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
      continue;
    }

    flushList();

    if (line.startsWith("# ")) {
      html.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith("#### ")) {
      html.push(`<h4>${inlineMarkdown(line.slice(5))}</h4>`);
    } else if (/^\d+\.\s+/.test(line)) {
      html.push(`<p>${inlineMarkdown(line)}</p>`);
    } else {
      html.push(`<p>${inlineMarkdown(line)}</p>`);
    }
  }

  flushList();
  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }
  return html.join("");
}

function renderUnits() {
  $("#unitList").innerHTML = units.map((unit) => `
    <button class="unit-button ${unit.id === state.unitId ? "is-active" : ""}" data-unit="${unit.id}" type="button">
      <strong>${unit.code}</strong>
      <span>${unit.title}</span>
      <span>${unit.subtitle}</span>
    </button>
  `).join("");

  const mobileUnitSelect = $("#mobileUnitSelect");
  if (mobileUnitSelect) {
    mobileUnitSelect.innerHTML = units.map((unit) => `
      <option value="${unit.id}" ${unit.id === state.unitId ? "selected" : ""}>${unit.code} - ${unit.subtitle}</option>
    `).join("");
    mobileUnitSelect.onchange = () => {
      switchUnit(mobileUnitSelect.value);
    };
  }

  document.querySelectorAll("[data-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      switchUnit(button.dataset.unit);
    });
  });
}

function switchUnit(unitId) {
  stopPracticeTimer();
  state.unitId = unitId;
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  state.quizIndex = 0;
  state.quizAnswered = false;
  state.quizFeedback = "";
  state.builderIndex = 0;
  state.builderAnswered = false;
  state.builderFeedback = "";
  state.selectedWords = [];
  state.practiceSecondsLeft = 20 * 60;
  save("a1.activeUnit", state.unitId);
  render();
}

function renderTabs() {
  document.querySelectorAll("[data-view]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === state.view);
    tab.onclick = () => {
      if (state.view === "dailyPractice" && tab.dataset.view !== "dailyPractice") {
        stopPracticeTimer();
      }
      state.view = tab.dataset.view;
      state.selectedWords = [];
      save("a1.activeView", state.view);
      render();
    };
  });
}

function renderProgress(unit) {
  const total = unit.checklist.length;
  const done = unit.checklist.filter((_, index) => isChecked(unit.id, index)).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  $("#progressText").textContent = `${percent}% selesai`;
  $("#progressFill").style.width = `${percent}%`;
}

function speakGerman(text) {
  if (!("speechSynthesis" in window)) {
    alert("Browser ini belum mendukung fitur suara bawaan.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("de"));
  if (germanVoice) {
    utterance.voice = germanVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function renderDaily() {
  document.querySelectorAll("[data-daily]").forEach((box) => {
    const key = dailyKey(box.dataset.daily);
    box.checked = localStorage.getItem(key) === "1";
    box.onchange = () => {
      if (box.checked) localStorage.setItem(key, "1");
      else localStorage.removeItem(key);
    };
  });

  $("#resetDaily").onclick = () => {
    document.querySelectorAll("[data-daily]").forEach((box) => {
      localStorage.removeItem(dailyKey(box.dataset.daily));
      box.checked = false;
    });
  };
}

function setPracticeDone(unitId, item, value) {
  if (value) {
    localStorage.setItem(practiceKey(unitId, item), "1");
  } else {
    localStorage.removeItem(practiceKey(unitId, item));
  }
}

function isPracticeDone(unitId, item) {
  return localStorage.getItem(practiceKey(unitId, item)) === "1";
}

function lessonView(unit) {
  return `
    <div class="grid">
      <article class="card">
        <h3>Target Unit</h3>
        <ul class="list">${unit.goals.map((goal) => `<li>${goal}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>Grammar Fokus</h3>
        ${unit.grammar.map((item) => `
          <div class="phrase">
            <strong>${item.title}</strong>
            <span>${item.body}</span>
          </div>
        `).join("")}
      </article>
    </div>
      <article class="card">
        <h3>Kalimat Inti</h3>
        ${unit.phrases.map(([front, back]) => `
          <div class="phrase">
          <div class="phrase-top">
            <strong>${front}</strong>
            <button class="small-speak" data-speak="${escapeAttribute(front)}" type="button">Dengar</button>
          </div>
          <span>${back}</span>
        </div>
      `).join("")}
    </article>
    ${checklistView(unit)}
  `;
}

function fullModuleView(unit) {
  const moduleText = window.fullModules?.[unit.id];
  if (!moduleText) {
    return `
      <article class="card">
        <h3>Modul penuh belum tersedia</h3>
        <p>Data modul untuk ${unit.code} belum ditemukan.</p>
      </article>
    `;
  }

  return `
    <article class="card module-card">
      <div class="module-header">
        <div>
          <h3>${unit.code}: Modul Penuh</h3>
          <p class="muted">${unit.title} - ${unit.subtitle}</p>
        </div>
        <button class="primary-button" data-speak="${escapeAttribute(unit.phrases[0]?.[0] || unit.title)}" type="button">Dengar contoh</button>
      </div>
      <div class="module-content">
        ${renderMarkdown(moduleText)}
      </div>
    </article>
  `;
}

function flashcardsView(unit) {
  const cards = getFlashcards(unit);
  const card = cards[state.flashcardIndex % cards.length];
  const answer = state.flashcardFlipped ? `<span>${card.back}</span>` : `<span>Klik tampilkan arti</span>`;
  return `
    <article class="card">
      <h3>Flashcard ${state.flashcardIndex + 1} / ${cards.length}</h3>
      <div class="control-row">
        <label for="flashcardMode"><strong>Mode</strong></label>
        <select class="select-control" id="flashcardMode">
          <option value="quick" ${state.flashcardMode === "quick" ? "selected" : ""}>Ringkas</option>
          <option value="unitAll" ${state.flashcardMode === "unitAll" ? "selected" : ""}>Semua Kartu Unit</option>
          <option value="unitRandom" ${state.flashcardMode === "unitRandom" ? "selected" : ""}>Acak Unit Ini</option>
          <option value="allRandom" ${state.flashcardMode === "allRandom" ? "selected" : ""}>Acak Semua Unit</option>
        </select>
        <span class="muted">${getFlashcardModeLabel()} memakai ${cards.length} kartu.</span>
      </div>
      <p class="muted">Gunakan mode Ringkas untuk pemanasan 6 kartu, atau Semua Kartu Unit untuk deck lengkap dari Anki.</p>
      <div class="flashcard">
        <div>
          <strong>${card.front}</strong>
          ${answer}
        </div>
      </div>
      <div class="button-row">
        <button class="speak-button" id="speakCard" type="button">Dengar Jerman</button>
        <button class="primary-button" id="flipCard" type="button">Tampilkan arti</button>
        <button class="ghost-button" id="nextCard" type="button">Kartu berikutnya</button>
      </div>
    </article>
  `;
}

function articlesView(unit) {
  const cards = getArticleCards(unit);
  const wrongList = getArticleWrongList();

  if (!cards.length) {
    return `
      <article class="card">
        <h3>Artikel der/die/das</h3>
        <p>Belum ada noun berartikel untuk ${unit.code}.</p>
      </article>
    `;
  }

  const card = cards[state.articleIndex % cards.length];
  const answered = state.articleAnswered;
  const isCorrect = answered === card.article;
  const total = state.articleStats.correct + state.articleStats.wrong;
  const accuracy = total ? Math.round((state.articleStats.correct / total) * 100) : 0;

  return `
    <div class="grid">
      <article class="card">
        <h3>Drill Artikel der/die/das</h3>
        <div class="control-row">
          <label for="articleScope"><strong>Cakupan</strong></label>
          <select class="select-control" id="articleScope">
            <option value="unit" ${state.articleScope === "unit" ? "selected" : ""}>Unit aktif</option>
            <option value="all" ${state.articleScope === "all" ? "selected" : ""}>Semua unit</option>
          </select>
          <span class="muted">${cards.length} noun tersedia.</span>
        </div>

        <div class="article-card">
          <div class="article-word">
            <span class="muted">Pilih artikel yang benar</span>
            <strong>${card.noun}</strong>
            <span>${card.back}</span>
          </div>
          <div class="article-options">
            ${["der", "die", "das"].map((article) => `
              <button
                class="article-option ${answered && article !== card.article ? "is-dim" : ""}"
                data-article="${article}"
                type="button"
                ${answered ? "disabled" : ""}
              >${article}</button>
            `).join("")}
          </div>
          <p class="status" id="articleStatus">
            ${answered ? (isCorrect ? "Benar." : `Belum tepat. Jawaban: ${card.article} ${card.noun}.`) : "Jawab tanpa melihat arti dulu kalau bisa."}
          </p>
          ${answered ? `<span class="article-badge ${card.article}">${card.article}</span>` : ""}
        </div>

        <div class="button-row">
          <button class="speak-button" id="speakArticle" type="button">Dengar noun</button>
          <button class="primary-button" id="nextArticle" type="button">Soal berikutnya</button>
          <button class="ghost-button" id="resetArticleStats" type="button">Reset skor</button>
        </div>
      </article>

      <aside class="card">
        <h3>Skor Sesi</h3>
        <div class="score-grid">
          <div class="score-box"><span>Benar</span><strong>${state.articleStats.correct}</strong></div>
          <div class="score-box"><span>Salah</span><strong>${state.articleStats.wrong}</strong></div>
          <div class="score-box"><span>Akurasi</span><strong>${accuracy}%</strong></div>
        </div>

        <div class="phrase">
          <strong>Kartu salah terakhir</strong>
          <span class="muted">Disimpan lokal, maksimal 30 kartu.</span>
        </div>
        <ul class="compact-list">
          ${wrongList.length ? wrongList.slice(0, 8).map((item) => `
            <li><span><span class="article-badge ${item.article}">${item.article}</span> ${item.noun} - ${item.back}</span></li>
          `).join("") : `<li><span>Belum ada kartu salah.</span></li>`}
        </ul>
        <div class="button-row">
          <button class="ghost-button" id="clearArticleWrong" type="button">Hapus daftar salah</button>
        </div>
      </aside>
    </div>
  `;
}

function quizView(unit) {
  const items = getQuizItems(unit);
  const quiz = items[state.quizIndex % items.length];
  const total = state.quizStats.correct + state.quizStats.wrong;
  const accuracy = total ? Math.round((state.quizStats.correct / total) * 100) : 0;
  return `
    <div class="grid">
      <article class="card">
        <h3>Quiz ${state.quizIndex + 1} / ${items.length}</h3>
        <p>${quiz.q}</p>
        <div class="answer-grid">
          ${quiz.options.map((option, index) => `
            <button class="answer-button" data-answer="${index}" type="button" ${state.quizAnswered ? "disabled" : ""}>${option}</button>
          `).join("")}
        </div>
        <p class="status" id="quizStatus">${state.quizFeedback}</p>
        <div class="button-row">
          <button class="ghost-button" id="nextQuiz" type="button">Soal berikutnya</button>
        </div>
      </article>

      <aside class="card">
        <h3>Skor Sesi</h3>
        <div class="score-grid">
          <div class="score-box"><span>Benar</span><strong>${state.quizStats.correct}</strong></div>
          <div class="score-box"><span>Salah</span><strong>${state.quizStats.wrong}</strong></div>
          <div class="score-box"><span>Akurasi</span><strong>${accuracy}%</strong></div>
        </div>
        <div class="phrase">
          <strong>Pool soal</strong>
          <span>${items.length} soal tersedia untuk ${unit.code}. Quiz manual + soal dari Anki.</span>
        </div>
        <div class="button-row">
          <button class="ghost-button" id="resetQuizStats" type="button">Reset skor</button>
        </div>
      </aside>
    </div>
  `;
}

function builderView(unit) {
  const items = getBuilderItems(unit);
  const item = items[state.builderIndex % items.length];
  const selected = state.selectedWords;
  const shuffledWords = seededShuffle(item.words, `${unit.id}:${item.answer}`);
  const remaining = shuffledWords.filter((entry) => !selected.some((selectedEntry) => selectedEntry.index === entry.index));
  const total = state.builderStats.correct + state.builderStats.wrong;
  const accuracy = total ? Math.round((state.builderStats.correct / total) * 100) : 0;
  return `
    <div class="grid">
      <article class="card">
        <h3>Susun Kalimat ${state.builderIndex + 1} / ${items.length}</h3>
        <p class="muted">Kata diacak. Susun sampai menjadi kalimat Jerman yang benar.</p>
        ${item.back ? `<p><strong>Arti:</strong> ${item.back}</p>` : ""}
        <div class="sentence-drop" id="sentenceDrop">
          ${selected.map((entry, index) => `<button class="word-button" data-remove-word="${index}" type="button">${entry.word}</button>`).join("")}
        </div>
        <div class="word-bank">
          ${remaining.map((entry) => `<button class="word-button" data-word="${escapeAttribute(entry.word)}" data-index="${entry.index}" type="button">${entry.word}</button>`).join("")}
        </div>
        <p class="status" id="builderStatus">${state.builderFeedback || (state.builderAnswered ? "Soal ini sudah dinilai. Klik Kalimat berikutnya untuk lanjut." : "")}</p>
        <div class="button-row">
          <button class="primary-button" id="checkSentence" type="button" ${state.builderAnswered ? "disabled" : ""}>Cek</button>
          <button class="speak-button" id="speakSentence" type="button">Dengar jawaban</button>
          <button class="ghost-button" id="resetSentence" type="button">Ulang</button>
          <button class="ghost-button" id="nextSentence" type="button">Kalimat berikutnya</button>
        </div>
      </article>

      <aside class="card">
        <h3>Skor Sesi</h3>
        <div class="score-grid">
          <div class="score-box"><span>Benar</span><strong>${state.builderStats.correct}</strong></div>
          <div class="score-box"><span>Salah</span><strong>${state.builderStats.wrong}</strong></div>
          <div class="score-box"><span>Akurasi</span><strong>${accuracy}%</strong></div>
        </div>
        <div class="phrase">
          <strong>Pool kalimat</strong>
          <span>${items.length} soal tersedia untuk ${unit.code}. Sebagian besar diambil dari kartu Anki.</span>
        </div>
        <div class="button-row">
          <button class="ghost-button" id="resetBuilderStats" type="button">Reset skor</button>
        </div>
      </aside>
    </div>
  `;
}

function outputView(unit) {
  return `
    <div class="grid">
      <article class="card">
        <h3>Speaking Prompt</h3>
        <div class="checklist">
          ${unit.speaking.map((prompt) => `
            <label>
              <button class="small-speak" data-speak="${escapeAttribute(prompt)}" type="button">Dengar</button>
              <span>${prompt}</span>
            </label>
          `).join("")}
        </div>
        <p class="muted">Rekam dengan HP. Target awal 60 detik, lalu ulangi sampai lebih lancar.</p>
      </article>
      <article class="card">
        <h3>Writing Task</h3>
        <p>${unit.writing}</p>
        <textarea id="writingBox" placeholder="Tulis jawabanmu di sini..."></textarea>
        <div class="button-row">
          <button class="primary-button" id="saveWriting" type="button">Simpan draft</button>
          <button class="ghost-button" id="clearWriting" type="button">Kosongkan</button>
        </div>
        <p class="status" id="writingStatus"></p>
      </article>
    </div>
    ${checklistView(unit)}
  `;
}

function dailyPracticeView(unit) {
  const practice = getPracticeItems(unit);
  const doneItems = ["flashcards", "quiz", "builder", "speaking", "writing"].filter((item) => isPracticeDone(unit.id, item));
  const percent = Math.round((doneItems.length / 5) * 100);

  return `
    <div class="practice-grid">
      <article class="card">
        <h3>Latihan 20 Menit</h3>
        <p class="practice-note">Paket kecil untuk unit aktif. Selesaikan cukup satu putaran: dengar, jawab, susun, bicara, tulis. Targetnya konsisten, bukan sempurna.</p>

        <div class="practice-step">
          <div class="step-title">
            <span>1. Flashcard cepat</span>
            <label><input type="checkbox" data-practice="flashcards" ${isPracticeDone(unit.id, "flashcards") ? "checked" : ""}> selesai</label>
          </div>
          <ul class="compact-list">
            ${practice.flashcards.map(([front, back]) => `
              <li>
                <span><strong>${front}</strong> - ${back}</span>
                <button class="small-speak" data-speak="${escapeAttribute(front)}" type="button">Dengar</button>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="practice-step">
          <div class="step-title">
            <span>2. Quiz mini</span>
            <label><input type="checkbox" data-practice="quiz" ${isPracticeDone(unit.id, "quiz") ? "checked" : ""}> selesai</label>
          </div>
          ${practice.quiz.map((item, index) => `
            <div class="phrase">
              <strong>${index + 1}. ${item.q}</strong>
              <span>${item.options.map((option, optionIndex) => `${optionIndex + 1}. ${option}`).join(" | ")}</span>
              <span class="muted">Jawaban: ${item.options[item.answer]}</span>
            </div>
          `).join("")}
        </div>

        <div class="practice-step">
          <div class="step-title">
            <span>3. Susun kalimat</span>
            <label><input type="checkbox" data-practice="builder" ${isPracticeDone(unit.id, "builder") ? "checked" : ""}> selesai</label>
          </div>
          <p class="practice-note">${seededShuffle(practice.builder.words, `practice:${unit.id}:${practice.builder.answer}`).map((entry) => entry.word).join(" / ")}</p>
          <p><strong>Jawaban:</strong> ${practice.builder.answer}</p>
          <button class="small-speak" data-speak="${escapeAttribute(practice.builder.answer)}" type="button">Dengar jawaban</button>
        </div>

        <div class="practice-step">
          <div class="step-title">
            <span>4. Speaking</span>
            <label><input type="checkbox" data-practice="speaking" ${isPracticeDone(unit.id, "speaking") ? "checked" : ""}> selesai</label>
          </div>
          <p><strong>${practice.speaking}</strong></p>
          <button class="small-speak" data-speak="${escapeAttribute(practice.speaking)}" type="button">Dengar prompt</button>
          <p class="practice-note">Jawab 30-60 detik. Rekam dengan HP kalau bisa.</p>
        </div>

        <div class="practice-step">
          <div class="step-title">
            <span>5. Writing mini</span>
            <label><input type="checkbox" data-practice="writing" ${isPracticeDone(unit.id, "writing") ? "checked" : ""}> selesai</label>
          </div>
          <p class="practice-note">${practice.writing}</p>
          <textarea id="practiceWritingBox" placeholder="Tulis versi pendek 3-5 kalimat..."></textarea>
          <div class="button-row">
            <button class="primary-button" id="savePracticeWriting" type="button">Simpan latihan</button>
            <button class="ghost-button" id="clearPracticeWriting" type="button">Kosongkan</button>
          </div>
          <p class="status" id="practiceWritingStatus"></p>
        </div>
      </article>

      <aside class="card">
        <h3>Ritme Hari Ini</h3>
        <div class="timer-box">
          <span>Timer fokus</span>
          <strong id="practiceTimerText">${formatTime(state.practiceSecondsLeft)}</strong>
          <div class="button-row">
            <button class="primary-button" id="startPracticeTimer" type="button">Mulai</button>
            <button class="ghost-button" id="resetPracticeTimer" type="button">Reset</button>
          </div>
        </div>
        <div class="phrase">
          <strong>${percent}% paket selesai</strong>
          <span>${doneItems.length} dari 5 langkah selesai untuk ${unit.code} hari ini.</span>
        </div>
        <p class="practice-note">Kalau waktumu sempit, cukup lakukan flashcard, satu prompt speaking, dan Anki review. Jangan ada hari nol.</p>
      </aside>
    </div>
  `;
}

function escapeAttribute(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function checklistView(unit) {
  return `
    <article class="card">
      <h3>Checklist Unit</h3>
      <div class="checklist">
        ${unit.checklist.map((item, index) => `
          <label>
            <input type="checkbox" data-check="${index}" ${isChecked(unit.id, index) ? "checked" : ""}>
            <span>${item}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;
}

function attachHandlers(unit) {
  document.querySelectorAll("[data-check]").forEach((box) => {
    box.onchange = () => {
      setChecked(unit.id, box.dataset.check, box.checked);
      renderProgress(unit);
    };
  });

  const flipCard = $("#flipCard");
  if (flipCard) {
    flipCard.onclick = () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      render();
    };
  }

  const flashcardMode = $("#flashcardMode");
  if (flashcardMode) {
    flashcardMode.onchange = () => {
      state.flashcardMode = flashcardMode.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      localStorage.setItem("a1.flashcardMode", state.flashcardMode);
      render();
    };
  }

  const articleScope = $("#articleScope");
  if (articleScope) {
    articleScope.onchange = () => {
      state.articleScope = articleScope.value;
      state.articleIndex = 0;
      state.articleAnswered = null;
      localStorage.setItem("a1.articleScope", state.articleScope);
      render();
    };
  }

  document.querySelectorAll("[data-article]").forEach((button) => {
    button.onclick = () => {
      const cards = getArticleCards(unit);
      const card = cards[state.articleIndex % cards.length];
      const answer = button.dataset.article;
      state.articleAnswered = answer;
      if (answer === card.article) {
        state.articleStats.correct += 1;
      } else {
        state.articleStats.wrong += 1;
        addArticleWrong(card);
      }
      render();
    };
  });

  const nextArticle = $("#nextArticle");
  if (nextArticle) {
    nextArticle.onclick = () => {
      const cards = getArticleCards(unit);
      state.articleIndex = nextArticleIndex(cards);
      state.articleAnswered = null;
      render();
    };
  }

  const resetArticleStats = $("#resetArticleStats");
  if (resetArticleStats) {
    resetArticleStats.onclick = () => {
      state.articleStats = { correct: 0, wrong: 0 };
      state.articleAnswered = null;
      render();
    };
  }

  const clearArticleWrong = $("#clearArticleWrong");
  if (clearArticleWrong) {
    clearArticleWrong.onclick = () => {
      clearArticleWrongList();
      render();
    };
  }

  const speakArticle = $("#speakArticle");
  if (speakArticle) {
    speakArticle.onclick = () => {
      const cards = getArticleCards(unit);
      const card = cards[state.articleIndex % cards.length];
      speakGerman(card.front);
    };
  }

  const nextCard = $("#nextCard");
  if (nextCard) {
    nextCard.onclick = () => {
      const cards = getFlashcards(unit);
      state.flashcardIndex = nextFlashcardIndex(cards);
      state.flashcardFlipped = false;
      render();
    };
  }

  const speakCard = $("#speakCard");
  if (speakCard) {
    speakCard.onclick = () => {
      const cards = getFlashcards(unit);
      const card = cards[state.flashcardIndex % cards.length];
      speakGerman(card.front);
    };
  }

  document.querySelectorAll("[data-speak]").forEach((button) => {
    button.onclick = () => speakGerman(button.dataset.speak);
  });

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.onclick = () => {
      if (state.quizAnswered) return;
      const items = getQuizItems(unit);
      const quiz = items[state.quizIndex % items.length];
      const selected = Number(button.dataset.answer);
      document.querySelectorAll("[data-answer]").forEach((answerButton) => {
        answerButton.disabled = true;
      });
      button.classList.add(selected === quiz.answer ? "is-correct" : "is-wrong");
      if (selected !== quiz.answer) {
        document.querySelector(`[data-answer="${quiz.answer}"]`).classList.add("is-correct");
      }
      if (selected === quiz.answer) {
        state.quizStats.correct += 1;
        state.quizFeedback = "Benar.";
      } else {
        state.quizStats.wrong += 1;
        state.quizFeedback = `Belum tepat. Jawaban: ${quiz.options[quiz.answer]}.`;
      }
      state.quizAnswered = true;
      $("#quizStatus").textContent = state.quizFeedback;
      render();
    };
  });

  const nextQuiz = $("#nextQuiz");
  if (nextQuiz) {
    nextQuiz.onclick = () => {
      const items = getQuizItems(unit);
      state.quizIndex = (state.quizIndex + 1) % items.length;
      state.quizAnswered = false;
      state.quizFeedback = "";
      render();
    };
  }

  const resetQuizStats = $("#resetQuizStats");
  if (resetQuizStats) {
    resetQuizStats.onclick = () => {
      state.quizStats = { correct: 0, wrong: 0 };
      state.quizAnswered = false;
      state.quizFeedback = "";
      render();
    };
  }

  document.querySelectorAll("[data-word]").forEach((button) => {
    button.onclick = () => {
      state.selectedWords.push({ word: button.dataset.word, index: Number(button.dataset.index) });
      render();
    };
  });

  document.querySelectorAll("[data-remove-word]").forEach((button) => {
    button.onclick = () => {
      state.selectedWords.splice(Number(button.dataset.removeWord), 1);
      render();
    };
  });

  const checkSentence = $("#checkSentence");
  if (checkSentence) {
    checkSentence.onclick = () => {
      if (state.builderAnswered) return;
      const items = getBuilderItems(unit);
      const item = items[state.builderIndex % items.length];
      const answer = state.selectedWords.map((entry) => entry.word).join(" ");
      const normalizedAnswer = normalizeBuilderAnswer(answer);
      const isCorrect = normalizedAnswer === item.answer;
      if (isCorrect) {
        state.builderStats.correct += 1;
      } else {
        state.builderStats.wrong += 1;
      }
      state.builderAnswered = true;
      state.builderFeedback = isCorrect ? "Benar." : `Belum tepat. Jawaban: ${item.answer}.`;
      render();
    };
  }

  const speakSentence = $("#speakSentence");
  if (speakSentence) {
    speakSentence.onclick = () => {
      const items = getBuilderItems(unit);
      const item = items[state.builderIndex % items.length];
      speakGerman(item.answer);
    };
  }

  const resetSentence = $("#resetSentence");
  if (resetSentence) {
    resetSentence.onclick = () => {
      state.selectedWords = [];
      state.builderAnswered = false;
      state.builderFeedback = "";
      render();
    };
  }

  const nextSentence = $("#nextSentence");
  if (nextSentence) {
    nextSentence.onclick = () => {
      const items = getBuilderItems(unit);
      state.builderIndex = (state.builderIndex + 1) % items.length;
      state.selectedWords = [];
      state.builderAnswered = false;
      state.builderFeedback = "";
      render();
    };
  }

  const resetBuilderStats = $("#resetBuilderStats");
  if (resetBuilderStats) {
    resetBuilderStats.onclick = () => {
      state.builderStats = { correct: 0, wrong: 0 };
      state.builderAnswered = false;
      state.builderFeedback = "";
      state.selectedWords = [];
      render();
    };
  }

  const writingBox = $("#writingBox");
  if (writingBox) {
    const key = `a1.writing.${unit.id}`;
    writingBox.value = localStorage.getItem(key) || "";
    $("#saveWriting").onclick = () => {
      localStorage.setItem(key, writingBox.value);
      $("#writingStatus").textContent = "Draft tersimpan.";
    };
    $("#clearWriting").onclick = () => {
      writingBox.value = "";
      localStorage.removeItem(key);
      $("#writingStatus").textContent = "Draft dikosongkan.";
    };
  }

  document.querySelectorAll("[data-practice]").forEach((box) => {
    box.onchange = () => {
      setPracticeDone(unit.id, box.dataset.practice, box.checked);
      render();
    };
  });

  const practiceWritingBox = $("#practiceWritingBox");
  if (practiceWritingBox) {
    const key = `a1.practiceWriting.${new Date().toISOString().slice(0, 10)}.${unit.id}`;
    practiceWritingBox.value = localStorage.getItem(key) || "";
    $("#savePracticeWriting").onclick = () => {
      localStorage.setItem(key, practiceWritingBox.value);
      setPracticeDone(unit.id, "writing", true);
      $("#practiceWritingStatus").textContent = "Latihan tersimpan.";
      const box = document.querySelector('[data-practice="writing"]');
      if (box) box.checked = true;
    };
    $("#clearPracticeWriting").onclick = () => {
      practiceWritingBox.value = "";
      localStorage.removeItem(key);
      setPracticeDone(unit.id, "writing", false);
      $("#practiceWritingStatus").textContent = "Latihan dikosongkan.";
      const box = document.querySelector('[data-practice="writing"]');
      if (box) box.checked = false;
    };
  }

  const startPracticeTimer = $("#startPracticeTimer");
  if (startPracticeTimer) {
    startPracticeTimer.onclick = () => {
      if (state.practiceTimer) return;
      state.practiceTimer = setInterval(() => {
        state.practiceSecondsLeft = Math.max(0, state.practiceSecondsLeft - 1);
        const timerText = $("#practiceTimerText");
        if (timerText) {
          timerText.textContent = formatTime(state.practiceSecondsLeft);
        }
        if (state.practiceSecondsLeft === 0) {
          stopPracticeTimer();
        }
      }, 1000);
    };
  }

  const resetPracticeTimer = $("#resetPracticeTimer");
  if (resetPracticeTimer) {
    resetPracticeTimer.onclick = () => {
      stopPracticeTimer();
      state.practiceSecondsLeft = 20 * 60;
      const timerText = $("#practiceTimerText");
      if (timerText) {
        timerText.textContent = formatTime(state.practiceSecondsLeft);
      }
    };
  }
}

function renderView(unit) {
  const views = {
    lesson: lessonView,
    fullModule: fullModuleView,
    flashcards: flashcardsView,
    articles: articlesView,
    quiz: quizView,
    builder: builderView,
    output: outputView,
    dailyPractice: dailyPracticeView
  };
  $("#view").innerHTML = views[state.view](unit);
  attachHandlers(unit);
}

function render() {
  const unit = getUnit();
  $("#unitTitle").textContent = `${unit.code}: ${unit.title}`;
  renderUnits();
  renderTabs();
  renderProgress(unit);
  renderDaily();
  renderView(unit);
}

function stopPracticeTimer() {
  if (state.practiceTimer) {
    clearInterval(state.practiceTimer);
    state.practiceTimer = null;
  }
}

render();
