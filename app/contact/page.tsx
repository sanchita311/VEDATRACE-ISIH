import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, Users, Headphones } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Contact Us
                <br />
                <span className="text-primary text-3xl md:text-4xl">हमसे संपर्क करें</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
                Get in touch with our team for support, inquiries, or to learn more about VEDATRACE blockchain
                traceability.
                <br />
                <span className="text-base">
                  सहायता, पूछताछ के लिए या वेदाट्रेस ब्लॉकचेन ट्रेसबिलिटी के बारे में अधिक जानने के लिए हमारी टीम से संपर्क करें।
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Get in Touch / संपर्क में रहें</h2>
                <p className="text-muted-foreground">
                  Multiple ways to reach us for your convenience
                  <br />
                  आपकी सुविधा के लिए हमसे संपर्क करने के कई तरीके
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Office Address
                      <br />
                      <span className="text-sm text-muted-foreground">कार्यालय का पता</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ministry of AYUSH
                      <br />
                      Shastri Bhawan, New Delhi - 110001
                      <br />
                      आयुष मंत्रालय, शास्त्री भवन, नई दिल्ली
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Phone Numbers
                      <br />
                      <span className="text-sm text-muted-foreground">फोन नंबर</span>
                    </h3>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Main Office:</strong> +91-11-2338-XXXX
                      </p>
                      <p>
                        <strong>Farmer Helpline:</strong> 1800-XXX-XXXX
                      </p>
                      <p>
                        <strong>Consumer Support:</strong> 1800-YYY-YYYY
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Email Addresses
                      <br />
                      <span className="text-sm text-muted-foreground">ईमेल पते</span>
                    </h3>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>General:</strong> info@vedatrace.gov.in
                      </p>
                      <p>
                        <strong>Support:</strong> support@vedatrace.gov.in
                      </p>
                      <p>
                        <strong>Technical:</strong> tech@vedatrace.gov.in
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Support Hours / सहायता समय</h2>
                <p className="text-muted-foreground">
                  Our team is available to help you during these hours
                  <br />
                  हमारी टीम इन घंटों के दौरान आपकी सहायता के लिए उपलब्ध है
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      General Support
                      <br />
                      <span className="text-sm text-muted-foreground">सामान्य सहायता</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM IST
                      <br />
                      सोमवार - शुक्रवार
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Farmer Helpline
                      <br />
                      <span className="text-sm text-muted-foreground">किसान हेल्पलाइन</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday
                      <br />
                      8:00 AM - 8:00 PM IST
                      <br />
                      सोमवार - शनिवार
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      Technical Support
                      <br />
                      <span className="text-sm text-muted-foreground">तकनीकी सहायता</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday
                      <br />
                      10:00 AM - 7:00 PM IST
                      <br />
                      सोमवार - शुक्रवार
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send us a Message / हमें संदेश भेजें</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible.
                <br />
                नीचे दिया गया फॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked Questions
                  <br />
                  <span className="text-2xl text-primary">अक्सर पूछे जाने वाले प्रश्न</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">How do I register as a farmer? / किसान के रूप में पंजीकरण कैसे करें?</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact our farmer helpline at 1800-XXX-XXXX or visit your nearest VEDATRACE center for
                      registration assistance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">
                      What if my QR code doesn't scan? / यदि मेरा QR कोड स्कैन नहीं होता तो क्या करें?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Try cleaning the QR code, ensuring good lighting, or use the manual entry option. Contact support
                      if issues persist.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">
                      Is my data secure on blockchain? / क्या ब्लॉकचेन पर मेरा डेटा सुरक्षित है?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, blockchain technology ensures your data is encrypted, tamper-proof, and securely stored with
                      government-grade security.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">How can I become a VEDATRACE partner? / वेदाट्रेस पार्टनर कैसे बनें?</h4>
                    <p className="text-sm text-muted-foreground">
                      Send us your partnership proposal at info@vedatrace.gov.in with details about your organization
                      and services.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Emergency Support
                <br />
                <span className="text-2xl">आपातकालीन सहायता</span>
              </h2>
              <p className="text-lg mb-8 opacity-90">
                For urgent issues related to product safety or fraud reporting, contact our emergency helpline.
                <br />
                उत्पाद सुरक्षा या धोखाधड़ी की रिपोर्ट से संबंधित तत्काल मुद्दों के लिए, हमारी आपातकालीन हेल्पलाइन से संपर्क करें।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:1800-EMERGENCY"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 1800-EMERGENCY
                </a>
                <a
                  href="mailto:emergency@vedatrace.gov.in"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground text-primary-foreground rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  emergency@vedatrace.gov.in
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
