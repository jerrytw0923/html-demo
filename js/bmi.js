function getComment(bmi) {
    let comment, color;
    if (bmi < 18.5) {
        comment = "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！";
        color = "#1e90ff";

    } else if (bmi < 24) {
        comment = "恭喜！「健康體重」，要繼續保持！";
        color = "green";
    } else if (bmi < 27) {
        comment = "「體重過重」了，要小心囉，趕快力行「健康體重管理」！";
        color = "orange";
    } else {
        comment = "啊～「肥胖」，需要立刻力行「健康體重管理」囉！";
        color = "red";
    }

    return [comment, color];
}


// 函式宣告
function getBmi(height, weight) {
    const bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);
}