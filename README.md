# A1 Deutsch Sprint

Web app statis untuk belajar A1 menuju target Ausbildung.

## Cara Membuka

Buka file `index.html` di browser.

## Fitur MVP

- Dashboard Unit 1-12.
- Materi ringkas per unit.
- Modul penuh Unit 1-12 langsung di dalam app.
- Flashcard interaktif dengan mode ringkas, semua kartu unit, acak unit, dan acak semua unit.
- Mode Artikel `der/die/das` dari noun di deck Anki.
- Tombol dengar bahasa Jerman memakai Web Speech API bawaan browser.
- Quiz pilihan ganda dengan pool tambahan dari kartu Anki dan skor sesi.
- Latihan susun kalimat dengan word bank acak, sumber tambahan dari kartu Anki, dan skor sesi.
- Speaking prompt.
- Writing draft dengan penyimpanan lokal.
- Mode Latihan 20 Menit per unit.
- Daily minimum checklist.
- Progress checklist per unit.

Semua progress disimpan di LocalStorage browser, jadi tidak perlu akun atau internet.

Modul penuh dimuat dari `modules.js`, hasil konversi lokal dari file `.md` Unit 1-12. Jadi app tetap bisa berjalan offline tanpa server.
Flashcard lengkap dimuat dari `cards.js`, hasil konversi lokal dari file Anki `.tsv` Unit 1-12.

## Unit yang Sudah Ada

1. Unit 01 - Sich vorstellen
2. Unit 02 - Daten, Zahlen und Termine
3. Unit 03 - Familie und persönliche Situation
4. Unit 04 - Alltag und Tagesablauf
5. Unit 05 - Essen, Einkaufen und Preise
6. Unit 06 - Wohnung, Zimmer und Gegenstände
7. Unit 07 - Stadt, Wege und Verkehr
8. Unit 08 - Arbeit, Beruf und Arbeitsplatz
9. Unit 09 - Gesundheit, Arzt und Apotheke
10. Unit 10 - E-Mail, Nachrichten und Verwaltung
11. Unit 11 - Deutschlandplan und Ausbildung
12. Unit 12 - Review und Mini-Test

## Catatan Fitur Suara

Fitur `Dengar` memakai Web Speech API bawaan browser, jadi gratis dan tidak memakai layanan berbayar. Kualitas suara bergantung pada browser dan voice bahasa Jerman yang tersedia di Windows. Jika suara Jerman belum tersedia, browser biasanya tetap mencoba membaca dengan voice default.

## Upgrade Berikutnya

- Tambah mode simulasi mini test A1 yang lebih lengkap.
- Tambah review khusus kartu artikel yang salah.
- Tambah review khusus susun kalimat yang salah.
- Mulai rancangan modul A2.
- Tambah mode shadowing dengan tombol dengar per kalimat.
- Tambah import/export progress.
- Tambah export Anki TSV dari dalam app.
- Tambah mode simulasi mini test A1.
