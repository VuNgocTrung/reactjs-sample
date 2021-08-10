import MainList from "./components/MainList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [mainList, setMainList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setMainList([...mainList, { id: v4(),name: textInput, isCompled: false}]);
  };

  return (
    <>
    <h3>Facebook Post</h3>
    <Textfield name ='add-post' placeholder='Ban dang nghi gi... ' elemAfterInput={
      <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>
        Post
      </Button>
    } 
    css={{padding: "2px 4px 2px"}}
    value={textInput}
    onChange={onTextInputChange}
    ></Textfield>
    <MainList mainList={mainList} />
    </>
  )
}

export default App;