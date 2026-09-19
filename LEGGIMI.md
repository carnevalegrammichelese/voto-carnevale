# Sistema di voto pubblico per evento in piazza

## File
- `index.html` — pagina pubblica di voto (QR code). Nessun login richiesto: chiunque in piazza può votare.
- `risultati.html` — dashboard organizzatori, **ora protetta da login** (email + password).
- `config.js` — nome evento, coordinate piazza, chiavi Firebase.
- `firestore.rules` — regole di sicurezza del database.

---

## PARTE A — Attivare il login (una tantum, dalla console Firebase)

### 1. Attiva il metodo di accesso "Email/Password"
1. Vai su **console.firebase.google.com** e apri il tuo progetto.
2. Nel menu a sinistra clicca **Authentication**.
3. Se è la prima volta, clicca **"Inizia"/"Get started"**.
4. Vai sulla scheda **"Sign-in method"** ("Metodo di accesso").
5. Nella lista dei provider, clicca su **"Email/Password"**.
6. Attiva il primo interruttore (Email/Password) e clicca **Salva**.

### 2. Crea l'utente organizzatore (le credenziali che userete per entrare)
1. Sempre in **Authentication**, vai sulla scheda **"Users"** ("Utenti").
2. Clicca **"Add user"** ("Aggiungi utente").
3. Inserisci un'email (anche non reale, es. `organizzatori@tuoevento.it`) e una password a tua scelta (almeno 6 caratteri).
4. Clicca **Aggiungi**.
5. Queste sono le credenziali con cui accederai a `risultati.html`. Puoi aggiungere più utenti (uno per ogni organizzatore) ripetendo il passaggio.

> Non serve toccare `config.js` per questo: le chiavi Firebase che hai già inserito valgono sia per il database sia per il login, sono lo stesso progetto.

### 3. Aggiorna le regole di sicurezza
1. Nel menu a sinistra vai su **Firestore Database → Regole** ("Rules").
2. Cancella il contenuto e incolla quello del nuovo file `firestore.rules` (quello allegato qui sopra).
3. Clicca **Pubblica** ("Publish").

Fatto: da questo momento solo chi ha fatto login può aggiungere/rimuovere gruppi; il pubblico continua a votare liberamente senza account.

---

## PARTE B — Uso quotidiano

- Apri `risultati.html`: comparirà una schermata di accesso. Inserisci l'email e la password create al punto A.2.
- Una volta dentro, vedi la dashboard come prima (gruppi, classifica, QR code) più un pulsante **"Esci"** in alto per fare logout.
- Se chiudi e riapri la pagina, Firebase ricorda l'accesso sullo stesso browser (non serve rifare login ogni volta), finché non premi "Esci".
- `index.html`, la pagina che il pubblico apre dal QR code, **non è cambiata**: nessun login lì.

---

## PARTE C — Pubblicazione (come prima)

1. **Coordinate piazza**: Google Maps → clic destro sul centro piazza → copia coordinate → incollale in `config.js` (`venue.lat`, `venue.lng`); regola `radiusMeters`.
2. **Online**: serve hosting HTTPS.
   - Con Firebase: `npm install -g firebase-tools` → `firebase login` → `firebase init hosting` nella cartella dei file → `firebase deploy`.
   - In alternativa: Netlify, Vercel, GitHub Pages (basta caricare i file).
3. **QR code**: fai login su `risultati.html`, incolla l'indirizzo pubblico di `index.html` nel campo "Link e QR code": si genera da solo.

## Test prima dell'evento
- Prova il login su `risultati.html` con le credenziali create.
- Apri `index.html` da un telefono vicino alle coordinate impostate, vota un paio di gruppi e controlla che compaiano nella dashboard.
- Prova ad aprire `risultati.html` da un browser senza aver fatto login: deve chiedere le credenziali e non mostrare nulla della dashboard.
