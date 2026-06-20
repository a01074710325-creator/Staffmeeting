// 중학교 1학년 사회과 퀴즈 데이터 예시 (수업 진도에 맞춰 수정 요망)
const questions = [
    {
        question: "1. 지도의 3요소에 해당하지 않는 것은 무엇인가요?",
        answers: [
            { text: "방위", correct: false },
            { text: "축척", correct: false },
            { text: "기호와 범례", correct: false },
            { text: "색상", correct: true }
        ]
    },
    {
        question: "2. 적도를 기준으로 지구를 남과 북으로 나누는 가상의 선은 무엇인가요?",
        answers: [
            { text: "본초 자오선", correct: false },
            { text: "위선", correct: true },
            { text: "경선", correct: false },
            { text: "날짜 변경선", correct: false }
        ]
    },
    {
        question: "3. 일년 내내 덥고 비가 많이 내리는 열대 우림 기후 지역에서 주로 볼 수 있는 전통 가옥의 형태는?",
        answers: [
            { text: "고상 가옥", correct: true },
            { text: "이글루", correct: false },
            { text: "게르", correct: false },
            { text: "흙집", correct: false }
        ]
    }
];

// 주요 HTML 요소 선택
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

// 퀴즈 시작 함수
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

// 질문 표시 함수
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// 이전 버튼 초기화
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// 정답 선택 처리 함수
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        // 오답일 경우 정답도 함께 표시
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
        });
    }

    // 클릭 후 모든 버튼 비활성화
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    // 1.5초 후 다음 문제로 넘어가거나 결과 화면 표시
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

// 결과 화면 표시 함수
function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = questions.length;
}

// 이벤트 리스너 등록 및 초기 실행
restartButton.addEventListener('click', startGame);
startGame();
