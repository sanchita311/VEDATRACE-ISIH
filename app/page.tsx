import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Leaf, Users, QrCode, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Blockchain-based Botanical Traceability
                <br />
                <span className="text-primary text-3xl md:text-4xl">ब्लॉकचेन आधारित औषधीय पौधों की ट्रेसबिलिटी</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
                Ensuring authenticity and traceability of Ayurvedic herbs from farm to pharmacy through blockchain
                technology.
                <br />
                <span className="text-base">
                  ब्लॉकचेन तकनीक के माध्यम से खेत से फार्मेसी तक आयुर्वेदिक जड़ी-बूटियों की प्रामाणिकता और ट्रेसबिलिटी सुनिश्चित करना।
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/farmers">For Farmers / किसानों के लिए</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/consumers">For Consumers / उपभोक्ताओं के लिए</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features / मुख्य विशेषताएं</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced technology ensuring complete transparency in the Ayurvedic herb supply chain.
                <br />
                आयुर्वेदिक जड़ी-बूटी आपूर्ति श्रृंखला में पूर्ण पारदर्शिता सुनिश्चित करने वाली उन्नत तकनीक।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Blockchain Security
                    <br />
                    <span className="text-sm text-muted-foreground">ब्लॉकचेन सुरक्षा</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tamper-proof records ensure data integrity throughout the supply chain.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Geo-tagging
                    <br />
                    <span className="text-sm text-muted-foreground">भू-टैगिंग</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    GPS location tracking confirms authentic collection sites.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <QrCode className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    QR Code Verification
                    <br />
                    <span className="text-sm text-muted-foreground">QR कोड सत्यापन</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Instant product verification for consumers through QR scanning.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Quality Assurance
                    <br />
                    <span className="text-sm text-muted-foreground">गुणवत्ता आश्वासन</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lab testing and quality certificates at every processing stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Farmer Empowerment
                    <br />
                    <span className="text-sm text-muted-foreground">किसान सशक्तिकरण</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Direct connection between farmers and consumers with fair pricing.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Authenticity Guarantee
                    <br />
                    <span className="text-sm text-muted-foreground">प्रामाणिकता गारंटी</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete traceability from collection to final product packaging.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works / यह कैसे काम करता है</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to ensure complete traceability of Ayurvedic herbs.
                <br />
                आयुर्वेदिक जड़ी-बूटियों की पूर्ण ट्रेसबिलिटी सुनिश्चित करने के सरल चरण।
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Collection / संग्रह</h3>
                  <p className="text-sm text-muted-foreground">Farmers log harvest with GPS location</p>
                </div>

                <div className="hidden md:block text-center">
                  <div className="w-8 h-0.5 bg-primary mx-auto"></div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Processing / प्रसंस्करण</h3>
                  <p className="text-sm text-muted-foreground">Drying, grinding, and quality checks</p>
                </div>

                <div className="hidden md:block text-center">
                  <div className="w-8 h-0.5 bg-primary mx-auto"></div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Testing / परीक्षण</h3>
                  <p className="text-sm text-muted-foreground">Lab analysis and certification</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Packaging / पैकेजिंग</h3>
                  <p className="text-sm text-muted-foreground">Final product with unique QR code</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    5
                  </div>
                  <h3 className="font-semibold mb-2">Verification / सत्यापन</h3>
                  <p className="text-sm text-muted-foreground">Consumer scans QR for complete history</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Transparency Revolution
              <br />
              <span className="text-2xl">पारदर्शिता क्रांति में शामिल हों</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Be part of building trust in Ayurvedic medicine through blockchain technology.
              <br />
              ब्लॉकचेन तकनीक के माध्यम से आयुर्वेदिक चिकित्सा में विश्वास निर्माण का हिस्सा बनें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                <Link href="/about">Learn More / और जानें</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Contact Us / संपर्क करें</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
