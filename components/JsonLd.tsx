export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Spiritual Home Tamil",
        "url": "https://spiritualhometamil.com",
        "logo": "https://spiritualhometamil.com/assets/logo.png",
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
            "email": "support@spiritualhometamil.com",
            "contactType": "customer support"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
