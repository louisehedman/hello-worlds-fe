import React from "react";

function ImgComp({ src }:any) {
    let imgStyles= {
        width: 50 + "%",
        height: "auto"
    }

    return <img src={src} className="slideImg" style={imgStyles} alt="slide-img" />
}

export default ImgComp;