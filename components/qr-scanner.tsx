"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { QrCode, Camera, Upload, MapPin, User, CheckCircle, FileText, Leaf } from "lucide-react"

// Mock product data for demonstration
const mockProductData = {
  productId: "VT-TUL-2024-001234",
  productName: "Organic Tulsi Powder / जैविक तुलसी पाउडर",
  batchNumber: "TUL-B-240315",
  manufacturingDate: "2024-03-15",
  expiryDate: "2026-03-15",
  farmer: {
    name: "राम कुमार शर्मा (Ram Kumar Sharma)",
    location: "Haridwar, Uttarakhand",
    farmSize: "2.5 acres",
    coordinates: "29.9457, 78.1642",
    certifications: ["Organic Certified", "Fair Trade"],
  },
  journey: [
    {
      stage: "Collection / संग्रह",
      date: "2024-03-15",
      location: "Haridwar, Uttarakhand",
      details: "Fresh Tulsi leaves harvested at dawn for maximum potency",
      icon: <Leaf className="w-5 h-5" />,
      status: "completed",
    },
    {
      stage: "Processing / प्रसंस्करण",
      date: "2024-03-16",
      location: "Ayurvedic Processing Unit, Haridwar",
      details: "Traditional sun-drying and grinding process completed",
      icon: <User className="w-5 h-5" />,
      status: "completed",
    },
    {
      stage: "Testing / परीक्षण",
      date: "2024-03-18",
      location: "Certified Lab, Delhi",
      details: "Purity: 99.8%, Heavy metals: Within limits, Microbial: Safe",
      icon: <CheckCircle className="w-5 h-5" />,
      status: "completed",
    },
    {
      stage: "Packaging / पैकेजिंग",
      date: "2024-03-20",
      location: "VEDATRACE Facility, Gurgaon",
      details: "Sealed in food-grade packaging with QR code generation",
      icon: <QrCode className="w-5 h-5" />,
      status: "completed",
    },
  ],
  certificates: [
    { name: "Organic Certificate", issuer: "India Organic", date: "2024-01-15" },
    { name: "Lab Test Report", issuer: "Certified Lab Delhi", date: "2024-03-18" },
    { name: "Quality Assurance", issuer: "VEDATRACE", date: "2024-03-20" },
  ],
}

export function QRScanner() {
  const [scanMethod, setScanMethod] = useState<"camera" | "upload" | "manual" | null>(null)
  const [scannedData, setScannedData] = useState<typeof mockProductData | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [manualCode, setManualCode] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCameraScan = () => {
    setIsScanning(true)
    // Simulate camera scanning
    setTimeout(() => {
      setIsScanning(false)
      setScannedData(mockProductData)
    }, 3000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsScanning(true)
      // Simulate QR code processing from image
      setTimeout(() => {
        setIsScanning(false)
        setScannedData(mockProductData)
      }, 2000)
    }
  }

  const handleManualEntry = () => {
    if (manualCode.trim()) {
      setIsScanning(true)
      setTimeout(() => {
        setIsScanning(false)
        setScannedData(mockProductData)
      }, 1000)
    }
  }

  const resetScanner = () => {
    setScanMethod(null)
    setScannedData(null)
    setManualCode("")
  }

  if (scannedData) {
    return (
      <div className="space-y-6">
        {/* Product Header */}
        <Card className="border-primary">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <CardTitle className="text-xl text-primary">
              Product Verified Successfully!
              <br />
              <span className="text-lg text-muted-foreground font-normal">उत्पाद सफलतापूर्वक सत्यापित!</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{scannedData.productName}</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">ID: {scannedData.productId}</Badge>
                <Badge variant="outline">Batch: {scannedData.batchNumber}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Manufacturing / निर्माण:</span>
                  <br />
                  <span className="font-medium">{scannedData.manufacturingDate}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Expiry / समाप्ति:</span>
                  <br />
                  <span className="font-medium">{scannedData.expiryDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Farmer Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Farmer Information / किसान की जानकारी
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">{scannedData.farmer.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{scannedData.farmer.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Farm Size / खेत का आकार:</span> {scannedData.farmer.farmSize}
                  </div>
                  <div>
                    <span className="text-muted-foreground">GPS:</span>{" "}
                    <span className="font-mono text-xs">{scannedData.farmer.coordinates}</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-2">Certifications / प्रमाणपत्र</h5>
                <div className="flex flex-wrap gap-2">
                  {scannedData.farmer.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journey Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Product Journey / उत्पाद यात्रा
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {scannedData.journey.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    {index < scannedData.journey.length - 1 && <div className="w-0.5 h-12 bg-primary/20 mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{step.stage}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {step.date}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{step.location}</p>
                    <p className="text-sm">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certificates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Certificates & Reports / प्रमाणपत्र और रिपोर्ट
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scannedData.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <h5 className="font-medium text-sm">{cert.name}</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">Date: {cert.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={resetScanner} variant="outline" className="flex-1 bg-transparent">
            Scan Another Product / अन्य उत्पाद स्कैन करें
          </Button>
          <Button className="flex-1">Download Certificate / प्रमाणपत्र डाउनलोड करें</Button>
        </div>
      </div>
    )
  }

  if (isScanning) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <QrCode className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Scanning QR Code...</h3>
          <p className="text-muted-foreground">QR कोड स्कैन कर रहे हैं...</p>
          <div className="mt-4">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {!scanMethod ? (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>
              Verify Product Authenticity
              <br />
              <span className="text-lg text-muted-foreground font-normal">उत्पाद प्रामाणिकता सत्यापित करें</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground mb-6">
              Choose how you want to scan the QR code on your Ayurvedic product.
              <br />
              अपने आयुर्वेदिक उत्पाद पर QR कोड को स्कैन करने का तरीका चुनें।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
                onClick={() => setScanMethod("camera")}
              >
                <Camera className="w-8 h-8" />
                <span className="text-sm">
                  Use Camera
                  <br />
                  कैमरा उपयोग करें
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
                onClick={() => setScanMethod("upload")}
              >
                <Upload className="w-8 h-8" />
                <span className="text-sm">
                  Upload Image
                  <br />
                  छवि अपलोड करें
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 bg-transparent hover:border-primary"
                onClick={() => setScanMethod("manual")}
              >
                <QrCode className="w-8 h-8" />
                <span className="text-sm">
                  Enter Code
                  <br />
                  कोड दर्ज करें
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {scanMethod === "camera" && "Camera Scanner / कैमरा स्कैनर"}
              {scanMethod === "upload" && "Upload QR Image / QR छवि अपलोड करें"}
              {scanMethod === "manual" && "Enter QR Code / QR कोड दर्ज करें"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {scanMethod === "camera" && (
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Camera viewfinder will appear here</p>
                  </div>
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
                      Click to upload QR code image
                      <br />
                      QR कोड छवि अपलोड करने के लिए क्लिक करें
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
                    onChange={(e) => setManualCode(e.target.value)}
                    className="text-center font-mono"
                  />
                </div>
                <Button onClick={handleManualEntry} disabled={!manualCode.trim()} size="lg" className="w-full">
                  Verify Code / कोड सत्यापित करें
                </Button>
              </div>
            )}

            <Button variant="outline" onClick={() => setScanMethod(null)} className="w-full bg-transparent">
              Back to Options / विकल्पों पर वापस जाएं
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
