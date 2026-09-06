import React, { useEffect, useState } from "react";

const AIRPORTS_URL =
  "https://screenfeedcontent.blob.core.windows.net/html/airports.js";

const AirportSearchForm = () => {
  const [airports, setAirports] = useState([]);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    name: "",
    email: "",
    phone: "",
  });

  // Load airport data
 useEffect(() => {
  const loadAirports = async () => {
    try {
      const response = await fetch(AIRPORTS_URL);
      const text = await response.text();

      let data = null;

      // 1. Try pure JSON first
      try {
        data = JSON.parse(text);
      } catch {
        // 2. Fallback: pull the array literal out of "var airports = [...];"
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search Form Data:", formData);

    // Add your API call here
  };

  return (
    <div className="row">
   
        <div className="col-lg-12">
         
        
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* Origin */}
                  <div className="col-md-3 position-relative">
                    <label className="form-label fw-semibold">
                      Origin City
                    </label>

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
                            <button
                              type="button"
                              className="list-group-item list-group-item-action"
                              key={index}
                              onClick={() =>
                                selectAirport(airport, "origin")
                              }
                            >
                              <strong>
                                {city} {iata && `(${iata})`}
                              </strong>

                              {airportName && (
                                <small className="d-block text-muted">
                                  {airportName}
                                </small>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Destination */}
                  <div className="col-md-3 position-relative">
                    <label className="form-label fw-semibold">
                      Destination City
                    </label>

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
                            <button
                              type="button"
                              className="list-group-item list-group-item-action"
                              key={index}
                              onClick={() =>
                                selectAirport(airport, "destination")
                              }
                            >
                              <strong>
                                {city} {iata && `(${iata})`}
                              </strong>

                              {airportName && (
                                <small className="d-block text-muted">
                                  {airportName}
                                </small>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Start Date */}
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">
                      Start Date
                    </label>

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
                    <label className="form-label fw-semibold">
                      End Date
                    </label>

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
                    <label className="form-label fw-semibold">
                      Name
                    </label>

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
                    <label className="form-label fw-semibold">
                      Email
                    </label>

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
                    <label className="form-label fw-semibold">
                      Phone
                    </label>

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
                    >
                      Search Flights
                    </button>
                  </div>

                </div>
              </form>
            
        </div>
      

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
      `}</style>
    </div>
  );
};

export default AirportSearchForm;