"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      userType: "",
      subject: "",
      message: "",
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-lg font-semibold text-primary mb-2">संदेश सफलतापूर्वक भेजा गया!</p>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting us. We will get back to you within 24 hours.
            <br />
            हमसे संपर्क करने के लिए धन्यवाद। हम 24 घंटे के भीतर आपसे संपर्क करेंगे।
          </p>
          <Button onClick={resetForm} className="w-full">
            Send Another Message / अन्य संदेश भेजें
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          Contact Us / हमसे संपर्क करें
          <br />
          <span className="text-lg text-muted-foreground font-normal">
            We're here to help you with any questions or concerns
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name / पूरा नाम *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address / ईमेल पता *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number / फोन नंबर</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="userType">I am a / मैं हूं *</Label>
              <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer / किसान</SelectItem>
                  <SelectItem value="consumer">Consumer / उपभोक्ता</SelectItem>
                  <SelectItem value="processor">Processor / प्रोसेसर</SelectItem>
                  <SelectItem value="distributor">Distributor / वितरक</SelectItem>
                  <SelectItem value="researcher">Researcher / शोधकर्ता</SelectItem>
                  <SelectItem value="other">Other / अन्य</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Subject / विषय *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry / सामान्य पूछताछ</SelectItem>
                <SelectItem value="technical">Technical Support / तकनीकी सहायता</SelectItem>
                <SelectItem value="farmer-support">Farmer Support / किसान सहायता</SelectItem>
                <SelectItem value="product-verification">Product Verification / उत्पाद सत्यापन</SelectItem>
                <SelectItem value="partnership">Partnership / साझेदारी</SelectItem>
                <SelectItem value="complaint">Complaint / शिकायत</SelectItem>
                <SelectItem value="feedback">Feedback / प्रतिक्रिया</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message / संदेश *</Label>
            <Textarea
              id="message"
              placeholder="Please describe your inquiry in detail..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={
              isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.userType ||
              !formData.subject ||
              !formData.message
            }
            className="w-full h-12 text-lg"
            size="lg"
          >
            {isSubmitting ? (
              "Sending Message... / संदेश भेज रहे हैं..."
            ) : (
              <>
                Send Message / संदेश भेजें
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
