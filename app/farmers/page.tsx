import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HarvestForm } from "@/components/harvest-form"
import { Leaf, BarChart3, Users, Shield, Plus, History } from "lucide-react"
import Link from "next/link"

export default function FarmersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                For Farmers & Collectors
                <br />
                <span className="text-primary text-3xl md:text-4xl">किसानों और संग्रहकर्ताओं के लिए</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
                Join the blockchain revolution and ensure your herbs reach consumers with complete transparency and fair
                pricing.
                <br />
                <span className="text-base">
                  ब्लॉकचेन क्रांति में शामिल हों और सुनिश्चित करें कि आपकी जड़ी-बूटियां पूर्ण पारदर्शिता और उचित मूल्य के साथ उपभोक्ताओं तक
                  पहुंचें।
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Quick Actions / त्वरित कार्य</h2>
                <p className="text-muted-foreground">
                  Choose what you want to do today
                  <br />
                  आज आप क्या करना चाहते हैं चुनें
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">
                      Log New Harvest
                      <br />
                      <span className="text-lg text-muted-foreground font-normal">नई कटाई दर्ज करें</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Record your fresh herb harvest with GPS location and quality details.
                      <br />
                      GPS स्थान और गुणवत्ता विवरण के साथ अपनी ताजी जड़ी-बूटी की कटाई रिकॉर्ड करें।
                    </p>
                    <Button asChild className="w-full" size="lg">
                      <Link href="#harvest-form">Start Logging / लॉगिंग शुरू करें</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <History className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">
                      My Harvest Records
                      <br />
                      <span className="text-lg text-muted-foreground font-normal">मेरी कटाई का रिकॉर्ड</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      View all your previous harvest records and track their journey.
                      <br />
                      अपने सभी पिछले कटाई रिकॉर्ड देखें और उनकी यात्रा को ट्रैक करें।
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                      <Link href="/farmers/records">View Records / रिकॉर्ड देखें</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Benefits for Farmers / किसानों के लिए लाभ</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Discover how VEDATRACE empowers farmers and collectors with fair pricing and direct market access.
                  <br />
                  जानें कि कैसे वेदाट्रेस किसानों और संग्रहकर्ताओं को उचित मूल्य और प्रत्यक्ष बाजार पहुंच के साथ सशक्त बनाता है।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Guaranteed Authenticity
                      <br />
                      <span className="text-sm text-muted-foreground">गारंटीशुदा प्रामाणिकता</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your herbs are verified and certified, ensuring premium pricing for quality products.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Fair Pricing
                      <br />
                      <span className="text-sm text-muted-foreground">उचित मूल्य निर्धारण</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Direct connection to consumers eliminates middlemen, ensuring better profits for farmers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Community Support
                      <br />
                      <span className="text-sm text-muted-foreground">सामुदायिक सहायता</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Join a network of verified farmers and access training, resources, and market insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Quality Recognition
                      <br />
                      <span className="text-sm text-muted-foreground">गुणवत्ता की पहचान</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Build your reputation as a trusted supplier of high-quality Ayurvedic herbs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Secure Payments
                      <br />
                      <span className="text-sm text-muted-foreground">सुरक्षित भुगतान</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Blockchain-secured transactions ensure timely and guaranteed payments for your harvest.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Market Insights
                      <br />
                      <span className="text-sm text-muted-foreground">बाजार की जानकारी</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Access real-time market data and demand forecasts to optimize your harvest planning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Harvest Form Section */}
        <section id="harvest-form" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Log Your Harvest / अपनी कटाई दर्ज करें</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow the simple steps below to record your herb harvest and start the blockchain traceability journey.
                <br />
                अपनी जड़ी-बूटी की कटाई रिकॉर्ड करने और ब्लॉकचेन ट्रेसबिलिटी यात्रा शुरू करने के लिए नीचे दिए गए सरल चरणों का पालन करें।
              </p>
            </div>
            <HarvestForm />
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Need Help?
                <br />
                <span className="text-2xl">सहायता चाहिए?</span>
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Our support team is here to help you get started with VEDATRACE.
                <br />
                हमारी सहायता टीम आपको वेदाट्रेस के साथ शुरुआत करने में मदद करने के लिए यहां है।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                  <Link href="/contact">Contact Support / सहायता संपर्क</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="tel:1800-XXX-XXXX">Call Helpline / हेल्पलाइन कॉल करें</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
