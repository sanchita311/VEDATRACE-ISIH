import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information / संपर्क जानकारी</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  Ministry of AYUSH, Government of India
                  <br />
                  आयुष मंत्रालय, भारत सरकार
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Helpline: 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@vedatrace.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links / त्वरित लिंक</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Project / परियोजना के बारे में
              </Link>
              <Link href="/farmers" className="block hover:text-primary transition-colors">
                For Farmers / किसानों के लिए
              </Link>
              <Link href="/consumers" className="block hover:text-primary transition-colors">
                For Consumers / उपभोक्ताओं के लिए
              </Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">
                Contact Us / संपर्क करें
              </Link>
            </div>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Government Links / सरकारी लिंक</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">
                Ministry of AYUSH / आयुष मंत्रालय
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Digital India / डिजिटल इंडिया
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Make in India / मेक इन इंडिया
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            © 2024 VEDATRACE - Government of India. All rights reserved.
            <br />© 2024 वेदाट्रेस - भारत सरकार। सभी अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  )
}
