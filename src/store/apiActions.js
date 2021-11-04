import { createAction } from "@reduxjs/toolkit";

export const apiCallBegain = createAction("api/CallBegain");
export const apiCallRecived = createAction("api/CallRecived");
export const apiCallFailed = createAction("api/CallFailed");
