import React, { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "Web Development",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you, ${formData.firstName}! I'll get back to you soon. (This is just a demo)`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "Web Development",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "champolasherpa@gmail.com",
      link: "mailto:champolasherpa@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+977 9800000000",
      link: "tel:+9779800000000"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kathmandu, Nepal",
      link: "https://maps.google.com/?q=Kathmandu,Nepal"
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
        </p>
      </div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Contact info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Availability status */}
          <div className="p-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h4 className="text-xl font-bold">Currently Available</h4>
            </div>
            <p className="opacity-90">
              I'm available for freelance projects and full-time opportunities. Let's discuss how we can work together!
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">24h</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Right side - Contact form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
              <p className="text-gray-600 dark:text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Project Type *</label>
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
              >
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project, timeline, and budget..."
                required
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.message}
              className={`w-full px-8 py-4 rounded-xl font-medium shadow-lg transition-all duration-300 ${
                isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.message
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to receive email communications from me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;