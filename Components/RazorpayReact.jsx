import React from "react";

const RazorpayReact = () => {
  // Replace this with your actual Razorpay Key ID
  const RAZORPAY_KEY_ID = "rzp_test_DE46VIVQUwPF9T";

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_DE46VIVQUwPF9T", // Enter the Key ID generated from the Dashboard
      amount: 5000, // Amount is in currency subunits. 50000 = 500.00 INR
      currency: "INR",
      name: "Our Blooms",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // Optional: replace with your logo
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // You can also send this response to your backend for verification
      },
      prefill: {
        name: "Raushan kumar",
        email: "raushankumarsam500@gmail.com",
        contact: "7065508384",
      },
      notes: {
        address: "Swatantra Nagar Our Blooms Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button className="bg-amber-600 px-4 py-2 rounded-4xl font-semibold hover:bg-amber-700 hover:scale-110 transition-all duration-300" onClick={handlePayment} >
        Pay consultation fee
      </button>
    </div>
  );
};

export default RazorpayReact;
