// 유럽 단원 50문항 은행 데이터
const questionBank = [
    { q: "유럽을 지역적으로 구분할 때, 영국, 프랑스, 독일 등이 속하는 지역은?", options: ["북부 유럽", "동부 유럽", "서부 유럽", "남부 유럽"], ans: 2, exp: "산업과 경제가 발달한 서부 유럽에는 영국, 프랑스, 독일, 스위스, 네덜란드 등이 있습니다. [cite: 254]" },
    { q: "다음 중 남부 유럽에 위치한 국가가 아닌 것은?", options: ["에스파냐", "이탈리아", "그리스", "스웨덴"], ans: 3, exp: "스웨덴은 교육과 의료 등의 복지가 발달한 북부 유럽에 속합니다. 남부 유럽에는 에스파냐, 이탈리아, 그리스 등이 있습니다. [cite: 254, 255]" },
    { q: "과거 로마 제국의 수도였으며 가톨릭교의 중심지인 '바티칸'이 있는 도시는?", options: ["런던", "로마", "파리", "베를린"], ans: 1, exp: "로마는 과거 로마 제국의 수도였으며, 가톨릭교의 중심지인 '바티칸'이 시내에 있습니다. [cite: 274]" },
    { q: "18세기 산업 혁명이 시작된 곳으로 오늘날 세계 금융의 중심지 역할을 하는 도시는?", options: ["파리", "런던", "모스크바", "마드리드"], ans: 1, exp: "런던은 18세기 산업 혁명이 시작된 곳으로, 오늘날에는 세계 금융의 중심지 역할을 합니다. [cite: 271, 299]" },
    { q: "유럽 남부에 위치하며 높고 험준하여 정상 부근에서 만년설을 볼 수 있는 산맥은?", options: ["우랄산맥", "스칸디나비아산맥", "알프스산맥", "카르파티아산맥"], ans: 2, exp: "알프스산맥은 형성 시기가 비교적 오래되지 않아 해발 고도가 높고 험준합니다. [cite: 135, 306]" },
    { q: "오랜 기간 침식 작용을 받아 해발 고도가 비교적 낮은 유럽 북부의 산맥은?", options: ["스칸디나비아산맥", "알프스산맥", "아펜니노산맥", "캅카스산맥"], ans: 0, exp: "스칸디나비아산맥은 오랜 기간 침식 작용을 받아 해발 고도가 낮습니다. [cite: 306]" },
    { q: "빙하의 침식으로 만들어진 골짜기에 바닷물이 들어와 생긴 좁고 긴 만을 의미하는 지형은?", options: ["타이가", "피오르", "삼각주", "해령"], ans: 1, exp: "피오르는 빙하의 침식으로 만들어진 골짜기에 빙하가 없어진 후 바닷물이 들어와서 생긴 지형입니다. 노르웨이의 송네 피오르가 대표적입니다. [cite: 313]" },
    { q: "두 해양판 사이로 마그마가 흘러나와 형성된 해령에 위치하여 화산이 분포하는 섬나라는?", options: ["아이슬란드", "영국", "아일랜드", "몰타"], ans: 0, exp: "아이슬란드는 두 해양판 사이로 마그마가 흘러나와 형성된 해령에 위치한 섬으로 화산이 분포합니다. [cite: 308]" },
    { q: "유럽 서부 지역에서 바다에서 불어오는 편서풍의 영향으로 일 년 내내 비가 고르게 내리는 기후는?", options: ["지중해성 기후", "냉대 기후", "한대 기후", "서안 해양성 기후"], ans: 3, exp: "서부 유럽은 편서풍의 영향으로 기온의 연교차가 작고 계절별 강수량이 고른 서안 해양성 기후가 나타납니다. [cite: 321]" },
    { q: "여름은 덥고 건조하며, 겨울은 온화하고 비교적 비가 많이 내리는 남부 유럽의 기후는?", options: ["서안 해양성 기후", "지중해성 기후", "냉대 기후", "건조 기후"], ans: 1, exp: "남부 유럽은 지중해성 기후가 나타나 여름은 고온 건조하고 겨울은 온화합니다. [cite: 322]" },
    { q: "유럽 북부와 동부 지역에 넓게 분포하며, 겨울이 길고 추운 기후는?", options: ["냉대 기후", "온대 기후", "지중해성 기후", "서안 해양성 기후"], ans: 0, exp: "북부 유럽과 동부 유럽은 겨울이 길고 추운 냉대 기후가 넓게 분포합니다. [cite: 323]" },
    { q: "냉대 기후 지역에 넓게 분포하는 침엽수림 지대를 부르는 명칭은?", options: ["툰드라", "타이가", "사바나", "초원"], ans: 1, exp: "러시아 등 냉대 기후 지역에는 침엽수림 지대인 타이가가 넓게 분포합니다. [cite: 319]" },
    { q: "지중해성 기후 지역인 그리스 산토리니섬 등에서 여름철 강한 햇빛을 차단하기 위해 가옥 외벽에 주로 칠하는 색깔은?", options: ["검은색", "파란색", "흰색", "빨간색"], ans: 2, exp: "지중해성 기후 지역은 고온 건조한 여름철의 강한 햇빛을 차단하기 위해 가옥의 외벽을 주로 흰색으로 칠합니다. [cite: 394]" },
    { q: "일 년 내내 비가 고르게 내려 하천의 수위가 일정하여 수운 교통이 발달하기 유리한 기후 지역은?", options: ["서안 해양성 기후", "열대 우림 기후", "지중해성 기후", "냉대 기후"], ans: 0, exp: "서안 해양성 기후 지역은 연중 비가 고르게 내려 하천의 유량 변동이 작아 수운 교통에 유리합니다. [cite: 389]" },
    { q: "프랑크푸르트, 런던 등과 같이 자본이 집중하고 영향력이 큰 유럽의 주요 도시가 주로 담당하는 기능은?", options: ["농업", "경제·금융", "자원 채굴", "군사"], ans: 1, exp: "독일의 프랑크푸르트나 영국의 런던 등은 오래전부터 경제·금융 도시로서 영향력이 큽니다. [cite: 461, 466]" },
    { q: "오스트리아의 수도로 유명한 예술가들이 활동한 고전 음악의 성지이며 예술의 도시로 불리는 곳은?", options: ["제네바", "빌바오", "빈", "브뤼셀"], ans: 2, exp: "빈(비엔나)은 유명한 예술가들이 활동한 고전 음악의 성지이며 문화·예술 도시로 유명합니다. [cite: 463, 540, 541]" },
    { q: "과거 제철 산업과 조선업이 번성했으나, 현재는 구겐하임 미술관 등 문화 공간을 바탕으로 관광 산업 도시로 탈바꿈한 에스파냐의 도시는?", options: ["빌바오", "파리", "로테르담", "모스크바"], ans: 0, exp: "빌바오는 항만 시설을 옮기고 생태 공원 및 구겐하임 미술관을 조성하여 관광 도시로 변화하였습니다. [cite: 464, 479, 480]" },
    { q: "100여 개의 섬으로 구성되어 있으며 곤돌라를 타고 도시를 둘러볼 수 있는 이탈리아의 수상 도시는?", options: ["밀라노", "나폴리", "베네치아", "아테네"], ans: 2, exp: "베네치아는 이탈리아 북동부에 있는 수상 도시로 곤돌라와 '베니스의 상인' 배경으로 유명합니다. [cite: 531, 532, 533]" },
    { q: "유럽 연합(EU)의 본부와 북대서양 조약 기구(NATO)의 본부가 있어 '유럽의 수도'로 불리는 도시는?", options: ["프랑크푸르트", "브뤼셀", "암스테르담", "제네바"], ans: 1, exp: "벨기에 브뤼셀에는 EU 및 NATO 본부가 있어 정치적으로 유럽 여러 국가에 큰 영향을 줍니다. [cite: 500, 546]" },
    { q: "세계 무역 기구(WTO), 세계 보건 기구(WHO) 등 세계적으로 영향력이 큰 국제기구의 본부가 많이 위치한 스위스의 도시는?", options: ["취리히", "제네바", "베른", "빈"], ans: 1, exp: "스위스 제네바에는 WTO, ILO, WHO 등 큰 국제기구의 본부가 많습니다. [cite: 502, 503]" },
    { q: "고대 유적인 파르테논 신전이 있으며 올림픽이 최초로 열리고 민주주의가 시작된 것으로 알려진 그리스의 도시는?", options: ["스파르타", "로마", "아테네", "이스탄불"], ans: 2, exp: "아테네는 고대 유적으로 유명하며, 올림픽 최초 개최지이자 민주주의가 시작된 곳입니다. [cite: 510]" },
    { q: "러시아의 수도로 성 바실리 대성당과 같은 랜드마크가 있으며, 구소련 국가들에게 영향력이 큰 도시는?", options: ["상트페테르부르크", "모스크바", "키이우", "블라디보스토크"], ans: 1, exp: "모스크바는 러시아의 수도로 성 바실리 대성당 등 건축물이 유명하며 영향력이 큰 도시입니다. [cite: 514]" },
    { q: "세계 물류 산업의 중심지 역할을 하며, 교통이 발달하여 유럽의 관문으로 불리는 네덜란드의 항구 도시는?", options: ["암스테르담", "로테르담", "함부르크", "빌바오"], ans: 1, exp: "로테르담은 무역항이 번성하여 오늘날 세계 물류 산업의 중심지 역할을 합니다. [cite: 500, 538]" },
    { q: "천재 건축가 가우디의 작품인 사그라다 파밀리아 성당, 구엘 공원 등으로 유명한 에스파냐의 관광 도시는?", options: ["마드리드", "바르셀로나", "세비야", "발렌시아"], ans: 1, exp: "바르셀로나는 가우디의 건축물 등 문화유산이 많아 관광 도시로 발달하였습니다. [cite: 462, 507]" },
    { q: "태양광 지붕을 설치하는 등 친환경 에너지 자립 도시로의 정체성을 이어가고 있는 독일의 생태 도시는?", options: ["프라이부르크", "프랑크푸르트", "베를린", "뮌헨"], ans: 0, exp: "프라이부르크는 태양광 에너지 생산을 장려하며 전체 에너지의 약 15%를 충당하는 친환경 도시입니다. [cite: 463, 577, 579]" },
    { q: "2025년부터 화석 에너지 자동차 판매를 금지하고 전기 자동차 사용 보조 정책을 펼치는 노르웨이의 도시는?", options: ["스톡홀름", "코펜하겐", "헬싱키", "오슬로"], ans: 3, exp: "오슬로는 전기 자동차 사용 장려 및 자전거 상용화를 통해 탄소 배출을 줄이려 노력하고 있습니다. [cite: 583, 584, 585]" },
    { q: "환경, 경제, 사회가 조화를 이루며 기후위기에 대응하여 장기적으로 발전이 이루어질 수 있는 도시를 일컫는 말은?", options: ["스마트 도시", "지속가능한 도시", "산업 도시", "위성 도시"], ans: 1, exp: "지속가능한 도시는 기후위기에 대응하여 장기적으로 지속가능한 발전이 이루어질 수 있는 도시입니다. [cite: 569]" },
    { q: "기후위기에 대응하여 탄소 배출을 줄이기 위해 가장 적극적으로 활용해야 하는 에너지는?", options: ["화석 에너지", "친환경 에너지", "원자력 에너지", "석탄 에너지"], ans: 1, exp: "화석 에너지 사용을 줄이고 친환경 에너지를 적극적으로 활용하여 탄소 배출을 줄이려 노력해야 합니다. [cite: 570]" },
    { q: "1952년, 유럽 국가들이 자원을 공동으로 관리하고 경제적으로 협력하기 위해 결성한 단체는?", options: ["유럽 연합(EU)", "북대서양 조약 기구(NATO)", "유럽 석탄 철강 공동체(ECSC)", "세계 무역 기구(WTO)"], ans: 2, exp: "유럽 국가들은 일찍부터 자원 공동 관리의 필요성을 느껴 유럽 석탄 철강 공동체(ECSC)를 결성하였습니다. [cite: 671, 682]" },
    { q: "유럽 경제 공동체(EEC)와 유럽 공동체(EC)를 거쳐 1993년에 공식적으로 출범한 기구의 이름은?", options: ["유럽 연합(EU)", "국제 연합(UN)", "유럽 중앙은행(ECB)", "유로존"], ans: 0, exp: "1993년에 유럽 연합(EU)이 공식적으로 출범하여 경제적, 정치적 통합을 추구하고 있습니다. [cite: 672, 685]" },
    { q: "유럽 연합 회원국 간에 경제 교류를 원활히 하기 위해 없앤 세금 제도는?", options: ["부가가치세", "관세", "소득세", "법인세"], ans: 1, exp: "유럽 연합은 회원국 간의 관세를 없애 상품, 자본, 노동력 등의 자유로운 이동을 추구합니다. [cite: 691, 758]" },
    { q: "영국, 스위스, 덴마크 등을 제외한 대부분의 유럽 연합 회원국이 공용으로 사용하는 단일 화폐는?", options: ["달러", "파운드", "유로", "프랑"], ans: 2, exp: "유럽 연합 회원국 대부분은 유로(Euro)라는 단일 화폐를 사용하여 환전의 번거로움을 줄였습니다. [cite: 646, 692]" },
    { q: "유럽 연합 회원국 주민들이 국경을 지날 때 비자나 여권 없이 자유롭게 이동할 수 있도록 한 조약은?", options: ["솅겐 조약", "제네바 협약", "파리 기후 협약", "북대서양 조약"], ans: 0, exp: "유럽 연합은 솅겐 조약을 맺어 회원국 간 공동 출입국 관리 정책을 시행, 인적 이동이 자유롭습니다. [cite: 64, 65]" },
    { q: "오늘날 유럽 연합에 가입하기 위해 노력하고 있으나 키프로스 분쟁 등으로 협상이 지연되고 있는 국가 중 하나는?", options: ["러시아", "튀르키예", "노르웨이", "아이슬란드"], ans: 1, exp: "튀르키예는 유럽 연합 가입을 적극 추진 중이나 키프로스 분쟁과 일부 회원국의 반대로 협상이 멈춘 상태입니다. [cite: 719, 720]" },
    { q: "2020년, 국민 투표를 거쳐 유럽 연합(EU)을 공식적으로 탈퇴한 국가는?", options: ["프랑스", "영국", "스웨덴", "이탈리아"], ans: 1, exp: "영국은 이주민 문제와 분담금 부담 등의 이유로 2020년에 공식적으로 유럽 연합을 탈퇴(브렉시트)하였습니다. [cite: 767, 799]" },
    { q: "영국의 유럽 연합 탈퇴 현상을 뜻하는 합성어는?", options: ["그렉시트", "프렉시트", "브렉시트", "이탈렉시트"], ans: 2, exp: "브렉시트(Brexit)는 영국(Britain)과 탈퇴(Exit)를 합친 말로 영국의 유럽 연합 탈퇴를 의미합니다. [cite: 800]" },
    { q: "영국에서 유럽 연합 탈퇴(브렉시트)를 찬성했던 주요 이유로 옳지 않은 것은?", options: ["이민자 유입에 따른 취업난", "유럽 연합 분담금 지출 부담", "관세 면제로 인한 수출 증가", "복지 비용 지출 증가"], ans: 2, exp: "영국 내 이주민 유입으로 취업이 어려워지고 EU 분담금이 증가한 것이 주된 탈퇴 이유였습니다. 관세 면제 혜택 상실은 오히려 브렉시트의 단점입니다. [cite: 769, 801, 802]" },
    { q: "에스파냐에서 경제적 영향력이 매우 크며, 독자적인 언어와 문화를 바탕으로 분리 독립을 요구하는 지역은?", options: ["파다니아", "안달루시아", "플랑드르", "카탈루냐"], ans: 3, exp: "카탈루냐 지역은 에스파냐 GDP의 약 20%를 차지하며 고유한 문화를 바탕으로 분리 독립을 요구하고 있습니다. [cite: 775, 776]" },
    { q: "벨기에에서 지식 기반 산업이 발달하여 부유하며, 네덜란드어를 사용하는 북부 지역은?", options: ["왈롱 지역", "플랑드르 지역", "브뤼셀", "스코틀랜드"], ans: 1, exp: "벨기에 플랑드르 지역은 부가가치가 높은 지식 기반 산업이 발달하였으며 네덜란드어를 사용합니다. [cite: 785, 786]" },
    { q: "벨기에에서 농업과 광업 중심의 산업 구조로 인해 플랑드르 지역과 경제적 격차 및 언어 갈등을 겪는 프랑스어 사용 지역은?", options: ["플랑드르 지역", "카탈루냐 지역", "왈롱 지역", "파다니아 지역"], ans: 2, exp: "왈롱 지역은 농업과 광업 중심이며 프랑스어를 사용하여 플랑드르 지역과 갈등이 나타납니다. [cite: 785, 787]" },
    { q: "제조업이 발달한 북부 지역과 농업이 발달한 남부 지역 간의 경제적 격차로 인해 분리 독립 움직임이 나타나는 국가는?", options: ["이탈리아", "독일", "프랑스", "네덜란드"], ans: 0, exp: "이탈리아는 북부(파다니아 등)와 남부 간의 경제적 격차가 커 분리 움직임이 나타납니다. [cite: 752, 766]" },
    { q: "잉글랜드, 스코틀랜드, 웨일스, 북아일랜드의 네 지역이 연합을 이루어 지역별 역사적 배경 차이로 갈등이 발생하는 국가는?", options: ["스페인", "영국", "스위스", "벨기에"], ans: 1, exp: "영국은 네 지역이 연합을 이룬 국가로 역사적, 문화적 차이로 갈등이 발생하며 스코틀랜드 등의 독립 움직임이 있습니다. [cite: 755]" },
    { q: "유럽의 통합 과정에서 결성된 순서로 가장 올바른 것은?", options: ["EU -> EC -> ECSC", "ECSC -> EC -> EU", "EC -> EEC -> EU", "EEC -> EU -> ECSC"], ans: 1, exp: "유럽은 ECSC(석탄철강공동체) -> EEC(경제공동체) -> EC(공동체) -> EU(연합) 순으로 발전하였습니다. [cite: 671, 672] (과정 요약)" },
    { q: "유럽 도시 내에서 집회, 시장, 문화 활동 등을 위해 발달하였으며, 뮌헨의 마리엔, 프라하의 구시가지 등 도시 중심에 위치한 공간은?", options: ["광장", "항구", "운하", "공단"], ans: 0, exp: "역사가 깊은 유럽의 도시에는 '광장'을 중심으로 주요 건축물이 많으며 집회, 시장 용도로 쓰였습니다. [cite: 435, 448]" },
    { q: "로마에 완전히 둘러싸여 있는 세계에서 가장 작은 도시 국가이자 가톨릭의 중심지는?", options: ["산마리노", "모나코", "바티칸", "안도라"], ans: 2, exp: "바티칸은 로마에 둘러싸인 도시 국가로, 가톨릭교의 수장인 교황을 국가 원수로 둡니다. [cite: 269]" },
    { q: "서부 유럽 국가들에서 주로 볼 수 있으며, 목초지 조성에 유리한 기후를 바탕으로 가축 사육과 곡물 재배를 함께하는 농업 형태는?", options: ["수목 농업", "혼합 농업", "이동식 화전 농업", "유목"], ans: 1, exp: "영국, 프랑스, 독일 등 서부 유럽은 기후를 바탕으로 가축 사육과 곡물 재배를 함께하는 혼합 농업이 발달했습니다. [cite: 121, 122, 123]" },
    { q: "여름이 고온 건조한 지중해 연안 남부 유럽 국가에서 올리브, 오렌지 등을 주로 재배하는 농업 형태는?", options: ["혼합 농업", "플랜테이션", "수목 농업", "낙농업"], ans: 2, exp: "남부 유럽에서는 여름철 고온 건조한 기후에 잘 견디는 올리브 등을 재배하는 수목 농업이 발달했습니다. [cite: 126, 127]" },
    { q: "유럽 전체 인구 중 도시에 거주하는 인구의 비율(도시화율)은 대략 어느 정도인가?", options: ["약 25%", "약 50%", "약 75%", "약 95%"], ans: 2, exp: "2021년 유럽의 도시화율은 약 75%로, 전체 인구의 약 4분의 3이 도시에 살고 있습니다. [cite: 261]" },
    { q: "도시의 디자인이나 특정 건축물이 도시 전체의 경제와 문화적 부흥을 일으키는 현상을 일컫는 말은?", options: ["나비 효과", "빌바오 효과", "온실 효과", "스프롤 현상"], ans: 1, exp: "건축물이 도시 전체의 부흥을 일으키는 현상을 에스파냐 도시 이름을 따 빌바오 효과라고 합니다. [cite: 475]" },
    { q: "유럽 연합(EU) 회원국 간의 수입 상품에 부과하지 않기로 합의하여 경제 통합을 촉진한 세금의 명칭은?", options: ["부가가치세", "관세", "재산세", "소비세"], ans: 1, exp: "유럽 연합 회원국 간에는 수입 상품에 부과하는 세금인 '관세'를 없앴습니다. [cite: 691, 907]" }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const nextButton = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    // 50문항 중 10문항 무작위 추출
    currentQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    
    showQuestion();
}

function showQuestion() {
    resetState();
    progressText.innerText = `문제 ${currentQuestionIndex + 1} / 10`;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.q;

    currentQuestion.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('btn');
        if (index === currentQuestion.ans) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    explanationBox.classList.add('hide');
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") button.classList.add('correct');
        });
    }

    // 선택 후 버튼 비활성화
    Array.from(answerButtonsElement.children).forEach(button => button.disabled = true);

    // 해설 표시
    explanationText.innerText = currentQuestions[currentQuestionIndex].exp;
    explanationBox.classList.remove('hide');
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = score;
}

restartButton.addEventListener('click', startGame);

// 초기 게임 시작
startGame();
