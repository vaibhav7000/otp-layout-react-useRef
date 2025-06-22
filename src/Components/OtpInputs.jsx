import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function OtpInputs() {

    const inputBox1 = useRef();
    const inputBox2 = useRef();
    const inputBox3 = useRef();
    const inputBox4 = useRef();

    // we will not mantain any state_variable for maintaining the value present inside the inputs because we get the values using their reference present inside the inputBox...

    // when the component mounts / renders for the 1st time We want the first input to become in focus
    useEffect(function() {
        inputBox1Focus()
    }, []);

    // this function will be only created once when the component renders / mounts on screen
    const inputBox1Focus = useCallback(function() {
        inputBox1.current.focus();
    }, [])


    return (
        <div className="wrapper" style={{
            display: "flex", flexDirection: "column", gap: 30
        }}>
            <div className="otp-container" style={{
                display: "flex", flexDirection: "row", gap: 20
            }}>
                <input maxLength={"1"} type="text" ref={inputBox1} style={{
                    height: 30, width: 30, borderRadius: 20, border: "1px solid rgb(185, 183, 183)", textAlign: "center"
                }} onInput={(event) => {
                    const value = event.target.value;
                    if(value) {
                        inputBox2.current.focus();
                        return;
                    }
                }}/>
                <input maxLength={"1"} type="text" ref={inputBox2} style={{
                    height: 30, width: 30, borderRadius: 20, border: "1px solid rgb(185, 183, 183)", textAlign: "center"
                }} onInput={(event) => {
                    const value = event.target.value;
                    if(!value) {
                        inputBox1.current.focus()
                        return
                    }
                    inputBox3.current.focus()
                }} />
                <input maxLength={"1"} type="text" ref={inputBox3} style={{
                    height: 30, width: 30, borderRadius: 20, border: "1px solid rgb(185, 183, 183)", textAlign: "center"
                }} onInput={(event) => {
                    const value = event.target.value;
                    if(!value) {
                        inputBox2.current.focus();
                        return
                    } 
                    inputBox4.current.focus();
                } } />
                <input maxLength={"1"} type="text" ref={inputBox4} style={{
                    height: 30, width: 30, borderRadius: 20, border: "1px solid rgb(185, 183, 183)", textAlign: "center"
                }} onInput={(event) => {
                    const value = event.target.value;
                    if(!value) {
                        inputBox3.current.focus()
                        return;
                    }
                }} />
            </div>
        </div>
    )
}