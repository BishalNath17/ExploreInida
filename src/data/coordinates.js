/* ── Coordinates for all 36 states and UTs ── */
export const stateCoordinates = {
  'IN-AP': { lat: 15.9129, lng: 79.7400 },
  'IN-AR': { lat: 28.2180, lng: 94.7278 },
  'IN-AS': { lat: 26.2006, lng: 92.9376 },
  'IN-BR': { lat: 25.0961, lng: 85.3131 },
  'IN-CT': { lat: 21.2787, lng: 81.8661 },
  'IN-GA': { lat: 15.2993, lng: 74.1240 },
  'IN-GJ': { lat: 22.2587, lng: 71.1924 },
  'IN-HR': { lat: 29.0588, lng: 76.0856 },
  'IN-HP': { lat: 31.1048, lng: 77.1734 },
  'IN-JH': { lat: 23.6102, lng: 85.2799 },
  'IN-KA': { lat: 15.3173, lng: 75.7139 },
  'IN-KL': { lat: 10.8505, lng: 76.2711 },
  'IN-MP': { lat: 22.9734, lng: 78.6569 },
  'IN-MH': { lat: 19.7515, lng: 75.7139 },
  'IN-MN': { lat: 24.6637, lng: 93.9063 },
  'IN-ML': { lat: 25.4670, lng: 91.3662 },
  'IN-MZ': { lat: 23.1645, lng: 92.9376 },
  'IN-NL': { lat: 26.1584, lng: 94.5624 },
  'IN-OD': { lat: 20.9517, lng: 85.0985 },
  'IN-PB': { lat: 31.1471, lng: 75.3412 },
  'IN-RJ': { lat: 27.0238, lng: 74.2179 },
  'IN-SK': { lat: 27.5330, lng: 88.5122 },
  'IN-TN': { lat: 11.1271, lng: 78.6569 },
  'IN-TS': { lat: 18.1124, lng: 79.0193 },
  'IN-TR': { lat: 23.9408, lng: 91.9882 },
  'IN-UP': { lat: 26.8467, lng: 80.9462 },
  'IN-UK': { lat: 30.0668, lng: 79.0193 },
  'IN-WB': { lat: 22.9868, lng: 87.8550 },
  // Union Territories
  'IN-AN': { lat: 11.7401, lng: 92.6586 },
  'IN-CH': { lat: 30.7333, lng: 76.7794 },
  'IN-DH': { lat: 20.1809, lng: 73.0169 },
  'IN-DL': { lat: 28.7041, lng: 77.1025 },
  'IN-JK': { lat: 33.7782, lng: 76.5762 },
  'IN-LA': { lat: 34.1526, lng: 77.5771 },
  'IN-LD': { lat: 10.5667, lng: 72.6417 },
  'IN-PY': { lat: 11.9416, lng: 79.8083 },
};

/* ── Key destination coordinates per state ── */
export const destinationCoordinates = {
  // Andhra Pradesh
  'Tirumala Tirupati': { lat: 13.6833, lng: 79.3472 },
  'Araku Valley': { lat: 18.3273, lng: 82.8755 },
  'Gandikota Fort & Canyon': { lat: 15.2466, lng: 78.2843 },
  'Rama Krishna Beach (RK Beach)': { lat: 17.7116, lng: 83.3255 },
  // Arunachal Pradesh
  'Tawang Monastery': { lat: 27.5860, lng: 91.8620 },
  'Ziro Valley': { lat: 27.5459, lng: 93.8311 },
  'Sela Pass': { lat: 27.5017, lng: 92.0917 },
  // Assam
  'Kaziranga National Park': { lat: 26.5775, lng: 93.1711 },
  'Kamakhya Temple': { lat: 26.1673, lng: 91.7052 },
  'Majuli Island': { lat: 26.9500, lng: 94.1669 },
  // Bihar
  'Mahabodhi Temple': { lat: 24.6952, lng: 84.9912 },
  'Nalanda University Ruins': { lat: 25.1357, lng: 85.4427 },
  // Chhattisgarh
  'Chitrakote Falls': { lat: 19.2072, lng: 81.7012 },
  // Goa
  'Basilica of Bom Jesus': { lat: 15.5009, lng: 73.9116 },
  'Calangute Beach': { lat: 15.5437, lng: 73.7553 },
  'Palolem Beach': { lat: 15.0100, lng: 74.0232 },
  'Dudhsagar Falls': { lat: 15.3144, lng: 74.3143 },
  // Gujarat
  'Statue of Unity': { lat: 21.8380, lng: 73.7191 },
  'Rann of Kutch (White Desert)': { lat: 23.7337, lng: 69.8597 },
  'Gir National Park': { lat: 21.1243, lng: 70.7944 },
  'Somnath Temple': { lat: 20.8880, lng: 70.4012 },
  // Haryana
  'Kurukshetra (Brahma Sarovar)': { lat: 29.9695, lng: 76.8783 },
  'Morni Hills': { lat: 30.6884, lng: 77.0794 },
  // Himachal Pradesh
  'Shimla': { lat: 31.1048, lng: 77.1734 },
  'Manali': { lat: 32.2396, lng: 77.1887 },
  'Dharamshala & McLeod Ganj': { lat: 32.2190, lng: 76.3234 },
  'Spiti Valley': { lat: 32.2460, lng: 78.0150 },
  'Bir Billing': { lat: 31.8785, lng: 76.7234 },
  // Jharkhand
  'Hundru Falls': { lat: 23.4460, lng: 85.6168 },
  'Baidyanath Dham (Deoghar)': { lat: 24.4921, lng: 86.6955 },
  // Karnataka
  'Mysuru Palace': { lat: 12.3052, lng: 76.6552 },
  'Hampi': { lat: 15.3350, lng: 76.4600 },
  'Coorg (Madikeri)': { lat: 12.4244, lng: 75.7382 },
  'Jog Falls': { lat: 14.2282, lng: 74.8126 },
  'Gokarna': { lat: 14.5479, lng: 74.3188 },
  // Kerala
  'Munnar': { lat: 10.0889, lng: 77.0595 },
  'Alappuzha Backwaters': { lat: 9.4981, lng: 76.3388 },
  'Fort Kochi': { lat: 9.9658, lng: 76.2421 },
  'Wayanad': { lat: 11.6854, lng: 76.1320 },
  'Varkala Beach': { lat: 8.7342, lng: 76.7166 },
  'Athirappilly Falls': { lat: 10.2856, lng: 76.5697 },
  // Madhya Pradesh
  'Khajuraho Group of Monuments': { lat: 24.8318, lng: 79.9199 },
  'Sanchi Stupa': { lat: 23.4793, lng: 77.7398 },
  'Kanha Tiger Reserve': { lat: 22.3349, lng: 80.6115 },
  // Maharashtra
  'Gateway of India': { lat: 18.9220, lng: 72.8347 },
  'Ajanta Caves': { lat: 20.5519, lng: 75.7033 },
  'Ellora Caves': { lat: 20.0258, lng: 75.1780 },
  'Lonavala–Khandala': { lat: 18.7546, lng: 73.4062 },
  // Manipur
  'Loktak Lake': { lat: 24.5500, lng: 93.8000 },
  'Kangla Fort': { lat: 24.7960, lng: 93.9328 },
  // Meghalaya
  'Shillong': { lat: 25.5788, lng: 91.8933 },
  'Cherrapunji (Sohra)': { lat: 25.2789, lng: 91.7220 },
  'Nohkalikai Falls': { lat: 25.2759, lng: 91.6989 },
  'Dawki / Umngot River': { lat: 25.1841, lng: 92.0225 },
  'Living Root Bridges (Nongriat)': { lat: 25.2514, lng: 91.7281 },
  // Nagaland
  'Kohima War Cemetery': { lat: 25.6751, lng: 94.1086 },
  'Dzukou Valley': { lat: 25.5539, lng: 93.9951 },
  // Odisha
  'Jagannath Temple': { lat: 19.8048, lng: 85.8183 },
  'Konark Sun Temple': { lat: 19.8876, lng: 86.0945 },
  'Chilika Lake': { lat: 19.7000, lng: 85.3333 },
  // Punjab
  'Golden Temple (Harmandir Sahib)': { lat: 31.6200, lng: 74.8765 },
  'Jallianwala Bagh': { lat: 31.6227, lng: 74.8800 },
  'Wagah-Attari Border Ceremony': { lat: 31.6048, lng: 74.5735 },
  // Rajasthan
  'City Palace, Jaipur': { lat: 26.9260, lng: 75.8235 },
  'Amber Fort': { lat: 26.9855, lng: 75.8513 },
  'Hawa Mahal': { lat: 26.9239, lng: 75.8267 },
  'Jaisalmer Fort': { lat: 26.9124, lng: 70.9128 },
  'Mehrangarh Fort': { lat: 26.2984, lng: 73.0188 },
  'City Palace, Udaipur': { lat: 24.5764, lng: 73.6915 },
  'Ranthambore National Park': { lat: 26.0173, lng: 76.5026 },
  // Sikkim
  'Tsomgo (Changu) Lake': { lat: 27.3734, lng: 88.7631 },
  'Nathula Pass': { lat: 27.3866, lng: 88.8312 },
  'Pelling': { lat: 27.3047, lng: 88.2374 },
  // Tamil Nadu
  'Meenakshi Amman Temple': { lat: 9.9195, lng: 78.1193 },
  'Ooty (Nilgiris)': { lat: 11.4102, lng: 76.6950 },
  'Kodaikanal': { lat: 10.2381, lng: 77.4892 },
  'Marina Beach': { lat: 13.0499, lng: 80.2824 },
  'Mahabalipuram': { lat: 12.6172, lng: 80.1927 },
  // Telangana
  'Charminar': { lat: 17.3616, lng: 78.4747 },
  'Golconda Fort': { lat: 17.3833, lng: 78.4011 },
  'Ramoji Film City': { lat: 17.2543, lng: 78.6808 },
  // Tripura
  'Ujjayanta Palace': { lat: 23.8388, lng: 91.2804 },
  'Neermahal': { lat: 23.4233, lng: 91.3200 },
  // Uttar Pradesh
  'Taj Mahal': { lat: 27.1751, lng: 78.0421 },
  'Varanasi Ghats': { lat: 25.3176, lng: 83.0107 },
  'Lucknow (Rumi Darwaza)': { lat: 26.8694, lng: 80.9038 },
  // Uttarakhand
  'Rishikesh': { lat: 30.0869, lng: 78.2676 },
  'Haridwar': { lat: 29.9457, lng: 78.1642 },
  'Nainital': { lat: 29.3919, lng: 79.4542 },
  'Valley of Flowers': { lat: 30.7280, lng: 79.6050 },
  'Kedarnath Temple': { lat: 30.7352, lng: 79.0669 },
  // West Bengal
  'Victoria Memorial': { lat: 22.5448, lng: 88.3426 },
  'Darjeeling': { lat: 27.0360, lng: 88.2627 },
  'Sundarbans': { lat: 21.9497, lng: 89.1833 },
  'Howrah Bridge': { lat: 22.5852, lng: 88.3468 },
  // Delhi
  'Red Fort': { lat: 28.6562, lng: 77.2410 },
  'Qutub Minar': { lat: 28.5245, lng: 77.1855 },
  'India Gate': { lat: 28.6129, lng: 77.2295 },
  'Humayun\'s Tomb': { lat: 28.5933, lng: 77.2507 },
  // Jammu & Kashmir
  'Dal Lake': { lat: 34.0837, lng: 74.8406 },
  'Gulmarg': { lat: 34.0484, lng: 74.3805 },
  'Vaishno Devi': { lat: 33.0292, lng: 74.9490 },
  // Ladakh
  'Pangong Tso Lake': { lat: 33.7595, lng: 78.6614 },
  'Nubra Valley': { lat: 34.6850, lng: 77.5678 },
  'Leh Palace': { lat: 34.1637, lng: 77.5850 },
  // Andaman & Nicobar
  'Radhanagar Beach': { lat: 11.9811, lng: 92.9506 },
  'Cellular Jail': { lat: 11.6938, lng: 92.7265 },
  // Chandigarh
  'Rock Garden': { lat: 30.7530, lng: 76.8096 },
  // Puducherry
  'Promenade Beach': { lat: 11.9335, lng: 79.8363 },
  'Auroville': { lat: 12.0063, lng: 79.8107 },
};
