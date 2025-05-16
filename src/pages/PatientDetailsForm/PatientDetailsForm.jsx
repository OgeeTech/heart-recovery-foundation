import React, { useState } from "react";
import "./PatientDetailsForm.css";
import Header from "../../layouts/Header/Header";
import Footer from "../../components/Footer/Footer";

const allergiesOptions = [
  "Rheumatic Fever",
  "Chronic Kidney Disease",
  "Allergies",
  "Hepatitis",
  "Epilepsy",
  "Sickle Cell Anemia",
  "Hypertension",
  "Pregnancy",
  "Diabetes Mellitus",
  "Irregular Heart Beat/Atrial Fibrillation",
  "Congestive Heart Failure",
  "Bleeding Disorder",
  "Stroke",
  "Family History Of Heart Disease",
];

const PatientDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    professional: "",
    patientDob: "",
    educationLevel: "Tertiary",
    maritalStatus: "Single",
    religion: "Christianity",
    sex: "Male",
    mobilePhone: "",
    workPhone: "",
    referralHospital: "",
    referringPhysician: "",
    physicianPhoneNumber: "",
    estimatedCostOfSurgery: "",
    amountRaised: "",
    annualIncome: "",
    partyResponsibleForPayment: "Myself",
    nameOfHealthInsuranceCompany: "",
    insuranceCompanyPhone: "",
    cardiacDiagnosis: "",
    relevantMedicalHistory: [],
    pastSurgicalHistory: "",
    currentMedications: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "relevantMedicalHistory") {
      // Toggle allergy in array
      let newHistory = [...formData.relevantMedicalHistory];
      if (checked) {
        newHistory.push(value);
      } else {
        newHistory = newHistory.filter((item) => item !== value);
      }
      setFormData((prev) => ({ ...prev, relevantMedicalHistory: newHistory }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to your API here
  };

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "emailAddress", label: "Email Address", type: "email" },
    { id: "professional", label: "Your Profession", type: "text" },
    { id: "patientDob", label: "Patient DOB", type: "date" },
    { id: "mobilePhone", label: "Mobile Phone", type: "tel" },
    { id: "workPhone", label: "Work Phone", type: "tel" },
    { id: "referralHospital", label: "Referral Hospital", type: "text" },
    { id: "referringPhysician", label: "Referring Physician", type: "text" },
    {
      id: "physicianPhoneNumber",
      label: "Physician Telephone Number",
      type: "tel",
    },
    {
      id: "estimatedCostOfSurgery",
      label: "Estimated Cost Of Surgery",
      type: "text",
    },
    { id: "amountRaised", label: "Amount Raised if any", type: "text" },
    { id: "annualIncome", label: "Annual Income", type: "text" },
    {
      id: "nameOfHealthInsuranceCompany",
      label: "Name Of Health Insurance Company",
      type: "text",
    },
    {
      id: "insuranceCompanyPhone",
      label: "Insurance Company Phone",
      type: "tel",
    },
    { id: "cardiacDiagnosis", label: "Cardiac Diagnosis", type: "text" },
  ];

  return (
    <>
    <Header/>
      <form className="patient-form" onSubmit={handleSubmit}>
        <h2>Patient Details Form</h2>

        <div className="grid-two-columns">
          {fields.map(({ id, label, type }) => (
            <div className="form-group" key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                placeholder={label}
                required
              />
            </div>
          ))}
        </div>

        {/* Select dropdowns */}
        <div className="grid-two-columns">
          {[
            {
              id: "educationLevel",
              label: "Highest Education Level",
              options: ["Tertiary", "Secondary", "Primary", "None"],
            },
            {
              id: "maritalStatus",
              label: "Marital Status",
              options: ["Single", "Married", "Divorced", "Widowed"],
            },
            {
              id: "religion",
              label: "Religion",
              options: ["Christianity", "Islam", "Traditional", "Others"],
            },
            {
              id: "sex",
              label: "Sex",
              options: ["Male", "Female"],
            },
            {
              id: "partyResponsibleForPayment",
              label: "Party Responsible For Payment",
              options: ["Myself", "Health Insurance", "Friends/Family/Others"],
            },
          ].map(({ id, label, options }) => (
            <div className="form-group" key={id}>
              <label htmlFor={id}>{label}</label>
              <select
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Allergies / Relevant Medical History as toggle pills */}
        <fieldset className="form-group allergies-group">
          <legend>Relevant Medical History (Select all that apply)</legend>
          <div className="allergies-options">
            {allergiesOptions.map((item) => (
              <label key={item} className="pill-checkbox">
                <input
                  type="checkbox"
                  name="relevantMedicalHistory"
                  value={item}
                  checked={formData.relevantMedicalHistory.includes(item)}
                  onChange={handleChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Textareas */}
        <div className="form-group">
          <label htmlFor="pastSurgicalHistory">Past Surgical History</label>
          <textarea
            id="pastSurgicalHistory"
            name="pastSurgicalHistory"
            value={formData.pastSurgicalHistory}
            onChange={handleChange}
            placeholder="Past Surgical History"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentMedications">Current Medications</label>
          <textarea
            id="currentMedications"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleChange}
            placeholder="Current Medications"
            rows={3}
          />
        </div>

        <button type="submit" className="btn-submit">
          Send Form
        </button>
      </form>
      <Footer/>
    </>
  );
};

export default PatientDetailsForm;
