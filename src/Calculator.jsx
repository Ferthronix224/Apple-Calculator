import React, {useState} from "react";
import negative_img from "./assets/negative.png";
import erase_img from "./assets/erase.png";
import division_img from "./assets/division.png";

function Calculator(){
    const [number, set_number] = useState("0");
    const [something, set_something] = useState(false);

    function one() {
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "1";
            }
            return prev + "1";
        });
    }

    function two(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "2";
            }
            return prev + "2";
        });
    }

    function three(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "3";
            }
            return prev + "3";
        });
    }

    function four(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "4";
            }
            return prev + "4";
        });
    }

    function five(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "5";
            }
            return prev + "5";
        });
    }

    function six(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "6";
            }
            return prev + "6";
        });
    }

    function seven(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "7";
            }
            return prev + "7";
        });
    }

    function eight(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "8";
            }
            return prev + "8";
        });
    }

    function nine(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "9";
            }
            return prev + "9";
        });
    }

    function zero(){
        set_number(prev => {
            if (prev === "0") {
                set_something(!something);
                return "0";
            }
            return prev + "0";
        });
    }


    function division(){
        set_number(prev => {
            if (prev === "0") {
                return "0";
            }
            return prev + "÷";
        });
    }

    function multiplication(){
        set_number(prev => {
            if (prev === "0") {
                return "0";
            }
            return prev + "*";
        });
    }

    function substraction(){
        set_number(prev => {
            if (prev === "0") {
                return "0";
            }
            return prev + "-";
        });
    }

    function addition(){
        set_number(prev => {
            if (prev === "0") {
                return "0";
            }
            return prev + "+";
        });
    }

    function erase(){
        set_number(prev => {
            if (prev.length > 1) {
                return prev.slice(0, -1)
            } else {
                set_something(!something);
                return "0"
            }
        })
    }

    function reboot(){
        set_something(!something);
        set_number("0")
    }

    function percentage(){
        set_number(prev => {
            if (!prev.includes("%")){
                return `${prev}%`            
            } else {
                return `(${prev})%`
            }
        })
    }

    function negative(){
        set_number(num => {
            return `-(${num})`
        })
    }

    function dot() {
    set_number(prev => {

        // Separar por operadores
        const partes = prev.split(/[\+\-\*\/]/);

        // Último número escrito
        const ultimo = partes[partes.length - 1];

        // Si el último número ya tiene punto, no agregar otro
        if (ultimo.includes(".")) {
            return prev;
        }

        // Si el último número está vacío (acabamos de poner un operador)
        if (ultimo === "") {
            return prev + "0.";
        }

        // Caso normal
        return prev + ".";
        });
    }

    function getDynamicFontSize(value) {
    const len = value.length;

    if (len < 8) return "48px";      // normal grande
    if (len < 12) return "38px";
    if (len < 16) return "30px";
    if (len < 20) return "24px";
    if (len < 26) return "20px";

    return "16px"; // muy largo
    }


    function result(){        
        set_number(num => {
            let fixed = num.replace(/%/g, "*0.01");             
            fixed = num.replace(/÷/g, "/");             
            return eval(fixed)
        });
    }

    return(
        <>
        <div>
            <h2>{number}</h2>
            <div className="calc-row">
                <button className="gray-button" onClick={erase} style={{backgroundImage: `url(${erase_img})`,backgroundSize: "30px 30px",backgroundPosition: "center",backgroundRepeat: "no-repeat",border: "none"}}></button>
                <button className="gray-button" onClick={reboot} style={{alignItems: "center",justifyContent: "center", display:"flex"}}>{something ? "CA" : "C"}</button>
                <button className="gray-button" onClick={percentage}>%</button>
                <button className="orange-button" onClick={division} style={{backgroundImage: `url(${division_img})`,backgroundSize: "15px 15px",backgroundPosition: "center",backgroundRepeat: "no-repeat",border: "none"}}></button>
            </div>
            <div className="calc-row">
                <button onClick={seven}>7</button>
                <button onClick={eight}>8</button>
                <button onClick={nine}>9</button>
                <button className="orange-button" onClick={multiplication}>x</button>
            </div>
            <div className="calc-row">
                <button onClick={four}>4</button>
                <button onClick={five}>5</button>
                <button onClick={six}>6</button>
                <button className="orange-button" onClick={substraction}>-</button>
            </div>
            <div className="calc-row">
                <button onClick={one}>1</button>
                <button onClick={two}>2</button>
                <button onClick={three}>3</button>
                <button className="orange-button" onClick={addition}>+</button>
            </div>
            <div className="calc-row">
                <button onClick={negative} style={{backgroundImage: `url(${negative_img})`,backgroundSize: "30px 30px",backgroundPosition: "center",backgroundRepeat: "no-repeat",border: "none"}}></button>
                <button onClick={zero}>0</button>
                <button onClick={dot}>.</button>
                <button className="orange-button" onClick={result}>=</button>
            </div>
        </div>        
        </>
    );
}

export default Calculator