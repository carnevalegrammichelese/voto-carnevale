// ==========================================================
// CONFIGURAZIONE EVENTO — modifica solo qui, non serve toccare altro
// ==========================================================

const EVENT_CONFIG = {
  // Nome che appare in cima alla pagina di voto
  eventName: "Festival in Piazza 2026",

  // NOTA: i gruppi NON si impostano più qui. Si aggiungono direttamente
  // dalla dashboard (risultati.html) mentre l'app è aperta, e vengono
  // salvati su Firestore. La prima volta che apri risultati.html trovi
  // già precaricati: "Carro allegorico", "In maschera", "Scuole",
  // "Maschera singola" — modificabili/aggiungibili da lì.

  // Coordinate GPS del centro della piazza.
  // Come trovarle: apri Google Maps sul computer, clic destro esatto sul
  // centro della piazza -> compare in alto "lat, lng" -> clicca per copiare.
  venue: {
    lat: 45.4642,        // <-- SOSTITUISCI con la latitudine della piazza
    lng: 9.1900,         // <-- SOSTITUISCI con la longitudine della piazza
    radiusMeters: 150    // raggio in metri entro cui è permesso votare
  },

  // Configurazione del TUO progetto Firebase.
  // Console Firebase -> icona ingranaggio -> Impostazioni progetto ->
  // scorri fino a "Le tue app" -> app web -> "Configurazione SDK"
  firebaseConfig: {
    apiKey: "AIzaSyCV04l45uPeIjkZOchJ3OTxEd0Msxbb8r0",
    authDomain: "voto-carnevale-2026.firebaseapp.com",
    projectId: "voto-carnevale-2026",
    storageBucket: "voto-carnevale-2026.firebasestorage.app",
    messagingSenderId: "828946833093",
    appId: "1:828946833093:web:d358d25aa414131ff55aac"
  }
};
