import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
function Home() {
  const [text, setText] = useState("");
  const [showCode, setShowCode] = useState(false);
  const generateQRCode = () => {
    if (text) {
      setShowCode(true);
    }
  };

  const downloadQRcode = () => {
    const qrCodeURL = document.getElementById("qrcode").toDataURL("image/png");

    const link = document.createElement("a");
    link.href = qrCodeURL;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="h-screen text-center pt-40 w-full px-60">
      <h1 className="text-7xl font-bold text-orange-600">
        Create Your QR Codes Instantly
      </h1>
      <p className="text-2xl p-10 px-40 ">
        Easily generate custom QR codes for your business, events, or personal
        use. Simply enter your data, and let our tool create a scannable QR code
        in seconds. No design skills required—start sharing today!
      </p>
      <div className="flex justify-normal mx-80 ">
        <input
          className="p-3 px-5 w-full  text-xl focus:outline-none rounded-tl-full rounded-bl-full "
          type="text"
          placeholder="Type your text/url here"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={generateQRCode}
          className="bg-orange-600 p-3 hover:bg-gray-950 text-white rounded-tr-full rounded-br-full"
        >
          Generate
        </button>
      </div>
      {showCode && (
        <div className="flex align-middle justify-center items-center my-5  flex-col">
          <QRCodeCanvas
            id="qrcode"
            value={text}
            size={200}
            level="H"
            includeMargin={true}
          />
          <button
            onClick={downloadQRcode}
            className="bg-orange-600 p-2 px-7 hover:bg-gray-950 text-white duration-200"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
