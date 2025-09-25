"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Camera, Upload } from "lucide-react"
import QRCode from "qrcode"

export default function QRScanner({ onScan }: { onScan?: (code: string) => void }) {
  const [scanMethod, setScanMethod] = useState<"camera" | "upload" | "manual" | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Camera scanning (not implemented)
  const handleCameraScan = () => {
    alert("Camera scanning is not implemented in this demo. Please use upload or manual entry.");
  };

  // File upload and QR decode using 'qrcode' package
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsScanning(true);
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const imageData = e.target?.result;
          if (typeof imageData === "string") {
            // Create an image element
            const img = document.createElement("img");
            img.src = imageData;
            img.onload = async () => {
              // Create a canvas to draw the image
              const canvas = document.createElement("canvas");
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.drawImage(img, 0, 0);
                const imageDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height);
                // Use 'qrcode' to decode
                try {
                  // qrcode.decode expects a canvas, so we use QRCode.decode from 'qrcode' package
                  // But 'qrcode' package is mainly for generation, not decoding. For decoding, use 'jsqr' or similar.
                  // Here, we show the structure for future implementation.
                  // onScan?.(decodedCid);
                  alert("QR code decoding not implemented. Please use manual entry for now.");
                } catch (err) {
                  alert("Failed to decode QR code.");
                }
              }
              setIsScanning(false);
            };
          }
        };
        reader.readAsDataURL(file);
      } catch (err) {
        alert("Failed to decode QR code.");
        setIsScanning(false);
      }
    }
  };

  // Manual entry
  const handleManualEntry = () => {
    if (manualCode.trim()) {
      onScan?.(manualCode.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {!scanMethod ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
            onClick={() => setScanMethod("camera")}
          >
            <Camera className="w-8 h-8" />
            <span className="text-sm">Use Camera<br />कैमरा उपयोग करें</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
            onClick={() => setScanMethod("upload")}
          >
            <Upload className="w-8 h-8" />
            <span className="text-sm">Upload Image<br />छवि अपलोड करें</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
            onClick={() => setScanMethod("manual")}
          >
            <QrCode className="w-8 h-8" />
            <span className="text-sm">Enter Code<br />कोड दर्ज करें</span>
          </Button>
        </div>
      ) : (
        <div>
          {scanMethod === "camera" && (
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Camera scanning is not implemented in this demo.</p>
              </div>
              <Button onClick={handleCameraScan} size="lg" className="w-full">
                Start Camera Scan / कैमरा स्कैन शुरू करें
              </Button>
            </div>
          )}
          {scanMethod === "upload" && (
            <div className="text-center">
              <input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} className="hidden" />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload QR code image<br />QR कोड छवि अपलोड करने के लिए क्लिक करें
                  </p>
                </div>
              </div>
            </div>
          )}
          {scanMethod === "manual" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="qr-code">QR Code / QR कोड</Label>
                <Input
                  id="qr-code"
                  placeholder="Enter QR code manually / QR कोड मैन्युअल रूप से दर्ज करें"
                  value={manualCode}
                  onChange={e => setManualCode(e.target.value)}
                  className="text-center font-mono"
                />
              </div>
              <Button onClick={handleManualEntry} disabled={!manualCode.trim()} size="lg" className="w-full">
                Verify Code / कोड सत्यापित करें
              </Button>
            </div>
          )}
          <Button variant="outline" onClick={() => setScanMethod(null)} className="w-full bg-transparent mt-4">
            Back to Options / विकल्पों पर वापस जाएं
          </Button>
        </div>
      )}
    </div>
  );
}
