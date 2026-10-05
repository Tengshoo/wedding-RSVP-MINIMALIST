# Walimatulurus — Laman Web Jemputan Kahwin Digital & RSVP

Laman web jemputan perkahwinan digital eksklusif dan sistem RSVP interaktif berkonsepkan **Editorial Mewah Minimalis** yang dibina menggunakan React 19, TypeScript, Tailwind CSS, dan Vite.

---

## 🚀 Panduan Menerbitkan (Deploy) Terus dari Cawangan `main` (Tanpa GitHub Actions)

Projek ini telah dikonfigurasi khas untuk diterbitkan terus daripada cawangan **`main`** menggunakan pilihan folder **/docs** rasmi GitHub Pages tanpa memerlukan sebarang GitHub Actions.

---

### Langkah Demi Langkah:

#### 1. Bina Fail Produksi (Build ke folder `/docs`)
Projek ini telah siap dibina ke dalam folder `docs/`. Setiap kali anda membuat perubahan pada kod sumber (`src/`), anda hanya perlu jalankan arahan:

```bash
npm run build
```
*(Arahan ini membina aplikasi dan menyimpan fail HTML, CSS, JavaScript, `.nojekyll`, dan `404.html` terus ke dalam folder `/docs`).*

---

#### 2. Tolak (Push) Semua Kod dan Folder `docs` ke GitHub

Buka terminal dan jalankan arahan berikut:

```bash
# Inisialisasi git (jika belum dibuat)
git init

# Tambah semua fail (termasuk folder docs)
git add .

# Buat commit
git commit -m "Deploy jemputan kahwin dari cawangan main"

# Pastikan nama cawangan utama ialah main
git branch -M main

# Sambungkan ke repositori GitHub anda
git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPOSITORI>.git

# Tolak kod ke GitHub
git push -u origin main
```

---

#### 3. Tetapkan GitHub Pages di GitHub Repository Settings

1. Buka repositori anda di [GitHub.com](https://github.com).
2. Tekan tab **Settings** (di menu atas repositori).
3. Di menu sebelah kiri, klik **Pages** (di bawah bahagian *Code and automation*).
4. Di bawah **Build and deployment**:
   - **Source**: Pastikan dipilih **Deploy from a branch**.
   - **Branch**: Pilih **`main`**.
   - **Folder**: Tukar daripada `/(root)` kepada **`/docs`**.
5. Klik butang **Save**.

---

### 🌐 Selesai!
GitHub Pages akan terus menyajikan laman web anda daripada folder `docs` di cawangan `main` tanpa perlu menunggu GitHub Actions! Laman web anda akan aktif di:
```
https://<USERNAME-ANDA>.github.io/<NAMA-REPOSITORI>/
```

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
