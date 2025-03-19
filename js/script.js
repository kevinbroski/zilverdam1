document.addEventListener("DOMContentLoaded", function () {
    console.log("Sky Roleplay Website Loaded!");
});

function showRule(ruleId) {
    // Verberg alle regels
    const allRules = document.querySelectorAll('.apv-rule');
    allRules.forEach(rule => rule.classList.remove('active'));

    // Toon de gekozen regel
    document.getElementById(ruleId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    let statusText = document.getElementById("status-text");
    
    // Manueel instellen van de status
    let serverStatus = "online"; // Opties: online, offline, problemen

    if (serverStatus === "online") {
        statusText.innerHTML = "🟢 Server is Online";
        statusText.style.color = "green";
    } else if (serverStatus === "offline") {
        statusText.innerHTML = "🔴 Server is Offline";
        statusText.style.color = "red";
    } else {
        statusText.innerHTML = "🟡 Er zijn problemen met de server";
        statusText.style.color = "orange";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let statusText = document.getElementById("status-text");

    // Simpele server status
    let serverStatus = "online"; // Opties: online, offline, problemen

    if (serverStatus === "online") {
        statusText.innerHTML = "🟢 Server is Online";
        statusText.style.color = "green";
    } else if (serverStatus === "offline") {
        statusText.innerHTML = "🔴 Server is Offline";
        statusText.style.color = "red";
    } else {
        statusText.innerHTML = "🟡 Er zijn problemen met de server";
        statusText.style.color = "orange";
    }

    // Server Status Grafiek
    let ctx = document.getElementById("serverChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["10 maart", "11 maart", "12 maart", "13 maart", "14 maart", "15 maart", "16 maart"],
            datasets: [{
                label: "Server Online Tijd",
                data: [1, 1, 0, 1, 1, 0, 1], // 1 = Online, 0 = Offline
                borderColor: "white", // Witte lijnen
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: "white",
                pointBorderColor: "white",
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: { color: "white" },
                    grid: { color: "rgba(255, 255, 255, 0.3)" }
                },
                y: {
                    ticks: { color: "white", stepSize: 1, beginAtZero: true },
                    grid: { color: "rgba(255, 255, 255, 0.3)" }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "white" }
                }
            }
        }
    });
});
