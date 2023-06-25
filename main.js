const cammel = document.querySelector("#cammel");

appendEndless();

function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        cammel.append(br);
        cammel.append(`        | | \\ \\___| |\\__,_|\\  | |\\   /| | | |___/ | | | | |`);
    }
}

for (let index = 0; index < 200; index++) {
    const br = document.createElement("br");
    cammel.append(br);
    cammel.append(` `);
}