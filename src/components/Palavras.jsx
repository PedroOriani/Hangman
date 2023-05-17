export default function Palavras(){
    const random = [
        "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
        "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
        "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
        "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
        "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
        "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
        "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
        "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
        "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
        "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
        "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
        "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
        "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
        "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
        "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
        "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
        "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
        "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
        "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
        "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
        "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
        "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
        "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
    ]

    const nba = [
        "lebron james", "anthony Davis", "Austin Reeves", "Lakers", "Giannis Antetokounmpo", "Krhis Middleton",
        "Jrue Holiday", "Brook Lopez", "Bobby Portis Jr", "Bucks", "Jayson Tatum", "Jaylen Brown", "Al Horford",
        "Derrick White", "Malcolm Brogdon", "Blake Griffin", "Marcus Smart", "Robert Williams", "Celtics", 
        "Joel Embiid", "James Harden", "Tyrese Maxey", "Tobias Harris", "P J Tucker", "Donovan Mitchell",
        "Darius Garland", "Jarret Allen", "Evan Mobley", "Cavaliers", "Jalen Brunson", "Julius Randle", "RJ Barret",
        "Derrick Rose", "Knicks", "Mikal Bridges", "Ben Simmons", "Spencer Dinwiddie", "Seth Curry", "Joe Harris"
        "Nets", "Tare Young", "Dejoun Murray", "Clint Capela", "John Collins", "Bogdan Bogdanovic", "Saddiq Bey",
        "Hawks", "Jimmy Butler", "Tyler Hero", "Bam Adebayo", "Kevin Love", "Kyle Lowry", "Max Strus", "Heat",
        "Pascal Siakam", "Fred VanVleet", "Scottie Barnes", "Gary Trent JR", "OG Anunoby", "Raptyors", 
        "Demar DeRozan", "Zach Lavine", "Lonzo Ball", "Nikola Vucevic", "Alex Caruso", "patrick Beverley",
        "Bulls", "Tyrese Haliburton", "Myles Turner", "Bennedict Mathurin", "Buddy Hield", "George Hill", "Pacers",
        "Kyle Kuzma", "Bradley Beal", "Kristaps Porzingis", "Wizards", "Paolo Banchero", "Bol Bol", "Franz Wagner",
        "Markelle Fultz", "Jalen Suggs", "Magic", "Lamelo Ball", "Kelly Oubre JR", "Gordon Hayward", "Terry Rozier",
        "PJ Washington", "Dennis Smith JR", "Hornets", "James Wiseman", "Cade Cunningham", "Bojan Bogdanovic",
        "Pistons", "Nikola Jokic", "Jamal Murray", "Michael Porter JR", "Aaron Gordon", "Bruce Brown", "Nuggets",
        "Ja Morant", "Dillon Brooks", "Desmond Bane", "Steve Adams", "Jaren Jackson Jr", "Grizzlies", "Damantas Sabonis",
        "Malik Monk", "Harrison Barnes", "Kevin Huerter", "DeAaron Fox", "Kings", "Kevin Durant", "Devin Booker",
        "Chris Paul", "Deandre Ayton", "Cameron Payne", "Damion Lee", "Suns", "Russel Westbrook", "Kawhi Leonard", 
        "Paul George", "Eric Gordon", "Ivica Zubac", "Marcus Morris", "Terance Mann", "Nicolas Batum", "Clippers", 
        "Stephen Curry", "Klay Thompson", "Jordan Poole", "Andrew Wiggins", "Draymond Green", "Kevon Looney", 
        "Gary Payton", "Andre Iguodala", "Warriors", "Dennis Schroder", "DAngelo Russel", "Antohny Edwards", 
        "Karl Anthony Towns", "Rudy Gobert", "Mike Conley Jr", "Timberwolves", "Zion Williamson", "Brandon Ingram", 
        "C J McCollum", "Jonas Valanciunas", "Jose Alvarado", "Pelicans", "Shai Gilgeous Alexander", "Josh Giddey", 
        "Chet Holmgren", "Luka Doncic", "Kyrie Irving", "Christian Wood", "Tim Hardaway JR", "Reggie Bullock", 
        "Dwight Powell", "Maxi Kleber", "Mavericks", "Lauri Markkanen", "Jordan Clarkson", "Jazz", "Damian Lillard", 
        "Jerami Grant", "Jusuf Nurkic", "Cam Reddish", "Blazers", "Jalen Green", "Rockets", "Keldon Johnson", 
        "Tre Jones", "Devin Vassel", "Spurs", "Lary Bird", "Michael Jordan", "Kobe Bryant", "Bill Russel", "Supersonics",
        "kareem abdul jabbar", "Dwayne Wade", "dirk nowitzki", "Steve Nash", "Steve Kerr", "Shaq", "Charles Barkley",
        "Magic Johnson", "Karl Malone", "Scottie Pippen", "Wilt Chamberlain", "Dennis Rodman", "Allen Iverson",
        "Pau Gasol", "Tim Duncan", "Tony Parker", "Carmelo Anthony", "DeMarcus Cousins", "Ray Allen", "Reggie Miller"
    ]

    const animais =[
        "Abelha", "acaro", "agua viva", "aguia", "albatroz", "andorinha", "anemona", "anta", "antilope", 
        "aranha", "arara", "atum", "avestruz", "azulao", "baiacu", "baleia", "barata", "bem te vi", "besouro", 
        "bezerro", "bicho da seda", "bicho pau", "bigua", "bode", "boi", "borboleta", "boto", "bruxinha", "Bufalo", 
        "burro", "cabra", "cacatua", "cachorro", "cagado", "calopsita", "camarao", "camaleao", "camelo", "canario", 
        "canguru", "caracol", "caramujo", "caravela", "carcara", "carneiro", "carpa", "castor", "cavalo", 
        "cavalo marinho", "chimpanze", "chinchila", "cigarra", "cisne", "centopeia", "cervo", "coala", "cobra", 
        "codorna", "coelho", "coiote", "coleiro", "coral", "coruja", "coruja buraqueira", "cordeiro", "corvo", 
        "cotia", "craca", "crocodilo", "cupim", "curio", "diabo da tasmania", "dinossauro", "dragao barbudo", 
        "dragao de Komodo", "dragao do brejo", "dromedario", "elefante", "ema", "enguia", "equidna", "escorpiao", 
        "esponja do mar", "esquilo", "estrela do mar", "faisao", "falcao", "ferrete", "flamingo", "foca", "formiga", 
        "furao", "gaivota", "galinha", "galo", "gamba", "gato", "gavial", "gaviao", "golfinho", "gorila", "gralha", 
        "grilo", "guaxinim", "hamster", "harpia", "hidra", "hiena", "homem", "hipopotamo", "iaque", "ibis", "iguana", 
        "impala", "inseto", "jaburu", "jabuti", "jacare", "jacu", "jaguar", "jaguatirica", "jararaca", "javali", 
        "jiboia", "joaninha", "joao de barro", "jumento", "lacraia", "lagarta", "lagartixa", "lagosta", "lagostim", 
        "leao", "leoa", "lemure", "lesma", "lhama", "ligre", "linguado", "lobo", "lobo cinzento", "lobo guara", 
        "lontra", "louva a deus", "lula", "macaco", "mamute", "marreco", "marimbondo", "mariposa", "marisco", 
        "maritaca", "medusa", "morcego", "mosca", "mosquito", "mico", "minhoca", "mula", "naja", "namorado", "narval", 
        "Nautilus", "onca", "orangotango", "ornitorrinco", "ostra", "ourico", "ovelha", "paca", "panda", "pantera", 
        "papagaio", "papa mosca", "pardal", "passarinho", "pato", "pavao", "peixe", "peixe boi", "percevejo", 
        "perereca", "periquito", "peru", "pica pau. Pintassilgo", "piton", "planaria", "polvo", "pombo", "ponei", 
        "porco", "porco espinho", "porquinho da india", "quati", "quero quero", "quati mirim", "raia", "raposa", 
        "ratazana", "rato", "rena", "rinoceronte", "rouxinol", "sabia", "sagui", "salmao", "sanguessuga", "sanhaco", 
        "sapo", "sardinha", "serpente", "siri", "sucuri", "suricato", "tamandua", "tamandua bandeira", "tamandua mirim",
        "tarantula", "tartaruga", "tatu", "tatui", "tenia", "tentilhao", "tigre", "tilapia", "touro", "traira", 
        "tubarao", "tucano", "tuim", "tuiuiu", "urso branco", "urso pardo", "urso panda", "urso panda vermelho",
        "urubu ", "vaca ", "vaga lume", "veado", "verme", "vespa", "zangao", "zebra", "zebu"
    ]


    return(
        palavras
    );
}