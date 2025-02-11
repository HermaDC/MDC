import React from "react";
import {Header, Footer} from "../common/headerFooter";
import "./downloads.css";

function DownloadCard({title, description, link}){
    return(
        <div className="download-card">
            <div className="download-card-header">
                <h2>{title}</h2>
                <a href={link} download={link}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg></a>
            </div>
            <p>{description}</p>
        </div>
    );
}

function Downloads(){
    return(
        <div>
            <Header/>
            <DownloadCard title={"loreradsfsdaf"} description={"fgfdgdf"} link={"fdsf"}/>
            <DownloadCard title={"loreradsfsdaf"} description={"dsfsad"}link={"fdsf"}/>
            <DownloadCard title={"loreradsfsdaf"} description={"dsfdsfs"}link={"fdsf"}/>
            <Footer/>
        </div>
    );
}
export default Downloads;