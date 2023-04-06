let string = "exemplo",
    invert = ""

for (let i = string.length - 1; i >= 0; i--) {
        invert += string[i];
}

console.log("\n", invert);