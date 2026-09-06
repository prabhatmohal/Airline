import React, { useEffect, useState } from "react";

const AIRPORTS_URL =
  "https://screenfeedcontent.blob.core.windows.net/html/airports.js";

const AirportSearchForm = () => {
  const [airports, setAirports] = useState([]);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // 👈 new state

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const loadAirports = async () => {
      try {
        const response = await fetch(AIRPORTS_URL);
        const text = await response.text();

        let data = null;

        try {
          data = JSON.parse(text);
        } catch {
          const match = text.match(/=\s*(\[[\s\S]*\])\s*;?\s*$/);
          if (match) {
            try {
              data = JSON.parse(match[1]);
            } catch (err2) {
              console.error("Failed to parse extracted airport array:", err2);
            }
          }
        }

        if (Array.isArray(data)) {
          setAirports(data);
        } else if (data && Array.isArray(data.airports)) {
          setAirports(data.airports);
        } else {
          console.error("Could not extract airport array from response:", text.slice(0, 200));
        }
      } catch (error) {
        console.error("Failed to load airports:", error);
      }
    };

    loadAirports();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "origin") {
      searchAirports(value, setOriginSuggestions);
    }

    if (name === "destination") {
      searchAirports(value, setDestinationSuggestions);
    }
  };

  const searchAirports = (value, setSuggestions) => {
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const searchValue = value.toLowerCase();

    const results = airports
      .filter((airport) => {
        const city =
          airport.city ||
          airport.city_name ||
          airport.cityName ||
          airport.nameCity ||
          "";

        const airportName =
          airport.name ||
          airport.airport_name ||
          airport.nameAirport ||
          "";

        const iata =
          airport.iata ||
          airport.iata_code ||
          airport.code ||
          airport.codeIataAirport ||
          "";

        return (
          String(city).toLowerCase().includes(searchValue) ||
          String(airportName).toLowerCase().includes(searchValue) ||
          String(iata).toLowerCase().includes(searchValue)
        );
      })
      .slice(0, 8);

    setSuggestions(results);
  };

  const selectAirport = (airport, field) => {
    const city =
      airport.city ||
      airport.city_name ||
      airport.cityName ||
      airport.nameCity ||
      "";

    const airportName =
      airport.name ||
      airport.airport_name ||
      airport.nameAirport ||
      "";

    const iata =
      airport.iata ||
      airport.iata_code ||
      airport.code ||
      airport.codeIataAirport ||
      "";

    const displayValue = `${city}${iata ? ` (${iata})` : ""}`;

    setFormData((prev) => ({
      ...prev,
      [field]: displayValue,
    }));

    if (field === "origin") {
      setOriginSuggestions([]);
    } else {
      setDestinationSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      // 👇 Show the modal on success
      setShowThankYou(true);

      // Reset form
      setFormData({
        origin: "",
        destination: "",
        startDate: "",
        endDate: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            {/* Origin */}
            <div className="col-md-3 position-relative">
              <label className="form-label fw-semibold">Origin City</label>
              <input
                type="text"
                name="origin"
                className="form-control"
                placeholder="Enter origin city"
                value={formData.origin}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {originSuggestions.length > 0 && (
                <div className="list-group position-absolute w-100 shadow-sm airport-dropdown">
                  {originSuggestions.map((airport, index) => {
                    const city =
                      airport.city || airport.city_name || airport.cityName || airport.nameCity || "";
                    const airportName =
                      airport.name || airport.airport_name || airport.nameAirport || "";
                    const iata =
                      airport.iata || airport.iata_code || airport.code || airport.codeIataAirport || "";

                    return (
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                        key={index}
                        onClick={() => selectAirport(airport, "origin")}
                      >
                        <strong>{city} {iata && `(${iata})`}</strong>
                        {airportName && <small className="d-block text-muted">{airportName}</small>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Destination */}
            <div className="col-md-3 position-relative">
              <label className="form-label fw-semibold">Destination City</label>
              <input
                type="text"
                name="destination"
                className="form-control"
                placeholder="Enter destination city"
                value={formData.destination}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {destinationSuggestions.length > 0 && (
                <div className="list-group position-absolute w-100 shadow-sm airport-dropdown">
                  {destinationSuggestions.map((airport, index) => {
                    const city =
                      airport.city || airport.city_name || airport.cityName || airport.nameCity || "";
                    const airportName =
                      airport.name || airport.airport_name || airport.nameAirport || "";
                    const iata =
                      airport.iata || airport.iata_code || airport.code || airport.codeIataAirport || "";

                    return (
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                        key={index}
                        onClick={() => selectAirport(airport, "destination")}
                      >
                        <strong>{city} {iata && `(${iata})`}</strong>
                        {airportName && <small className="d-block text-muted">{airportName}</small>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Start Date */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="form-control"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* End Date */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">End Date</label>
              <input
                type="date"
                name="endDate"
                className="form-control"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Name */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <div className="col-3 mt-4 pt-4">
              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Search Flights"}
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* 👇 Thank You Modal */}
      {showThankYou && (
        <div className="thankyou-modal-overlay" onClick={() => setShowThankYou(false)}>
          <div className="thankyou-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="thankyou-close-btn"
              onClick={() => setShowThankYou(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="thankyou-title">Thank You!</h2>
            <p className="thankyou-text">
              for contacting us, Our Executive will get back to you at the earliest.
            </p>
            <p className="thankyou-deals">Looking for best deals?</p>
            <p className="thankyou-call-text">Call us to get best ever deal on flight!</p>
            <a href="tel:+917307713497" className="thankyou-phone">
              +91 73077 13497
            </a>
          </div>
        </div>
      )}

      <style>{`
        .airport-dropdown {
          z-index: 1050;
          max-height: 300px;
          overflow-y: auto;
        }
        label.form-label.fw-semibold {
          font-size: 14px;
          color: #595959;
          font-weight: 200 !important;
        }
        .airport-dropdown .list-group-item {
          cursor: pointer;
        }

        /* Thank You Modal Styles */
        .thankyou-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .thankyou-modal-card {
          background: #f5f6f8;
          border-radius: 16px;
          padding: 40px 30px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .thankyou-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #0067ee;
          color: #fff;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .thankyou-title {
          color: #0067ee;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 16px;
        }
        .thankyou-text {
          color: #333;
          font-size: 15px;
          margin-bottom: 20px;
        }
        .thankyou-deals {
          color: #e02424;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 8px;
        }
        .thankyou-call-text {
          color: #333;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .thankyou-phone {
          display: inline-block;
          color: #16a34a;
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default AirportSearchForm;