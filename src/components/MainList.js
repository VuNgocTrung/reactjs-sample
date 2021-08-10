import React from "react";
import Button from "@atlaskit/button";
import Main from "./Main";


export default function MainList({mainList}) {
    return (
        <>
        {
            mainList.map((main) => (
            <Main main={main} />))
        }
        </>
    );
}