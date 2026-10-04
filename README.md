# Walimatulurus — Laman Web Jemputan Kahwin Digital & RSVP

Laman web jemputan perkahwinan digital eksklusif dan sistem RSVP interaktif berkonsepkan **Editorial Mewah Minimalis** yang dibina menggunakan React 19, TypeScript, Tailwind CSS, dan Vite.

---

## 🚀 Panduan Deploy Menggunakan GitHub (Langkah Demi Langkah)

Projek ini telah dikonfigurasi secara lengkap dengan fail **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) dan tetapan *relative path* (`base: './'`) dalam `vite.config.ts`, membolehkan anda menerbitkan laman web ini ke **GitHub Pages** secara percuma dalam masa 2 minit!

---

### Kaedah 1: Menggunakan GitHub Actions (Disyorkan & Automatik)

#### Langkah 1: Buat Repositori Baharu di GitHub
1. Layari [GitHub.com](https://github.com) dan log masuk ke akaun anda.
2. Klik butang **New repository** (atau tanda `+` di penjuru atas).
3. Berikan nama untuk repositori anda (contoh: `walimatulurus` atau `kad-kahwin-digital`).
4. Pastikan pilihan **Public** dipilih.
5. Klik **Create repository**.

#### Langkah 2: Muat Naik / Tolak (Push) Kod ke GitHub
Buka terminal di dalam folder projek ini dan jalankan arahan berikut:

```bash
# 1. Inisialisasi git (jika belum ada)
git init

# 2. Tambah semua fail projek
git add .

# 3. Buat commit pertama
git commit -m "Jemputan Kahwin Digital & RSVP Daniel & Iman"

# 4. Namakan cawangan utama sebagai main
git branch -M main

# 5. Sambungkan ke repositori GitHub anda (gantikan dengan URL repositori anda)
git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPOSITORI>.git

# 6. Tolak kod ke GitHub
git push -u origin main
```

#### Langkah 3: Aktifkan GitHub Pages di GitHub
1. Di halaman repositori GitHub anda, klik tab **Settings** (di bar menu atas).
2. Di menu sebelah kiri, pilih **Pages** (bawah seksyen *Code and automation*).
3. Di bawah bahagian **Build and deployment**:
   - Pada pilihan **Source**, tukar daripada *Deploy from a branch* kepada **GitHub Actions**.
4. Selesai! GitHub Actions akan secara automatik membina (*build*) dan melancarkan laman web anda setiap kali anda menolak (*push*) perubahan ke cawangan `main`.
5. Anda boleh melihat status deployment di tab **Actions**. Selepas ~1 minit, URL laman web anda akan dipaparkan (contoh: `https://<USERNAME-ANDA>.github.io/<NAMA-REPOSITORI>/`).

---

### Kaedah 2: Deploy Menggunakan Terminal (`npm run deploy`)

Jika anda lebih suka menerbitkan secara manual dari komputer anda menggunakan pakej `gh-pages`:

```bash
# Pasang dependencies
npm install

# Jalankan skrip deploy
npm run deploy
```

Skrip ini akan membina projek (`npm run build`) dan menolak folder `dist` secara automatik ke cawangan `gh-pages` pada repositori GitHub anda.

---

### Kaedah 3: Sambungkan ke Vercel atau Netlify melalui GitHub

Jika anda ingin menggunakan domain tersendiri (*custom domain*) atau kelajuan CDN global:
1. Layari [Vercel.com](https://vercel.com) atau [Netlify.com](https://netlify.com).
2. Pilih **Import Git Repository** dan pilih repositori GitHub anda.
3. Tetapan automatik:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy**.

---

## 🛠️ Pembangunan Setempat (Local Development)

Untuk menjalankan dan menguji projek di komputer anda:

```bash
# 1. Pasang pakej dependencies
npm install

# 2. Jalankan pelayan pembangunan (development server)
npm run dev

# 3. Buka di pelayar
http://localhost:3000
```

---

## 🎨 Ciri-Ciri Utama Aplikasi

- **Editorial Luxury Typography**: *Cormorant Garamond*, *Pinyon Script*, dan *Plus Jakarta Sans*.
- **Sampul Surat Berlakri Lilin (*Wax Seal Envelope*)**: Pengalaman membuka undangan fizikal interaktif.
- **Pemain Muzik Akustik (*Floating Audio Player*)**: Alunan melodi piano & harp yang dijana secara lancar.
- **Kalendar Mini November 2026**: Integrasi Google Calendar dan muat turun fail `.ICS`.
- **Navigasi Lokasi**: Integrasi Google Maps, Waze, dan salin alamat.
- **Garis Masa Atur Cara & Galeri Foto**: Susun atur *masonry* responsif dengan *lightbox effect*.
- **Kod Pakaian & Palet Warna**: Pengecam tona warna interaktif dan panduan busana.
- **Salam Kaut Digital & DuitNow QR**: 1-klik salin nombor akaun bank dan imbasan QR.
- **Borang RSVP & Buku Ucapan Tetamu**: Efek *confetti* keraian dan storan ucapan masa sebenar.
- **Jam Kira Detik (*Live Countdown*)**: Menghitung detik hari bersejarah.
- **Sokongan Penuh Mod Gelap (*Dark Mode*)**: Selesa untuk tatapan siang dan malam.
