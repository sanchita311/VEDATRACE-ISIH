import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrImageScanner() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [traceData, setTraceData] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setTraceData(null);
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
  // Decode QR code from image file
  const html5QrCode = new Html5Qrcode("qr-image-scanner");
  const result = await html5QrCode.scanFile(file, false);
  // result is a URL string, e.g., https://domain.com/batch/123
  const url = new URL(result);
  const batchId = url.pathname.split("/").pop();

      if (!batchId) throw new Error("Batch ID not found in QR code URL.");

      // Fetch IPFS CID from backend
      const cidRes = await fetch(`/api/batches/${batchId}/data`);
      if (!cidRes.ok) throw new Error("Failed to fetch CID from backend.");
      const { cid } = await cidRes.json();

      if (!cid) throw new Error("CID not found in backend response.");

      // Fetch traceability data from IPFS gateway
      const ipfsRes = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`);
      if (!ipfsRes.ok) throw new Error("Failed to fetch data from IPFS.");
      const data = await ipfsRes.json();

      setTraceData(data);
    } catch (err: any) {
      setError(err.message || "Unknown error occurred.");
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <button onClick={() => fileInputRef.current?.click()}>
        Upload QR Code Image
      </button>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {traceData && (
        <pre style={{ background: "#f4f4f4", padding: "1em" }}>
          {JSON.stringify(traceData, null, 2)}
        </pre>
      )}
    </div>
  );
}
