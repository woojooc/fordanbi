/* =========================================================
   DANBI WEBSITE
   Language + Scroll + Account Copy
========================================================= */


/* =========================================================
   1. PAGE OPEN → ALWAYS TOP
========================================================= */

window.addEventListener("load", function () {

  // URL에 #donate 등이 붙어 있어도 첫 진입은 맨 위
  if (window.location.hash) {

    history.replaceState(
      null,
      "",
      window.location.pathname +
      window.location.search
    );

  }

  window.scrollTo(0, 0);

});


/* =========================================================
   2. LANGUAGE DATA
========================================================= */

const translations = {

  ko: {

    brand: "단비의 봄",

    navDonate: "후원하기",

    heroEyebrow: "OUR FAMILY · OUR DANBI",

    heroTitle:
      "단비에게<br><span>다시 걸을 수 있는 시간</span>을<br>주세요.",

    heroText:
      "13년 동안 우리 가족 곁을 지켜준 단비가 골육종과 싸우고 있습니다.",

    heroButton:
      "❤️ 단비 치료에 힘 보태기",

    heroNote:
      "후원금은 단비의 치료와 회복을 위해 사용됩니다.",


    statusTitle:
      "지금 단비는",

    birthLabel:
      "생년월일",

    diagnosisLabel:
      "진단",

    diagnosis:
      "골육종",

    currentLabel:
      "현재",

    current:
      "진통제 투약",

    treatmentLabel:
      "가능한 치료",

    treatment:
      "항암치료 검토",


    storyTitle:
      "단비에게 무슨 일이 있었나요?",

    story1:
      "단비는 2013년 7월 23일 태어나 오랜 시간 우리 가족과 함께 살아온 소중한 가족입니다.",

    story2:
      "얼마 전 아랫배 쪽에 생긴 종양을 제거하기 위해 수술을 진행했습니다.",

    story3:
      "하지만 종양은 제거해도 다시 자라나고, 또다시 더 크게 자라나는 상황이 반복될 수 있다는 이야기를 들었습니다.",

    story4:
      "결국 수술을 계속 진행하기 어려워 수술을 중단하고, 현재는 진통제를 투약하며 앞으로의 치료 방법을 결정하기 위해 기다리고 있습니다.",

    storyHighlight:
      "💔 종양의 영향으로 한쪽 뒷다리는 심하게 부어 있고, 다른 한쪽은 상처와 진물 때문에 피부가 짓무른 상태입니다.",

    story5:
      "단비에게 항암치료가 가능한지, 수술이 도움이 될 수 있는지, 그리고 필요한 경우 다리 절단 후 재활을 통해 다시 움직일 수 있는 방법이 있는지 알아보고 있습니다.",


    galleryTitle:
      "우리 가족의 단비",


    hopeTitle:
      "앞으로 필요한 치료",

    step1Title:
      "정밀검사",

    step1Text:
      "혈액검사와 영상검사 등을 통해 단비의 현재 상태와 치료 가능성을 확인합니다.",

    step2Title:
      "항암치료 검토",

    step2Text:
      "수의사의 판단에 따라 항암치료 가능 여부와 치료 방법을 결정합니다.",

    step3Title:
      "수술 가능성 검토",

    step3Text:
      "단비의 상태에 따라 다리 절단수술을 포함한 수술적 치료 가능성을 검토합니다.",

    step4Title:
      "재활과 보조기구",

    step4Text:
      "수술을 받게 된다면 재활치료와 휠체어·보조기구 등이 필요할 수 있습니다.",


    fundTitle:
      "단비에게 필요한 치료비",

    goalLabel:
      "1차 후원 목표",

    currentDonation:
      "현재 후원금",

    goalText:
      "목표",

    cost1:
      "검사·진단",

    cost2:
      "수술·입원",

    cost3:
      "항암치료",

    cost4:
      "통증·상처관리",

    cost5:
      "재활·보조기구",

    cost6:
      "추가 치료비",

    estimate:
      "※ 위 금액은 병원에서 확정된 견적이 아닌 후원 목표 설정을 위한 예상 범위입니다. 실제 치료 방법과 비용은 담당 수의사의 진료 및 병원 견적에 따라 달라질 수 있습니다.",


    donateEyebrow:
      "PLEASE HELP DANBI",

    donateTitle:
      "단비에게<br>한 번만 더 기회를 주세요.",

    donateText:
      "작은 마음 하나가 단비에게는 치료를 계속할 수 있는 힘이 됩니다.",

    onlineTitle:
      "💳 온라인 후원",

    onlineText:
      "아래 버튼을 통해 안전한 결제 페이지로 이동할 수 있도록 연결할 예정입니다.",

    paymentButton:
      "❤️ 온라인 후원하기",

    paymentNote:
      "현재 결제 서비스 준비 중입니다.",

    bankTitle:
      "🏦 계좌 후원",

    bankText:
      "계좌이체를 원하시는 분은 아래 후원 계좌를 이용해주세요.",

    accountNote:
      "후원 전 계좌정보를 다시 한번 확인해주세요.",


    transparencyTitle:
      "후원금은 투명하게 사용하겠습니다.",

    promise1Title:
      "진료비 공개",

    promise1Text:
      "가능한 범위에서 진료비 영수증과 치료 내역을 공유하겠습니다.",

    promise2Title:
      "치료 과정 공유",

    promise2Text:
      "단비의 치료 과정과 상태를 꾸준히 알려드리겠습니다.",

    promise3Title:
      "남은 후원금",

    promise3Text:
      "치료 종료 후 남은 금액이 발생할 경우 사용 내역을 안내하겠습니다.",


    finalGreeting:
      "단비야,",

    finalMessage:
      "조금만 더 힘내자.<br>우리가 끝까지 함께할게.",


    footerText:
      "골육종으로 투병 중인 단비의 치료를 위한 후원 페이지입니다.",

    footerNotice:
      "본 페이지의 치료비는 예상 금액이며 실제 치료비와 다를 수 있습니다."
,
    medicalJourney:
  "MEDICAL JOURNEY",

medicalJourneyTitle:
  "단비의 병원 치료 경과",

medicalJourneyGuide:
  "← 사진을 좌우로 넘겨보세요 →",

treatmentRecord1Label:
  "치료기록 01",

treatmentRecord1Title:
  "첫 번째 증상발생 기록",

treatmentRecord1Text:
  "아랫배쪽 종양이 점점 커짐",

treatmentRecord2Label:
  "치료기록 02",

treatmentRecord2Title:
  "두 번째 치료 기록",

treatmentRecord2Text:
  "종양과 함께 자궁 및 젖꼭지들을 모두 제거하는 수술",

treatmentRecord3Label:
  "호스피스기록 01",

treatmentRecord3Title:
  "첫 번째 호스피스 기록",

treatmentRecord3Text:
  "새로운 종양이 추가로 생겼으며 더 커짐. 해당 사항으로 다리 부종이 생기고 피부가 짓무르게 됨. 가바펜틴 진통제 복용",

treatmentRecord4Label:
  "호스피스기록 02",

treatmentRecord4Title:
  "두 번째 호스피스 기록",

treatmentRecord4Text:
  "숨을 헐떡이며 누워 지냄. 가바펜틴 진통제 복용",
paypalButton:
  "💙 PayPal로 후원하기",

naverPayButton:
  "🟢 네이버페이로 후원하기",

donationAmountTitle:
  "후원하실 금액을 선택해주세요.",

selectedDonationLabel:
  "선택한 후원금",
  donation1: "1만원",
donation5: "5만원",
donation10: "10만원",
donation50: "50만원",
donation100: "100만원",
donation300: "300만원",
donation500: "500만원",
  },


  /* =====================================================
     ENGLISH
  ===================================================== */

  en: {

    brand: "Spring for Danbi",

    navDonate: "Donate",

    heroEyebrow: "OUR FAMILY · OUR DANBI",

    heroTitle:
      "Please give Danbi<br><span>more time to walk again</span>.",

    heroText:
      "Danbi, who has been part of our family for 13 years, is fighting osteosarcoma.",

    heroButton:
      "❤️ Help Danbi's Treatment",

    heroNote:
      "Donations will be used for Danbi's treatment and recovery.",


    statusTitle:
      "Danbi's Current Condition",

    birthLabel:
      "Date of Birth",

    diagnosisLabel:
      "Diagnosis",

    diagnosis:
      "Osteosarcoma",

    currentLabel:
      "Current Care",

    current:
      "Pain Medication",

    treatmentLabel:
      "Possible Treatment",

    treatment:
      "Chemotherapy Evaluation",


    storyTitle:
      "What happened to Danbi?",

    story1:
      "Danbi was born on July 23, 2013 and has been a precious member of our family for many years.",

    story2:
      "Recently, Danbi underwent surgery to remove a tumor in the lower abdominal area.",

    story3:
      "However, we were told that the tumor may continue to return and grow even after removal.",

    story4:
      "Because continuing surgery became difficult, the procedure was stopped. Danbi is currently receiving pain medication while we consider the next treatment options.",

    storyHighlight:
      "💔 Due to the tumor, one of Danbi's hind legs is severely swollen, while the other has wounds and discharge that have caused the skin to become severely irritated.",

    story5:
      "We are exploring whether chemotherapy, surgery, and, if necessary, amputation followed by rehabilitation could help Danbi move again.",


    galleryTitle:
      "Our Beloved Danbi",


    hopeTitle:
      "Treatment Danbi May Need",

    step1Title:
      "Detailed Examination",

    step1Text:
      "Blood tests and imaging may be needed to understand Danbi's condition and treatment options.",

    step2Title:
      "Chemotherapy Evaluation",

    step2Text:
      "Veterinarians will determine whether chemotherapy is appropriate and what treatment plan may be possible.",

    step3Title:
      "Surgical Evaluation",

    step3Text:
      "Depending on Danbi's condition, surgical treatment including possible limb amputation may be considered.",

    step4Title:
      "Rehabilitation & Equipment",

    step4Text:
      "If surgery is performed, rehabilitation, mobility assistance and supportive equipment may be needed.",


    fundTitle:
      "Estimated Treatment Costs",

    goalLabel:
      "Initial Fundraising Goal",

    currentDonation:
      "Current Donations",

    goalText:
      "Goal",

    cost1:
      "Examination & Diagnosis",

    cost2:
      "Surgery & Hospitalization",

    cost3:
      "Chemotherapy",

    cost4:
      "Pain & Wound Care",

    cost5:
      "Rehabilitation & Equipment",

    cost6:
      "Additional Treatment",

    estimate:
      "※ These amounts are estimated ranges for fundraising purposes, not confirmed hospital quotations. Actual treatment and costs may vary depending on veterinary evaluation and hospital estimates.",


    donateEyebrow:
      "PLEASE HELP DANBI",

    donateTitle:
      "Please give Danbi<br>one more chance.",

    donateText:
      "Even a small act of kindness can give Danbi strength to continue treatment.",

    onlineTitle:
      "💳 Online Donation",

    onlineText:
      "We plan to connect this button to a secure payment page.",

    paymentButton:
      "❤️ Donate Online",

    paymentNote:
      "Online payment service is currently being prepared.",

    bankTitle:
      "🏦 Bank Transfer",

    bankText:
      "If you would like to make a bank transfer, please use the account below.",

    accountNote:
      "Please double-check the account information before making a donation.",


    transparencyTitle:
      "We will use donations transparently.",

    promise1Title:
      "Medical Expense Updates",

    promise1Text:
      "Where possible, we will share medical receipts and treatment information.",

    promise2Title:
      "Treatment Updates",

    promise2Text:
      "We will continue to share updates about Danbi's condition and treatment.",

    promise3Title:
      "Remaining Donations",

    promise3Text:
      "If funds remain after treatment, we will provide information about their use.",


    finalGreeting:
      "Danbi,",

    finalMessage:
      "Stay strong a little longer.<br>We will be with you until the end.",


    footerText:
      "A fundraising page supporting Danbi's treatment for osteosarcoma.",

    footerNotice:
      "Treatment costs shown on this page are estimates and may differ from actual expenses.",
    medicalJourney:
  "MEDICAL JOURNEY",

medicalJourneyTitle:
  "Danbi's Medical Journey",

medicalJourneyGuide:
  "← Swipe left or right to view photos →",

treatmentRecord1Label:
  "Treatment Record 01",

treatmentRecord1Title:
  "First Symptom Record",

treatmentRecord1Text:
  "The tumor in the lower abdomen gradually became larger.",

treatmentRecord2Label:
  "Treatment Record 02",

treatmentRecord2Title:
  "Second Treatment Record",

treatmentRecord2Text:
  "Surgery was performed to remove the tumor along with the uterus and mammary glands.",

treatmentRecord3Label:
  "Hospice Record 01",

treatmentRecord3Title:
  "First Hospice Record",

treatmentRecord3Text:
  "A new tumor developed and continued to grow. This caused swelling in the leg and severe skin irritation. Gabapentin was administered for pain relief.",

treatmentRecord4Label:
  "Hospice Record 02",

treatmentRecord4Title:
  "Second Hospice Record",

treatmentRecord4Text:
  "Danbi spent most of her time lying down and breathing heavily. Gabapentin was administered for pain relief.",

  paypalButton:
  "💙 Donate with PayPal",

naverPayButton:
  "🟢 Donate with Naver Pay",

  donationAmountTitle:
  "Choose your donation amount",

donationAmountTitle:
  "Please select the amount you would like to donate.",

selectedDonationLabel:
  "Selected donation",
donation1: "$10",
donation5: "$50",
donation10: "$100",
donation50: "$500",
donation100: "$1,000",
donation300: "$3,000",
donation500: "$5,000",
  },

  /* =====================================================
     FRENCH
  ===================================================== */

  fr: {

    brand: "Le printemps de Danbi",

    navDonate: "Faire un don",

    heroEyebrow: "OUR FAMILY · OUR DANBI",

    heroTitle:
      "Donnez à Danbi<br><span>une chance de marcher à nouveau</span>.",

    heroText:
      "Danbi, qui fait partie de notre famille depuis 13 ans, lutte contre un ostéosarcome.",

    heroButton:
      "❤️ Aider aux soins de Danbi",

    heroNote:
      "Les dons seront utilisés pour les soins et la récupération de Danbi.",


    statusTitle:
      "L'état actuel de Danbi",

    birthLabel:
      "Date de naissance",

    diagnosisLabel:
      "Diagnostic",

    diagnosis:
      "Ostéosarcome",

    currentLabel:
      "Actuellement",

    current:
      "Médicaments antidouleur",

    treatmentLabel:
      "Traitement possible",

    treatment:
      "Évaluation d'une chimiothérapie",


    storyTitle:
      "Que s'est-il passé pour Danbi ?",

    story1:
      "Danbi est née le 23 juillet 2013 et vit depuis de nombreuses années au sein de notre famille.",

    story2:
      "Récemment, Danbi a subi une intervention pour retirer une tumeur située dans la partie inférieure de l'abdomen.",

    story3:
      "Cependant, on nous a expliqué que la tumeur pouvait continuer à réapparaître et à grossir malgré son retrait.",

    story4:
      "Il est finalement devenu difficile de poursuivre les interventions. L'opération a donc été interrompue et Danbi reçoit actuellement des antidouleurs pendant que nous étudions les prochaines possibilités de traitement.",

    storyHighlight:
      "💔 En raison de la tumeur, l'une des pattes arrière de Danbi est fortement gonflée, tandis que l'autre présente des blessures et des écoulements qui ont fortement irrité la peau.",

    story5:
      "Nous cherchons à savoir si une chimiothérapie, une intervention chirurgicale et, si nécessaire, une amputation suivie d'une rééducation pourraient permettre à Danbi de retrouver sa mobilité.",


    galleryTitle:
      "Notre chère Danbi",


    hopeTitle:
      "Les soins dont Danbi pourrait avoir besoin",

    step1Title:
      "Examens approfondis",

    step1Text:
      "Des analyses sanguines et des examens d'imagerie peuvent être nécessaires pour évaluer l'état de Danbi et les possibilités de traitement.",

    step2Title:
      "Évaluation de la chimiothérapie",

    step2Text:
      "Les vétérinaires détermineront si une chimiothérapie est adaptée et quel traitement pourrait être envisagé.",

    step3Title:
      "Évaluation chirurgicale",

    step3Text:
      "Selon l'état de Danbi, une intervention chirurgicale, y compris une éventuelle amputation, pourra être envisagée.",

    step4Title:
      "Rééducation et équipements",

    step4Text:
      "Après une intervention, une rééducation ainsi que des équipements d'aide à la mobilité pourraient être nécessaires.",


    fundTitle:
      "Estimation des frais de traitement",

    goalLabel:
      "Objectif initial",

    currentDonation:
      "Dons actuels",

    goalText:
      "Objectif",

    cost1:
      "Examens et diagnostic",

    cost2:
      "Chirurgie et hospitalisation",

    cost3:
      "Chimiothérapie",

    cost4:
      "Douleur et soins des plaies",

    cost5:
      "Rééducation et équipements",

    cost6:
      "Soins supplémentaires",

    estimate:
      "※ Ces montants sont des estimations destinées à définir l'objectif de collecte et ne constituent pas des devis hospitaliers définitifs. Les traitements et les coûts réels peuvent varier selon l'évaluation vétérinaire et le devis de l'hôpital.",


    donateEyebrow:
      "PLEASE HELP DANBI",

    donateTitle:
      "Donnez à Danbi<br>une chance de plus.",

    donateText:
      "Même un petit geste peut donner à Danbi la force de poursuivre ses soins.",

    onlineTitle:
      "💳 Don en ligne",

    onlineText:
      "Nous prévoyons de relier ce bouton à une page de paiement sécurisée.",

    paymentButton:
      "❤️ Faire un don en ligne",

    paymentNote:
      "Le service de paiement en ligne est actuellement en préparation.",

    bankTitle:
      "🏦 Virement bancaire",

    bankText:
      "Si vous souhaitez effectuer un virement bancaire, veuillez utiliser le compte ci-dessous.",

    accountNote:
      "Veuillez vérifier attentivement les informations bancaires avant d'effectuer un don.",


    transparencyTitle:
      "Nous utiliserons les dons de manière transparente.",

    promise1Title:
      "Frais médicaux",

    promise1Text:
      "Dans la mesure du possible, nous partagerons les factures médicales et les informations concernant les soins.",

    promise2Title:
      "Suivi des soins",

    promise2Text:
      "Nous continuerons à partager des nouvelles concernant l'état et les traitements de Danbi.",

    promise3Title:
      "Dons restants",

    promise3Text:
      "S'il reste des fonds après les soins, nous communiquerons leur utilisation.",


    finalGreeting:
      "Danbi,",

    finalMessage:
      "Courage encore un peu.<br>Nous resterons avec toi jusqu'au bout.",


    footerText:
      "Page de soutien destinée aux soins de Danbi, atteinte d'un ostéosarcome.",

    footerNotice:
      "Les frais indiqués sur cette page sont estimatifs et peuvent différer des dépenses réelles.",

    medicalJourney:
  "PARCOURS MÉDICAL",

medicalJourneyTitle:
  "Le parcours médical de Danbi",

medicalJourneyGuide:
  "← Faites glisser les photos vers la gauche ou la droite →",

treatmentRecord1Label:
  "Dossier médical 01",

treatmentRecord1Title:
  "Premiers symptômes",

treatmentRecord1Text:
  "La tumeur située dans le bas de l'abdomen a progressivement grossi.",

treatmentRecord2Label:
  "Dossier médical 02",

treatmentRecord2Title:
  "Deuxième dossier de soins",

treatmentRecord2Text:
  "Une intervention chirurgicale a été réalisée afin de retirer la tumeur ainsi que l'utérus et les glandes mammaires.",

treatmentRecord3Label:
  "Dossier de soins palliatifs 01",

treatmentRecord3Title:
  "Premier dossier de soins palliatifs",

treatmentRecord3Text:
  "Une nouvelle tumeur est apparue et a continué à grossir. Cela a provoqué un gonflement de la patte et une importante irritation de la peau. De la gabapentine a été administrée pour soulager la douleur.",

treatmentRecord4Label:
  "Dossier de soins palliatifs 02",

treatmentRecord4Title:
  "Deuxième dossier de soins palliatifs",

treatmentRecord4Text:
  "Danbi restait principalement allongée et respirait difficilement. De la gabapentine a été administrée pour soulager la douleur.",
  }
  ,paypalButton:
  "💙 Faire un don avec PayPal",

naverPayButton:
  "🟢 Faire un don avec Naver Pay",
donationAmountTitle:
  "Choisissez le montant de votre don",

  donationAmountTitle:
  "Veuillez choisir un montant",

selectedDonationLabel:
  "Montant sélectionné",
  donation1: "10 €",
donation5: "50 €",
donation10: "100 €",
donation50: "500 €",
donation100: "1 000 €",
donation300: "3 000 €",
donation500: "5 000 €",
};


/* =========================================================
   3. CURRENCY SETTINGS
========================================================= */
function updateDonationButtonLanguage(language) {

  const selected =
    translations[language];

  if (!selected) {
    return;
  }

  document
    .querySelectorAll(
      ".donation-amount-text"
    )
    .forEach(function(element) {

      const key =
        element.getAttribute(
          "data-donation-label"
        );

      if (
        key &&
        selected[key] !== undefined
      ) {

        element.textContent =
          selected[key];

      }

    });

}
const currencySettings = {

  /* =========================================================
   DONATION AMOUNT BUTTON TEXT
   실제 결제 기준값은 항상 KRW
   언어에 따라 버튼에 보여주는 금액만 변경
========================================================= */

const donationAmountLabels = {

  ko: {
    10000: "1만원",
    50000: "5만원",
    100000: "10만원",
    500000: "50만원",
    1000000: "100만원",
    3000000: "300만원",
    5000000: "500만원"
  },

  en: {
    10000: "$10",
    50000: "$50",
    100000: "$100",
    500000: "$500",
    1000000: "$1,000",
    3000000: "$3,000",
    5000000: "$5,000"
  },

  fr: {
    10000: "10 €",
    50000: "50 €",
    100000: "100 €",
    500000: "500 €",
    1000000: "1 000 €",
    3000000: "3 000 €",
    5000000: "5 000 €"
  },

};


/* =========================================================
   4. FUND LABELS
========================================================= */

const fundLabels = {

  ko: {

    current: "현재 후원금",

    goal: "목표"

  },

  en: {

    current: "Current Donations",

    goal: "Goal"

  },

  fr: {

    current: "Dons actuels",

    goal: "Objectif"

  }

};


/* =========================================================
   5. CHANGE LANGUAGE
========================================================= */

function changeLanguage(language) {

  const selected =
    translations[language];

  if (!selected) {
    return;
  }


  /* HTML 언어 설정 */

  document.documentElement.lang =
    language;


  /* 일반 번역 */

  document
    .querySelectorAll("[data-i18n]")
    .forEach(function (element) {

      /*const key =
        element.dataset.i18n;*/
      const key = element.getAttribute("data-i18n");  

      if (selected[key] !== undefined) {

        element.innerHTML =
          selected[key];

      }

    });


  /* 언어 버튼 active */

  document
    .querySelectorAll(".language-button")
    .forEach(function (button) {

      button.classList.remove("active");

      if (
        button.dataset.lang ===
        language
      ) {

        button.classList.add("active");
      }

      if (
        button.getAttribute("data-lang") === language
      ) {
        button.classList.add("active");
      }

    });


  /* 선택 언어 저장 */

  localStorage.setItem(
    "danbiLanguage",
    language
  );


  /* 화폐 변경 */
  updateCurrency(language);

  /* 후원금 버튼 언어 변경 */
  updateDonationButtonLanguage(language);

  /* 후원금 선택 금액도 언어에 맞게 변경 */
  renderDonationAmounts(
    language
  );

/* ==============================
     통화 변경
  ============================== */

  /* 선택 언어 저장 */

  localStorage.setItem(
    "danbiLanguage",
    language
  );


  /* 화폐 변경 */

  updateCurrency(language);


  /* 후원금액 버튼 변경 */

  updateDonationAmountButtons(
    language
  );


  /* 선택된 후원금 변경 */

  updateSelectedDonationDisplay(
    language
  );




/* =========================================================
   6. CURRENCY UPDATE
========================================================= */

function updateCurrency(language) {

  const currency =
    currencySettings[language];

  const labels =
    fundLabels[language];


  if (!currency || !labels) {
    return;
  }


  /* =========================================
     현재 후원금 금액
  ========================================= */

  const currentAmount =
    document.getElementById(
      "currentAmount"
    );

  if (currentAmount) {

    currentAmount.textContent =
      currency.current;

  }


  /* =========================================
     상단 목표 금액
  ========================================= */

  const goalAmount =
    document.getElementById(
      "fundGoalAmount"
    );

  if (goalAmount) {

    goalAmount.textContent =
      currency.goal;

  }


  /* =========================================
     아래쪽 목표 금액
  ========================================= */

  const targetElement =
    document.querySelector(
      ".fund-number > span:last-child strong"
    );

  if (targetElement) {

    targetElement.textContent =
      currency.goal;

  }


  /* =========================================
     현재 후원금 라벨
  ========================================= */

  const currentLabel =
    document.querySelector(
      '[data-i18n="currentDonation"]'
    );

  if (currentLabel) {

    currentLabel.textContent =
      labels.current;

  }


  /* =========================================
     목표 라벨
  ========================================= */

  const goalLabel =
    document.querySelector(
      '[data-i18n="goalText"]'
    );

  if (goalLabel) {

    goalLabel.textContent =
      labels.goal;

  }


  /* =========================================
     치료비 금액
     
     항목 이름은 translations가 담당
     금액만 currencySettings가 담당
  ========================================= */

  const costElements =
    document.querySelectorAll(
      ".cost-grid strong"
    );


  costElements.forEach(
    function (element, index) {

      if (currency.costs[index]) {

        element.textContent =
          currency.costs[index];

      }

    }
  );

}


/* =========================================================
   7. LANGUAGE BUTTONS
========================================================= */

document
  .querySelectorAll(".language-button")
  .forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  });


/* =========================================================
   8. DONATION PROGRESS
========================================================= */

/*
   실제 현재 모금액

   예:
   500000
   = 50만원

   현재는 0원
*/

const CURRENT_AMOUNT = 0;


/*
   한국 원화 기준 목표금액

   10,000,000원
*/

const FUND_TARGET = 10000000;


function updateFundProgress() {

  const percentElement =
    document.getElementById(
      "percent"
    );

  const progressElement =
    document.getElementById(
      "progressBar"
    );


  if (
    !percentElement ||
    !progressElement
  ) {

    return;

  }


  const percentage =
    Math.min(
      100,
      Math.round(
        (
          CURRENT_AMOUNT /
          FUND_TARGET
        ) * 100
      )
    );


  percentElement.textContent =
    percentage + "%";


  progressElement.style.width =
    percentage + "%";

}


/* =========================================================
   9. ACCOUNT COPY
========================================================= */

const copyAccountButton =
  document.getElementById(
    "copyAccount"
  );


if (copyAccountButton) {

  copyAccountButton.addEventListener(
    "click",
    async function () {

      const accountNumber =
        "1002149842668";


      try {

        await navigator.clipboard.writeText(
          accountNumber
        );


        const originalText =
          copyAccountButton.textContent;


        copyAccountButton.textContent =
          "복사되었습니다 ✓";


        setTimeout(
          function () {

            copyAccountButton.textContent =
              originalText;

          },
          2000
        );


      } catch (error) {

        /* 오래된 브라우저 대응 */

        const textArea =
          document.createElement(
            "textarea"
          );


        textArea.value =
          accountNumber;


        textArea.style.position =
          "fixed";

        textArea.style.left =
          "-9999px";


        document.body.appendChild(
          textArea
        );


        textArea.focus();
        textArea.select();


        try {

          document.execCommand(
            "copy"
          );


          copyAccountButton.textContent =
            "복사되었습니다 ✓";


        } catch (err) {

          alert(
            "계좌번호: " +
            accountNumber
          );

        }


        document.body.removeChild(
          textArea
        );


        setTimeout(
          function () {

            copyAccountButton.textContent =
              "계좌번호 복사";

          },
          2000
        );

      }

    }
  );

}


/* =========================================================
   10. ONLINE PAYMENT
========================================================= */

/*const paymentButton =
  document.getElementById(
    "paymentButton"
  );
*/

// =====================================================
// DANBI PAYMENT
// PayPal + Naver Pay
// =====================================================

const PAYMENT_SERVER =
  "https://여기에-결제서버주소";


/* =========================================================
   DANBI DONATION AMOUNT
   후원금액 선택 시스템
========================================================= */


/* =========================================================
   1. 실제 선택 금액
   기준값은 항상 KRW
========================================================= */

let selectedDonationAmountKRW = 10000;

/* 현재 언어 가져오기 */

function getCurrentLanguage() {

  const language =
    localStorage.getItem("danbiLanguage");

  if (
    language &&
    translations[language]
  ) {
    return language;
  }

  return "ko";
}

/* =========================================================
   후원금 금액 선택
========================================================= */

function setDonationAmount(amount) {

  selectedDonationAmountKRW =
    Number(amount);


  /* 모든 버튼 active 제거 */

  document
    .querySelectorAll(".donation-amount-button")
    .forEach(function(button) {

      button.classList.remove("active");

    });


  /* 현재 선택한 버튼 active */

  const selectedButton =
    document.querySelector(
      `.donation-amount-button[data-amount="${amount}"]`
    );


  if (selectedButton) {

    selectedButton.classList.add("active");

  }


  /* 선택 금액 표시 */

  updateSelectedDonationDisplay(
    getCurrentLanguage()
  );

}

/* =========================================================
   후원금 버튼 클릭 연결
========================================================= */

document
  .querySelectorAll(".donation-amount-button")
  .forEach(function(button) {

    button.addEventListener(
      "click",
      function() {

        const amount =
          Number(
            button.getAttribute("data-amount")
          );

        setDonationAmount(amount);

      }
    );

  });
/* =========================================================
   2. 언어별 표시 금액
   환율 계산하지 않음
   각 언어마다 보기 좋은 금액을 직접 지정
========================================================= */

const donationDisplayAmounts = {

  ko: {

    10000: "1만원",
    50000: "5만원",
    100000: "10만원",
    500000: "50만원",
    1000000: "100만원",
    3000000: "300만원",
    5000000: "500만원"

  },


  en: {

    10000: "$10",
    50000: "$50",
    100000: "$100",
    500000: "$500",
    1000000: "$1,000",
    3000000: "$3,000",
    5000000: "$5,000"

  },


  fr: {

    10000: "10 €",
    50000: "50 €",
    100000: "100 €",
    500000: "500 €",
    1000000: "1 000 €",
    3000000: "3 000 €",
    5000000: "5 000 €"

  }

};

function updateDonationButtonLanguage(language) {

  const labels =
    donationButtonLabels[language];

  if (!labels) {
    return;
  }


  document
    .querySelectorAll(".donation-amount-button")
    .forEach(function(button) {

      const amount =
        button.getAttribute("data-amount");

      const text =
        button.querySelector(
          ".donation-amount-text"
        );


      if (
        text &&
        labels[amount]
      ) {

        text.textContent =
          labels[amount];

      }

    });

}
/* =========================================================
   3. 후원금액 표시
========================================================= */

function formatDonationAmount(
  amountKRW,
  language
) {

  const languageAmounts =
    donationDisplayAmounts[language];


  if (
    languageAmounts &&
    languageAmounts[amountKRW]
  ) {

    return languageAmounts[amountKRW];

  }


  /* 예외 상황 */

  if (language === "en") {

    return "$" +
      Number(amountKRW)
        .toLocaleString("en-US");

  }


  if (language === "fr") {

    return Number(amountKRW)
      .toLocaleString("fr-FR") +
      " €";

  }


  return Number(amountKRW)
    .toLocaleString("ko-KR") +
    "원";

}


/* =========================================================
   4. 선택된 후원금 표시
========================================================= */

function updateSelectedDonationDisplay(
  language
) {

  const element =
    document.getElementById(
      "selectedDonationAmount"
    );


  if (!element) {

    return;

  }


  element.textContent =
    formatDonationAmount(
      selectedDonationAmountKRW,
      language
    );

}


/* =========================================================
   5. 후원금액 버튼 언어 변경
========================================================= */

function updateDonationAmountButtons(
  language
) {

  const buttons =
    document.querySelectorAll(
      ".donation-amount-button"
    );


  buttons.forEach(
    function(button) {

      const amount =
        Number(
          button.dataset.amount
        );


      const textElement =
        button.querySelector(
          ".donation-amount-text"
        );


      if (
        !textElement
      ) {

        return;

      }


      textElement.textContent =
        formatDonationAmount(
          amount,
          language
        );

    }
  );

}


/* =========================================================
   6. 후원금액 선택
========================================================= */

function setDonationAmount(
  amount
) {

  const numericAmount =
    Number(amount);


  /* 잘못된 값 방지 */

  if (
    !Number.isFinite(
      numericAmount
    ) ||
    numericAmount <= 0
  ) {

    return;

  }


  /* 실제 선택 금액 저장 */

  selectedDonationAmountKRW =
    numericAmount;


  /* 모든 버튼 선택 해제 */

  const buttons =
    document.querySelectorAll(
      ".donation-amount-button"
    );


  buttons.forEach(
    function(button) {

      button.classList.remove(
        "active"
      );

    }
  );


  /* 현재 선택된 버튼 */

  const selectedButton =
    document.querySelector(
      '.donation-amount-button[data-amount="' +
      numericAmount +
      '"]'
    );


  if (selectedButton) {

    selectedButton.classList.add(
      "active"
    );

  }


  /* 현재 언어 */

  const language =
    localStorage.getItem(
      "danbiLanguage"
    ) || "ko";


  /* 선택 금액 표시 */

  updateSelectedDonationDisplay(
    language
  );

}


/* =========================================================
   7. 전역 함수로 등록
   HTML onclick에서도 사용할 수 있도록 함
========================================================= */

window.setDonationAmount =
  setDonationAmount;


/* =========================================================
   8. 후원금액 버튼 초기화
========================================================= */

function initializeDonationAmountButtons() {

  const buttons =
    document.querySelectorAll(
      ".donation-amount-button"
    );


  if (!buttons.length) {

    return;

  }


  /* 버튼 클릭 이벤트 */

  buttons.forEach(
    function(button) {

      button.addEventListener(
        "click",
        function(event) {

          event.preventDefault();


          const amount =
            Number(
              button.dataset.amount
            );


          setDonationAmount(
            amount
          );

        }
      );

    }
  );


  /* 기본 선택 */

  setDonationAmount(
    selectedDonationAmountKRW
  );


  /* 현재 언어 적용 */

  const language =
    localStorage.getItem(
      "danbiLanguage"
    ) || "ko";


  updateDonationAmountButtons(
    language
  );


  updateSelectedDonationDisplay(
    language
  );

}


/* =========================================================
   9. 언어 변경 후 호출용
========================================================= */

function refreshDonationAmountLanguage(
  language
) {

  updateDonationAmountButtons(
    language
  );


  updateSelectedDonationDisplay(
    language
  );

}


/* =========================================================
   10. 페이지 로딩
========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    function() {

      initializeDonationAmountButtons();

    }
  );

} else {

  initializeDonationAmountButtons();

}