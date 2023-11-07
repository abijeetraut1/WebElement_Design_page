const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let generatedText = [];
    for (let i = 0; i < 6; i++) {
        generatedText.push(text[Math.random() * text.length]);
    }
    console.log(generatedText);