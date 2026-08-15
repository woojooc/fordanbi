// ==========================================
// 단비 후원 페이지 설정
// ==========================================

const FUND_TARGET = 10000000;

// 실제 현재 모금액을 입력하세요.
const CURRENT_AMOUNT = 0;


// ==========================================
// 모금 현황
// ==========================================

function updateFund() {

  const percentElement =
    document.getElementById("percent");

  const currentElement =
    document.getElementById("currentAmount");

  const progressElement =
    document.getElementById("progressBar");

  if (!percentElement ||
      !currentElement ||
      !progressElement) {
    return;
  }

  const percentage =
    Math.min(
      100,
      Math.round(
        (CURRENT_AMOUNT / FUND_TARGET) * 100
      )
    );

  percentElement.textContent =
    `${percentage}%`;

  currentElement.textContent =
    `${CURRENT_AMOUNT.toLocaleString("ko-KR")}원`;

  progressElement.style.width =
    `${percentage}%`;
}


// ==========================================
// 계좌번호 복사
// ==========================================

document
  .getElementById("copyAccount")
  ?.addEventListener("click", async () => {

    // 실제 공개할 계좌번호를 입력하세요.
    const accountNumber = "여기에 계좌번호 입력";

    try {

      await navigator.clipboard.writeText(
        accountNumber
      );

      alert(
        "후원 계좌번호가 복사되었습니다."
      );

    } catch (error) {

      alert(
        "계좌번호 복사에 실패했습니다."
      );

    }

  });


// ==========================================
// 온라인 후원 버튼
// ==========================================

document
  .getElementById("paymentButton")
  ?.addEventListener("click", () => {

    alert(
      "온라인 결제 시스템을 준비하고 있습니다.\n\n" +
      "결제 서비스가 연결되면 이 버튼을 통해 " +
      "안전한 결제 페이지로 이동합니다."
    );

  });


// ==========================================

updateFund();