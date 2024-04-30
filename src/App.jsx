import React, { useState } from 'react';
import Iphone from './assets/iphone.png';
import './App.css';

const LANGUAGES = {
  UZBEKISH: 'uzbekish',
  ENGLISH: 'english',
  RUSSIAN: 'rus'
};

const templates = [
  {
    id: 1,
    name: "Tug'ilgan kun muborak bolsin!",
    texts: {
      uzbekish: "Mustaxkam sog'liklar dilerman! Omadli bo'ling!",
      english: "Happy birthday!",
      russian: "c днем рождения!"
    }
  },
  {
    id: 2,
    name: "Another templates",
    texts: {
      uzbekish: "Boshqa shablon matni",
      english: "Another template text",
      russian: "Другие тексты"
    }
  },
  {
    id: 3,
    name: "Another tEmplates",
    texts: {
      uzbekish: "Kutilmagan bo'libdi",
      english: "I can't wait",
      russian: "Жду не дождусь"
    }
  }
];

function App() {
  const [info, setInfo] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [language, setLanguage] = useState(LANGUAGES.UZBEKISH);

  const handleChange = (e) => {
    setInfo(e.target.value);
  }

  const handleTemplateChange = (e) => {
    const selectedTemplateName = e.target.value;
    setSelectedTemplate(selectedTemplateName);
    const selectedTemplateObj = templates.find(template => template.name === selectedTemplateName);
    if (selectedTemplateObj) {
      setInfo(selectedTemplateObj.texts[language]);
    }
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    const selectedTemplateObj = templates.find(template => template.name === selectedTemplate);
    if (selectedTemplateObj) {
      setInfo(selectedTemplateObj.texts[newLanguage]);
    }
  }

  return (
    <div className='container'>
      <div className="timeline"></div>
      <div className="main-wrapper">
        <div className="main-wrap-info">
          <h1 style={{color:'rgb(0, 136, 255)'}}>Habarning ko'rinishi</h1>
          <label>
            <span>Shablon</span>
            <select className='select' value={selectedTemplate} onChange={handleTemplateChange}>
              <option value="">Select a template</option>
              {templates.map(template => (
                <option key={template.id} value={template.name}>{template.name}</option>
              ))}
            </select>
          </label>
          <div className="textarea-container">
            <label>
              <span>Xabar</span><br />
              <div className="language-tabs">
                <button onClick={() => handleLanguageChange(LANGUAGES.UZBEKISH)}>Uzbekish</button>
                <button onClick={() => handleLanguageChange(LANGUAGES.ENGLISH)}>English</button>
                <button onClick={() => handleLanguageChange(LANGUAGES.RUSSIAN)}>Russian</button>
              </div>
              <textarea onChange={handleChange} value={info} className="textarea" ></textarea>
            </label>
          </div>
        </div>
        <div className="main-wrap-img">
          <img src={Iphone} alt="" />
          <div className='phone-info'>{info}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
