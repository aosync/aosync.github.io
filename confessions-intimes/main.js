async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

$(function(){
    $('#btn').click(async function(){
        let link = "https://discord.com/api/webhooks/806190366222712903/C9Ygjr4CooAOy7TbkwluerkLJ8ujB5F9-pdqJ4GxyvozeM_rQoa-58pgL3meb4L1hGon";
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
	  case "X":
	    url = "https://cdn.discordapp.com/avatars/698509588168966164/de350dab1b4432823485eddba8d502fa.png";
	    break;
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
