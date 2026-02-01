import { useI18n } from '../i18n'
import './AboutPage.css'

export function AboutPage() {
    const { t } = useI18n()

    return (
        <div className="about-page page-transition">
            <div className="about-hero">
                <img src="/hero_autoservice.png" alt="Autoservisas" className="about-hero-bg" />
                <div className="about-hero-overlay">
                    <div className="container">
                        <span className="section-tag">{t('tag.about')}</span>
                        <h1>{t('about.title')}</h1>
                        <p>{t('about.subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <div className="container">
                    {/* Story Section - Simple two column */}
                    <section className="story-section">
                        <div className="story-left">
                            <h2>Mūsų istorija</h2>
                            <p>{t('about.text1')}</p>
                            <p>{t('about.text2')}</p>
                            <p>{t('about.text3')}</p>
                        </div>
                        <div className="story-right">
                            <div className="timeline-box">
                                <div className="timeline-row">
                                    <span className="t-year">1996</span>
                                    <span className="t-event">Įmonės įkūrimas</span>
                                </div>
                                <div className="timeline-row">
                                    <span className="t-year">2000</span>
                                    <span className="t-event">Autoserviso plėtra</span>
                                </div>
                                <div className="timeline-row">
                                    <span className="t-year">2010</span>
                                    <span className="t-event">Krovinių pervežimai</span>
                                </div>
                                <div className="timeline-row highlight">
                                    <span className="t-year">2024</span>
                                    <span className="t-event">28+ metų patirtis</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Facts Section */}
                    <section className="facts-section">
                        <h2>Kodėl mes?</h2>
                        <div className="facts-grid">
                            <div className="fact-card">
                                <span className="fact-icon">📅</span>
                                <span className="fact-text">{t('about.fact1')}</span>
                            </div>
                            <div className="fact-card">
                                <span className="fact-icon">📋</span>
                                <span className="fact-text">{t('about.fact2')}</span>
                            </div>
                            <div className="fact-card">
                                <span className="fact-icon">👥</span>
                                <span className="fact-text">{t('about.fact3')}</span>
                            </div>
                            <div className="fact-card">
                                <span className="fact-icon">🔧</span>
                                <span className="fact-text">{t('about.fact4')}</span>
                            </div>
                            <div className="fact-card">
                                <span className="fact-icon">🚚</span>
                                <span className="fact-text">{t('about.fact5')}</span>
                            </div>
                            <div className="fact-card">
                                <span className="fact-icon">📡</span>
                                <span className="fact-text">{t('about.fact6')}</span>
                            </div>
                        </div>
                    </section>

                    {/* Company Info */}
                    <section className="company-section">
                        <h2>Įmonės informacija</h2>
                        <div className="company-grid">
                            <div className="company-card">
                                <h4>Juridinis pavadinimas</h4>
                                <p>UAB „Vegesta"</p>
                            </div>
                            <div className="company-card">
                                <h4>Prekės ženklas</h4>
                                <p>Europadangos</p>
                            </div>
                            <div className="company-card">
                                <h4>Įmonės kodas</h4>
                                <p>123639588</p>
                            </div>
                            <div className="company-card">
                                <h4>Įkurta</h4>
                                <p>1996.06.28</p>
                            </div>
                            <div className="company-card">
                                <h4>Adresas</h4>
                                <p>Kirtimų g. 59C, Vilnius</p>
                            </div>
                            <div className="company-card">
                                <h4>Veikla</h4>
                                <p>Padangos, dalys, pervežimas</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
