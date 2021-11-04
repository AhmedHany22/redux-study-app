import { createAction } from "@reduxjs/toolkit";

export const apiCallBegain = createAction("api/CallBegain");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");
