import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markerInstance, setMarkerInstance] = useState<L.Marker | null>(null);

  useEffect(() => {
    // Initialize map only once
    const mapContainer = document.getElementById('eventMap');
    if (!mapContainer || mapInstance) return;

    const map = L.map('eventMap').setView([-1.2921, 36.8219], 12);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CartoDB',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23E8448A" stroke="%23fff" stroke-width="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      iconSize: [38, 38],
      iconAnchor: [19, 38]
    });

    const marker = L.marker([-1.2921, 36.8219], { icon: customIcon }).addTo(map);

    map.on('click', (e) => {
      marker.setLatLng(e.latlng);
      setFormData(prev => ({
        ...prev,
        location: `Coordinates: ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`
      }));
    });

    setMapInstance(map);
    setMarkerInstance(marker);

    return () => {
      map.remove();
    };
  }, []);

  const handleGeoClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        if (mapInstance && markerInstance) {
          mapInstance.setView([lat, lng], 15);
          markerInstance.setLatLng([lat, lng]);
          setFormData(prev => ({
            ...prev,
            location: `Current Location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`
          }));
        }
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <>
      <section className="booking" id="contact">
        <div>
          <p className="booking-label reveal visible">Get In Touch</p>
          <h2 className="booking-title reveal reveal-delay-1 visible">
            Request a<br/><em className="italic text-pink">Free Quote</em>
          </h2>
          <p className="booking-text reveal reveal-delay-2 visible">
            Tell us about your event and we'll get back to you with a personalised quote and moodboard within 24 hours.
          </p>
          
          <div className="contact-list reveal reveal-delay-2 visible">
            <div className="contact-item">
              <Phone size={18} className="contact-icon" /> <strong>0768 020 535</strong>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" /> <strong>hello@rachelsdecoration.co.ke</strong>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" /> Nairobi, Kenya (citywide service)
            </div>
            <div className="contact-item">
              <Clock size={18} className="contact-icon" /> Mon–Sat · 8am – 7pm
            </div>
          </div>
        </div>
        
        <div>
          {!isSuccess ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-group reveal visible">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Jane" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="form-group reveal reveal-delay-1 visible">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Wanjiru" required value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="form-group reveal visible">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="07XX XXX XXX" required value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group reveal reveal-delay-1 visible">
                <label>Email</label>
                <input type="email" name="email" placeholder="jane@email.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group reveal visible">
                <label>Event Type</label>
                <select name="eventType" required value={formData.eventType} onChange={handleChange} className="appearance-none bg-black/40">
                  <option value="" disabled>Select service…</option>
                  <option value="Room Decoration">Room Decoration</option>
                  <option value="Event Decoration">Event Decoration</option>
                  <option value="Balloons & Ribbons">Balloons & Ribbons</option>
                  <option value="Birthday Setup">Birthday Setup</option>
                  <option value="School Event">School Event</option>
                  <option value="Surprise Setup">Surprise Setup</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group reveal reveal-delay-1 visible">
                <label>Event Date</label>
                <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange} />
              </div>
              <div className="form-group full reveal visible">
                <label>Pin Your Event Location on the Map</label>
                <div id="eventMap" className="filter brightness-90 saturate-75"></div>
                <p className="map-note">Click anywhere on the map to drop a pin at your event location, or use the button below.</p>
                <button type="button" className="geo-btn" onClick={handleGeoClick}>Use My Current Location</button>
              </div>
              <div className="form-group full reveal visible">
                <label>Location / Venue</label>
                <input type="text" name="location" placeholder="Westlands, Nairobi…" value={formData.location} onChange={handleChange} />
              </div>
              <div className="form-group full reveal reveal-delay-1 visible">
                <label>Your Vision / Message</label>
                <textarea name="message" placeholder="Tell us about your event, theme, colours, or any special requests…" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="form-group full reveal reveal-delay-2 visible">
                <button type="submit" disabled={isSubmitting} className="form-submit">
                  {isSubmitting ? 'Sending...' : 'Send My Request ✦'}
                </button>
              </div>
            </form>
          ) : (
            <div className="form-success text-center p-8 text-[#5fdb9c] text-sm tracking-wide bg-white/5 rounded-md border border-white/10" style={{ display: 'block' }}>
              ✅ Thank you! We've received your request and will be in touch within 24 hours.
            </div>
          )}
        </div>
      </section>
      
      <hr className="divider" />
    </>
  );
};

export default Booking;
