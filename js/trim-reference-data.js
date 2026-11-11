/* ============================================================================
 * 오토지니 수입차 트림 설명 참고 자료 (2026-11-02)
 * ==========================================================================
 * 각 차종의 TXT / WebP (업로드 자료 76종, 기능 518개)에서 추출했습니다.
 *   - 명칭 / 설명 / 국내 적용 조건 / 이미지 파일명은 업로드 자료를 유지했습니다.
 *   - 옵션 구성은 같은 차종 안에서도 엔진/연식/트림별로 다릅니다.
 *   - 정확한 기본/선택 장비 여부가 검증되지 않은 내용은 '차종 참고 기능'으로 표시합니다.
 *
 * 트림 팝업 ON/OFF: js/script.js → ENABLE_TRIM_DETAIL_POPUP = true / false
 *
 * 추가 입력이 필요할 때: AutoGenieTrimReference["브랜드|차량|세부모델|트림"]
 * 에 직접 넣으면 이 파일 아래의 '차종 참고 데이터'보다 우선 적용됩니다.
 * 현재는 트림마다 검증되지 않은 기본사양을 일괄 생성하지 않았습니다.
 *
 * 주의: images/trim-features 아래 기존 한글 및 영문 파일명은 임의 변경 금지.
 * ============================================================================ */
window.AutoGenieTrimReference = {
  // 특정 트림의 검증된 정보가 준비되면 여기에 추가 (기존 국산차와 동일한 구조)
};

// 차종 단위 기능 참고 자료: 각 항목의 국내 적용 조건을 UI에 개별 표시합니다.
window.AutoGenieTrimFeaturesByModel = {
  "BMW|1시리즈": {
    "sourceModel": "1시리즈",
    "features": [
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/1시리즈/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 1시리즈 상위 트림 적용 확인 · 일반 주차 보조 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "BMW 라이브 콕핏",
        "image": "images/trim-features/BMW/1시리즈/BMW 라이브 콕핏.webp",
        "description": "헤드업 표시와 경로 안내로 전방 주시를 돕습니다.",
        "condition": "국내 120·M135 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 9",
        "image": "images/trim-features/BMW/1시리즈/BMW 오퍼레이팅 시스템 9.webp",
        "description": "커브드 화면에서 내비게이션과 차량 기능을 조작합니다.",
        "condition": "국내 120·M135 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "비디오 스트리밍",
        "image": "images/trim-features/BMW/1시리즈/비디오 스트리밍.webp",
        "description": "대기 중 차량 화면에서 영상 콘텐츠를 즐깁니다.",
        "condition": "국내 120·M135 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "차내 비디오 게임",
        "image": "images/trim-features/BMW/1시리즈/차내 비디오 게임.webp",
        "description": "정차 중 스마트폰을 컨트롤러로 게임을 즐깁니다.",
        "condition": "국내 120·M135 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      }
    ]
  },
  "BMW|2시리즈": {
    "sourceModel": "2시리즈",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/2시리즈/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 2시리즈 그란 쿠페 상위 트림 적용 확인 · 플러스 사양과 구분",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/2시리즈/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 2시리즈 그란 쿠페 상위 트림 적용 확인 · 일반 주차 보조 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "BMW 키드니 그릴 조명",
        "image": "images/trim-features/BMW/2시리즈/BMW 키드니 그릴 조명.webp",
        "description": "조명으로 전면 그릴의 존재감을 높입니다.",
        "condition": "국내 2시리즈 그란 쿠페 M 스포츠 이상 적용 확인",
        "category": "외장"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 9",
        "image": "images/trim-features/BMW/2시리즈/BMW 오퍼레이팅 시스템 9.webp",
        "description": "직관적인 인터페이스로 차량 기능을 조작합니다.",
        "condition": "국내 220·228 xDrive·M235 xDrive 그란 쿠페 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "차내 비디오 게임",
        "image": "images/trim-features/BMW/2시리즈/차내 비디오 게임.webp",
        "description": "정차 중 스마트폰을 컨트롤러로 게임을 즐깁니다.",
        "condition": "국내 220·228 xDrive·M235 xDrive 그란 쿠페 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "비디오 스트리밍",
        "image": "images/trim-features/BMW/2시리즈/비디오 스트리밍.webp",
        "description": "대기 중 차량 화면에서 영상 콘텐츠를 감상합니다.",
        "condition": "국내 220·228 xDrive·M235 xDrive 그란 쿠페 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "어댑티브 M 서스펜션",
        "image": "images/trim-features/BMW/2시리즈/어댑티브 M 서스펜션.webp",
        "description": "노면과 주행 스타일에 맞춰 감쇠력을 조절합니다.",
        "condition": "국내 228 xDrive·M235 xDrive 적용 · 220 일반 트림과 구분",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|3시리즈": {
    "sourceModel": "3시리즈",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/3시리즈/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "디지털 키",
        "image": "images/trim-features/BMW/3시리즈/디지털 키.webp",
        "description": "호환 스마트 기기를 차량 키로 활용합니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/3시리즈/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 8.5",
        "image": "images/trim-features/BMW/3시리즈/BMW 오퍼레이팅 시스템 8.5.webp",
        "description": "터치 중심 인터페이스로 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "후진 어시스턴트",
        "image": "images/trim-features/BMW/3시리즈/후진 어시스턴트.webp",
        "description": "기록한 주행 경로를 따라 후진 조향을 보조합니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "앰비언트 라이트와 조작부",
        "image": "images/trim-features/BMW/3시리즈/앰비언트 라이트와 조작부.webp",
        "description": "조명과 직관적인 조작부로 편의성을 높입니다.",
        "condition": "국내 320i·320d·M340i 세단 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      }
    ]
  },
  "BMW|4시리즈": {
    "sourceModel": "4시리즈",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/4시리즈/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 420i 쿠페 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 8.5",
        "image": "images/trim-features/BMW/4시리즈/BMW 오퍼레이팅 시스템 8.5.webp",
        "description": "터치 중심 인터페이스로 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 420i 쿠페 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "레이저 리어 라이트",
        "image": "images/trim-features/BMW/4시리즈/레이저 리어 라이트.webp",
        "description": "고정밀 레이저 기술로 후면 조명 디자인을 표현합니다.",
        "condition": "국내 420i 쿠페 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "외장"
      },
      {
        "title": "에어 벤트와 실내 조명",
        "image": "images/trim-features/BMW/4시리즈/에어 벤트와 실내 조명.webp",
        "description": "새로운 조작부와 조명으로 실내 분위기를 완성합니다.",
        "condition": "국내 420i 쿠페 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      }
    ]
  },
  "BMW|5시리즈": {
    "sourceModel": "5시리즈",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/5시리즈/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 520i·523d·530i xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/5시리즈/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 5시리즈 일부 모델 적용 확인 · 플러스 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "BMW 에어콘솔 게임",
        "image": "images/trim-features/BMW/5시리즈/BMW 에어콘솔 게임.webp",
        "description": "대기 중 스마트폰을 컨트롤러로 게임을 즐깁니다.",
        "condition": "국내 520i·523d·530i xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "BMW 키드니 아이코닉 글로우",
        "image": "images/trim-features/BMW/5시리즈/BMW 키드니 아이코닉 글로우.webp",
        "description": "키드니 그릴 조명으로 외관을 강조합니다.",
        "condition": "국내 5시리즈 일부 모델 적용 확인 · 장착 트림에 등록",
        "category": "외장"
      },
      {
        "title": "다이내믹 라이트 카펫",
        "image": "images/trim-features/BMW/5시리즈/다이내믹 라이트 카펫.webp",
        "description": "승하차 시 도어 주변을 조명으로 비춥니다.",
        "condition": "국내 520i·523d·530i xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "파노라마 글라스 선루프",
        "image": "images/trim-features/BMW/5시리즈/파노라마 글라스 선루프.webp",
        "description": "유리 루프로 실내 개방감을 높입니다.",
        "condition": "국내 520i·523d·530i xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "마이 모드와 BMW 인터랙션 바",
        "image": "images/trim-features/BMW/5시리즈/마이 모드와 BMW 인터랙션 바.webp",
        "description": "조명과 시각 효과로 실내 분위기를 바꿉니다.",
        "condition": "국내 5시리즈 인터랙션 바 장착 모델에 등록 · 트림별 차이",
        "category": "인포테인먼트"
      },
      {
        "title": "하만 카돈 라우드 스피커 시스템",
        "image": "images/trim-features/BMW/5시리즈/하만 카돈 라우드 스피커 시스템.webp",
        "description": "다수 스피커로 풍부한 오디오를 제공합니다.",
        "condition": "국내 5시리즈 하만 카돈 적용 모델에 등록 · B&W 사양과 구분",
        "category": "오디오"
      },
      {
        "title": "비디오 스트리밍",
        "image": "images/trim-features/BMW/5시리즈/비디오 스트리밍.webp",
        "description": "대기 중 커브드 화면에서 영상을 감상합니다.",
        "condition": "국내 520i·523d·530i xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      }
    ]
  },
  "BMW|7시리즈": {
    "sourceModel": "7시리즈",
    "features": [
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/7시리즈/BMW 커브드 디스플레이.webp",
        "description": "대형 화면으로 차량 정보를 확인하고 조작합니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 시어터 스크린",
        "image": "images/trim-features/BMW/7시리즈/BMW 시어터 스크린.webp",
        "description": "뒷좌석 천장형 대형 화면으로 영상을 즐깁니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "파노라마 글라스 루프 스카이 라운지",
        "image": "images/trim-features/BMW/7시리즈/파노라마 글라스 루프 스카이 라운지.webp",
        "description": "유리 루프와 LED 조명으로 개방감을 높입니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "이그제큐티브 라운지 시트",
        "image": "images/trim-features/BMW/7시리즈/이그제큐티브 라운지 시트.webp",
        "description": "다리 받침대와 편안한 시트로 휴식을 돕습니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "인테그럴 액티브 스티어링",
        "image": "images/trim-features/BMW/7시리즈/인테그럴 액티브 스티어링.webp",
        "description": "앞뒤 바퀴 조향으로 기동성을 높입니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "마이 모드",
        "image": "images/trim-features/BMW/7시리즈/마이 모드.webp",
        "description": "주행 설정과 실내 분위기를 취향에 맞춰 바꿉니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "도어 터치 스크린 컨트롤러",
        "image": "images/trim-features/BMW/7시리즈/도어 터치 스크린 컨트롤러.webp",
        "description": "뒷좌석 도어 화면에서 편의 기능을 조작합니다.",
        "condition": "국내 740i G70 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      }
    ]
  },
  "BMW|8시리즈": {
    "sourceModel": "8시리즈",
    "features": [
      {
        "title": "어댑티브 M 서스펜션 프로페셔널",
        "image": "images/trim-features/BMW/8시리즈/어댑티브 M 서스펜션.webp",
        "description": "감쇠력을 정밀하게 조절해 민첩한 주행과 승차감을 돕습니다.",
        "condition": "국내 M850i xDrive 그란 쿠페 M 퍼포먼스 (2026년 상품성 개선) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "인테그랄 액티브 스티어링",
        "image": "images/trim-features/BMW/8시리즈/인테그랄 액티브 스티어링.webp",
        "description": "앞뒤 조향 제어로 기동성과 안정성을 높입니다.",
        "condition": "국내 M850i xDrive 그란 쿠페 M 퍼포먼스 (2026년 상품성 개선) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|IX": {
    "sourceModel": "iX",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/iX/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/iX/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 iX xDrive60·M70 상위 사양에 적용 · xDrive45의 플러스 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "디지털 키 플러스",
        "image": "images/trim-features/BMW/iX/디지털 키 플러스.webp",
        "description": "호환 스마트 기기를 차량 키로 활용합니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "BMW 키드니 아이코닉 글로우",
        "image": "images/trim-features/BMW/iX/BMW 키드니 아이코닉 글로우.webp",
        "description": "키드니 그릴 조명으로 외관의 존재감을 강조합니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "외장"
      },
      {
        "title": "M 다기능 시트",
        "image": "images/trim-features/BMW/iX/M 다기능 시트.webp",
        "description": "다양한 조절과 지지력으로 착좌감을 높입니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "파노라마 글라스 루프 스카이 라운지",
        "image": "images/trim-features/BMW/iX/파노라마 글라스 루프 스카이 라운지.webp",
        "description": "유리 루프의 투명도를 버튼으로 조절합니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "어댑티브 에어 서스펜션",
        "image": "images/trim-features/BMW/iX/어댑티브 에어 서스펜션.webp",
        "description": "상황에 맞춰 차체 높이를 조절합니다.",
        "condition": "국내 iX xDrive45·xDrive60·M70 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "인테그랄 액티브 스티어링",
        "image": "images/trim-features/BMW/iX/인테그랄 액티브 스티어링.webp",
        "description": "뒷바퀴 조향으로 좁은 공간의 기동성을 높입니다.",
        "condition": "국내 iX xDrive60·M70 적용 · xDrive45 제외",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|X1": {
    "sourceModel": "X1",
    "features": [
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/X1/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "디지털 키",
        "image": "images/trim-features/BMW/X1/디지털 키.webp",
        "description": "호환 스마트 기기를 차량 키로 활용합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/X1/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "LED 헤드라이트",
        "image": "images/trim-features/BMW/X1/LED 헤드라이트.webp",
        "description": "LED 조명으로 전면 디자인을 완성합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "안전"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/X1/BMW 커브드 디스플레이.webp",
        "description": "음성·터치로 주요 정보를 확인하고 조작합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "뒷좌석 조절과 적재 공간",
        "image": "images/trim-features/BMW/X1/뒷좌석 조절과 적재 공간.webp",
        "description": "뒷좌석 구성을 조절해 실내 공간을 활용합니다.",
        "condition": "국내 X1 sDrive20i·sDrive18d 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "공간"
      }
    ]
  },
  "BMW|X2": {
    "sourceModel": "X2",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X2/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/X2/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/X2/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "스마트폰 무선 충전",
        "image": "images/trim-features/BMW/X2/스마트폰 무선 충전.webp",
        "description": "호환 스마트폰을 충전 트레이에서 무선 충전합니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "LED 라이트",
        "image": "images/trim-features/BMW/X2/LED 라이트.webp",
        "description": "헤드라이트와 주간주행등 등에 LED 기술을 적용했습니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "안전"
      },
      {
        "title": "베간자 시트",
        "image": "images/trim-features/BMW/X2/베간자 시트.webp",
        "description": "타공된 소재로 시각적·착좌 쾌적성을 높입니다.",
        "condition": "국내 X2 xDrive20i M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      }
    ]
  },
  "BMW|X3": {
    "sourceModel": "X3",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X3/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/X3/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "디지털 키",
        "image": "images/trim-features/BMW/X3/디지털 키.webp",
        "description": "호환 스마트 기기를 차량 키로 활용합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "BMW 인텔리전트 퍼스널 어시스턴트",
        "image": "images/trim-features/BMW/X3/BMW 인텔리전트 퍼스널 어시스턴트.webp",
        "description": "음성으로 차량 기능을 제어하고 정보를 확인합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "커넥티비티"
      },
      {
        "title": "TMAP 기반 온라인 내비게이션",
        "image": "images/trim-features/BMW/X3/TMAP 기반 온라인 내비게이션.webp",
        "description": "온라인 지도와 TMAP 정보를 활용해 길을 안내합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "내비게이션"
      },
      {
        "title": "파노라마 글라스 선루프",
        "image": "images/trim-features/BMW/X3/파노라마 글라스 선루프.webp",
        "description": "긴 유리 루프로 실내 개방감을 높입니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/BMW/X3/앰비언트 라이트.webp",
        "description": "실내 조명으로 다양한 분위기를 연출합니다.",
        "condition": "국내 X3 20·20d·M50 xDrive 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "스포츠 시트",
        "image": "images/trim-features/BMW/X3/스포츠 시트.webp",
        "description": "체형에 맞는 조절과 지지력을 제공합니다.",
        "condition": "국내 X3 20·20d 베간자 스포츠 시트 적용 구성 · M50 시트와 구분",
        "category": "시트"
      },
      {
        "title": "어댑티브 서스펜션",
        "image": "images/trim-features/BMW/X3/어댑티브 서스펜션.webp",
        "description": "노면과 주행 모드에 맞춘 감쇠력 제어로 주행을 돕습니다.",
        "condition": "국내 X3 M50 xDrive의 어댑티브 M 서스펜션 적용 확인 · 일반 트림과 구분",
        "category": "주행 성능"
      },
      {
        "title": "가변 스포츠 스티어링",
        "image": "images/trim-features/BMW/X3/가변 스포츠 스티어링.webp",
        "description": "속도와 상황에 맞는 조향감을 제공합니다.",
        "condition": "국내 X3 M50 xDrive 적용 확인 · 일반 트림과 구분",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|X4": {
    "sourceModel": "X4",
    "features": [
      {
        "title": "3D 리어라이트",
        "image": "images/trim-features/BMW/X4/풀 LED 리어 라이트.webp",
        "description": "입체적인 후면 조명으로 스포티한 디자인을 강조합니다.",
        "condition": "국내 X4 G02 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "외장"
      },
      {
        "title": "앞좌석 스포츠 시트",
        "image": "images/trim-features/BMW/X4/앞좌석 스포츠 시트.webp",
        "description": "가죽 스포츠 시트로 착좌감과 지지력을 높입니다.",
        "condition": "국내 X4 G02 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "BMW xDrive",
        "image": "images/trim-features/BMW/X4/BMW xDrive.webp",
        "description": "앞뒤 구동력을 가변 배분해 접지력을 높입니다.",
        "condition": "국내 X4 G02 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X4/드라이빙 어시스턴트.webp",
        "description": "차간 거리와 차선 유지, 충돌 회피 조향을 보조합니다.",
        "condition": "국내 X4 G02 국내 출시 모델 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "안전"
      }
    ]
  },
  "BMW|X5": {
    "sourceModel": "X5",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X5/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X5/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "라이브 콕핏 프로페셔널",
        "image": "images/trim-features/BMW/X5/라이브 콕핏 프로페셔널.webp",
        "description": "헤드업 표시와 경로 안내로 전방 주시를 돕습니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/X5/BMW 커브드 디스플레이.webp",
        "description": "고해상도 화면에서 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "메리노 가죽 트림과 시트",
        "image": "images/trim-features/BMW/X5/메리노 가죽 트림과 시트.webp",
        "description": "부드러운 소재로 착좌감과 실내 분위기를 높입니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "CraftedClarity 글라스",
        "image": "images/trim-features/BMW/X5/CraftedClarity 글라스.webp",
        "description": "크리스털 장식으로 센터 콘솔을 꾸밉니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "하만 카돈 서라운드 사운드",
        "image": "images/trim-features/BMW/X5/하만 카돈 서라운드 사운드.webp",
        "description": "전 좌석에 고품질 오디오를 제공합니다.",
        "condition": "국내 X5 xDrive30d·40i·M60i (충전 전용 기능 제외) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "오디오"
      }
    ]
  },
  "BMW|X6": {
    "sourceModel": "X6",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X6/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X6/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "라이브 콕핏 프로페셔널",
        "image": "images/trim-features/BMW/X6/라이브 콕핏 프로페셔널.webp",
        "description": "헤드업 표시와 경로 안내로 전방 주시를 돕습니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/X6/BMW 커브드 디스플레이.webp",
        "description": "대형 곡면 화면으로 정보와 기능을 통합합니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "CraftedClarity 글라스",
        "image": "images/trim-features/BMW/X6/CraftedClarity 글라스.webp",
        "description": "크리스털 소재로 조작부를 꾸밉니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "4존 자동 온도 조절 시스템",
        "image": "images/trim-features/BMW/X6/4존 자동 온도 조절 시스템.webp",
        "description": "앞뒤 좌석 구역별 온도를 조절합니다.",
        "condition": "국내 X6 xDrive30d·40i·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "공조"
      }
    ]
  },
  "BMW|X7": {
    "sourceModel": "X7",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X7/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/X7/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/X7/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/X7/BMW 커브드 디스플레이.webp",
        "description": "대형 곡면 화면으로 정보와 조작 기능을 통합합니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "CraftedClarity 글라스",
        "image": "images/trim-features/BMW/X7/CraftedClarity 글라스.webp",
        "description": "크리스털 소재 조작부로 실내를 꾸밉니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "6인승 시트 구성",
        "image": "images/trim-features/BMW/X7/6인승 시트 구성.webp",
        "description": "독립형 뒷좌석 구성으로 탑승 편의성을 높입니다.",
        "condition": "국내 X7 6인승 구성 차량에 등록 · 7인승과 구분",
        "category": "시트"
      },
      {
        "title": "5존 오토매틱 에어 컨디셔닝",
        "image": "images/trim-features/BMW/X7/5존 오토매틱 에어 컨디셔닝.webp",
        "description": "좌석 구역별로 온도를 개별 조절합니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "공조"
      },
      {
        "title": "이그제큐티브 드라이브 프로",
        "image": "images/trim-features/BMW/X7/이그제큐티브 드라이브 프로.webp",
        "description": "차체 롤을 제어해 주행 안정성을 높입니다.",
        "condition": "국내 X7 xDrive40i·40d·M60i 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|XM": {
    "sourceModel": "XM",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/XM/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차간 거리와 조향·제동을 보조합니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "M 멀티 시트",
        "image": "images/trim-features/BMW/XM/M 멀티 시트.webp",
        "description": "다이내믹한 주행에 맞춘 지지력을 제공합니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "M 라운지 뒷좌석",
        "image": "images/trim-features/BMW/XM/M 라운지 뒷좌석.webp",
        "description": "일체형 쿠션으로 뒷좌석의 편안함을 높입니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "앰비언트 루프 라이닝",
        "image": "images/trim-features/BMW/XM/앰비언트 루프 라이닝.webp",
        "description": "입체 천장과 조명으로 실내 분위기를 바꿉니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "M 셋업과 M1·M2 버튼",
        "image": "images/trim-features/BMW/XM/M 셋업과 M1·M2 버튼.webp",
        "description": "저장한 주행 설정을 스티어링 휠에서 불러옵니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "M 하이브리드 순수 전기 주행",
        "image": "images/trim-features/BMW/XM/M 하이브리드 순수 전기 주행.webp",
        "description": "충전한 배터리로 조용한 전기 주행을 제공합니다.",
        "condition": "국내 XM Label 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|i4": {
    "sourceModel": "i4",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/i4/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 i4 eDrive40 M 스포츠·M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/i4/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 i4 eDrive40 M 스포츠 프로 적용 · M 스포츠의 스탠다드 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 8.5",
        "image": "images/trim-features/BMW/i4/BMW 오퍼레이팅 시스템 8.5.webp",
        "description": "터치 중심 인터페이스로 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 i4 eDrive40 M 스포츠·M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "어댑티브 LED 헤드라이트",
        "image": "images/trim-features/BMW/i4/어댑티브 LED 헤드라이트.webp",
        "description": "주행 상황에 맞는 조명으로 전방 시야를 돕습니다.",
        "condition": "국내 i4 eDrive40 M 스포츠·M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "안전"
      },
      {
        "title": "레이저 리어 라이트",
        "image": "images/trim-features/BMW/i4/레이저 리어 라이트.webp",
        "description": "정밀한 레이저 파이버로 후면 조명 디자인을 표현합니다.",
        "condition": "국내 i4 eDrive40 M 스포츠·M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "외장"
      },
      {
        "title": "M 가죽 스티어링 휠",
        "image": "images/trim-features/BMW/i4/M 가죽 스티어링 휠.webp",
        "description": "스포티한 그립감과 디자인을 제공합니다.",
        "condition": "국내 i4 eDrive40 M 스포츠·M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      }
    ]
  },
  "BMW|i5": {
    "sourceModel": "i5",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/i5/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 i5 eDrive40·M60 / xDrive40 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/i5/파킹 어시스턴트 프로페셔널.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 i5 xDrive40 M 스포츠 프로 적용 확인 · M 스포츠의 플러스 사양과 구분",
        "category": "주차 보조"
      },
      {
        "title": "BMW 에어콘솔 게임",
        "image": "images/trim-features/BMW/i5/BMW 에어콘솔 게임.webp",
        "description": "대기 중 스마트폰을 컨트롤러로 게임을 즐깁니다.",
        "condition": "국내 i5 eDrive40·M60 / xDrive40 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "BMW 키드니 아이코닉 글로우",
        "image": "images/trim-features/BMW/i5/BMW 키드니 아이코닉 글로우.webp",
        "description": "키드니 그릴 조명으로 외관의 존재감을 강조합니다.",
        "condition": "국내 i5 아이코닉 글로우 장착 모델에 등록 · 트림별 차이",
        "category": "외장"
      },
      {
        "title": "다이내믹 라이트 카펫",
        "image": "images/trim-features/BMW/i5/다이내믹 라이트 카펫.webp",
        "description": "승하차 시 도어 주변을 조명으로 비춥니다.",
        "condition": "국내 i5 eDrive40·M60 / xDrive40 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "파노라마 글라스 선루프",
        "image": "images/trim-features/BMW/i5/파노라마 글라스 선루프.webp",
        "description": "유리 루프로 실내 개방감을 높입니다.",
        "condition": "국내 i5 eDrive40·M60 / xDrive40 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "마이 모드와 BMW 인터랙션 바",
        "image": "images/trim-features/BMW/i5/마이 모드와 BMW 인터랙션 바.webp",
        "description": "조명과 시각 효과로 다양한 실내 분위기를 만듭니다.",
        "condition": "국내 i5 인터랙션 바 장착 모델에 등록 · 트림별 차이",
        "category": "인포테인먼트"
      },
      {
        "title": "바워스 & 윌킨스 서라운드 사운드",
        "image": "images/trim-features/BMW/i5/바워스 & 윌킨스 서라운드 사운드.webp",
        "description": "다수 스피커로 풍부한 사운드를 제공합니다.",
        "condition": "국내 i5 xDrive40 M 스포츠 프로 적용 확인 · 다른 트림과 구분",
        "category": "오디오"
      },
      {
        "title": "비디오 스트리밍",
        "image": "images/trim-features/BMW/i5/비디오 스트리밍.webp",
        "description": "대기 중 커브드 화면에서 영상을 감상합니다.",
        "condition": "국내 i5 eDrive40·M60 / xDrive40 M 스포츠 프로 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      }
    ]
  },
  "BMW|i7": {
    "sourceModel": "i7",
    "features": [
      {
        "title": "BMW 아이코닉 글로우 크리스털 헤드라이트",
        "image": "images/trim-features/BMW/i7/BMW 아이코닉 글로우 크리스털 헤드라이트.webp",
        "description": "크리스털 장식과 조명으로 전면 디자인을 강조합니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "외장"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/i7/BMW 커브드 디스플레이.webp",
        "description": "대형 화면을 음성·터치로 직관적으로 조작합니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 시어터 스크린",
        "image": "images/trim-features/BMW/i7/BMW 시어터 스크린.webp",
        "description": "뒷좌석에서 천장형 대형 화면으로 영상을 감상합니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      },
      {
        "title": "스카이 라운지 파노라마 글라스 선루프",
        "image": "images/trim-features/BMW/i7/스카이 라운지 파노라마 글라스 선루프.webp",
        "description": "유리 루프와 LED 조명으로 개방감을 높입니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "이그제큐티브 라운지 시트",
        "image": "images/trim-features/BMW/i7/이그제큐티브 라운지 시트.webp",
        "description": "다리 받침대와 편안한 시트로 휴식을 돕습니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "마이 모드와 아이코닉 사운드",
        "image": "images/trim-features/BMW/i7/마이 모드와 아이코닉 사운드.webp",
        "description": "주행 모드에 맞춰 화면·조명·사운드 분위기를 바꿉니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "도어 터치 스크린 컨트롤러",
        "image": "images/trim-features/BMW/i7/도어 터치 스크린 컨트롤러.webp",
        "description": "뒷좌석 도어 화면으로 편의 기능을 조작합니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "바워스 & 윌킨스 다이아몬드 서라운드 사운드",
        "image": "images/trim-features/BMW/i7/바워스 & 윌킨스 다이아몬드 서라운드 사운드.webp",
        "description": "프리미엄 오디오로 몰입감 있는 음악을 제공합니다.",
        "condition": "국내 i7 xDrive60 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "오디오"
      }
    ]
  },
  "BMW|iX1": {
    "sourceModel": "iX1",
    "features": [
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/iX1/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "디지털 키",
        "image": "images/trim-features/BMW/iX1/디지털 키.webp",
        "description": "호환 스마트 기기를 차량 키로 활용합니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/iX1/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "BMW 커브드 디스플레이",
        "image": "images/trim-features/BMW/iX1/BMW 커브드 디스플레이.webp",
        "description": "음성·터치로 주요 정보와 차량 기능을 조작합니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "뒷좌석 폴딩과 트렁크",
        "image": "images/trim-features/BMW/iX1/뒷좌석 폴딩과 트렁크.webp",
        "description": "뒷좌석을 접어 적재 공간을 넓힙니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "공간"
      },
      {
        "title": "BMW 아이코닉 사운드 일렉트릭",
        "image": "images/trim-features/BMW/iX1/BMW 아이코닉 사운드 일렉트릭.webp",
        "description": "주행 동작에 맞춘 소리로 전기차 주행감을 더합니다.",
        "condition": "국내 iX1 xDrive30 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      }
    ]
  },
  "BMW|iX2": {
    "sourceModel": "iX2",
    "features": [
      {
        "title": "드라이빙 어시스턴트 프로페셔널",
        "image": "images/trim-features/BMW/iX2/드라이빙 어시스턴트 프로페셔널.webp",
        "description": "차선과 차간 거리를 유지하며 가감속·조향을 보조합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파킹 어시스턴트 플러스",
        "image": "images/trim-features/BMW/iX2/파킹 어시스턴트 플러스.webp",
        "description": "주변 시야 확인과 주차 조작을 보조합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주차 보조"
      },
      {
        "title": "BMW 헤드업 디스플레이",
        "image": "images/trim-features/BMW/iX2/BMW 헤드업 디스플레이.webp",
        "description": "주행·경로 안내를 운전자 시야에 표시합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "디스플레이"
      },
      {
        "title": "스마트폰 무선 충전",
        "image": "images/trim-features/BMW/iX2/스마트폰 무선 충전.webp",
        "description": "호환 스마트폰을 충전 트레이에서 무선 충전합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "편의"
      },
      {
        "title": "TMAP 기반 온라인 내비게이션",
        "image": "images/trim-features/BMW/iX2/TMAP 기반 온라인 내비게이션.webp",
        "description": "온라인 지도와 TMAP 정보를 활용해 길을 안내합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "내비게이션"
      },
      {
        "title": "어댑티브 LED 헤드라이트",
        "image": "images/trim-features/BMW/iX2/어댑티브 LED 헤드라이트.webp",
        "description": "주행 상황에 맞춰 전방 조명을 조절합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "안전"
      },
      {
        "title": "BMW 오퍼레이팅 시스템 9",
        "image": "images/trim-features/BMW/iX2/BMW 오퍼레이팅 시스템 9.webp",
        "description": "커브드 화면에서 음악·내비게이션·차량 설정을 조작합니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "인포테인먼트"
      },
      {
        "title": "스포츠 시트",
        "image": "images/trim-features/BMW/iX2/스포츠 시트.webp",
        "description": "다양한 조절과 지지력으로 스포티한 주행을 돕습니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "시트"
      },
      {
        "title": "BMW 에어콘솔 게임",
        "image": "images/trim-features/BMW/iX2/BMW 에어콘솔 게임.webp",
        "description": "대기 중 스마트폰을 컨트롤러로 게임을 즐깁니다.",
        "condition": "국내 iX2 eDrive20 M 스포츠 출시 자료 기준 · 동일 기능 적용 차량에 등록 · 정차 중 이용 · 지원 서비스·구독 조건 확인",
        "category": "엔터테인먼트"
      }
    ]
  },
  "BMW|iX3": {
    "sourceModel": "iX3",
    "features": [
      {
        "title": "인텔리전트 충전 플랩",
        "image": "images/trim-features/BMW/iX3/인텔리전트 충전 플랩.webp",
        "description": "차량 접근 시 충전구 플랩이 스스로 열리고 닫힙니다.",
        "condition": "국내 iX3 50 xDrive (NA5) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "충전"
      },
      {
        "title": "파노라믹 글라스 선루프",
        "image": "images/trim-features/BMW/iX3/파노라믹 글라스 선루프.webp",
        "description": "넓은 유리 루프로 실내 개방감을 높입니다.",
        "condition": "국내 iX3 50 xDrive (NA5) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "실내"
      },
      {
        "title": "6세대 BMW eDrive",
        "image": "images/trim-features/BMW/iX3/6세대 BMW eDrive.webp",
        "description": "앞뒤 전기 모터로 순수 전기 주행을 제공합니다.",
        "condition": "국내 iX3 50 xDrive (NA5) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "주행 성능"
      },
      {
        "title": "800V 배터리 기술",
        "image": "images/trim-features/BMW/iX3/800V 배터리 기술.webp",
        "description": "고전압 배터리 기술로 효율과 급속 충전을 지원합니다.",
        "condition": "국내 iX3 50 xDrive (NA5) 출시 자료 기준 · 동일 기능 적용 차량에 등록",
        "category": "충전"
      }
    ]
  },
  "랜드로버|더 뉴 레인지로버": {
    "sourceModel": "더 뉴 레인지로버",
    "features": [
      {
        "title": "13.1인치 터치스크린 및 피비 프로",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/13.1인치 터치스크린 및 피비 프로.webp",
        "description": "13.1인치 커브드 터치스크린으로 인포테인먼트와 주요 차량 설정을 직관적으로 확인하고 조작할 수 있습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/헤드업 디스플레이.webp",
        "description": "주요 차량 정보와 주행 정보를 윈드스크린에 표시해 운전자가 전방에 시선을 유지하도록 돕습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "4존 실내 온도 조절 시스템",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/4존 실내 온도 조절 시스템.webp",
        "description": "운전석과 조수석, 2열 좌우 탑승자가 각자의 선호에 맞춰 온도와 풍량을 조절할 수 있습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "실내 공기 정화 시스템 프로",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/실내 공기 정화 시스템 프로.webp",
        "description": "PM2.5 필터와 실내 공기 관리 기능을 통해 미세먼지와 공기 상태를 관리하고 쾌적한 탑승 환경을 유지하도록 돕습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "클리어사이트 룸 미러",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/클리어사이트 룸 미러.webp",
        "description": "후방 카메라의 실시간 영상을 룸 미러로 확인할 수 있습니다. 뒷좌석 탑승자나 적재물이 있어도 후방 도로 시야를 확보하는 데 도움이 됩니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "3D 서라운드 카메라 및 클리어사이트 그라운드 뷰",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/3D 서라운드 카메라 및 클리어사이트 그라운드 뷰.webp",
        "description": "차량 주변을 여러 각도로 확인하고 보닛 아래 지면을 살펴볼 수 있어 저속 주행이나 좁은 공간에서 주변 상황을 파악하도록 돕습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "올 휠 스티어링",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/올 휠 스티어링.webp",
        "description": "앞바퀴와 뒷바퀴의 조향을 함께 제어해 저속에서는 기동성을 높이고 고속에서는 안정적인 주행을 돕습니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      },
      {
        "title": "전자식 에어 서스펜션 및 어댑티브 다이내믹스",
        "image": "images/trim-features/랜드로버/더 뉴 레인지로버/전자식 에어 서스펜션 및 어댑티브 다이내믹스.webp",
        "description": "노면과 차체 움직임에 맞춰 서스펜션의 반응을 조절해 주행 안정성과 안락한 승차감을 높여줍니다.",
        "condition": "국내 MY26 HSE / Autobiography / SV 계열 중 해당 사양표 적용 모델",
        "category": ""
      }
    ]
  },
  "랜드로버|디펜더 110": {
    "sourceModel": "디펜더 110",
    "features": [
      {
        "title": "13.1인치 터치스크린 및 피비 프로",
        "image": "images/trim-features/랜드로버/디펜더 110/13.1인치 터치스크린 및 피비 프로.webp",
        "description": "13.1인치 터치스크린에서 내비게이션과 차량 설정을 확인하고 주요 기능을 간편하게 조작할 수 있습니다.",
        "condition": "P300 X-Dynamic SE / P400 X",
        "category": ""
      },
      {
        "title": "메리디안 서라운드 사운드 시스템",
        "image": "images/trim-features/랜드로버/디펜더 110/메리디안 서라운드 사운드 시스템.webp",
        "description": "실내에 배치된 스피커로 음악을 입체감 있게 전달해 풍부한 청취 환경을 제공합니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "전자동 지형 반응 시스템 2 및 어댑티브 오프로드 크루즈 컨트롤",
        "image": "images/trim-features/랜드로버/디펜더 110/전자동 지형 반응 시스템 2 및 어댑티브 오프로드 크루즈 컨트롤.webp",
        "description": "노면에 맞춰 차량의 구동 특성을 조절하고, 오프로드에서는 설정한 속도를 유지하도록 보조해 험로 주행의 부담을 줄여줍니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "클리어사이트 룸 미러",
        "image": "images/trim-features/랜드로버/디펜더 110/클리어사이트 룸 미러.webp",
        "description": "카메라의 실시간 후방 영상을 룸 미러에 표시합니다. 탑승자나 적재물로 실내 후방 시야가 가려져도 뒤쪽 도로를 확인할 수 있습니다.",
        "condition": "P300 X-Dynamic SE",
        "category": ""
      },
      {
        "title": "실내 공기 정화 시스템 플러스",
        "image": "images/trim-features/랜드로버/디펜더 110/실내 공기 정화 시스템 플러스.webp",
        "description": "미세먼지 여과와 실내 공기 관리 기능을 통해 탑승 공간을 쾌적하게 유지하도록 돕습니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "3D 서라운드 카메라 및 도강 수심 감지",
        "image": "images/trim-features/랜드로버/디펜더 110/3D 서라운드 카메라 및 도강 수심 감지.webp",
        "description": "차량 주변을 여러 각도로 확인할 수 있도록 돕고, 도강 시에는 수심 정보를 제공해 주변 상황을 파악할 수 있게 해줍니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "매트릭스 LED 헤드램프 및 시그니처 DRL",
        "image": "images/trim-features/랜드로버/디펜더 110/매트릭스 LED 헤드램프 및 시그니처 DRL.webp",
        "description": "매트릭스 LED 헤드램프와 시그니처 주간 주행등이 적용되어 야간 시야 확보와 차량 식별을 돕습니다.",
        "condition": "P400 X",
        "category": ""
      }
    ]
  },
  "랜드로버|디펜더 130": {
    "sourceModel": "디펜더 130",
    "features": [
      {
        "title": "13.1인치 터치스크린 및 피비 프로",
        "image": "images/trim-features/랜드로버/디펜더 130/13.1인치 터치스크린 및 피비 프로.webp",
        "description": "13.1인치 터치스크린에서 내비게이션과 차량 설정을 확인하고 주요 기능을 간편하게 조작할 수 있습니다.",
        "condition": "P400 X-Dynamic HSE / P400 Outbound",
        "category": ""
      },
      {
        "title": "메리디안 사운드 시스템",
        "image": "images/trim-features/랜드로버/디펜더 130/메리디안 사운드 시스템.webp",
        "description": "메리디안 오디오 시스템이 차량 실내에서 음악을 풍부하고 선명하게 감상할 수 있도록 돕습니다.",
        "condition": "P400 X-Dynamic HSE / P400 Outbound",
        "category": ""
      },
      {
        "title": "클리어사이트 룸 미러",
        "image": "images/trim-features/랜드로버/디펜더 130/클리어사이트 룸 미러.webp",
        "description": "카메라의 실시간 후방 영상을 룸 미러에 표시합니다. 탑승자나 적재물로 실내 후방 시야가 가려져도 뒤쪽 도로를 확인할 수 있습니다.",
        "condition": "P400 X-Dynamic HSE / P400 Outbound",
        "category": ""
      },
      {
        "title": "실내 공기 정화 시스템 플러스",
        "image": "images/trim-features/랜드로버/디펜더 130/실내 공기 정화 시스템 플러스.webp",
        "description": "미세먼지 여과와 실내 공기 관리 기능을 통해 탑승 공간을 쾌적하게 유지하도록 돕습니다.",
        "condition": "P400 X-Dynamic HSE / P400 Outbound",
        "category": ""
      },
      {
        "title": "3D 서라운드 카메라 및 도강 수심 감지",
        "image": "images/trim-features/랜드로버/디펜더 130/3D 서라운드 카메라 및 도강 수심 감지.webp",
        "description": "차량 주변을 여러 각도로 확인할 수 있도록 돕고, 도강 시에는 수심 정보를 제공해 주변 상황을 파악할 수 있게 해줍니다.",
        "condition": "P400 X-Dynamic HSE / P400 Outbound",
        "category": ""
      },
      {
        "title": "매트릭스 LED 헤드램프 및 시그니처 DRL",
        "image": "images/trim-features/랜드로버/디펜더 130/매트릭스 LED 헤드램프 및 시그니처 DRL.webp",
        "description": "매트릭스 LED 헤드램프와 시그니처 주간 주행등이 적용되어 야간 시야 확보와 차량 식별을 돕습니다.",
        "condition": "P400 X-Dynamic HSE",
        "category": ""
      }
    ]
  },
  "랜드로버|디펜더 90": {
    "sourceModel": "디펜더 90",
    "features": [
      {
        "title": "13.1인치 터치스크린 및 피비 프로",
        "image": "images/trim-features/랜드로버/디펜더 90/13.1인치 터치스크린 및 피비 프로.webp",
        "description": "13.1인치 터치스크린에서 내비게이션과 차량 설정을 확인하고 주요 기능을 간편하게 조작할 수 있습니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "메리디안 서라운드 사운드 시스템",
        "image": "images/trim-features/랜드로버/디펜더 90/메리디안 서라운드 사운드 시스템.webp",
        "description": "실내에 배치된 스피커로 음악을 입체감 있게 전달해 풍부한 청취 환경을 제공합니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "전자동 지형 반응 시스템 2 및 어댑티브 오프로드 크루즈 컨트롤",
        "image": "images/trim-features/랜드로버/디펜더 90/전자동 지형 반응 시스템 2 및 어댑티브 오프로드 크루즈 컨트롤.webp",
        "description": "노면에 맞춰 차량의 구동 특성을 조절하고, 오프로드에서는 설정한 속도를 유지하도록 보조해 험로 주행의 부담을 줄여줍니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "3D 서라운드 카메라 및 도강 수심 감지",
        "image": "images/trim-features/랜드로버/디펜더 90/3D 서라운드 카메라 및 도강 수심 감지.webp",
        "description": "차량 주변을 여러 각도로 확인할 수 있도록 돕고, 도강 시에는 수심 정보를 제공해 주변 상황을 파악할 수 있게 해줍니다.",
        "condition": "P400 X",
        "category": ""
      },
      {
        "title": "매트릭스 LED 헤드램프 및 시그니처 DRL",
        "image": "images/trim-features/랜드로버/디펜더 90/매트릭스 LED 헤드램프 및 시그니처 DRL.webp",
        "description": "매트릭스 LED 헤드램프와 시그니처 주간 주행등이 적용되어 야간 시야 확보와 차량 식별을 돕습니다.",
        "condition": "P400 X",
        "category": ""
      }
    ]
  },
  "벤츠|AMG GT 43 쿠페": {
    "sourceModel": "AMG GT 43",
    "features": [
      {
        "title": "AMG SPEEDSHIFT MCT 9단 변속기",
        "image": "images/trim-features/벤츠/AMG GT 43/AMG SPEEDSHIFT MCT 9단 변속기.webp",
        "description": "빠르고 부드러운 변속으로 역동적인 주행을 돕습니다.",
        "condition": "국내 GT 43 기본 · 2026-07-15 출시 자료 확인",
        "category": "주행 성능"
      },
      {
        "title": "AMG 트랙 페이스",
        "image": "images/trim-features/벤츠/AMG GT 43/AMG 트랙 페이스.webp",
        "description": "주행 데이터를 기록하고 분석해 서킷 주행을 돕습니다.",
        "condition": "국내 GT 43 기본 · 2026-07-15 출시 자료 확인",
        "category": "주행 성능"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/AMG GT 43/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "국내 GT 43 기본 · 2026-07-15 출시 자료 확인",
        "category": "주행 성능"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/AMG GT 43/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 GT 43 기본 · 2026-07-15 출시 자료 확인",
        "category": "주행 보조"
      },
      {
        "title": "전자식 배기가스 터보차저",
        "image": "images/trim-features/벤츠/AMG GT 43/전자식 배기가스 터보차저.webp",
        "description": "전자식 터보 기술로 가속 반응과 엔진 응답성을 높입니다.",
        "condition": "국내 GT 43 모델 소개 기준",
        "category": "주행 성능"
      },
      {
        "title": "폴딩 리어 시트와 적재 공간",
        "image": "images/trim-features/벤츠/AMG GT 43/폴딩 리어 시트와 적재 공간.webp",
        "description": "뒷좌석 등받이를 접어 적재 공간을 유연하게 활용합니다.",
        "condition": "국내 GT 43 모델 소개 기준",
        "category": "공간"
      }
    ]
  },
  "벤츠|AMG GT 55 쿠페": {
    "sourceModel": "AMG GT 55",
    "features": [
      {
        "title": "AMG 액티브 라이드 컨트롤 서스펜션",
        "image": "images/trim-features/벤츠/AMG GT 55/AMG 액티브 라이드 컨트롤 서스펜션.webp",
        "description": "차체 기울어짐을 제어해 민첩한 주행과 승차감을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "AMG SPEEDSHIFT MCT 9단 변속기",
        "image": "images/trim-features/벤츠/AMG GT 55/AMG SPEEDSHIFT MCT 9단 변속기.webp",
        "description": "빠르고 부드러운 변속으로 역동적인 주행을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "AMG 트랙 페이스",
        "image": "images/trim-features/벤츠/AMG GT 55/AMG 트랙 페이스.webp",
        "description": "주행 데이터를 기록하고 분석해 서킷 주행을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/AMG GT 55/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/AMG GT 55/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/AMG GT 55/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "PRE-SAFE® 시스템",
        "image": "images/trim-features/벤츠/AMG GT 55/PRE-SAFE® 시스템.webp",
        "description": "충돌 위험을 감지하면 탑승자 보호 조치를 준비합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "AMG 퍼포먼스 4MATIC+",
        "image": "images/trim-features/벤츠/AMG GT 55/AMG 퍼포먼스 4MATIC+.webp",
        "description": "상황에 맞는 구동력 배분으로 안정적인 주행을 돕습니다.",
        "condition": "국내 GT 55 모델 소개 기준",
        "category": "주행 성능"
      }
    ]
  },
  "벤츠|AMG GT 63 S E 쿠페": {
    "sourceModel": "AMG GT 63 S E Performance",
    "features": [
      {
        "title": "E PERFORMANCE 하이브리드 드라이브",
        "image": "images/trim-features/벤츠/AMG GT 63 S E Performance/E PERFORMANCE 하이브리드 드라이브.webp",
        "description": "V8 엔진과 전기 모터를 결합해 강력한 반응을 제공합니다.",
        "condition": "국내 GT 63 S E Performance 모델 소개 기준",
        "category": "주행 성능"
      },
      {
        "title": "폴딩 리어 시트와 적재 공간",
        "image": "images/trim-features/벤츠/AMG GT 63 S E Performance/폴딩 리어 시트와 적재 공간.webp",
        "description": "뒷좌석 등받이를 접어 적재 공간을 유연하게 활용합니다.",
        "condition": "국내 GT 63 S E Performance 모델 소개 기준",
        "category": "공간"
      }
    ]
  },
  "벤츠|AMG SL 로드스터": {
    "sourceModel": "AMG SL 로드스터",
    "features": [
      {
        "title": "프론트 액슬 리프트 시스템",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/프론트 액슬 리프트 시스템.webp",
        "description": "앞 차축을 들어 올려 경사면과 장애물 통과를 돕습니다.",
        "condition": "국내 SL 63 적용 장비 · SL 43에 공통 적용하지 않음",
        "category": "편의"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "국내 SL 63 적용 장비 · SL 43에 공통 적용하지 않음",
        "category": "주행 성능"
      },
      {
        "title": "AMG 스티어링 휠 버튼",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/AMG 스티어링 휠 버튼.webp",
        "description": "주행 관련 설정을 스티어링 휠에서 빠르게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "AMG 트랙 페이스",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/AMG 트랙 페이스.webp",
        "description": "주행 데이터를 기록하고 분석해 서킷 주행을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/헤드업 디스플레이.webp",
        "description": "주요 주행 정보를 운전자 전방 시야에 표시합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "부메스터® 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/AMG SL 로드스터/부메스터® 서라운드 사운드 시스템.webp",
        "description": "전용 스피커로 몰입감 있는 입체 음향을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "오디오"
      }
    ]
  },
  "벤츠|A클래스 해치백": {
    "sourceModel": "A클래스 해치백",
    "features": [
      {
        "title": "LED 고성능 헤드램프",
        "image": "images/trim-features/벤츠/A클래스 해치백/LED 고성능 헤드램프.webp",
        "description": "밝고 넓은 LED 조명으로 전방 시야를 확보합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/A클래스 해치백/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      },
      {
        "title": "온열 윈드스크린 워셔 시스템",
        "image": "images/trim-features/벤츠/A클래스 해치백/온열 윈드스크린 워셔 시스템.webp",
        "description": "워셔 시스템을 가열해 추운 날씨의 시야 확보를 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/A클래스 해치백/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "다기능 스포츠 스티어링 휠",
        "image": "images/trim-features/벤츠/A클래스 해치백/다기능 스포츠 스티어링 휠.webp",
        "description": "스티어링 휠에서 주요 기능을 편리하게 조작합니다.",
        "condition": "기본사양",
        "category": "실내"
      }
    ]
  },
  "벤츠|CLA": {
    "sourceModel": "CLA AMG GT 쿠페",
    "features": [
      {
        "title": "LED 고성능 헤드램프",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/LED 고성능 헤드램프.webp",
        "description": "밝고 넓은 LED 조명으로 전방 시야를 확보합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      },
      {
        "title": "온열 윈드스크린 워셔 시스템",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/온열 윈드스크린 워셔 시스템.webp",
        "description": "워셔 시스템을 가열해 추운 날씨의 시야 확보를 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "다기능 스포츠 스티어링 휠",
        "image": "images/trim-features/벤츠/CLA AMG GT 쿠페/다기능 스포츠 스티어링 휠.webp",
        "description": "스티어링 휠에서 주요 기능을 편리하게 조작합니다.",
        "condition": "기본사양",
        "category": "실내"
      }
    ]
  },
  "벤츠|CLE AMG 카브리올레": {
    "sourceModel": "CLE AMG 카브리올레",
    "features": [
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/CLE AMG 카브리올레/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "MBUX 내비게이션 프리미엄",
        "image": "images/trim-features/벤츠/CLE AMG 카브리올레/MBUX 내비게이션 프리미엄.webp",
        "description": "지도와 교통 정보를 활용해 목적지까지 경로를 안내합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/CLE AMG 카브리올레/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "센터 에어백",
        "image": "images/trim-features/벤츠/CLE AMG 카브리올레/센터 에어백.webp",
        "description": "측면 충돌 시 운전자와 동반석 승객 사이의 충돌을 줄입니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "벨트 익스텐더",
        "image": "images/trim-features/벤츠/CLE AMG 카브리올레/벨트 익스텐더.webp",
        "description": "안전벨트 피더가 벨트를 앞으로 내밀어 착용을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      }
    ]
  },
  "벤츠|CLE AMG 쿠페": {
    "sourceModel": "CLE AMG 쿠페",
    "features": [
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/CLE AMG 쿠페/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "MBUX 내비게이션 프리미엄",
        "image": "images/trim-features/벤츠/CLE AMG 쿠페/MBUX 내비게이션 프리미엄.webp",
        "description": "지도와 교통 정보를 활용해 목적지까지 경로를 안내합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/CLE AMG 쿠페/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "센터 에어백",
        "image": "images/trim-features/벤츠/CLE AMG 쿠페/센터 에어백.webp",
        "description": "측면 충돌 시 운전자와 동반석 승객 사이의 충돌을 줄입니다.",
        "condition": "기본사양",
        "category": "안전"
      }
    ]
  },
  "벤츠|C클래스 아방가르드": {
    "sourceModel": "C클래스 아방가르드",
    "features": [
      {
        "title": "11.9인치 LCD 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/11.9인치 LCD 센트럴 디스플레이.webp",
        "description": "터치 화면으로 차량 설정과 멀티미디어를 조작합니다.",
        "condition": "국내 C 200 AVANTGARDE 기본 · 카탈로그 하이라이트 확인 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "LED 고성능 헤드램프",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/LED 고성능 헤드램프.webp",
        "description": "밝고 넓은 LED 조명으로 전방 시야를 확보합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "어드밴스드 사운드 시스템",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/어드밴스드 사운드 시스템.webp",
        "description": "차량에 맞춘 스피커 구성으로 풍부한 음악을 제공합니다.",
        "condition": "유료옵션",
        "category": "오디오"
      },
      {
        "title": "다기능 스포츠 스티어링 휠",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/다기능 스포츠 스티어링 휠.webp",
        "description": "스티어링 휠에서 주요 기능을 편리하게 조작합니다.",
        "condition": "C 200 AVANTGARDE 기본사양",
        "category": "실내"
      },
      {
        "title": "아티코 인조 가죽 시트",
        "image": "images/trim-features/벤츠/C클래스 아방가르드/아티코 인조 가죽 시트.webp",
        "description": "인조 가죽 소재로 실내를 깔끔하게 마감합니다.",
        "condition": "C 200 AVANTGARDE 기본사양",
        "category": "시트"
      }
    ]
  },
  "벤츠|EQA": {
    "sourceModel": "EQA",
    "features": [
      {
        "title": "공기 청정 패키지",
        "image": "images/trim-features/벤츠/EQA/공기 청정 패키지.webp",
        "description": "실내외 공기 상태를 확인하고 실내 공기를 정화합니다.",
        "condition": "기본사양",
        "category": "공조"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/EQA/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/EQA/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "기본사양",
        "category": "주차 보조"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/EQA/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "부메스터® 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/EQA/부메스터® 서라운드 사운드 시스템.webp",
        "description": "전용 스피커로 몰입감 있는 입체 음향을 제공합니다.",
        "condition": "EQA AMG Line 적용 · Progressive 제외",
        "category": "오디오"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/벤츠/EQA/헤드업 디스플레이.webp",
        "description": "주요 주행 정보를 운전자 전방 시야에 표시합니다.",
        "condition": "EQA AMG Line 적용 · Progressive 제외",
        "category": "디스플레이"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/EQA/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      }
    ]
  },
  "벤츠|EQB": {
    "sourceModel": "EQB",
    "features": [
      {
        "title": "공기 청정 패키지",
        "image": "images/trim-features/벤츠/EQB/공기 청정 패키지.webp",
        "description": "실내외 공기 상태를 확인하고 실내 공기를 정화합니다.",
        "condition": "기본사양",
        "category": "공조"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/EQB/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/EQB/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "기본사양",
        "category": "주차 보조"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/EQB/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "부메스터® 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/EQB/부메스터® 서라운드 사운드 시스템.webp",
        "description": "전용 스피커로 몰입감 있는 입체 음향을 제공합니다.",
        "condition": "EQB AMG Line 적용 · Progressive 제외",
        "category": "오디오"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/벤츠/EQB/헤드업 디스플레이.webp",
        "description": "주요 주행 정보를 운전자 전방 시야에 표시합니다.",
        "condition": "EQB AMG Line 적용 · Progressive 제외",
        "category": "디스플레이"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/EQB/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      }
    ]
  },
  "벤츠|EQE": {
    "sourceModel": "EQE",
    "features": [
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/EQE/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "기본사양",
        "category": "주행 성능"
      },
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/EQE/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/EQE/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "액티브 앰비언트 라이트",
        "image": "images/trim-features/벤츠/EQE/액티브 앰비언트 라이트.webp",
        "description": "실내 조명으로 분위기를 연출하고 시각적 알림을 제공합니다.",
        "condition": "기본사양",
        "category": "실내"
      },
      {
        "title": "어드밴스드 사운드 시스템",
        "image": "images/trim-features/벤츠/EQE/어드밴스드 사운드 시스템.webp",
        "description": "차량에 맞춘 스피커 구성으로 풍부한 음악을 제공합니다.",
        "condition": "EQE 350+ 기본사양",
        "category": "오디오"
      }
    ]
  },
  "벤츠|EQS": {
    "sourceModel": "EQS",
    "features": [
      {
        "title": "에어매틱 서스펜션",
        "image": "images/trim-features/벤츠/EQS/에어매틱 서스펜션.webp",
        "description": "주행 환경에 맞춰 차체와 서스펜션을 조절합니다.",
        "condition": "기본사양",
        "category": "주행 성능"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/EQS/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "기본사양",
        "category": "주행 성능"
      },
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/EQS/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/벤츠/EQS/헤드업 디스플레이.webp",
        "description": "주요 주행 정보를 운전자 전방 시야에 표시합니다.",
        "condition": "기본사양",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/EQS/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/EQS/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "기본사양",
        "category": "주차 보조"
      },
      {
        "title": "열선 및 통풍 시트",
        "image": "images/trim-features/벤츠/EQS/열선 및 통풍 시트.webp",
        "description": "시트를 따뜻하게 하거나 통풍해 쾌적함을 높입니다.",
        "condition": "기본사양",
        "category": "시트"
      },
      {
        "title": "부메스터® 3D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/EQS/부메스터® 3D 서라운드 사운드 시스템.webp",
        "description": "입체적인 사운드로 음악 감상의 몰입감을 높입니다.",
        "condition": "기본사양",
        "category": "오디오"
      }
    ]
  },
  "벤츠|E클래스 아방가르드": {
    "sourceModel": "E클래스 아방가르드",
    "features": [
      {
        "title": "14.4인치 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/14.4인치 센트럴 디스플레이.webp",
        "description": "대형 터치 화면으로 차량 설정과 콘텐츠를 조작합니다.",
        "condition": "기본사양",
        "category": "디스플레이"
      },
      {
        "title": "MBUX 증강 현실 내비게이션",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/MBUX 증강 현실 내비게이션.webp",
        "description": "실제 전방 영상에 경로 정보를 더해 길 찾기를 돕습니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "뒷좌석 사이드백",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/뒷좌석 사이드백.webp",
        "description": "측면 충돌 시 뒷좌석 창가 승객의 가슴 부위를 보호합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "부메스터® 4D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/부메스터® 4D 서라운드 사운드 시스템.webp",
        "description": "입체 음향과 사운드 효과로 몰입감을 높입니다.",
        "condition": "국내 E 200 AVANTGARDE 유료 옵션",
        "category": "오디오"
      },
      {
        "title": "열선 및 통풍 시트",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/열선 및 통풍 시트.webp",
        "description": "시트를 따뜻하게 하거나 통풍해 쾌적함을 높입니다.",
        "condition": "기본사양",
        "category": "시트"
      },
      {
        "title": "파노라믹 선루프",
        "image": "images/trim-features/벤츠/E클래스 아방가르드/파노라믹 선루프.webp",
        "description": "넓은 유리 루프로 실내 개방감을 높입니다.",
        "condition": "기본사양",
        "category": "실내"
      }
    ]
  },
  "벤츠|E클래스 익스클루시브": {
    "sourceModel": "E클래스 익스클루시브",
    "features": [
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "E 300·E 450 EXCLUSIVE 기본 · E 200·E 220d에 공통 적용하지 않음",
        "category": "안전"
      },
      {
        "title": "14.4인치 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/14.4인치 센트럴 디스플레이.webp",
        "description": "대형 터치 화면으로 차량 설정과 콘텐츠를 조작합니다.",
        "condition": "기본사양",
        "category": "디스플레이"
      },
      {
        "title": "MBUX 슈퍼스크린",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/MBUX 슈퍼스크린.webp",
        "description": "중앙·동반석 화면으로 정보와 콘텐츠를 편리하게 이용합니다.",
        "condition": "E 450 EXCLUSIVE 기본 / E 300 EXCLUSIVE 유료 · E 200·E 220d 제외 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "MBUX 증강 현실 내비게이션",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/MBUX 증강 현실 내비게이션.webp",
        "description": "실제 전방 영상에 경로 정보를 더해 길 찾기를 돕습니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "뒷좌석 사이드백",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/뒷좌석 사이드백.webp",
        "description": "측면 충돌 시 뒷좌석 창가 승객의 가슴 부위를 보호합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "부메스터® 4D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/부메스터® 4D 서라운드 사운드 시스템.webp",
        "description": "입체 음향과 사운드 효과로 몰입감을 높입니다.",
        "condition": "E 300·E 450 EXCLUSIVE 기본 / E 220d EXCLUSIVE 유료",
        "category": "오디오"
      },
      {
        "title": "열선 및 통풍 시트",
        "image": "images/trim-features/벤츠/E클래스 익스클루시브/열선 및 통풍 시트.webp",
        "description": "시트를 따뜻하게 하거나 통풍해 쾌적함을 높입니다.",
        "condition": "기본사양",
        "category": "시트"
      }
    ]
  },
  "벤츠|GLA": {
    "sourceModel": "GLA",
    "features": [
      {
        "title": "LED 고성능 헤드램프",
        "image": "images/trim-features/벤츠/GLA/LED 고성능 헤드램프.webp",
        "description": "밝고 넓은 LED 조명으로 전방 시야를 확보합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/GLA/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/GLA/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      },
      {
        "title": "온열 윈드스크린 워셔 시스템",
        "image": "images/trim-features/벤츠/GLA/온열 윈드스크린 워셔 시스템.webp",
        "description": "워셔 시스템을 가열해 추운 날씨의 시야 확보를 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/GLA/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "기본사양",
        "category": "편의"
      }
    ]
  },
  "벤츠|GLB": {
    "sourceModel": "GLB",
    "features": [
      {
        "title": "LED 고성능 헤드램프",
        "image": "images/trim-features/벤츠/GLB/LED 고성능 헤드램프.webp",
        "description": "밝고 넓은 LED 조명으로 전방 시야를 확보합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/GLB/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "무선 스마트폰 통합 패키지",
        "image": "images/trim-features/벤츠/GLB/무선 스마트폰 통합 패키지.webp",
        "description": "호환 스마트폰의 앱과 기능을 차량 화면에서 이용합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "커넥티비티"
      },
      {
        "title": "온열 윈드스크린 워셔 시스템",
        "image": "images/trim-features/벤츠/GLB/온열 윈드스크린 워셔 시스템.webp",
        "description": "워셔 시스템을 가열해 추운 날씨의 시야 확보를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "다기능 열선 스티어링 휠",
        "image": "images/trim-features/벤츠/GLB/다기능 열선 스티어링 휠.webp",
        "description": "스티어링 휠을 따뜻하게 유지해 편안한 조작을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      }
    ]
  },
  "벤츠|GLC": {
    "sourceModel": "GLC",
    "features": [
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/GLC/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "11.9인치 LCD 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/GLC/11.9인치 LCD 센트럴 디스플레이.webp",
        "description": "터치 화면으로 차량 설정과 멀티미디어를 조작합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/GLC/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "열·소음 차단 글래스",
        "image": "images/trim-features/벤츠/GLC/열·소음 차단 글래스.webp",
        "description": "외부 열기와 소음의 유입을 줄여 실내 쾌적함을 높입니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "부메스터® 3D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/GLC/부메스터® 3D 서라운드 사운드 시스템.webp",
        "description": "입체적인 사운드로 음악 감상의 몰입감을 높입니다.",
        "condition": "*기본사양 : GLC 300 4MATIC AVANTGARDE, GLC 300 4MATIC AMG Line / GLC 300 4MATIC Coupé AVANTGARDE, GLC 300 4MATIC Coupé AMG Line / *유료옵션 : GLC 200 d 4MATIC",
        "category": "오디오"
      },
      {
        "title": "MBUX 멀티미디어 시스템",
        "image": "images/trim-features/벤츠/GLC/MBUX 멀티미디어 시스템.webp",
        "description": "음성·터치로 내비게이션과 차량 기능을 조작합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "인포테인먼트"
      },
      {
        "title": "MBUX 증강 현실 내비게이션",
        "image": "images/trim-features/벤츠/GLC/MBUX 증강 현실 내비게이션.webp",
        "description": "실제 전방 영상에 경로 정보를 더해 길 찾기를 돕습니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      }
    ]
  },
  "벤츠|GLC 쿠페": {
    "sourceModel": "GLC 쿠페 아방가르드",
    "features": [
      {
        "title": "11.9인치 LCD 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/11.9인치 LCD 센트럴 디스플레이.webp",
        "description": "터치 화면으로 차량 설정과 멀티미디어를 조작합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "열·소음 차단 글래스",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/열·소음 차단 글래스.webp",
        "description": "외부 열기와 소음의 유입을 줄여 실내 쾌적함을 높입니다.",
        "condition": "기본사양",
        "category": "편의"
      },
      {
        "title": "MBUX 멀티미디어 시스템",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/MBUX 멀티미디어 시스템.webp",
        "description": "음성·터치로 내비게이션과 차량 기능을 조작합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "인포테인먼트"
      },
      {
        "title": "MBUX 내비게이션 프리미엄",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/MBUX 내비게이션 프리미엄.webp",
        "description": "지도와 교통 정보를 활용해 목적지까지 경로를 안내합니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      },
      {
        "title": "MBUX 증강 현실 내비게이션",
        "image": "images/trim-features/벤츠/GLC 쿠페 아방가르드/MBUX 증강 현실 내비게이션.webp",
        "description": "실제 전방 영상에 경로 정보를 더해 길 찾기를 돕습니다.",
        "condition": "기본사양 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      }
    ]
  },
  "벤츠|GLE": {
    "sourceModel": "GLE",
    "features": [
      {
        "title": "에어매틱 서스펜션",
        "image": "images/trim-features/벤츠/GLE/에어매틱 서스펜션.webp",
        "description": "주행 환경에 맞춰 차체와 서스펜션을 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/GLE/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "투명 보닛",
        "image": "images/trim-features/벤츠/GLE/투명 보닛.webp",
        "description": "전방 하부 영상을 화면에 표시해 지형 확인을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "부메스터® 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/GLE/부메스터® 서라운드 사운드 시스템.webp",
        "description": "전용 스피커로 몰입감 있는 입체 음향을 제공합니다.",
        "condition": "기본사양",
        "category": "오디오"
      },
      {
        "title": "에어 밸런스 패키지",
        "image": "images/trim-features/벤츠/GLE/에어 밸런스 패키지.webp",
        "description": "실내 공기를 관리하고 향기로 쾌적한 분위기를 만듭니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "공조"
      },
      {
        "title": "온도 조절 컵홀더",
        "image": "images/trim-features/벤츠/GLE/온도 조절 컵홀더.webp",
        "description": "음료를 따뜻하거나 시원하게 보관하도록 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "MBUX 증강 현실 내비게이션",
        "image": "images/trim-features/벤츠/GLE/MBUX 증강 현실 내비게이션.webp",
        "description": "실제 전방 영상에 경로 정보를 더해 길 찾기를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "내비게이션"
      }
    ]
  },
  "벤츠|GLS": {
    "sourceModel": "GLS",
    "features": [
      {
        "title": "에어매틱 서스펜션",
        "image": "images/trim-features/벤츠/GLS/에어매틱 서스펜션.webp",
        "description": "주행 환경에 맞춰 차체와 서스펜션을 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "매직 비전 컨트롤",
        "image": "images/trim-features/벤츠/GLS/매직 비전 컨트롤.webp",
        "description": "와이퍼에서 워셔액을 분사해 전면 유리의 시야를 확보합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "멀티빔 LED",
        "image": "images/trim-features/벤츠/GLS/멀티빔 LED.webp",
        "description": "교통 상황에 맞춰 LED 조명을 개별 제어합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/GLS/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/GLS/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주차 보조"
      },
      {
        "title": "투명 보닛",
        "image": "images/trim-features/벤츠/GLS/투명 보닛.webp",
        "description": "전방 하부 영상을 화면에 표시해 지형 확인을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "부메스터® 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/GLS/부메스터® 서라운드 사운드 시스템.webp",
        "description": "전용 스피커로 몰입감 있는 입체 음향을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "오디오"
      },
      {
        "title": "멀티컨투어 시트",
        "image": "images/trim-features/벤츠/GLS/멀티컨투어 시트.webp",
        "description": "에어쿠션 조절과 마사지로 편안한 착좌감을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "시트"
      }
    ]
  },
  "벤츠|G클래스": {
    "sourceModel": "G클래스",
    "features": [
      {
        "title": "컴포트 패키지",
        "image": "images/trim-features/벤츠/G클래스/컴포트 패키지.webp",
        "description": "키레스 고·무선 충전 등 일상 편의 기능을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "열선 패키지",
        "image": "images/trim-features/벤츠/G클래스/열선 패키지.webp",
        "description": "열선 기능으로 추운 날씨의 편안한 이용을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "앞좌석 무선 충전 시스템",
        "image": "images/trim-features/벤츠/G클래스/앞좌석 무선 충전 시스템.webp",
        "description": "호환 스마트폰을 충전 공간에서 무선으로 충전합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "액티브 차선 이탈 방지 어시스트",
        "image": "images/trim-features/벤츠/G클래스/액티브 차선 이탈 방지 어시스트.webp",
        "description": "의도치 않은 차선 이탈을 감지하면 경고와 제어로 이탈 방지를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/G클래스/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "파크트로닉 주차 어시스트",
        "image": "images/trim-features/벤츠/G클래스/파크트로닉 주차 어시스트.webp",
        "description": "주변 장애물과의 거리를 감지해 주차 중 경고합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주차 보조"
      },
      {
        "title": "액티브 주차 어시스트",
        "image": "images/trim-features/벤츠/G클래스/액티브 주차 어시스트.webp",
        "description": "주차 공간 탐색과 주차 조작을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주차 보조"
      }
    ]
  },
  "벤츠|S클래스": {
    "sourceModel": "S클래스",
    "features": [
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/S클래스/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "- 리어 액슬 스티어링 (2.5°) : Mercedes-AMG S 63 E Performance 기본사양 / - 리어 액슬 스티어링 (4.5°) : S 450 4MATIC (SWB), S 500 4MATIC 기본사양 / - 리어 액슬 스티어링 (10°) : S 580 4MATIC 기본사양 / S 350 d 4MATIC, S 450 4MATIC (SWB), S 450 4MATIC 유료옵션",
        "category": "주행 성능"
      },
      {
        "title": "디지털 라이트",
        "image": "images/trim-features/벤츠/S클래스/디지털 라이트.webp",
        "description": "주행 환경에 맞춰 조명 범위와 밝기를 조절합니다.",
        "condition": "기본사양",
        "category": "안전"
      },
      {
        "title": "MBUX 증강현실 헤드업 디스플레이",
        "image": "images/trim-features/벤츠/S클래스/MBUX 증강현실 헤드업 디스플레이.webp",
        "description": "전방 시야에 주행·경로 안내 정보를 직관적으로 표시합니다.",
        "condition": "- 기본사양 : S 580 4MATIC, Mercedes-AMG S 63 E Performance / - 유료옵션 : S 450 4MATIC (SWB), S 450 4MATIC, S 500 4MATIC · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "OLED 센트럴 디스플레이",
        "image": "images/trim-features/벤츠/S클래스/OLED 센트럴 디스플레이.webp",
        "description": "선명한 OLED 터치 화면으로 주요 차량 기능을 조작합니다.",
        "condition": "기본사양",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지",
        "image": "images/trim-features/벤츠/S클래스/드라이빙 어시스턴스 패키지.webp",
        "description": "주변 상황을 감지해 안전한 주행을 보조합니다.",
        "condition": "기본사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/S클래스/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "S 350 d 4MATIC·S 450 4MATIC(SWB 포함) 기본 / S 500 4MATIC 선택사양 · 상위 모델은 원격 주차 패키지 구성 확인",
        "category": "주차 보조"
      },
      {
        "title": "액티브 앰비언트 라이트",
        "image": "images/trim-features/벤츠/S클래스/액티브 앰비언트 라이트.webp",
        "description": "실내 조명으로 분위기를 연출하고 시각적 알림을 제공합니다.",
        "condition": "- 기본사양 : S 580 4MATIC, Mercedes-AMG S 63 E Performance / - 유료옵션 : S 350 d 4MATIC, S 450 4MATIC (SWB), S 450 4MATIC, S 500 4MATIC",
        "category": "실내"
      }
    ]
  },
  "벤츠|마이바흐 EQS": {
    "sourceModel": "마이바흐 EQS",
    "features": [
      {
        "title": "에어매틱 서스펜션",
        "image": "images/trim-features/벤츠/마이바흐 EQS/에어매틱 서스펜션.webp",
        "description": "주행 환경에 맞춰 차체와 서스펜션을 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/마이바흐 EQS/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "MBUX 증강현실 헤드업 디스플레이",
        "image": "images/trim-features/벤츠/마이바흐 EQS/MBUX 증강현실 헤드업 디스플레이.webp",
        "description": "주요 주행 정보를 운전자 전방 시야에 표시합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "디스플레이"
      },
      {
        "title": "MBUX 하이퍼스크린",
        "image": "images/trim-features/벤츠/마이바흐 EQS/MBUX 하이퍼스크린.webp",
        "description": "넓게 이어진 화면에서 차량 정보와 콘텐츠를 확인합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록 · 국내 지원 기기·서비스 조건에 따라 이용",
        "category": "디스플레이"
      },
      {
        "title": "드라이빙 어시스턴스 패키지 플러스",
        "image": "images/trim-features/벤츠/마이바흐 EQS/드라이빙 어시스턴스 패키지 플러스.webp",
        "description": "차간 거리·차선 유지와 조향·제동을 보조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 보조"
      },
      {
        "title": "부메스터® 4D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/마이바흐 EQS/부메스터® 4D 서라운드 사운드 시스템.webp",
        "description": "입체 음향과 사운드 효과로 몰입감을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "오디오"
      },
      {
        "title": "쇼퍼 패키지",
        "image": "images/trim-features/벤츠/마이바흐 EQS/쇼퍼 패키지.webp",
        "description": "동반석을 조절해 뒷좌석 승객의 여유 공간을 넓힙니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "시트"
      }
    ]
  },
  "벤츠|마이바흐 GLS": {
    "sourceModel": "마이바흐 GLS",
    "features": [
      {
        "title": "에어매틱 서스펜션",
        "image": "images/trim-features/벤츠/마이바흐 GLS/에어매틱 서스펜션.webp",
        "description": "주행 환경에 맞춰 차체와 서스펜션을 조절합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "E-액티브 바디 컨트롤",
        "image": "images/trim-features/벤츠/마이바흐 GLS/E-액티브 바디 컨트롤.webp",
        "description": "차체 움직임을 능동적으로 제어해 승차감을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "멀티빔 LED",
        "image": "images/trim-features/벤츠/마이바흐 GLS/멀티빔 LED.webp",
        "description": "교통 상황에 맞춰 LED 조명을 개별 제어합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "안전"
      },
      {
        "title": "360° 카메라가 포함된 주차 패키지",
        "image": "images/trim-features/벤츠/마이바흐 GLS/360° 카메라가 포함된 주차 패키지.webp",
        "description": "차량 주변 화면과 주차 보조 기능으로 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주차 보조"
      },
      {
        "title": "부메스터® 하이엔드 3D 서라운드 사운드 시스템",
        "image": "images/trim-features/벤츠/마이바흐 GLS/부메스터® 하이엔드 3D 서라운드 사운드 시스템.webp",
        "description": "고급 스피커 구성으로 입체적인 음향을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "오디오"
      },
      {
        "title": "멀티컨투어 시트",
        "image": "images/trim-features/벤츠/마이바흐 GLS/멀티컨투어 시트.webp",
        "description": "에어쿠션 조절과 마사지로 편안한 착좌감을 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "시트"
      },
      {
        "title": "이그제큐티브 시트",
        "image": "images/trim-features/벤츠/마이바흐 GLS/이그제큐티브 시트.webp",
        "description": "편안한 자세로 조절되는 뒷좌석으로 휴식을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "시트"
      },
      {
        "title": "온도 조절 컵홀더",
        "image": "images/trim-features/벤츠/마이바흐 GLS/온도 조절 컵홀더.webp",
        "description": "음료를 따뜻하거나 시원하게 보관하도록 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      }
    ]
  },
  "벤츠|마이바흐 SL 모노그램 시리즈": {
    "sourceModel": "마이바흐 SL 모노그램",
    "features": [
      {
        "title": "액티브 라이드 컨트롤 서스펜션",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/액티브 라이드 컨트롤 서스펜션.webp",
        "description": "차체 기울어짐을 제어해 민첩한 주행과 승차감을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "리어 액슬 스티어링",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/리어 액슬 스티어링.webp",
        "description": "뒷바퀴 조향으로 저속 기동성과 주행 안정성을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주행 성능"
      },
      {
        "title": "프론트 액슬 리프트 시스템",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/프론트 액슬 리프트 시스템.webp",
        "description": "앞 차축을 들어 올려 경사면과 장애물 통과를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "편의"
      },
      {
        "title": "발광 라디에이터 그릴 및 MAYBACH 레터링",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/발광 라디에이터 그릴 및 MAYBACH 레터링.webp",
        "description": "그릴과 레터링의 조명으로 존재감을 강조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "외장"
      },
      {
        "title": "원격 주차 패키지",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/원격 주차 패키지.webp",
        "description": "차량 밖에서 주차와 출차를 편리하게 지원합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "주차 보조"
      },
      {
        "title": "공기 청정 패키지",
        "image": "images/trim-features/벤츠/마이바흐 SL 모노그램/공기 청정 패키지.webp",
        "description": "실내외 공기 상태를 확인하고 실내 공기를 정화합니다.",
        "condition": "국내 카탈로그 소개 사양 · 해당 기능 적용 트림에 등록",
        "category": "공조"
      }
    ]
  },
  "벤츠|마이바흐 S클래스": {
    "sourceModel": "마이바흐 S클래스",
    "features": [
      {
        "title": "뒷좌석 컴포트 패키지",
        "image": "images/trim-features/벤츠/마이바흐 S클래스/뒷좌석 컴포트 패키지.webp",
        "description": "뒷좌석 편의 기능으로 편안한 이동을 돕습니다.",
        "condition": "2024년식 국내 카탈로그 기준 기본사양 · 2026년식 적용 여부 별도 확인",
        "category": "시트"
      },
      {
        "title": "뒷좌석 다리 마사지",
        "image": "images/trim-features/벤츠/마이바흐 S클래스/뒷좌석 다리 마사지.webp",
        "description": "뒷좌석 다리 받침의 마사지 기능으로 피로 완화를 돕습니다.",
        "condition": "2024년식 국내 카탈로그 기준 기본사양 · 2026년식 적용 여부 별도 확인",
        "category": "시트"
      },
      {
        "title": "뒷좌석 컴포트 도어",
        "image": "images/trim-features/벤츠/마이바흐 S클래스/뒷좌석 컴포트 도어.webp",
        "description": "뒷좌석에서 도어를 편리하게 여닫도록 돕습니다.",
        "condition": "2024년식 국내 카탈로그 기준 기본사양 · 2026년식 적용 여부 별도 확인",
        "category": "편의"
      },
      {
        "title": "이그제큐티브 시트",
        "image": "images/trim-features/벤츠/마이바흐 S클래스/이그제큐티브 시트.webp",
        "description": "편안한 자세로 조절되는 뒷좌석으로 휴식을 돕습니다.",
        "condition": "2024년식 국내 카탈로그 기준 기본사양 · 2026년식 적용 여부 별도 확인",
        "category": "시트"
      },
      {
        "title": "쇼퍼 패키지",
        "image": "images/trim-features/벤츠/마이바흐 S클래스/쇼퍼 패키지.webp",
        "description": "동반석을 조절해 뒷좌석 승객의 여유 공간을 넓힙니다.",
        "condition": "2024년식 국내 카탈로그 기준 기본사양 · 2026년식 적용 여부 별도 확인",
        "category": "시트"
      }
    ]
  },
  "볼보|EX30": {
    "sourceModel": "EX30",
    "features": [
      {
        "title": "12.3인치 센터 디스플레이",
        "image": "images/trim-features/볼보/EX30/12.3인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY27 EX30 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "실내 공기 청정 시스템",
        "image": "images/trim-features/볼보/EX30/실내 공기 청정 시스템.webp",
        "description": "미세먼지 등 오염물질의 실내 유입을 줄이고 공기 상태를 관리합니다.",
        "condition": "MY27 EX30 P5 Long Range Ultra 적용 · Core 제외",
        "category": "공조"
      },
      {
        "title": "전방 충돌 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/EX30/전방 충돌 경보 및 긴급제동 서포트.webp",
        "description": "차량·보행자 등과의 충돌 위험을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY27 EX30 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "운전자 경고 시스템",
        "image": "images/trim-features/볼보/EX30/운전자 경고 시스템.webp",
        "description": "운전자의 눈과 머리 움직임 등을 살펴 주의 산만이나 졸음 징후가 있을 때 경고합니다.",
        "condition": "국내 MY27 EX30 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "파일럿 어시스트",
        "image": "images/trim-features/볼보/EX30/파일럿 어시스트.webp",
        "description": "앞차와의 간격과 차선 유지를 보조해 운전자의 주행 부담을 줄입니다.",
        "condition": "MY27 EX30 P5 Long Range Ultra 적용 · Core 제외",
        "category": "주행 보조"
      },
      {
        "title": "파크 파일럿 어시스트",
        "image": "images/trim-features/볼보/EX30/파크 파일럿 어시스트.webp",
        "description": "주차 공간 탐색과 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "MY27 EX30 P5 Long Range Ultra 적용 · Core 제외",
        "category": "주차 보조"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/EX30/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "MY27 EX30 P5 Long Range Ultra 적용 · Core 제외",
        "category": "주차 보조"
      }
    ]
  },
  "볼보|EX90": {
    "sourceModel": "EX90",
    "features": [
      {
        "title": "14.5인치 센터 디스플레이",
        "image": "images/trim-features/볼보/EX90/14.5인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "디지털 키 플러스",
        "image": "images/trim-features/볼보/EX90/디지털 키 플러스.webp",
        "description": "호환 스마트폰을 키로 사용해 차량 잠금을 해제하고 주행할 수 있습니다.",
        "condition": "MY26 EX90 국내 브로슈어 적용 · 호환 스마트폰·OS 및 UWB 지원 조건 확인",
        "category": "편의"
      },
      {
        "title": "운전자 상태 인식 시스템",
        "image": "images/trim-features/볼보/EX90/운전자 상태 인식 시스템.webp",
        "description": "운전자의 눈과 머리 움직임 등을 살펴 주의가 산만하거나 졸릴 때 경고와 개입을 돕습니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "실내 승객 감지 시스템",
        "image": "images/trim-features/볼보/EX90/실내 승객 감지 시스템.webp",
        "description": "실내의 미세한 움직임을 감지해 남겨진 사람이나 반려동물을 확인하도록 알립니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "파일럿 어시스트",
        "image": "images/trim-features/볼보/EX90/파일럿 어시스트.webp",
        "description": "차간 거리와 차선 유지를 보조해 운전자의 주행 부담을 줄입니다. 운전자의 지속적인 주의와 조작이 필요합니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "파크 파일럿 어시스트",
        "image": "images/trim-features/볼보/EX90/파크 파일럿 어시스트.webp",
        "description": "주차 공간 탐색과 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "주차 보조"
      },
      {
        "title": "고해상도 픽셀 헤드라이트",
        "image": "images/trim-features/볼보/EX90/고해상도 픽셀 헤드라이트.webp",
        "description": "교통 상황에 맞춰 빛의 패턴을 조절해 다른 운전자의 눈부심을 줄이고 시야를 확보합니다.",
        "condition": "MY26 EX90 Ultra 적용 · Twin Motor Plus는 일반 LED 헤드램프",
        "category": "안전"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/EX90/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "국내 MY26 EX90 브로슈어 적용 사양",
        "category": "주차 보조"
      }
    ]
  },
  "볼보|S90": {
    "sourceModel": "S90",
    "features": [
      {
        "title": "11.2인치 센터 디스플레이",
        "image": "images/trim-features/볼보/S90/11.2인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/볼보/S90/헤드업 디스플레이.webp",
        "description": "운전자 전방 시야에 속도와 경로 안내를 표시해 도로에 집중하도록 돕습니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "4구역 독립 온도 조절 시스템",
        "image": "images/trim-features/볼보/S90/4구역 독립 온도 조절 시스템.webp",
        "description": "운전자·동반석·뒷좌석에서 구역별로 온도와 바람을 조절해 쾌적함을 높입니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "이중 접합 라미네이티드 윈도",
        "image": "images/trim-features/볼보/S90/이중 접합 라미네이티드 윈도.webp",
        "description": "접합 유리가 외부 소음을 줄이고 편안하고 조용한 실내 환경을 돕습니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "편의"
      },
      {
        "title": "실내 공기 청정 시스템",
        "image": "images/trim-features/볼보/S90/실내 공기 청정 시스템.webp",
        "description": "미세먼지 등 오염물질의 실내 유입을 줄이고 공기 상태를 관리합니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "사각지대 경보 및 조향 어시스트",
        "image": "images/trim-features/볼보/S90/사각지대 경보 및 조향 어시스트.webp",
        "description": "옆 차선의 차량을 감지해 경고하며 충돌 위험 시 조향을 보조합니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "전방 충돌 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/S90/전방 충돌 경보 및 긴급제동 서포트.webp",
        "description": "차량·보행자 등과의 충돌 위험을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/S90/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "국내 MY26 S90 브로슈어 적용 사양",
        "category": "주차 보조"
      }
    ]
  },
  "볼보|XC40 하이브리드": {
    "sourceModel": "XC40",
    "features": [
      {
        "title": "9인치 센터 디스플레이",
        "image": "images/trim-features/볼보/XC40/9인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "12.3인치 운전자 디스플레이",
        "image": "images/trim-features/볼보/XC40/12.3인치 운전자 디스플레이.webp",
        "description": "디지털 계기판에서 속도와 주행·경로 정보를 한눈에 확인합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "후측방 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC40/후측방 경보 및 긴급제동 서포트.webp",
        "description": "후진 중 측면에서 접근하는 차량을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "실내 공기 청정 시스템",
        "image": "images/trim-features/볼보/XC40/실내 공기 청정 시스템.webp",
        "description": "미세먼지 등 오염물질의 실내 유입을 줄이고 공기 상태를 관리합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "전방 충돌 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC40/전방 충돌 경보 및 긴급제동 서포트.webp",
        "description": "차량·보행자 등과의 충돌 위험을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "차선 유지 보조",
        "image": "images/trim-features/볼보/XC40/차선 유지 보조.webp",
        "description": "의도치 않은 차선 이탈을 감지하면 경고와 미세한 조향으로 차선 복귀를 돕습니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "사각지대 경보 및 조향 어시스트",
        "image": "images/trim-features/볼보/XC40/사각지대 경보 및 조향 어시스트.webp",
        "description": "옆 차선의 차량을 감지해 경고하며 충돌 위험 시 조향을 보조합니다.",
        "condition": "국내 MY26 XC40 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/XC40/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "MY26 XC40 B4 AWD Ultra Bright·Ultra Dark 적용 · Plus Bright 제외",
        "category": "주차 보조"
      }
    ]
  },
  "볼보|XC60 하이브리드": {
    "sourceModel": "XC60",
    "features": [
      {
        "title": "11.2인치 센터 디스플레이",
        "image": "images/trim-features/볼보/XC60/11.2인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/볼보/XC60/헤드업 디스플레이.webp",
        "description": "운전자 전방 시야에 속도와 경로 안내를 표시해 도로에 집중하도록 돕습니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "4구역 독립 온도 조절 시스템",
        "image": "images/trim-features/볼보/XC60/4구역 독립 온도 조절 시스템.webp",
        "description": "운전자·동반석·뒷좌석에서 구역별로 온도와 바람을 조절해 쾌적함을 높입니다.",
        "condition": "MY26 XC60 B5 AWD 마일드 하이브리드의 4구역 공조 · T8의 2구역 구성과 구분",
        "category": "공조"
      },
      {
        "title": "실내 공기 청정 시스템",
        "image": "images/trim-features/볼보/XC60/실내 공기 청정 시스템.webp",
        "description": "미세먼지 등 오염물질의 실내 유입을 줄이고 공기 상태를 관리합니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "후측방 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC60/후측방 경보 및 긴급제동 서포트.webp",
        "description": "후진 중 측면에서 접근하는 차량을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "전방 충돌 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC60/전방 충돌 경보 및 긴급제동 서포트.webp",
        "description": "차량·보행자 등과의 충돌 위험을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "사각지대 경보 및 조향 어시스트",
        "image": "images/trim-features/볼보/XC60/사각지대 경보 및 조향 어시스트.webp",
        "description": "옆 차선의 차량을 감지해 경고하며 충돌 위험 시 조향을 보조합니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/XC60/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "국내 MY26 XC60 브로슈어 적용 사양",
        "category": "주차 보조"
      }
    ]
  },
  "볼보|XC90 하이브리드": {
    "sourceModel": "XC90",
    "features": [
      {
        "title": "11.2인치 센터 디스플레이",
        "image": "images/trim-features/볼보/XC90/11.2인치 센터 디스플레이.webp",
        "description": "터치 화면에서 내비게이션·미디어·공조 등 주요 차량 기능을 직관적으로 조작합니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "헤드업 디스플레이",
        "image": "images/trim-features/볼보/XC90/헤드업 디스플레이.webp",
        "description": "운전자 전방 시야에 속도와 경로 안내를 표시해 도로에 집중하도록 돕습니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "4구역 독립 온도 조절 시스템",
        "image": "images/trim-features/볼보/XC90/4구역 독립 온도 조절 시스템.webp",
        "description": "운전자·동반석·뒷좌석에서 구역별로 온도와 바람을 조절해 쾌적함을 높입니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "실내 공기 청정 시스템",
        "image": "images/trim-features/볼보/XC90/실내 공기 청정 시스템.webp",
        "description": "미세먼지 등 오염물질의 실내 유입을 줄이고 공기 상태를 관리합니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "공조"
      },
      {
        "title": "사각지대 경보 및 조향 어시스트",
        "image": "images/trim-features/볼보/XC90/사각지대 경보 및 조향 어시스트.webp",
        "description": "옆 차선의 차량을 감지해 경고하며 충돌 위험 시 조향을 보조합니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "전방 충돌 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC90/전방 충돌 경보 및 긴급제동 서포트.webp",
        "description": "차량·보행자 등과의 충돌 위험을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "안전"
      },
      {
        "title": "360° 서라운드 뷰 카메라",
        "image": "images/trim-features/볼보/XC90/360° 서라운드 뷰 카메라.webp",
        "description": "차량 주변을 위에서 내려다보는 화면으로 보여줘 좁은 공간의 주차와 이동을 돕습니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "주차 보조"
      },
      {
        "title": "후측방 경보 및 긴급제동 서포트",
        "image": "images/trim-features/볼보/XC90/후측방 경보 및 긴급제동 서포트.webp",
        "description": "후진 중 측면에서 접근하는 차량을 감지해 경고하고 필요할 때 제동을 보조합니다.",
        "condition": "국내 MY26 XC90 브로슈어 적용 사양",
        "category": "안전"
      }
    ]
  },
  "아우디|A3": {
    "sourceModel": "A3",
    "features": [
      {
        "title": "아우디 버추얼 콕핏",
        "image": "images/trim-features/아우디/A3/아우디 버추얼 콕핏.webp",
        "description": "디지털 계기판에서 속도와 주행·내비게이션 정보를 확인합니다.",
        "condition": "40 TFSI는 10.25인치 버추얼 콕핏 · Premium은 버추얼 콕핏 플러스",
        "category": "디스플레이"
      },
      {
        "title": "MMI 내비게이션 플러스",
        "image": "images/trim-features/아우디/A3/MMI 내비게이션 플러스.webp",
        "description": "터치 화면에서 내비게이션·미디어·차량 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "인포테인먼트"
      },
      {
        "title": "주행 및 주차 보조 시스템",
        "image": "images/trim-features/아우디/A3/주행 및 주차 보조 시스템.webp",
        "description": "프리센스 프론트·사이드 어시스트 등 경고와 보조 기능으로 안전한 주행을 돕습니다.",
        "condition": "국내 A3 적용 · 크루즈 컨트롤 구성은 트림별 상이",
        "category": "주행 보조"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/A3/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "실내"
      },
      {
        "title": "도어 엔트리 라이트",
        "image": "images/trim-features/아우디/A3/도어 엔트리 라이트.webp",
        "description": "앞좌석 도어를 열면 지면에 아우디 로고를 비춰 승하차 공간을 밝힙니다.",
        "condition": "A3 40 TFSI Premium·40 TFSI quattro Premium 적용 · 기본형 제외",
        "category": "편의"
      },
      {
        "title": "LED 헤드라이트",
        "image": "images/trim-features/아우디/A3/LED 헤드라이트.webp",
        "description": "밝은 LED 조명으로 전방 시야를 확보하고 라이트 시그니처로 개성을 표현합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "안전"
      },
      {
        "title": "다이내믹 턴 시그널 LED 테일라이트",
        "image": "images/trim-features/아우디/A3/다이내믹 턴 시그널 LED 테일라이트.webp",
        "description": "순차 점등되는 방향지시등으로 주행 방향을 명확히 알립니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "외장"
      }
    ]
  },
  "아우디|A5": {
    "sourceModel": "A5",
    "features": [
      {
        "title": "MMI 파노라믹 디스플레이",
        "image": "images/trim-features/아우디/A5/MMI 파노라믹 디스플레이.webp",
        "description": "운전자 계기판과 중앙 터치 화면이 이어진 디지털 공간에서 주행 정보와 인포테인먼트를 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "디스플레이"
      },
      {
        "title": "스마트 도어 패널",
        "image": "images/trim-features/아우디/A5/스마트 도어 패널.webp",
        "description": "도어에 모인 조작부에서 잠금·조명·시트 등 주요 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "편의"
      },
      {
        "title": "10.9인치 조수석 디스플레이",
        "image": "images/trim-features/아우디/A5/10.9인치 조수석 디스플레이.webp",
        "description": "동반석에서 차량 정보와 엔터테인먼트 콘텐츠를 별도 화면으로 이용합니다.",
        "condition": "국내 A5 추가 유료 옵션 · S5의 기본 장비와 구분",
        "category": "디스플레이"
      },
      {
        "title": "매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/A5/매트릭스 LED 헤드라이트.webp",
        "description": "전방 상황에 맞춰 빛을 조절해 밝은 시야 확보와 주행을 돕습니다.",
        "condition": "A5 40 TFSI S-line·45 TFSI quattro S-line 적용 · Advanced 제외",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/A5/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "A5 45 TFSI quattro S-line 적용 · 40 TFSI 모델은 LED 테일라이트",
        "category": "외장"
      },
      {
        "title": "스위처블 파노라믹 루프",
        "image": "images/trim-features/아우디/A5/스위처블 파노라믹 루프.webp",
        "description": "루프 유리의 투명도를 조절해 실내 개방감과 빛의 유입을 관리합니다.",
        "condition": "국내 A5 전 트림 카탈로그 기본 적용",
        "category": "편의"
      },
      {
        "title": "다이내믹 인터랙션 라이트",
        "image": "images/trim-features/아우디/A5/다이내믹 인터랙션 라이트.webp",
        "description": "방향지시등·비상등 등 운전 상황에 연동한 실내 조명으로 시각적 정보를 전달합니다.",
        "condition": "A5 S-line 적용 · 40 TFSI Advanced 제외",
        "category": "실내"
      },
      {
        "title": "뱅앤올룹슨 3D 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/A5/뱅앤올룹슨 3D 프리미엄 사운드 시스템.webp",
        "description": "전용 스피커와 입체 음향으로 음악과 콘텐츠의 몰입감을 높입니다.",
        "condition": "A5 S-line 적용 · Advanced는 아우디 사운드 시스템 · 출력·헤드레스트 스피커는 트림별 상이",
        "category": "오디오"
      }
    ]
  },
  "아우디|A6": {
    "sourceModel": "A6",
    "features": [
      {
        "title": "다이내믹 인터랙션 라이트",
        "image": "images/trim-features/아우디/A6/다이내믹 인터랙션 라이트.webp",
        "description": "방향지시등·비상등 등 운전 상황에 연동한 실내 조명으로 시각적 정보를 전달합니다.",
        "condition": "국내 A6 카탈로그 전 트림 적용",
        "category": "실내"
      },
      {
        "title": "MMI 파노라믹 디스플레이",
        "image": "images/trim-features/아우디/A6/MMI 파노라믹 디스플레이.webp",
        "description": "운전자 계기판과 중앙 터치 화면이 이어진 디지털 공간에서 주행 정보와 인포테인먼트를 조작합니다.",
        "condition": "MMI 파노라믹 화면 국내 기본 · 사진의 조수석 화면은 Comfort 제외 트림별 기본·선택 사양",
        "category": "디스플레이"
      },
      {
        "title": "뱅앤올룹슨 3D 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/A6/뱅앤올룹슨 3D 프리미엄 사운드 시스템.webp",
        "description": "전용 스피커와 입체 음향으로 음악과 콘텐츠의 몰입감을 높입니다.",
        "condition": "국내 A6 카탈로그 전 트림 적용 · 오디오 세부 구성은 트림별 상이",
        "category": "오디오"
      },
      {
        "title": "파크 어시스트 프로",
        "image": "images/trim-features/아우디/A6/파크 어시스트 프로.webp",
        "description": "다양한 주차 환경에서 조향·가속·제동을 보조하며 원격 주차 기능을 지원합니다.",
        "condition": "국내 A6 카탈로그 전 트림 적용",
        "category": "주차 보조"
      },
      {
        "title": "어댑티브 크루즈 어시스트 플러스",
        "image": "images/trim-features/아우디/A6/어댑티브 크루즈 어시스트 플러스.webp",
        "description": "차간 거리와 차로 중앙 유지를 보조하며 조건에 따라 차선 변경을 지원합니다.",
        "condition": "국내 A6 카탈로그 전 트림 적용",
        "category": "주행 보조"
      },
      {
        "title": "올 휠 스티어링",
        "image": "images/trim-features/아우디/A6/올 휠 스티어링.webp",
        "description": "주행 속도에 따라 뒷바퀴 조향을 조절해 저속 기동성과 고속 안정성을 높입니다.",
        "condition": "A6 45 TFSI quattro S-line·Black Edition·55 TFSI quattro S-line 적용",
        "category": "주행"
      },
      {
        "title": "디지털 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/A6/디지털 매트릭스 LED 헤드라이트.webp",
        "description": "정교한 LED 조명과 라이트 시그니처로 시야 확보와 개성 있는 연출을 돕습니다.",
        "condition": "A6 55 TFSI quattro S-line 적용 · 그 외 모델은 매트릭스 LED",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/A6/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "A6 45 TFSI quattro S-line Black Edition·55 TFSI quattro S-line 적용",
        "category": "외장"
      }
    ]
  },
  "아우디|Q3": {
    "sourceModel": "Q3",
    "features": [
      {
        "title": "MMI 파노라믹 디스플레이",
        "image": "images/trim-features/아우디/Q3/MMI 파노라믹 디스플레이.webp",
        "description": "운전자 계기판과 중앙 터치 화면이 이어진 디지털 공간에서 주행 정보와 인포테인먼트를 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "디스플레이"
      },
      {
        "title": "SONOS 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/Q3/SONOS 프리미엄 사운드 시스템.webp",
        "description": "12개 스피커와 가상 서라운드 음향으로 몰입감 있는 오디오를 제공합니다.",
        "condition": "국내 Q3 카탈로그 전 트림 적용",
        "category": "오디오"
      },
      {
        "title": "앰비언트 라이트 프로",
        "image": "images/trim-features/아우디/Q3/앰비언트 라이트 프로.webp",
        "description": "도어 패널을 통과하는 조명과 역동적인 시그니처로 실내 분위기를 연출합니다.",
        "condition": "Q3 S-line·S-line Black Edition 적용 · Advanced는 일반 멀티컬러 앰비언트 라이트",
        "category": "실내"
      },
      {
        "title": "스티어링 휠 컨트롤 유닛",
        "image": "images/trim-features/아우디/Q3/스티어링 휠 컨트롤 유닛.webp",
        "description": "스티어링 휠 주변의 조작부로 주행 관련 기능을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "편의"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/Q3/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주차 보조"
      },
      {
        "title": "어댑티브 크루즈 어시스트 플러스",
        "image": "images/trim-features/아우디/Q3/어댑티브 크루즈 어시스트 플러스.webp",
        "description": "차간 거리와 차로 중앙 유지를 보조하며 조건에 따라 차선 변경을 지원합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주행 보조"
      },
      {
        "title": "LED 헤드라이트 플러스",
        "image": "images/trim-features/아우디/Q3/LED 헤드라이트 플러스.webp",
        "description": "LED 조명으로 전방을 밝히며 선택 가능한 주간주행등 시그니처를 제공합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "안전"
      },
      {
        "title": "LED 테일라이트 프로",
        "image": "images/trim-features/아우디/Q3/LED 테일라이트 프로.webp",
        "description": "라이트 스트립과 다이내믹 방향지시등으로 후면의 개성을 강조합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "외장"
      }
    ]
  },
  "아우디|Q4 e-tron": {
    "sourceModel": "Q4 e",
    "features": [
      {
        "title": "폴딩 뒷좌석과 확장형 적재 공간",
        "image": "images/trim-features/아우디/Q4 e/폴딩 뒷좌석과 확장형 적재 공간.webp",
        "description": "뒷좌석을 접어 적재 공간을 넓히고 다양한 크기의 짐을 실을 수 있습니다.",
        "condition": "국내 Q4 SUV e-tron 기준 · Sportback과 적재 공간 구분",
        "category": "공간"
      },
      {
        "title": "매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/Q4 e/매트릭스 LED 헤드라이트.webp",
        "description": "전방 상황에 맞춰 빛을 조절해 밝은 시야 확보와 주행을 돕습니다.",
        "condition": "국내 Q4 45 e-tron Premium 적용 · 기본형 제외",
        "category": "안전"
      },
      {
        "title": "다이내믹 턴 시그널 LED 테일라이트",
        "image": "images/trim-features/아우디/Q4 e/다이내믹 턴 시그널 LED 테일라이트.webp",
        "description": "순차 점등되는 방향지시등으로 주행 방향을 명확히 알립니다.",
        "condition": "국내 Q4 45 e-tron Premium 적용 · 기본형 제외",
        "category": "외장"
      },
      {
        "title": "증강현실 헤드업 디스플레이",
        "image": "images/trim-features/아우디/Q4 e/증강현실 헤드업 디스플레이.webp",
        "description": "운전자 전방 시야에 주행·경로 정보를 표시해 도로에 집중하도록 돕습니다.",
        "condition": "국내 Q4 45 e-tron Premium 적용 · 기본형 제외",
        "category": "디스플레이"
      },
      {
        "title": "주행 및 주차 보조 시스템",
        "image": "images/trim-features/아우디/Q4 e/주행 및 주차 보조 시스템.webp",
        "description": "어댑티브 크루즈 어시스트와 사이드 어시스트 등으로 주행 부담을 줄입니다.",
        "condition": "국내 Q4 45 e-tron 적용 · 360° 카메라·자동 주차 기능으로 확대 해석하지 않음",
        "category": "주행 보조"
      },
      {
        "title": "MMI 내비게이션 플러스",
        "image": "images/trim-features/아우디/Q4 e/MMI 내비게이션 플러스.webp",
        "description": "터치 화면에서 내비게이션·미디어·차량 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "인포테인먼트"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/Q4 e/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "실내"
      }
    ]
  },
  "아우디|Q5": {
    "sourceModel": "Q5",
    "features": [
      {
        "title": "스마트 도어 패널",
        "image": "images/trim-features/아우디/Q5/스마트 도어 패널.webp",
        "description": "도어에 모인 조작부에서 잠금·조명·시트 등 주요 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "편의"
      },
      {
        "title": "MMI 파노라믹 디스플레이",
        "image": "images/trim-features/아우디/Q5/MMI 파노라믹 디스플레이.webp",
        "description": "운전자 계기판과 중앙 터치 화면이 이어진 디지털 공간에서 주행 정보와 인포테인먼트를 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "디스플레이"
      },
      {
        "title": "10.9인치 조수석 디스플레이",
        "image": "images/trim-features/아우디/Q5/10.9인치 조수석 디스플레이.webp",
        "description": "동반석에서 차량 정보와 엔터테인먼트 콘텐츠를 별도 화면으로 이용합니다.",
        "condition": "Q5 45 TFSI quattro 기본 / 기타 트림 추가 유료 옵션",
        "category": "디스플레이"
      },
      {
        "title": "다이내믹 인터랙션 라이트",
        "image": "images/trim-features/아우디/Q5/다이내믹 인터랙션 라이트.webp",
        "description": "방향지시등·비상등 등 운전 상황에 연동한 실내 조명으로 시각적 정보를 전달합니다.",
        "condition": "국내 Q5 S-line 적용 · Advanced 제외",
        "category": "실내"
      },
      {
        "title": "뱅앤올룹슨 3D 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/Q5/뱅앤올룹슨 3D 프리미엄 사운드 시스템.webp",
        "description": "전용 스피커와 입체 음향으로 음악과 콘텐츠의 몰입감을 높입니다.",
        "condition": "국내 Q5 S-line 적용 · Advanced 제외",
        "category": "오디오"
      },
      {
        "title": "매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/Q5/매트릭스 LED 헤드라이트.webp",
        "description": "전방 상황에 맞춰 빛을 조절해 밝은 시야 확보와 주행을 돕습니다.",
        "condition": "Q5 45 TFSI quattro S-line 기본 / 기타 Q5 S-line은 Light Package 선택 시 · Advanced 제외",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/Q5/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "Q5 45 TFSI quattro S-line 기본 / 기타 Q5 S-line은 Light Package 선택 시 · Advanced 제외",
        "category": "외장"
      }
    ]
  },
  "아우디|Q6 e-tron": {
    "sourceModel": "Q6 e",
    "features": [
      {
        "title": "MMI 파노라믹 디스플레이",
        "image": "images/trim-features/아우디/Q6 e/MMI 파노라믹 디스플레이.webp",
        "description": "운전자 계기판과 중앙 터치 화면이 이어진 디지털 공간에서 주행 정보와 인포테인먼트를 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "디스플레이"
      },
      {
        "title": "증강현실 헤드업 디스플레이",
        "image": "images/trim-features/아우디/Q6 e/증강현실 헤드업 디스플레이.webp",
        "description": "운전자 전방 시야에 주행·경로 정보를 표시해 도로에 집중하도록 돕습니다.",
        "condition": "Q6 e-tron quattro Premium / performance·performance Premium은 Tech Package Pro 적용 시",
        "category": "디스플레이"
      },
      {
        "title": "10.9인치 조수석 디스플레이",
        "image": "images/trim-features/아우디/Q6 e/10.9인치 조수석 디스플레이.webp",
        "description": "동반석에서 차량 정보와 엔터테인먼트 콘텐츠를 별도 화면으로 이용합니다.",
        "condition": "Q6 e-tron performance Premium·quattro Premium 적용 · performance 기본형과 구분",
        "category": "디스플레이"
      },
      {
        "title": "뱅앤올룹슨 3D 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/Q6 e/뱅앤올룹슨 3D 프리미엄 사운드 시스템.webp",
        "description": "전용 스피커와 입체 음향으로 음악과 콘텐츠의 몰입감을 높입니다.",
        "condition": "Q6 e-tron quattro Premium / performance·performance Premium은 Tech Package Pro 적용 시",
        "category": "오디오"
      },
      {
        "title": "어댑티브 크루즈 컨트롤",
        "image": "images/trim-features/아우디/Q6 e/어댑티브 크루즈 컨트롤.webp",
        "description": "설정한 속도와 앞차와의 간격에 맞춰 가속과 감속을 보조합니다.",
        "condition": "국내 Q6 e-tron 어댑티브 크루즈 컨트롤 · 차로 중앙 유지 기능으로 설명하지 않음",
        "category": "주행 보조"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/Q6 e/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주차 보조"
      },
      {
        "title": "매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/Q6 e/매트릭스 LED 헤드라이트.webp",
        "description": "전방 상황에 맞춰 빛을 조절해 밝은 시야 확보와 주행을 돕습니다.",
        "condition": "Q6 e-tron quattro Premium 기본 / performance·performance Premium은 Light Package 선택 시",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/Q6 e/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "Q6 e-tron quattro Premium 기본 / performance·performance Premium은 Light Package 선택 시",
        "category": "외장"
      }
    ]
  },
  "아우디|Q7": {
    "sourceModel": "Q7",
    "features": [
      {
        "title": "MMI 내비게이션 플러스",
        "image": "images/trim-features/아우디/Q7/MMI 내비게이션 플러스.webp",
        "description": "터치 화면에서 내비게이션·미디어·차량 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "인포테인먼트"
      },
      {
        "title": "프리미엄 에어 패키지와 4존 공조",
        "image": "images/trim-features/아우디/Q7/프리미엄 에어 패키지와 4존 공조.webp",
        "description": "공기 정화 기능으로 실내 쾌적함을 높이고 좌석 구역별 온도를 조절합니다.",
        "condition": "Q7 Premium의 4존 공조 구성 · 기본형의 공조 구성과 구분",
        "category": "공조"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/Q7/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "실내"
      },
      {
        "title": "아우디 프리센스 360°",
        "image": "images/trim-features/아우디/Q7/아우디 프리센스 360°.webp",
        "description": "주변의 충돌 위험을 감지하고 경고와 보호 기능으로 안전한 주행을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "안전"
      },
      {
        "title": "어댑티브 크루즈 어시스트",
        "image": "images/trim-features/아우디/Q7/어댑티브 크루즈 어시스트.webp",
        "description": "설정 속도와 앞차와의 간격을 유지하고 차선 유지를 보조해 운전 부담을 줄입니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주행 보조"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/Q7/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주차 보조"
      },
      {
        "title": "레이저 라이트 포함 HD 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/Q7/레이저 라이트 포함 HD 매트릭스 LED 헤드라이트.webp",
        "description": "레이저 라이트와 매트릭스 LED 기술로 전방 시야 확보를 돕습니다.",
        "condition": "국내 Q7 50 TDI quattro Premium·55 TFSI quattro Premium 적용",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/Q7/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "국내 Q7 50 TDI quattro Premium·55 TFSI quattro Premium 적용",
        "category": "외장"
      }
    ]
  },
  "아우디|Q8": {
    "sourceModel": "Q8",
    "features": [
      {
        "title": "MMI 내비게이션 플러스",
        "image": "images/trim-features/아우디/Q8/MMI 내비게이션 플러스.webp",
        "description": "터치 화면에서 내비게이션·미디어·차량 설정을 편리하게 조작합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "인포테인먼트"
      },
      {
        "title": "뱅앤올룹슨 3D 프리미엄 사운드 시스템",
        "image": "images/trim-features/아우디/Q8/뱅앤올룹슨 3D 프리미엄 사운드 시스템.webp",
        "description": "전용 스피커와 입체 음향으로 음악과 콘텐츠의 몰입감을 높입니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "오디오"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/Q8/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "실내"
      },
      {
        "title": "아우디 프리센스 360°",
        "image": "images/trim-features/아우디/Q8/아우디 프리센스 360°.webp",
        "description": "주변의 충돌 위험을 감지하고 경고와 보호 기능으로 안전한 주행을 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "안전"
      },
      {
        "title": "어댑티브 크루즈 어시스트",
        "image": "images/trim-features/아우디/Q8/어댑티브 크루즈 어시스트.webp",
        "description": "설정 속도와 앞차와의 간격을 유지하고 차선 유지를 보조해 운전 부담을 줄입니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주행 보조"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/Q8/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 카탈로그 소개 사양 · 세부 트림별 구성 차이 확인",
        "category": "주차 보조"
      },
      {
        "title": "레이저 라이트 포함 HD 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/Q8/레이저 라이트 포함 HD 매트릭스 LED 헤드라이트.webp",
        "description": "레이저 라이트와 매트릭스 LED 기술로 전방 시야 확보를 돕습니다.",
        "condition": "국내 Q8 50 TDI quattro Premium·55 TFSI quattro Premium 적용",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/Q8/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "국내 Q8 50 TDI quattro Premium·55 TFSI quattro Premium 적용",
        "category": "외장"
      }
    ]
  },
  "아우디|RS Q8": {
    "sourceModel": "RS Q8 performance",
    "features": [
      {
        "title": "세라믹 브레이크와 레드 캘리퍼",
        "image": "images/trim-features/아우디/RS Q8 performance/세라믹 브레이크와 레드 캘리퍼.webp",
        "description": "세라믹 브레이크가 높은 제동 성능을 제공하며 레드 캘리퍼로 스포티함을 강조합니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "주행"
      },
      {
        "title": "RS 스포츠 시트",
        "image": "images/trim-features/아우디/RS Q8 performance/RS 스포츠 시트.webp",
        "description": "스포티한 시트 형상과 가죽 마감으로 역동적인 주행 중 자세를 안정적으로 지지합니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "시트"
      },
      {
        "title": "아우디 버추얼 콕핏 플러스",
        "image": "images/trim-features/아우디/RS Q8 performance/아우디 버추얼 콕핏 플러스.webp",
        "description": "디지털 계기판에 주요 주행 정보와 내비게이션을 직관적으로 표시합니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "뱅앤올룹슨 3D 어드밴스드 사운드 시스템",
        "image": "images/trim-features/아우디/RS Q8 performance/뱅앤올룹슨 3D 어드밴스드 사운드 시스템.webp",
        "description": "고급 스피커 구성과 3D 서라운드 음향으로 풍부하고 세밀한 사운드를 제공합니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "오디오"
      },
      {
        "title": "어댑티브 크루즈 컨트롤",
        "image": "images/trim-features/아우디/RS Q8 performance/어댑티브 크루즈 컨트롤.webp",
        "description": "설정한 속도와 앞차와의 간격에 맞춰 가속과 감속을 보조합니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/RS Q8 performance/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "주차 보조"
      },
      {
        "title": "레이저 라이트 포함 HD 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/RS Q8 performance/레이저 라이트 포함 HD 매트릭스 LED 헤드라이트.webp",
        "description": "레이저 라이트와 매트릭스 LED 기술로 전방 시야 확보를 돕습니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/RS Q8 performance/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "국내 RS Q8 performance 카탈로그 적용 사양",
        "category": "외장"
      }
    ]
  },
  "아우디|SQ7": {
    "sourceModel": "SQ7",
    "features": [
      {
        "title": "뱅앤올룹슨 3D 어드밴스드 사운드 시스템",
        "image": "images/trim-features/아우디/SQ7/뱅앤올룹슨 3D 어드밴스드 사운드 시스템.webp",
        "description": "고급 스피커 구성과 3D 서라운드 음향으로 풍부하고 세밀한 사운드를 제공합니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "오디오"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/SQ7/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "실내"
      },
      {
        "title": "아우디 프리센스 360°",
        "image": "images/trim-features/아우디/SQ7/아우디 프리센스 360°.webp",
        "description": "주변의 충돌 위험을 감지하고 경고와 보호 기능으로 안전한 주행을 돕습니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "안전"
      },
      {
        "title": "어댑티브 크루즈 어시스트",
        "image": "images/trim-features/아우디/SQ7/어댑티브 크루즈 어시스트.webp",
        "description": "설정 속도와 앞차와의 간격을 유지하고 차선 유지를 보조해 운전 부담을 줄입니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "주행 보조"
      },
      {
        "title": "파크 어시스트 플러스",
        "image": "images/trim-features/아우디/SQ7/파크 어시스트 플러스.webp",
        "description": "주차 과정의 조향·가속·제동을 보조해 편리한 주차를 돕습니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "주차 보조"
      },
      {
        "title": "SQ7 블랙 패키지",
        "image": "images/trim-features/아우디/SQ7/SQ7 블랙 패키지.webp",
        "description": "윈도우 몰딩·루프레일 등에 적용된 어두운 마감으로 스포티한 인상을 강조합니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "외장"
      },
      {
        "title": "레이저 라이트 포함 HD 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/SQ7/레이저 라이트 포함 HD 매트릭스 LED 헤드라이트.webp",
        "description": "레이저 라이트와 매트릭스 LED 기술로 전방 시야 확보를 돕습니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "안전"
      },
      {
        "title": "디지털 OLED 테일라이트",
        "image": "images/trim-features/아우디/SQ7/디지털 OLED 테일라이트.webp",
        "description": "OLED 조명과 다이내믹 방향지시등으로 후면의 존재감과 신호 전달력을 높입니다.",
        "condition": "국내 SQ7 카탈로그 적용 사양",
        "category": "외장"
      }
    ]
  },
  "아우디|e-tron": {
    "sourceModel": "S e",
    "features": [
      {
        "title": "레이저 라이트 포함 매트릭스 LED 헤드라이트",
        "image": "images/trim-features/아우디/S e/레이저 라이트 포함 매트릭스 LED 헤드라이트.webp",
        "description": "매트릭스 LED와 레이저 라이트를 결합해 전방을 밝게 비춥니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "안전"
      },
      {
        "title": "스위처블 파노라믹 루프",
        "image": "images/trim-features/아우디/S e/스위처블 파노라믹 루프.webp",
        "description": "루프 유리의 투명도를 조절해 실내 개방감과 빛의 유입을 관리합니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "편의"
      },
      {
        "title": "아우디 버추얼 콕핏 플러스",
        "image": "images/trim-features/아우디/S e/아우디 버추얼 콕핏 플러스.webp",
        "description": "디지털 계기판에 주요 주행 정보와 내비게이션을 직관적으로 표시합니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "디스플레이"
      },
      {
        "title": "MMI 내비게이션 플러스",
        "image": "images/trim-features/아우디/S e/MMI 내비게이션 플러스.webp",
        "description": "터치 화면에서 내비게이션·미디어·차량 설정을 편리하게 조작합니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "인포테인먼트"
      },
      {
        "title": "앰비언트 라이트",
        "image": "images/trim-features/아우디/S e/앰비언트 라이트.webp",
        "description": "실내 조명의 색상과 밝기를 조절해 원하는 분위기를 연출합니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "실내"
      },
      {
        "title": "스포츠 시트 프로",
        "image": "images/trim-features/아우디/S e/스포츠 시트 프로.webp",
        "description": "몸을 안정적으로 지지하는 시트에 열선·통풍·마사지 기능을 더해 편안함을 높입니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "시트"
      },
      {
        "title": "일렉트릭 콰트로 사륜구동",
        "image": "images/trim-features/아우디/S e/일렉트릭 콰트로 사륜구동.webp",
        "description": "전기 모터의 동력을 네 바퀴에 배분해 역동적이고 안정적인 주행을 돕습니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "주행"
      },
      {
        "title": "주행 및 주차 보조 시스템",
        "image": "images/trim-features/아우디/S e/주행 및 주차 보조 시스템.webp",
        "description": "주변 상황을 감지하는 경고·보조 기능으로 안전하고 편리한 주행과 주차를 돕습니다.",
        "condition": "국내 S e-tron GT 카탈로그 적용 사양",
        "category": "주행 보조"
      }
    ]
  },
  "테슬라|모델3": {
    "sourceModel": "모델3",
    "features": [
      {
        "title": "대형 센터 터치스크린",
        "image": "images/trim-features/테슬라/모델3/대형 센터 터치스크린.webp",
        "description": "중앙 터치스크린에서 주요 차량 설정과 주행 정보를 확인하고, 실내 기능을 직관적으로 조작할 수 있습니다.",
        "condition": "현재 국내 Model 3 공통 기능",
        "category": ""
      },
      {
        "title": "8인치 후면 터치스크린",
        "image": "images/trim-features/테슬라/모델3/8인치 후면 터치스크린.webp",
        "description": "뒷좌석 탑승자가 8인치 터치스크린으로 실내 온도와 엔터테인먼트 기능을 조작할 수 있습니다.",
        "condition": "국내 Premium / Performance (기본형 제외)",
        "category": ""
      },
      {
        "title": "앞좌석 통풍시트",
        "image": "images/trim-features/테슬라/모델3/앞좌석 통풍시트.webp",
        "description": "앞좌석 통풍 기능을 휴대폰으로 미리 켜거나 실내 온도에 맞춰 자동으로 조절하도록 설정할 수 있습니다.",
        "condition": "국내 Model 3 Premium 기준 (기본형과 구분)",
        "category": ""
      },
      {
        "title": "듀얼 스마트폰 무선 충전",
        "image": "images/trim-features/테슬라/모델3/듀얼 스마트폰 무선 충전.webp",
        "description": "호환 스마트폰 두 대를 동시에 올려두고 케이블 없이 충전할 수 있습니다.",
        "condition": "국내 Model 3 Premium 기준 (기본형과 구분)",
        "category": ""
      },
      {
        "title": "엠비언트 라이트",
        "image": "images/trim-features/테슬라/모델3/엠비언트 라이트.webp",
        "description": "실내를 감싸는 엠비언트 라이트를 취향에 맞게 설정해 탑승 공간의 분위기를 바꿀 수 있습니다.",
        "condition": "국내 Model 3 Premium 기준 (기본형과 구분)",
        "category": ""
      },
      {
        "title": "어쿠스틱 글래스 및 글래스 루프",
        "image": "images/trim-features/테슬라/모델3/어쿠스틱 글래스 및 글래스 루프.webp",
        "description": "차음 유리가 실내로 들어오는 소음을 줄이고, 글래스 루프가 채광과 탁 트인 시야를 제공합니다.",
        "condition": "국내 Model 3 Premium 기준 (기본형과 구분)",
        "category": ""
      },
      {
        "title": "Tesla 앱 원격 실내 온도 제어",
        "image": "images/trim-features/테슬라/모델3/Tesla 앱 원격 실내 온도 제어.webp",
        "description": "Tesla 앱으로 탑승 전에 실내 온도를 미리 조절하고 차량 상태를 원격으로 확인할 수 있습니다.",
        "condition": "현재 국내 Model 3 공통 기능",
        "category": ""
      },
      {
        "title": "전방 충돌 경고 및 액티브 긴급 제동",
        "image": "images/trim-features/테슬라/모델3/전방 충돌 경고 및 액티브 긴급 제동.webp",
        "description": "전방 충돌 위험을 경고하고 필요한 상황에서 제동을 보조해 충돌 위험이나 피해를 줄이는 데 도움을 줍니다.",
        "condition": "현재 국내 Model 3 공통 기능",
        "category": ""
      }
    ]
  },
  "테슬라|모델Y": {
    "sourceModel": "모델Y",
    "features": [
      {
        "title": "전면 및 후면 터치스크린",
        "image": "images/trim-features/테슬라/모델Y/전면 및 후면 터치스크린.webp",
        "description": "앞좌석과 뒷좌석 탑승자가 터치스크린에서 실내 온도와 엔터테인먼트 설정을 편리하게 조작할 수 있습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "1열 열선 및 통풍시트",
        "image": "images/trim-features/테슬라/모델Y/1열 열선 및 통풍시트.webp",
        "description": "앞좌석의 열선과 통풍 기능으로 계절과 실내 온도에 맞춰 쾌적한 착석 환경을 조절할 수 있습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "전동 리클라이닝 및 폴딩 2열 시트",
        "image": "images/trim-features/테슬라/모델Y/전동 리클라이닝 및 폴딩 2열 시트.webp",
        "description": "2열 등받이의 각도를 조절하고 시트를 접어 승차 편의와 적재 공간을 필요에 맞게 활용할 수 있습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "핸즈프리 트렁크",
        "image": "images/trim-features/테슬라/모델Y/핸즈프리 트렁크.webp",
        "description": "호환 휴대폰 키를 소지하고 차량 뒤쪽에 접근하면 트렁크를 손으로 조작하지 않고 열 수 있습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "Tesla 앱 원격 실내 온도 및 충전 제어",
        "image": "images/trim-features/테슬라/모델Y/Tesla 앱 원격 실내 온도 및 충전 제어.webp",
        "description": "앱에서 탑승 전 실내 온도를 조절하고, 충전 일정과 충전 진행 상태를 확인하거나 충전을 시작·중지할 수 있습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "개선된 서스펜션 및 정숙한 실내",
        "image": "images/trim-features/테슬라/모델Y/개선된 서스펜션 및 정숙한 실내.webp",
        "description": "서스펜션과 휠·타이어의 조화를 통해 부드러운 승차감을 제공하고, 소음 저감 기술로 실내를 차분하게 유지하도록 돕습니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "간접 반사형 일체형 테일램프",
        "image": "images/trim-features/테슬라/모델Y/간접 반사형 일체형 테일램프.webp",
        "description": "차체 후면을 가로지르는 일체형 간접 반사 조명이 Model Y의 후면 디자인을 완성합니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      },
      {
        "title": "전방 충돌 경고 및 액티브 긴급 제동",
        "image": "images/trim-features/테슬라/모델Y/전방 충돌 경고 및 액티브 긴급 제동.webp",
        "description": "전방의 충돌 위험을 경고하고 필요한 상황에서 긴급 제동을 보조해 사고 위험이나 피해를 줄이는 데 도움을 줍니다.",
        "condition": "국내 Model Y Premium 5인승 (RWD / Long Range AWD)",
        "category": ""
      }
    ]
  },
  "테슬라|모델Y L": {
    "sourceModel": "모델Y L",
    "features": [
      {
        "title": "3열 6인승 및 2열 캡틴 시트",
        "image": "images/trim-features/테슬라/모델Y L/3열 6인승 및 2열 캡틴 시트.webp",
        "description": "독립형 2열 캡틴 시트를 포함한 3열 6인승 구성입니다. 2열에는 열선·통풍과 전동 암레스트가 적용되어 탑승 편의를 높입니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "3열 전동 리클라이닝 및 원터치 폴딩",
        "image": "images/trim-features/테슬라/모델Y L/3열 전동 리클라이닝 및 원터치 폴딩.webp",
        "description": "3열 등받이 각도를 전동으로 조절하고 시트를 원터치로 접어 탑승 공간과 적재 공간을 편리하게 바꿀 수 있습니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "8인치 2열 터치스크린",
        "image": "images/trim-features/테슬라/모델Y L/8인치 2열 터치스크린.webp",
        "description": "2열 터치스크린으로 실내 온도와 엔터테인먼트 기능을 편리하게 조작할 수 있습니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "19스피커 Tesla 오디오",
        "image": "images/trim-features/테슬라/모델Y L/19스피커 Tesla 오디오.webp",
        "description": "19개의 스피커로 구성된 Tesla 오디오 시스템이 몰입감 있는 음악 감상 환경을 제공합니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "어댑티브 서스펜션 및 전자식 댐핑",
        "image": "images/trim-features/테슬라/모델Y L/어댑티브 서스펜션 및 전자식 댐핑.webp",
        "description": "노면 상태에 맞춰 댐핑을 조절해 진동을 줄이고, 승차감과 접지력을 높이도록 돕습니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "3열 탑승자 보호 에어백 시스템",
        "image": "images/trim-features/테슬라/모델Y L/3열 탑승자 보호 에어백 시스템.webp",
        "description": "3열 전 좌석을 고려한 에어백 구성으로 탑승자 보호를 돕습니다. 2열에는 윈도·벨트라인 에어백이, 3열에는 측면 에어백이 적용됩니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      },
      {
        "title": "전방 충돌 경고 및 액티브 긴급 제동",
        "image": "images/trim-features/테슬라/모델Y L/전방 충돌 경고 및 액티브 긴급 제동.webp",
        "description": "충돌 위험을 감지해 경고하고 필요한 상황에서 제동을 보조하여 사고 위험이나 충격을 줄이는 데 도움을 줍니다.",
        "condition": "국내 Model Y L Premium 6인승 AWD",
        "category": ""
      }
    ]
  },
  "폭스바겐|ID.4": {
    "sourceModel": "ID.4",
    "features": [
      {
        "title": "12.9인치 디스커버 맥스 인포테인먼트 시스템",
        "image": "images/trim-features/폭스바겐/ID.4/12.9인치 디스커버 맥스 인포테인먼트 시스템.webp",
        "description": "12.9인치 터치스크린과 조명식 터치 슬라이더로 미디어와 주요 차량 기능을 직관적으로 조작할 수 있습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "IQ.라이트 LED 매트릭스 헤드램프",
        "image": "images/trim-features/폭스바겐/ID.4/IQ.라이트 LED 매트릭스 헤드램프.webp",
        "description": "LED 매트릭스 헤드램프와 다이내믹 라이트 어시스트가 주변 교통 상황에 맞춰 빛을 제어해 야간 시야 확보를 돕습니다.",
        "condition": "Pro 전용 (Pro Lite 제외)",
        "category": ""
      },
      {
        "title": "무선 앱커넥트",
        "image": "images/trim-features/폭스바겐/ID.4/무선 앱커넥트.webp",
        "description": "호환 스마트폰을 케이블 없이 연결해 Apple CarPlay 또는 Android Auto의 지원 기능을 차량 화면에서 사용할 수 있습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "트렁크 이지 오픈 앤 클로즈",
        "image": "images/trim-features/폭스바겐/ID.4/트렁크 이지 오픈 앤 클로즈.webp",
        "description": "스마트키를 소지한 상태에서 범퍼 아래로 발을 움직이는 동작을 이용해 전동 트렁크를 편리하게 열고 닫을 수 있습니다.",
        "condition": "Pro 전용 (Pro Lite 제외)",
        "category": ""
      },
      {
        "title": "배터리 충전 최적화 모드",
        "image": "images/trim-features/폭스바겐/ID.4/배터리 충전 최적화 모드.webp",
        "description": "최적화 메뉴에서 배터리 히터를 활성화해 급속 충전에 적합한 배터리 온도를 준비하도록 돕습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "트래블 어시스트",
        "image": "images/trim-features/폭스바겐/ID.4/트래블 어시스트.webp",
        "description": "고속도로와 잘 정비된 도로에서 앞차와의 거리를 고려해 설정한 속도와 차로를 유지하도록 보조합니다.",
        "condition": "Pro 전용 (Pro Lite 제외)",
        "category": ""
      },
      {
        "title": "프론트 어시스트 및 긴급제동 시스템",
        "image": "images/trim-features/폭스바겐/ID.4/프론트 어시스트 및 긴급제동 시스템.webp",
        "description": "전방의 차량과 보행자 등을 감지해 충돌 위험을 경고하고, 필요한 상황에서 제동을 보조해 충돌 위험이나 피해를 줄이도록 돕습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "이머전시 어시스트",
        "image": "images/trim-features/폭스바겐/ID.4/이머전시 어시스트.webp",
        "description": "운전자가 주행 상황에 반응하지 않으면 경고를 보내고, 반응이 계속 없을 경우 차량의 감속과 정지를 보조합니다.",
        "condition": "Pro 전용 (Pro Lite 제외)",
        "category": ""
      }
    ]
  },
  "폭스바겐|ID.5": {
    "sourceModel": "ID.5",
    "features": [
      {
        "title": "12.9인치 디스커버 맥스 인포테인먼트 시스템",
        "image": "images/trim-features/폭스바겐/ID.5/12.9인치 디스커버 맥스 인포테인먼트 시스템.webp",
        "description": "12.9인치 터치스크린과 조명식 터치 슬라이더로 미디어와 주요 차량 기능을 직관적으로 조작할 수 있습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "파노라마 글래스 루프",
        "image": "images/trim-features/폭스바겐/ID.5/파노라마 글래스 루프.webp",
        "description": "넓은 글래스 루프가 실내에 개방감을 더하며, 전동 차양막으로 햇빛 유입을 조절할 수 있습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "무선 앱커넥트",
        "image": "images/trim-features/폭스바겐/ID.5/무선 앱커넥트.webp",
        "description": "호환 스마트폰을 케이블 없이 연결해 Apple CarPlay 또는 Android Auto의 지원 기능을 차량 화면에서 사용할 수 있습니다.",
        "condition": "Pro 전용 (Pro Lite 제외)",
        "category": ""
      },
      {
        "title": "트렁크 이지 오픈 앤 클로즈",
        "image": "images/trim-features/폭스바겐/ID.5/트렁크 이지 오픈 앤 클로즈.webp",
        "description": "스마트키를 소지한 상태에서 범퍼 아래로 발을 움직이는 동작을 이용해 전동 트렁크를 편리하게 열고 닫을 수 있습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "배터리 충전 최적화 모드",
        "image": "images/trim-features/폭스바겐/ID.5/배터리 충전 최적화 모드.webp",
        "description": "최적화 메뉴에서 배터리 히터를 활성화해 급속 충전에 적합한 배터리 온도를 준비하도록 돕습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "트래블 어시스트",
        "image": "images/trim-features/폭스바겐/ID.5/트래블 어시스트.webp",
        "description": "고속도로와 잘 정비된 도로에서 앞차와의 거리를 고려해 설정한 속도와 차로를 유지하도록 보조합니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "프론트 어시스트 및 긴급제동 시스템",
        "image": "images/trim-features/폭스바겐/ID.5/프론트 어시스트 및 긴급제동 시스템.webp",
        "description": "전방의 차량과 보행자 등을 감지해 충돌 위험을 경고하고, 필요한 상황에서 제동을 보조해 충돌 위험이나 피해를 줄이도록 돕습니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      },
      {
        "title": "이머전시 어시스트",
        "image": "images/trim-features/폭스바겐/ID.5/이머전시 어시스트.webp",
        "description": "운전자가 주행 상황에 반응하지 않으면 경고를 보내고, 반응이 계속 없을 경우 차량의 감속과 정지를 보조합니다.",
        "condition": "Pro Lite / Pro",
        "category": ""
      }
    ]
  }
};


/* =========================================================================
 * 벤틀리 · 롤스로이스 · 포르쉐 공식 사이트 근거 국내형 모델 안내
 * 2026-11-02 확인 | 자세한 연식별 옵션은 국내 판매 계약서로 최종 확정
 * 외부 제조사/공식 프레스 이미지 링크는 각 이미지 소유자의 정책에 따릅니다.
 * 이미지 링크 차단 시 사이트의 기존 등록 차량 사진으로 자동 대체됩니다.
 * 국내 정식 판매 여부와 공개된 국내 제원은 다르므로, 개별 출시전 사양 유의
 * 각 항목의 sourceUrl은 적용 근거이며, 자체 DB/대리점 등록 내용을 우선합니다.
 * ========================================================================= */
Object.assign(window.AutoGenieTrimReference, {
  "포르쉐|마칸|마칸 GTS 일렉트릭": {
    "featureTitle": "마칸 GTS 퍼포먼스 콕핏",
    "featureCaption": "포르쉐 공식 뉴스룸의 마칸 GTS 실내 이미지입니다. 인테리어 패키지 및 디스플레이 구성은 선택 사양에 따라 달라질 수 있습니다.",
    "summary": "마칸 GTS 일렉트릭은 전용 스포츠 에어 서스펜션과 민첩한 핸들링을 강조한 고성능 순수 전기 SUV입니다. 포르쉐코리아의 국내 안내 수치를 반영했습니다.",
    "highlights": [
      "런치 컨트롤 오버부스트 최고 571 PS (포르쉐코리아 표기)",
      "정지 상태 100km/h 도달 3.8초 (런치 컨트롤)",
      "스포츠 에어 서스펜션·PASM·10mm 낮아진 차체",
      "포르쉐 토크 벡터링 플러스(PTV Plus)",
      "GTS 인테리어 패키지 및 리어 액슬 스티어링은 선택 사양"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/macan/macan-electric-models/macan-gts-electric/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/마칸/마칸 GTS 퍼포먼스 콕핏.webp"
  },
  "포르쉐|카이엔|카이엔": {
    "featureTitle": "포르쉐 드라이버 익스피리언스",
    "featureCaption": "포르쉐 공식 뉴스룸의 카이엔 디지털 계기판 및 드라이버 익스피리언스 이미지입니다. 국내 연식별 사양 차이가 있을 수 있습니다.",
    "summary": "국내 안내 기준 2027 카이엔 가솔린 모델입니다. 디지털 운전자 중심 콕핏과 SUV 공간 활용성을 갖추고 있습니다.",
    "highlights": [
      "가솔린 사륜구동(AWD)",
      "국내 공식 최고출력 360 PS",
      "정지 상태 100km/h 도달 6.0초",
      "최고속도 248km/h(공식 표기)",
      "첨단 디스플레이 및 개별 선택 옵션은 국내 차량 구성별 확인"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/cayenne/cayenne-models/cayenne/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/카이엔/포르쉐 드라이버 익스피리언스.webp"
  },
  "포르쉐|카이엔 EV|카이엔 일렉트릭": {
    "featureTitle": "카이엔 일렉트릭 플로우 디스플레이",
    "featureCaption": "포르쉐 공식 카이엔 일렉트릭 플로우 디스플레이의 기능 이미지입니다. 선택 사양과 국내 판매 구성은 별도 확인이 필요합니다.",
    "summary": "카이엔 일렉트릭은 포르쉐코리아에서 안내하는 순수 전기 사륜구동 SUV로, 퍼포먼스와 일상적 실용성을 결합한 기본 전기 SUV이 특징입니다.",
    "highlights": [
      "국내 공식 오버부스트 최고 442 PS (런치 컨트롤)",
      "정지 상태 100km/h 도달 4.8초 (런치 컨트롤)",
      "순수 전기 AWD·충전 편의 기능",
      "포르쉐 플로우 디스플레이 기반 디지털 콕핏",
      "무선 충전·인터랙티브 무드 조명 등은 선택 사양/출시 시점 별도 확인"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/cayenne/configure/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/카이엔 EV/플로우 디스플레이.webp"
  },
  "포르쉐|카이엔 EV|카이엔 S 일렉트릭": {
    "featureTitle": "카이엔 일렉트릭 플로우 디스플레이",
    "featureCaption": "포르쉐 공식 카이엔 일렉트릭 플로우 디스플레이의 기능 이미지입니다. 선택 사양과 국내 판매 구성은 별도 확인이 필요합니다.",
    "summary": "카이엔 S 일렉트릭은 포르쉐코리아에서 안내하는 순수 전기 사륜구동 SUV로, 기본 모델보다 높은 출력과 민첩한 가속 성능이 특징입니다.",
    "highlights": [
      "국내 공식 오버부스트 최고 666 PS (런치 컨트롤)",
      "정지 상태 100km/h 도달 3.8초 (런치 컨트롤)",
      "순수 전기 AWD·충전 편의 기능",
      "포르쉐 플로우 디스플레이 기반 디지털 콕핏",
      "무선 충전·인터랙티브 무드 조명 등은 선택 사양/출시 시점 별도 확인"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/cayenne/configure/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/카이엔 EV/플로우 디스플레이.webp"
  },
  "포르쉐|카이엔 EV|카이엔 터보 일렉트릭": {
    "featureTitle": "카이엔 일렉트릭 플로우 디스플레이",
    "featureCaption": "포르쉐 공식 카이엔 일렉트릭 플로우 디스플레이의 기능 이미지입니다. 선택 사양과 국내 판매 구성은 별도 확인이 필요합니다.",
    "summary": "카이엔 터보 일렉트릭은 포르쉐코리아에서 안내하는 순수 전기 사륜구동 SUV로, 고성능 전기 SUV 라인업의 터보 모델이 특징입니다.",
    "highlights": [
      "국내 공식 오버부스트 최고 1,156 PS (런치 컨트롤)",
      "정지 상태 100km/h 도달 2.5초 (런치 컨트롤)",
      "순수 전기 AWD·충전 편의 기능",
      "포르쉐 플로우 디스플레이 기반 디지털 콕핏",
      "무선 충전·인터랙티브 무드 조명 등은 선택 사양/출시 시점 별도 확인"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/cayenne/configure/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/카이엔 EV/플로우 디스플레이.webp"
  },
  "포르쉐|타이칸|타이칸": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. 기본형 Taycan의 전기 주행과 포르쉐 커브드 디스플레이을(를) 중심으로 안내합니다.",
    "highlights": [
      "후륜구동 순수 전기 세단",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|타이칸|타이칸 4": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸 4은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. Taycan 4의 AWD 전기 구동을(를) 중심으로 안내합니다.",
    "highlights": [
      "사륜구동 순수 전기 세단",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|타이칸|타이칸 4S": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸 4S은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. Taycan 4S의 추가 주행 성능을(를) 중심으로 안내합니다.",
    "highlights": [
      "사륜구동 고성능 전기 세단",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|타이칸|타이칸 터보": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸 터보은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. 오버부스트 최고 884 PS · 0–100km/h 2.7초을(를) 중심으로 안내합니다.",
    "highlights": [
      "포르쉐코리아 공식 표기: 오버부스트 최고 884 PS · 0–100km/h 2.7초",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|타이칸|타이칸 터보 S": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸 터보 S은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. 오버부스트 최고 952 PS · 0–100km/h 2.4초을(를) 중심으로 안내합니다.",
    "highlights": [
      "포르쉐코리아 공식 표기: 오버부스트 최고 952 PS · 0–100km/h 2.4초",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|타이칸|타이칸 터보 GT": {
    "featureTitle": "타이칸 디지털 운전자 콕핏",
    "featureCaption": "포르쉐 공식 이미지입니다. 동일 시리즈의 안내용 이미지이며 연식·선택 사양에 따라 다를 수 있습니다.",
    "summary": "타이칸 터보 GT은 포르쉐코리아 국내 모델 라인업에 등록된 전기 스포츠 세단입니다. 오버부스트 최고 1,034 PS · 0–100km/h 2.3초을(를) 중심으로 안내합니다.",
    "highlights": [
      "포르쉐코리아 공식 표기: 오버부스트 최고 1,034 PS · 0–100km/h 2.3초",
      "디지털 커브드 디스플레이 및 포르쉐 PCM",
      "고성능 800V 전기 시스템·급속 충전",
      "배터리·휠·시트 및 장비는 실제 선택 모델별 확인"
    ],
    "sourceUrl": "https://models.porsche.com/ko-KR/model-start/taycan",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/타이칸/타이칸 디지털 운전자 콕핏.webp"
  },
  "포르쉐|파나메라|파나메라 4": {
    "featureTitle": "파나메라 4 디지털 콕핏",
    "featureCaption": "포르쉐 공식 파나메라 4 실내 대표 사진입니다.",
    "summary": "파나메라 4는 럭셔리 스포츠 세단의 정숙성과 주행 성능을 결합한 국내 판매 모델입니다.",
    "highlights": [
      "2027 포르쉐코리아 기준 가솔린 사륜구동",
      "국내 공식 최고출력 360 PS",
      "정지 상태 100km/h 도달 5.0초",
      "최고속도 270km/h",
      "액티브 라이드 등 고급 주행 옵션은 사양별 별도 확인"
    ],
    "sourceUrl": "https://www.porsche.com/korea/ko/models/panamera/panamera-models/panamera-4/",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": false,
    "featureImage": "images/trim-features/포르쉐/파나메라/파나메라 4 디지털 콕핏.webp"
  },
  "벤틀리|벤테이가|4.0 V8": {
    "featureTitle": "벤테이가 스피드 드라이버 콕핏",
    "featureCaption": "벤틀리 공식 벤테이가 스피드 실내 이미지입니다. 선택 사양은 계약 시 확인해야 합니다.",
    "summary": "현재 사이트의 4.0 V8 / SPEED 표기를 유지하면서 벤틀리 한국 공식 모델 안내의 벤테이가 스피드 특징을 정리했습니다. 일반 V8(550 PS)과 스피드(650 PS)의 수치는 구분됩니다.",
    "highlights": [
      "벤테이가 스피드: 4.0L V8 트윈터보 · 650 PS · 850 Nm",
      "벤테이가 일반 V8: 550 PS · 770 Nm (스피드와 구분)",
      "V8의 벤틀리 다이내믹 라이드와 4륜 스티어링",
      "3D 서라운드 뷰·주차 보조 및 투어링 스펙은 국내 적용 확인",
      "스피드 전용 인테리어 마감·휠은 실제 차량 구성별 확인"
    ],
    "sourceUrl": "https://www.bentleymotors.com/kr/ko/models/bentayga.html",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": true,
    "featureImage": "images/trim-features/벤틀리/벤테이가/벤테이가 스피드 드라이버 콕핏.webp"
  },
  "벤틀리|컨티넨탈 GT|4.0 PHEV": {
    "featureTitle": "컨티넨탈 GT 실내 마감과 디스플레이",
    "featureCaption": "벤틀리 공식 컨티넨탈 GT 아주르 실내 이미지입니다. 실제 선택 등급과 다를 수 있습니다.",
    "summary": "4세대 컨티넨탈 GT는 V8 플러그인 하이브리드 기반의 럭셔리 그랜드 투어러입니다. 홈페이지의 Core/Speed/Mulliner/Azure 등급은 국내 딜러의 실제 판매 구성을 확인해야 합니다.",
    "highlights": [
      "4.0L V8 플러그인 하이브리드(PHEV) 계열",
      "스피드: 울트라 퍼포먼스 하이브리드 최고 782 PS / 1,000 Nm (스피드 기준)",
      "애플 카플레이·안드로이드 오토·커넥티드 인포테인먼트",
      "도심 주행 보조용 시티 스펙(시장별 기능 상이)",
      "벤틀리 로테이팅 디스플레이·투어링 스펙은 등급/옵션별 확인"
    ],
    "sourceUrl": "https://www.bentleymotors.com/kr/ko/models/continental-gt.html",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": true,
    "featureImage": "images/trim-features/벤틀리/컨티넨탈 GT/컨티넨탈 GT 실내 마감과 디스플레이.webp"
  },
  "벤틀리|플라잉스퍼|4.0 V8": {
    "featureTitle": "플라잉스퍼 뒷좌석 터치스크린 리모트",
    "featureCaption": "벤틀리 공식 플라잉스퍼 아주르의 뒷좌석 터치스크린 리모트 이미지입니다. 4.0 V8 국내 주문 차량의 세부 적용 사양은 별도 확인이 필요합니다.",
    "summary": "현행 플라잉스퍼는 V8 하이브리드 파워트레인을 사용하는 4도어 럭셔리 세단입니다. 웹사이트에 남아 있는 4.0 V8 표기는 현행 국내 구동 방식과 정확히 대조해야 합니다.",
    "highlights": [
      "4.0L V8 기반 하이브리드 파워트레인",
      "리어 터치스크린 리모트(TSR): 공조·오디오·좌석 기능 제어",
      "PM2.5 필터 기반 업그레이드 공조 시스템",
      "무선 Apple CarPlay 및 Android Auto 지원(서비스·시장별 확인)",
      "웰니스 시트·로테이팅 디스플레이 등은 옵션/등급별 확인"
    ],
    "sourceUrl": "https://www.bentleymotors.com/kr/ko/models/flying-spur.html",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": true,
    "featureImage": "images/trim-features/벤틀리/플라잉스퍼/뒷좌석 터치스크린 리모트.webp"
  },
  "롤스로이스|스펙터|스펙터": {
    "featureTitle": "스펙터 일루미네이티드 페시아",
    "featureCaption": "롤스로이스 공식 이미지로 확인되는 스펙터 일루미네이티드 페시아(비스포크 구성 예시)입니다.",
    "summary": "스펙터는 롤스로이스 최초의 순수 전기 슈퍼 쿠페로, 정숙한 주행과 맞춤 제작 실내를 제공하는 모델입니다. 현재 한국에서 블랙 배지 스펙터도 공식 출시된 상태입니다.",
    "highlights": [
      "순수 전기 럭셔리 쿠페",
      "스타라이트 도어·일루미네이티드 페시아 등 비스포크 선택 가능",
      "롤스로이스 플래너(실내 조명·콕핏 통합 시스템) 및 고급 마감",
      "블랙 배지 스펙터(국내 출시): 659 PS · 0–100km/h 4.3초 (일반형과 구분)",
      "2026 신형 스펙터 시리즈 II 사양은 국내 실제 판매 시점·트림별 확인"
    ],
    "sourceUrl": "https://www.rolls-roycemotorcars.com/ko_KR/showroom/spectre-in-detail.html",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": true,
    "featureImage": "images/trim-features/롤스로이스/스펙터/스펙터 일루미네이티드 페시아.webp"
  },
  "롤스로이스|팬텀|6.75 V12": {
    "featureTitle": "팬텀 비스포크 대시보드와 더 갤러리",
    "featureCaption": "롤스로이스 공식 프레스 이미지(비스포크 차량 예시)입니다. 세부 마감은 계약별로 다릅니다.",
    "summary": "팬텀 시리즈 II는 장인정신과 뒷좌석 승차감, 완성도 높은 비스포크 실내가 특징인 플래그십 세단입니다. 국내 판매 구성에 따라 부품과 옵션은 다르게 적용됩니다.",
    "highlights": [
      "6.75L V12 기반 팬텀 시리즈 II (연식별 세부 제원 확인)",
      "대시보드 전체를 가로지르는 비스포크 더 갤러리(The Gallery)",
      "고요한 실내 공간과 롤스로이스 매직 카펫 라이드",
      "스타라이트 헤드라이너·비스포크 가죽·목재 마감 선택 가능",
      "22인치 폴리시드 디스크 휠 등 외장 사양은 구성별 확인"
    ],
    "sourceUrl": "https://www.rolls-roycemotorcars.com/ko_KR/showroom/phantom-in-detail.html",
    "sourceVerified": "한국 공식 모델 안내 페이지와 국내 판매 자료 대조",
    "featureStatus": "reference",
    "referenceOnly": true,
    "featureImage": "images/trim-features/롤스로이스/팬텀/팬텀 비스포크 대시보드와 더 갤러리.webp"
  }
});
