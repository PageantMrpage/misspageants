import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState } from 'react';

// Replace this URL with your Google Apps Script Web App URL after deployment
// To get the URL: Deploy > New deployment > Web app > Copy the URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwjqKr0FFk4SSFFOFZvY9VRXsrUC7ARqurCDdNEqX8O8oyk0m5OkEPTa2zQQd2QbTA/exec';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    instagram_id: '',
    city: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
      setSubmitStatus({
        type: 'error',
        message: 'Please configure the Google Apps Script URL in Contact.tsx'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Map form field names to match Google Script expectations
      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone_number,
        instagram: formData.instagram_id,
        city: formData.city,
        message: formData.message,
      };

      // Use no-cors mode to avoid CORS preflight issues
      // Google Apps Script will still receive and process the data
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // With no-cors mode, we can't read the response, but the data is still submitted
      // Assume success if no error is thrown
      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! We will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        instagram_id: '',
        city: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-[#0B0C20] to-[#1a1b35]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-[#CFCFD5] text-xl md:text-2xl font-light">
            Begin your transformation journey today
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#1a1b35] to-[#0B0C20] rounded-2xl p-8 border border-[#8B4DFF]/20">
            <h3 className="text-2xl font-bold text-white mb-6">Application Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">Instagram ID</label>
                <input
                  type="text"
                  value={formData.instagram_id}
                  onChange={(e) => setFormData({ ...formData, instagram_id: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              

              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#CFCFD5] text-sm mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0B0C20] border border-[#8B4DFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00B8E6] transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] text-white uppercase tracking-[0.12em] font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(139,77,255,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Submitting...' : 'Apply Now'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1a1b35] to-[#0B0C20] rounded-2xl p-8 border border-[#8B4DFF]/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-[#CFCFD5]">The Beginning, Bengaluru, Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-[#CFCFD5]">ea@happimissglobal.com
</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-[#CFCFD5]">+91 98800 12482</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1b35] to-[#0B0C20] rounded-2xl p-8 border border-[#8B4DFF]/20">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-14 h-14 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(139,77,255,0.6)] transition-all duration-300"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(139,77,255,0.6)] transition-all duration-300"
                >
                  <Youtube className="w-7 h-7 text-white" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(139,77,255,0.6)] transition-all duration-300"
                >
                  <Linkedin className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
