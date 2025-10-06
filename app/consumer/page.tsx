"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QrImageScanner from "@/components/qr-image-scanner";

export default function ConsumerPage() {
  const [cid, setCid] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(cid: string) {
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await fetch(`/api/ipfs/${cid}`);
      const json = await res.json();
      if (res.ok) {
        setData(json);
      } else {
        setError(json.error || "Failed to fetch data");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  }

  function handleScan(scannedCid: string) {
    setCid(scannedCid);
    fetchData(scannedCid);
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Consumer: Scan or Enter Harvest CID</h1>
      <div className="mb-4">
        <Input
          placeholder="Paste CID here"
          value={cid}
          onChange={e => setCid(e.target.value)}
        />
        <Button className="mt-2" onClick={() => fetchData(cid)} disabled={!cid || loading}>
          Fetch Data
        </Button>
      </div>
      <div className="mb-4">
        <QrImageScanner />
      </div>
      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {data && (
        <div className="bg-gray-100 rounded p-4 mt-4">
          <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
