var textNumber = 1;

lineMaximum = 72;

showingText();

var score = 0;

// 소리 재생을 위한 함수 등
// const sfxAudio1 = new Audio('audio.wav');
// sfxAudio1.volume = 0.3;
// sfxAudio1.play();


// BGM
const bgm_sad_end = new Audio('audio/bgm_sadend.wav');

// 게임 전체 SFX
const game_click = new Audio('audio/game_click.wav');
const game_neg = new Audio('audio/game_negative.wav');
const game_pos = new Audio('audio/game_positive.wav');

// 닛몰캐쉬 SFX
const nmc_change_eagle = new Audio('audio/nmc_change+eagle.mp3');
nmc_change_eagle.currentTime = 71;
const nmc_heartbeat = new Audio('audio/nmc_heartbeat.wav');



function showingText(){     // case에 따른 대사를 보여줌
    switch(textNumber) {
        case 1:
            setChoice("도와준다", "무시하고 지나간다", "폐지를 발로 찬다", "", "");
            choiceOn();
            setName("나");
            setText("소개팅 가게 앞을 지나가는데 할머니가 폐지를 줍고 있다. 어떻게 할까?");
            setCharacter("grandma_paper.png");
            setBackground("bg_nmc_paper.jpg");
            break;
        case 2:
            scorePMBoxOn();
            scorePM(10);
            choiceOff();
            setName(" ");
            setText("할머니가 폐지 줍는 걸 도왔다.");
            setCharacter("");
            setBackground("bg_nmc_paper.jpg");
            textNumber += 2;
            break;
        case 3:
            scorePMBoxOn();
            scorePM(-10);
            choiceOff();
            setName(" ");
            setText("할머니가 폐지 줍는 걸 무시하고 지나쳤다.");
            setCharacter("");
            setBackground("bg_nmc_paper.jpg");
            textNumber += 1;
            break;
        case 4:
            scorePMBoxOn();
            scorePM(-20);
            choiceOff();
            setName(" ");
            setText("할머니가 줍는 폐지를 발로 찼다.");
            setCharacter("papers.png");
            setBackground("bg_nmc_paper.jpg");
            textNumber += 0;
            break;
        case 5:
            scorePMBoxOff();
            setName(" ");
            setText("(소개팅 장소에 도착했다. 안으로 들어가자.)");
            setCharacter("");
            setBackground("bg_nmc_beforecafe.jpg");
            break;
        case 6:
            setName(" ");
            setText("(두리번 두리번... 주위를 둘러본다.)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 7:
            setName(" ");
            setText("(엇! 저기, 휴대폰 속 사진과 같은 남자를 찾았다!)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 8:
            setChoice("누구세요...?", "너냐, 내 남자친구가?", "혹시 소개팅... 나오셨어요...?", "", "");
            choiceOn();
            setName(" ");
            setText("어? 당신은...");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 9:
            scorePMBoxOn();
            scorePM(-20);
            choiceOff();
            setName("닛몰캐쉬");
            setText("네? 전... 『 닛  몰  캐  쉬 』입니다만⸻?");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 2;
            break;
        case 10:
            scorePMBoxOn();
            scorePM(+20);
            choiceOff();
            setName("닛몰캐쉬");
            setText("뭐지? 이 이상한 기분... 박력 넘쳐...");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 1;
            break;
        case 11:
            scorePMBoxOn();
            scorePM(+10);
            choiceOff();
            setName("닛몰캐쉬");
            setText("네. 혹시 김여주 씨이세요?");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 0;
            break;
        case 12:
            scorePMBoxOff();
            setName("나");
            setText("뭐 드시고 싶으세요, 닛몰캐쉬님?");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 13:
            setName("닛몰캐쉬");
            setText("저는 토마토 스파게티로 할게요. 김여주씨는 뭐 드실래요?");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 14:
            choiceOn();
            setChoice("추천해주시겠어요?", "닛몰캐쉬님 거 뺏어먹을게요", "로제파스타랑김치목살필라프랑청포도에이드랑고르곤졸라피자먹고싶어요", "", "");
            setName("나");
            setText("그럼 저는...");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 15:
            scorePM(10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐지 이런 순종적인 여자? 맘에 들어...)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 2;
            break;
        case 16:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐야. 간접키스...를 하고... 싶단 건가...? 나와 뭘 하고 싶단 거야!");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 1;
            break;
        case 17:
            scorePM(20);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(하, 이런 잘 먹는 여자. 귀엽긴 ㅋ)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 0;
            break;
        case 18:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("그러면 그렇게 합시다");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 19:
            scorePMBoxOff();
            setName("");
            setText("잠시 뒤...");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 20:
            scorePMBoxOff();
            setName("식당 종업원");
            setText("식사 나왔습니다-");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 21:
            choiceOn();
            setChoice("그래, 돌쇠야.", "아리가또 고자이마⸻스", "감사해용가리치킨 ㅎㅎ", "", "");
            setName("나");
            setText("(종업원에게)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 22:
            scorePM(-10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐지? 약간 공주병... 이런 건가?)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 2;
            break;
        case 23:
            scorePM(-20);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(아... 귀엽지만... 애교는 나한테만 부리라고!)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 1;
            break;
        case 24:
            scorePM(+10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(재미있군... ㅎ)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 0;
            break;
        case 25:
            scorePMBoxOff();
            setName("나");
            setText("잘 먹겠습니다⸺!");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 26:
            choiceOn();
            setChoice("스카프를 얼굴에 두르고 나마쓰떼를 외치며 손으로 먹는다.", "양손 젓가락 스킬을 사용한다.", "눈으로, 코로, 입으로 한 입씩 감상하며 먹는다.", "", "");
            setName("나");
            setText("(밥을 먹기 시작한다. 무엇으로 먹을까?)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 27:
            scorePM(10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐지...? 이 예측 불가능한 매력...?)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 2;
            break;
        case 28:
            scorePM(-20);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(아... 자기 혼자 다 먹으려고...?)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 1;
            break;
        case 29:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐야, 이 엘레강스함! 내 부인감으로 딱! 딱! 딱 좋아!)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            textNumber += 0;
            break;
        case 30:
            scorePMBoxOff();
            setName("");
            setText("(식사를 계속한다 ...)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_restaurant.jpg");
            break;
        case 31:
            scorePMBoxOff();
            setName("나");
            setText("와, 배부르다. 그쵸?");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_casher.jpg");
            break;
        case 32:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("네 ㅎㅎ... 계산은......?");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_casher.jpg");
            break;
        case 33:
            choiceOn();
            setChoice("계산이요? 제가 할게요.", "네? 이런 건 남자답게...", "깔끔하게 더치페이 합시다!", "", "");
            setName("나");
            setText("(닛몰캐쉬가 계산을 망설이고 있다. 어떻게 할까?)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_casher.jpg");
            break;
        case 34:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(뭐지 이 반전매력... 귀엽게 생긴 여자가 이렇게 시크하고 도도할 수가!!)");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_casher.jpg");
            textNumber += 2;
            break;
        case 35:
            scorePM(-20);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(내가 남자답다고? 마음에 드ㄴ- 아, 아니! 이렇게 이기적인 여자는 안 돼!)");
            setCharacter("nmc_angry.png");
            setBackground("bg_nmc_casher.jpg");
            textNumber += 1;
            break;
        case 36:
            scorePM(10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(음 뭐, 나이스하네.)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_casher.jpg");
            textNumber += 0;
            break;
        case 37:
            scorePMBoxOff();
            setName("");
            setText("(계산을 마치고 식당 밖으로 나왔다.)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_beforecafe.jpg");
            break;
        case 38:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("저희... 조금 더 만나보는 거 어때요?");
            setCharacter("nmc_after.png");
            setBackground("bg_nmc_beforecafe.jpg");
            break;
        case 39:
            choiceOn();
            setChoice("방탈출카페 가는 거 어때요?", "만화 카페 가는 거 어때요?", "카페 가는 거 어때요?", "", "");
            setName("나");
            setText("네...! 저희 그러면 ...");
            setCharacter("nmc_after.png");
            setBackground("bg_nmc_beforecafe.jpg");
            break;
        case 40:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(호러 방탈출을 해서 내 품에 안기려는 수법인가? 귀엽군 ㅋ. 내가 친.히. 넘어가주지)");
            setCharacter("nmc_after.png");
            setBackground("bg_nmc_beforecafe.jpg");
            textNumber += 2;
            break;
        case 41:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(조용하고 좁은 방에 단둘이 있고 싶단 건가? 귀엽군 ㅋ. 내가 친.히. 넘어가주지)");
            setCharacter("nmc_after.png");
            setBackground("bg_nmc_beforecafe.jpg");
            textNumber = 56 ;
            break;
        case 42:
            scorePM(-200);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(아⸻ 진부하군... 이렇게 지루한 여자와는 사귈 수 없어.)");
            setCharacter("nmc_uncomfortable.png");
            setBackground("bg_nmc_beforecafe.jpg");
            textNumber = 71;
            break;
        case 43:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 둘은 방탈출 카페로 향한다.)");
            setCharacter("");
            setBackground("bg_street1.jpg");
            break;
        case 44:
            scorePMBoxOff();
            setName("나");
            setText("음... 저희 무슨 테마 갈까요?");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_escape1.jpg");
            break;
        case 45:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("흠... 역시 호러가 진리죠?");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_escape1.jpg");
            break;
        case 46:
            scorePMBoxOff();
            setName("나");
            setText("네 그렇죠!");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_escape1.jpg");
            break;
        case 47:
            scorePMBoxOff();
            setName("");
            setText("(하얀 연기가 나오고 무서운 음악이 나온다.)");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_escape2.jpg");
            break;
        case 48:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("조금 무서운데요...?");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_escape2.jpg");
            break;
        case 49:
            choiceOn();
            setChoice("제가 지켜드릴게요! 옆에 딱 붙어계세요!", "아 좀 붙지 마요... 더워 죽겠네;", "그러게요... 저 좀 지켜주세요 ㅠㅠ", "", "");
            setName("");
            setText("(닛몰캐쉬가 분위기를 무서워한다.)");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_escape2.jpg");
            break;
        case 50:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(아, 이런 강한 여자, 너무 좋아!)");
            setCharacter("nmc_sorry.png");
            setBackground("bg_nmc_escape2.jpg");
            textNumber += 2;
            break;
        case 51:
            scorePM(-200);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(내가... 세균 덩어리라는 건가... 이러면 상.처.받을지도⸻?");
            setCharacter("nmc_sad.png");
            setBackground("bg_nmc_escape2.jpg");
            textNumber = 71;
            break;
        case 52:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(하, 너무 귀여운데? 내 안에 숨겨진 보호 본능을 자극하는군.)");
            setCharacter("nmc_sorry.png");
            setBackground("bg_nmc_escape2.jpg");
            textNumber += 0;
            break;
        case 53:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 방탈출을 끝마친 뒤...)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 54:
            scorePMBoxOff();
            setName("나");
            setText("오늘 너무 즐거웠어요, 닛몰캐쉬님");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 55:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("저도 즐거웠습니다. 나의 종달새님⸺★");
            setCharacter("nmc_handsome.png");
            setBackground("bg_nmc_goinghome.jpg");
            textNumber = 71;
            break;
        case 56:
            gameEnd();
        
        case 57:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 둘은 만화 카페로 향한다...)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            break;
        case 58:
            choiceOn();
            setChoice("악마와 러브송", "그놈에게 마치는 장미", "회장님은 메이드사마", "암컷늑대의 Boy", "오늘도 사랑스럽게");
            setName("");
            setText("서로 만화책을 골라 온다. 무슨 책을 가져갈까?");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            break;
        case 59:
            scorePM(20);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(내가 악마인 것은 어떻게 알았지? 하지만 너에게만은 천사라굿!)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            textNumber += 4;
            break;
        case 60:
            scorePM(-200);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(나한테 프러포즈를... 결혼하고 싶단 건가? 너무 진도가 빠르군.)");
            setCharacter("nmc_uncomfortable.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            textNumber += 3;
            break;
        case 61:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(나에게 메이드복을 입히고 싶단 건가? ... 생각보다 저돌적인 여자군...)");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            textNumber += 2;
            break;
        case 62:
            scorePM(-10);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(나는 수컷인데... 왜 암컷으로 만들지...?)");
            setCharacter("nmc_angry.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            textNumber += 1;
            break;
        case 63:
            scorePM(0);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(음... 생각보다 평범한 여자군...)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_bookcafe1.jpg");
            textNumber += 0;
            break;
        case 64:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 만화책을 읽다가...)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_bookcafe2.jpg");
            break;
        case 65:
            scorePMBoxOff();
            setName("");
            setText("(잠에 들어버렸다...!)");
            setCharacter("nmc_sit.png");
            setBackground("bg_nmc_bookcafe2.jpg");
            break;
        case 66:
            choiceOn();
            setChoice("화들짝 놀라며 뺨을 친다.", "조용히 다시 눈을 감는다.", "", "", "");
            setName("");
            setText("(눈을 떠보니 닛몰캐쉬의 어깨에 기대고 있었다. 당신의 반응은?)");
            setCharacter("nmc_wtf.png");
            setBackground("bg_nmc_bookcafe2.jpg");
            break;
        case 67:
            scorePM(-200);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("( !  짝  ! )");
            setCharacter("nmc_angry.png");
            setBackground("bg_nmc_bookcafe2.jpg");
            textNumber = 71;
            break;
        case 68:
            scorePM(30);
            choiceOff();
            scorePMBoxOn();
            setName("닛몰캐쉬");
            setText("(푸흣⸻ 부끄러운가보군... 나의 앙큼한 아.기.고.양.이?");
            setCharacter("nmc_surprised.png");
            setBackground("bg_nmc_bookcafe2.jpg");
            textNumber += 0;
            break;
        case 69:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 만화 카페에서 나온 뒤...)");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 70:
            scorePMBoxOff();
            setName("나");
            setText("오늘 너무 즐거웠어요, 닛몰캐쉬님");
            setCharacter("nmc_questional.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 71:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("저도 즐거웠습니다. 나의 종달새님⸺★");
            setCharacter("nmc_handsome.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 72:
            gameEnd();

    }
}





function nextText() {
    game_click.pause();
    game_click.currentTime = 0;
    if (textNumber >= lineMaximum) {  // 마지막 대사를 누른 뒤 다음 대사로 못 넘어가게 막음
        textNumber++;
        game_click.play();
        gameEnd(textNumber);
    } else if (document.querySelector(".textBox").id == "clickOff") {  // id가 clickOff인 .textBox는 클릭되지 않게 함
        return;
    } else if (document.querySelector(".textBox").id == "clickOn") {    // id가 clickOn인 .textBox는 클릭되어 다음 대사가 출력되게 함
        textNumber++;
        game_click.play();
        showingText();
    }
}

function choiceOn() {                                       // 선택 창을 켜는 함수
    document.querySelector(".textBox").id = "clickOff";     // .textBox를 clickOff 상태로 만듦
    document.querySelector(".choiceBox").id = "choiceOn";   // .choiceBox를 choiceOn 상태로 만듦
}

function choiceOff() {                                      // 선택 창을 끄는 함수
    document.querySelector(".textBox").id = "clickOn";      // .textBox를 clickOn 상태로 만듦
    document.querySelector(".choiceBox").id = "choiceOff";  // .choiceBox를 choiceOn 상태로 만듦
}

function choiceCheck(n) {           // 선택을 확인하는 함수
    textNumber += n;                // n번째를 선택하면 알맞게 대사가 넘어가게 함
    showingText();
}

function scorePMBoxOn() {           // 점수 +- 상자 나타나게 하는 함수
    document.querySelector(".scorePMBox").style.display = "block"
}

function scorePMBoxOff(){           // 점수 +- 상자 사라지게 하는 함수
    document.querySelector(".scorePMBox").style.display = "none"
}

function scorePM(n) {               // 점수를 더하거나 빼고, 상자 내부의 텍스트를 변경함
    score += n;
    if (n < 0) {
        n = -n
        game_neg.play();
        document.querySelector(".scorePM").innerHTML = "호감도 " + "-" + n;
        document.querySelector(".scorePM").style.color = "red";
    } else if (n == 0) {
        game_click.play();
        document.querySelector(".scorePM").innerHTML = "호감도 " + n;
        document.querySelector(".scorePM").style.color = "white";
    } else if (n > 0) { 
        game_pos.play();
        document.querySelector(".scorePM").innerHTML = "호감도 " + "+" + n;
        document.querySelector(".scorePM").style.color = "green";
    } else {
        return;
    }
}

function gameEnd(n) {
    if (score >= 100) {
        gameWin(n);
    } else if (score <= -100) {
        gameOver(n);
    } else {
        theEnd(n);
    }
}

function gameOver(n) {
    bgm_sad_end.play();
    switch(n){
        case 73:
            scorePMBoxOff();
            setName("");
            setText("당신은...");
            setCharacter("");
            setBackground("black.jpg");
            break;
        case 74:
            scorePMBoxOff();
            setName("");
            setText("실패⸻... 했습니다.");
            setCharacter("");
            setBackground("black.jpg");
            break;
        case 75:
            scorePMBoxOff();
            setName("");
            setText("S A D - E N D I N G");
            setCharacter("");
            setBackground("black.jpg");
            break;
    }
}

function gameWin(n) {
    switch(n){
        case 73:
            scorePMBoxOff();
            setName("");
            setText("(소개팅과 데이트를 마치고 집으로 향했다.)");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 74:
            scorePMBoxOff();
            setName("핸드폰");
            setText("( 진동 )");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 75:
            scorePMBoxOff();
            setName("나");
            setText("어? 무슨 알림이지?");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 76:
            scorePMBoxOff();
            setName("닛몰캐쉬");
            setText("그때 너무 좋았어요.. 내일 영화 한 편 보실래요?");
            setCharacter("nmc_inphone.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 77:
            scorePMBoxOff();
            setName("나");
            setText("(헉, 애프터 신청인가⸻ 좋았어! 나도 드디어...!");
            setCharacter("nmc_inphone.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 78:
            scorePMBoxOff();
            setName("");
            setText("H A P P Y - E N D I N G !");
            setCharacter("nmc_inphone.png");
            setBackground("bg_nmc_goinghome.jpg");
            break;
    }
}

function theEnd(n) {
    switch(n){
        case 73:
            scorePMBoxOff();
            setName("");
            setText("(그렇게 데이트를 잘 마치고 집으로 돌아간다.)");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 74:
            scorePMBoxOff();
            setName("나");
            setText("(... 피곤하네)");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
        case 75:
            scorePMBoxOff();
            setName("");
            setText("T H E - E N D");
            setCharacter("");
            setBackground("bg_nmc_goinghome.jpg");
            break;
    }
}

function setName(name) {            // 대사창의 이름을 설정함
    document.querySelector(".name").innerHTML = name;
}

function setText(text) {            // 대사창의 대사를 설정함
    document.querySelector(".text").innerHTML = text;
}

function setCharacter(character) {  // 배경에 나타나있는 캐릭터를 변경함
    document.querySelector(".character").src = "images/" + character;
}

function setBackground(bg) {
    document.querySelector(".bgchange").innerHTML = "body { background-image: url('images/" + bg + "'); }";
}

function setChoice(choice1, choice2, choice3, choice4, choice5) {       // 선택 창 모양을 상황에 따라 조절함
    if (choice1 == "") {
        document.querySelector("#c1").style.display = "none";
        document.querySelector("#c2").style.display = "none";
        document.querySelector("#c3").style.display = "none";
        document.querySelector("#c4").style.display = "none";
        document.querySelector("#c5").style.display = "none";
        document.querySelector(".choiceBox").style.height = "0vh";
        document.querySelector(".choiceBox").style.margin = "50vh 5vw 0 70vw";
    } else if (choice2 == "") {
        document.querySelector("#c1").style.display = "block";
        document.querySelector("#c2").style.display = "none";
        document.querySelector("#c3").style.display = "none";
        document.querySelector("#c4").style.display = "none";
        document.querySelector("#c5").style.display = "none";
        document.querySelector("#choiceBox").style.height = "8.4vh";
        document.querySelector(".choiceBox").style.margin = "71.3vh 5vw 30.3vh 70vw";
    } else if (choice3 == "") {
        document.querySelector("#c1").style.display = "block";
        document.querySelector("#c2").style.display = "block";
        document.querySelector("#c3").style.display = "none";
        document.querySelector("#c4").style.display = "none";
        document.querySelector("#c5").style.display = "none";
        document.querySelector(".choiceBox").style.height = "13.1vh";
        document.querySelector(".choiceBox").style.margin = "51.9vh 5vw 35vh 70vw";
    } else if (choice4 == "") {
        document.querySelector("#c1").style.display = "block";
        document.querySelector("#c2").style.display = "block";
        document.querySelector("#c3").style.display = "block";
        document.querySelector("#c4").style.display = "none";
        document.querySelector("#c5").style.display = "none";
        document.querySelector(".choiceBox").style.height = "18.8vh";
        document.querySelector(".choiceBox").style.margin = "45.5vh 5vw 40.7vh 70vw";
    } else if (choice5 == "") {
        document.querySelector("#c1").style.display = "block";
        document.querySelector("#c2").style.display = "block";
        document.querySelector("#c3").style.display = "block";
        document.querySelector("#c4").style.display = "block";
        document.querySelector("#c5").style.display = "none";
        document.querySelector(".choiceBox").style.height = "24.5vh";
        document.querySelector(".choiceBox").style.margin = "40.1vh 5vw 44.4vh 70vw";
    } else if (choice5 != "") {
        document.querySelector("#c1").style.display = "block";
        document.querySelector("#c2").style.display = "block";
        document.querySelector("#c3").style.display = "block";
        document.querySelector("#c4").style.display = "block";
        document.querySelector("#c5").style.display = "block";
        document.querySelector(".choiceBox").style.height = "30.2vh";
        document.querySelector(".choiceBox").style.margin = "33.7vh 5vw 49.1vh 70vw";
    } else {
        return Error;
    }

    document.querySelector("#c1").innerHTML = "▶ " + choice1;
    document.querySelector("#c2").innerHTML = "▶ " + choice2;
    document.querySelector("#c3").innerHTML = "▶ " + choice3;
    document.querySelector("#c4").innerHTML = "▶ " + choice4;
    document.querySelector("#c5").innerHTML = "▶ " + choice5;
}