import imageGhiozdan from './assets/un-ghiozdan-un-nou-inceput.jpeg'
import imageIarna from './assets/o-iarna-cu-inima-plina.jpeg'
import imageBunic from './assets/nici-un-bunic-singur.jpeg'
import imageGala from './assets/gala-o-singura-inima.jpeg'
import imageDansam from './assets/dansam-pentru-o-inima.jpeg'

export interface Project {
  slug: string
  title: string
  kind: 'Proiect' | 'Eveniment'
  period: string
  image: string
  imageAlt: string
  intro: string
  body: string[]
  closing: string[]
  motto: string
}

// Listed in chronological order, as shown in the header dropdown.
export const projects: Project[] = [
  {
    slug: 'o-iarna-cu-inima-plina',
    title: 'O iarnă cu inimă plină',
    kind: 'Proiect',
    period: 'noiembrie – decembrie 2026',
    image: imageIarna,
    imageAlt:
      'O voluntară înmânează un pachet cu ajutoare și un cadou unui copil, în fața unei case acoperite de zăpadă și împodobite pentru sărbători',
    intro:
      'Iarna și sărbătorile ar trebui să fie o perioadă a bucuriei, a căldurii și a timpului petrecut alături de cei dragi. Pentru multe familii, copii și persoane vârstnice din comunitatea noastră, însă, această perioadă vine cu griji, lipsuri și uneori cu singurătate.',
    body: [
      'Prin proiectul „O iarnă cu inimă plină”, ne propunem să aducem sprijin și bucurie acolo unde este cea mai mare nevoie și să transformăm sărbătorile într-un moment în care nimeni să nu se simtă uitat.',
      'În cadrul proiectului vom identifica copii, familii aflate în dificultate și persoane vârstnice vulnerabile, cărora le vom oferi, în funcție de nevoile fiecăruia, pachete cu alimente, produse de igienă și de strictă necesitate, îmbrăcăminte și încălțăminte de iarnă, precum și cadouri pentru copii.',
      'Beneficiarii vor fi identificați cu responsabilitate, în colaborare cu instituții locale, școli, cadre didactice, reprezentanți ai comunității și persoane care cunosc situațiile familiilor vulnerabile, astfel încât sprijinul să ajungă la oamenii care au cu adevărat nevoie de el.',
      'Dar „O iarnă cu inimă plină” nu înseamnă doar pachete și cadouri. Ne dorim să oferim și ceea ce uneori lipsește cel mai mult: atenție, apropiere, respect și sentimentul că cineva se gândește la tine.',
      'Prin implicarea voluntarilor, partenerilor, sponsorilor și oamenilor cu suflet, vrem să construim în fiecare iarnă o adevărată mobilizare a comunității în jurul celor care au nevoie de sprijin.',
      'Pentru că uneori un pachet cu alimente înseamnă liniștea unei familii, o haină groasă înseamnă o iarnă mai ușoară, un cadou înseamnă zâmbetul unui copil, iar o vizită poate însemna enorm pentru un om care se simte singur.',
      'În această iarnă, nu oferim doar lucruri. Oferim grijă, speranță și bucuria de a ști că nimeni nu este uitat.',
    ],
    closing: [
      'O comunitate. Multe inimi. O iarnă mai caldă pentru cei care au nevoie de noi.',
    ],
    motto: 'Împreună schimbăm vieți.',
  },
  {
    slug: 'dansam-pentru-o-inima',
    title: 'Dansăm pentru o inimă',
    kind: 'Eveniment',
    period: 'ianuarie – aprilie 2027',
    image: imageDansam,
    imageAlt:
      'Dansatori și invitați la un eveniment caritabil elegant, în fața scenei cu mesajul „Dansăm pentru o inimă”',
    intro:
      'Uneori, schimbarea începe cu un gest. Alteori, cu un pas. Iar atunci când pașii noștri se unesc pentru aceeași cauză, putem transforma o seară de bucurie într-o șansă pentru cineva care are nevoie de noi.',
    body: [
      'Prin evenimentul „Dansăm pentru o inimă”, ne dorim să aducem împreună oameni, comunitatea locală, parteneri și susținători într-o seară în care dansul, muzica și solidaritatea se întâlnesc pentru o cauză bună.',
      'Evenimentul va fi dedicat strângerii de fonduri pentru proiectele și cazurile susținute de Asociația „O Singură Inimă pentru Comunitate”, oferind participanților posibilitatea de a contribui într-un mod frumos și diferit la schimbarea unor vieți.',
      'Ne dorim o seară plină de energie și emoție, în care ringul de dans să devină locul în care oamenii se întâlnesc nu doar pentru a se bucura de muzică, ci și pentru a demonstra că distracția și generozitatea pot merge mână în mână.',
      'Alături de parteneri, sponsori, voluntari și oameni care cred în misiunea noastră, vrem să transformăm „Dansăm pentru o inimă” într-un eveniment al comunității, organizat cu suflet și cu un scop clar: să transformăm fiecare contribuție în ajutor concret pentru cei care au nevoie de noi.',
      'Dincolo de fondurile strânse, evenimentul își propune să creeze legături între oameni, să aducă mai aproape comunitatea de cauzele pe care le susținem și să ne amintească tuturor că schimbările mari pot începe cu gesturi mici.',
      'În această seară nu dansăm doar pentru noi. Dansăm pentru speranță, pentru solidaritate și pentru o inimă care are nevoie de noi.',
    ],
    closing: ['Fiecare pas contează. Fiecare inimă contează.'],
    motto: 'Împreună schimbăm vieți.',
  },
  {
    slug: 'nici-un-bunic-singur',
    title: 'Nici un bunic singur',
    kind: 'Proiect',
    period: 'mai – iulie 2027',
    image: imageBunic,
    imageAlt:
      'O tânără și o persoană vârstnică se țin de mâini peste o masă, într-un cămin primitor cu șemineu și fotografii de familie',
    intro:
      'Pentru mulți dintre noi, bunicii înseamnă familie, povești, înțelepciune și amintiri care ne însoțesc întreaga viață. Din păcate, există persoane vârstnice care își trăiesc zilele în singurătate, cu resurse limitate și fără sprijinul de care au nevoie.',
    body: [
      'Prin proiectul „Nici un bunic singur”, ne propunem să fim alături de persoanele vârstnice vulnerabile din comunitatea noastră și să le oferim nu doar ajutor material, ci și apropiere, respect și sentimentul că nu au fost uitate.',
      'În funcție de situația și nevoile fiecărui beneficiar, sprijinul poate include alimente, produse de igienă și de strictă necesitate, îmbrăcăminte, ajutor pentru procurarea unor lucruri esențiale, precum și alte forme de sprijin pe care le putem asigura prin implicarea comunității, a voluntarilor și a partenerilor noștri.',
      'Beneficiarii vor fi identificați cu responsabilitate, în colaborare cu instituții locale, servicii sociale, reprezentanți ai comunității și oameni care cunosc situațiile persoanelor vârstnice aflate în dificultate.',
      'Dar proiectul „Nici un bunic singur” înseamnă mai mult decât ajutor material. Ne dorim să le oferim vârstnicilor timp, conversație și apropiere umană. Uneori, o vizită, un telefon sau câteva clipe petrecute împreună pot însemna la fel de mult ca un pachet cu alimente.',
      'Prin acest proiect vrem să construim, pas cu pas, o comunitate în care vârstnicii să fie respectați, sprijiniți și să simtă că există oameni cărora le pasă de ei.',
      'Pentru că nimeni nu ar trebui să ajungă la vârsta la care are cea mai mare nevoie de sprijin simțindu-se singur sau uitat.',
    ],
    closing: [
      'O vizită. O conversație. O mână întinsă. Uneori, acestea pot schimba întreaga zi a unui om.',
      'Nici un bunic singur. Nici un om uitat.',
    ],
    motto: 'Împreună schimbăm vieți.',
  },
  {
    slug: 'un-ghiozdan-un-nou-inceput',
    title: 'Un ghiozdan, un nou început',
    kind: 'Proiect',
    period: 'august – septembrie 2027',
    image: imageGhiozdan,
    imageAlt:
      'O elevă cu un ghiozdan plin de rechizite, în fața școlii, în prima zi de școală',
    intro:
      'Pentru un copil, începutul unui nou an școlar ar trebui să însemne emoție, curiozitate și bucuria revederii colegilor. Din păcate, pentru multe familii din comunitatea noastră, această perioadă vine cu grija cheltuielilor pe care nu și le pot permite.',
    body: [
      'Prin proiectul „Un ghiozdan, un nou început”, ne propunem să fim alături de copiii proveniți din familii aflate în dificultate și să le oferim tot ceea ce au nevoie pentru a începe școala cu încredere și demnitate.',
      'Fiecare copil selectat în cadrul proiectului va primi un ghiozdan nou, complet echipat cu rechizite școlare potrivite vârstei și clasei sale, iar acolo unde situația o impune, vom încerca să completăm sprijinul și cu alte lucruri necesare începerii anului școlar.',
      'Beneficiarii vor fi identificați în colaborare cu școli, cadre didactice, instituții locale și membri ai comunității, astfel încât ajutorul să ajungă acolo unde este cu adevărat nevoie.',
      'Ne dorim ca acest proiect să fie mai mult decât oferirea unui ghiozdan. Vrem ca fiecare copil să simtă că nu este singur, că cineva crede în el și că situația financiară a familiei nu trebuie să îi limiteze șansa la educație și la un viitor mai bun.',
      'Pentru noi, fiecare ghiozdan oferit poartă în el mai mult decât rechizite. Poartă încredere, speranță și șansa unui nou început.',
    ],
    closing: [
      'Un ghiozdan. Un copil care merge la școală cu încredere. Un nou început.',
    ],
    motto: 'Împreună schimbăm vieți.',
  },
  {
    slug: 'gala-o-singura-inima',
    title: 'Gala „O Singură Inimă”',
    kind: 'Eveniment',
    period: 'noiembrie 2027',
    image: imageGala,
    imageAlt:
      'Decorațiuni elegante cu lumânări, trandafiri și inimioare aurii la mesele Galei „O Singură Inimă”',
    intro:
      'Există seri care ne aduc împreună și există seri care pot schimba vieți. Gala „O Singură Inimă” își propune să le facă pe amândouă.',
    body: [
      'Concepută ca unul dintre cele mai importante evenimente ale Asociației „O Singură Inimă pentru Comunitate”, Gala va reuni într-un cadru elegant oameni care împărtășesc aceleași valori: generozitate, solidaritate, responsabilitate și dorința de a face bine.',
      'Va fi o seară dedicată comunității și oamenilor care aleg să se implice — parteneri, sponsori, reprezentanți ai mediului de afaceri și ai instituțiilor locale, voluntari și susținători ai cauzelor noastre.',
      'În cadrul Galei vom prezenta proiectele și rezultatele asociației, vom spune poveștile unor oameni și comunități pe care sprijinul primit i-a ajutat să meargă mai departe și vom vorbi despre proiectele pe care dorim să le construim împreună în viitor.',
      'Evenimentul va avea și o importantă componentă de strângere de fonduri, prin care participanții și partenerii vor putea susține proiectele și cauzele Asociației „O Singură Inimă pentru Comunitate”. Fiecare contribuție va fi transformată în ajutor concret, oferit cu responsabilitate și transparență celor care au nevoie de noi.',
      'Dar Gala „O Singură Inimă” va însemna mai mult decât fundraising. Ne dorim să fie și seara în care spunem „Mulțumim” celor care au ales să meargă alături de noi și în care recunoaștem implicarea oamenilor, voluntarilor, companiilor și partenerilor care contribuie la schimbarea comunității noastre.',
      'În timp, ne dorim ca Gala să devină o tradiție anuală, un moment în care privim cu recunoștință la ceea ce am realizat împreună și cu încredere către ceea ce urmează.',
      'Pentru că atunci când oameni diferiți se reunesc în jurul aceleiași cauze, nu mai suntem doar persoane care aleg să ajute.',
      'Devenim o comunitate. Devenim o singură inimă.',
    ],
    closing: [
      'O singură seară. O singură comunitate. O singură inimă pentru cei care au nevoie de noi.',
    ],
    motto: 'Împreună schimbăm vieți.',
  },
]
