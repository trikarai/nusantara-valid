/**
 * Nusantara Valid: province.extended.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
**/

import { PROVINCE_DATA } from '../province';
import { MergeRecursive } from '../../helpers/index.extended';

/**
 * PROVINCE_EXTENDED_DATA
 *
 * List of extended province data of Indonesia like regencies and districts
**/
export const PROVINCE_DATA_EXTENSION =
{
    AC: {
        regencies: [
            {
                name: 'Aceh Selatan',
                bpsCode: '11.01',
                districts: [
                    { name: 'Bakongan', bpsCode: '11.01.01' },
                    { name: 'Kluet Utara', bpsCode: '11.01.02' },
                    { name: 'Kluet Selatan', bpsCode: '11.01.03' },
                    { name: 'Labuhan Haji', bpsCode: '11.01.04' },
                    { name: 'Meukek', bpsCode: '11.01.05' },
                    { name: 'Samadua', bpsCode: '11.01.06' },
                    { name: 'Sawang', bpsCode: '11.01.07' },
                    { name: 'Tapaktuan', bpsCode: '11.01.08' },
                    { name: 'Trumon', bpsCode: '11.01.09' },
                    { name: 'Pasi Raja', bpsCode: '11.01.10' },
                    { name: 'Labuhan Haji Timur', bpsCode: '11.01.11' },
                    { name: 'Labuhan Haji Barat', bpsCode: '11.01.12' },
                    { name: 'Kluet Tengah', bpsCode: '11.01.13' },
                    { name: 'Kluet Timur', bpsCode: '11.01.14' },
                    { name: 'Bakongan Timur', bpsCode: '11.01.15' },
                    { name: 'Trumon Timur', bpsCode: '11.01.16' },
                    { name: 'Kota Bahagia', bpsCode: '11.01.17' },
                    { name: 'Trumon Tengah', bpsCode: '11.01.18' }
                ]
            }, {
                name: 'Aceh Tenggara',
                bpsCode: '11.02',
                districts: [
                    { name: 'Lawe Alas', bpsCode: '11.02.01' },
                    { name: 'Lawe Sigala Gala', bpsCode: '11.02.02' },
                    { name: 'Bambel', bpsCode: '11.02.03' },
                    { name: 'Babussalam', bpsCode: '11.02.04' },
                    { name: 'Badar', bpsCode: '11.02.05' },
                    { name: 'Babul Makmur', bpsCode: '11.02.06' },
                    { name: 'Darul Hasanah', bpsCode: '11.02.07' },
                    { name: 'Lawe Bulan', bpsCode: '11.02.08' },
                    { name: 'Bukit Tusam', bpsCode: '11.02.09' },
                    { name: 'Semadam', bpsCode: '11.02.10' },
                    { name: 'Babul Rahmah', bpsCode: '11.02.11' },
                    { name: 'Ketambe', bpsCode: '11.02.12' },
                    { name: 'Deleng Pokhkisen', bpsCode: '11.02.13' },
                    { name: 'Lawe Sumur', bpsCode: '11.02.14' },
                    { name: 'Tanoh Alas', bpsCode: '11.02.15' },
                    { name: 'Leuser', bpsCode: '11.02.16' }
                ]
            }, {
                name: 'Aceh Timur',
                bpsCode: '11.03',
                districts: [
                    { name: 'Darul Aman', bpsCode: '11.03.01' },
                    { name: 'Julok', bpsCode: '11.03.02' },
                    { name: 'Idi Rayeuk', bpsCode: '11.03.03' },
                    { name: 'Birem Bayeun', bpsCode: '11.03.04' },
                    { name: 'Serbajadi', bpsCode: '11.03.05' },
                    { name: 'Nurussalam', bpsCode: '11.03.06' },
                    { name: 'Peureulak', bpsCode: '11.03.07' },
                    { name: 'Rantau Selamat', bpsCode: '11.03.08' },
                    { name: 'Simpang Ulim', bpsCode: '11.03.09' },
                    { name: 'Rantau Peureulak', bpsCode: '11.03.10' },
                    { name: 'Pante Bidari', bpsCode: '11.03.11' },
                    { name: 'Madat', bpsCode: '11.03.12' },
                    { name: 'Indra Makmu', bpsCode: '11.03.13' },
                    { name: 'Idi Tunong', bpsCode: '11.03.14' },
                    { name: 'Banda Alam', bpsCode: '11.03.15' },
                    { name: 'Peudawa', bpsCode: '11.03.16' },
                    { name: 'Peureulak Timur', bpsCode: '11.03.17' },
                    { name: 'Peureulak Barat', bpsCode: '11.03.18' },
                    { name: 'Sungai Raya', bpsCode: '11.03.19' },
                    { name: 'Simpang Jernih', bpsCode: '11.03.20' },
                    { name: 'Darul Iksan', bpsCode: '11.03.21' },
                    { name: 'Darul Falah', bpsCode: '11.03.22' },
                    { name: 'Idi Timur', bpsCode: '11.03.23' },
                    { name: 'Peunaron', bpsCode: '11.03.24' }
                ]
            }, {
                name: 'Aceh Tengah',
                bpsCode: '11.04',
                districts: [
                    { name: 'Linge', bpsCode: '11.04.01' },
                    { name: 'Silih Nara', bpsCode: '11.04.02' },
                    { name: 'Bebesen', bpsCode: '11.04.03' },
                    { name: 'Pegasing', bpsCode: '11.04.07' },
                    { name: 'Bintang', bpsCode: '11.04.08' },
                    { name: 'Ketol', bpsCode: '11.04.10' },
                    { name: 'Kebayakan', bpsCode: '11.04.11' },
                    { name: 'Kute Panang', bpsCode: '11.04.12' },
                    { name: 'Celala', bpsCode: '11.04.13' },
                    { name: 'Laut Tawar', bpsCode: '11.04.17' },
                    { name: 'Atu Lintang', bpsCode: '11.04.18' },
                    { name: 'Jagong Jeget', bpsCode: '11.04.19' },
                    { name: 'Bies', bpsCode: '11.04.20' },
                    { name: 'Rusip Antara', bpsCode: '11.04.21' }
                ]
            }, {
                name: 'Aceh Barat',
                bpsCode: '11.05',
                districts: [
                    { name: 'Johan Pahwalan', bpsCode: '11.05.01' },
                    { name: 'Kaway XVI', bpsCode: '11.05.02' },
                    { name: 'Sungai Mas', bpsCode: '11.05.03' },
                    { name: 'Woyla', bpsCode: '11.05.04' },
                    { name: 'Samatiga', bpsCode: '11.05.05' },
                    { name: 'Bubon', bpsCode: '11.05.06' },
                    { name: 'Arongan Lambalek', bpsCode: '11.05.07' },
                    { name: 'Pante Ceureumen', bpsCode: '11.05.08' },
                    { name: 'Meureubo', bpsCode: '11.05.09' },
                    { name: 'Moyla Barat', bpsCode: '11.05.10' },
                    { name: 'Woyla Timur', bpsCode: '11.05.11' },
                    { name: 'Panton Reu', bpsCode: '11.05.12' }
                ]
            }, {
                name: 'Aceh Besar',
                bpsCode: '11.06',
                districts: [
                    { name: 'Lhoong', bpsCode: '11.06.01' },
                    { name: 'Lhoknga', bpsCode: '11.06.02' },
                    { name: 'Indrapuri', bpsCode: '11.06.03' },
                    { name: 'Seulimeum', bpsCode: '11.06.04' },
                    { name: 'Mantasiek', bpsCode: '11.06.05' },
                    { name: 'Sukamakmur', bpsCode: '11.06.06' },
                    { name: 'Darul Imarah', bpsCode: '11.06.07' },
                    { name: 'Peukan Bada', bpsCode: '11.06.08' },
                    { name: 'Mesjid Raya', bpsCode: '11.06.09' },
                    { name: 'Ingin Jaya', bpsCode: '11.06.10' },
                    { name: 'Kuta Baro', bpsCode: '11.06.11' },
                    { name: 'Darussalam', bpsCode: '11.06.12' },
                    { name: 'Pulo Aceh', bpsCode: '11.06.13' },
                    { name: 'Lembah Seulawah', bpsCode: '11.06.14' },
                    { name: 'Kota Jantho', bpsCode: '11.06.15' },
                    { name: 'Kota Cot Glie', bpsCode: '11.06.16' },
                    { name: 'Kota Malaka', bpsCode: '11.06.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.06.18' },
                    { name: 'Darul Kamal', bpsCode: '11.06.19' },
                    { name: 'Baitussalam', bpsCode: '11.06.20' },
                    { name: 'Krueng Barona Jaya', bpsCode: '11.06.21' },
                    { name: 'Keupung', bpsCode: '11.06.22' },
                    { name: 'Blang Bintang', bpsCode: '11.06.23' }
                ]
            }, {
                name: 'Pidie',
                bpsCode: '11.07',
                districts: [
                    { name: 'Batee', bpsCode: '11.07.03' },
                    { name: 'Delima', bpsCode: '11.07.04' },
                    { name: 'Geumpang', bpsCode: '11.07.05' },
                    { name: 'Geulumpang Tiga', bpsCode: '11.07.06' },
                    { name: 'Indra Jaya', bpsCode: '11.07.07' },
                    { name: 'Kembang Tanjong', bpsCode: '11.07.08' },
                    { name: 'Kota Sigli', bpsCode: '11.07.09' },
                    { name: 'Mila', bpsCode: '11.07.11' },
                    { name: 'Muara Tiga', bpsCode: '11.07.12' },
                    { name: 'Mutiara', bpsCode: '11.07.13' },
                    { name: 'Padang Tiji', bpsCode: '11.07.14' },
                    { name: 'Peukan Baro', bpsCode: '11.07.15' },
                    { name: 'Pide', bpsCode: '11.07.16' },
                    { name: 'Sakti', bpsCode: '11.07.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.07.18' },
                    { name: 'Tangse', bpsCode: '11.07.19' },
                    { name: 'Tiro/Truseb', bpsCode: '11.07.21' },
                    { name: 'Keumala', bpsCode: '11.07.22' },
                    { name: 'Mutiara Timur', bpsCode: '11.07.24' },
                    { name: 'Grong Grong', bpsCode: '11.07.25' },
                    { name: 'Mane', bpsCode: '11.07.27' },
                    { name: 'Glumpang Baro', bpsCode: '11.07.29' },
                    { name: 'Titeue', bpsCode: '11.07.31' },
                ]
            }, {
                name: 'Aceh Utara',
                bpsCode: '11.08',
                districts: [
                    { name: 'Baktiya', bpsCode: '11.08.01' },
                    { name: 'Dewantara', bpsCode: '11.08.02' },
                    { name: 'Kuta Makmur', bpsCode: '11.08.03' },
                    { name: 'Lhoksukon', bpsCode: '11.08.04' },
                    { name: 'Matangkuli', bpsCode: '11.08.05' },
                    { name: 'Muara Batu', bpsCode: '11.08.06' },
                    { name: 'Meurah Mulia', bpsCode: '11.08.07' },
                    { name: 'Samudera', bpsCode: '11.08.08' },
                    { name: 'Seunuddon (Seunudon)', bpsCode: '11.08.09' },
                    { name: 'Syamtalira Aron', bpsCode: '11.08.10' },
                    { name: 'Syamtalira Bayu', bpsCode: '11.08.11' },
                    { name: 'Tanah Luas', bpsCode: '11.08.12' },
                    { name: 'Tanah Pasir', bpsCode: '11.08.13' },
                    { name: 'Tanah Jambo Aye', bpsCode: '11.08.14' },
                    { name: 'Sawang', bpsCode: '11.08.15' },
                    { name: 'Nisam', bpsCode: '11.08.16' },
                    { name: 'Cot Girek', bpsCode: '11.08.17' },
                    { name: 'Langkahan', bpsCode: '11.08.18' },
                    { name: 'Baktiya Barat', bpsCode: '11.08.19' },
                    { name: 'Paya Bakong', bpsCode: '11.08.20' },
                    { name: 'Nibong', bpsCode: '11.08.21' },
                    { name: 'Simpang Kramat (Keramat)', bpsCode: '11.08.22' },
                    { name: 'Lapang', bpsCode: '11.08.23' },
                    { name: 'Pirak Timur', bpsCode: '11.08.24' },
                    { name: 'Geuredong Pase', bpsCode: '11.08.25' },
                    { name: 'Banda Baro', bpsCode: '11.08.26' },
                    { name: 'Nisam Antara', bpsCode: '11.08.27' }
                ]
            }, {
                name: 'Simeulue',
                bpsCode: '11.09',
                districts: [
                    { name: 'Alapan (Alafan)', bpsCode: '11.09.08' },
                    { name: 'Salang', bpsCode: '11.09.02' },
                    { name: 'Simeulue Barat (Simeuleu Barat)', bpsCode: '11.09.06' },
                    { name: 'Simeulue Cut', bpsCode: '11.09.10' },
                    { name: 'Simeulue Tengah (Simeuleu Tengah)', bpsCode: '11.09.01' },
                    { name: 'Simeulue Timur (Simeuleu Timur)', bpsCode: '11.09.04' },
                    { name: 'Teluk Dalam', bpsCode: '11.09.05' },
                    { name: 'Teupah Barat', bpsCode: '11.09.03' },
                    { name: 'Teupah Selatan', bpsCode: '11.09.07' },
                    { name: 'Teupah Tengah', bpsCode: '11.09.09' }
                ]
            }, {
                name: 'Aceh Singkil',
                bpsCode: '11.10',
                districts: [
                    { name: 'Pulau Banyak', bpsCode: '11.10.01' },
                    { name: 'Simpang Kanan', bpsCode: '11.10.02' },
                    { name: 'Singkil', bpsCode: '11.10.04' },
                    { name: 'Gunung Meriah (Mariah)', bpsCode: '11.10.06' },
                    { name: 'Kota Baharu', bpsCode: '11.10.09' },
                    { name: 'Singkil Utara', bpsCode: '11.10.10' },
                    { name: 'Danau Paris', bpsCode: '11.10.11' },
                    { name: 'Suro Makmur', bpsCode: '11.10.12' },
                    { name: 'Singkohor', bpsCode: '11.10.13' },
                    { name: 'Kuala Baru', bpsCode: '11.10.14' },
                    { name: 'Pulau Banyak Barat', bpsCode: '11.10.16' }
                ]
            }, {
                name: 'Bireuen',
                bpsCode: '11.11',
                districts: [
                    { name: 'Samalanga', bpsCode: '11.11.01' },
                    { name: 'Jeunieb', bpsCode: '11.11.02' },
                    { name: 'Peudada', bpsCode: '11.11.03' },
                    { name: 'Jeumpa', bpsCode: '11.11.04' },
                    { name: 'Peusangan', bpsCode: '11.11.05' },
                    { name: 'Makmur', bpsCode: '11.11.06' },
                    { name: 'Gandapura (Ganda Pura)', bpsCode: '11.11.07' },
                    { name: 'Pandrah', bpsCode: '11.11.08' },
                    { name: 'Juli', bpsCode: '11.11.09' },
                    { name: 'Jangka', bpsCode: '11.11.10' },
                    { name: 'Simpang Mamplam', bpsCode: '11.11.11' },
                    { name: 'Peulimbang (Plimbang)', bpsCode: '11.11.12' },
                    { name: 'Kota Juang', bpsCode: '11.11.13' },
                    { name: 'Kuala', bpsCode: '11.11.14' },
                    { name: 'Peusangan Siblah Krueng', bpsCode: '11.11.15' },
                    { name: 'Peusangan Selatan', bpsCode: '11.11.16' },
                    { name: 'Kuta Blang', bpsCode: '11.11.17' }
                ]
            }, {
                name: 'Aceh Barat Daya',
                bpsCode: '11.12',
                districts: [
                    { name: 'Blang Pidie', bpsCode: '11.12.01' },
                    { name: 'Tangan-Tangan', bpsCode: '11.12.02' },
                    { name: 'Manggeng', bpsCode: '11.12.03' },
                    { name: 'Susoh', bpsCode: '11.12.04' },
                    { name: 'Kuala Batee', bpsCode: '11.12.05' },
                    { name: 'Babah Rot', bpsCode: '11.12.06' },
                    { name: 'Setia', bpsCode: '11.12.07' },
                    { name: 'Jeumpa', bpsCode: '11.12.08' },
                    { name: 'Lembah Sabil', bpsCode: '11.12.09' }
                ]
            }, {
                name: 'Gayo Lues',
                bpsCode: '11.13',
                districts: [
                    { name: 'Blangkejeren (Blang Kejeren)', bpsCode: '11.13.01' },
                    { name: 'Kutapanjang (Kuta Panjang)', bpsCode: '11.13.02' },
                    { name: 'Rikit Gaib', bpsCode: '11.13.03' },
                    { name: 'Terangun (Terangon)', bpsCode: '11.13.04' },
                    { name: 'Pining (Pinding)', bpsCode: '11.13.05' },
                    { name: 'Blangpegayon (Blang Pegayon)', bpsCode: '11.13.06' },
                    { name: 'Puteri Betung (Putri Betung)', bpsCode: '11.13.07' },
                    { name: 'Dabun Gelang (Debun Gelang)', bpsCode: '11.13.08' },
                    { name: 'Blangjerango (Blang Jerango)', bpsCode: '11.13.09' },
                    { name: 'Teripe/Tripe Jaya', bpsCode: '11.13.10' },
                    { name: 'Pantan Cuaca', bpsCode: '11.13.11' }
                ]
            }, {
                name: 'Aceh Jaya',
                bpsCode: '11.14',
                districts: [
                    { name: 'Teunom', bpsCode: '11.14.01' },
                    { name: 'Krueng Sabee', bpsCode: '11.14.02' },
                    { name: 'Setia Bhakti (Setia Bakti)', bpsCode: '11.14.03' },
                    { name: 'Sampoiniet', bpsCode: '11.14.04' },
                    { name: 'Jaya', bpsCode: '11.14.05' },
                    { name: 'Panga (Keude Panga)', bpsCode: '11.14.06' },
                    { name: 'Indra Jaya', bpsCode: '11.14.07' },
                    { name: 'Darul Hikmah', bpsCode: '11.14.08' },
                    { name: 'Pasie Raya', bpsCode: '11.14.09' }
                ]
            }, {
                name: 'Nagan Raya',
                bpsCode: '11.15',
                districts: [
                    { name: 'Kuala', bpsCode: '11.15.01' },
                    { name: 'Seunagan', bpsCode: '11.15.02' },
                    { name: 'Seunagan Timur', bpsCode: '11.15.03' },
                    { name: 'Beutong', bpsCode: '11.15.04' },
                    { name: 'Darul Makmur', bpsCode: '11.15.05' },
                    { name: 'Suka Makmue', bpsCode: '11.15.06' },
                    { name: 'Kuala Pesisir', bpsCode: '11.15.07' },
                    { name: 'Tadu Raya', bpsCode: '11.15.08' },
                    { name: 'Tripa Makmur', bpsCode: '11.15.09' },
                    { name: 'Beutong Ateuh Banggalang', bpsCode: '11.15.10' }
                ]
            }, {
                name: 'Aceh Tamiang',
                bpsCode: '11.16',
                districts: [
                    { name: 'Manyak Payed', bpsCode: '11.16.01' },
                    { name: 'Bendahara', bpsCode: '11.16.02' },
                    { name: 'Karang Baru', bpsCode: '11.16.03' },
                    { name: 'Seruway', bpsCode: '11.16.04' },
                    { name: 'Kota Kualasinpang (Kota Kuala Simpang)', bpsCode: '11.16.05' },
                    { name: 'Kejuruan Muda', bpsCode: '11.16.06' },
                    { name: 'Tamiang Hulu', bpsCode: '11.16.07' },
                    { name: 'Rantau', bpsCode: '11.16.08' },
                    { name: 'Banda Mulia', bpsCode: '11.16.09' },
                    { name: 'Bandar Pusaka', bpsCode: '11.16.10' },
                    { name: 'Tenggulun', bpsCode: '11.16.11' },
                    { name: 'Sekerak', bpsCode: '11.16.12' }
                ]
            }, {
                name: 'Bener Meriah',
                bpsCode: '11.17',
                districts: [
                    { name: 'Pintu Rime Gayo', bpsCode: '11.17.01' },
                    { name: 'Permata', bpsCode: '11.17.02' },
                    { name: 'Syiah Utama', bpsCode: '11.17.03' },
                    { name: 'Bandar', bpsCode: '11.17.04' },
                    { name: 'Bukit', bpsCode: '11.17.05' },
                    { name: 'Wih Pesam', bpsCode: '11.17.06' },
                    { name: 'Timang Gajah', bpsCode: '11.17.07' },
                    { name: 'Bener Kelipah', bpsCode: '11.17.08' },
                    { name: 'Mesidah', bpsCode: '11.17.09' },
                    { name: 'Gajah Putih', bpsCode: '11.17.10' }
                ]
            }, {
                name: 'Pide Jaya',
                bpsCode: '11.18',
                districts: [
                    { name: 'Meureudu', bpsCode: '11.18.01' },
                    { name: 'Ulim', bpsCode: '11.18.02' },
                    { name: 'Jangka Buaya (Jangka Buya)', bpsCode: '11.18.03' },
                    { name: 'Bandar Dua', bpsCode: '11.18.04' },
                    { name: 'Meurah Dua', bpsCode: '11.18.05' },
                    { name: 'Bandar Baru', bpsCode: '11.18.06' },
                    { name: 'Panteraja', bpsCode: '11.18.07' },
                    { name: 'Trienggadeng', bpsCode: '11.18.08' }
                ]
            }, {
                name: 'Banda Aceh',
                bpsCode: '11.71',
                districts: [
                    { name: 'Baiturrahman', bpsCode: '11.71.01' },
                    { name: 'Kuta Alam', bpsCode: '11.71.02' },
                    { name: 'Meuraxa', bpsCode: '11.71.03' },
                    { name: 'Syiah Kuala', bpsCode: '11.71.04' },
                    { name: 'Lueng Bata', bpsCode: '11.71.05' },
                    { name: 'Kuta Raja', bpsCode: '11.71.06' },
                    { name: 'Banda Raya', bpsCode: '11.71.07' },
                    { name: 'Jaya Baru', bpsCode: '11.71.08' },
                    { name: 'Ulee Kareng', bpsCode: '11.71.09' }
                ]
            }, {
                name: 'Sabang',
                bpsCode: '11.72',
                districts: [
                    { name: 'Sukakarya', bpsCode: '11.72.01' },
                    { name: 'Sukajaya', bpsCode: '11.72.02' }
                ]
            }, {
                name: 'Lhokseumawe',
                bpsCode: '11.73',
                districts: [
                    { name: 'Muara Dua', bpsCode: '11.73.01' },
                    { name: 'Banda Sakti', bpsCode: '11.73.02' },
                    { name: 'Blang Mangat', bpsCode: '11.73.03' },
                    { name: 'Muara Satu', bpsCode: '11.73.04' }
                ]
            }, {
                name: 'Langsa',
                bpsCode: '11.74',
                districts: [
                    { name: 'Langsa Timur', bpsCode: '11.74.01' },
                    { name: 'Langsa Barat', bpsCode: '11.74.02' },
                    { name: 'Langsa Kota', bpsCode: '11.74.03' },
                    { name: 'Langsa Lama', bpsCode: '11.74.04' },
                    { name: 'Langsa Baro', bpsCode: '11.74.05' }
                ]
            }, {
                name: 'Subulussalam',
                bpsCode: '11.75',
                districts: [
                    { name: 'Penanggalan', bpsCode: '11.75.02' },
                    { name: 'Rundeng', bpsCode: '11.75.03' },
                    { name: 'Longkib', bpsCode: '11.75.05' }
                ]
            },
        ]
    },
    BA: {
        regencies: [
            {
                name: 'Jembrana',
                bpscode: '51.01',
                districts: [
                    { name: 'Negara', bpsCode: '51.01.01' },
                    { name: 'Mendoyo', bpsCode: '51.01.02' },
                    { name: 'Pekutatan', bpsCode: '51.01.03' },
                    { name: 'Melaya', bpsCode: '51.01.04' },
                    { name: 'Jembrana', bpsCode: '51.01.05' }
                ]
            }, {
                name: 'Tabanan',
                bpscode: '51.02',
                districts: [
                    { name: 'Selemadeg', bpsCode: '51.02.01' },
                    { name: 'Salamadeg Timur (Salemadeg Timur)', bpsCode: '51.02.02' },
                    { name: 'Salemadeg Barat', bpsCode: '51.02.03' },
                    { name: 'Kerambitan', bpsCode: '51.02.04' },
                    { name: 'Tabanan', bpsCode: '51.02.05' },
                    { name: 'Kediri', bpsCode: '51.02.06' },
                    { name: 'Marga', bpsCode: '51.02.07' },
                    { name: 'Penebel', bpsCode: '51.02.08' },
                    { name: 'Baturiti', bpsCode: '51.02.09' },
                    { name: 'Pupuan', bpsCode: '51.02.10' }
                ]
            }, {
                name: 'Badung',
                bpscode: '51.03',
                districts: [
                    { name: 'Kuta', bpsCode: '51.03.01' },
                    { name: 'Mengwi', bpsCode: '51.03.02' },
                    { name: 'Abiansemal', bpsCode: '51.03.03' },
                    { name: 'Petang', bpsCode: '51.03.04' },
                    { name: 'Kuta Selatan', bpsCode: '51.03.05' },
                    { name: 'Kuta Utara', bpsCode: '51.03.06' }
                ]
            }, {
                name: 'Gianyar',
                bpscode: '51.04',
                districts: [
                    { name: 'Sukawati', bpsCode: '51.04.01' },
                    { name: 'Belah Batuh (Blahbatuh)', bpsCode: '51.04.02' },
                    { name: 'Gianyar', bpsCode: '51.04.03' },
                    { name: 'Tampaksiring (Tampak Siring)', bpsCode: '51.04.04' },
                    { name: 'Ubud', bpsCode: '51.04.05' },
                    { name: 'Tegallalang', bpsCode: '51.04.06' },
                    { name: 'Payangan', bpsCode: '51.04.07' }
                ]
            }, {
                name: 'Klungkung',
                bpscode: '51.05',
                districts: [
                    { name: 'Nusa Penida (Nusapenida)', bpsCode: '51.05.01' },
                    { name: 'Banjarangkan', bpsCode: '51.05.02' },
                    { name: 'Klungkung', bpsCode: '51.05.03' },
                    { name: 'Dawan', bpsCode: '51.05.04' }
                ]
            }, {
                name: 'Bangli',
                bpscode: '51.06',
                districts: [
                    { name: 'Susut', bpsCode: '51.06.01' },
                    { name: 'Bangli', bpsCode: '51.06.02' },
                    { name: 'Tembuku', bpsCode: '51.06.03' },
                    { name: 'Kintamani', bpsCode: '51.06.04' }
                ]
            }, {
                name: 'Karangasem',
                bpscode: '51.07',
                districts: [
                    { name: 'Rendang', bpsCode: '51.07.01' },
                    { name: 'Sidemen', bpsCode: '51.07.02' },
                    { name: 'Manggis', bpsCode: '51.07.03' },
                    { name: 'Karangasem (Karang Asem)', bpsCode: '51.07.04' },
                    { name: 'Abang', bpsCode: '51.07.05' },
                    { name: 'Bebandem', bpsCode: '51.07.06' },
                    { name: 'Selat', bpsCode: '51.07.07' },
                    { name: 'Kubu', bpsCode: '51.07.08' }
                ]
            }, {
                name: 'Buleleng',
                bpscode: '51.08',
                districts: [
                    { name: 'Gerokgak', bpsCode: '51.08.01' },
                    { name: 'Seririt', bpsCode: '51.08.02' },
                    { name: 'Busung biu (Busungbiu)', bpsCode: '51.08.03' },
                    { name: 'Banjar', bpsCode: '51.08.04' },
                    { name: 'Sukasada', bpsCode: '51.08.05' },
                    { name: 'Buleleng', bpsCode: '51.08.06' },
                    { name: 'Sawan', bpsCode: '51.08.07' },
                    { name: 'Kubutambahan', bpsCode: '51.08.08' },
                    { name: 'Tejakula', bpsCode: '51.08.09' }
                ]
            }, {
                name: 'Denpasar',
                bpscode: '51.71',
                districts: [
                    { name: 'Denpasar Selatan', bpsCode: '51.71.01' },
                    { name: 'Denpasar Timur', bpsCode: '51.71.02' },
                    { name: 'Denpasar Barat', bpsCode: '51.71.03' },
                    { name: 'Denpasar Utara', bpsCode: '51.71.04' }
                ]
            }
        ]
    },
    BB: {
        regencies: [
            {
                name: 'Bangka',
                bpscode: '19.01',
                districts: [
                    { name: 'Sungailiat (Sungai Liat)', bpsCode: '19.01.01' },
                    { name: 'Belinyu', bpsCode: '19.01.02' },
                    { name: 'Merawang', bpsCode: '19.01.03' },
                    { name: 'Mendo Barat', bpsCode: '19.01.04' },
                    { name: 'Pemali', bpsCode: '19.01.05' },
                    { name: 'Bakam', bpsCode: '19.01.06' },
                    { name: 'Riau Silip', bpsCode: '19.01.07' },
                    { name: 'Puding Besar', bpsCode: '19.01.08' }
                ]
            }, {
                name: 'Belitung',
                bpscode: '19.02',
                districts: [
                    { name: 'Tanjung Pandan', bpsCode: '19.02.01' },
                    { name: 'Membalong', bpsCode: '19.02.02' },
                    { name: 'Selat Nasik', bpsCode: '19.02.03' },
                    { name: 'Sijuk', bpsCode: '19.02.04' },
                    { name: 'Badau', bpsCode: '19.02.05' }
                ]
            }, {
                name: 'Bangka Selatan',
                bpscode: '19.03',
                districts: [
                    { name: 'Toboali', bpsCode: '19.03.01' },
                    { name: 'Lepar Pongok', bpsCode: '19.03.02' },
                    { name: 'Air Gegas', bpsCode: '19.03.03' },
                    { name: 'Simpang Rimba', bpsCode: '19.03.04' },
                    { name: 'Payung', bpsCode: '19.03.05' },
                    { name: 'Tukak Sadai', bpsCode: '19.03.06' },
                    { name: 'Pulaubesar (Pulau Besar)', bpsCode: '19.03.07' },
                    { name: 'Kepulauan Pongok', bpsCode: '19.03.08' }
                ]
            }, {
                name: 'Bangka Tengah',
                bpscode: '19.04',
                districts: [
                    { name: 'Koba', bpsCode: '19.04.01' },
                    { name: 'Pangkalan Baru', bpsCode: '19.04.02' },
                    { name: 'Sungai Selan', bpsCode: '19.04.03' },
                    { name: 'Simpang Katis', bpsCode: '19.04.04' },
                    { name: 'Namang', bpsCode: '19.04.05' },
                    { name: 'Lubuk Besar', bpsCode: '19.04.06' }
                ]
            }, {
                name: 'Bangka Barat',
                bpscode: '19.05',
                districts: [
                    { name: 'Mentok (Muntok)', bpsCode: '19.05.01' },
                    { name: 'Simpang Teritip', bpsCode: '19.05.02' },
                    { name: 'Jebus', bpsCode: '19.05.03' },
                    { name: 'Kelapa', bpsCode: '19.05.04' },
                    { name: 'Tempilang', bpsCode: '19.05.05' },
                    { name: 'Parittiga', bpsCode: '19.05.06' }
                ]
            }, {
                name: 'Belitung Timur',
                bpscode: '19.06',
                districts: [
                    { name: 'Manggar', bpsCode: '19.06.01' },
                    { name: 'Gantung', bpsCode: '19.06.02' },
                    { name: 'Dendang', bpsCode: '19.06.03' },
                    { name: 'Kelapa Kampit', bpsCode: '19.06.04' },
                    { name: 'Damar', bpsCode: '19.06.05' },
                    { name: 'Simpang Renggiang', bpsCode: '19.06.06' },
                    { name: 'Simpang Pesak', bpsCode: '19.06.07' }
                ]
            }, {
                name: 'Pangkal Pinang',
                bpscode: '19.71',
                districts: [
                    { name: 'Bukitintan (Bukit Intan)', bpsCode: '19.71.01' },
                    { name: 'Taman Sari', bpsCode: '19.71.02' },
                    { name: 'Pangkal Balam', bpsCode: '19.71.03' },
                    { name: 'Rangkui', bpsCode: '19.71.04' },
                    { name: 'Gerunggang', bpsCode: '19.71.05' },
                    { name: 'Gabek', bpsCode: '19.71.06' },
                    { name: 'Girimaya', bpsCode: '19.71.07' }
                ]
            }
        ]
    },
    BE: {
        regencies: [
            {
                name: 'Bengkulu Selatan',
                bpscode: '17.01',
                districts: [
                    { name: 'Kedurang', bpsCode: '17.01.01' },
                    { name: 'Seginim', bpsCode: '17.01.02' },
                    { name: 'Pino', bpsCode: '17.01.03' },
                    { name: 'Manna', bpsCode: '17.01.04' },
                    { name: 'Kota Manna', bpsCode: '17.01.05' },
                    { name: 'Pino Raya (Pinoraya)', bpsCode: '17.01.06' },
                    { name: 'Kedurang Ilir', bpsCode: '17.01.07' },
                    { name: 'Air Nipis', bpsCode: '17.01.08' },
                    { name: 'Ulu Manna', bpsCode: '17.01.09' },
                    { name: 'Bunga Mas', bpsCode: '17.01.10' },
                    { name: 'Pasar Manna', bpsCode: '17.01.11' }
                ]
            }, {
                name: 'Rejang Lebong',
                bpscode: '17.02',
                districts: [
                    { name: 'Kota Padang', bpsCode: '17.02.06' },
                    { name: 'Padang Ulak Tanding', bpsCode: '17.02.07' },
                    { name: 'Sindang Kelingi', bpsCode: '17.02.08' },
                    { name: 'Curup', bpsCode: '17.02.09' },
                    { name: 'Bermani Ulu', bpsCode: '17.02.10' },
                    { name: 'Selupu Rejang', bpsCode: '17.02.11' },
                    { name: 'Curup Utara', bpsCode: '17.02.16' },
                    { name: 'Curup Timur', bpsCode: '17.02.17' },
                    { name: 'Curup Selatan', bpsCode: '17.02.18' },
                    { name: 'Curup Tengah', bpsCode: '17.02.19' },
                    { name: 'Binduriang', bpsCode: '17.02.20' },
                    { name: 'Sindang Beliti Ulu', bpsCode: '17.02.21' },
                    { name: 'Sindang Dataran (Sindang Daratan)', bpsCode: '17.02.22' },
                    { name: 'Sindang Beliti Ilir', bpsCode: '17.02.23' },
                    { name: 'Bermani Ulu Raya', bpsCode: '17.02.24' }
                ]
            }, {
                name: 'Bengkulu Utara',
                bpscode: '17.03',
                districts: [
                    { name: 'Enggano', bpsCode: '17.03.01' },
                    { name: 'Kerkap', bpsCode: '17.03.06' },
                    { name: 'Kota Arga Makmur', bpsCode: '17.03.07' },
                    { name: 'Giri Mulia (Giri Mulya)', bpsCode: '17.03.08' },
                    { name: 'Padang Jaya', bpsCode: '17.03.09' },
                    { name: 'Lais', bpsCode: '17.03.10' },
                    { name: 'Batik Nau', bpsCode: '17.03.11' },
                    { name: 'Ketahun', bpsCode: '17.03.12' },
                    { name: 'Napal Putih', bpsCode: '17.03.13' },
                    { name: 'Putri Hijau', bpsCode: '17.03.14' },
                    { name: 'Air Besi', bpsCode: '17.03.15' },
                    { name: 'Air Napal', bpsCode: '17.03.16' },
                    { name: 'Hulu Palik', bpsCode: '17.03.19' },
                    { name: 'Air Padang', bpsCode: '17.03.20' },
                    { name: 'Arma Jaya', bpsCode: '17.03.21' },
                    { name: 'Tanjung Agung Palik', bpsCode: '17.03.22' },
                    { name: 'Ulok Kupai', bpsCode: '17.03.23' },
                    { name: 'Pinang Raya', bpsCode: '17.03.24' },
                    { name: 'Marga Sakti Sebelat (Marga Sakti)', bpsCode: '17.03.25' }
                ]
            }, {
                name: 'Kaur',
                bpscode: '17.04',
                districts: [
                    { name: 'Kinal', bpsCode: '17.04.01' },
                    { name: 'Tanjung Kemuning', bpsCode: '17.04.02' },
                    { name: 'Kaur Utara', bpsCode: '17.04.03' },
                    { name: 'Kaur Tengah', bpsCode: '17.04.04' },
                    { name: 'Kaur Selatan', bpsCode: '17.04.05' },
                    { name: 'Maje', bpsCode: '17.04.06' },
                    { name: 'Nasal', bpsCode: '17.04.07' },
                    { name: 'Semidang Gumai (Gumay)', bpsCode: '17.04.08' },
                    { name: 'Kelam Tengah', bpsCode: '17.04.09' },
                    { name: 'Luas', bpsCode: '17.04.10' },
                    { name: 'Muara Sahung', bpsCode: '17.04.11' },
                    { name: 'Tetap (Muara Tetap)', bpsCode: '17.04.12' },
                    { name: 'Lungkang Kule', bpsCode: '17.04.13' },
                    { name: 'Padang Guci Hilir', bpsCode: '17.04.14' },
                    { name: 'Padang Guci Hulu', bpsCode: '17.04.15' }
                ]
            }, {
                name: 'Seluma',
                bpscode: '17.05',
                districts: [
                    { name: 'Sukaraja', bpsCode: '17.05.01' },
                    { name: 'Seluma', bpsCode: '17.05.02' },
                    { name: 'Talo', bpsCode: '17.05.03' },
                    { name: 'Semidang Alas', bpsCode: '17.05.04' },
                    { name: 'Semidang Alas Maras', bpsCode: '17.05.05' },
                    { name: 'Air Periukan', bpsCode: '17.05.06' },
                    { name: 'Lubuk Sandi', bpsCode: '17.05.07' },
                    { name: 'Seluma Barat', bpsCode: '17.05.08' },
                    { name: 'Seluma Timur', bpsCode: '17.05.09' },
                    { name: 'Seluma Utara', bpsCode: '17.05.10' },
                    { name: 'Seluma Selatan', bpsCode: '17.05.11' },
                    { name: 'Talo Kecil', bpsCode: '17.05.12' },
                    { name: 'Ulu Talo', bpsCode: '17.05.13' },
                    { name: 'Ilir Talo', bpsCode: '17.05.14' }
                ]
            }, {
                name: 'Muko Muko',
                bpscode: '17.06',
                districts: [
                    { name: 'Lubuk Pinang', bpsCode: '17.06.01' },
                    { name: 'Kota Mukomuko (Mukomuko Utara)', bpsCode: '17.06.02' },
                    { name: 'Teras Terunjam', bpsCode: '17.06.03' },
                    { name: 'Pondok Suguh', bpsCode: '17.06.04' },
                    { name: 'Ipuh (Muko Muko Selatan)', bpsCode: '17.06.05' },
                    { name: 'Malin Deman', bpsCode: '17.06.06' },
                    { name: 'Air Rami', bpsCode: '17.06.07' },
                    { name: 'Teramang Jaya', bpsCode: '17.06.08' },
                    { name: 'Selagan Raya', bpsCode: '17.06.09' },
                    { name: 'Penarik', bpsCode: '17.06.10' },
                    { name: 'XIV Koto', bpsCode: '17.06.11' },
                    { name: 'V Koto', bpsCode: '17.06.12' },
                    { name: 'Air Majunto', bpsCode: '17.06.13' },
                    { name: 'Air Dikit', bpsCode: '17.06.14' },
                    { name: 'Sungai Rumbai', bpsCode: '17.06.15' }
                ]
            }, {
                name: 'Lebong',
                bpscode: '17.07',
                districts: [
                    { name: 'Lebong Utara', bpsCode: '17.07.01' },
                    { name: 'Lebong Atas', bpsCode: '17.07.02' },
                    { name: 'Lebong Tengah', bpsCode: '17.07.03' },
                    { name: 'Lebong Selatan', bpsCode: '17.07.04' },
                    { name: 'Rimbo Pengadang', bpsCode: '17.07.05' },
                    { name: 'Topos', bpsCode: '17.07.06' },
                    { name: 'Bingin Kuning', bpsCode: '17.07.07' },
                    { name: 'Lebong Sakti', bpsCode: '17.07.08' },
                    { name: 'Pelabai', bpsCode: '17.07.09' },
                    { name: 'Amen', bpsCode: '17.07.10' },
                    { name: 'Uram Jaya', bpsCode: '17.07.11' },
                    { name: 'Pinang Belapis', bpsCode: '17.07.12' }
                ]
            }, {
                name: 'Kepahiang',
                bpscode: '17.08',
                districts: [
                    { name: 'Bermani Ilir', bpsCode: '17.08.01' },
                    { name: 'Ujan Mas', bpsCode: '17.08.02' },
                    { name: 'Tebat Karai', bpsCode: '17.08.03' },
                    { name: 'Kepahiang', bpsCode: '17.08.04' },
                    { name: 'Merigi', bpsCode: '17.08.05' },
                    { name: 'Kebawetan', bpsCode: '17.08.06' },
                    { name: 'Seberang Musi', bpsCode: '17.08.07' },
                    { name: 'Muara Kemumu', bpsCode: '17.08.08' }
                ]
            }, {
                name: 'Bengkulu Tengah',
                bpscode: '17.09',
                districts: [
                    { name: 'Karang Tinggi', bpsCode: '17.09.01' },
                    { name: 'Talang Empat', bpsCode: '17.09.02' },
                    { name: 'Pondok Kelapa', bpsCode: '17.09.03' },
                    { name: 'Pematang Tiga', bpsCode: '17.09.04' },
                    { name: 'Pagar Jati', bpsCode: '17.09.05' },
                    { name: 'Taba Penanjung', bpsCode: '17.09.06' },
                    { name: 'Merigi Kelindang', bpsCode: '17.09.07' },
                    { name: 'Merigi Sakti', bpsCode: '17.09.08' },
                    { name: 'Pondok Kubang', bpsCode: '17.09.09' },
                    { name: 'Bang Haji', bpsCode: '17.09.10' }
                ]
            }, {
                name: 'Bengkulu',
                bpscode: '17.71',
                districts: [
                    { name: 'Selebar', bpsCode: '17.71.01' },
                    { name: 'Gading Cempaka', bpsCode: '17.71.02' },
                    { name: 'Teluk Segara', bpsCode: '17.71.03' },
                    { name: 'Muara Bangka Hulu', bpsCode: '17.71.04' },
                    { name: 'Kampung Melayu', bpsCode: '17.71.05' },
                    { name: 'Ratu Agung', bpsCode: '17.71.06' },
                    { name: 'Ratu Samban', bpsCode: '17.71.07' },
                    { name: 'Sungai Serut', bpsCode: '17.71.08' },
                    { name: 'Singaran Pati', bpsCode: '17.71.09' }
                ]
            }
        ]
    },
    BT: {
        regencies: [
            {
                name: 'Pandeglang',
                bpscode: '36.01',
                districts: [
                    { name: 'Sumur', bpsCode: '36.01.01' },
                    { name: 'Cimanggu', bpsCode: '36.01.02' },
                    { name: 'Cibaliung', bpsCode: '36.01.03' },
                    { name: 'Cikeusik', bpsCode: '36.01.04' },
                    { name: 'Cigeulis', bpsCode: '36.01.05' },
                    { name: 'Panimbang', bpsCode: '36.01.06' },
                    { name: 'Angsana', bpsCode: '36.01.07' },
                    { name: 'Munjul', bpsCode: '36.01.08' },
                    { name: 'Pagelaran', bpsCode: '36.01.09' },
                    { name: 'Bojong', bpsCode: '36.01.10' },
                    { name: 'Picung', bpsCode: '36.01.11' },
                    { name: 'Labuan', bpsCode: '36.01.12' },
                    { name: 'Menes', bpsCode: '36.01.13' },
                    { name: 'Saketi', bpsCode: '36.01.14' },
                    { name: 'Cipeucang', bpsCode: '36.01.15' },
                    { name: 'Jiput', bpsCode: '36.01.16' },
                    { name: 'Mandalawangi', bpsCode: '36.01.17' },
                    { name: 'Cimanuk', bpsCode: '36.01.18' },
                    { name: 'Kaduhejo', bpsCode: '36.01.19' },
                    { name: 'Banjar', bpsCode: '36.01.20' },
                    { name: 'Pandeglang', bpsCode: '36.01.21' },
                    { name: 'Cadasari', bpsCode: '36.01.22' },
                    { name: 'Cisata', bpsCode: '36.01.23' },
                    { name: 'Patia', bpsCode: '36.01.24' },
                    { name: 'Karang Tanjung', bpsCode: '36.01.25' },
                    { name: 'Cikeudal (Cikedal)', bpsCode: '36.01.26' },
                    { name: 'Cibitung', bpsCode: '36.01.27' },
                    { name: 'Carita', bpsCode: '36.01.28' },
                    { name: 'Sukaresmi', bpsCode: '36.01.29' },
                    { name: 'Mekarjaya', bpsCode: '36.01.30' },
                    { name: 'Sindangresmi', bpsCode: '36.01.31' },
                    { name: 'Pulosari', bpsCode: '36.01.32' },
                    { name: 'Koroncong', bpsCode: '36.01.33' },
                    { name: 'Majasari', bpsCode: '36.01.34' },
                    { name: 'Sobang', bpsCode: '36.01.35' }
                ]
            }, {
                name: 'Lebak',
                bpscode: '36.02',
                districts: [
                    { name: 'Malingping', bpsCode: '36.02.01' },
                    { name: 'Panggarangan', bpsCode: '36.02.02' },
                    { name: 'Bayah', bpsCode: '36.02.03' },
                    { name: 'Cipanas', bpsCode: '36.02.04' },
                    { name: 'Muncang', bpsCode: '36.02.05' },
                    { name: 'Leuwidamar', bpsCode: '36.02.06' },
                    { name: 'Bojongmanik', bpsCode: '36.02.07' },
                    { name: 'Gunungkencana (Gunung Kencana)', bpsCode: '36.02.08' },
                    { name: 'Banjarsari', bpsCode: '36.02.09' },
                    { name: 'Cileles', bpsCode: '36.02.10' },
                    { name: 'Cimarga', bpsCode: '36.02.11' },
                    { name: 'Sajira', bpsCode: '36.02.12' },
                    { name: 'Maja', bpsCode: '36.02.13' },
                    { name: 'Rangkasbitung', bpsCode: '36.02.14' },
                    { name: 'Warunggunung', bpsCode: '36.02.15' },
                    { name: 'Cijaku', bpsCode: '36.02.16' },
                    { name: 'Cikulur', bpsCode: '36.02.17' },
                    { name: 'Cibadak', bpsCode: '36.02.18' },
                    { name: 'Cibeber', bpsCode: '36.02.19' },
                    { name: 'Cilograng', bpsCode: '36.02.20' },
                    { name: 'Wanasalam', bpsCode: '36.02.21' },
                    { name: 'Sobang', bpsCode: '36.02.22' },
                    { name: 'Curug bitung (Curugbitung)', bpsCode: '36.02.23' },
                    { name: 'Kalanganyar', bpsCode: '36.02.24' },
                    { name: 'Lebakgedong', bpsCode: '36.02.25' },
                    { name: 'Cihara', bpsCode: '36.02.26' },
                    { name: 'Cirinten', bpsCode: '36.02.27' },
                    { name: 'Cigemlong (Cigemblong)', bpsCode: '36.02.28' }
                ]
            }, {
                name: 'Tangerang',
                bpscode: '36.03',
                districts: [
                    { name: 'Balaraja', bpsCode: '36.03.01' },
                    { name: 'Jayanti', bpsCode: '36.03.02' },
                    { name: 'Tigaraksa', bpsCode: '36.03.03' },
                    { name: 'Jambe', bpsCode: '36.03.04' },
                    { name: 'Cisoka', bpsCode: '36.03.05' },
                    { name: 'Kresek', bpsCode: '36.03.06' },
                    { name: 'Kronjo', bpsCode: '36.03.07' },
                    { name: 'Mauk', bpsCode: '36.03.08' },
                    { name: 'Kemiri', bpsCode: '36.03.09' },
                    { name: 'Sukadiri', bpsCode: '36.03.10' },
                    { name: 'Rajeg', bpsCode: '36.03.11' },
                    { name: 'Pasar Kemis', bpsCode: '36.03.12' },
                    { name: 'Teluknaga', bpsCode: '36.03.13' },
                    { name: 'Kosambi', bpsCode: '36.03.14' },
                    { name: 'Pakuhaji', bpsCode: '36.03.15' },
                    { name: 'Sepatan', bpsCode: '36.03.16' },
                    { name: 'Curug', bpsCode: '36.03.17' },
                    { name: 'Cikupa', bpsCode: '36.03.18' },
                    { name: 'Panongan', bpsCode: '36.03.19' },
                    { name: 'Legok', bpsCode: '36.03.20' },
                    { name: 'Pagedangan', bpsCode: '36.03.22' },
                    { name: 'Cisauk', bpsCode: '36.03.23' },
                    { name: 'Sukamulya', bpsCode: '36.03.27' },
                    { name: 'Kelapa Dua', bpsCode: '36.03.28' },
                    { name: 'Sindang Jaya', bpsCode: '36.03.29' },
                    { name: 'Sepatan Timur', bpsCode: '36.03.30' },
                    { name: 'Solear', bpsCode: '36.03.31' },
                    { name: 'Gunung Kaler', bpsCode: '36.03.32' },
                    { name: 'Mekar Baru', bpsCode: '36.03.33' }
                ]
            }, {
                name: 'Serang',
                bpscode: '36.04',
                districts: [
                    { name: 'Kramatwatu', bpsCode: '36.04.05' },
                    { name: 'Waringinkurung (Waringin Kurung)', bpsCode: '36.04.06' },
                    { name: 'Bojonegara', bpsCode: '36.04.07' },
                    { name: 'Pulo Ampel', bpsCode: '36.04.08' },
                    { name: 'Ciruas', bpsCode: '36.04.09' },
                    { name: 'Kragilan', bpsCode: '36.04.11' },
                    { name: 'Pontang', bpsCode: '36.04.12' },
                    { name: 'Tirtayasa', bpsCode: '36.04.13' },
                    { name: 'Tanara', bpsCode: '36.04.14' },
                    { name: 'Cikande', bpsCode: '36.04.15' },
                    { name: 'Kibin', bpsCode: '36.04.16' },
                    { name: 'Carenang (Cerenang)', bpsCode: '36.04.17' },
                    { name: 'Binuang', bpsCode: '36.04.18' },
                    { name: 'Petir', bpsCode: '36.04.19' },
                    { name: 'Tunjung Teja', bpsCode: '36.04.20' },
                    { name: 'Baros', bpsCode: '36.04.22' },
                    { name: 'Cikeusal', bpsCode: '36.04.23' },
                    { name: 'Pamarayan', bpsCode: '36.04.24' },
                    { name: 'Kopo', bpsCode: '36.04.25' },
                    { name: 'Jawilan', bpsCode: '36.04.26' },
                    { name: 'Ciomas', bpsCode: '36.04.27' },
                    { name: 'Pabuaran', bpsCode: '36.04.28' },
                    { name: 'Padarincang', bpsCode: '36.04.29' },
                    { name: 'Anyar', bpsCode: '36.04.30' },
                    { name: 'Cinangka', bpsCode: '36.04.31' },
                    { name: 'Mancak', bpsCode: '36.04.32' },
                    { name: 'Gunung Sari (Gunungsari)', bpsCode: '36.04.33' },
                    { name: 'Bandung', bpsCode: '36.04.34' },
                    { name: 'Lebak Wangi', bpsCode: '36.04.35' }
                ]
            }, {
                name: 'Tangerang',
                bpscode: '36.71',
                districts: [
                    { name: 'Tangerang', bpsCode: '36.71.01' },
                    { name: 'Jatiuwung', bpsCode: '36.71.02' },
                    { name: 'Batuceper', bpsCode: '36.71.03' },
                    { name: 'Benda', bpsCode: '36.71.04' },
                    { name: 'Cipondoh', bpsCode: '36.71.05' },
                    { name: 'Ciledug', bpsCode: '36.71.06' },
                    { name: 'Karawaci', bpsCode: '36.71.07' },
                    { name: 'Periuk', bpsCode: '36.71.08' },
                    { name: 'Cibodas', bpsCode: '36.71.09' },
                    { name: 'Neglasari', bpsCode: '36.71.10' },
                    { name: 'Pinang (Penang)', bpsCode: '36.71.11' },
                    { name: 'Karang Tengah', bpsCode: '36.71.12' },
                    { name: 'Larangan', bpsCode: '36.71.13' }
                ]
            }, {
                name: 'Cilegon',
                bpscode: '36.72',
                districts: [
                    { name: 'Cibeber', bpsCode: '36.72.01' },
                    { name: 'Cilegon', bpsCode: '36.72.02' },
                    { name: 'Pulomerak', bpsCode: '36.72.03' },
                    { name: 'Ciwandan', bpsCode: '36.72.04' },
                    { name: 'Jombang', bpsCode: '36.72.05' },
                    { name: 'Gerogol', bpsCode: '36.72.06' },
                    { name: 'Purwakarta', bpsCode: '36.72.07' },
                    { name: 'Citangkil', bpsCode: '36.72.08' }
                ]
            }, {
                name: 'Serang',
                bpscode: '36.73',
                districts: [
                    { name: 'Serang', bpsCode: '36.73.01' },
                    { name: 'Kasemen', bpsCode: '36.73.02' },
                    { name: 'Walantaka', bpsCode: '36.73.03' },
                    { name: 'Curug', bpsCode: '36.73.04' },
                    { name: 'Cipocok Jaya', bpsCode: '36.73.05' },
                    { name: 'Taktakan', bpsCode: '36.73.06' }
                ]
            }, {
                name: 'Tangerang Selatan',
                bpscode: '36.74',
                districts: [
                    { name: 'Serpong', bpsCode: '36.74.01' },
                    { name: 'Serpong Utara', bpsCode: '36.74.02' },
                    { name: 'Pondok Aren', bpsCode: '36.74.03' },
                    { name: 'Ciputat', bpsCode: '36.74.04' },
                    { name: 'Ciputat Timur', bpsCode: '36.74.05' },
                    { name: 'Pamulang', bpsCode: '36.74.06' },
                    { name: 'Setu', bpsCode: '36.74.07' }
                ]
            }
        ]
    },
    GO: {
        regencies: [
            {
                name: 'Gorontalo',
                bpscode: '75.01',
                districts: [
                    { name: 'Limboto', bpsCode: '75.01.01' },
                    { name: 'Telaga', bpsCode: '75.01.02' },
                    { name: 'Batudaa', bpsCode: '75.01.03' },
                    { name: 'Tibawa', bpsCode: '75.01.04' },
                    { name: 'Batudaa Pantai', bpsCode: '75.01.05' },
                    { name: 'Boliohuto (Boliyohuto)', bpsCode: '75.01.09' },
                    { name: 'Telaga Biru', bpsCode: '75.01.10' },
                    { name: 'Bongomeme', bpsCode: '75.01.11' },
                    { name: 'Tolangohula', bpsCode: '75.01.13' },
                    { name: 'Mootilango', bpsCode: '75.01.14' },
                    { name: 'Pulubala', bpsCode: '75.01.16' },
                    { name: 'Limboto Barat', bpsCode: '75.01.17' },
                    { name: 'Tilango', bpsCode: '75.01.18' },
                    { name: 'Tabongo', bpsCode: '75.01.19' },
                    { name: 'Biluhu', bpsCode: '75.01.20' },
                    { name: 'Asparaga', bpsCode: '75.01.21' },
                    { name: 'Talaga Jaya (Telaga Jaya)', bpsCode: '75.01.22' },
                    { name: 'Bilato', bpsCode: '75.01.23' },
                    { name: 'Dungaliyo', bpsCode: '75.01.24' },
                ]
            }, {
                name: 'Boalemo',
                bpscode: '75.02',
                districts: [
                    { name: 'Paguyaman', bpsCode: '75.02.01' },
                    { name: 'Wonosari', bpsCode: '75.02.02' },
                    { name: 'Dulupi', bpsCode: '75.02.03' },
                    { name: 'Tilamuta', bpsCode: '75.02.04' },
                    { name: 'Mananggu', bpsCode: '75.02.05' },
                    { name: 'Botumoita', bpsCode: '75.02.06' },
                    { name: 'Paguyaman Pantai', bpsCode: '75.02.07' },
                ]
            }, {
                name: 'Bone Bolango',
                bpscode: '75.03',
                districts: [
                    { name: 'Tapa', bpsCode: '75.03.01' },
                    { name: 'Kabila', bpsCode: '75.03.02' },
                    { name: 'Suwawa', bpsCode: '75.03.03' },
                    { name: 'Bonepantai', bpsCode: '75.03.04' },
                    { name: 'Bulango Utara', bpsCode: '75.03.05' },
                    { name: 'Tilongkabila', bpsCode: '75.03.06' },
                    { name: 'Botupingge (Botu Pingge)', bpsCode: '75.03.07' },
                    { name: 'Kabila Bone', bpsCode: '75.03.08' },
                    { name: 'Bone', bpsCode: '75.03.09' },
                    { name: 'Bone Raya', bpsCode: '75.03.10' },
                    { name: 'Suwawa Timur', bpsCode: '75.03.11' },
                    { name: 'Suwawa Selatan', bpsCode: '75.03.12' },
                    { name: 'Suwawa Tengah', bpsCode: '75.03.13' },
                    { name: 'Bulango Ulu', bpsCode: '75.03.14' },
                    { name: 'Bulango Selatan', bpsCode: '75.03.15' },
                    { name: 'Bulango Timur', bpsCode: '75.03.16' },
                    { name: 'Bulawa', bpsCode: '75.03.17' },
                    { name: 'Pinogu', bpsCode: '75.03.18' },
                ]
            }, {
                name: 'Pohuwato',
                bpscode: '75.04',
                districts: [
                    { name: 'Popayato', bpsCode: '75.04.01' },
                    { name: 'Lemito', bpsCode: '75.04.02' },
                    { name: 'Randangan', bpsCode: '75.04.03' },
                    { name: 'Marisa', bpsCode: '75.04.04' },
                    { name: 'Paguat', bpsCode: '75.04.05' },
                    { name: 'Patilanggio', bpsCode: '75.04.06' },
                    { name: 'Taluditi (Taluduti)', bpsCode: '75.04.07' },
                    { name: 'Dengilo', bpsCode: '75.04.08' },
                    { name: 'Buntulia', bpsCode: '75.04.09' },
                    { name: 'Duhiadaa', bpsCode: '75.04.10' },
                    { name: 'Wanggarasi', bpsCode: '75.04.11' },
                    { name: 'Popayato Timur', bpsCode: '75.04.12' },
                    { name: 'Popayato Barat', bpsCode: '75.04.13' },
                ]
            }, {
                name: 'Gorontalo Utara',
                bpscode: '75.05',
                districts: [
                    { name: 'Atinggola', bpsCode: '75.05.01' },
                    { name: 'Kwandang', bpsCode: '75.05.02' },
                    { name: 'Anggrek', bpsCode: '75.05.03' },
                    { name: 'Sumalata', bpsCode: '75.05.04' },
                    { name: 'Tolinggula', bpsCode: '75.05.05' },
                    { name: 'Gentuma Raya', bpsCode: '75.05.06' },
                    { name: 'Tomolito', bpsCode: '75.05.07' },
                    { name: 'Ponelo Kepulauan', bpsCode: '75.05.08' },
                    { name: 'Monano', bpsCode: '75.05.09' },
                    { name: 'Biau', bpsCode: '75.05.10' },
                    { name: 'Sumalata Timur', bpsCode: '75.05.11' },
                ]
            }, {
                name: 'Gorontalo',
                bpscode: '75.71',
                districts: [
                    { name: 'Kota Barat', bpsCode: '75.71.01' },
                    { name: 'Kota Selatan', bpsCode: '75.71.02' },
                    { name: 'Kota Utara', bpsCode: '75.71.03' },
                    { name: 'Dungingi', bpsCode: '75.71.04' },
                    { name: 'Kota Timur', bpsCode: '75.71.05' },
                    { name: 'Kota Tengah', bpsCode: '75.71.06' },
                    { name: 'Sipatana', bpsCode: '75.71.07' },
                    { name: 'Dumbo Raya', bpsCode: '75.71.08' },
                    { name: 'Hulonthalangi', bpsCode: '75.71.09' }
                ]
            },
        ]
    },
    JA: {
        regencies: [
            {
                name: 'Kerinci',
                bpscode: '15.01',
                districts: [
                    { name: 'Gunung Raya', bpsCode: '15.01.01' },
                    { name: 'Danau Kerinci', bpsCode: '15.01.02' },
                    { name: 'Sitinjau Laut', bpsCode: '15.01.04' },
                    { name: 'Air Hangat', bpsCode: '15.01.05' },
                    { name: 'Gunung Kerinci', bpsCode: '15.01.06' },
                    { name: 'Batang Merangin', bpsCode: '15.01.07' },
                    { name: 'Keliling Danau', bpsCode: '15.01.08' },
                    { name: 'Kayu Aro', bpsCode: '15.01.09' },
                    { name: 'Air Hangat Timur', bpsCode: '15.01.11' },
                    { name: 'Gunung Tujuh', bpsCode: '15.01.15' },
                    { name: 'Siulak', bpsCode: '15.01.16' },
                    { name: 'Depati Tujuh', bpsCode: '15.01.17' },
                    { name: 'Siulak Mukai', bpsCode: '15.01.18' },
                    { name: 'Kayu Aro Barat', bpsCode: '15.01.19' },
                    { name: 'Bukitkerman', bpsCode: '15.01.20' },
                    { name: 'Air Hangat Barat', bpsCode: '15.01.21' }
                ]
            }, {
                name: 'Merangin',
                bpscode: '15.02',
                districts: [
                    { name: 'Jangkat', bpsCode: '15.02.01' },
                    { name: 'Bangko', bpsCode: '15.02.02' },
                    { name: 'Muara Siau', bpsCode: '15.02.03' },
                    { name: 'Sungai Manau', bpsCode: '15.02.04' },
                    { name: 'Tabir', bpsCode: '15.02.05' },
                    { name: 'Pamenang', bpsCode: '15.02.06' },
                    { name: 'Tabir Ulu', bpsCode: '15.02.07' },
                    { name: 'Tabir Selatan', bpsCode: '15.02.08' },
                    { name: 'Lembah Masurai', bpsCode: '15.02.09' },
                    { name: 'Bangko Barat', bpsCode: '15.02.10' },
                    { name: 'Nalo Tatan (Nalo Tantan)', bpsCode: '15.02.11' },
                    { name: 'Batang Masumai', bpsCode: '15.02.12' },
                    { name: 'Pamenang Barat', bpsCode: '15.02.13' },
                    { name: 'Tabir Ilir', bpsCode: '15.02.14' },
                    { name: 'Tabir Timur', bpsCode: '15.02.15' },
                    { name: 'Renah Pembarap', bpsCode: '15.02.16' },
                    { name: 'Pangkalan Jambu', bpsCode: '15.02.17' },
                    { name: 'Jangkat Timur (Sungai Tenang)', bpsCode: '15.02.18' },
                    { name: 'Renah Pamenang (Renah Pemenang)', bpsCode: '15.02.19' },
                    { name: 'Pamenang Selatan', bpsCode: '15.02.20' },
                    { name: 'Margo Tabir', bpsCode: '15.02.21' },
                    { name: 'Tabir Lintas', bpsCode: '15.02.22' },
                    { name: 'Tabir Barat', bpsCode: '15.02.23' },
                    { name: 'Tiang Pumpung', bpsCode: '15.02.24' }
                ]
            }, {
                name: 'Sarolangun',
                bpscode: '15.03',
                districts: [
                    { name: 'Batang Asai', bpsCode: '15.03.01' },
                    { name: 'Limun', bpsCode: '15.03.02' },
                    { name: 'Sarolangun', bpsCode: '15.03.03' },
                    { name: 'Pauh', bpsCode: '15.03.04' },
                    { name: 'Pelawan', bpsCode: '15.03.05' },
                    { name: 'Mandiangin', bpsCode: '15.03.06' },
                    { name: 'Air Hitam', bpsCode: '15.03.07' },
                    { name: 'Bathin VIII (Batin VIII)', bpsCode: '15.03.08' },
                    { name: 'Singkut', bpsCode: '15.03.09' },
                    { name: 'Cermin Nan Gedang / Gadang', bpsCode: '15.03.10' }
                ]
            }, {
                name: 'Batang Hari',
                bpscode: '15.04',
                districts: [
                    { name: 'Mersam', bpsCode: '15.04.01' },
                    { name: 'Muara Tembesi', bpsCode: '15.04.02' },
                    { name: 'Muara Bulian', bpsCode: '15.04.03' },
                    { name: 'Batin XXIV', bpsCode: '15.04.04' },
                    { name: 'Pemayung', bpsCode: '15.04.05' },
                    { name: 'Maro Sebo Ulu', bpsCode: '15.04.06' },
                    { name: 'Bajubang', bpsCode: '15.04.07' },
                    { name: 'Maro Sebo Ilir', bpsCode: '15.04.08' }
                ]
            }, {
                name: 'Muaro Jambi',
                bpscode: '15.05',
                districts: [
                    { name: 'Jambi Luar Kota', bpsCode: '15.05.01' },
                    { name: 'Sekernan', bpsCode: '15.05.02' },
                    { name: 'Kumpeh', bpsCode: '15.05.03' },
                    { name: 'Maro Sebo', bpsCode: '15.05.04' },
                    { name: 'Mestong', bpsCode: '15.05.05' },
                    { name: 'Kumpeh Ulu', bpsCode: '15.05.06' },
                    { name: 'Sungai Bahar', bpsCode: '15.05.07' },
                    { name: 'Sungai Gelam', bpsCode: '15.05.08' },
                    { name: 'Bahar Utara', bpsCode: '15.05.09' },
                    { name: 'Bahar Selatan', bpsCode: '15.05.10' },
                    { name: 'Taman Rajo', bpsCode: '15.05.11' }
                ]
            }, {
                name: 'Tanjung Jabung Barat',
                bpscode: '15.06',
                districts: [
                    { name: 'Tungkal Ulu', bpsCode: '15.06.01' },
                    { name: 'Tungkal Ilir', bpsCode: '15.06.02' },
                    { name: 'Pengabuan', bpsCode: '15.06.03' },
                    { name: 'Betara', bpsCode: '15.06.04' },
                    { name: 'Merlung', bpsCode: '15.06.05' },
                    { name: 'Tebing Tinggi', bpsCode: '15.06.06' },
                    { name: 'Batang Asam', bpsCode: '15.06.07' },
                    { name: 'Renah Mendaluh', bpsCode: '15.06.08' },
                    { name: 'Muara Papalik', bpsCode: '15.06.09' },
                    { name: 'Seberang Kota', bpsCode: '15.06.10' },
                    { name: 'Bram Itam', bpsCode: '15.06.11' },
                    { name: 'Kuala Betara', bpsCode: '15.06.12' },
                    { name: 'Senyerang', bpsCode: '15.06.13' }
                ]
            }, {
                name: 'Tanjung Jabung Timur',
                bpscode: '15.07',
                districts: [
                    { name: 'Muara Sabak Timur', bpsCode: '15.07.01' },
                    { name: 'Nipah Panjang', bpsCode: '15.07.02' },
                    { name: 'Mendahara', bpsCode: '15.07.03' },
                    { name: 'Rantau Rasau', bpsCode: '15.07.04' },
                    { name: 'Sadu', bpsCode: '15.07.05' },
                    { name: 'Dendang', bpsCode: '15.07.06' },
                    { name: 'Muara Sabak Barat', bpsCode: '15.07.07' },
                    { name: 'Kuala Jambi', bpsCode: '15.07.08' },
                    { name: 'Mendahara Ulu', bpsCode: '15.07.09' },
                    { name: 'Geragai', bpsCode: '15.07.10' },
                    { name: 'Berbak', bpsCode: '15.07.11' }
                ]
            }, {
                name: 'Bungo',
                bpscode: '15.08',
                districts: [
                    { name: 'Tanah Tumbuh', bpsCode: '15.08.01' },
                    { name: 'Rantau Pandan', bpsCode: '15.08.02' },
                    { name: 'Pasar Muaro Bungo (Pasar Muara Bungo)', bpsCode: '15.08.03' },
                    { name: 'Jujuhan', bpsCode: '15.08.04' },
                    { name: 'Tanah Sepenggal', bpsCode: '15.08.05' },
                    { name: 'Pelepat', bpsCode: '15.08.06' },
                    { name: 'Limbur Lubuk Mengkuang', bpsCode: '15.08.07' },
                    { name: 'Muko-muko Bathin / Batin VII', bpsCode: '15.08.08' },
                    { name: 'Pelepat Ilir', bpsCode: '15.08.09' },
                    { name: 'Bathin / Batin II Babeko', bpsCode: '15.08.10' },
                    { name: 'Bathin III', bpsCode: '15.08.11' },
                    { name: 'Bungo Dani', bpsCode: '15.08.12' },
                    { name: 'Rimbo Tengah', bpsCode: '15.08.13' },
                    { name: 'Bathin III Ulu', bpsCode: '15.08.14' },
                    { name: 'Bathin II Pelayang', bpsCode: '15.08.15' },
                    { name: 'Jujuhan Ilir', bpsCode: '15.08.16' },
                    { name: 'Tanah Sepenggal Lintas', bpsCode: '15.08.17' }
                ]
            }, {
                name: 'Tebo',
                bpscode: '15.09',
                districts: [
                    { name: 'Tebo Tengah', bpsCode: '15.09.01' },
                    { name: 'Tebo Ilir', bpsCode: '15.09.02' },
                    { name: 'Tebo Ulu', bpsCode: '15.09.03' },
                    { name: 'Rimbo Bujang', bpsCode: '15.09.04' },
                    { name: 'Sumay', bpsCode: '15.09.05' },
                    { name: 'VII Koto', bpsCode: '15.09.06' },
                    { name: 'Rimbo Ulu', bpsCode: '15.09.07' },
                    { name: 'Rimbo Ilir', bpsCode: '15.09.08' },
                    { name: 'Tengah Ilir', bpsCode: '15.09.09' },
                    { name: 'Serai Serumpun', bpsCode: '15.09.10' },
                    { name: 'VII Koto Ilir', bpsCode: '15.09.11' },
                    { name: 'Muara Tabir', bpsCode: '15.09.12' }
                ]
            }, {
                name: 'Jambi',
                bpscode: '15.71',
                districts: [
                    { name: 'Telanaipura', bpsCode: '15.71.01' },
                    { name: 'Jambi Selatan', bpsCode: '15.71.02' },
                    { name: 'Jambi Timur', bpsCode: '15.71.03' },
                    { name: 'Pasar Jambi', bpsCode: '15.71.04' },
                    { name: 'Pelayangan', bpsCode: '15.71.05' },
                    { name: 'Danau Teluk', bpsCode: '15.71.06' },
                    { name: 'Kota Baru', bpsCode: '15.71.07' },
                    { name: 'Jelutung', bpsCode: '15.71.08' },
                    { name: 'Alam Barajo', bpsCode: '15.71.09' },
                    { name: 'Danau Sipin', bpsCode: '15.71.10' },
                    { name: 'Paal Merah', bpsCode: '15.71.11' }
                ]
            }, {
                name: 'Sungaipenuh',
                bpscode: '15.72',
                districts: [
                    { name: 'Sungai Penuh', bpsCode: '15.72.01' },
                    { name: 'Pesisir Bukit', bpsCode: '15.72.02' },
                    { name: 'Hamparan Rawang', bpsCode: '15.72.03' },
                    { name: 'Tanah Kampung', bpsCode: '15.72.04' },
                    { name: 'Kumun Debai', bpsCode: '15.72.05' },
                    { name: 'Pondok Tinggi', bpsCode: '15.72.06' },
                    { name: 'Koto Baru', bpsCode: '15.72.07' },
                    { name: 'Sungai Bungkal', bpsCode: '15.72.08' }
                ]
            }
        ]
    },
    JB: {
        regencies: [
            {
                name: 'Bogor',
                bpscode: '32.01',
                districts: [
                    { name: 'Cibinong', bpsCode: '32.01.01' },
                    { name: 'Gunung Putri', bpsCode: '32.01.02' },
                    { name: 'Citeureup', bpsCode: '32.01.03' },
                    { name: 'Sukaraja', bpsCode: '32.01.04' },
                    { name: 'Babakan Madang', bpsCode: '32.01.05' },
                    { name: 'Jonggol', bpsCode: '32.01.06' },
                    { name: 'Cileungsi', bpsCode: '32.01.07' },
                    { name: 'Cariu', bpsCode: '32.01.08' },
                    { name: 'Sukamakmur', bpsCode: '32.01.09' },
                    { name: 'Parung', bpsCode: '32.01.10' },
                    { name: 'Gunung Sindur', bpsCode: '32.01.11' },
                    { name: 'Kemang', bpsCode: '32.01.12' },
                    { name: 'Bojong Gede (Bojonggede)', bpsCode: '32.01.13' },
                    { name: 'Leuwiliang', bpsCode: '32.01.14' },
                    { name: 'Ciampea', bpsCode: '32.01.15' },
                    { name: 'Cibungbulang', bpsCode: '32.01.16' },
                    { name: 'Pamijahan', bpsCode: '32.01.17' },
                    { name: 'Rumpin', bpsCode: '32.01.18' },
                    { name: 'Jasinga', bpsCode: '32.01.19' },
                    { name: 'Parung Panjang', bpsCode: '32.01.20' },
                    { name: 'Nanggung', bpsCode: '32.01.21' },
                    { name: 'Cigudeg', bpsCode: '32.01.22' },
                    { name: 'Tenjo', bpsCode: '32.01.23' },
                    { name: 'Ciawi', bpsCode: '32.01.24' },
                    { name: 'Cisarua', bpsCode: '32.01.25' },
                    { name: 'Megamendung', bpsCode: '32.01.26' },
                    { name: 'Caringin', bpsCode: '32.01.27' },
                    { name: 'Cijeruk', bpsCode: '32.01.28' },
                    { name: 'Ciomas', bpsCode: '32.01.29' },
                    { name: 'Dramaga', bpsCode: '32.01.30' },
                    { name: 'Tamansari', bpsCode: '32.01.31' },
                    { name: 'Klapanunggal', bpsCode: '32.01.32' },
                    { name: 'Ciseeng', bpsCode: '32.01.33' },
                    { name: 'Ranca Bungur', bpsCode: '32.01.34' },
                    { name: 'Sukajaya', bpsCode: '32.01.35' },
                    { name: 'Tanjungsari', bpsCode: '32.01.36' },
                    { name: 'Tajurhalang', bpsCode: '32.01.37' },
                    { name: 'Cigombong', bpsCode: '32.01.38' },
                    { name: 'Leuwisadeng', bpsCode: '32.01.39' },
                    { name: 'Tenjolaya', bpsCode: '32.01.40' }
                ]
            }, {
                name: 'Sukabumi',
                bpscode: '32.02',
                districts: [
                    { name: 'Palabuhanratu (Pelabuhanratu)', bpsCode: '32.02.01' },
                    { name: 'Simpenan', bpsCode: '32.02.02' },
                    { name: 'Cikakak', bpsCode: '32.02.03' },
                    { name: 'Bantargadung', bpsCode: '32.02.04' },
                    { name: 'Cisolok', bpsCode: '32.02.05' },
                    { name: 'Cikidang', bpsCode: '32.02.06' },
                    { name: 'Lengkong', bpsCode: '32.02.07' },
                    { name: 'Jampangtengah (Jampang Tengah)', bpsCode: '32.02.08' },
                    { name: 'Warungkiara', bpsCode: '32.02.09' },
                    { name: 'Cikembar', bpsCode: '32.02.10' },
                    { name: 'Cibadak', bpsCode: '32.02.11' },
                    { name: 'Nagrak', bpsCode: '32.02.12' },
                    { name: 'Parungkuda (Parung Kuda)', bpsCode: '32.02.13' },
                    { name: 'Bojonggenteng (Bojong Genteng)', bpsCode: '32.02.14' },
                    { name: 'Parakansalak (Parakan Salak)', bpsCode: '32.02.15' },
                    { name: 'Cicurug', bpsCode: '32.02.16' },
                    { name: 'Cidahu', bpsCode: '32.02.17' },
                    { name: 'Kalapanunggal (Kalapa Nunggal)', bpsCode: '32.02.18' },
                    { name: 'Kabandungan', bpsCode: '32.02.19' },
                    { name: 'Waluran', bpsCode: '32.02.20' },
                    { name: 'Jampangkulon (Jampang Kulon)', bpsCode: '32.02.21' },
                    { name: 'Ciemas', bpsCode: '32.02.22' },
                    { name: 'Kalibunder', bpsCode: '32.02.23' },
                    { name: 'Surade', bpsCode: '32.02.24' },
                    { name: 'Cibitung', bpsCode: '32.02.25' },
                    { name: 'Ciracap', bpsCode: '32.02.26' },
                    { name: 'Gunungguruh', bpsCode: '32.02.27' },
                    { name: 'Cicantayan', bpsCode: '32.02.28' },
                    { name: 'Cisaat', bpsCode: '32.02.29' },
                    { name: 'Kadudampit', bpsCode: '32.02.30' },
                    { name: 'Caringin', bpsCode: '32.02.31' },
                    { name: 'Sukabumi', bpsCode: '32.02.32' },
                    { name: 'Sukaraja', bpsCode: '32.02.33' },
                    { name: 'Kebonpedes', bpsCode: '32.02.34' },
                    { name: 'Cireunghas', bpsCode: '32.02.35' },
                    { name: 'Sukalarang', bpsCode: '32.02.36' },
                    { name: 'Pabuaran', bpsCode: '32.02.37' },
                    { name: 'Purabaya', bpsCode: '32.02.38' },
                    { name: 'Nyalindung', bpsCode: '32.02.39' },
                    { name: 'Gegerbitung (Geger Bitung)', bpsCode: '32.02.40' },
                    { name: 'Sagaranten', bpsCode: '32.02.41' },
                    { name: 'Curugkembar', bpsCode: '32.02.42' },
                    { name: 'Cidolog', bpsCode: '32.02.43' },
                    { name: 'Cidadap', bpsCode: '32.02.44' },
                    { name: 'Tegalbuleud', bpsCode: '32.02.45' },
                    { name: 'Cimanggu', bpsCode: '32.02.46' },
                    { name: 'Ciambar', bpsCode: '32.02.47' }
                ]
            }, {
                name: 'Cianjur',
                bpscode: '32.03',
                districts: [
                    { name: 'Cianjur', bpsCode: '32.03.01' },
                    { name: 'Warungkondang', bpsCode: '32.03.02' },
                    { name: 'Cibeber', bpsCode: '32.03.03' },
                    { name: 'Cilaku', bpsCode: '32.03.04' },
                    { name: 'Ciranjang', bpsCode: '32.03.05' },
                    { name: 'Bojongpicung', bpsCode: '32.03.06' },
                    { name: 'Karangtengah', bpsCode: '32.03.07' },
                    { name: 'Mande', bpsCode: '32.03.08' },
                    { name: 'Sukaluyu', bpsCode: '32.03.09' },
                    { name: 'Pacet', bpsCode: '32.03.10' },
                    { name: 'Cugenang', bpsCode: '32.03.11' },
                    { name: 'Cikalongkulon', bpsCode: '32.03.12' },
                    { name: 'Sukaresmi', bpsCode: '32.03.13' },
                    { name: 'Sukanagara', bpsCode: '32.03.14' },
                    { name: 'Campaka', bpsCode: '32.03.15' },
                    { name: 'Takokak', bpsCode: '32.03.16' },
                    { name: 'Kadupandak', bpsCode: '32.03.17' },
                    { name: 'Pagelaran', bpsCode: '32.03.18' },
                    { name: 'Tanggeung', bpsCode: '32.03.19' },
                    { name: 'Cibinong', bpsCode: '32.03.20' },
                    { name: 'Sindangbarang', bpsCode: '32.03.21' },
                    { name: 'Agrabinta', bpsCode: '32.03.22' },
                    { name: 'Cidaun', bpsCode: '32.03.23' },
                    { name: 'Naringgul', bpsCode: '32.03.24' },
                    { name: 'Campakamulya (Campaka Mulya)', bpsCode: '32.03.25' },
                    { name: 'Cikadu', bpsCode: '32.03.26' },
                    { name: 'Gekbrong', bpsCode: '32.03.27' },
                    { name: 'Cipanas', bpsCode: '32.03.28' },
                    { name: 'Cijati', bpsCode: '32.03.29' },
                    { name: 'Leles', bpsCode: '32.03.30' },
                    { name: 'Haurwangi', bpsCode: '32.03.31' },
                    { name: 'Pasirkuda', bpsCode: '32.03.32' }
                ]
            }, {
                name: 'Bandung',
                bpscode: '32.04',
                districts: [
                    { name: 'Cileunyi', bpsCode: '32.04.05' },
                    { name: 'Cimenyan (Cimeunyan)', bpsCode: '32.04.06' },
                    { name: 'Cilengkrang', bpsCode: '32.04.07' },
                    { name: 'Bojongsoang', bpsCode: '32.04.08' },
                    { name: 'Margahayu', bpsCode: '32.04.09' },
                    { name: 'Margaasih', bpsCode: '32.04.10' },
                    { name: 'Katapang', bpsCode: '32.04.11' },
                    { name: 'Dayeuhkolot', bpsCode: '32.04.12' },
                    { name: 'Banjaran', bpsCode: '32.04.13' },
                    { name: 'Pameungpeuk', bpsCode: '32.04.14' },
                    { name: 'Pangalengan', bpsCode: '32.04.15' },
                    { name: 'Arjasari', bpsCode: '32.04.16' },
                    { name: 'Cimaung', bpsCode: '32.04.17' },
                    { name: 'Cicalengka', bpsCode: '32.04.25' },
                    { name: 'Nagreg', bpsCode: '32.04.26' },
                    { name: 'Cikancung', bpsCode: '32.04.27' },
                    { name: 'Rancaekek', bpsCode: '32.04.28' },
                    { name: 'Ciparay', bpsCode: '32.04.29' },
                    { name: 'Pacet', bpsCode: '32.04.30' },
                    { name: 'Kertasari', bpsCode: '32.04.31' },
                    { name: 'Baleendah', bpsCode: '32.04.32' },
                    { name: 'Majalaya', bpsCode: '32.04.33' },
                    { name: 'Solokanjeruk (Solokan Jeruk)', bpsCode: '32.04.34' },
                    { name: 'Paseh', bpsCode: '32.04.35' },
                    { name: 'Ibun', bpsCode: '32.04.36' },
                    { name: 'Soreang', bpsCode: '32.04.37' },
                    { name: 'Pasirjambu', bpsCode: '32.04.38' },
                    { name: 'Ciwidey', bpsCode: '32.04.39' },
                    { name: 'Rancabali (Ranca Bali)', bpsCode: '32.04.40' },
                    { name: 'Cangkuang', bpsCode: '32.04.44' },
                    { name: 'Kutawaringin', bpsCode: '32.04.46' }
                ]
            }, {
                name: 'Garut',
                bpscode: '32.05',
                districts: [
                    { name: 'Garut Kota', bpsCode: '32.05.01' },
                    { name: 'Karangpawitan', bpsCode: '32.05.02' },
                    { name: 'Wanaraja', bpsCode: '32.05.03' },
                    { name: 'Tarogong Kaler', bpsCode: '32.05.04' },
                    { name: 'Tarogong Kidul', bpsCode: '32.05.05' },
                    { name: 'Banyuresmi', bpsCode: '32.05.06' },
                    { name: 'Samarang', bpsCode: '32.05.07' },
                    { name: 'Pasirwangi', bpsCode: '32.05.08' },
                    { name: 'Leles', bpsCode: '32.05.09' },
                    { name: 'Kadungora', bpsCode: '32.05.10' },
                    { name: 'Leuwigoong', bpsCode: '32.05.11' },
                    { name: 'Cibatu', bpsCode: '32.05.12' },
                    { name: 'Kersamanah', bpsCode: '32.05.13' },
                    { name: 'Malangbong', bpsCode: '32.05.14' },
                    { name: 'Sukawening', bpsCode: '32.05.15' },
                    { name: 'Karangtengah', bpsCode: '32.05.16' },
                    { name: 'Bayongbong', bpsCode: '32.05.17' },
                    { name: 'Cigedug', bpsCode: '32.05.18' },
                    { name: 'Cilawu', bpsCode: '32.05.19' },
                    { name: 'Cisurupan', bpsCode: '32.05.20' },
                    { name: 'Sukaresmi', bpsCode: '32.05.21' },
                    { name: 'Cikajang', bpsCode: '32.05.22' },
                    { name: 'Banjarwangi', bpsCode: '32.05.23' },
                    { name: 'Singajaya', bpsCode: '32.05.24' },
                    { name: 'Cihurip', bpsCode: '32.05.25' },
                    { name: 'Peundeuy', bpsCode: '32.05.26' },
                    { name: 'Pameungpeuk', bpsCode: '32.05.27' },
                    { name: 'Cisompet', bpsCode: '32.05.28' },
                    { name: 'Cibalong', bpsCode: '32.05.29' },
                    { name: 'Cikelet', bpsCode: '32.05.30' },
                    { name: 'Bungbulang', bpsCode: '32.05.31' },
                    { name: 'Mekarmukti', bpsCode: '32.05.32' },
                    { name: 'Pakenjeng', bpsCode: '32.05.33' },
                    { name: 'Pamulihan', bpsCode: '32.05.34' },
                    { name: 'Cisewu', bpsCode: '32.05.35' },
                    { name: 'Caringin', bpsCode: '32.05.36' },
                    { name: 'Talegong', bpsCode: '32.05.37' },
                    { name: 'Blubur Limbangan', bpsCode: '32.05.38' },
                    { name: 'Selaawi', bpsCode: '32.05.39' },
                    { name: 'Cibiuk', bpsCode: '32.05.40' },
                    { name: 'Pangatikan', bpsCode: '32.05.41' },
                    { name: 'Sucinaraja', bpsCode: '32.05.42' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.06',
                districts: [
                    { name: 'Cipatujah', bpsCode: '32.06.01' },
                    { name: 'Karangnunggal', bpsCode: '32.06.02' },
                    { name: 'Cikalong', bpsCode: '32.06.03' },
                    { name: 'Pancatengah', bpsCode: '32.06.04' },
                    { name: 'Cikatomas', bpsCode: '32.06.05' },
                    { name: 'Cibalong', bpsCode: '32.06.06' },
                    { name: 'Parungponteng', bpsCode: '32.06.07' },
                    { name: 'Bantarkalong', bpsCode: '32.06.08' },
                    { name: 'Bojongasih', bpsCode: '32.06.09' },
                    { name: 'Culamega', bpsCode: '32.06.10' },
                    { name: 'Bojonggambir', bpsCode: '32.06.11' },
                    { name: 'Sodonghilir', bpsCode: '32.06.12' },
                    { name: 'Taraju', bpsCode: '32.06.13' },
                    { name: 'Salawu', bpsCode: '32.06.14' },
                    { name: 'Puspahiang', bpsCode: '32.06.15' },
                    { name: 'Tanjungjaya', bpsCode: '32.06.16' },
                    { name: 'Sukaraja', bpsCode: '32.06.17' },
                    { name: 'Salopa', bpsCode: '32.06.18' },
                    { name: 'Jatiwaras', bpsCode: '32.06.19' },
                    { name: 'Cineam', bpsCode: '32.06.20' },
                    { name: 'Karang Jaya', bpsCode: '32.06.21' },
                    { name: 'Manonjaya', bpsCode: '32.06.22' },
                    { name: 'Gunung Tanjung', bpsCode: '32.06.23' },
                    { name: 'Singaparna', bpsCode: '32.06.24' },
                    { name: 'Mangunreja', bpsCode: '32.06.25' },
                    { name: 'Sukarame', bpsCode: '32.06.26' },
                    { name: 'Cigalontang', bpsCode: '32.06.27' },
                    { name: 'Leuwisari', bpsCode: '32.06.28' },
                    { name: 'Padakembang', bpsCode: '32.06.29' },
                    { name: 'Sariwangi', bpsCode: '32.06.30' },
                    { name: 'Sukaratu', bpsCode: '32.06.31' },
                    { name: 'Cisayong', bpsCode: '32.06.32' },
                    { name: 'Sukahening', bpsCode: '32.06.33' },
                    { name: 'Rajapolah', bpsCode: '32.06.34' },
                    { name: 'Jamanis', bpsCode: '32.06.35' },
                    { name: 'Ciawi', bpsCode: '32.06.36' },
                    { name: 'Kadipaten', bpsCode: '32.06.37' },
                    { name: 'Pagerageung', bpsCode: '32.06.38' },
                    { name: 'Sukaresik', bpsCode: '32.06.39' }
                ]
            }, {
                name: 'Ciamis',
                bpscode: '32.07',
                districts: [
                    { name: 'Ciamis', bpsCode: '32.07.01' },
                    { name: 'Cikoneng', bpsCode: '32.07.02' },
                    { name: 'Cijeungjing', bpsCode: '32.07.03' },
                    { name: 'Sadananya', bpsCode: '32.07.04' },
                    { name: 'Cidolog', bpsCode: '32.07.05' },
                    { name: 'Cihaurbeuti', bpsCode: '32.07.06' },
                    { name: 'Panumbangan', bpsCode: '32.07.07' },
                    { name: 'Panjalu', bpsCode: '32.07.08' },
                    { name: 'Kawali', bpsCode: '32.07.09' },
                    { name: 'Panawangan', bpsCode: '32.07.10' },
                    { name: 'Cipaku', bpsCode: '32.07.11' },
                    { name: 'Jatinagara', bpsCode: '32.07.12' },
                    { name: 'Rajadesa', bpsCode: '32.07.13' },
                    { name: 'Sukadana', bpsCode: '32.07.14' },
                    { name: 'Rancah', bpsCode: '32.07.15' },
                    { name: 'Tambaksari', bpsCode: '32.07.16' },
                    { name: 'Lakbok', bpsCode: '32.07.17' },
                    { name: 'Banjarsari', bpsCode: '32.07.18' },
                    { name: 'Pamarican', bpsCode: '32.07.19' },
                    { name: 'Cimaragas', bpsCode: '32.07.29' },
                    { name: 'Cisaga', bpsCode: '32.07.30' },
                    { name: 'Sindangkasih', bpsCode: '32.07.31' },
                    { name: 'Baregbeg', bpsCode: '32.07.32' },
                    { name: 'Sukamantri', bpsCode: '32.07.33' },
                    { name: 'Lumbung', bpsCode: '32.07.34' },
                    { name: 'Purwadadi', bpsCode: '32.07.35' },
                    { name: 'Banjaranyar', bpsCode: '32.07.37' }
                ]
            }, {
                name: 'Kuningan',
                bpscode: '32.08',
                districts: [
                    { name: 'Kadugede', bpsCode: '32.08.01' },
                    { name: 'Ciniru', bpsCode: '32.08.02' },
                    { name: 'Subang', bpsCode: '32.08.03' },
                    { name: 'Ciwaru', bpsCode: '32.08.04' },
                    { name: 'Cibingbin', bpsCode: '32.08.05' },
                    { name: 'Luragung', bpsCode: '32.08.06' },
                    { name: 'Lebakwangi', bpsCode: '32.08.07' },
                    { name: 'Garawangi', bpsCode: '32.08.08' },
                    { name: 'Kuningan', bpsCode: '32.08.09' },
                    { name: 'Ciawigebang', bpsCode: '32.08.10' },
                    { name: 'Cidahu', bpsCode: '32.08.11' },
                    { name: 'Jalaksana', bpsCode: '32.08.12' },
                    { name: 'Cilimus', bpsCode: '32.08.13' },
                    { name: 'Mandirancan', bpsCode: '32.08.14' },
                    { name: 'Selajambe', bpsCode: '32.08.15' },
                    { name: 'Kramatmulya (Kramat Mulya)', bpsCode: '32.08.16' },
                    { name: 'Darma', bpsCode: '32.08.17' },
                    { name: 'Cigugur', bpsCode: '32.08.18' },
                    { name: 'Pasawahan', bpsCode: '32.08.19' },
                    { name: 'Nusaherang', bpsCode: '32.08.20' },
                    { name: 'Cipicung', bpsCode: '32.08.21' },
                    { name: 'Pancalang', bpsCode: '32.08.22' },
                    { name: 'Japara', bpsCode: '32.08.23' },
                    { name: 'Cimahi', bpsCode: '32.08.24' },
                    { name: 'Cilebak', bpsCode: '32.08.25' },
                    { name: 'Hantara', bpsCode: '32.08.26' },
                    { name: 'Kalimanggis', bpsCode: '32.08.27' },
                    { name: 'Cibeureum', bpsCode: '32.08.28' },
                    { name: 'Karang Kancana (Karangkancana)', bpsCode: '32.08.29' },
                    { name: 'Maleber', bpsCode: '32.08.30' },
                    { name: 'Sindang Agung (Sindangagung)', bpsCode: '32.08.31' },
                    { name: 'Cigandamekar', bpsCode: '32.08.32' }
                ]
            }, {
                name: 'Cirebon',
                bpscode: '32.09',
                districts: [
                    { name: 'Waled', bpsCode: '32.09.01' },
                    { name: 'Ciledug', bpsCode: '32.09.02' },
                    { name: 'Losari', bpsCode: '32.09.03' },
                    { name: 'Pabedilan', bpsCode: '32.09.04' },
                    { name: 'Babakan', bpsCode: '32.09.05' },
                    { name: 'Karangsembung', bpsCode: '32.09.06' },
                    { name: 'Lemahabang', bpsCode: '32.09.07' },
                    { name: 'Susukan Lebak', bpsCode: '32.09.08' },
                    { name: 'Sedong', bpsCode: '32.09.09' },
                    { name: 'Astanajapura', bpsCode: '32.09.10' },
                    { name: 'Pangenan', bpsCode: '32.09.11' },
                    { name: 'Mundu', bpsCode: '32.09.12' },
                    { name: 'Beber', bpsCode: '32.09.13' },
                    { name: 'Talun (Cirebon Selatan)', bpsCode: '32.09.14' },
                    { name: 'Sumber', bpsCode: '32.09.15' },
                    { name: 'Dukupuntang', bpsCode: '32.09.16' },
                    { name: 'Palimanan', bpsCode: '32.09.17' },
                    { name: 'Plumbon', bpsCode: '32.09.18' },
                    { name: 'Weru', bpsCode: '32.09.19' },
                    { name: 'Kedawung', bpsCode: '32.09.20' },
                    { name: 'Gunung Jati (Cirebon Utara)', bpsCode: '32.09.21' },
                    { name: 'Kapetakan', bpsCode: '32.09.22' },
                    { name: 'Klangenan', bpsCode: '32.09.23' },
                    { name: 'Arjawinangun', bpsCode: '32.09.24' },
                    { name: 'Panguragan', bpsCode: '32.09.25' },
                    { name: 'Ciwaringin', bpsCode: '32.09.26' },
                    { name: 'Susukan', bpsCode: '32.09.27' },
                    { name: 'Gegesik', bpsCode: '32.09.28' },
                    { name: 'Kaliwedi', bpsCode: '32.09.29' },
                    { name: 'Gebang', bpsCode: '32.09.30' },
                    { name: 'Depok', bpsCode: '32.09.31' },
                    { name: 'Pasaleman', bpsCode: '32.09.32' },
                    { name: 'Pabuaran', bpsCode: '32.09.33' },
                    { name: 'Karangwareng', bpsCode: '32.09.34' },
                    { name: 'Tengah Tani', bpsCode: '32.09.35' },
                    { name: 'Plered', bpsCode: '32.09.36' },
                    { name: 'Gempol', bpsCode: '32.09.37' },
                    { name: 'Greged (Greget)', bpsCode: '32.09.38' },
                    { name: 'Suranenggala', bpsCode: '32.09.39' },
                    { name: 'Jamblang', bpsCode: '32.09.40' }
                ]
            }, {
                name: 'Majalengka',
                bpscode: '32.10',
                districts: [
                    { name: 'Lemahsugih', bpsCode: '32.10.01' },
                    { name: 'Bantarujeg', bpsCode: '32.10.02' },
                    { name: 'Cikijing', bpsCode: '32.10.03' },
                    { name: 'Talaga', bpsCode: '32.10.04' },
                    { name: 'Argapura', bpsCode: '32.10.05' },
                    { name: 'Maja', bpsCode: '32.10.06' },
                    { name: 'Majalengka', bpsCode: '32.10.07' },
                    { name: 'Sukahaji', bpsCode: '32.10.08' },
                    { name: 'Rajagaluh', bpsCode: '32.10.09' },
                    { name: 'Leuwimunding', bpsCode: '32.10.10' },
                    { name: 'Jatiwangi', bpsCode: '32.10.11' },
                    { name: 'Dawuan', bpsCode: '32.10.12' },
                    { name: 'Kadipaten', bpsCode: '32.10.13' },
                    { name: 'Kertajati', bpsCode: '32.10.14' },
                    { name: 'Jatitujuh', bpsCode: '32.10.15' },
                    { name: 'Ligung', bpsCode: '32.10.16' },
                    { name: 'Sumberjaya', bpsCode: '32.10.17' },
                    { name: 'Panyingkiran', bpsCode: '32.10.18' },
                    { name: 'Palasah', bpsCode: '32.10.19' },
                    { name: 'Cigasong', bpsCode: '32.10.20' },
                    { name: 'Sindangwangi', bpsCode: '32.10.21' },
                    { name: 'Banjaran', bpsCode: '32.10.22' },
                    { name: 'Cingambul', bpsCode: '32.10.23' },
                    { name: 'Kasokandel', bpsCode: '32.10.24' },
                    { name: 'Sindang', bpsCode: '32.10.25' },
                    { name: 'Malausma', bpsCode: '32.10.26' }
                ]
            }, {
                name: 'Sumedang',
                bpscode: '32.11',
                districts: [
                    { name: 'Wado', bpsCode: '32.11.01' },
                    { name: 'Jatinunggal', bpsCode: '32.11.02' },
                    { name: 'Darmaraja', bpsCode: '32.11.03' },
                    { name: 'Cibugel', bpsCode: '32.11.04' },
                    { name: 'Cisitu', bpsCode: '32.11.05' },
                    { name: 'Situraja', bpsCode: '32.11.06' },
                    { name: 'Conggeang', bpsCode: '32.11.07' },
                    { name: 'Paseh', bpsCode: '32.11.08' },
                    { name: 'Surian', bpsCode: '32.11.09' },
                    { name: 'Buahdua', bpsCode: '32.11.10' },
                    { name: 'Tanjungsari', bpsCode: '32.11.11' },
                    { name: 'Sukasari', bpsCode: '32.11.12' },
                    { name: 'Pamulihan', bpsCode: '32.11.13' },
                    { name: 'Cimanggung', bpsCode: '32.11.14' },
                    { name: 'Jatinangor', bpsCode: '32.11.15' },
                    { name: 'Rancakalong', bpsCode: '32.11.16' },
                    { name: 'Sumedang Selatan', bpsCode: '32.11.17' },
                    { name: 'Sumedang Utara', bpsCode: '32.11.18' },
                    { name: 'Ganeas', bpsCode: '32.11.19' },
                    { name: 'Tanjungkerta', bpsCode: '32.11.20' },
                    { name: 'Tanjungmedar', bpsCode: '32.11.21' },
                    { name: 'Cimalaka', bpsCode: '32.11.22' },
                    { name: 'Cisarua', bpsCode: '32.11.23' },
                    { name: 'Tomo', bpsCode: '32.11.24' },
                    { name: 'Ujungjaya', bpsCode: '32.11.25' },
                    { name: 'Jatigede', bpsCode: '32.11.26' }
                ]
            }, {
                name: 'Indramayu',
                bpscode: '32.12',
                districts: [
                    { name: 'Haurgeulis', bpsCode: '32.12.01' },
                    { name: 'Kroya', bpsCode: '32.12.02' },
                    { name: 'Gabuswetan', bpsCode: '32.12.03' },
                    { name: 'Cikedung', bpsCode: '32.12.04' },
                    { name: 'Lelea', bpsCode: '32.12.05' },
                    { name: 'Bangodua', bpsCode: '32.12.06' },
                    { name: 'Widasari', bpsCode: '32.12.07' },
                    { name: 'Kertasemaya', bpsCode: '32.12.08' },
                    { name: 'Krangkeng', bpsCode: '32.12.09' },
                    { name: 'Karangampel', bpsCode: '32.12.10' },
                    { name: 'Juntinyuat', bpsCode: '32.12.11' },
                    { name: 'Sliyeg', bpsCode: '32.12.12' },
                    { name: 'Jatibarang', bpsCode: '32.12.13' },
                    { name: 'Balongan', bpsCode: '32.12.14' },
                    { name: 'Indramayu', bpsCode: '32.12.15' },
                    { name: 'Sindang', bpsCode: '32.12.16' },
                    { name: 'Cantigi', bpsCode: '32.12.17' },
                    { name: 'Lohbener', bpsCode: '32.12.18' },
                    { name: 'Arahan', bpsCode: '32.12.19' },
                    { name: 'Losarang', bpsCode: '32.12.20' },
                    { name: 'Kandanghaur', bpsCode: '32.12.21' },
                    { name: 'Bongas', bpsCode: '32.12.22' },
                    { name: 'Anjatan', bpsCode: '32.12.23' },
                    { name: 'Sukra', bpsCode: '32.12.24' },
                    { name: 'Gantar', bpsCode: '32.12.25' },
                    { name: 'Trisi/Terisi', bpsCode: '32.12.26' },
                    { name: 'Sukagumiwang', bpsCode: '32.12.27' },
                    { name: 'Kedokan Bunder', bpsCode: '32.12.28' },
                    { name: 'Pasekan', bpsCode: '32.12.29' },
                    { name: 'Tukdana', bpsCode: '32.12.30' },
                    { name: 'Patrol', bpsCode: '32.12.31' }
                ]
            }, {
                name: 'Subang',
                bpscode: '32.13',
                districts: [
                    { name: 'Sagalaherang', bpsCode: '32.13.01' },
                    { name: 'Cisalak', bpsCode: '32.13.02' },
                    { name: 'Subang', bpsCode: '32.13.03' },
                    { name: 'Kalijati', bpsCode: '32.13.04' },
                    { name: 'Pabuaran', bpsCode: '32.13.05' },
                    { name: 'Purwadadi', bpsCode: '32.13.06' },
                    { name: 'Pagaden', bpsCode: '32.13.07' },
                    { name: 'Binong', bpsCode: '32.13.08' },
                    { name: 'Ciasem', bpsCode: '32.13.09' },
                    { name: 'Pusakanagara', bpsCode: '32.13.10' },
                    { name: 'Pamanukan', bpsCode: '32.13.11' },
                    { name: 'Jalancagak', bpsCode: '32.13.12' },
                    { name: 'Blanakan', bpsCode: '32.13.13' },
                    { name: 'Tanjungsiang', bpsCode: '32.13.14' },
                    { name: 'Compreng', bpsCode: '32.13.15' },
                    { name: 'Patokbeusi', bpsCode: '32.13.16' },
                    { name: 'Cibogo', bpsCode: '32.13.17' },
                    { name: 'Cipunagara', bpsCode: '32.13.18' },
                    { name: 'Cijambe', bpsCode: '32.13.19' },
                    { name: 'Cipeundeuy', bpsCode: '32.13.20' },
                    { name: 'Legonkulon', bpsCode: '32.13.21' },
                    { name: 'Cikaum', bpsCode: '32.13.22' },
                    { name: 'Serangpanjang', bpsCode: '32.13.23' },
                    { name: 'Sukasari', bpsCode: '32.13.24' },
                    { name: 'Tambakdahan', bpsCode: '32.13.25' },
                    { name: 'Kasomalang', bpsCode: '32.13.26' },
                    { name: 'Dawuan', bpsCode: '32.13.27' },
                    { name: 'Pagaden Barat', bpsCode: '32.13.28' },
                    { name: 'Ciater', bpsCode: '32.13.29' },
                    { name: 'Pusakajaya', bpsCode: '32.13.30' }
                ]
            }, {
                name: 'Purwakarta',
                bpscode: '32.14',
                districts: [
                    { name: 'Purwakarta', bpsCode: '32.14.01' },
                    { name: 'Campaka', bpsCode: '32.14.02' },
                    { name: 'Jatiluhur', bpsCode: '32.14.03' },
                    { name: 'Plered', bpsCode: '32.14.04' },
                    { name: 'Sukatani', bpsCode: '32.14.05' },
                    { name: 'Darangdan', bpsCode: '32.14.06' },
                    { name: 'Maniis', bpsCode: '32.14.07' },
                    { name: 'Tegalwaru (Tegal Waru)', bpsCode: '32.14.08' },
                    { name: 'Wanayasa', bpsCode: '32.14.09' },
                    { name: 'Pasawahan', bpsCode: '32.14.10' },
                    { name: 'Bojong', bpsCode: '32.14.11' },
                    { name: 'Babakancikao', bpsCode: '32.14.12' },
                    { name: 'Bungursari', bpsCode: '32.14.13' },
                    { name: 'Cibatu', bpsCode: '32.14.14' },
                    { name: 'Sukasari', bpsCode: '32.14.15' },
                    { name: 'Pondoksalam', bpsCode: '32.14.16' },
                    { name: 'Kiarapedes', bpsCode: '32.14.17' }
                ]
            }, {
                name: 'Karawang',
                bpscode: '32.15',
                districts: [
                    { name: 'Karawang Barat', bpsCode: '32.15.01' },
                    { name: 'Pangkalan', bpsCode: '32.15.02' },
                    { name: 'Telukjambe Timur', bpsCode: '32.15.03' },
                    { name: 'Ciampel', bpsCode: '32.15.04' },
                    { name: 'Klari', bpsCode: '32.15.05' },
                    { name: 'Rengasdengklok', bpsCode: '32.15.06' },
                    { name: 'Kutawaluya', bpsCode: '32.15.07' },
                    { name: 'Batujaya', bpsCode: '32.15.08' },
                    { name: 'Tirtajaya', bpsCode: '32.15.09' },
                    { name: 'Pedes', bpsCode: '32.15.10' },
                    { name: 'Cibuaya', bpsCode: '32.15.11' },
                    { name: 'Pakisjaya', bpsCode: '32.15.12' },
                    { name: 'Cikampek', bpsCode: '32.15.13' },
                    { name: 'Jatisari', bpsCode: '32.15.14' },
                    { name: 'Cilamaya Wetan', bpsCode: '32.15.15' },
                    { name: 'Tirtamulya', bpsCode: '32.15.16' },
                    { name: 'Telagasari (Talagasari)', bpsCode: '32.15.17' },
                    { name: 'Rawamerta', bpsCode: '32.15.18' },
                    { name: 'Lemahabang', bpsCode: '32.15.19' },
                    { name: 'Tempuran', bpsCode: '32.15.20' },
                    { name: 'Majalaya', bpsCode: '32.15.21' },
                    { name: 'Jayakerta', bpsCode: '32.15.22' },
                    { name: 'Cilamaya Kulon', bpsCode: '32.15.23' },
                    { name: 'Banyusari', bpsCode: '32.15.24' },
                    { name: 'Kota Baru (Kotabaru)', bpsCode: '32.15.25' },
                    { name: 'Karawang Timur', bpsCode: '32.15.26' },
                    { name: 'Telukjambe Barat', bpsCode: '32.15.27' },
                    { name: 'Tegalwaru', bpsCode: '32.15.28' },
                    { name: 'Purwasari', bpsCode: '32.15.29' },
                    { name: 'Cilebar', bpsCode: '32.15.30' }
                ]
            }, {
                name: 'Bekasi',
                bpscode: '32.16',
                districts: [
                    { name: 'Tarumajaya', bpsCode: '32.16.01' },
                    { name: 'Babelan', bpsCode: '32.16.02' },
                    { name: 'Sukawangi', bpsCode: '32.16.03' },
                    { name: 'Tambelang', bpsCode: '32.16.04' },
                    { name: 'Tambun Utara', bpsCode: '32.16.05' },
                    { name: 'Tambun Selatan', bpsCode: '32.16.06' },
                    { name: 'Cibitung', bpsCode: '32.16.07' },
                    { name: 'Cikarang Barat', bpsCode: '32.16.08' },
                    { name: 'Cikarang Utara', bpsCode: '32.16.09' },
                    { name: 'Karang Bahagia (Karangbahagia)', bpsCode: '32.16.10' },
                    { name: 'Cikarang Timur', bpsCode: '32.16.11' },
                    { name: 'Kedung Waringin', bpsCode: '32.16.12' },
                    { name: 'Pebayuran', bpsCode: '32.16.13' },
                    { name: 'Sukakarya', bpsCode: '32.16.14' },
                    { name: 'Sukatani', bpsCode: '32.16.15' },
                    { name: 'Cabangbungin', bpsCode: '32.16.16' },
                    { name: 'Muaragembong (Muara Gembong)', bpsCode: '32.16.17' },
                    { name: 'Setu', bpsCode: '32.16.18' },
                    { name: 'Cikarang Selatan', bpsCode: '32.16.19' },
                    { name: 'Cikarang Pusat', bpsCode: '32.16.20' },
                    { name: 'Serang Baru', bpsCode: '32.16.21' },
                    { name: 'Cibarusah', bpsCode: '32.16.22' },
                    { name: 'Bojongmangu', bpsCode: '32.16.23' }
                ]
            }, {
                name: 'Bandung Barat',
                bpscode: '32.17',
                districts: [
                    { name: 'Lembang', bpsCode: '32.17.01' },
                    { name: 'Parongpong', bpsCode: '32.17.02' },
                    { name: 'Cisarua', bpsCode: '32.17.03' },
                    { name: 'Cikalongwetan (Cikalong Wetan)', bpsCode: '32.17.04' },
                    { name: 'Cipeundeuy', bpsCode: '32.17.05' },
                    { name: 'Ngamprah', bpsCode: '32.17.06' },
                    { name: 'Cipatat', bpsCode: '32.17.07' },
                    { name: 'Padalarang', bpsCode: '32.17.08' },
                    { name: 'Batujajar', bpsCode: '32.17.09' },
                    { name: 'Cihampelas', bpsCode: '32.17.10' },
                    { name: 'Cililin', bpsCode: '32.17.11' },
                    { name: 'Cipongkor', bpsCode: '32.17.12' },
                    { name: 'Rongga', bpsCode: '32.17.13' },
                    { name: 'Sindangkerta', bpsCode: '32.17.14' },
                    { name: 'Gununghalu', bpsCode: '32.17.15' },
                    { name: 'Saguling', bpsCode: '32.17.16' }
                ]
            }, {
                name: 'Pangandaran',
                bpscode: '32.18',
                districts: [
                    { name: 'Parigi', bpsCode: '32.18.01' },
                    { name: 'Cijulang', bpsCode: '32.18.02' },
                    { name: 'Cimerak', bpsCode: '32.18.03' },
                    { name: 'Cigugur', bpsCode: '32.18.04' },
                    { name: 'Langkaplancar', bpsCode: '32.18.05' },
                    { name: 'Mangunjaya', bpsCode: '32.18.06' },
                    { name: 'Padaherang', bpsCode: '32.18.07' },
                    { name: 'Kalipucang', bpsCode: '32.18.08' },
                    { name: 'Pangandaran', bpsCode: '32.18.09' },
                    { name: 'Sidamulih', bpsCode: '32.18.10' }
                ]
            }, {
                name: 'Bogor',
                bpscode: '32.71',
                districts: [
                    { name: 'Bogor Selatan', bpsCode: '32.71.01' },
                    { name: 'Bogor Timur', bpsCode: '32.71.02' },
                    { name: 'Bogor Tengah', bpsCode: '32.71.03' },
                    { name: 'Bogor Barat', bpsCode: '32.71.04' },
                    { name: 'Bogor Utara', bpsCode: '32.71.05' },
                    { name: 'Tanah Sareal (Tanah Sereal)', bpsCode: '32.71.06' }
                ]
            }, {
                name: 'Sukabumi',
                bpscode: '32.72',
                districts: [
                    { name: 'Gunungpuyuh (Gunung Puyuh)', bpsCode: '32.72.01' },
                    { name: 'Cikole', bpsCode: '32.72.02' },
                    { name: 'Citamiang', bpsCode: '32.72.03' },
                    { name: 'Warudoyong', bpsCode: '32.72.04' },
                    { name: 'Baros', bpsCode: '32.72.05' },
                    { name: 'Lembursitu', bpsCode: '32.72.06' },
                    { name: 'Cibeureum', bpsCode: '32.72.07' }
                ]
            }, {
                name: 'Bandung',
                bpscode: '32.73',
                districts: [
                    { name: 'Sukasari', bpsCode: '32.73.01' },
                    { name: 'Coblong', bpsCode: '32.73.02' },
                    { name: 'Babakan Ciparay', bpsCode: '32.73.03' },
                    { name: 'Bojongloa Kaler', bpsCode: '32.73.04' },
                    { name: 'Andir', bpsCode: '32.73.05' },
                    { name: 'Cicendo', bpsCode: '32.73.06' },
                    { name: 'Sukajadi', bpsCode: '32.73.07' },
                    { name: 'Cidadap', bpsCode: '32.73.08' },
                    { name: 'Bandung Wetan', bpsCode: '32.73.09' },
                    { name: 'Astana Anyar', bpsCode: '32.73.10' },
                    { name: 'Regol', bpsCode: '32.73.11' },
                    { name: 'Batununggal', bpsCode: '32.73.12' },
                    { name: 'Lengkong', bpsCode: '32.73.13' },
                    { name: 'Cibeunying Kidul', bpsCode: '32.73.14' },
                    { name: 'Bandung Kulon', bpsCode: '32.73.15' },
                    { name: 'Kiaracondong', bpsCode: '32.73.16' },
                    { name: 'Bojongloa Kidul', bpsCode: '32.73.17' },
                    { name: 'Cibeunying Kaler', bpsCode: '32.73.18' },
                    { name: 'Sumur Bandung', bpsCode: '32.73.19' },
                    { name: 'Antapani (Cicadas)', bpsCode: '32.73.20' },
                    { name: 'Bandung Kidul', bpsCode: '32.73.21' },
                    { name: 'Buahbatu (Margacinta)', bpsCode: '32.73.22' },
                    { name: 'Rancasari', bpsCode: '32.73.23' },
                    { name: 'Arcamanik', bpsCode: '32.73.24' },
                    { name: 'Cibiru', bpsCode: '32.73.25' },
                    { name: 'Ujungberung (Ujung Berung)', bpsCode: '32.73.26' },
                    { name: 'Gedebage', bpsCode: '32.73.27' },
                    { name: 'Panyileukan', bpsCode: '32.73.28' },
                    { name: 'Cinambo', bpsCode: '32.73.29' },
                    { name: 'Mandalajati', bpsCode: '32.73.30' }
                ]
            }, {
                name: 'Cirebon',
                bpscode: '32.74',
                districts: [
                    { name: 'Kejaksan', bpsCode: '32.74.01' },
                    { name: 'Lemah Wungkuk (Lemahwungkuk)', bpsCode: '32.74.02' },
                    { name: 'Harjamukti', bpsCode: '32.74.03' },
                    { name: 'Pekalipan', bpsCode: '32.74.04' },
                    { name: 'Kesambi', bpsCode: '32.74.05' }
                ]
            }, {
                name: 'Bekasi',
                bpscode: '32.75',
                districts: [
                    { name: 'Bekasi Timur', bpsCode: '32.75.01' },
                    { name: 'Bekasi Barat', bpsCode: '32.75.02' },
                    { name: 'Bekasi Utara', bpsCode: '32.75.03' },
                    { name: 'Bekasi Selatan', bpsCode: '32.75.04' },
                    { name: 'Rawalumbu', bpsCode: '32.75.05' },
                    { name: 'Medansatria (Medan Satria)', bpsCode: '32.75.06' },
                    { name: 'Bantargebang (Bantar Gebang)', bpsCode: '32.75.07' },
                    { name: 'Pondokgede (Pondok Gede)', bpsCode: '32.75.08' },
                    { name: 'Jatiasih', bpsCode: '32.75.09' },
                    { name: 'Jatisampurna (Jati Sampurna)', bpsCode: '32.75.10' },
                    { name: 'Mustikajaya (Mustika Jaya)', bpsCode: '32.75.11' },
                    { name: 'Pondokmelati (Pondok Melati)', bpsCode: '32.75.12' }
                ]
            }, {
                name: 'Depok',
                bpscode: '32.76',
                districts: [
                    { name: 'Pancoran Mas', bpsCode: '32.76.01' },
                    { name: 'Cimanggis', bpsCode: '32.76.02' },
                    { name: 'Sawangan', bpsCode: '32.76.03' },
                    { name: 'Limo', bpsCode: '32.76.04' },
                    { name: 'Sukmajaya', bpsCode: '32.76.05' },
                    { name: 'Beji', bpsCode: '32.76.06' },
                    { name: 'Cipayung', bpsCode: '32.76.07' },
                    { name: 'Cilodong', bpsCode: '32.76.08' },
                    { name: 'Cinere', bpsCode: '32.76.09' },
                    { name: 'Tapos', bpsCode: '32.76.10' },
                    { name: 'Bojongsari', bpsCode: '32.76.11' }
                ]
            }, {
                name: 'Cimahi',
                bpscode: '32.77',
                districts: [
                    { name: 'Cimahi Selatan', bpsCode: '32.77.01' },
                    { name: 'Cimahi Tengah', bpsCode: '32.77.02' },
                    { name: 'Cimahi Utara', bpsCode: '32.77.03' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.78',
                districts: [
                    { name: 'Cihideung', bpsCode: '32.78.01' },
                    { name: 'Cipedes', bpsCode: '32.78.02' },
                    { name: 'Tawang', bpsCode: '32.78.03' },
                    { name: 'Indihiang', bpsCode: '32.78.04' },
                    { name: 'Kawalu', bpsCode: '32.78.05' },
                    { name: 'Cibeureum', bpsCode: '32.78.06' },
                    { name: 'Tamansari', bpsCode: '32.78.07' },
                    { name: 'Mangkubumi', bpsCode: '32.78.08' },
                    { name: 'Bungursari', bpsCode: '32.78.09' },
                    { name: 'Purbaratu', bpsCode: '32.78.10' }
                ]
            }, {
                name: 'Banjar',
                bpscode: '32.79',
                districts: [
                    { name: 'Banjar', bpsCode: '32.79.01' },
                    { name: 'Pataruman', bpsCode: '32.79.02' },
                    { name: 'Purwaharja', bpsCode: '32.79.03' },
                    { name: 'Langensari', bpsCode: '32.79.04' }
                ]
            }
        ]
    },
    JI: {
        regencies: [
            {
                name: 'Pacitan',
                bpscode: '35.01',
                districts: []
            }, {
                name: 'Ponorogo',
                bpscode: '35.02',
                districts: []
            }, {
                name: 'Trenggalek',
                bpscode: '35.03',
                districts: []
            }, {
                name: 'Tulungagung',
                bpscode: '35.04',
                districts: []
            }, {
                name: 'Blitar',
                bpscode: '35.05',
                districts: []
            }, {
                name: 'Kediri',
                bpscode: '35.06',
                districts: []
            }, {
                name: 'Malang',
                bpscode: '35.07',
                districts: []
            }, {
                name: 'Lumajang',
                bpscode: '35.08',
                districts: []
            }, {
                name: 'Jember',
                bpscode: '35.09',
                districts: []
            }, {
                name: 'Banyuwangi',
                bpscode: '35.10',
                districts: []
            }, {
                name: 'Bondowoso',
                bpscode: '35.11',
                districts: []
            }, {
                name: 'Situbondo',
                bpscode: '35.12',
                districts: []
            }, {
                name: 'Probolinggo',
                bpscode: '35.13',
                districts: []
            }, {
                name: 'Pasuruan',
                bpscode: '35.14',
                districts: []
            }, {
                name: 'Sidoarjo',
                bpscode: '35.15',
                districts: []
            }, {
                name: 'Mojokerto',
                bpscode: '35.16',
                districts: []
            }, {
                name: 'Jombang',
                bpscode: '35.17',
                districts: []
            }, {
                name: 'Nganjuk',
                bpscode: '35.18',
                districts: []
            }, {
                name: 'Madiun',
                bpscode: '35.19',
                districts: []
            }, {
                name: 'Magetan',
                bpscode: '35.20',
                districts: []
            }, {
                name: 'Ngawi',
                bpscode: '35.21',
                districts: []
            }, {
                name: 'Bojonegoro',
                bpscode: '35.22',
                districts: []
            }, {
                name: 'Tuban',
                bpscode: '35.23',
                districts: []
            }, {
                name: 'Lamongan',
                bpscode: '35.24',
                districts: []
            }, {
                name: 'Gresik',
                bpscode: '35.25',
                districts: []
            }, {
                name: 'Bangkalan',
                bpscode: '35.26',
                districts: []
            }, {
                name: 'Sampang',
                bpscode: '35.27',
                districts: []
            }, {
                name: 'Pamekasan',
                bpscode: '35.28',
                districts: []
            }, {
                name: 'Sumenep',
                bpscode: '35.29',
                districts: []
            }, {
                name: 'Kediri',
                bpscode: '35.71',
                districts: []
            }, {
                name: 'Blitar',
                bpscode: '35.72',
                districts: []
            }, {
                name: 'Malang',
                bpscode: '35.73',
                districts: []
            }, {
                name: 'Probolinggo',
                bpscode: '35.74',
                districts: []
            }, {
                name: 'Pasuruan',
                bpscode: '35.75',
                districts: []
            }, {
                name: 'Mojokerto',
                bpscode: '35.76',
                districts: []
            }, {
                name: 'Madiun',
                bpscode: '35.77',
                districts: []
            }, {
                name: 'Surabaya',
                bpscode: '35.78',
                districts: []
            }, {
                name: 'Batu',
                bpscode: '35.79',
                districts: []
            },
        ]
    },
    JK: {
        regencies: [
            {
                name: 'Kepulauan Seribu',
                bpscode: '31.01',
                districts: []
            }, {
                name: 'Jakarta Pusat',
                bpscode: '31.71',
                districts: []
            }, {
                name: 'Jakarta Utara',
                bpscode: '31.72',
                districts: []
            }, {
                name: 'Jakarta Barat',
                bpscode: '31.73',
                districts: []
            }, {
                name: 'Jakarta Selatan',
                bpscode: '31.74',
                districts: []
            }, {
                name: 'Jakarta Timur',
                bpscode: '31.75',
                districts: []
            },
        ]
    },
    JT: {
        regencies: [
            {
                name: 'Cilacap',
                bpscode: '33.01',
                districts: []
            }, {
                name: 'Banyumas',
                bpscode: '33.02',
                districts: []
            }, {
                name: 'Purbalingga',
                bpscode: '33.03',
                districts: []
            }, {
                name: 'Banjarnegara',
                bpscode: '33.04',
                districts: []
            }, {
                name: 'Kebumen',
                bpscode: '33.05',
                districts: []
            }, {
                name: 'Purworejo',
                bpscode: '33.06',
                districts: []
            }, {
                name: 'Wonosobo',
                bpscode: '33.07',
                districts: []
            }, {
                name: 'Magelang',
                bpscode: '33.08',
                districts: []
            }, {
                name: 'Boyolali',
                bpscode: '33.09',
                districts: []
            }, {
                name: 'Klaten',
                bpscode: '33.10',
                districts: []
            }, {
                name: 'Sukoharjo',
                bpscode: '33.11',
                districts: []
            }, {
                name: 'Wonogiri',
                bpscode: '33.12',
                districts: []
            }, {
                name: 'Karanganyar',
                bpscode: '33.13',
                districts: []
            }, {
                name: 'Sragen',
                bpscode: '33.14',
                districts: []
            }, {
                name: 'Grobogan',
                bpscode: '33.15',
                districts: []
            }, {
                name: 'Blora',
                bpscode: '33.16',
                districts: []
            }, {
                name: 'Rembang',
                bpscode: '33.17',
                districts: []
            }, {
                name: 'Pati',
                bpscode: '33.18',
                districts: []
            }, {
                name: 'Kudus',
                bpscode: '33.19',
                districts: []
            }, {
                name: 'Jepara',
                bpscode: '33.20',
                districts: []
            }, {
                name: 'Demak',
                bpscode: '33.21',
                districts: []
            }, {
                name: 'Semarang',
                bpscode: '33.22',
                districts: []
            }, {
                name: 'Temanggung',
                bpscode: '33.23',
                districts: []
            }, {
                name: 'Kendal',
                bpscode: '33.24',
                districts: []
            }, {
                name: 'Batang',
                bpscode: '33.25',
                districts: []
            }, {
                name: 'Pekalongan',
                bpscode: '33.26',
                districts: []
            }, {
                name: 'Pemalang',
                bpscode: '33.27',
                districts: []
            }, {
                name: 'Tegal',
                bpscode: '33.28',
                districts: []
            }, {
                name: 'Brebes',
                bpscode: '33.29',
                districts: []
            }, {
                name: 'Magelang',
                bpscode: '33.71',
                districts: []
            }, {
                name: 'Surakarta',
                bpscode: '33.72',
                districts: []
            }, {
                name: 'Salatiga',
                bpscode: '33.73',
                districts: []
            }, {
                name: 'Semarang',
                bpscode: '33.74',
                districts: []
            }, {
                name: 'Pekalongan',
                bpscode: '33.75',
                districts: []
            }, {
                name: 'Tegal',
                bpscode: '33.76',
                districts: []
            },
        ]
    },
    KB: {
        regencies: [
            {
                name: 'Sambas',
                bpscode: '61.01',
                districts: []
            }, {
                name: 'Mempawah',
                bpscode: '61.02',
                districts: []
            }, {
                name: 'Sanggau',
                bpscode: '61.03',
                districts: []
            }, {
                name: 'Ketapang',
                bpscode: '61.04',
                districts: []
            }, {
                name: 'Sintang',
                bpscode: '61.05',
                districts: []
            }, {
                name: 'Kapuas Hulu',
                bpscode: '61.06',
                districts: []
            }, {
                name: 'Bengkayang',
                bpscode: '61.07',
                districts: []
            }, {
                name: 'Landak',
                bpscode: '61.08',
                districts: []
            }, {
                name: 'Sekadau',
                bpscode: '61.09',
                districts: []
            }, {
                name: 'Melawi',
                bpscode: '61.10',
                districts: []
            }, {
                name: 'Kayong Utara',
                bpscode: '61.11',
                districts: []
            }, {
                name: 'Kubu Raya',
                bpscode: '61.12',
                districts: []
            }, {
                name: 'Pontianak',
                bpscode: '61.71',
                districts: []
            }, {
                name: 'Singkawang',
                bpscode: '61.72',
                districts: []
            },
        ]
    },
    KI: {
        regencies: [
            {
                name: 'Paser',
                bpscode: '64.01',
                districts: []
            }, {
                name: 'Kutai Kartanegara',
                bpscode: '64.02',
                districts: []
            }, {
                name: 'Berau',
                bpscode: '64.03',
                districts: []
            }, {
                name: 'Kutai Barat',
                bpscode: '64.07',
                districts: []
            }, {
                name: 'Kutai Timur',
                bpscode: '64.08',
                districts: []
            }, {
                name: 'Penajam Paser Utara',
                bpscode: '64.09',
                districts: []
            }, {
                name: 'Mahakam Ulu',
                bpscode: '64.11',
                districts: []
            }, {
                name: 'Balikpapan',
                bpscode: '64.71',
                districts: []
            }, {
                name: 'Samarinda',
                bpscode: '64.72',
                districts: []
            }, {
                name: 'Bontang',
                bpscode: '64.74',
                districts: []
            },
        ]
    },
    KR: {
        regencies: [
            {
                name: 'Bintan',
                bpscode: '21.01',
                districts: []
            }, {
                name: 'Karimun',
                bpscode: '21.02',
                districts: []
            }, {
                name: 'Natuna',
                bpscode: '21.03',
                districts: []
            }, {
                name: 'Lingga',
                bpscode: '21.04',
                districts: []
            }, {
                name: 'Kepulauan Anambas',
                bpscode: '21.05',
                districts: []
            }, {
                name: 'Batam',
                bpscode: '21.71',
                districts: []
            }, {
                name: 'Tanjung Pinang',
                bpscode: '21.72',
                districts: []
            },
        ]
    },
    KS: {
        regencies: [
            {
                name: 'Tanah Laut',
                bpscode: '63.01',
                districts: []
            }, {
                name: 'Kotabaru',
                bpscode: '63.02',
                districts: []
            }, {
                name: 'Banjar',
                bpscode: '63.03',
                districts: []
            }, {
                name: 'Barito Kuala',
                bpscode: '63.04',
                districts: []
            }, {
                name: 'Tapin',
                bpscode: '63.05',
                districts: []
            }, {
                name: 'Hulu Sungai Selatan',
                bpscode: '63.06',
                districts: []
            }, {
                name: 'Hulu Sungai Tengah',
                bpscode: '63.07',
                districts: []
            }, {
                name: 'Hulu Sungai Utara',
                bpscode: '63.08',
                districts: []
            }, {
                name: 'Tabalong',
                bpscode: '63.09',
                districts: []
            }, {
                name: 'Tanah Bumbu',
                bpscode: '63.10',
                districts: []
            }, {
                name: 'Balangan',
                bpscode: '63.11',
                districts: []
            }, {
                name: 'Banjarmasin',
                bpscode: '63.71',
                districts: []
            }, {
                name: 'Banjarbaru',
                bpscode: '63.72',
                districts: []
            },
        ]
    },
    KT: {
        regencies: [
            {
                name: 'Kotawaringin Barat',
                bpscode: '62.01',
                districts: []
            }, {
                name: 'Kotawaringin Timur',
                bpscode: '62.02',
                districts: []
            }, {
                name: 'Kapuas',
                bpscode: '62.03',
                districts: []
            }, {
                name: 'Barito Selatan',
                bpscode: '62.04',
                districts: []
            }, {
                name: 'Barito Utara',
                bpscode: '62.05',
                districts: []
            }, {
                name: 'Katingan',
                bpscode: '62.06',
                districts: []
            }, {
                name: 'Seruyan',
                bpscode: '62.07',
                districts: []
            }, {
                name: 'Sukamara',
                bpscode: '62.08',
                districts: []
            }, {
                name: 'Lamandau',
                bpscode: '62.09',
                districts: []
            }, {
                name: 'Gunung Mas',
                bpscode: '62.10',
                districts: []
            }, {
                name: 'Pulang Pisau',
                bpscode: '62.11',
                districts: []
            }, {
                name: 'Murung Raya',
                bpscode: '62.12',
                districts: []
            }, {
                name: 'Barito Timur',
                bpscode: '62.13',
                districts: []
            }, {
                name: 'Palangka Raya',
                bpscode: '62.71',
                districts: []
            },
        ]
    },
    KU: {
        regencies: [
            {
                name: 'Bulungan',
                bpscode: '65.01',
                districts: []
            }, {
                name: 'Malinau',
                bpscode: '65.02',
                districts: []
            }, {
                name: 'Nunukan',
                bpscode: '65.03',
                districts: []
            }, {
                name: 'Tana Tidung',
                bpscode: '65.04',
                districts: []
            }, {
                name: 'Tarakan',
                bpscode: '65.71',
                districts: []
            },
        ]
    },
    LA: {
        regencies: [
            {
                name: 'Lampung Selatan',
                bpscode: '18.01',
                districts: []
            }, {
                name: 'Lampung Tengah',
                bpscode: '18.02',
                districts: []
            }, {
                name: 'Lampung Utara',
                bpscode: '18.03',
                districts: []
            }, {
                name: 'Lampung Barat',
                bpscode: '18.04',
                districts: []
            }, {
                name: 'Tulang Bawang',
                bpscode: '18.05',
                districts: []
            }, {
                name: 'Tanggamus',
                bpscode: '18.06',
                districts: []
            }, {
                name: 'Lampung Timur',
                bpscode: '18.07',
                districts: []
            }, {
                name: 'Way Kanan',
                bpscode: '18.08',
                districts: []
            }, {
                name: 'Pesawaran',
                bpscode: '18.09',
                districts: []
            }, {
                name: 'Pringsewu',
                bpscode: '18.10',
                districts: []
            }, {
                name: 'Mesuji',
                bpscode: '18.11',
                districts: []
            }, {
                name: 'Tulang Bawang Barat',
                bpscode: '18.12',
                districts: []
            }, {
                name: 'Pesisir Barat',
                bpscode: '18.13',
                districts: []
            }, {
                name: 'Bandar Lampung',
                bpscode: '18.71',
                districts: []
            }, {
                name: 'Metro',
                bpscode: '18.72',
                districts: []
            },
        ]
    },
    MA: {
        regencies: [
            {
                name: 'Maluku Tengah',
                bpscode: '81.01',
                districts: []
            }, {
                name: 'Maluku Tenggara',
                bpscode: '81.02',
                districts: []
            }, {
                name: 'Maluku Tenggara Barat',
                bpscode: '81.03',
                districts: []
            }, {
                name: 'Buru',
                bpscode: '81.04',
                districts: []
            }, {
                name: 'Seram Bagian Timur',
                bpscode: '81.05',
                districts: []
            }, {
                name: 'Seram Bagian Barat',
                bpscode: '81.06',
                districts: []
            }, {
                name: 'Kepulauan Aru',
                bpscode: '81.07',
                districts: []
            }, {
                name: 'Maluku Barat Daya',
                bpscode: '81.08',
                districts: []
            }, {
                name: 'Buru Selatan',
                bpscode: '81.09',
                districts: []
            }, {
                name: 'Ambon',
                bpscode: '81.71',
                districts: []
            }, {
                name: 'Tual',
                bpscode: '81.72',
                districts: []
            },
        ]
    },
    MU: {
        regencies: [
            {
                name: 'Halmahera Barat',
                bpscode: '82.01',
                districts: []
            }, {
                name: 'Halmahera Tengah',
                bpscode: '82.02',
                districts: []
            }, {
                name: 'Halmahera Utara',
                bpscode: '82.03',
                districts: []
            }, {
                name: 'Halmahera Selatan',
                bpscode: '82.04',
                districts: []
            }, {
                name: 'Kepulauan Sula',
                bpscode: '82.05',
                districts: []
            }, {
                name: 'Halmahera Timur',
                bpscode: '82.06',
                districts: []
            }, {
                name: 'Pulau Morotai',
                bpscode: '82.07',
                districts: []
            }, {
                name: 'Pulau Taliabu',
                bpscode: '82.08',
                districts: []
            }, {
                name: 'Ternate',
                bpscode: '82.71',
                districts: []
            }, {
                name: 'Tidore Kepulauan',
                bpscode: '82.72',
                districts: []
            },
        ]
    },
    NB: {
        regencies: [
            {
                name: 'Lombok Barat',
                bpscode: '52.01',
                districts: []
            }, {
                name: 'Lombok Tengah',
                bpscode: '52.02',
                districts: []
            }, {
                name: 'Lombok Timur',
                bpscode: '52.03',
                districts: []
            }, {
                name: 'Sumbawa',
                bpscode: '52.04',
                districts: []
            }, {
                name: 'Dompu',
                bpscode: '52.05',
                districts: []
            }, {
                name: 'Bima',
                bpscode: '52.06',
                districts: []
            }, {
                name: 'Sumbawa Barat',
                bpscode: '52.07',
                districts: []
            }, {
                name: 'Lombok Utara',
                bpscode: '52.08',
                districts: []
            }, {
                name: 'Mataram',
                bpscode: '52.71',
                districts: []
            }, {
                name: 'Bima',
                bpscode: '52.72',
                districts: []
            },
        ]
    },
    NT: {
        regencies: [
            {
                name: 'Kupang',
                bpscode: '53.01',
                districts: []
            }, {
                name: 'Timor Tengah Selatan',
                bpscode: '53.02',
                districts: []
            }, {
                name: 'Timor Tengah Utara',
                bpscode: '53.03',
                districts: []
            }, {
                name: 'Belu',
                bpscode: '53.04',
                districts: []
            }, {
                name: 'Alor',
                bpscode: '53.05',
                districts: []
            }, {
                name: 'Flores Timur',
                bpscode: '53.06',
                districts: []
            }, {
                name: 'Sikka',
                bpscode: '53.07',
                districts: []
            }, {
                name: 'Ende',
                bpscode: '53.08',
                districts: []
            }, {
                name: 'Ngada',
                bpscode: '53.09',
                districts: []
            }, {
                name: 'Manggarai',
                bpscode: '53.10',
                districts: []
            }, {
                name: 'Sumba Timur',
                bpscode: '53.11',
                districts: []
            }, {
                name: 'Sumba Barat',
                bpscode: '53.12',
                districts: []
            }, {
                name: 'Lembata',
                bpscode: '53.13',
                districts: []
            }, {
                name: 'Rote Ndao',
                bpscode: '53.14',
                districts: []
            }, {
                name: 'Manggarai Barat',
                bpscode: '53.15',
                districts: []
            }, {
                name: 'Nagekeo',
                bpscode: '53.16',
                districts: []
            }, {
                name: 'Sumba Tengah',
                bpscode: '53.17',
                districts: []
            }, {
                name: 'Sumba Barat Daya',
                bpscode: '53.18',
                districts: []
            }, {
                name: 'Manggarai Timur',
                bpscode: '53.19',
                districts: []
            }, {
                name: 'Sabu Raijua',
                bpscode: '53.20',
                districts: []
            }, {
                name: 'Malaka',
                bpscode: '53.21',
                districts: []
            }, {
                name: 'Kupang',
                bpscode: '53.71',
                districts: []
            },
        ]
    },
    PA: {
        regencies: [
            {
                name: 'Sorong',
                bpscode: '92.01',
                districts: []
            }, {
                name: 'Manokwari',
                bpscode: '92.02',
                districts: []
            }, {
                name: 'Fakfak',
                bpscode: '92.03',
                districts: []
            }, {
                name: 'Sorong Selatan',
                bpscode: '92.04',
                districts: []
            }, {
                name: 'Raja Ampat',
                bpscode: '92.05',
                districts: []
            }, {
                name: 'Teluk Bintuni',
                bpscode: '92.06',
                districts: []
            }, {
                name: 'Teluk Wondama',
                bpscode: '92.07',
                districts: []
            }, {
                name: 'Kaimana',
                bpscode: '92.08',
                districts: []
            }, {
                name: 'Tambrauw',
                bpscode: '92.09',
                districts: []
            }, {
                name: 'Maybrat',
                bpscode: '92.10',
                districts: []
            }, {
                name: 'Manokwari Selatan',
                bpscode: '92.11',
                districts: []
            }, {
                name: 'Pegunungan Arfak',
                bpscode: '92.12',
                districts: []
            }, {
                name: 'Sorong',
                bpscode: '92.71',
                districts: []
            }
        ]
    },
    PB: {
        regencies: [
            {
                name: 'Merauke',
                bpscode: '91.01',
                districts: []
            }, {
                name: 'Jayawijaya',
                bpscode: '91.02',
                districts: []
            }, {
                name: 'Jayapura',
                bpscode: '91.03',
                districts: []
            }, {
                name: 'Nabire',
                bpscode: '91.04',
                districts: []
            }, {
                name: 'Kepulauan Yapen',
                bpscode: '91.05',
                districts: []
            }, {
                name: 'Biak Numfor',
                bpscode: '91.06',
                districts: []
            }, {
                name: 'Puncak Jaya',
                bpscode: '91.07',
                districts: []
            }, {
                name: 'Paniai',
                bpscode: '91.08',
                districts: []
            }, {
                name: 'Mimika',
                bpscode: '91.09',
                districts: []
            }, {
                name: 'Sarmi',
                bpscode: '91.10',
                districts: []
            }, {
                name: 'Keerom',
                bpscode: '91.11',
                districts: []
            }, {
                name: 'Pegunungan Bintang',
                bpscode: '91.12',
                districts: []
            }, {
                name: 'Yahukimo',
                bpscode: '91.13',
                districts: []
            }, {
                name: 'Tolikara',
                bpscode: '91.14',
                districts: []
            }, {
                name: 'Waropen',
                bpscode: '91.15',
                districts: []
            }, {
                name: 'Boven Digoel',
                bpscode: '91.16',
                districts: []
            }, {
                name: 'Mappi',
                bpscode: '91.17',
                districts: []
            }, {
                name: 'Asmat',
                bpscode: '91.18',
                districts: []
            }, {
                name: 'Supiori',
                bpscode: '91.19',
                districts: []
            }, {
                name: 'Mamberamo Raya',
                bpscode: '91.20',
                districts: []
            }, {
                name: 'Mamberamo Tengah',
                bpscode: '91.21',
                districts: []
            }, {
                name: 'Yalimo',
                bpscode: '91.22',
                districts: []
            }, {
                name: 'Lanny Jaya',
                bpscode: '91.23',
                districts: []
            }, {
                name: 'Nduga',
                bpscode: '91.24',
                districts: []
            }, {
                name: 'Puncak',
                bpscode: '91.25',
                districts: []
            }, {
                name: 'Dogiyai',
                bpscode: '91.26',
                districts: []
            }, {
                name: 'Intan Jaya',
                bpscode: '91.27',
                districts: []
            }, {
                name: 'Deiyai',
                bpscode: '91.28',
                districts: []
            }, {
                name: 'Jayapura',
                bpscode: '91.71',
                districts: []
            },
        ]
    },
    RI: {
        regencies: [
            {
                name: 'Kampar',
                bpscode: '14.01',
                districts: []
            }, {
                name: 'Indragiri Hulu',
                bpscode: '14.02',
                districts: []
            }, {
                name: 'Bengkalis',
                bpscode: '14.03',
                districts: []
            }, {
                name: 'Indragiri Hilir',
                bpscode: '14.04',
                districts: []
            }, {
                name: 'Pelalawan',
                bpscode: '14.05',
                districts: []
            }, {
                name: 'Rokan Hulu',
                bpscode: '14.06',
                districts: []
            }, {
                name: 'Rokan Hilir',
                bpscode: '14.07',
                districts: []
            }, {
                name: 'Siak',
                bpscode: '14.08',
                districts: []
            }, {
                name: 'Kuantan Singingi',
                bpscode: '14.09',
                districts: []
            }, {
                name: 'Kepulauan Meranti',
                bpscode: '14.10',
                districts: []
            }, {
                name: 'Pekanbaru',
                bpscode: '14.71',
                districts: []
            }, {
                name: 'Dumai',
                bpscode: '14.72',
                districts: []
            }
        ]
    },
    SA: {
        regencies: [
            {
                name: 'Bolaang Mongondow',
                bpscode: '71.01',
                districts: []
            }, {
                name: 'Minahasa',
                bpscode: '71.02',
                districts: []
            }, {
                name: 'Kepulauan Sangihe',
                bpscode: '71.03',
                districts: []
            }, {
                name: 'Kepulauan Talaud',
                bpscode: '71.04',
                districts: []
            }, {
                name: 'Minahasa Selatan',
                bpscode: '71.05',
                districts: []
            }, {
                name: 'Minahasa Utara',
                bpscode: '71.06',
                districts: []
            }, {
                name: 'Minahasa Tenggara',
                bpscode: '71.07',
                districts: []
            }, {
                name: 'Bolaang Mongondow Utara',
                bpscode: '71.08',
                districts: []
            }, {
                name: 'Kepulauan Siau Tagulandang Biaro (Sitaro)',
                bpscode: '71.09',
                districts: []
            }, {
                name: 'Bolaang Mongondow Timur',
                bpscode: '71.10',
                districts: []
            }, {
                name: 'Bolaang Mongondow Selatan',
                bpscode: '71.11',
                districts: []
            }, {
                name: 'Manado',
                bpscode: '71.71',
                districts: []
            }, {
                name: 'Bitung',
                bpscode: '71.72',
                districts: []
            }, {
                name: 'Tomohon',
                bpscode: '71.73',
                districts: []
            }, {
                name: 'Kotamobagu',
                bpscode: '71.74',
                districts: []
            },
        ]
    },
    SB: {
        regencies: [
            {
                name: 'Pesisir Selatan',
                bpscode: '13.01',
                districts: []
            }, {
                name: 'Solok',
                bpscode: '13.02',
                districts: []
            }, {
                name: 'Sijunjung',
                bpscode: '13.03',
                districts: []
            }, {
                name: 'Tanah Datar',
                bpscode: '13.04',
                districts: []
            }, {
                name: 'Padang Pariaman',
                bpscode: '13.05',
                districts: []
            }, {
                name: 'Agam',
                bpscode: '13.06',
                districts: []
            }, {
                name: 'Lima Puluh Kota',
                bpscode: '13.07',
                districts: []
            }, {
                name: 'Pasaman',
                bpscode: '13.08',
                districts: []
            }, {
                name: 'Kepulauan Mentawai',
                bpscode: '13.09',
                districts: []
            }, {
                name: 'Dharmasraya',
                bpscode: '13.10',
                districts: []
            }, {
                name: 'Solok Selatan',
                bpscode: '13.11',
                districts: []
            }, {
                name: 'Pasaman Barat',
                bpscode: '13.12',
                districts: []
            }, {
                name: 'Padang',
                bpscode: '13.71',
                districts: []
            }, {
                name: 'Solok',
                bpscode: '13.72',
                districts: []
            }, {
                name: 'Sawah Lunto',
                bpscode: '13.73',
                districts: []
            }, {
                name: 'Padang Panjang',
                bpscode: '13.74',
                districts: []
            }, {
                name: 'Bukittinggi',
                bpscode: '13.75',
                districts: []
            }, {
                name: 'Payakumbuh',
                bpscode: '13.76',
                districts: []
            }, {
                name: 'Pariaman',
                bpscode: '13.77',
                districts: []
            }
        ]
    },
    SG: {
        regencies: [
            {
                name: 'Kolaka',
                bpscode: '74.01',
                districts: []
            }, {
                name: 'Konawe',
                bpscode: '74.02',
                districts: []
            }, {
                name: 'Muna',
                bpscode: '74.03',
                districts: []
            }, {
                name: 'Buton',
                bpscode: '74.04',
                districts: []
            }, {
                name: 'Konawe Selatan',
                bpscode: '74.05',
                districts: []
            }, {
                name: 'Bombana',
                bpscode: '74.06',
                districts: []
            }, {
                name: 'Wakatobi',
                bpscode: '74.07',
                districts: []
            }, {
                name: 'Kolaka Utara',
                bpscode: '74.08',
                districts: []
            }, {
                name: 'Konawe Utara',
                bpscode: '74.09',
                districts: []
            }, {
                name: 'Buton Utara',
                bpscode: '74.10',
                districts: []
            }, {
                name: 'Kolaka Timur',
                bpscode: '74.11',
                districts: []
            }, {
                name: 'Konawe Kepulauan',
                bpscode: '74.12',
                districts: []
            }, {
                name: 'Muna Barat',
                bpscode: '74.13',
                districts: []
            }, {
                name: 'Buton Tengah',
                bpscode: '74.14',
                districts: []
            }, {
                name: 'Buton Selatan',
                bpscode: '74.15',
                districts: []
            }, {
                name: 'Kendari',
                bpscode: '74.71',
                districts: []
            }, {
                name: 'Bau-Bau',
                bpscode: '74.72',
                districts: []
            },
        ]
    },
    SN: {
        regencies: [
            {
                name: 'Kepulauan Selayar',
                bpscode: '73.01',
                districts: []
            }, {
                name: 'Bulukumba',
                bpscode: '73.02',
                districts: []
            }, {
                name: 'Bantaeng',
                bpscode: '73.03',
                districts: []
            }, {
                name: 'Jeneponto',
                bpscode: '73.04',
                districts: []
            }, {
                name: 'Takalar',
                bpscode: '73.05',
                districts: []
            }, {
                name: 'Gowa',
                bpscode: '73.06',
                districts: []
            }, {
                name: 'Sinjai',
                bpscode: '73.07',
                districts: []
            }, {
                name: 'Bone',
                bpscode: '73.08',
                districts: []
            }, {
                name: 'Maros',
                bpscode: '73.09',
                districts: []
            }, {
                name: 'Pangkajene Kepulauan',
                bpscode: '73.10',
                districts: []
            }, {
                name: 'Barru',
                bpscode: '73.11',
                districts: []
            }, {
                name: 'Soppeng',
                bpscode: '73.12',
                districts: []
            }, {
                name: 'Wajo',
                bpscode: '73.13',
                districts: []
            }, {
                name: 'Sidenreng Rappang',
                bpscode: '73.14',
                districts: []
            }, {
                name: 'Pinrang',
                bpscode: '73.15',
                districts: []
            }, {
                name: 'Enrekang',
                bpscode: '73.16',
                districts: []
            }, {
                name: 'Luwu',
                bpscode: '73.17',
                districts: []
            }, {
                name: 'Tana Toraja',
                bpscode: '73.18',
                districts: []
            }, {
                name: 'Luwu Utara',
                bpscode: '73.22',
                districts: []
            }, {
                name: 'Luwu Timur',
                bpscode: '73.24',
                districts: []
            }, {
                name: 'Toraja Utara',
                bpscode: '73.26',
                districts: []
            }, {
                name: 'Makassar',
                bpscode: '73.71',
                districts: []
            }, {
                name: 'Parepare',
                bpscode: '73.72',
                districts: []
            }, {
                name: 'Palopo',
                bpscode: '73.73',
                districts: []
            },
        ]
    },
    SR: {
        regencies: [
            {
                name: 'Mamuju Utara',
                bpscode: '76.01',
                districts: []
            }, {
                name: 'Mamuju',
                bpscode: '76.02',
                districts: []
            }, {
                name: 'Mamasa',
                bpscode: '76.03',
                districts: []
            }, {
                name: 'Polewali Mandar',
                bpscode: '76.04',
                districts: []
            }, {
                name: 'Majene',
                bpscode: '76.05',
                districts: []
            }, {
                name: 'Mamuju Tengah',
                bpscode: '76.06',
                districts: []
            },
        ]
    },
    SS: {
        regencies: [
            {
                name: 'Ogan Komering Ulu',
                bpscode: '16.01',
                districts: []
            }, {
                name: 'Ogan Komering Ilir',
                bpscode: '16.02',
                districts: []
            }, {
                name: 'Muara Enim',
                bpscode: '16.03',
                districts: []
            }, {
                name: 'Lahat',
                bpscode: '16.04',
                districts: []
            }, {
                name: 'Musi Rawas',
                bpscode: '16.05',
                districts: []
            }, {
                name: 'Musi Banyuasin',
                bpscode: '16.06',
                districts: []
            }, {
                name: 'Banyuasin',
                bpscode: '16.07',
                districts: []
            }, {
                name: 'Ogan Komering Ulu Timur',
                bpscode: '16.08',
                districts: []
            }, {
                name: 'Ogan Komering Ulu Selatan',
                bpscode: '16.09',
                districts: []
            }, {
                name: 'Ogan Ilir',
                bpscode: '16.10',
                districts: []
            }, {
                name: 'Empat Lawang',
                bpscode: '16.11',
                districts: []
            }, {
                name: 'Penukal Abab Lematang Ilir',
                bpscode: '16.12',
                districts: []
            }, {
                name: 'Musi Rawas Utara',
                bpscode: '16.13',
                districts: []
            }, {
                name: 'Palembang',
                bpscode: '16.71',
                districts: []
            }, {
                name: 'Pagar Alam',
                bpscode: '16.72',
                districts: []
            }, {
                name: 'Lubuk Linggau',
                bpscode: '16.73',
                districts: []
            }, {
                name: 'Prabumulih',
                bpscode: '16.74',
                districts: []
            },
        ]
    },
    ST: {
        regencies: [
            {
                name: 'Banggai',
                bpscode: '72.01',
                districts: []
            }, {
                name: 'Poso',
                bpscode: '72.02',
                districts: []
            }, {
                name: 'Donggala',
                bpscode: '72.03',
                districts: []
            }, {
                name: 'Toli-Toli',
                bpscode: '72.04',
                districts: []
            }, {
                name: 'Buol',
                bpscode: '72.05',
                districts: []
            }, {
                name: 'Morowali',
                bpscode: '72.06',
                districts: []
            }, {
                name: 'Banggai Kepulauan',
                bpscode: '72.07',
                districts: []
            }, {
                name: 'Parigi Moutong',
                bpscode: '72.08',
                districts: []
            }, {
                name: 'Tojo Una-Una',
                bpscode: '72.09',
                districts: []
            }, {
                name: 'Sigi',
                bpscode: '72.10',
                districts: []
            }, {
                name: 'Banggai Laut',
                bpscode: '72.11',
                districts: []
            }, {
                name: 'Morowali Utara',
                bpscode: '72.12',
                districts: []
            }, {
                name: 'Palu',
                bpscode: '72.71',
                districts: []
            },
        ]
    },
    SU: {
        regencies: [
            {
                name: 'Tapanuli Tengah',
                bpscode: '12.01',
                districts: []
            }, {
                name: 'Tapanuli Utara',
                bpscode: '12.02',
                districts: []
            }, {
                name: 'Tapanuli Selatan',
                bpscode: '12.03',
                districts: []
            }, {
                name: 'Nias',
                bpscode: '12.04',
                districts: []
            }, {
                name: 'Langkat',
                bpscode: '12.05',
                districts: []
            }, {
                name: 'Karo',
                bpscode: '12.06',
                districts: []
            }, {
                name: 'Deli Serdang',
                bpscode: '12.07',
                districts: []
            }, {
                name: 'Simalungun',
                bpscode: '12.08',
                districts: []
            }, {
                name: 'Asahan',
                bpscode: '12.09',
                districts: []
            }, {
                name: 'Labuhanbatu',
                bpscode: '12.10',
                districts: []
            }, {
                name: 'Dairi',
                bpscode: '12.11',
                districts: []
            }, {
                name: 'Toba Samosir',
                bpscode: '12.12',
                districts: []
            }, {
                name: 'Mandailing Natal',
                bpscode: '12.13',
                districts: []
            }, {
                name: 'Nias Selatan',
                bpscode: '12.14',
                districts: []
            }, {
                name: 'Pakpak Bharat',
                bpscode: '12.15',
                districts: []
            }, {
                name: 'Humbang Hasundutan',
                bpscode: '12.16',
                districts: []
            }, {
                name: 'Samosir',
                bpscode: '12.17',
                districts: []
            }, {
                name: 'Serdang Bedagai',
                bpscode: '12.18',
                districts: []
            }, {
                name: 'Batu Bara',
                bpscode: '12.19',
                districts: []
            }, {
                name: 'Padang Lawas Utara',
                bpscode: '12.20',
                districts: []
            }, {
                name: 'Padang Lawas',
                bpscode: '12.21',
                districts: []
            }, {
                name: 'Labuhanbatu Selatan',
                bpscode: '12.22',
                districts: []
            }, {
                name: 'Labuhanbatu Utara',
                bpscode: '12.23',
                districts: []
            }, {
                name: 'Nias Utara',
                bpscode: '12.24',
                districts: []
            }, {
                name: 'Nias Barat',
                bpscode: '12.25',
                districts: []
            }, {
                name: 'Medan',
                bpscode: '12.71',
                districts: []
            }, {
                name: 'Pematang Siantar',
                bpscode: '12.72',
                districts: []
            }, {
                name: 'Sibolga',
                bpscode: '12.73',
                districts: []
            }, {
                name: 'Tanjung Balai',
                bpscode: '12.74',
                districts: []
            }, {
                name: 'Binjai',
                bpscode: '12.75',
                districts: []
            }, {
                name: 'Tebing Tinggi',
                bpscode: '12.76',
                districts: []
            }, {
                name: 'Padang Sidempuan',
                bpscode: '12.77',
                districts: []
            }, {
                name: 'Gunungsitoli',
                bpscode: '12.78',
                districts: []
            }
        ]
    },
    YO: {
        regencies: [
            {
                name: 'Kabupaten Kulon Progo',
                bpsCode: '34.01',
                districts: [
                    { name: 'Temon', bpsCode: '34.01.01' },
                    { name: 'Wates', bpsCode: '34.01.02' },
                    { name: 'Panjatan', bpsCode: '34.01.03' },
                    { name: 'Galur', bpsCode: '34.01.04' },
                    { name: 'Lendah', bpsCode: '34.01.05' },
                    { name: 'Sentolo', bpsCode: '34.01.06' },
                    { name: 'Pengasih', bpsCode: '34.01.07' },
                    { name: 'Kokap', bpsCode: '34.01.08' },
                    { name: 'Girimulyo', bpsCode: '34.01.09' },
                    { name: 'Nanggulan', bpsCode: '34.01.10' },
                    { name: 'Samigaluh', bpsCode: '34.01.11' },
                    { name: 'Kalibawang', bpsCode: '34.01.12' }
                ]
            }, {
                name: 'Kabupaten Bantul',
                bpsCode: '34.02',
                districts: [
                    { name: 'Srandakan', bpsCode: '34.02.01' },
                    { name: 'Sanden', bpsCode: '34.02.02' },
                    { name: 'Kretek', bpsCode: '34.02.03' },
                    { name: 'Pundong', bpsCode: '34.02.04' },
                    { name: 'Bambanglipuro (Bambang Lipuro)', bpsCode: '34.02.05' },
                    { name: 'Pandak', bpsCode: '34.02.06' },
                    { name: 'Pajangan', bpsCode: '34.02.07' },
                    { name: 'Bantul', bpsCode: '34.02.08' },
                    { name: 'Jetis', bpsCode: '34.02.09' },
                    { name: 'Imogiri', bpsCode: '34.02.10' },
                    { name: 'Dlingo', bpsCode: '34.02.11' },
                    { name: 'Banguntapan', bpsCode: '34.02.12' },
                    { name: 'Pleret', bpsCode: '34.02.13' },
                    { name: 'Piyungan', bpsCode: '34.02.14' },
                    { name: 'Sewon', bpsCode: '34.02.15' },
                    { name: 'Kasihan', bpsCode: '34.02.16' },
                    { name: 'Sedayu', bpsCode: '34.02.17' }
                ]
            }, {
                name: 'Kabupaten Gunung Kidul',
                bpsCode: '34.03',
                districts: [
                    { name: 'Wonosari', bpsCode: '34.03.01' },
                    { name: 'Nglipar', bpsCode: '34.03.02' },
                    { name: 'Playen', bpsCode: '34.03.03' },
                    { name: 'Patuk', bpsCode: '34.03.04' },
                    { name: 'Paliyan', bpsCode: '34.03.05' },
                    { name: 'Panggang', bpsCode: '34.03.06' },
                    { name: 'Tepus', bpsCode: '34.03.07' },
                    { name: 'Semanu', bpsCode: '34.03.08' },
                    { name: 'Karangmojo', bpsCode: '34.03.09' },
                    { name: 'Ponjong', bpsCode: '34.03.10' },
                    { name: 'Rongkop', bpsCode: '34.03.11' },
                    { name: 'Semin', bpsCode: '34.03.12' },
                    { name: 'Ngawen', bpsCode: '34.03.13' },
                    { name: 'Gedangsari (Gedang Sari)', bpsCode: '34.03.14' },
                    { name: 'Saptosari (Sapto Sari)', bpsCode: '34.03.15' },
                    { name: 'Girisubo', bpsCode: '34.03.16' },
                    { name: 'Tanjungsari', bpsCode: '34.03.17' },
                    { name: 'Purwosari', bpsCode: '34.03.18' }
                ]
            }, {
                name: 'Kabupaten Sleman',
                bpsCode: '34.04',
                districts: [
                    { name: 'Gamping', bpsCode: '34.04.01' },
                    { name: 'Godean', bpsCode: '34.04.02' },
                    { name: 'Moyudan', bpsCode: '34.04.03' },
                    { name: 'Minggir', bpsCode: '34.04.04' },
                    { name: 'Seyegan', bpsCode: '34.04.05' },
                    { name: 'Mlati', bpsCode: '34.04.06' },
                    { name: 'Depok', bpsCode: '34.04.07' },
                    { name: 'Berbah', bpsCode: '34.04.08' },
                    { name: 'Prambanan', bpsCode: '34.04.09' },
                    { name: 'Kalasan', bpsCode: '34.04.10' },
                    { name: 'Ngemplak', bpsCode: '34.04.11' },
                    { name: 'Ngaglik', bpsCode: '34.04.12' },
                    { name: 'Sleman', bpsCode: '34.04.13' },
                    { name: 'Tempel', bpsCode: '34.04.14' },
                    { name: 'Turi', bpsCode: '34.04.15' },
                    { name: 'Pakem', bpsCode: '34.04.16' },
                    { name: 'Cangkringan', bpsCode: '34.04.17' }
                ]
            }, {
                name: 'Kota Yogyakarta',
                bpsCode: '34.71',
                districts: [
                    { name: 'Tegalrejo', bpsCode: '34.71.01' },
                    { name: 'Jetis', bpsCode: '34.71.02' },
                    { name: 'Gondokusuman', bpsCode: '34.71.03' },
                    { name: 'Danurejan', bpsCode: '34.71.04' },
                    { name: 'Gedongtengen (Gedong Tengen)', bpsCode: '34.71.05' },
                    { name: 'Ngampilan', bpsCode: '34.71.06' },
                    { name: 'Wirobrajan', bpsCode: '34.71.07' },
                    { name: 'Mantrijeron', bpsCode: '34.71.08' },
                    { name: 'Kraton', bpsCode: '34.71.09' },
                    { name: 'Gondomanan', bpsCode: '34.71.10' },
                    { name: 'Pakualaman', bpsCode: '34.71.11' },
                    { name: 'Mergangsan', bpsCode: '34.71.12' },
                    { name: 'Umbulharjo', bpsCode: '34.71.13' },
                    { name: 'Kotagede', bpsCode: '34.71.14' }
                ]
            }
        ]
    },
};

export const PROVINCE_EXTENDED_DATA = MergeRecursive(PROVINCE_DATA, PROVINCE_DATA_EXTENSION);