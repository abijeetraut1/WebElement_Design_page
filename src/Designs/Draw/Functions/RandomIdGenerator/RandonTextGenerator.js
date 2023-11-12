export function RandomTextGenerator() {
    const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let generatedText;
    for (let i = 0; i < 6; i++) {
        generatedText = generatedText === undefined 
            ? text[Math.floor(Math.random() * text.length)] 
            : generatedText + text[Math.floor(Math.random() * text.length)];
    }
}