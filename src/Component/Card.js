
// import React from 'react';

// const getStyles = () => {
//   return {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gridTemplateRows: "1fr",
//       gridGap: "16px",
//       justifyContent: "center",
//       alignItems: "center"
//   }
// }


// const Card = (props) => {
//   return (
//     <div className="card-container" style={getStyles()}>
//       <div className="card" >
//         <img src={props.imagelink} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{props.head}</h5>
//           <p className="card-text">
//            {props.info}
//           </p>
//           <a href={props.link} className="btn btn-primary">More info</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card;
import React from 'react';

const getStyles = () => {
  return {
    margin:"6%",
      // display: "grid",
      // gridTemplateColumns: "repeat(3, 1fr)",
      // gridTemplateRows: "1fr",
      // gridGap: "16px",
      // justifyContent: "center",
      // alignItems: "center",
      
      transition:"all 0.4s cubic-bezier(0.175,0.885,0,1)",
      backgroundColor:"#fff",
      width:"21.25%",
      borderRadius:"12px",
      boxShadow:"0px 13px 10px -7px rgba(0,0,0,0.1)",
      float:"left"
  }
}

const cards= () => {
  return {

      width:"100%",
      height: "auto"
  }
}
const Card = ({imagelink, head, info, link}) => (
    <div className="cards" style={cards()} >
      <div className="card" style={getStyles()} >
        <img src={imagelink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{head}</h5>
          <p className="card-text">
           {info}
          </p>
          <a href={link} className="btn btn-primary">More info</a>
        </div>
      </div> v
    </div>
);

export default Card;
