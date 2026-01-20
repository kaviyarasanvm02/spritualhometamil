export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.spritualhometamil.com/#organization",
                "name": "Spiritual Home Tamil",
                "url": "https://www.spritualhometamil.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.spritualhometamil.com/assets/logo.png",
                    "width": 800,
                    "height": 800,
                    "caption": "Spiritual Home Tamil Logo"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Stanlee Varun"
                },
                "description": "Premium platform for spiritual growth, law of attraction, and ancient wisdom in Tamil.",
                "sameAs": [
                    "https://youtube.com/@spiritualhometamil?si=k3WvWfBsSX0tz5Kg",
                    "https://www.instagram.com/spiritual_home_tamil_?igsh=MWNpcXo0MDhpc2YyOA=="
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@spritualhometamil.com",
                    "contactType": "customer support"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.spritualhometamil.com/#website",
                "url": "https://www.spritualhometamil.com",
                "name": "Spiritual Home Tamil",
                "description": "Transform Your Life Spiritually",
                "publisher": {
                    "@id": "https://www.spritualhometamil.com/#organization"
                },
                "inLanguage": "ta-IN"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
