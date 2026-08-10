async function trackOnlinePlayers(serverIP) {
    try {
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/mc.noodlebox.cc`);
        const data = await response.json();

        if (!data.online) {
            console.log("Server is offline.");
            return;
        }

        const count = data.players.online;
        const max = data.players.max;
        const playerSpan = document.getElementById("playersOnline");
        const countSpan = document.getElementById("player-count");

        console.log(`Players online: ${count}/${max}`);
        countSpan.textContent = `${count} / ${max}`;

        const playerList = data.players.list || [];
        if (playerList.length > 0) {
            playerSpan.innerHTML = playerList.map(player => `${player.name_raw}`).join('<br>');
        } else {
            playerSpan.textContent = "No players online";
            console.log("No player names returned (either empty or disabled by server).");
        }
    } catch (error) {
        console.error("Error tracking players:", error);
    }
}

trackOnlinePlayers("mc.noodlebox.cc");
setInterval(updatePlayerCount, 5000);
setInterval(trackOnlinePlayers, 5000);