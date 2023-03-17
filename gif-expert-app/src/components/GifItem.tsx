import React from "react";

export const GifItem = ({gifData} : any) : JSX.Element => {
    return (
      <>
          <div className="container-fluid">
              <img src={gifData.url} alt={gifData.title}/>
              <h4>{gifData.title}</h4>
          </div>
      </>
    );
}