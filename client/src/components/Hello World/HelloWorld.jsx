import { useState } from "react";
import Hello from "./Hello";
import Text from "./Text";
function HelloWorld() {

    const [value, setValue] = useState("?");
    return (
        <>
        <Hello value={value}/>
        <Text setValue={setValue}/>
        </>
    );
}
  
export default HelloWorld;
