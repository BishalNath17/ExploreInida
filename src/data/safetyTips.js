import { ShieldAlert, Phone, Map, AlertTriangle } from 'lucide-react';

export const safetyTips = [
  {
    id: "emergency",
    title: "National Emergency Numbers",
    icon: Phone,
    tips: [
      "National Emergency Number: 112",
      "Police: 100",
      "Fire: 101",
      "Ambulance: 102",
      "Women Helpline: 1091"
    ]
  },
  {
    id: "travel",
    title: "General Travel Safety",
    icon: Map,
    tips: [
      "Always share your live location with a trusted family member or friend.",
      "Use official transport booking apps (Ola, Uber) instead of hailing random cabs at night.",
      "Keep digital copies of your ID (Aadhar, Passport) on your phone and email.",
      "Stay hydrated but only drink bottled water from reputed brands."
    ]
  },
  {
    id: "scams",
    title: "Scam Awareness",
    icon: AlertTriangle,
    tips: [
      "Beware of 'friendly locals' offering unsolicited tours for free—they often lead to overpriced shops.",
      "Always agree on a fare before getting into an auto-rickshaw if they refuse to use the meter.",
      "Double-check hotel reviews and book through verified platforms to avoid fake listing scams."
    ]
  },
  {
    id: "women",
    title: "Women Solo Travelers",
    icon: ShieldAlert,
    tips: [
      "Avoid isolated areas and poorly lit streets after dark.",
      "Dress modestly, especially when visiting religious or rural areas, to avoid unwanted attention.",
      "Trust your gut—if a situation feels unsafe, leave immediately and seek help from authorities or families around."
    ]
  }
];
