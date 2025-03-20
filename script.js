let steps = 0;

// Kiểm tra nếu thiết bị hỗ trợ cảm biến
if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", function(event) {
        let acceleration = event.accelerationIncludingGravity;
        if (acceleration.x > 2 || acceleration.y > 2 || acceleration.z > 2) {
            steps++;
            document.getElementById("stepCount").innerText = steps;
            updateLeaderboard();
        }
    });
} else {
    alert("Thiết bị không hỗ trợ cảm biến đếm bước chân.");
}

// Danh sách người dùng giả lập (có thể kết nối Firebase)
let leaderboard = [
    { name: "Người A", steps: 120 },
    { name: "Người B", steps: 90 },
    { name: "Bạn", steps: 0 }
];

// Cập nhật bảng xếp hạng
function updateLeaderboard() {
    leaderboard[2].steps = steps;
    leaderboard.sort((a, b) => b.steps - a.steps);

    let list = document.getElementById("leaderboard");
    list.innerHTML = "";
    leaderboard.forEach(user => {
        let item = document.createElement("li");
        item.textContent = `${user.name}: ${user.steps} bước`;
        list.appendChild(item);
    });
}

updateLeaderboard();
