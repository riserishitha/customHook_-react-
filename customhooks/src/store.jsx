import { useState } from "react";
function StoringData(a){
    const [state, setstate] = useState(a);
    const inputinStroage = (e)=>{
        setstate(e);
        localStorage.setItem("input", JSON.stringify(e));
        sessionStorage.setItem("input", JSON.stringify(e));
    };
    return [state, inputinStroage]
}
export default StoringData;