import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const ProductsDetailsPage = () => {
  const {id} = useParams()
  const [product, setproduct] = useState({})
  const navigate = useNavigate()

  const getdata = ()=> {
    axios.get(`http://localhost:3001/products/${id}`).then((res)=>{
        console.log(res)
      setproduct(res.data)
    }).catch((error)=>{
      navigate("*")
    })
  }
  useEffect(()=>{
  getdata()
  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={product.image} height="250px" width="300px" alt="" / >
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
