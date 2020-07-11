async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

$(function(){
    $('#btn').click(async function(){
        let link = "https://discordapp.com/api/webhooks/698509588168966164/QeIGelZ2E1PtFgMQyKmB2p1E5RZBx1kOfTSeK-5_XbkH6YV70S4wwSL1w7fvmEeQqmeC";
        let content = $('#content').val();
        let chunks = [];
        while (content.length > 2000) {
            chunks.push(content.slice(0, 2000));
            content = content.slice(2000);
        }
        chunks.push(content);
        let as = $('#as').val();
        let url = null;
        switch (as) {
          case "Y":
            url = "https://cdn.discordapp.com/attachments/656486582529818637/698573492777648128/unknown.png";
            break;
          case "Z":
            url = "https://cdn.discordapp.com/attachments/656486582529818637/698573752501534890/d102bb8e85c4a8a7a4e29e9a701e6391.png";
            break;
          case "W":
            url = "https://cdn.discordapp.com/attachments/656486582529818637/698574178877571132/186px-Latin_W.png";
            break;
        }
        $('#content').val("");
        for (let i = 0; i < chunks.length; i++) {
            console.log(chunks[i]);
            while (true) {
                try {
                    await $.post(link, {"content": chunks[i], "username": as, "avatar_url": url});
                    break;
                }
                catch (e) {
                    await delay(4000);
                }
            }
        }
    });
});
