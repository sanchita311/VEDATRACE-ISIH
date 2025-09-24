"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

const plants = [
  { id: "tulsi", name: "Tulsi / तुलसी", image: "/tulsi-plant.jpg" },
  { id: "neem", name: "Neem / नीम", image: "/neem-plant.jpg" },
  { id: "ashwagandha", name: "Ashwagandha / अश्वगंधा", image: "/ashwagandha-plant.png" },
  { id: "brahmi", name: "Brahmi / ब्राह्मी", image: "/brahmi-plant.jpg" },
  { id: "giloy", name: "Giloy / गिलोय", image: "/giloy-plant.jpg" },
  { id: "turmeric", name: "Turmeric / हल्दी", image: "/turmeric-plant.jpg" },
]

const colorOptions = [
  { id: "green", name: "Green / हरा", color: "bg-green-500" },
  { id: "dark-green", name: "Dark Green / गहरा हरा", color: "bg-green-700" },
  { id: "yellow-green", name: "Yellow Green / पीला हरा", color: "bg-lime-500" },
  { id: "brown", name: "Brown / भूरा", color: "bg-amber-700" },
  { id: "dried", name: "Dried / सूखा", color: "bg-yellow-600" },
]

export function HarvestForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    plant: "",
    quantity: "",
    unit: "kg",
    leafColor: "",
    location: null as { lat: number; lng: number } | null,
    locationName: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLocationCapture = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            locationName: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
          // Fallback to dummy location for demo
          setFormData({
            ...formData,
            location: { lat: 28.6139, lng: 77.209 },
            locationName: "28.613900, 77.209000 (Demo Location)",
          })
        },
      )
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Prepare data for backend
    const payload = {
      Herb_type: plants.find((p) => p.id === formData.plant)?.name || formData.plant,
      quantity_magnitude: parseFloat(formData.quantity),
      quantity_unit: formData.unit,
      color_name: colorOptions.find((c) => c.id === formData.leafColor)?.name || formData.leafColor,
      longitude: formData.location?.lng,
      latitude: formData.location?.lat,
      // Optionally add more fields as needed
    };
    try {
      const res = await fetch("/api/harvests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit harvest");
      }
    } catch (err) {
      alert("Error submitting harvest");
    }
    setIsSubmitting(false);
  }

  const resetForm = () => {
    setCurrentStep(1)
    setFormData({
      plant: "",
      quantity: "",
      unit: "kg",
      leafColor: "",
      location: null,
      locationName: "",
    })
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Harvest Recorded Successfully!</h3>
          <p className="text-lg font-semibold text-primary mb-2">कटाई सफलतापूर्वक दर्ज हो गई!</p>
          <p className="text-muted-foreground mb-6">
            Your harvest data has been securely stored on the blockchain.
            <br />
            आपकी कटाई का डेटा ब्लॉकचेन पर सुरक्षित रूप से संग्रहीत हो गया है।
          </p>
          <Button onClick={resetForm} className="w-full">
            Log Another Harvest / अन्य कटाई दर्ज करें
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          Log Harvest - Step {currentStep} of 5
          <br />
          <span className="text-lg text-muted-foreground">कटाई दर्ज करें - चरण {currentStep} का 5</span>
        </CardTitle>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className={`w-3 h-3 rounded-full ${step <= currentStep ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Step 1: Select Plant */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Select Plant / पौधा चुनें</h3>
              <p className="text-muted-foreground">Choose the herb you harvested</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {plants.map((plant) => (
                <button
                  key={plant.id}
                  onClick={() => setFormData({ ...formData, plant: plant.id })}
                  className={`p-4 border rounded-lg text-center hover:border-primary transition-colors ${
                    formData.plant === plant.id ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <img
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                  />
                  <p className="text-sm font-medium">{plant.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Enter Quantity */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Enter Quantity / मात्रा दर्ज करें</h3>
              <p className="text-muted-foreground">How much did you harvest?</p>
            </div>
            <div className="max-w-sm mx-auto space-y-4">
              <div>
                <Label htmlFor="quantity">Quantity / मात्रा</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="text-center text-2xl h-16"
                />
              </div>
              <div>
                <Label htmlFor="unit">Unit / इकाई</Label>
                <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kilograms / किलोग्राम</SelectItem>
                    <SelectItem value="g">Grams / ग्राम</SelectItem>
                    <SelectItem value="bundles">Bundles / गट्ठर</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Leaf Color */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Leaf Color / पत्ती का रंग</h3>
              <p className="text-muted-foreground">Select the color of the harvested leaves</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setFormData({ ...formData, leafColor: color.id })}
                  className={`p-4 border rounded-lg flex items-center space-x-3 hover:border-primary transition-colors ${
                    formData.leafColor === color.id ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full ${color.color}`}></div>
                  <span className="text-sm font-medium">{color.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: GPS Location */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Capture Location / स्थान कैप्चर करें</h3>
              <p className="text-muted-foreground">GPS location will be automatically captured</p>
            </div>
            <div className="max-w-sm mx-auto">
              {!formData.location ? (
                <Button onClick={handleLocationCapture} className="w-full h-16 text-lg" size="lg">
                  <MapPin className="w-6 h-6 mr-2" />
                  Capture GPS Location
                  <br />
                  GPS स्थान कैप्चर करें
                </Button>
              ) : (
                <div className="text-center p-6 border rounded-lg bg-primary/5">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Location Captured / स्थान कैप्चर हो गया</h4>
                  <p className="text-sm text-muted-foreground font-mono">{formData.locationName}</p>
                  <Button variant="outline" size="sm" onClick={handleLocationCapture} className="mt-3 bg-transparent">
                    Recapture / पुनः कैप्चर करें
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Review & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Review & Submit / समीक्षा और जमा करें</h3>
              <p className="text-muted-foreground">Please review your harvest details</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <div className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plant / पौधा:</span>
                  <span className="font-medium">{plants.find((p) => p.id === formData.plant)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantity / मात्रा:</span>
                  <span className="font-medium">
                    {formData.quantity} {formData.unit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Leaf Color / पत्ती का रंग:</span>
                  <span className="font-medium">{colorOptions.find((c) => c.id === formData.leafColor)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location / स्थान:</span>
                  <span className="font-medium text-xs">GPS Captured</span>
                </div>
              </div>
              <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full h-12 text-lg" size="lg">
                {isSubmitting ? (
                  "Submitting... / जमा कर रहे हैं..."
                ) : (
                  <>
                    Submit Harvest / कटाई जमा करें
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous / पिछला
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              currentStep === 5 ||
              (currentStep === 1 && !formData.plant) ||
              (currentStep === 2 && !formData.quantity) ||
              (currentStep === 3 && !formData.leafColor) ||
              (currentStep === 4 && !formData.location)
            }
            className="flex items-center"
          >
            Next / अगला
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
