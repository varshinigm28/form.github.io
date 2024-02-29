const display = document.querySelector(".display");
const b1 = document.querySelectorAll("button");
const chars=["%","*","/","-","+","="];
let output = "";

const calu=(btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue ==="AC"){
        output = "";
    }
    else if(btnValue =="DEL"){
        output=output.toString().slice(0, -1);
    }
    else{
        if(output === "" && chars.includes(btnValue)) return;
        output +=btnValue;
    }
    display.value = output;
};

b1.forEach((button)=> {
    button.addEventListener("click", (e) => calu(e.target.dataset.value));
});