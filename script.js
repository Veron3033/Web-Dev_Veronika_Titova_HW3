const grid = document.getElementById("grid");

function generateDivs() {
    grid.innerHTML = "";

    const start = Number(document.getElementById("start").value);
    const end   = Number(document.getElementById("end").value);
    const fizz  = Number(document.getElementById("fizz").value);
    const buzz  = Number(document.getElementById("buzz").value);

    for (let i = start; i <= end; i++) {
        const div = document.createElement("div");
        div.id = `myid${i}`;
        div.classList.add("box");

        const fizzMatch = i % fizz === 0;
        const buzzMatch = i % buzz === 0;

        if (fizzMatch && buzzMatch) {
            div.classList.add("fizzbuzz");
            div.innerText = "FizzBuzz";
        } else if (fizzMatch) {
            div.classList.add("fizz");
            div.innerText = "Fizz";
        } else if (buzzMatch) {
            div.classList.add("buzz");
            div.innerText = "Buzz";
        } else {
            div.classList.add("number");
            div.innerText = i;
        }

        grid.appendChild(div);
    }
}

document.getElementById("generate").addEventListener("click", generateDivs);
document.getElementById("clear").addEventListener("click", () => grid.innerHTML = "");

// auto-generate on load
generateDivs();
