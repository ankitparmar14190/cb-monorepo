"use client";

import React, { useState } from "react";
import Header from "../header/page";
import IframeComponent from "../components/iframe";

const IframeApp = () => {


    return (
        <div className="news">
            <Header />
            <IframeComponent />
        </div>

    );
};

export default IframeApp;