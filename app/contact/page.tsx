import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">Contact Us</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>123456789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>info@gbcomputers.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Agragaram,chinnamanur,Theni</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Monday - Friday</dt>
                  <dd>10:00 AM - 9:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>10:00 AM - 8:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Visit Our Store</h2>
            <p className="text-muted-foreground mb-4">
              Come visit our physical store to see our products in person and get expert advice 
              from our team of technology specialists.
            </p>
            <div className="aspect-video bg-card rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}