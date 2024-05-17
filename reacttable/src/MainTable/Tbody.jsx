import React from "react";
import productData from "./productData";
import '../style/Tbody.css'

const Tbody = () => {
    ;
  return (
    <tbody className="tbody">
      {productData.map((data,i) => {
        const status= data.Status   
          return (
    <tr className="tableData">
            <td key={i++} className="data"  >{data.TrackingId}</td>
            <td key={i++}className="data">
                <img className="productImage"src={`${data.ProductImage}`} alt="productImage"></img>
<div className={"productData"}>{data.Product}</div>
                
                </td>
            <td key={i++}className="data">{data.Customer}</td>
            <td key={i++}className="data">{data.Date}</td>
            <td key={i++}className="data">{data.Amount}</td>
            <td key={i++}className="data">{data.PaymentMode}</td>
            <td key={i++}className={"data"}><div className={`${status}`}>

                {data.Status}
            </div>
                </td>
            <td className="data"><img src="/Images/edit (1) 2.svg" alt="edit"/>
            <img src="/Images/trash-2 2.svg" alt="delete"/>
            </td>
    </tr>
        );
    })}
    </tbody>
  );
};

export default Tbody;
