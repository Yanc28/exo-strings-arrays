str1 = `In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.`

// Replace "Alice" with "Yanis" in the whole text
str2 = str1.replace(/Alice/gi, `Yanis`);

console.log(str2)

