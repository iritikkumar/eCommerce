import React from 'react'

const Success = () => {
  return (
    <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}
    >
    <div style = {{
        fontSize: "60px"       
    }}
    >🎉</div>
    <div style = {{
        border: "none",
        width: "120",
        borderRadius: 5,
        padding: "20px",
        backgroundColor: "teal",
        color: "white",
        fontWeight: "600",
        fontSize: "20px",
        corsor: "pointer",
        margin: "10px"
        }}
    >  
        Successfull. 
    </div>
    
    <div style = {{ 
        fontSize: "18px"
    }}>Your order is being prepared. Thanks for choosing Ritik Shop.</div>
    </div>
  );
};

export default Success;