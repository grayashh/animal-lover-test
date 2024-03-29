const qnaList = [
  {
    q: '1. 좋아하는 동물은?',
    a: [
      { answer: 'a. 동물은 별로....', score: 2 },
      { answer: 'b. 고양이나 강아지 정도..?', score: 4 },
      { answer: 'c. 모든 동물을 좋아한다', score: 6 }
    ]
  },
  {
    q: '2. 지나가다 유기묘나 유기견을 봤다',
    a: [
      { answer: 'a. 사료나 간식을 구해다 준다', score: 6 },
      { answer: 'b. 멈춰서 대화를 시도한다', score: 4 },
      { answer: 'c. 보호소나 sns를 활용해 적극적으로 구조한다', score: 7 },
      { answer: 'd. 불쌍하다고 생각한다', score: 2 },
      { answer: 'e. 그냥 지나친다', score: 1 }
    ]
  },
  {
    q: '3. 반려동물이 나에게 다가와 관심을 요구한다',
    a: [
      { answer: 'a. 한번 눈길을 준다', score: 4 },
      { answer: 'b. 하던 일을 마저 계속한다', score: 2 },
      { answer: 'c. 반려동물에게 말을 건넨다', score: 5 },
      { answer: 'd. 하던 일을 모두 멈추고 반려동물과 놀아준다 ', score: 7 },
      { answer: 'e. 반려동물을 쓰다듬어 준다 ', score: 6 }
    ]
  },
  {
    q: '4. 다큐프로그램에서 토끼가 먹이를 찾지 못하고 굶어죽었다',
    a: [
      { answer: 'a. 안쓰러운 표정을 짓는다', score: 4 },
      { answer: 'b. 감정이 이입돼 불쌍해서 운다', score: 6 },
      { answer: 'c. 야생이니 어쩔 수 없다고 생각한다', score: 2 },
      { answer: 'd. 그냥 아무 생각도 안들고 평온하다', score: 1 }
    ]
  },
  {
    q: '5. 반려동물을 키운다는 것은 어떤 의미?',
    a: [
      { answer: 'a. 내 가족이 된다는 것', score: 6 },
      { answer: 'b. 그냥 귀여워서', score: 4 },
      { answer: 'c. 내 행복과 외로움을 위한', score: 2 },
    ]
  },
  {
    q: '6. 만약 반려동물을 입양한다면?',
    a: [
      { answer: 'a. 유기견, 유기묘 보호소에 있는 아이들을 데려온다', score: 6 },
      { answer: 'b. 가정분양을 생각해본다', score: 4 },
      { answer: 'c. 그냥 샵에서 맘에드는 애로', score: 2 }
    ]
  },
  {
    q: '7. SNS에 귀여운 동물사진이 뜬다면 당신의 반응은?',
    a: [
      { answer: 'a. 친구 태그해서 공유하고 댓글달기', score: 6 },
      { answer: 'b. 그냥 넘어간다', score: 2 },
      { answer: 'c. 좋아요를 누른다', score: 4 }
    ]
  },
  {
    q: '8. 반려동물을 키우는 친구 집에 놀러갔다',
    a: [
      { answer: 'a. 반려동물이 보일 때마다 쓰다듬으며 놀아준다', score: 6 },
      { answer: 'b. 친구는 모르겠고,, 반려동물과 하루종일 논다', score: 7 },
      { answer: 'c. 이름이 뭐였는지 물으며 친해지려 한다', score: 5 },
      { answer: 'd. 반려동물이 보일 때마다 인사해준다 ', score: 4 },
      { answer: 'e. 동물은 너무 무서워 ㅠ 피한다', score: 1 },
    ]
  },
  {
    q: '9. 반려동물이 가까이 다가와서 애처로운 눈빛으로 간식을 원한다',
    a: [
      { answer: 'a. 너무 귀여워! 간식을 대령한다', score: 7 },
      { answer: 'b. 줄까? 말까,,,', score: 4 },
      { answer: 'c. 뭘 원하는거지?', score: 1 },
    ]
  },
  {
    q: '10. 길거리에서 반려동물 실종 포스터를 발견했다',
    a: [
      { answer: 'a. 포스터 좀 그만 붙이지..', score: 1 },
      { answer: 'b. 기억해두었다가 주변을 주시한다', score: 4 },
      { answer: 'c. 주변을 샅샅이 뒤지고 되는대로 공유한다', score: 6 },
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 30,
    mLeft: '10%',
    name: '동린이',
    desc: '동물에 대한 감정과 태도가 어린이보다 낮아요, 동물을 이해하고 헤아려보도록 노력해요 !'
  },
  {
    from: 31,
    to: 40,
    mLeft: '25%',
    name: '초보 동물러버',
    desc: '이제 막 동물을 알기 시작한 단계!, 싫어하지는 않지만 동물을 더 사랑스럽게 바라보아요'
  },
  {
    from: 41,
    to: 50,
    mLeft: '40%',
    name: '발전하는 동물러버',
    desc: '동물을 좋아하는 평범한 일반인 !, 그래도 아직까진 동물보단 내가 먼저 ㅎㅎ'
  },
  {
    from: 51,
    to: 60,
    mLeft: '55%',
    name: '동물이 좋은 동물러버',
    desc: '동물을 좋아하는 티를 팍팍내는 동물러버, 동물을 좋아한다고 평소에 말하며 강아지나 고양이에 대해 큰 거부감이 없는 초보 동물애호가'
  },
  {
    from: 61,
    to: 70,
    mLeft: '70%',
    name: '동물을 사랑하는 동물러버',
    desc: '동물을 사랑하는 티가 팍팍 ! 이미 반려동물을 키우고 있을지도...? 동물 입장에서 생각할 줄 아는 21세기 동물애호가'
  },
  {
    from: 71,
    to: 80,
    mLeft: '85%',
    name: '진정한 동물애호가',
    desc: '혹시.. 동물이세요? 동물 > 인간에 접근한 동물계의 나이팅게일'
  
}
]