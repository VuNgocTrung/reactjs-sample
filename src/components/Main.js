import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";

export default function Main({main}) {
    return <Button shouldFitContainer>{main.name}</Button>
}