// 오디오 객체 생성 (동일 폴더에 파일이 있어야 합니다)
const bgm = new Audio('bgm.mp3');
bgm.loop = true; // BGM 무한 반복
bgm.volume = 0.5;

const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

// 유럽 단원 50문항 은행 데이터 (전체 통합본)
const questionBank = [
    // [1] 지형 및 기후 (1~14)
    { q: "1. 유럽을 정치, 경제, 문화를 고려하여 구분할 때 영국, 프랑스, 독일 등이 속하는 지역은?", options: ["북부 유럽", "동부 유럽", "서부 유럽", "남부 유럽"], ans: 2, exp: "산업과 경제가 발달한 서부 유럽에는 영국, 프랑스, 독일, 스위스, 네덜란드 등이 있습니다." },
    { q: "2. 다음 중 남부 유럽에 위치한 국가가 아닌 것은?", options: ["에스파냐", "이탈리아", "그리스", "스웨덴"], ans: 3, exp: "스웨덴은 교육과 의료 등의 복지가 발달한 북부 유럽에 속합니다. 남부 유럽에는 에스파냐, 이탈리아, 그리스 등이 있습니다." },
    { q: "3. 아시아 대륙과 유럽 대륙을 구분하는 지리적 기준이 되는 산맥은?", options: ["알프스산맥", "우랄산맥", "아펜니노산맥", "피레네산맥"], ans: 1, exp: "우랄산맥과 캅카스산맥은 아시아와 유럽을 구분하는 지리적 기준이 됩니다." },
    { q: "4. 형성 시기가 비교적 오래되지 않아 해발 고도가 높고 험준하며, 정상 부근에서 만년설을 볼 수 있는 산맥은?", options: ["스칸디나비아산맥", "알프스산맥", "우랄산맥", "카르파티아산맥"], ans: 1, exp: "알프스산맥은 비교적 최근에 형성되어 높고 험준하며, 마터호른 같은 빙하 침식 지형이 있습니다." },
    { q: "5. 오랜 기간 침식 작용을 받아 해발 고도가 낮고 완만한 유럽 북부의 산맥은?", options: ["스칸디나비아산맥", "알프스산맥", "아펜니노산맥", "캅카스산맥"], ans: 0, exp: "스칸디나비아산맥은 형성된 지 오래되어 오랜 기간 침식 작용을 받아 해발 고도가 낮습니다." },
    { q: "6. 빙하의 침식으로 만들어진 U자형 골짜기에 바닷물이 들어와 생긴 좁고 긴 만을 의미하는 지형은?", options: ["피오르", "삼각주", "석호", "해령"], ans: 0, exp: "피오르는 빙하의 침식으로 만들어진 골짜기에 해수면 상승으로 바닷물이 들어온 지형으로, 노르웨이의 송네 피오르가 대표적입니다." },
    { q: "7. 두 해양판 사이로 마그마가 흘러나와 형성된 해령에 위치하여 오늘날에도 화산 활동이 활발한 섬나라는?", options: ["영국", "아일랜드", "아이슬란드", "몰타"], ans: 2, exp: "아이슬란드는 대서양 중앙 해령에 위치하여 화산과 지진 활동이 활발하게 일어납니다." },
    { q: "8. 유럽 서부 지역에서 바다에서 불어오는 편서풍의 영향으로 기온의 연교차가 작고 연중 강수가 고른 기후는?", options: ["지중해성 기후", "서안 해양성 기후", "냉대 기후", "한대 기후"], ans: 1, exp: "서안 해양성 기후는 편서풍의 영향으로 일 년 내내 비가 고르게 내리며 기온이 온화합니다." },
    { q: "9. 여름은 고온 건조하고 겨울은 온화하며 비교적 비가 많이 내리는 유럽 남부의 기후는?", options: ["서안 해양성 기후", "열대 우림 기후", "냉대 기후", "지중해성 기후"], ans: 3, exp: "지중해성 기후 지역은 여름철 아열대 고압대의 영향을 받아 고온 건조하며, 겨울철에는 편서풍의 영향으로 온화하고 비가 내립니다." },
    { q: "10. 유럽 북부와 동부 지역에 넓게 분포하며, 겨울이 길고 추운 기후는?", options: ["냉대 기후", "온대 기후", "건조 기후", "고산 기후"], ans: 0, exp: "북부 유럽과 동부 유럽은 위도가 높아 겨울이 길고 추운 냉대 기후가 넓게 분포합니다." },
    { q: "11. 냉대 기후 지역에 넓게 분포하는 침엽수림 지대를 부르는 명칭은?", options: ["툰드라", "타이가", "사바나", "스텝"], ans: 1, exp: "타이가는 러시아 등 냉대 기후 지역에 넓게 분포하는 침엽수림 지대를 의미합니다." },
    { q: "12. 지중해성 기후 지역인 그리스 산토리니섬에서 가옥의 외벽을 주로 흰색으로 칠하는 까닭은?", options: ["겨울철 추위를 막기 위해", "여름철 강한 햇빛을 차단하기 위해", "바람을 막기 위해", "비를 모으기 위해"], ans: 1, exp: "지중해성 기후의 여름은 고온 건조하므로, 강한 햇빛(일사)을 반사하기 위해 집을 흰색으로 칠합니다." },
    { q: "13. 연중 비가 고르게 내려 하천의 수위가 일정해 수운 교통이 발달하기에 가장 유리한 기후는?", options: ["서안 해양성 기후", "지중해성 기후", "건조 기후", "냉대 기후"], ans: 0, exp: "서안 해양성 기후는 강수량이 연중 고르게 분포하여 독일 라인강 등 하천을 이용한 수운 교통이 발달했습니다." },
    { q: "14. 영국, 프랑스 등 서부 유럽에서 발달한 농업으로, 목초지에서 가축을 사육하며 밀 등을 재배하는 방식은?", options: ["수목 농업", "플랜테이션", "혼합 농업", "이동식 화전 농업"], ans: 2, exp: "서안 해양성 기후 지역에서는 가축 사육과 곡물 재배를 함께하는 혼합 농업이 발달하였습니다." },
    
    // [2] 다양한 기능과 특징을 가진 유럽의 도시 (15~34)
    { q: "15. 지중해 연안의 남부 유럽에서 여름철 고온 건조한 기후를 잘 견디는 올리브, 오렌지 등을 주로 재배하는 농업은?", options: ["혼합 농업", "낙농업", "수목 농업", "오아시스 농업"], ans: 2, exp: "수목 농업은 여름철 고온 건조한 지중해성 기후에 적응하기 위해 뿌리가 깊고 껍질이 두꺼운 나무를 재배하는 방식입니다." },
    { q: "16. 2021년 기준, 유럽 전체 인구 중 도시에 거주하는 인구의 비율(도시화율)은 대략 얼마인가?", options: ["약 25%", "약 50%", "약 75%", "약 90%"], ans: 2, exp: "유럽은 일찍부터 산업화와 도시화가 진행되어 전체 인구의 약 4분의 3(75%)이 도시에 거주합니다." },
    { q: "17. 다음 중 세계 금융의 중심지이자 경제·금융 분야에서 세계적으로 큰 영향력을 미치는 도시는?", options: ["런던", "로마", "아테네", "베네치아"], ans: 0, exp: "영국의 런던, 독일의 프랑크푸르트 등은 오래전부터 경제, 금융 중심지로 성장했습니다." },
    { q: "18. 과거 로마 제국의 수도였으며, 가톨릭교의 중심지인 '바티칸'이 시내에 있는 도시는?", options: ["마드리드", "파리", "로마", "빈"], ans: 2, exp: "이탈리아의 로마에는 역사가 깊은 유적이 많으며, 작은 도시 국가인 바티칸이 있습니다." },
    { q: "19. 100여 개의 섬으로 구성되어 있으며 '아쿠아 알타(Acqua Alta)' 현상이 나타나는 이탈리아의 수상 도시는?", options: ["베네치아", "밀라노", "나폴리", "제노바"], ans: 0, exp: "베네치아는 섬과 운하로 이루어진 수상 도시로, 곤돌라가 주요 이동 수단입니다." },
    { q: "20. 파르테논 신전이 있으며 올림픽이 최초로 열리고 민주주의가 시작된 것으로 알려진 고대 도시는?", options: ["스파르타", "아테네", "이스탄불", "알렉산드리아"], ans: 1, exp: "그리스의 아테네는 고대 서양 문명의 중심지이자 제한적 민주 정치가 실시되었던 곳입니다." },
    { q: "21. 오스트리아의 수도로 유명한 고전 음악가들이 활동한 성지이며, 예술의 도시로 불리는 곳은?", options: ["빌바오", "브뤼셀", "빈", "제네바"], ans: 2, exp: "빈(비엔나)은 음악 축제가 자주 열리는 문화, 예술의 중심지입니다." },
    { q: "22. 세계 무역 기구(WTO), 세계 보건 기구(WHO) 등 다수의 국제기구 본부가 위치해 있는 스위스의 도시는?", options: ["제네바", "취리히", "베른", "바젤"], ans: 0, exp: "스위스의 제네바는 중립국의 이점을 살려 수많은 국제기구의 본부가 자리 잡고 있습니다." },
    { q: "23. 유럽 연합(EU)의 본부와 북대서양 조약 기구(NATO)의 본부가 위치하여 '유럽의 수도'라 불리는 도시는?", options: ["프랑크푸르트", "암스테르담", "브뤼셀", "파리"], ans: 2, exp: "벨기에 브뤼셀에는 EU 집행위원회 등 주요 기관이 있어 유럽 통합의 상징적인 도시입니다." },
    { q: "24. 세계적으로 번성한 무역항이 있어 물류 산업의 중심지 역할을 하며, 유럽의 관문으로 불리는 곳은?", options: ["런던", "로테르담", "함부르크", "리스본"], ans: 1, exp: "네덜란드의 로테르담은 라인강 하구에 위치하여 유럽 최대의 물류 중심지 역할을 합니다." },
    { q: "25. 에스파냐의 도시로, 천재 건축가 가우디의 구엘 공원, 사그라다 파밀리아 성당 등으로 유명한 관광 도시는?", options: ["바르셀로나", "마드리드", "빌바오", "세비야"], ans: 0, exp: "바르셀로나는 가우디의 독특한 건축물들이 유네스코 세계문화유산으로 지정되어 많은 관광객이 찾습니다." },
    { q: "26. 러시아의 수도로 성 바실리 대성당 등 역사적 건축물이 있으며 동부 유럽에 큰 영향력을 미치는 도시는?", options: ["상트페테르부르크", "모스크바", "키이우", "바르샤바"], ans: 1, exp: "모스크바는 러시아의 정치, 경제, 문화적 중심지입니다." },
    { q: "27. 역사가 깊은 유럽의 도시 중심부에 주로 위치하며, 집회, 시장, 문화 활동의 장소로 이용된 공간은?", options: ["광장", "운하", "항만", "산업단지"], ans: 0, exp: "프라하의 구시가지 광장, 뮌헨의 마리엔 광장처럼 유럽 도시는 광장을 중심으로 주요 건물이 배치되어 있습니다." },
    { q: "28. 과거 제철 산업과 조선업이 번성했으나 쇠퇴한 후, 강변에 생태 공원과 구겐하임 미술관을 조성해 부흥한 에스파냐의 도시는?", options: ["바르셀로나", "빌바오", "말뫼", "마드리드"], ans: 1, exp: "빌바오는 문화 예술 및 생태 공간 중심의 도시 재생 사업을 통해 새로운 관광 도시로 탈바꿈하였습니다." },
    { q: "29. 특정 랜드마크나 멋진 건축물이 도시 전체의 경제적, 문화적 부흥을 일으키는 현상을 뜻하는 용어는?", options: ["나비 효과", "도미노 효과", "스프롤 현상", "빌바오 효과"], ans: 3, exp: "빌바오 효과는 스페인 빌바오의 구겐하임 미술관 유치 성공 사례에서 유래된 용어입니다." },
    { q: "30. 환경, 경제, 사회가 조화를 이루며 기후위기에 대응하여 장기적으로 발전이 이루어질 수 있는 도시를 일컫는 말은?", options: ["스마트 도시", "지속가능한 도시", "산업 도시", "메가시티"], ans: 1, exp: "지속가능한 도시는 현재 세대와 미래 세대 모두의 필요를 충족할 수 있도록 친환경 정책을 실천하는 도시입니다." },
    { q: "31. 태양광 지붕을 설치하는 등 친환경 에너지 자립 도시로의 정체성을 이어가고 있는 독일의 도시는?", options: ["베를린", "프랑크푸르트", "뮌헨", "프라이부르크"], ans: 3, exp: "프라이부르크는 시민들의 자발적 참여를 바탕으로 태양광 등 친환경 에너지를 생산하는 생태 도시입니다." },
    { q: "32. 2025년부터 화석 에너지 자동차 판매를 금지하고 전기차 사용을 지원하는 등 탄소 배출 감소에 힘쓰는 노르웨이의 도시는?", options: ["오슬로", "스톡홀름", "코펜하겐", "헬싱키"], ans: 0, exp: "오슬로는 전기 자동차 세금 면제, 주차비 할인 등 적극적인 친환경 교통 정책을 펼치고 있습니다." },
    { q: "33. 스웨덴의 말뫼는 조선업이 쇠퇴한 후 오늘날 주로 어떤 산업을 중심으로 부흥하였는가?", options: ["금융 산업", "신·재생 에너지 산업", "항공 우주 산업", "제철 산업"], ans: 1, exp: "말뫼는 조선업 중심지에서 친환경 신재생 에너지 산업 및 생태 주거 단지로 변모했습니다." },
    { q: "34. 사물 인터넷(IoT), 인공지능(AI) 등의 기술을 이용하여 정보를 수집하고 자원을 효율적으로 관리하는 도시는?", options: ["스마트 도시", "전원 도시", "역사 도시", "소비 도시"], ans: 0, exp: "스마트 도시는 첨단 정보 통신 기술을 활용하여 교통, 환경 문제 등을 해결하는 도시 형태입니다." },

    // [3] 유럽의 통합과 분리 움직임 (35~50)
    { q: "35. 1952년, 유럽 국가들이 자원을 공동으로 관리하고 경제적으로 협력하기 위해 최초로 결성한 기구는?", options: ["유럽 연합(EU)", "북대서양 조약 기구(NATO)", "유럽 경제 공동체(EEC)", "유럽 석탄 철강 공동체(ECSC)"], ans: 3, exp: "제2차 세계 대전 이후 평화와 경제 협력을 목적으로 유럽 석탄 철강 공동체(ECSC)가 먼저 출범했습니다." },
    { q: "36. 유럽 통합의 발전 순서로 가장 알맞은 것은?", options: ["ECSC → EEC → EC → EU", "EEC → ECSC → EU → EC", "EU → EC → EEC → ECSC", "ECSC → EC → EEC → EU"], ans: 0, exp: "유럽은 유럽 석탄 철강 공동체(ECSC)에서 출발하여 경제 공동체(EEC), 공동체(EC)를 거쳐 유럽 연합(EU)으로 발전했습니다." },
    { q: "37. 유럽 연합(EU)이 공식적으로 출범하여 경제적, 정치적 통합을 강화하기 시작한 연도는?", options: ["1952년", "1967년", "1993년", "2020년"], ans: 2, exp: "유럽 연합(EU)은 마스트리흐트 조약을 바탕으로 1993년에 공식 출범하였습니다." },
    { q: "38. 유럽 연합(EU) 회원국 간에 경제 교류를 원활히 하기 위해 없앤 세금 제도는?", options: ["부가가치세", "법인세", "소득세", "관세"], ans: 3, exp: "유럽 연합은 회원국 간의 관세를 철폐하여 상품, 자본, 노동력, 서비스의 자유로운 이동을 보장합니다." },
    { q: "39. 영국, 스위스 등을 제외한 대부분의 유럽 연합 회원국이 공용으로 사용하는 단일 화폐는?", options: ["파운드", "달러", "유로(Euro)", "프랑"], ans: 2, exp: "환전의 번거로움을 없애고 경제적 결속력을 높이기 위해 대부분의 회원국이 '유로(Euro)'를 사용합니다." },
    { q: "40. 유럽 연합 회원국 주민들이 국경을 지날 때 비자나 여권 없이 자유롭게 이동할 수 있도록 맺은 조약은?", options: ["베르사유 조약", "솅겐 조약", "제네바 협약", "파리 기후 협약"], ans: 1, exp: "솅겐 조약(Schengen Agreement)을 통해 가입국 간에는 인적, 물적 이동 시 국경 검문을 생략합니다." },
    { q: "41. 국토의 일부가 유럽에 속해 있으며, 오랜 기간 유럽 연합 가입을 추진 중이나 키프로스 분쟁 등으로 협상이 지연된 국가는?", options: ["러시아", "튀르키예", "노르웨이", "아이슬란드"], ans: 1, exp: "튀르키예는 아시아와 유럽에 걸쳐 있는 국가로, EU 가입을 적극적으로 희망하고 있습니다." },
    { q: "42. 2020년 1월, 이민자 문제와 분담금 부담 등을 이유로 국민 투표를 거쳐 유럽 연합(EU)을 공식 탈퇴한 국가는?", options: ["영국", "프랑스", "독일", "스위스"], ans: 0, exp: "영국은 영국의 유럽 연합 탈퇴를 의미하는 브렉시트(Brexit)를 2020년에 공식 단행했습니다." },
    { q: "43. 영국의 유럽 연합 탈퇴 현상을 뜻하는 합성어로 옳은 것은?", options: ["프렉시트", "그렉시트", "브렉시트", "이탈렉시트"], ans: 2, exp: "브렉시트(Brexit)는 영국(Britain)과 탈퇴(Exit)를 합쳐 만든 신조어입니다." },
    { q: "44. 영국 국민들이 유럽 연합 탈퇴를 찬성했던 가장 큰 이유 중 하나는?", options: ["관세 면제 혜택 유지", "유럽 연합 분담금 지출 증가 및 이민자 유입에 따른 부담", "유로화 사용 확대", "다른 국가 복지 비용 지원"], ans: 1, exp: "EU 분담금 지출 부담과 이민자 유입으로 인한 취업난, 복지 지출 증가가 주요 찬성 이유였습니다." },
    { q: "45. 영국의 구성 국가 중 잉글랜드와의 역사적 갈등이 존재하며, 브렉시트 이후 분리 독립 목소리가 다시 커진 지역은?", options: ["웨일스", "카탈루냐", "플랑드르", "스코틀랜드"], ans: 3, exp: "영국 연합 왕국 내 스코틀랜드는 잉글랜드와 역사적, 문화적 차이가 뚜렷하여 독립을 꾸준히 요구하고 있습니다." },
    { q: "46. 에스파냐 전체 국내 총생산의 약 20%를 차지할 정도로 경제력이 뛰어나며, 고유한 언어를 사용하여 분리 독립을 요구하는 지역은?", options: ["파다니아", "안달루시아", "카탈루냐", "플랑드르"], ans: 2, exp: "카탈루냐 지역은 바르셀로나를 중심으로 부유한 경제력을 바탕으로 스페인으로부터의 독립을 주장하고 있습니다." },
    { q: "47. 벨기에 북부에 위치하며 네덜란드어를 사용하고 지식 기반 산업이 발달하여 경제적으로 부유한 지역은?", options: ["왈롱", "플랑드르", "바스크", "파다니아"], ans: 1, exp: "벨기에는 네덜란드어를 쓰는 북부 플랑드르(부유함)와 프랑스어를 쓰는 남부 왈롱(상대적 빈곤) 간의 갈등이 있습니다." },
    { q: "48. 벨기에 남부에 위치하며 프랑스어를 사용하고 농업 및 광업 중심의 쇠퇴한 산업 구조를 가진 지역은?", options: ["플랑드르", "왈롱", "북아일랜드", "스코틀랜드"], ans: 1, exp: "왈롱 지역은 플랑드르 지역과의 경제적 격차 및 언어 차이로 인해 심각한 지역 갈등을 겪고 있습니다." },
    { q: "49. 이탈리아에서 공업과 제조업이 발달하여 부유한 북부 지역이 상대적으로 가난한 남부 농업 지역과 분리되려 하는 지역의 이름은?", options: ["시칠리아", "나폴리", "로마", "파다니아"], ans: 3, exp: "이탈리아 북부의 '파다니아' 지역 주민들은 남부 지역 지원에 세금이 쓰이는 것에 반발하여 자치나 독립을 요구합니다." },
    { q: "50. 유럽 연합에서 탈퇴한 국가가 겪게 될 부정적인 영향으로 적절하지 않은 것은?", options: ["관세 부활로 인한 수출 감소 우려", "유럽 연합 분담금 지출 비용 절감", "국가 간 인력 채용 및 취업의 어려움 발생", "회원국 간 교역량 감소로 경제 성장 둔화"], ans: 1, exp: "분담금 비용을 절감하는 것은 긍정적인 요인(찬성 근거)이며, 관세 부활이나 인적 교류 제한은 부정적 영향에 해당합니다." }
];

const startScreen = document.getElementById('start-screen');
const quizSection = document.getElementById('quiz-section');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const nextButton = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const finalScoreElement = document.getElementById('score');

const startGameBtn = document.getElementById('start-game-btn');
const restartButton = document.getElementById('restart-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// 게임 시작 (오디오 권한 획득)
startGameBtn.addEventListener('click', () => {
    bgm.play().catch(e => console.log("BGM 자동 재생 차단됨 (브라우저 정책)"));
    startScreen.classList.add('hide');
    startGame();
});

function startGame() {
    // 50문항 전체 풀에서 10문제를 무작위 셔플 후 추출
    currentQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    resultContainer.classList.add('hide');
    quizSection.classList.remove('hide');
    updateScoreBoard();
    showQuestion();
}

function updateScoreBoard() {
    progressText.innerText = `STAGE ${currentQuestionIndex + 1} / 10`;
    scoreText.innerText = `SCORE: ${score * 100}`;
}

function showQuestion() {
    resetState();
    updateScoreBoard();
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.q;

    currentQuestion.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('game-btn');
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
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log("효과음 재생 차단됨"));
    } else {
        selectedButton.classList.add('wrong');
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e => console.log("효과음 재생 차단됨"));
        
        // 오답일 경우 정답도 초록색으로 표시해 줌
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") button.classList.add('correct');
        });
    }

    updateScoreBoard();

    // 한 번 선택 후 모든 버튼 비활성화
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
    quizSection.classList.add('hide');
    resultContainer.classList.remove('hide');
    finalScoreElement.innerText = score;
    bgm.pause(); // 결과창에서 BGM 정지
}

restartButton.addEventListener('click', () => {
    bgm.currentTime = 0;
    bgm.play().catch(e => console.log("BGM 재생 차단됨"));
    startGame();
});
