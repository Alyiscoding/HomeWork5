// alert("hi")
function task1() {

    let hoverCount = 0;
    const body = document.body;
    const divv = document.getElementById("hoverMe");
    divv.addEventListener("mouseover", function () {
        hoverCount++;
        for (let i = 0; i <= 10; i++) {
            console.log(hoverCount);
        }
        if (hoverCount > 10) {
            body.style.backgroundColor = "red";
            body.style.color = "black";
            alert("You are the Anoymous User!!!!!");

            hoverCount = 0;
        }

    });
    return false;
}


function Task2() {
    async function task2() {
        const getName = document.getElementById("name");
        let name = getName.value;
        console.log(getName);

        let newDiv = document.getElementById("getting");
        newDiv.innerText = "Getting your name ..."

        await new Promise((resolve) => {
            setTimeout(() => {
                newDiv.innerText = "Hi, " + name + "! Have a Nice Day.";
                // resolve("Success");
            }, 1000);
        })
    }
    task2();
    return false;
}

// newDiv.innerHTML = ('Your name is ${getname}.');