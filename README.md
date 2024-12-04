# webfejlesztes12
A webfejlesztés tárgy beadandója.

Oldal készítője: Szabó Zsófia Anna
URL: 

Weboldal témája: A weboldalam egy fiktív állatmenhely bemutatására készült. Célja, hogy információkat nyújtson az állatmenhely működéséről, a mentett állatok gondozásáról és az örökbefogadási lehetőségekről.

JS kód: A saját JavaScript kódom külön fájlban van elhelyezve, quiz.js néven, amely az allataink.html végén található kérdőívhez van csatolva.

Célja: A kérdőív kitöltése esetében a felhasználó megnézheti, hogy a menhelyen lévő állatok közül ki hozzá a leghozzáillőbb.

Működése röviden: A felhasználó válaszai alapján a program kiszámolja, hogy melyik állattal van a legtöbb egyezés, majd kiírja az állat nevét.

Működése hosszan: A kód elsősorban tartalmaz egy tömböt, ahol az állatok nevei és pontszámai vannak eltárolva (alapértelmezetten 0 ponttal kezdenek). 
A questions változóba a HTML fájlból a question osztály alapján összegyűjti a kérdéseket. (azért getElementByClassName-t használtam, mert az képes egyszerre az összes question osztályú elemet visszaadni, a -ById-val ellentétben)
A kód egy for ciklussal végigmegy az összes kérdésen (questions változón), majd document.querySelector segítségével megkeresi az checked választ (, amiből, csak egy van hiszen radio gomb). A kiválasztott válasz értékét (selectedAnswer.value) számmá alakítja és eltárolja egy újabb változóban.
Minden kérdéshez egy-egy if/else if blokk tartozik, amely a válasz értékétől függően módosítja az állatok pontjait. Pl.: Ha az első kérdésre (if (i === 0)) az első lehetőséget (answerValue === 1) választják, akkor a bizonyos állatok aktivitásuk szerint kapnak pontot. 
Ezután  a kód végigmegy az összes állaton, és kiválasztja azt, amelyiknek a legnagyobb pontszáma van (az első állattól kezdi). Az if feltétel ellenőrzi, hogy a következő állat pontja nagyobb-e, mint az aktuális legjobb, és ha igen, akkor az új "legjobb" lesz.
A resultText elem szövege a legnagyobb pontszámú állat nevére állítódik., majd láthatóvá válik a felhasználó számára.
A kódban van egy olyan rész is, ami ellenőrzi, hogy a felhasználó minden kérdésre válaszolt-e és ha nem akkor figyelmeztetést ír ki majd a kód leáll.

Fonttípus: A "Julius Sans One" google web font-ot használtam a Kuckó Állatmenhely kiírására minden HTML oldal tetején a headerben.
"https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"

Néhány szöveget chatgpt-el generáltam (pl.:Tudnivalók oldalának szövege)
Képeket a webfejlesztés blokk honlapján lévő 'Szabadon felhasználható képek' közül válogattam.
Pár kódhoz csak megértés végett használtam chatgpt-t.
