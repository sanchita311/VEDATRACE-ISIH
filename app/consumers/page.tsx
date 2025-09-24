import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { QRScanner } from "@/components/qr-scanner"
import { Shield, QrCode, MapPin, FileText, Users, CheckCircle } from "lucide-react"

export default function ConsumersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                For Consumers
                <br />
                <span className="text-primary text-3xl md:text-4xl">उपभोक्ताओं के लिए</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
                Verify the authenticity and trace the complete journey of your Ayurvedic products with a simple QR code
                scan.
                <br />
                <span className="text-base">
                  एक सरल QR कोड स्कैन के साथ अपने आयुर्वेदिक उत्पादों की प्रामाणिकता सत्यापित करें और पूर्ण यात्रा का पता लगाएं।
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Verify Your Products? / अपने उत्पादों को क्यों सत्यापित करें?</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Ensure you're getting authentic, high-quality Ayurvedic products with complete transparency about
                  their origin and journey.
                  <br />
                  सुनिश्चित करें कि आपको उनकी उत्पत्ति और यात्रा के बारे में पूर्ण पारदर्शिता के साथ प्रामाणिक, उच्च गुणवत्ता वाले आयुर्वेदिक
                  उत्पाद मिल रहे हैं।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Authenticity Guarantee
                      <br />
                      <span className="text-sm text-muted-foreground">प्रामाणिकता गारंटी</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Verify that your product is genuine and not adulterated with harmful substances.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Complete Traceability
                      <br />
                      <span className="text-sm text-muted-foreground">पूर्ण ट्रेसबिलिटी</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Track your product's journey from the farm where it was grown to your hands.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Know Your Farmer
                      <br />
                      <span className="text-sm text-muted-foreground">अपने किसान को जानें</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about the farmer who grew your herbs and their sustainable farming practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Lab Test Reports
                      <br />
                      <span className="text-sm text-muted-foreground">लैब टेस्ट रिपोर्ट</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Access detailed lab reports showing purity, potency, and safety test results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Quality Assurance
                      <br />
                      <span className="text-sm text-muted-foreground">गुणवत्ता आश्वासन</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure your products meet the highest quality standards and safety requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <QrCode className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Easy Verification
                      <br />
                      <span className="text-sm text-muted-foreground">आसान सत्यापन</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Simple QR code scanning provides instant access to complete product information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Verify Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How to Verify / कैसे सत्यापित करें</h2>
                <p className="text-muted-foreground">
                  Follow these simple steps to verify your Ayurvedic product authenticity.
                  <br />
                  अपने आयुर्वेदिक उत्पाद की प्रामाणिकता सत्यापित करने के लिए इन सरल चरणों का पालन करें।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Find QR Code
                    <br />
                    <span className="text-sm text-muted-foreground">QR कोड खोजें</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Look for the VEDATRACE QR code on your product packaging.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Scan Code
                    <br />
                    <span className="text-sm text-muted-foreground">कोड स्कैन करें</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Use your phone camera or upload an image of the QR code.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    View Details
                    <br />
                    <span className="text-sm text-muted-foreground">विवरण देखें</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access complete product journey, farmer details, and certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Scanner Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Verify Your Product / अपना उत्पाद सत्यापित करें</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Scan the QR code on your Ayurvedic product to verify its authenticity and view its complete journey.
                <br />
                अपने आयुर्वेदिक उत्पाद पर QR कोड स्कैन करें ताकि इसकी प्रामाणिकता सत्यापित कर सकें और इसकी पूर्ण यात्रा देख सकें।
              </p>
            </div>
            <QRScanner />
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Trusted by Consumers Nationwide
                <br />
                <span className="text-2xl">देशभर के उपभोक्ताओं द्वारा भरोसेमंद</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <p className="opacity-90">Products Verified / सत्यापित उत्पाद</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <p className="opacity-90">Happy Consumers / खुश उपभोक्ता</p>
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
