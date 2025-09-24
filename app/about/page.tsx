import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Leaf, Users, MapPin, QrCode, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                About VEDATRACE Project
                <br />
                <span className="text-primary text-3xl md:text-4xl">वेदाट्रेस परियोजना के बारे में</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Revolutionizing Ayurvedic herb supply chain through blockchain technology and ensuring authenticity from
                farm to pharmacy.
                <br />
                <span className="text-base">
                  ब्लॉकचेन तकनीक के माध्यम से आयुर्वेदिक जड़ी-बूटी आपूर्ति श्रृंखला में क्रांति लाना और खेत से फार्मेसी तक प्रामाणिकता सुनिश्चित
                  करना।
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-destructive">
                  The Problem We Solve
                  <br />
                  <span className="text-2xl">हम जो समस्या हल करते हैं</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-destructive/20">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">
                      Adulteration Issues
                      <br />
                      <span className="text-sm text-muted-foreground">मिलावट की समस्या</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fake and adulterated herbs compromise the effectiveness of Ayurvedic medicines, putting consumer
                      health at risk.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">
                      Lack of Trust
                      <br />
                      <span className="text-sm text-muted-foreground">विश्वास की कमी</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Consumers cannot verify the authenticity and origin of herbs, leading to decreased confidence in
                      Ayurvedic products.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">
                      Unverified Sourcing
                      <br />
                      <span className="text-sm text-muted-foreground">अप्रमाणित सोर्सिंग</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      No reliable system to track herbs from their collection point to the final product, enabling
                      fraudulent practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Our Blockchain Solution
                  <br />
                  <span className="text-2xl">हमारा ब्लॉकचेन समाधान</span>
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  VEDATRACE uses cutting-edge blockchain technology combined with GPS geo-tagging to create an immutable
                  record of every herb's journey.
                  <br />
                  वेदाट्रेस प्रत्येक जड़ी-बूटी की यात्रा का अपरिवर्तनीय रिकॉर्ड बनाने के लिए GPS भू-टैगिंग के साथ अत्याधुनिक ब्लॉकचेन तकनीक
                  का उपयोग करता है।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Technologies / मुख्य तकनीकें</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Blockchain Security / ब्लॉकचेन सुरक्षा</h4>
                        <p className="text-sm text-muted-foreground">
                          Immutable ledger ensures data cannot be tampered with or falsified.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">GPS Geo-tagging / GPS भू-टैगिंग</h4>
                        <p className="text-sm text-muted-foreground">
                          Precise location tracking confirms authentic collection sites.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <QrCode className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">QR Code Integration / QR कोड एकीकरण</h4>
                        <p className="text-sm text-muted-foreground">
                          Unique identifiers link physical products to digital records.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 text-center">Benefits / लाभ</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">100% Transparency / 100% पारदर्शिता</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Tamper-proof Records / छेड़छाड़-रोधी रिकॉर्ड</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Real-time Tracking / रियल-टाइम ट्रैकिंग</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Consumer Confidence / उपभोक्ता विश्वास</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Fair Farmer Pricing / उचित किसान मूल्य</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Herb Journey Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Complete Herb Journey
                  <br />
                  <span className="text-2xl text-primary">संपूर्ण जड़ी-बूटी यात्रा</span>
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Follow the complete journey of Ayurvedic herbs from collection to your hands with full transparency at
                  every step.
                  <br />
                  प्रत्येक चरण में पूर्ण पारदर्शिता के साथ संग्रह से लेकर आपके हाथों तक आयुर्वेदिक जड़ी-बूटियों की संपूर्ण यात्रा का पालन करें।
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary/20 hidden md:block"></div>

                <div className="space-y-12">
                  {/* Step 1: Collection */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right">
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-center md:justify-end mb-4">
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                              Step 1
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Collection / संग्रह</h3>
                          <p className="text-muted-foreground mb-4">
                            Farmers and wild collectors harvest herbs at optimal times. GPS coordinates are
                            automatically recorded to verify the exact collection location.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">GPS Tracking</Badge>
                            <Badge variant="outline">Time Stamping</Badge>
                            <Badge variant="outline">Quality Check</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        <Leaf className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>

                  {/* Step 2: Processing */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        <Users className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-center md:justify-start mb-4">
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                              Step 2
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Processing / प्रसंस्करण</h3>
                          <p className="text-muted-foreground mb-4">
                            Herbs undergo traditional processing methods like drying, grinding, and purification. Each
                            step is documented with timestamps and quality parameters.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Drying Process</Badge>
                            <Badge variant="outline">Grinding</Badge>
                            <Badge variant="outline">Purification</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Step 3: Testing */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right">
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-center md:justify-end mb-4">
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                              Step 3
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Testing / परीक्षण</h3>
                          <p className="text-muted-foreground mb-4">
                            Certified laboratories conduct comprehensive testing for purity, potency, and safety.
                            Digital certificates are generated and stored on blockchain.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Purity Test</Badge>
                            <Badge variant="outline">Potency Analysis</Badge>
                            <Badge variant="outline">Safety Check</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        <Shield className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>

                  {/* Step 4: Packaging */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        <QrCode className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-center md:justify-start mb-4">
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                              Step 4
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Packaging / पैकेजिंग</h3>
                          <p className="text-muted-foreground mb-4">
                            Final products are packaged with unique QR codes that link to the complete blockchain
                            record. Each package contains the entire journey history.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">QR Generation</Badge>
                            <Badge variant="outline">Batch Tracking</Badge>
                            <Badge variant="outline">Final Sealing</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Step 5: Consumer Verification */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right">
                      <Card className="p-6 border-primary">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-center md:justify-end mb-4">
                            <Badge className="text-lg px-4 py-2">Final Step</Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Consumer Verification / उपभोक्ता सत्यापन</h3>
                          <p className="text-muted-foreground mb-4">
                            Consumers scan the QR code to access complete product history including farmer details,
                            processing steps, lab reports, and authenticity certificates.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">QR Scanning</Badge>
                            <Badge variant="outline">History Access</Badge>
                            <Badge variant="outline">Authenticity Proof</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Project Impact
                <br />
                <span className="text-2xl">परियोजना प्रभाव</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <p className="opacity-90">Farmers Connected / जुड़े किसान</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <p className="opacity-90">Products Traced / ट्रेस किए गए उत्पाद</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <p className="opacity-90">Authenticity Rate / प्रामाणिकता दर</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
