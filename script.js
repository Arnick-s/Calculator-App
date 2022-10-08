
let style1_path = "style1.css"
let style2_path = "style2.css"
let style3_path = "style3.css"

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = style1_path;

let head = document.getElementsByTagName('head')[0];
head.appendChild(link);

let curr_theme;

function apply_style1(){
    curr_theme = 1;
    link.href = style1_path;
}
function apply_style2(){
    curr_theme = 2;
    link.href = style2_path;
}
function apply_style3(){
    curr_theme = 3;
    link.href = style3_path;
}

function clicking_effect(btn_id){
    const btn_element = document.getElementById(btn_id);
    
    btn_element.style.filter = "brightness(50%)";
    
    setTimeout(function () {
        btn_element.style.filter = "brightness(100%)";
    }, 50);
}

apply_style1();

let screen = document.getElementsByClassName("screen")[0];
screen.innerText = "";

const buttons = document.querySelectorAll("button");
const cal_symbols = new Set([".","+","-","*","/"]);
let decimal = false;
let prev = "+";

buttons.forEach((btn) => {
    btn.onclick = () => {
        if(btn.id == "DEL"){
            clicking_effect(btn.id);
            let str = screen.innerText;
            if(str.slice(-1) == "."){
                console.log( ". hi");
                decimal = false;

            }
            screen.innerText = str = str.substr(0,str.length-1);
            
            

            if(str.length == 0 )
            {
                prev = "+";
                
            }
            else{
                prev = str.slice(-1);
            }
            
        }
        else if(btn.id == "RESET"){
            clicking_effect(btn.id);
            screen.innerText = "";
            prev = "+";
            decimal = false;
            
        }
        else if(btn.id == "equal"){
            clicking_effect(btn.id);
            let str = screen.innerText;
            let final_val = eval(str);
            screen.innerText = final_val;
        }
        else{

            if(!(cal_symbols.has(prev) && cal_symbols.has(btn.id))&&( (btn.id == "." && decimal == false )|| btn.id != "."))
            {
                screen.innerText += btn.id;
                prev = btn.id;

                console.log (prev);

                if(btn.id == "."){
                    decimal = true;
                }
                else if(cal_symbols.has(btn.id)){
                    console.log("got a symbol");
                    decimal = false;
                }
                
            }
            clicking_effect(btn.id);
        }
        
        
    }
})



const accepted_key_strokes = new Set(["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/",]);



document.addEventListener("keydown", (event) => {
    document.activeElement.blur();   

    let curr_key_stroke = event.key;
    let curr_key_code = event.code;
    
    let btn_id = curr_key_stroke;
    
    if(curr_key_stroke == "c"){
        clicking_effect("RESET");
        screen.innerText = "";
        prev = "+";
        decimal = false;
    }
    else if(curr_key_stroke == "t"){
        btn_id = null;
        if(curr_theme == 1)
            apply_style2();
        else if( curr_theme == 2)
            apply_style3();
        else if( curr_theme == 3)
            apply_style1();
        }
        else if(curr_key_stroke == "Backspace"){
            btn_id = "DEL";
            clicking_effect(btn_id);
            let str = screen.innerText;
            if(str.slice(-1) == "."){
                decimal = false;
            }
            screen.innerText = str = str.substr(0,str.length-1);

            if(str.length == 0 )
            {
                prev = "+";
                
            }
            else{
                prev = str.slice(-1);
            }
        }
        else if(curr_key_stroke == "Enter"){
            btn_id = "equal";
            clicking_effect(btn_id);
            let evaluated_val = eval(screen.innerText);
            if(evaluated_val == undefined){
                evaluated_val = "";
            }
            screen.innerText = evaluated_val;
            prev = curr_key_stroke;
        }
        else if(accepted_key_strokes.has(curr_key_stroke)){
            clicking_effect(btn_id);
            btn_id = curr_key_stroke;
            if(!(cal_symbols.has(prev) && cal_symbols.has(curr_key_stroke))&& (curr_key_stroke == "."&&decimal == false || curr_key_stroke != ".") )
            {
                screen.innerText += curr_key_stroke;
                prev = curr_key_stroke;
                
                if(curr_key_stroke == "."){
                    decimal = true;
                }
                else if(cal_symbols.has(curr_key_stroke)){
                    decimal = false;
                }
            }
    }

    


//     if(!(cal_symbols.has(prev) && cal_symbols.has(btn.id)))
//     {
//         if( (btn.id == "." && decimal == false )|| btn.id != ".")
//         {
//             screen.innerText += btn.id;
//             prev = btn.id;

//             console.log (prev);

//             if(btn.id == "."){
//                 decimal = true;
//             }
//         }
//     }
//     clicking_effect(btn.id);
// }

    
    
});

const box1 = document.getElementsByClassName("box1")[0];
box1.onclick = () => {
    apply_style1();
}
const box2 = document.getElementsByClassName("box2")[0];
box2.onclick = () => {
    apply_style2();
}
const box3 = document.getElementsByClassName("box3")[0];
box3.onclick = () => {
    apply_style3();
}

