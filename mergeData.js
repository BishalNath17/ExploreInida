import fs from 'fs';
import { statesData as oldData } from './src/data/statesData.js';

const newData = [
  {
    state: "Andhra Pradesh", code: "IN-AP",
    tagline: "Land of temples, valleys and coastlines",
    destinations: [
      { name: "Tirumala Tirupati", location: "Tirupati, Tirupati district", category: "temple" },
      { name: "Araku Valley", location: "Araku, Alluri Sitharama Raju district", category: "hillstation" },
      { name: "Borra Caves", location: "Ananthagiri Hills, Alluri Sitharama Raju district", category: "adventure" },
      { name: "Rama Krishna Beach (RK Beach)", location: "Visakhapatnam", category: "beach" },
      { name: "Simhachalam Temple", location: "Visakhapatnam", category: "temple" },
      { name: "Papikondalu", location: "Godavari River region, East/West Godavari", category: "nature" },
      { name: "Gandikota Fort & Canyon", location: "Gandikota, YSR Kadapa district", category: "historical" },
      { name: "Belum Caves", location: "Belum, Nandyal district", category: "adventure" },
      { name: "Srisailam", location: "Srisailam, Nandyal district", category: "temple" },
      { name: "Amaravati (Buddhist Heritage)", location: "Amaravati, Palnadu district", category: "historical" }
    ]
  },
  {
    state: "Arunachal Pradesh", code: "IN-AR",
    tagline: "Land of the dawn-lit mountains",
    destinations: [
      { name: "Tawang Monastery", location: "Tawang", category: "cultural" },
      { name: "Sela Pass", location: "Tawang–West Kameng border", category: "nature" },
      { name: "Ziro Valley", location: "Ziro, Lower Subansiri", category: "hillstation" },
      { name: "Namdapha National Park", location: "Changlang", category: "wildlife" },
      { name: "Bomdila Monastery", location: "Bomdila, West Kameng", category: "cultural" },
      { name: "Dirang Valley", location: "Dirang, West Kameng", category: "nature" },
      { name: "Mechuka", location: "Mechuka, Shi Yomi", category: "adventure" },
      { name: "Ita Fort", location: "Itanagar, Papum Pare", category: "historical" },
      { name: "Pakke (Pakhui) Tiger Reserve", location: "East Kameng", category: "wildlife" },
      { name: "Nuranang (Jung) Falls", location: "Jung village area, Tawang", category: "nature" }
    ]
  },
  {
    state: "Assam", code: "IN-AS",
    tagline: "Where wildlife meets ancient culture",
    destinations: [
      { name: "Kaziranga National Park", location: "Golaghat/Nagaon districts", category: "wildlife" },
      { name: "Manas National Park", location: "Baksa/Chirang/Barpeta districts", category: "wildlife" },
      { name: "Kamakhya Temple", location: "Guwahati, Kamrup Metropolitan", category: "temple" },
      { name: "Majuli Island", location: "Majuli district", category: "cultural" },
      { name: "Sivasagar (Ahom Heritage)", location: "Sivasagar", category: "historical" },
      { name: "Haflong", location: "Dima Hasao", category: "hillstation" },
      { name: "Pobitora Wildlife Sanctuary", location: "Morigaon", category: "wildlife" },
      { name: "Hoollongapar Gibbon Sanctuary", location: "Jorhat", category: "wildlife" },
      { name: "Tezpur (Agnigarh Hill)", location: "Tezpur, Sonitpur", category: "cultural" },
      { name: "Jorhat Tea Gardens", location: "Jorhat", category: "cultural" }
    ]
  },
  {
    state: "Bihar", code: "IN-BR",
    tagline: "Cradle of civilizations and ancient wisdom",
    destinations: [
      { name: "Mahabodhi Temple", location: "Bodh Gaya, Gaya", category: "temple" },
      { name: "Nalanda University Ruins", location: "Nalanda", category: "historical" },
      { name: "Rajgir", location: "Rajgir, Nalanda", category: "cultural" },
      { name: "Vikramshila Ruins", location: "Kahalgaon, Bhagalpur", category: "historical" },
      { name: "Vaishali", location: "Vaishali district", category: "historical" },
      { name: "Pawapuri (Jal Mandir)", location: "Pawapuri, Nalanda", category: "temple" },
      { name: "Takht Sri Patna Sahib", location: "Patna", category: "temple" },
      { name: "Golghar", location: "Patna", category: "historical" },
      { name: "Valmiki Tiger Reserve", location: "West Champaran", category: "wildlife" },
      { name: "Barabar Caves", location: "Jehanabad", category: "historical" }
    ]
  },
  {
    state: "Chhattisgarh", code: "IN-CT",
    tagline: "Tribal heartland of waterfalls and forests",
    destinations: [
      { name: "Chitrakote Falls", location: "Bastar", category: "nature" },
      { name: "Tirathgarh Falls", location: "Bastar", category: "nature" },
      { name: "Kanger Valley National Park", location: "Bastar, near Jagdalpur", category: "wildlife" },
      { name: "Bastar (Tribal Culture)", location: "Jagdalpur, Bastar", category: "cultural" },
      { name: "Barnawapara Wildlife Sanctuary", location: "Mahasamund", category: "wildlife" },
      { name: "Sirpur Archaeological Site", location: "Sirpur, Mahasamund", category: "historical" },
      { name: "Bhoramdeo Temple", location: "Kawardha, Kabirdham", category: "temple" },
      { name: "Maa Bamleshwari Temple", location: "Dongargarh, Rajnandgaon", category: "temple" },
      { name: "Mainpat Plateau", location: "Surguja", category: "hillstation" },
      { name: "Danteshwari Temple", location: "Dantewada", category: "temple" }
    ]
  },
  {
    state: "Goa", code: "IN-GA",
    tagline: "Sun, sand, history and soul",
    destinations: [
      { name: "Basilica of Bom Jesus", location: "Old Goa, North Goa", category: "historical" },
      { name: "Se Cathedral", location: "Old Goa, North Goa", category: "historical" },
      { name: "Fort Aguada", location: "Sinquerim, North Goa", category: "historical" },
      { name: "Calangute Beach", location: "Calangute, North Goa", category: "beach" },
      { name: "Baga Beach", location: "Baga, North Goa", category: "beach" },
      { name: "Anjuna Beach", location: "Anjuna, North Goa", category: "beach" },
      { name: "Palolem Beach", location: "Canacona, South Goa", category: "beach" },
      { name: "Dudhsagar Falls", location: "Mollem/Sanguem, South Goa", category: "nature" },
      { name: "Bhagwan Mahavir Wildlife Sanctuary", location: "Mollem, South Goa", category: "wildlife" },
      { name: "Fontainhas Latin Quarter", location: "Panaji, North Goa", category: "cultural" }
    ]
  },
  {
    state: "Gujarat", code: "IN-GJ",
    tagline: "Land of lions, deserts and legends",
    destinations: [
      { name: "Statue of Unity", location: "Kevadia, Narmada", category: "cultural" },
      { name: "Rann of Kutch (White Desert)", location: "Kutch district", category: "nature" },
      { name: "Gir National Park", location: "Junagadh/Amreli districts", category: "wildlife" },
      { name: "Somnath Temple", location: "Veraval, Gir Somnath", category: "temple" },
      { name: "Dwarkadhish Temple", location: "Dwarka, Devbhumi Dwarka", category: "temple" },
      { name: "Sabarmati Ashram", location: "Ahmedabad", category: "cultural" },
      { name: "Rani ki Vav", location: "Patan", category: "historical" },
      { name: "Modhera Sun Temple", location: "Modhera, Mehsana", category: "historical" },
      { name: "Champaner–Pavagadh Archaeological Park", location: "Panchmahal", category: "historical" },
      { name: "Marine National Park (Gulf of Kutch)", location: "Jamnagar", category: "wildlife" }
    ]
  },
  {
    state: "Haryana", code: "IN-HR",
    tagline: "Land of Kurukshetra and green fields",
    destinations: [
      { name: "Kurukshetra (Brahma Sarovar)", location: "Kurukshetra", category: "cultural" },
      { name: "Jyotisar", location: "Kurukshetra", category: "cultural" },
      { name: "Sultanpur National Park", location: "Gurugram", category: "wildlife" },
      { name: "Surajkund", location: "Faridabad", category: "cultural" },
      { name: "Pinjore Gardens (Yadavindra Gardens)", location: "Pinjore, Panchkula", category: "cultural" },
      { name: "Morni Hills", location: "Panchkula", category: "hillstation" },
      { name: "Damdama Lake", location: "Sohna, Gurugram", category: "nature" },
      { name: "Panipat Museum", location: "Panipat", category: "historical" },
      { name: "Heritage Transport Museum", location: "Taoru, Nuh", category: "cultural" },
      { name: "Bhima Devi Temple Complex", location: "Pinjore, Panchkula", category: "historical" }
    ]
  },
  {
    state: "Himachal Pradesh", code: "IN-HP",
    tagline: "Heaven in the Himalayas",
    destinations: [
      { name: "Shimla", location: "Shimla district", category: "hillstation" },
      { name: "Manali", location: "Kullu district", category: "hillstation" },
      { name: "Dharamshala & McLeod Ganj", location: "Kangra district", category: "cultural" },
      { name: "Dalhousie", location: "Chamba district", category: "hillstation" },
      { name: "Spiti Valley", location: "Lahaul & Spiti district", category: "adventure" },
      { name: "Kasauli", location: "Solan district", category: "hillstation" },
      { name: "Bir Billing", location: "Kangra district", category: "adventure" },
      { name: "Khajjiar", location: "Chamba district", category: "nature" },
      { name: "Kasol (Parvati Valley)", location: "Kullu district", category: "adventure" },
      { name: "Great Himalayan National Park", location: "Kullu district", category: "wildlife" }
    ]
  },
  {
    state: "Jharkhand", code: "IN-JH",
    tagline: "Forests, falls and tribal heritage",
    destinations: [
      { name: "Betla National Park", location: "Latehar", category: "wildlife" },
      { name: "Hundru Falls", location: "Ranchi", category: "nature" },
      { name: "Dassam Falls", location: "Ranchi", category: "nature" },
      { name: "Patratu Valley", location: "Ramgarh", category: "nature" },
      { name: "Baidyanath Dham (Deoghar)", location: "Deoghar", category: "temple" },
      { name: "Parasnath Hill (Shikharji)", location: "Giridih", category: "temple" },
      { name: "Netarhat", location: "Latehar", category: "hillstation" },
      { name: "Jonha Falls", location: "Ranchi", category: "nature" },
      { name: "Tagore Hill", location: "Ranchi", category: "cultural" },
      { name: "Jubilee Park", location: "Jamshedpur, East Singhbhum", category: "cultural" }
    ]
  },
  {
    state: "Karnataka", code: "IN-KA",
    tagline: "From ancient ruins to lush coffee hills",
    destinations: [
      { name: "Lalbagh Botanical Garden", location: "Bengaluru", category: "cultural" },
      { name: "Bengaluru Palace", location: "Bengaluru", category: "historical" },
      { name: "Mysuru Palace", location: "Mysuru", category: "historical" },
      { name: "Hampi", location: "Vijayanagara district", category: "historical" },
      { name: "Badami Cave Temples", location: "Badami, Bagalkot", category: "historical" },
      { name: "Pattadakal", location: "Bagalkot", category: "historical" },
      { name: "Aihole", location: "Bagalkot", category: "historical" },
      { name: "Coorg (Madikeri)", location: "Kodagu", category: "hillstation" },
      { name: "Chikkamagaluru", location: "Chikkamagaluru district", category: "hillstation" },
      { name: "Jog Falls", location: "Shivamogga district", category: "nature" },
      { name: "Gokarna", location: "Uttara Kannada", category: "beach" },
      { name: "Murudeshwar", location: "Uttara Kannada", category: "temple" },
      { name: "Bandipur National Park", location: "Chamarajanagar", category: "wildlife" },
      { name: "Nagarhole (Kabini)", location: "Kodagu/Mysuru region", category: "wildlife" },
      { name: "Belur (Chennakesava Temple)", location: "Belur, Hassan", category: "temple" },
      { name: "Shravanabelagola", location: "Hassan", category: "cultural" }
    ]
  },
  {
    state: "Kerala", code: "IN-KL",
    tagline: "God's own country — backwaters and beyond",
    destinations: [
      { name: "Munnar", location: "Idukki", category: "hillstation" },
      { name: "Alappuzha Backwaters", location: "Alappuzha", category: "nature" },
      { name: "Kumarakom", location: "Kottayam", category: "nature" },
      { name: "Fort Kochi", location: "Kochi, Ernakulam", category: "cultural" },
      { name: "Wayanad", location: "Wayanad district", category: "nature" },
      { name: "Periyar Tiger Reserve (Thekkady)", location: "Thekkady, Idukki", category: "wildlife" },
      { name: "Varkala Beach", location: "Varkala, Thiruvananthapuram", category: "beach" },
      { name: "Kovalam Beach", location: "Thiruvananthapuram", category: "beach" },
      { name: "Athirappilly Falls", location: "Thrissur", category: "nature" },
      { name: "Bekal Fort", location: "Bekal, Kasaragod", category: "historical" },
      { name: "Guruvayur Temple", location: "Guruvayur, Thrissur", category: "temple" },
      { name: "Sabarimala", location: "Pathanamthitta", category: "temple" },
      { name: "Padmanabhaswamy Temple", location: "Thiruvananthapuram", category: "temple" },
      { name: "Marari Beach", location: "Mararikulam, Alappuzha", category: "beach" },
      { name: "Silent Valley National Park", location: "Palakkad", category: "wildlife" },
      { name: "Kozhikode Beach", location: "Kozhikode", category: "beach" }
    ]
  },
  {
    state: "Madhya Pradesh", code: "IN-MP",
    tagline: "Heart of India — temples, tigers and rock art",
    destinations: [
      { name: "Khajuraho Group of Monuments", location: "Khajuraho, Chhatarpur", category: "historical" },
      { name: "Sanchi Stupa", location: "Sanchi, Raisen", category: "historical" },
      { name: "Bhimbetka Rock Shelters", location: "Raisen", category: "historical" },
      { name: "Kanha Tiger Reserve", location: "Mandla/Balaghat", category: "wildlife" },
      { name: "Bandhavgarh Tiger Reserve", location: "Umaria", category: "wildlife" },
      { name: "Pench National Park", location: "Seoni/Chhindwara", category: "wildlife" },
      { name: "Pachmarhi", location: "Narmadapuram", category: "hillstation" },
      { name: "Bhedaghat (Marble Rocks & Dhuandhar Falls)", location: "Jabalpur", category: "nature" },
      { name: "Gwalior Fort", location: "Gwalior", category: "historical" },
      { name: "Mahakaleshwar Temple", location: "Ujjain", category: "temple" }
    ]
  },
  {
    state: "Maharashtra", code: "IN-MH",
    tagline: "Caves, coasts, forts and city lights",
    destinations: [
      { name: "Gateway of India", location: "Mumbai", category: "historical" },
      { name: "Marine Drive", location: "Mumbai", category: "cultural" },
      { name: "Elephanta Caves", location: "Mumbai Harbour (Gharapuri Island)", category: "historical" },
      { name: "Ajanta Caves", location: "Ajanta, Aurangabad district", category: "historical" },
      { name: "Ellora Caves", location: "Ellora, Aurangabad district", category: "historical" },
      { name: "Shirdi (Sai Baba Temple)", location: "Shirdi, Ahmednagar", category: "temple" },
      { name: "Trimbakeshwar Temple", location: "Trimbak, Nashik", category: "temple" },
      { name: "Shaniwar Wada", location: "Pune", category: "historical" },
      { name: "Lonavala–Khandala", location: "Pune district", category: "hillstation" },
      { name: "Mahabaleshwar", location: "Satara", category: "hillstation" },
      { name: "Matheran", location: "Raigad", category: "hillstation" },
      { name: "Alibaug", location: "Raigad", category: "beach" },
      { name: "Raigad Fort", location: "Raigad", category: "adventure" },
      { name: "Tadoba-Andhari Tiger Reserve", location: "Chandrapur", category: "wildlife" },
      { name: "Lonar Crater Lake", location: "Lonar, Buldhana", category: "nature" },
      { name: "Tarkarli Beach", location: "Tarkarli, Sindhudurg", category: "beach" }
    ]
  },
  {
    state: "Manipur", code: "IN-MN",
    tagline: "The jewel of the northeast",
    destinations: [
      { name: "Loktak Lake", location: "Bishnupur", category: "nature" },
      { name: "Keibul Lamjao National Park", location: "Bishnupur", category: "wildlife" },
      { name: "Kangla Fort", location: "Imphal", category: "historical" },
      { name: "Ima Keithel (Mother's Market)", location: "Imphal", category: "cultural" },
      { name: "Shirui Hills", location: "Ukhrul", category: "nature" },
      { name: "Dzukou Valley (Manipur approach)", location: "Senapati border region", category: "adventure" },
      { name: "Tharon Cave", location: "Tamenglong", category: "adventure" },
      { name: "Andro Village", location: "Imphal East", category: "cultural" },
      { name: "INA Memorial (Moirang)", location: "Moirang, Bishnupur", category: "historical" },
      { name: "Khonghampat Orchidarium", location: "Imphal West", category: "nature" }
    ]
  },
  {
    state: "Meghalaya", code: "IN-ML",
    tagline: "Abode of clouds, waterfalls and living bridges",
    destinations: [
      { name: "Shillong", location: "East Khasi Hills", category: "hillstation" },
      { name: "Cherrapunji (Sohra)", location: "East Khasi Hills", category: "nature" },
      { name: "Nohkalikai Falls", location: "Near Cherrapunji, East Khasi Hills", category: "nature" },
      { name: "Living Root Bridges (Nongriat)", location: "Nongriat, East Khasi Hills", category: "adventure" },
      { name: "Dawki / Umngot River", location: "Dawki, West Jaintia Hills", category: "nature" },
      { name: "Mawlynnong", location: "East Khasi Hills", category: "cultural" },
      { name: "Laitlum Canyon", location: "East Khasi Hills", category: "nature" },
      { name: "Mawsmai Cave", location: "Cherrapunji, East Khasi Hills", category: "adventure" },
      { name: "Umiam Lake", location: "Ri-Bhoi", category: "nature" },
      { name: "Krang Suri Falls", location: "Jaintia Hills, West Jaintia Hills", category: "nature" }
    ]
  },
  {
    state: "Mizoram", code: "IN-MZ",
    tagline: "Hidden paradise of the far northeast",
    destinations: [
      { name: "Aizawl", location: "Aizawl district", category: "cultural" },
      { name: "Reiek", location: "Reiek, Mamit", category: "adventure" },
      { name: "Phawngpui (Blue Mountain)", location: "Lawngtlai", category: "adventure" },
      { name: "Vantawng Falls", location: "Serchhip", category: "nature" },
      { name: "Tam Dil Lake", location: "Saitual", category: "nature" },
      { name: "Dampa Tiger Reserve", location: "Mamit", category: "wildlife" },
      { name: "Champhai", location: "Champhai district", category: "cultural" },
      { name: "Hmuifang", location: "Aizawl district", category: "hillstation" },
      { name: "Lunglei", location: "Lunglei district", category: "cultural" },
      { name: "Murlen National Park", location: "Champhai", category: "wildlife" }
    ]
  },
  {
    state: "Nagaland", code: "IN-NL",
    tagline: "Land of festivals, warriors and wild nature",
    destinations: [
      { name: "Kohima War Cemetery", location: "Kohima", category: "historical" },
      { name: "Kisama Heritage Village", location: "Kohima district", category: "cultural" },
      { name: "Dzukou Valley", location: "Kohima region", category: "adventure" },
      { name: "Khonoma", location: "Kohima district", category: "cultural" },
      { name: "Mokokchung", location: "Mokokchung district", category: "cultural" },
      { name: "Tuophema Village", location: "Kohima district", category: "cultural" },
      { name: "Intanki National Park", location: "Peren district", category: "wildlife" },
      { name: "Shilloi Lake", location: "Phek district", category: "nature" },
      { name: "Longwa Village", location: "Mon district", category: "cultural" },
      { name: "Mount Saramati", location: "Kiphire district", category: "adventure" }
    ]
  },
  {
    state: "Odisha", code: "IN-OD",
    tagline: "Temples, tribes and tranquil coastlines",
    destinations: [
      { name: "Jagannath Temple", location: "Puri", category: "temple" },
      { name: "Konark Sun Temple", location: "Konark, Puri district", category: "historical" },
      { name: "Chilika Lake", location: "Puri/Khurda/Ganjam districts", category: "wildlife" },
      { name: "Lingaraj Temple", location: "Bhubaneswar, Khurda", category: "temple" },
      { name: "Udayagiri & Khandagiri Caves", location: "Bhubaneswar, Khurda", category: "historical" },
      { name: "Dhauli Shanti Stupa", location: "Dhauli, Khurda", category: "cultural" },
      { name: "Similipal National Park", location: "Mayurbhanj", category: "wildlife" },
      { name: "Bhitarkanika National Park", location: "Kendrapara", category: "wildlife" },
      { name: "Puri Beach", location: "Puri", category: "beach" },
      { name: "Hirakud Dam", location: "Sambalpur", category: "nature" }
    ]
  },
  {
    state: "Punjab", code: "IN-PB",
    tagline: "Land of the Golden Temple and proud history",
    destinations: [
      { name: "Golden Temple (Harmandir Sahib)", location: "Amritsar", category: "temple" },
      { name: "Jallianwala Bagh", location: "Amritsar", category: "historical" },
      { name: "Wagah-Attari Border Ceremony", location: "Attari, Amritsar district", category: "cultural" },
      { name: "Partition Museum", location: "Amritsar", category: "cultural" },
      { name: "Virasat-e-Khalsa", location: "Anandpur Sahib, Rupnagar", category: "cultural" },
      { name: "Qila Mubarak", location: "Patiala", category: "historical" },
      { name: "Sheesh Mahal", location: "Patiala", category: "historical" },
      { name: "Harike Wetland", location: "Tarn Taran/Ferozepur region", category: "wildlife" },
      { name: "Fatehgarh Sahib Gurudwara", location: "Fatehgarh Sahib", category: "temple" },
      { name: "Kapurthala (Jagatjit Palace area)", location: "Kapurthala", category: "historical" }
    ]
  },
  {
    state: "Rajasthan", code: "IN-RJ",
    tagline: "Royal forts, golden deserts and timeless grandeur",
    destinations: [
      { name: "City Palace, Jaipur", location: "Jaipur", category: "historical" },
      { name: "Amber Fort", location: "Amer, Jaipur", category: "historical" },
      { name: "Hawa Mahal", location: "Jaipur", category: "historical" },
      { name: "Jantar Mantar", location: "Jaipur", category: "historical" },
      { name: "City Palace, Udaipur", location: "Udaipur", category: "historical" },
      { name: "Lake Pichola", location: "Udaipur", category: "nature" },
      { name: "Jaisalmer Fort", location: "Jaisalmer", category: "historical" },
      { name: "Sam Sand Dunes", location: "Sam, Jaisalmer district", category: "adventure" },
      { name: "Mehrangarh Fort", location: "Jodhpur", category: "historical" },
      { name: "Pushkar Lake & Brahma Temple", location: "Pushkar, Ajmer district", category: "temple" },
      { name: "Ajmer Sharif Dargah", location: "Ajmer", category: "cultural" },
      { name: "Ranthambore National Park", location: "Sawai Madhopur", category: "wildlife" },
      { name: "Chittorgarh Fort", location: "Chittorgarh", category: "historical" },
      { name: "Kumbhalgarh Fort", location: "Rajsamand district", category: "historical" },
      { name: "Mount Abu", location: "Sirohi district", category: "hillstation" },
      { name: "Keoladeo Ghana National Park", location: "Bharatpur", category: "wildlife" }
    ]
  },
  {
    state: "Sikkim", code: "IN-SK",
    tagline: "Monasteries, mountains and mystic lakes",
    destinations: [
      { name: "Gangtok", location: "East Sikkim", category: "hillstation" },
      { name: "Tsomgo (Changu) Lake", location: "East Sikkim", category: "nature" },
      { name: "Nathu La Pass", location: "East Sikkim (Indo-China border)", category: "adventure" },
      { name: "Gurudongmar Lake", location: "North Sikkim", category: "nature" },
      { name: "Yumthang Valley", location: "North Sikkim", category: "nature" },
      { name: "Pelling", location: "West Sikkim", category: "hillstation" },
      { name: "Rumtek Monastery", location: "Near Gangtok, East Sikkim", category: "cultural" },
      { name: "Ravangla (Buddha Park)", location: "South Sikkim", category: "cultural" },
      { name: "Lachung", location: "North Sikkim", category: "hillstation" },
      { name: "Khecheopalri Lake", location: "West Sikkim", category: "nature" }
    ]
  },
  {
    state: "Tamil Nadu", code: "IN-TN",
    tagline: "Temple towers, hill stations and coastal gems",
    destinations: [
      { name: "Marina Beach", location: "Chennai", category: "beach" },
      { name: "Kapaleeshwarar Temple", location: "Mylapore, Chennai", category: "temple" },
      { name: "Mahabalipuram (Shore Temple)", location: "Mahabalipuram, Chengalpattu", category: "historical" },
      { name: "Kanchipuram", location: "Kancheepuram", category: "temple" },
      { name: "Meenakshi Amman Temple", location: "Madurai", category: "temple" },
      { name: "Ramanathaswamy Temple", location: "Rameswaram, Ramanathapuram", category: "temple" },
      { name: "Kanyakumari", location: "Kanyakumari district", category: "cultural" },
      { name: "Ooty (Udhagamandalam)", location: "Nilgiris", category: "hillstation" },
      { name: "Kodaikanal", location: "Dindigul", category: "hillstation" },
      { name: "Brihadeeswarar Temple", location: "Thanjavur", category: "historical" },
      { name: "Rockfort & Srirangam", location: "Tiruchirappalli (Trichy)", category: "temple" },
      { name: "Chidambaram Nataraja Temple", location: "Chidambaram, Cuddalore", category: "temple" },
      { name: "Kumbakonam", location: "Thanjavur district", category: "cultural" },
      { name: "Hogenakkal Falls", location: "Dharmapuri", category: "nature" },
      { name: "Mudumalai Tiger Reserve", location: "Nilgiris", category: "wildlife" },
      { name: "Dhanushkodi", location: "Rameswaram area, Ramanathapuram", category: "nature" }
    ]
  },
  {
    state: "Telangana", code: "IN-TG",
    tagline: "Forts, film city and sacred waters",
    destinations: [
      { name: "Charminar", location: "Hyderabad", category: "historical" },
      { name: "Golconda Fort", location: "Hyderabad", category: "historical" },
      { name: "Ramoji Film City", location: "Hyderabad", category: "cultural" },
      { name: "Hussain Sagar Lake", location: "Hyderabad", category: "nature" },
      { name: "Warangal Fort", location: "Warangal", category: "historical" },
      { name: "Ramappa Temple", location: "Palampet, Mulugu district", category: "historical" },
      { name: "Kuntala Waterfalls", location: "Nirmal district", category: "nature" },
      { name: "Nagarjuna Sagar Dam", location: "Nalgonda district", category: "nature" },
      { name: "Yadadri (Yadagirigutta) Temple", location: "Yadadri Bhuvanagiri", category: "temple" },
      { name: "Basara Saraswati Temple", location: "Basara, Nirmal district", category: "temple" }
    ]
  },
  {
    state: "Tripura", code: "IN-TR",
    tagline: "Palaces, carvings and serene lakes",
    destinations: [
      { name: "Ujjayanta Palace", location: "Agartala, West Tripura", category: "historical" },
      { name: "Neermahal", location: "Rudrasagar Lake, Sepahijala", category: "historical" },
      { name: "Unakoti", location: "Unakoti district", category: "historical" },
      { name: "Tripura Sundari Temple", location: "Udaipur, Gomati", category: "temple" },
      { name: "Jampui Hills", location: "North Tripura", category: "hillstation" },
      { name: "Sepahijala Wildlife Sanctuary", location: "Sepahijala district", category: "wildlife" },
      { name: "Dumboor Lake", location: "Dhalai district", category: "nature" },
      { name: "Chabimura Rock Carvings", location: "Gomati district", category: "historical" },
      { name: "Heritage Park", location: "Agartala, West Tripura", category: "cultural" },
      { name: "Pilak Archaeological Site", location: "South Tripura", category: "historical" }
    ]
  },
  {
    state: "Uttar Pradesh", code: "IN-UP",
    tagline: "Taj Mahal, ghats, temples and Mughal glory",
    destinations: [
      { name: "Taj Mahal", location: "Agra", category: "historical" },
      { name: "Agra Fort", location: "Agra", category: "historical" },
      { name: "Fatehpur Sikri", location: "Fatehpur Sikri, Agra district", category: "historical" },
      { name: "Varanasi Ghats", location: "Varanasi", category: "cultural" },
      { name: "Kashi Vishwanath Temple", location: "Varanasi", category: "temple" },
      { name: "Sarnath", location: "Sarnath, Varanasi district", category: "historical" },
      { name: "Ayodhya Ram Janmabhoomi", location: "Ayodhya", category: "temple" },
      { name: "Bara Imambara", location: "Lucknow", category: "historical" },
      { name: "Rumi Darwaza", location: "Lucknow", category: "historical" },
      { name: "Krishna Janmabhoomi", location: "Mathura", category: "temple" },
      { name: "Vrindavan (Banke Bihari Temple)", location: "Vrindavan, Mathura district", category: "temple" },
      { name: "Triveni Sangam", location: "Prayagraj", category: "cultural" },
      { name: "Jhansi Fort", location: "Jhansi", category: "historical" },
      { name: "Dudhwa National Park", location: "Lakhimpur Kheri", category: "wildlife" },
      { name: "Chitrakoot", location: "Chitrakoot district", category: "cultural" },
      { name: "Kushinagar", location: "Kushinagar district", category: "historical" }
    ]
  },
  {
    state: "Uttarakhand", code: "IN-UK",
    tagline: "Char Dham, jungle safaris and Himalayan thrills",
    destinations: [
      { name: "Har Ki Pauri", location: "Haridwar", category: "temple" },
      { name: "Rishikesh (Ganga Aarti & Suspension Bridges)", location: "Rishikesh, Dehradun district", category: "adventure" },
      { name: "Kedarnath Temple", location: "Kedarnath, Rudraprayag", category: "temple" },
      { name: "Badrinath Temple", location: "Badrinath, Chamoli", category: "temple" },
      { name: "Nainital", location: "Nainital district", category: "hillstation" },
      { name: "Mussoorie", location: "Dehradun district", category: "hillstation" },
      { name: "Jim Corbett National Park", location: "Nainital district", category: "wildlife" },
      { name: "Valley of Flowers National Park", location: "Chamoli district", category: "nature" },
      { name: "Auli", location: "Chamoli district", category: "adventure" },
      { name: "Chopta–Tungnath", location: "Rudraprayag district", category: "adventure" }
    ]
  },
  {
    state: "West Bengal", code: "IN-WB",
    tagline: "Tigers, tea gardens and colonial grandeur",
    destinations: [
      { name: "Victoria Memorial", location: "Kolkata", category: "historical" },
      { name: "Indian Museum", location: "Kolkata", category: "cultural" },
      { name: "Dakshineswar Kali Temple", location: "Kolkata", category: "temple" },
      { name: "Kalighat Kali Temple", location: "Kolkata", category: "temple" },
      { name: "Howrah Bridge", location: "Kolkata/Howrah", category: "cultural" },
      { name: "Darjeeling", location: "Darjeeling district", category: "hillstation" },
      { name: "Tiger Hill", location: "Darjeeling district", category: "nature" },
      { name: "Kalimpong", location: "Kalimpong district", category: "hillstation" },
      { name: "Mirik Lake", location: "Mirik, Darjeeling district", category: "nature" },
      { name: "Sundarbans National Park", location: "South 24 Parganas", category: "wildlife" },
      { name: "Digha Beach", location: "Purba Medinipur", category: "beach" },
      { name: "Mandarmani Beach", location: "Purba Medinipur", category: "beach" },
      { name: "Shantiniketan", location: "Bolpur, Birbhum", category: "cultural" },
      { name: "Bishnupur Terracotta Temples", location: "Bishnupur, Bankura", category: "historical" },
      { name: "Jaldapara National Park", location: "Alipurduar", category: "wildlife" },
      { name: "Gorumara National Park", location: "Jalpaiguri", category: "wildlife" }
    ]
  }
];

const mergedData = newData.map(newSt => {
  const oldSt = oldData.find(o => o.stateName === newSt.state);
  return {
    ...newSt,
    heroImage: oldSt ? oldSt.heroImage : "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400&h=300&fit=crop",
    hiddenGems: oldSt ? oldSt.hiddenGems : [],
    bestTime: oldSt ? oldSt.bestTime : "October to March",
    budget: oldSt ? oldSt.budget : "₹1,500 - ₹3,500 per day",
    localFood: oldSt ? oldSt.localFood : []
  };
});

fs.writeFileSync('./src/data/statesData.js', "export const statesData = " + JSON.stringify(mergedData, null, 2) + ";\n");
